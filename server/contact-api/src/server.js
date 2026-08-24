import { appendFile, mkdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname } from 'node:path';
import { randomUUID } from 'node:crypto';
import { createMailer } from './mailer.js';
import { loadConfig } from './config.js';
import { createRateLimiter, getClientKey } from './rateLimit.js';
import { validateContactPayload } from './validation.js';

const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
};

const sendJson = (response, statusCode, body, headers = {}) => {
  response.writeHead(statusCode, { ...JSON_HEADERS, ...headers });
  response.end(JSON.stringify(body));
};

const readJsonBody = (request, limitBytes) =>
  new Promise((resolve, reject) => {
    let size = 0;
    let isTooLarge = false;
    const chunks = [];

    request.on('data', (chunk) => {
      size += chunk.length;

      if (size > limitBytes) {
        isTooLarge = true;
        return;
      }

      if (!isTooLarge) {
        chunks.push(chunk);
      }
    });

    request.on('end', () => {
      if (isTooLarge) {
        reject(Object.assign(new Error('request_body_too_large'), { statusCode: 413 }));
        return;
      }

      try {
        const rawBody = Buffer.concat(chunks).toString('utf8');
        resolve(rawBody ? JSON.parse(rawBody) : {});
      } catch {
        reject(Object.assign(new Error('malformed_json'), { statusCode: 400 }));
      }
    });

    request.on('error', reject);
  });

const appendConsentRecord = async (filePath, record) => {
  await mkdir(dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(record)}\n`, 'utf8');
};

const logRequest = ({ requestId = '-', statusCode, message }) => {
  console.log(JSON.stringify({
    request_id: requestId,
    status: statusCode,
    message,
  }));
};

export function createContactApiServer({ config, mailer, rateLimiter, idFactory = randomUUID, now = () => new Date() }) {
  const activeConfig = config;
  const activeMailer = mailer || createMailer(activeConfig);
  const activeRateLimiter = rateLimiter || createRateLimiter(activeConfig.rateLimit);

  return createServer(async (request, response) => {
    const url = new URL(request.url || '/', 'http://127.0.0.1');

    if (url.pathname === '/health') {
      if (request.method !== 'GET') {
        sendJson(response, 405, { ok: false, error: 'method_not_allowed' }, { allow: 'GET' });
        return;
      }

      sendJson(response, 200, { status: 'ok' });
      return;
    }

    if (url.pathname !== '/api/contact') {
      sendJson(response, 404, { ok: false, error: 'not_found' });
      return;
    }

    if (request.method !== 'POST') {
      sendJson(response, 405, { ok: false, error: 'method_not_allowed' }, { allow: 'POST' });
      return;
    }

    let payload;

    try {
      payload = await readJsonBody(request, activeConfig.bodyLimitBytes);
    } catch (error) {
      const statusCode = error.statusCode === 413 ? 413 : 400;
      sendJson(response, statusCode, { ok: false, error: statusCode === 413 ? 'request_too_large' : 'invalid_request' });
      logRequest({ statusCode, message: error.message });
      return;
    }

    const validation = validateContactPayload(payload, activeConfig.consentVersion);

    if (validation.spam) {
      sendJson(response, 200, { ok: true });
      logRequest({ statusCode: 200, message: 'honeypot' });
      return;
    }

    if (!validation.ok) {
      const error = validation.error === 'invalid_consent' ? 'invalid_consent' : 'invalid_request';
      sendJson(response, 400, { ok: false, error });
      logRequest({ statusCode: 400, message: error });
      return;
    }

    const clientKey = getClientKey(request);
    const rateLimitResult = activeRateLimiter.consume(clientKey);

    if (!rateLimitResult.allowed) {
      sendJson(
        response,
        429,
        { ok: false, error: 'rate_limited' },
        { 'retry-after': String(rateLimitResult.retryAfterSeconds) },
      );
      logRequest({ statusCode: 429, message: 'rate_limited' });
      return;
    }

    const requestId = idFactory();
    const receivedAt = now().toISOString();
    const consentAt = receivedAt;
    const message = {
      requestId,
      receivedAt,
      consentAt,
      consentVersion: validation.data.consentVersion,
      name: validation.data.name,
      contact: validation.data.contact,
      projectType: validation.data.projectType,
      project: validation.data.project,
    };

    try {
      await activeMailer.sendContactEmail(message);
      await appendConsentRecord(activeConfig.consentLogPath, {
        request_id: requestId,
        consent_version: validation.data.consentVersion,
        consent_at: consentAt,
        received_at: receivedAt,
      });
    } catch (error) {
      console.error(JSON.stringify({
        request_id: requestId,
        status: 500,
        message: error.message,
      }));
      sendJson(response, 500, { ok: false, error: 'service_unavailable' });
      return;
    }

    sendJson(response, 201, { ok: true, requestId });
    logRequest({ requestId, statusCode: 201, message: 'created' });
  });
}

export function startServer(config = loadConfig()) {
  const server = createContactApiServer({ config });

  server.listen(config.port, config.host, () => {
    console.log(JSON.stringify({
      message: 'contact_api_started',
      host: config.host,
      port: config.port,
    }));
  });

  const shutdown = (signal) => {
    console.log(JSON.stringify({ message: 'contact_api_shutdown', signal }));
    server.close(() => {
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));

  return server;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    startServer();
  } catch (error) {
    console.error(JSON.stringify({
      message: 'contact_api_start_failed',
      error: error.message,
    }));
    process.exit(1);
  }
}
