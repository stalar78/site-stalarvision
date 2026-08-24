# StalarVision Contact API

Минимальный собственный backend для будущей контактной формы StalarVision.

Stage B1 подготавливает локальный API, но frontend и Nginx ещё не подключены. Проверка выполняется через `curl` или тесты. Секреты нельзя коммитить в репозиторий.

## Адрес

API слушает только локальный интерфейс:

```text
127.0.0.1:8010
```

Backend нельзя выставлять напрямую наружу. В Stage B1 используется локальный bind и `TRUST_PROXY=false`.
При подключении к Nginx в Stage B2 значение `TRUST_PROXY` будет изменено осознанно, вместе с настройкой доверенного reverse proxy.

Планируемый endpoint после настройки Nginx:

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
SMTP_USER=info@stalarvision.ru
SMTP_PASSWORD=replace-with-secret

CONTACT_FROM=info@stalarvision.ru
CONTACT_TO=info@stalarvision.ru

CONSENT_LOG_PATH=./data/consent-log.jsonl
```

`SMTP_PASSWORD` должен приходить только из environment variables. Не записывайте реальные пароли в git, README, ecosystem config или frontend.

## Consent Version

Backend использует собственную server-side константу:

```text
CONSENT_PERSONAL_DATA_VERSION=2026-08-23
```

При изменении текста согласия нужно синхронно обновить frontend-константу в `src/data/legal.ts` и backend-константу в `server/contact-api/src/config.js`.

## Consent Log

После успешной отправки email API добавляет одну JSON Lines запись в `CONSENT_LOG_PATH`:

```json
{
  "request_id": "...",
  "consent_version": "2026-08-23",
  "consent_at": "...",
  "received_at": "..."
}
```

В consent log не записываются имя, контакт, текст обращения, honeypot, User-Agent, Referer или IP.

## Локальный запуск

```bash
cd server/contact-api
npm install
CONTACT_API_HOST=127.0.0.1 CONTACT_API_PORT=8010 \
TRUST_PROXY=false \
SMTP_HOST=smtp.beget.com SMTP_PORT=465 SMTP_SECURE=true \
SMTP_USER=info@stalarvision.ru SMTP_PASSWORD=replace-with-secret \
CONTACT_FROM=info@stalarvision.ru CONTACT_TO=info@stalarvision.ru \
CONSENT_LOG_PATH=./data/consent-log.jsonl \
npm start
```

## Health Check

```bash
curl -i http://127.0.0.1:8010/health
```

Ожидаемый ответ:

```json
{"status":"ok"}
```

## Contact Request

```bash
curl -i http://127.0.0.1:8010/api/contact \
  -H 'Content-Type: application/json' \
  --data '{
    "name": "Иван",
    "contact": "ivan@example.com",
    "projectType": "Новый сайт / первый релиз",
    "project": "Нужно обсудить первый этап проекта.",
    "consent": true,
    "consentVersion": "2026-08-23",
    "honeypot": ""
  }'
```

Успешный ответ:

```json
{"ok":true,"requestId":"..."}
```

## PM2

Файл `ecosystem.config.cjs` содержит только безопасные параметры процесса. Секреты SMTP нужно передавать через окружение сервера или PM2 без записи в репозиторий.

Пример:

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
