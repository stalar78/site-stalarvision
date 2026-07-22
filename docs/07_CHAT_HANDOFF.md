# Chat Handoff

## Позиционирование

- Stalar Vision — сайт услуг и личный бренд одного независимого разработчика, а не агентства и не обычное резюме.
- Владелец: Ларин Станислав, ИП Ларин Станислав Николаевич.
- Работа ведётся напрямую с заказчиком и удалённо по всей России.
- Санкт-Петербург и Ленинградская область — только первый тестовый регион рекламы, а не ограничение услуг и не подтверждение офиса.
- Нельзя придумывать клиентов, отзывы, кейсы, сроки, цены, гарантии, цифры и метрики.

## Production-состояние

- Сайт: `https://stalarvision.ru`.
- Репозиторий: `stalar78/site-stalarvision`, ветка `main`.
- Серверный каталог: `/home/stanislav/project/stalarvision`.
- Nginx root: `/home/stanislav/project/stalarvision/dist`.
- Стек: React + TypeScript + Vite + Tailwind.
- Контактная форма: Web3Forms.
- Яндекс Метрика: счётчик `108788776`.

Безопасный deploy:

```bash
cd /home/stanislav/project/stalarvision
git pull --ff-only origin main
npm install
npm run build
sudo nginx -t
sudo systemctl reload nginx
```

Не копировать `dist` вручную частями и не изменять внешний `/home/stanislav/postcss.config.mjs`.

## Коммерческие страницы

Реализованы, опубликованы и проиндексированы Google:

- `/dorabotka-sajta/`
- `/audit-sajta/`
- `/razrabotka-sajta/`

Для них подтверждены route-specific HTML, metadata, JSON-LD, sitemap entries, canonical с завершающим слешем и корректные nginx redirects.

В commit `6fe648fb3d037390773458e2e8f581fa7dcc4b51` реализована четвёртая коммерческая страница:

- `/razrabotka-veb-prilozhenij/`

Она опубликована на production. Direct load, SPA navigation, desktop/mobile visual QA, Console и Network проверены без ошибок. URL отправлен на переобход в Яндекс Вебмастере 2026-07-18 и находится в очереди.

Генератор service pages использует:

- `src/data/servicePageSeo.json`
- `scripts/service-page.template.html`
- `scripts/generate-service-html.mjs`

## Яндекс Вебмастер и Метрика

- Права подтверждены файлом `public/yandex_04d5d400834f4551.html`.
- Sitemap добавлен.
- Главная и первые три коммерческие страницы отправлены на переобход 2026-07-17.
- Новый URL `https://stalarvision.ru/razrabotka-veb-prilozhenij/` отправлен на переобход 2026-07-18 и находится в очереди.
- На момент последней проверки главная, `/audit-sajta/` и `/dorabotka-sajta/` обработаны; `/razrabotka-sajta/` и `/razrabotka-veb-prilozhenij/` находятся в очереди.
- Повторно отправлять эти URL без новой причины не нужно.
- Основная цель формы: `contact_form_success` / `Успешная отправка формы`.
- Подтверждены цели: `Переход в Telegram`, `Переход в MAX`, `Клик по email`, `Клик по телефону`.
- Именованные цели используются как основные; автоцели Метрики — вспомогательные.

## Реальные проекты и портфолио

Канонический реестр: `docs/06_PORTFOLIO_REGISTRY.md`.

### QuoteFlow

- Собственный публичный demo-проект Stalar Vision, а не клиентский заказ.
- Production demo: `https://quoteflow.stalarvision.ru/`.
- Публичный репозиторий: `https://github.com/stalar78/quoteflow-demo`.
- Подтверждённые возможности: позиции и автоматические расчёты, скидки и налоги, локальные черновики, JSON/CSV import/export, browser print, server-side PDF, API preview и адаптивный интерфейс.
- Подтверждённый стек: React, TypeScript, Vite, FastAPI, Python, Docker и Nginx.
- Перед публикацией QuoteFlow прошёл отдельные CI, dependency, secret/history, container и production checks; публичный demo работает через HTTPS.
- В commit `6069bf84943e87c862adc6b6549e98d6436db025` (`Add QuoteFlow public demo case`) карточка добавлена на главную и на `/razrabotka-veb-prilozhenij/` из единого source of truth `src/data/softwareCases.ts`.
- Добавлен локальный production screenshot `public/uploads/cases/quoteflow-dashboard.webp` и отдельные ссылки `Открыть демо` / `GitHub`.
- Production deploy выполнен; build, generator determinism, `nginx -t`, HTTP checks и desktop/mobile visual QA пройдены.
- Нельзя заявлять реальных клиентов, пользователей, коммерческие результаты, экономию времени, конверсию или другие неподтверждённые метрики.

### Intelverbum

- Реальный production-кейс с публичным сайтом `https://intelverbum.ru/`.
- Приватный исходный код не раскрывается.
- Brand-mark версия карточки: commit `2886b69b3d54dd21e820dc9a0dc9e721e6c32b0c`.
- Production deploy и visual QA пройдены.

### Web Audit Lab

- Публичный репозиторий: `https://github.com/stalar78/web-audit-lab`.
- GitHub-ссылка добавлена commit `473afef9c66ee9060ed0cff5013313ae9edd2197`.
- Production deploy и visual QA пройдены.

### Phone Operator Detector

- Исходный приватный репозиторий не открыт публично из-за реальных Excel-файлов в reachable history.
- Создан отдельный очищенный public snapshot без private Git history, реальных Excel-файлов и скачанных operator-reference CSV snapshots.
- Публичный репозиторий: `https://github.com/stalar78/phone-operator-detector-public`.
- Snapshot основан на private source SHA `be2a684f51e5cb6ac4c138901c1788bd66636881`.
- 26 tests OK; compile validation passed.
- Текущий public commit: `9e6a533`.
- GitHub-ссылка на сайте добавлена commit `b5a8b93`.
- Production deploy, desktop/mobile visual QA и переход по ссылке проверены.

## Dependency security

- Диагностический audit выполнен без автоматических исправлений.
- `react-router-dom` и `react-router` обновлены до `6.30.4`.
- `@remix-run/router` обновлён транзитивно до `1.23.3`.
- Изменение зафиксировано commit `c3333bb91e354bc7e9909db8c838a9a13aa26fc4` (`Update React Router security patch`).
- Vite остался на `5.4.21`.
- Runtime advisory React Router устранён.
- После обновления осталось 4 tooling vulnerabilities: 1 low, 2 moderate, 1 high.
- Оставшиеся advisories относятся к `@babel/core`, `postcss`, `esbuild` и `vite`, а не к production runtime bundle.
- Build, production deploy, technical QA и visual QA пройдены.
- Не запускать `npm audit fix --force`; tooling upgrade должен быть отдельной задачей.

## Последнее завершённое изменение

- QuoteFlow опубликован на Stalar Vision как честный публичный demo-кейс веб-приложения.
- Кодовый commit: `6069bf84943e87c862adc6b6549e98d6436db025` (`Add QuoteFlow public demo case`).
- Канонический объект хранится в `src/data/softwareCases.ts`.
- Главная отображает карточку через `src/components/SoftwareCases.tsx`.
- Страница `/razrabotka-veb-prilozhenij/` получает QuoteFlow из того же source of truth через mapper в `src/data/webApplicationDevelopment.ts`.
- Поддержаны две внешние ссылки: production demo и публичный GitHub.
- Screenshot: `public/uploads/cases/quoteflow-dashboard.webp`, WebP, 800×556, 22228 bytes.
- Production HEAD после deploy: `6069bf84943e87c862adc6b6549e98d6436db025`.
- `npm run build` прошёл; generator сообщил `unchanged` для всех service-page HTML.
- `nginx -t` прошёл, Nginx перезагружен.
- Главная, `/razrabotka-veb-prilozhenij/` и screenshot отвечают `200 OK`; screenshot отдаётся как `image/webp`.
- Desktop/mobile визуальная проверка подтверждена владельцем: карточка, screenshot и обе ссылки работают корректно.

## Главные source of truth файлы

- `src/data/profile.ts`
- `src/data/site.ts`
- `src/data/services.ts`
- `src/data/servicePageSeo.json`
- `src/data/webApplicationDevelopment.ts`
- `src/data/cases.ts`
- `src/data/softwareCases.ts`
- `src/components/SoftwareCases.tsx`
- `src/data/contacts.ts`
- `src/data/faq.ts`
- `src/data/legal.ts`
- `src/lib/meta.ts`
- `src/lib/utils.ts`
- `public/sitemap.xml`
- `postcss.config.mjs`

## Рабочий процесс

1. GPT анализирует фактическое состояние и предлагает один следующий логичный шаг.
2. GPT пишет prompt для Codex на английском языке.
3. Codex меняет только код и связанные статические файлы, не `docs/*`, не commit и не push.
4. Владелец проверяет diff, делает commit и push.
5. GPT читает GitHub, проводит review и обновляет `docs/*`.
6. Владелец выполняет безопасный production deploy.
7. После deploy выполняется ручной technical/visual QA.

## Текущие технические наблюдения

- Build проходит успешно.
- Остались 4 tooling vulnerabilities: 1 low, 2 moderate, 1 high.
- Script `lint` отсутствует.
- Есть неблокирующее дублирование общих structured-data сущностей между runtime и HTML generator.
- Lighthouse runtime-метрики вариативны; новые performance-задачи открывать только при конкретной пользовательской проблеме или реальных полевых данных.
- Сервер сообщает `System restart required`; плановое обновление и перезагрузка должны выполняться отдельным инфраструктурным этапом с проверкой всех размещённых сервисов.

## Следующий шаг

Дождаться обработки `/razrabotka-sajta/` и `/razrabotka-veb-prilozhenij/` в Яндекс Вебмастере без повторной отправки. Параллельно можно выбрать следующий growth-этап, который усиливает доверие или конверсию, опираясь на уже опубликованный QuoteFlow, а не открывать новый цикл технической оптимизации без пользовательской проблемы.
