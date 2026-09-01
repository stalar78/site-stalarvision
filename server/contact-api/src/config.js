export const CONSENT_PERSONAL_DATA_VERSIONS = {
  stalarvision: '2026-08-23',
  stalarlegal: '2026-08-31',
};

const REQUIRED_ENV_KEYS = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_SECURE',
  'SMTP_USER',
  'SMTP_PASSWORD',
  'CONTACT_FROM',
  'CONTACT_TO',
  'CONSENT_LOG_PATH',
];

const ALLOWED_HOSTS = new Set(['127.0.0.1', '::1']);

const parsePort = (value, key) => {
  const port = Number.parseInt(value, 10);

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error(`Invalid ${key}`);
  }

  return port;
};

const parseBoolean = (value, key) => {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  throw new Error(`Invalid ${key}`);
};

export function loadConfig(env = process.env) {
  const missingKeys = REQUIRED_ENV_KEYS.filter((key) => !env[key]);

  if (missingKeys.length > 0) {
    throw new Error(`Missing required environment variables: ${missingKeys.join(', ')}`);
  }

  const host = env.CONTACT_API_HOST || '127.0.0.1';

  if (!ALLOWED_HOSTS.has(host)) {
    throw new Error('Invalid CONTACT_API_HOST');
  }

  return {
    host,
    port: env.CONTACT_API_PORT ? parsePort(env.CONTACT_API_PORT, 'CONTACT_API_PORT') : 8010,
    trustProxy: env.TRUST_PROXY ? parseBoolean(env.TRUST_PROXY, 'TRUST_PROXY') : false,
    smtp: {
      host: env.SMTP_HOST,
      port: parsePort(env.SMTP_PORT, 'SMTP_PORT'),
      secure: parseBoolean(env.SMTP_SECURE, 'SMTP_SECURE'),
      user: env.SMTP_USER,
      password: env.SMTP_PASSWORD,
    },
    contact: {
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO,
    },
    consentLogPath: env.CONSENT_LOG_PATH,
    consentPersonalDataVersions: CONSENT_PERSONAL_DATA_VERSIONS,
    bodyLimitBytes: 16 * 1024,
    rateLimit: {
      limit: 5,
      windowMs: 15 * 60 * 1000,
    },
  };
}
