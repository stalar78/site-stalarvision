import { afterEach, beforeEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { loadConfig } from '../src/config.js';
import { createContactApiServer, isMainModule } from '../src/server.js';
import { createRateLimiter, getClientKey } from '../src/rateLimit.js';

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
  consentVersion: '2026-08-23',
  bodyLimitBytes: 16 * 1024,
  rateLimit: {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  },
  trustProxy: false,
});

const validPayload = {
  name: 'Станислав',
  contact: 'client@example.test',
  projectType: 'Новый сайт / первый релиз',
  project: 'Нужно обсудить первый этап проекта.',
  consent: true,
  consentVersion: '2026-08-23',
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
      () => loadConfig({ ...requiredEnv, CONTACT_API_HOST: '0.0.0.0' }),
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

describe('main module helper', () => {
  it('detects the current entry file with resolve semantics', () => {
    const moduleUrl = new URL('../src/server.js', import.meta.url).href;
    assert.equal(isMainModule(resolve('src/server.js'), moduleUrl), true);
  });

  it('returns false when argv is missing', () => {
    assert.equal(isMainModule(undefined), false);
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
      consent_version: '2026-08-23',
      consent_at: '2026-08-24T10:00:00.000Z',
      received_at: '2026-08-24T10:00:00.000Z',
    });
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
});
