# Shared Contact API

Минимальный backend для контактных форм StalarVision и StalarLegal.

API остаётся одним локальным сервисом. Он принимает только явный `source` из allowlist:

```text
stalarvision
stalarlegal
```

`source` используется как routing metadata для выбора схемы, версии согласия, email-представления и rate-limit bucket. Это не security boundary.

Секреты нельзя коммитить в репозиторий.

## Адрес

API слушает только локальный интерфейс:

```text
127.0.0.1:8010
```

Backend нельзя выставлять напрямую наружу. Публичный доступ должен идти только через осознанно настроенный reverse proxy. Этот этап не добавляет CORS, публичный bind или новую deployment topology.

Endpoints:

```text
POST /api/contact
GET /health
```

## Environment Variables

Создайте локальный `.env` или передайте переменные через окружение PM2/systemd. Файл `.env` игнорируется git.

```text
CONTACT_API_HOST=127.0.0.1
CONTACT_API_PORT=8010
TRUST_PROXY=false

SMTP_HOST=smtp.beget.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@example.test
SMTP_PASSWORD=replace-with-secret

CONTACT_FROM=info@example.test
CONTACT_TO=info@example.test

CONSENT_LOG_PATH=./data/consent-log.jsonl
```

`SMTP_PASSWORD` должен приходить только из environment variables. Не записывайте реальные пароли в git, README, ecosystem config или frontend.

`CONTACT_FROM` и `CONTACT_TO` остаются общими для сервиса. Отдельные SMTP-системы для сайтов не добавлены.

## Consent Versions

Backend использует server-side mapping:

```js
{
  stalarvision: '2026-08-23',
  stalarlegal: '2026-08-31',
}
```

Frontend обязан передавать свою версию согласия, но backend не полагается на frontend-константы при проверке.

## Payload: StalarVision

```json
{
  "source": "stalarvision",
  "name": "Иван",
  "contact": "ivan@example.com",
  "projectType": "Новый сайт / первый релиз",
  "project": "Нужно обсудить первый этап проекта.",
  "consent": true,
  "consentVersion": "2026-08-23",
  "honeypot": ""
}
```

Limits:

```text
name <= 80
contact <= 120
projectType <= 120
project <= 2000
```

## Payload: StalarLegal

```json
{
  "source": "stalarlegal",
  "name": "Иван",
  "contact": "ivan@example.com",
  "matterType": "IT-договор",
  "message": "Нужно разобрать договор по цифровому продукту.",
  "consent": true,
  "consentVersion": "2026-08-31",
  "honeypot": ""
}
```

Allowed `matterType` values:

```text
IT-договор
Претензионная работа
IT-спор
Представительство
Контрольные и надзорные органы
Legal Engineering
Другое
```

Limits:

```text
name <= 80
contact <= 120
message <= 3000
```

## Response Contract

Successful real request:

```json
{"ok":true,"requestId":"..."}
```

Honeypot request returns neutral success without mail or consent log:

```json
{"ok":true}
```

Invalid request returns `400`. Invalid consent returns:

```json
{"ok":false,"error":"invalid_consent"}
```

Oversized body returns `413`, rate limit returns `429`, processing failure returns `500`. Responses do not echo user payload, stack traces or SMTP details.

## Consent Log

After successful email delivery API appends one JSON Lines record to `CONSENT_LOG_PATH`:

```json
{
  "request_id": "...",
  "source": "stalarvision",
  "consent_version": "2026-08-23",
  "consent_at": "...",
  "received_at": "..."
}
```

Old historical records may not contain `source`.

The consent log must not contain name, contact, category, message, honeypot, IP, User-Agent or Referer.

## Rate Limit

Valid requests are limited to 5 requests per 15 minutes. The bucket is derived from:

```text
source + client key
```

This keeps StalarVision and StalarLegal from consuming each other's quota for the same client key. The derived key is not logged.

`TRUST_PROXY` semantics remain unchanged.

## Локальный запуск

Production entrypoint: `src/index.js`. Файл `src/server.js` содержит реализацию сервера и экспортируемые функции без самостоятельного автозапуска при import.

```bash
cd server/contact-api
npm install
CONTACT_API_HOST=127.0.0.1 CONTACT_API_PORT=8010 \
TRUST_PROXY=false \
SMTP_HOST=smtp.beget.com SMTP_PORT=465 SMTP_SECURE=true \
SMTP_USER=info@example.test SMTP_PASSWORD=replace-with-secret \
CONTACT_FROM=info@example.test CONTACT_TO=info@example.test \
CONSENT_LOG_PATH=./data/consent-log.jsonl \
npm start
```

## Health Check

```bash
curl -i http://127.0.0.1:8010/health
```

Expected:

```json
{"status":"ok"}
```

## PM2

Файл `ecosystem.config.cjs` содержит только безопасные параметры процесса. Секреты SMTP нужно передавать через окружение сервера или PM2 без записи в репозиторий.

PM2 запускает `src/index.js` в `fork` mode с `instances: 1`, чтобы локальный HTTP server корректно слушал `127.0.0.1:8010`.

```bash
cd server/contact-api
pm2 start ecosystem.config.cjs --env production
```

Перед запуском убедитесь, что обязательные переменные окружения доступны процессу.

## Тесты

```bash
cd server/contact-api
npm test
```

Тесты используют `node:test`, stub mailer и временный consent log. Реальная SMTP-отправка в тестах не выполняется.
