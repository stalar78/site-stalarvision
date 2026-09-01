import nodemailer from 'nodemailer';

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

export function isSafeEmail(value) {
  return typeof value === 'string' && !/[\r\n]/.test(value) && EMAIL_PATTERN.test(value.trim());
}

export function createMailer(config) {
  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.password,
    },
  });

  return {
    sendContactEmail(message) {
      return sendContactEmail({ transporter, config, message });
    },
  };
}

export function buildContactEmail({ config, message }) {
  const isStalarLegal = message.source === 'stalarlegal';
  const subject =
    isStalarLegal
      ? `Новое обращение StalarLegal — ${message.requestId}`
      : `Новое обращение с stalarvision.ru — ${message.requestId}`;
  const sourceLabel = isStalarLegal ? 'StalarLegal' : 'StalarVision';
  const categoryLabel = isStalarLegal ? 'Характер обращения' : 'Тип проекта';
  const messageLabel = isStalarLegal ? 'Описание ситуации' : 'Описание';

  const text = [
    `request_id: ${message.requestId}`,
    `received_at: ${message.receivedAt}`,
    `consent_at: ${message.consentAt}`,
    `consent_version: ${message.consentVersion}`,
    '',
    `Источник: ${sourceLabel}`,
    `Имя: ${message.name}`,
    `Контакт: ${message.contact}`,
    `${categoryLabel}: ${message.category}`,
    '',
    `${messageLabel}:`,
    message.message,
  ].join('\n');

  const mail = {
    from: config.contact.from,
    to: config.contact.to,
    subject,
    text,
  };

  if (isSafeEmail(message.contact)) {
    mail.replyTo = message.contact.trim();
  }

  return mail;
}

export async function sendContactEmail({ transporter, config, message }) {
  await transporter.sendMail(buildContactEmail({ config, message }));
}
