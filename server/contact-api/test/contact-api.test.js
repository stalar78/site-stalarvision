import { afterEach, beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadConfig } from '../src/config.js';
import { createContactApiServer } from '../src/server.js';
import { createRateLimiter, getClientKey } from '../src/rateLimit.js';
import { buildContactEmail } from '../src/mailer.js';

const baseConfig = (consentLogPath) => ({
  host: '127.0.0.1',
  port: 0,
  smtp: {
    host: 'smtp.example.test',
    port: 465,
    secure: true,
    user: 'user@example.test',
    password: 'secret',
  },
  contact: {
    from: 'info@example.test',
    to: 'info@example.test',
  },
  consentLogPath,
  consentPersonalDataVersions: {
    stalarvision: '2026-08-23',
    stalarlegal: '2026-08-31',
  },
  bodyLimitBytes: 16 * 1024,
  rateLimit: {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  },
  trustProxy: false,
});

const validPayload = {
  source: 'stalarvision',
  name: 'Станислав',
  contact: 'client@example.test',
  projectType: 'Новый сайт / первый релиз',
  project: 'Нужно обсудить первый этап проекта.',
  consent: true,
  consentVersion: '2026-08-23',
  honeypot: '',
};

const validLegalPayload = {
  source: 'stalarlegal',
  name: 'Иван',
  contact: 'legal-client@example.test',
  matterType: 'IT-спор',
  message: 'Нужно разобрать спор по цифровому продукту.',
  consent: true,
  consentVersion: '2026-08-31',
  honeypot: '',
};

const listen = (server) =>
  new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve(server.address().port);
    });
  });

const close = (server) =>
  new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });

const postJson = (baseUrl, body, headers = {}) =>
  fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...headers,
    },
    body,
  });

const requiredEnv = {
  SMTP_HOST: 'smtp.example.test',
  SMTP_PORT: '465',
  SMTP_SECURE: 'true',
  SMTP_USER: 'user@example.test',
  SMTP_PASSWORD: 'secret',
  CONTACT_FROM: 'info@example.test',
  CONTACT_TO: 'info@example.test',
  CONSENT_LOG_PATH: './data/consent-log.jsonl',
};

describe('config', () => {
  it('rejects non-loopback bind address', () => {
    assert.throws(
      () => loadConfig({ ...requiredEnv, CONTACT_API_HOST: '192.0.2.10' }),
      /Invalid CONTACT_API_HOST/,
    );
  });

  it('defaults trust proxy to false', () => {
    const config = loadConfig(requiredEnv);
    assert.equal(config.host, '127.0.0.1');
    assert.equal(config.trustProxy, false);
  });

  it('parses trust proxy when explicitly enabled', () => {
    const config = loadConfig({ ...requiredEnv, TRUST_PROXY: 'true' });
    assert.equal(config.trustProxy, true);
  });
});

describe('client key', () => {
  const request = {
    headers: {
      'x-forwarded-for': '203.0.113.10, 198.51.100.5',
    },
    socket: {
      remoteAddress: '127.0.0.1',
    },
  };

  it('ignores X-Forwarded-For when trustProxy is false', () => {
    assert.equal(getClientKey(request, { trustProxy: false }), '127.0.0.1');
  });

  it('uses first X-Forwarded-For address when trustProxy is true', () => {
    assert.equal(getClientKey(request, { trustProxy: true }), '203.0.113.10');
  });
});

describe('contact api', () => {
  let tempDir;
  let server;
  let baseUrl;
  let sentMessages;
  let config;

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'stalarvision-contact-api-'));
    sentMessages = [];
    config = baseConfig(join(tempDir, 'consent-log.jsonl'));
    server = createContactApiServer({
      config,
      mailer: {
        async sendContactEmail(message) {
          sentMessages.push(message);
        },
      },
      rateLimiter: createRateLimiter(config.rateLimit),
      idFactory: () => '00000000-0000-4000-8000-000000000001',
      now: () => new Date('2026-08-24T10:00:00.000Z'),
    });
    const port = await listen(server);
    baseUrl = `http://127.0.0.1:${port}`;
  });

  afterEach(async () => {
    if (server?.listening) {
      await close(server);
    }

    await rm(tempDir, { recursive: true, force: true });
  });

  it('returns health status', async () => {
    const response = await fetch(`${baseUrl}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'ok' });
  });

  it('rejects malformed JSON', async () => {
    const response = await postJson(baseUrl, '{');
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects empty required fields', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validPayload, name: '' }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects consent false', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validPayload, consent: false }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects wrong consent version', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validPayload, consentVersion: '2026-01-01' }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_consent' });
  });

  it('rejects missing source', async () => {
    const { source, ...payloadWithoutSource } = validPayload;
    const response = await postJson(baseUrl, JSON.stringify(payloadWithoutSource));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects unknown source', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validPayload, source: 'unknown' }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('returns neutral success for honeypot without sending mail', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validPayload, honeypot: 'filled' }));
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
    assert.equal(sentMessages.length, 0);

    await assert.rejects(stat(config.consentLogPath));
  });

  it('rejects oversized body', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validPayload, project: 'x'.repeat(20 * 1024) }));
    assert.equal(response.status, 413);
    assert.deepEqual(await response.json(), { ok: false, error: 'request_too_large' });
  });

  it('sends valid payload and writes consent log', async () => {
    const response = await postJson(baseUrl, JSON.stringify(validPayload));
    assert.equal(response.status, 201);
    assert.deepEqual(await response.json(), {
      ok: true,
      requestId: '00000000-0000-4000-8000-000000000001',
    });
    assert.equal(sentMessages.length, 1);

    const consentLog = await readFile(config.consentLogPath, 'utf8');
    assert.deepEqual(JSON.parse(consentLog.trim()), {
      request_id: '00000000-0000-4000-8000-000000000001',
      source: 'stalarvision',
      consent_version: '2026-08-23',
      consent_at: '2026-08-24T10:00:00.000Z',
      received_at: '2026-08-24T10:00:00.000Z',
    });
  });

  it('sends normalized StalarVision payload', async () => {
    const response = await postJson(baseUrl, JSON.stringify(validPayload));
    assert.equal(response.status, 201);
    assert.deepEqual(sentMessages[0], {
      requestId: '00000000-0000-4000-8000-000000000001',
      source: 'stalarvision',
      receivedAt: '2026-08-24T10:00:00.000Z',
      consentAt: '2026-08-24T10:00:00.000Z',
      consentVersion: '2026-08-23',
      name: 'Станислав',
      contact: 'client@example.test',
      category: 'Новый сайт / первый релиз',
      message: 'Нужно обсудить первый этап проекта.',
    });
    assert.equal('projectType' in sentMessages[0], false);
    assert.equal('project' in sentMessages[0], false);
    assert.equal('matterType' in sentMessages[0], false);
  });

  it('accepts StalarLegal payload', async () => {
    const response = await postJson(baseUrl, JSON.stringify(validLegalPayload));
    assert.equal(response.status, 201);
    assert.deepEqual(await response.json(), {
      ok: true,
      requestId: '00000000-0000-4000-8000-000000000001',
    });
    assert.deepEqual(sentMessages[0], {
      requestId: '00000000-0000-4000-8000-000000000001',
      source: 'stalarlegal',
      receivedAt: '2026-08-24T10:00:00.000Z',
      consentAt: '2026-08-24T10:00:00.000Z',
      consentVersion: '2026-08-31',
      name: 'Иван',
      contact: 'legal-client@example.test',
      category: 'IT-спор',
      message: 'Нужно разобрать спор по цифровому продукту.',
    });
  });

  it('rejects wrong StalarVision consent version', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validPayload, consentVersion: '2026-08-31' }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_consent' });
  });

  it('rejects wrong StalarLegal consent version', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validLegalPayload, consentVersion: '2026-08-23' }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_consent' });
  });

  it('rejects StalarVision payload without projectType', async () => {
    const { projectType, ...payloadWithoutProjectType } = validPayload;
    const response = await postJson(baseUrl, JSON.stringify(payloadWithoutProjectType));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects StalarVision payload without project', async () => {
    const { project, ...payloadWithoutProject } = validPayload;
    const response = await postJson(baseUrl, JSON.stringify(payloadWithoutProject));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects StalarLegal-only schema as StalarVision payload', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validLegalPayload, source: 'stalarvision' }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects StalarLegal payload with unknown matterType', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validLegalPayload, matterType: 'Новый сайт' }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects StalarLegal payload without matterType', async () => {
    const { matterType, ...payloadWithoutMatterType } = validLegalPayload;
    const response = await postJson(baseUrl, JSON.stringify(payloadWithoutMatterType));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects StalarLegal payload without message', async () => {
    const { message, ...payloadWithoutMessage } = validLegalPayload;
    const response = await postJson(baseUrl, JSON.stringify(payloadWithoutMessage));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects StalarLegal message over 3000 characters', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validLegalPayload, message: 'x'.repeat(3001) }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('rejects StalarVision-only schema as StalarLegal payload', async () => {
    const response = await postJson(baseUrl, JSON.stringify({ ...validPayload, source: 'stalarlegal' }));
    assert.equal(response.status, 400);
    assert.deepEqual(await response.json(), { ok: false, error: 'invalid_request' });
  });

  it('does not store user payload in consent log', async () => {
    const response = await postJson(baseUrl, JSON.stringify(validLegalPayload));
    assert.equal(response.status, 201);

    const consentLog = await readFile(config.consentLogPath, 'utf8');
    const record = JSON.parse(consentLog.trim());
    assert.equal(record.source, 'stalarlegal');
    assert.equal('name' in record, false);
    assert.equal('contact' in record, false);
    assert.equal('category' in record, false);
    assert.equal('message' in record, false);
    assert.equal('honeypot' in record, false);
  });

  it('does not write consent log when mail sending fails', async () => {
    await close(server);
    server = createContactApiServer({
      config,
      mailer: {
        async sendContactEmail() {
          throw new Error('smtp_failed');
        },
      },
      rateLimiter: createRateLimiter(config.rateLimit),
      idFactory: () => '00000000-0000-4000-8000-000000000002',
      now: () => new Date('2026-08-24T10:00:00.000Z'),
    });
    const port = await listen(server);
    baseUrl = `http://127.0.0.1:${port}`;

    const response = await postJson(baseUrl, JSON.stringify(validPayload));
    assert.equal(response.status, 500);
    assert.deepEqual(await response.json(), { ok: false, error: 'service_unavailable' });
    await assert.rejects(stat(config.consentLogPath));
  });

  it('rate limits valid attempts', async () => {
    for (let index = 0; index < 5; index += 1) {
      const response = await postJson(baseUrl, JSON.stringify(validPayload));
      assert.equal(response.status, 201);
    }

    const response = await postJson(baseUrl, JSON.stringify(validPayload));
    assert.equal(response.status, 429);
    assert.equal(response.headers.get('retry-after'), '900');
    assert.deepEqual(await response.json(), { ok: false, error: 'rate_limited' });
  });

  it('uses independent rate-limit buckets per source', async () => {
    for (let index = 0; index < 5; index += 1) {
      const response = await postJson(baseUrl, JSON.stringify(validPayload));
      assert.equal(response.status, 201);
    }

    const legalResponse = await postJson(baseUrl, JSON.stringify(validLegalPayload));
    assert.equal(legalResponse.status, 201);
  });
});

describe('contact email builder', () => {
  const config = baseConfig('./data/consent-log.jsonl');
  const baseMessage = {
    requestId: 'request-1',
    source: 'stalarvision',
    receivedAt: '2026-08-24T10:00:00.000Z',
    consentAt: '2026-08-24T10:00:00.000Z',
    consentVersion: '2026-08-23',
    name: 'Станислав',
    contact: 'client@example.test',
    category: 'Новый сайт / первый релиз',
    message: 'Описание проекта.',
  };

  it('builds StalarVision email subject and labels', () => {
    const email = buildContactEmail({ config, message: baseMessage });
    assert.equal(email.subject, 'Новое обращение с stalarvision.ru — request-1');
    assert.match(email.text, /Источник: StalarVision/);
    assert.match(email.text, /Тип проекта: Новый сайт \/ первый релиз/);
    assert.match(email.text, /Описание:\nОписание проекта\./);
  });

  it('builds StalarLegal email subject and labels', () => {
    const email = buildContactEmail({
      config,
      message: {
        ...baseMessage,
        source: 'stalarlegal',
        consentVersion: '2026-08-31',
        category: 'IT-договор',
        message: 'Описание ситуации.',
      },
    });
    assert.equal(email.subject, 'Новое обращение StalarLegal — request-1');
    assert.match(email.text, /Источник: StalarLegal/);
    assert.match(email.text, /Характер обращения: IT-договор/);
    assert.match(email.text, /Описание ситуации:\nОписание ситуации\./);
  });

  it('uses safe email contact as replyTo', () => {
    const email = buildContactEmail({ config, message: baseMessage });
    assert.equal(email.replyTo, 'client@example.test');
  });

  it('does not use Telegram or phone contact as replyTo', () => {
    const telegramEmail = buildContactEmail({ config, message: { ...baseMessage, contact: '@stalar' } });
    const phoneEmail = buildContactEmail({ config, message: { ...baseMessage, contact: '+7 999 000-00-00' } });
    assert.equal('replyTo' in telegramEmail, false);
    assert.equal('replyTo' in phoneEmail, false);
  });
});
