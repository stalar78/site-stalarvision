# Roadmap

## Текущее состояние

Stalar Vision — production-ready коммерческий сайт одного независимого разработчика. Сайт работает на `https://stalarvision.ru` и использует React + TypeScript + Vite + Tailwind, React Router, Nginx, HTTPS, Web3Forms и Яндекс Метрику.

Сайт позиционирует одного специалиста, а не агентство. Нельзя придумывать клиентов, отзывы, кейсы, цены, гарантии, сроки, численные результаты или другие trust signals, которых нет в подтверждённых источниках.

Опубликованы основные коммерческие страницы:

- `https://stalarvision.ru/dorabotka-sajta/`
- `https://stalarvision.ru/audit-sajta/`
- `https://stalarvision.ru/razrabotka-sajta/`
- `https://stalarvision.ru/razrabotka-veb-prilozhenij/`
- `https://stalarvision.ru/etrn/`

Опубликованы отдельные материалы:

- `/articles/wordpress-ili-individualnaya-razrabotka/`
- `/articles/podgotovka-k-razrabotke-sajta-ili-veb-prilozheniya/`

Опубликованы самостоятельные case pages:

- `/cases/eis-procurement-analyzer/`
- `/cases/cake-and-shape/`

## Что уже сделано

### 1. Проектная и контентная рамка

- сайт — личный бренд и коммерческая витрина независимого разработчика;
- работа ведётся напрямую и удалённо по России;
- профиль, юридические данные, контакты и значимая часть контента централизованы в `src/data/*`;
- фиктивные клиенты, отзывы, цифры и метрики не используются;
- Codex получает точные задачи на русском языке;
- крупные изменения выполняются через feature branch и review, небольшие безопасные правки GPT может делать прямо в feature branch.

### 2. Production-инфраструктура

- VPS, Ubuntu, Nginx, домен и SSL настроены;
- production deploy выполняется через `git pull --ff-only`, `npm install`, `npm run build`, `nginx -t`, reload;
- неизвестные URL и файлы возвращают настоящий HTTP `404`;
- service/case/article routes имеют route-specific static HTML там, где это предусмотрено текущей архитектурой;
- `public/sitemap.xml`, canonical, metadata и structured data поддерживаются вручную вместе с новыми публичными страницами.

### 3. SEO и индексирование

- настроены canonical, Open Graph, Twitter metadata, `robots.txt`, sitemap и JSON-LD;
- используются подтверждённые сущности `Organization`, `Person`, `WebSite`, `WebPage`, `Service`, а для отдельных кейсов — подходящие case entities;
- не добавляются фиктивные `Offer`, rating, review, address и price;
- сайт подключён к Яндекс Вебмастеру и Яндекс Метрике;
- ключевая цель формы: `contact_form_success`;
- подтверждены цели переходов в Telegram/MAX и кликов по email/телефону;
- после публикации нового URL допустима однократная отправка на переобход, без регулярного повторного сабмита.

### 4. Материалы

Раздел `/articles/` работает как отдельный контентный канал. Редакционный source of truth: `docs/ARTICLE_EDITORIAL_GUIDE.md`.

На 2026-08-11 опубликованы две статьи. Следующий материал рекомендуется готовить без форсирования частоты — ориентир примерно 3–4 качественных публикации в месяц.

### 5. Портфолио и proof cases

Канонический реестр: `docs/06_PORTFOLIO_REGISTRY.md`.

Текущий рекомендуемый порядок основных реальных проектов:

1. Cake & Shape
2. Intelverbum
3. ETRN Flow
4. QuoteFlow
5. ApprovalFlow
6. EIS Procurement Analyzer

`src/data/cases.ts` — source of truth основных карточек.

#### Cake & Shape

Production case опубликован commit `67a8d8ff9636f425421d7d9d597f1f53fc9a5587`.

- case page: `https://stalarvision.ru/cases/cake-and-shape/`;
- production site: `https://cakeshape.ru/`;
- repository: `https://github.com/stalar78/shapecake`;
- позиционирование: не «сайт кондитерской», а production business system — public Next.js frontend + отдельная React/Vite admin + FastAPI + PostgreSQL + Docker/Nginx/HTTPS;
- в кейсе используются очищенные WebP screenshots public/admin интерфейсов;
- персональные данные на admin screenshots маскируются;
- future directions отделены от текущего production scope.

#### ETRN Flow

- commercial landing: `https://stalarvision.ru/etrn/`;
- demo: `https://etrn.stalarvision.ru/`;
- landing опубликован commit `6703d03d58697b35c536dc520c26f6766057d40d`;
- portfolio internal link опубликован commit `383a0bc9258d09a5cf5260187c53d911643f1d8e`;
- ETRN Flow — operational workflow demo, а не готовая универсальная TMS;
- repository `stalar78/etrn-flow-demo` остаётся private, поэтому публичный GitHub CTA следует считать отдельным маленьким UX-долгом и убрать/заменить при ближайшей правке карточки.

#### QuoteFlow и ApprovalFlow

Оба проекта остаются собственными публичными demo, а не клиентскими внедрениями. Блоки «Перспектива развития» всегда отделяют будущие направления от реализованных функций.

### 6. Cake & Shape stage завершён

PR #13 `feat: add Cake & Shape production case` squash-merged в `main`.

Итоговый commit:

`67a8d8ff9636f425421d7d9d597f1f53fc9a5587`

В stage вошли:

- первая карточка Portfolio;
- `/cases/cake-and-shape/`;
- 5 оптимизированных WebP screenshots;
- case data и React page;
- route;
- structured data;
- static HTML;
- sitemap;
- Vite MPA input;
- финальный коммерческий CTA;
- privacy masking admin screenshots.

Build и manual visual QA пройдены. Локальный `main` после merge был синхронизирован и clean.

## Текущие технические наблюдения

- build проходит успешно;
- допустимы только известные baseline TypeScript errors в `src/data/webApplicationDevelopment.ts` и `src/pages/Terms.tsx`; новые ошибки недопустимы;
- Vite chunk warning > 500 kB считается допустимым baseline, если он снова появляется без пользовательской проблемы;
- structured-data данные частично дублируются между runtime и static HTML;
- не применять `npm audit fix --force` без отдельного upgrade-плана;
- infrastructure maintenance VPS выполнять отдельным этапом с проверкой всех размещённых сервисов.

## Следующие шаги

1. Выполнить/подтвердить production smoke-check Cake & Shape после deploy.
2. Отправить `/cases/cake-and-shape/` на индексирование в Google Search Console и Яндекс Вебмастер один раз.
3. Убрать или заменить GitHub CTA у ETRN Flow, пока repository private.
4. Продолжать публикацию материалов примерно раз в неделю, если есть сильная тема и качественный редакционный план.
5. Наблюдать поисковые запросы, переходы и `contact_form_success`; не делать выводы по слишком короткому периоду.
6. Следующий большой growth-stage выбирать по реальным данным или конкретной коммерческой потребности, а не ради количества страниц.

## Что сейчас не является приоритетом

- большой редизайн;
- миграция StalarVision на Next.js;
- тяжёлый backend/CMS для самого сайта;
- массовая генерация SEO-страниц;
- искусственные региональные страницы;
- фиктивные кейсы, отзывы, цены и метрики;
- Lighthouse-полировка без конкретной проблемы;
- открытие private repositories без отдельного security/publication audit;
- крупная переработка уже работающих case pages только ради визуального разнообразия.

## Рабочий процесс

1. GPT определяет один следующий обоснованный шаг по текущему коду и документации.
2. GPT готовит точный prompt для Codex на русском языке.
3. Codex меняет код и связанные статические файлы, но не `docs/*`, если это специально не указано.
4. Пользователь проверяет результат, делает commit и push feature branch.
5. GPT проводит GitHub review, при необходимости вносит небольшие безопасные review-fix и управляет PR/merge.
6. GPT обновляет проектную документацию после принятого этапа.
7. Пользователь синхронизирует `main`, собирает и выполняет безопасный production deploy.
8. После deploy выполняется ручной production QA перед следующим этапом.
