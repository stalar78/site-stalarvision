# Canonical Portfolio Registry

## Назначение

Этот документ фиксирует подтверждённую структуру портфолио Stalar Vision и правила публикации проектов на production-сайте.

Реестр нужен, чтобы:

- не путать количество репозиториев с количеством самостоятельных проектов;
- объединять frontend, backend, admin, database, infra и tooling в цельные инженерные истории;
- не выдавать prototypes/demo/учебные работы за клиентские внедрения;
- не публиковать чувствительные данные и private source links;
- выбирать формат показа проекта по зрелости, коммерческой ценности и проверяемости;
- не придумывать клиентов, метрики, сроки, выручку, конверсию, экономию времени и другие неподтверждённые эффекты.

## Правила публикации

1. Полноценный кейс публикуется только на основе подтверждённого проекта и проверяемых функций.
2. Без подтверждённых метрик результат описывается качественно.
3. Private repository не получает публичный GitHub CTA автоматически.
4. Закрытые проекты публикуются только обезличенно и после security/publication review.
5. Несколько приложений одной системы объединяются в один кейс.
6. Design/reference/asset repositories не считаются отдельными проектами.
7. Учебные и ранние prototype repositories не смешиваются с production-портфолио.
8. Screenshots публикуются только после проверки допустимости раскрытия и маскирования PII при необходимости.
9. Направления возможного развития всегда отделяются от текущего scope явным disclaimer.
10. Карточка должна объяснять бизнес-задачу и инженерную ценность, а не только перечислять технологии.

## Основные доказательные кейсы

### 1. Cake & Shape — сайт и система управления бизнесом

**Тип:** production business system.

**Production:** `https://cakeshape.ru/`

**Case page:** `https://stalarvision.ru/cases/cake-and-shape/`

**Repository:** `https://github.com/stalar78/shapecake` — public.

**Подтверждённая техническая рамка:**

- Next.js public frontend;
- React/Vite admin frontend;
- FastAPI backend;
- PostgreSQL;
- async SQLAlchemy;
- Alembic;
- shared typed API client;
- Docker Compose;
- Nginx;
- HTTPS;
- health checks;
- backup operations;
- metadata/canonical/sitemap/robots/Open Graph/JSON-LD.

**Подтверждённый business/admin scope:**

- динамический каталог и страницы десертов;
- категории, публикация, доступность, сортировка и архивирование;
- варианты веса и цены;
- изображения, primary image и ordering;
- reviews/promotions;
- site settings и business content;
- защищённая административная сессия и CSRF;
- сохранённый backend/admin inquiry/order-request domain после упрощения публичного UX.

**Что демонстрирует:** end-to-end delivery — frontend, admin, backend, data model, security, SEO, deployment и production operations.

**Публичное позиционирование:** не «сайт кондитерской», а цифровая система малого бизнеса с публичным и административным контурами.

**Future-only:** online payment, customer accounts, delivery integrations, warehouse accounting, loyalty, CRM/external integrations.

**Строгие ограничения:** не заявлять рост продаж, конверсии, экономию времени, число заказов или другие бизнес-метрики без фактических данных.

**Production integration в StalarVision:** commit `67a8d8ff9636f425421d7d9d597f1f53fc9a5587`.

---

### 2. Intelverbum

**Тип:** production content/publishing platform.

**Подтверждённая рамка:** структурированные JSON-корпусы, валидация, release manifests, статическая генерация, поисковый индекс, специализированные admin-интерфейсы, publish workflow, Nginx/Linux и Git operations.

**Что демонстрирует:** архитектуру контентных систем, data/content pipelines, search, admin tools и production operations.

**Публичность:** production-сайт допустим; private source repository не раскрывается.

---

### 3. ETRN Flow — управление жизненным циклом перевозки

**Тип:** собственный публичный B2B workflow demo.

**Landing:** `https://stalarvision.ru/etrn/`

**Demo:** `https://etrn.stalarvision.ru/`

**Repository:** `stalar78/etrn-flow-demo` — private на 2026-08-11.

**Подтверждённая рамка:**

- guest demo sessions;
- перевозки и detail view;
- последовательные workflow states;
- role/state-aware actions;
- server-side validation переходов;
- event history;
- controlled demo reset;
- React + TypeScript;
- Fastify;
- PostgreSQL;
- Docker/Nginx production contour.

**Что демонстрирует:** формализацию операционного процесса через `Состояние → Роль → Действие → Событие`.

**Строгие ограничения:**

- не позиционировать как готовую универсальную TMS;
- не позиционировать как оператора ИС ЭПД/ГИС ЭПД;
- не заявлять реальную интеграцию с ИС ЭПД;
- не заявлять юридически значимое подписание;
- private repository не должен иметь работающий public GitHub CTA.

**Perspective:** допустимы сценарии исключений, дополнительные роли, документы, уведомления, API/webhooks, 1С/CRM/ERP и управленческие инструменты только как future directions с disclaimer.

**StalarVision landing commit:** `6703d03d58697b35c536dc520c26f6766057d40d`.

**Portfolio internal-link commit:** `383a0bc9258d09a5cf5260187c53d911643f1d8e`.

---

### 4. QuoteFlow — коммерческие предложения

**Тип:** собственный публичный demo-проект, не клиентский заказ.

**Demo:** `https://quoteflow.stalarvision.ru/`

**Repository:** `https://github.com/stalar78/quoteflow-demo`.

**Подтверждённая рамка:** позиции, расчёты, скидки и налоги, локальные черновики, JSON/CSV import/export, browser print, server-side PDF, API preview, React/TypeScript/Vite, FastAPI/Python, Docker, Nginx.

**Что демонстрирует:** full-stack development, расчётную бизнес-логику, PDF generation, API и production deployment.

**Строгие ограничения:** не заявлять реальных клиентов, коммерческих пользователей, выручку, конверсию или подтверждённую экономию времени.

---

### 5. ApprovalFlow — согласование внутренних заявок

**Тип:** собственный публичный workflow-demo, не клиентский заказ.

**Demo:** `https://approvalflow.stalarvision.ru/`

**Repository:** `https://github.com/stalar78/approvalflow`.

**Подтверждённая рамка:** роли сотрудника и руководителя, создание/редактирование/отправка заявок, approval/rejection/reopen/resubmit, история изменений, React/TypeScript, Spring Boot, PostgreSQL, Docker и Nginx.

**Что демонстрирует:** role-based workflow, state transitions, frontend/backend integration и relational data.

**Строгие ограничения:** не заявлять реальное корпоративное внедрение, число пользователей или ускорение согласований.

---

### 6. EIS Procurement Analyzer

**Тип:** аналитический research/engineering project с отдельной публичной case page.

**Case page:** `https://stalarvision.ru/cases/eis-procurement-analyzer/`

**Подтверждённая рамка:** collection pipeline, документы разных форматов, classification, strict extraction, evidence records, unresolved fields, quality issues, разделённые technical/market/overall decision layers и exports.

**Что демонстрирует:** evidence-first automation и document-analysis engineering.

**Ограничения:** не выдавать recommendation за гарантированный бизнес-результат или юридическое/финансовое решение; human review остаётся обязательным.

## Другие сильные подтверждённые проекты

### LocalKit

Next.js/TypeScript/Tailwind продуктовая система коммерческих шаблонов и niche/premium моделей. Template/reference/asset repositories не публикуются отдельными кейсами.

### Web Audit Lab

Browser-based technical audit tool с Playwright checks, metadata/canonical/internal-links проверками, desktop/mobile, accessibility basics, failed resources, page weight, JSON/Markdown reports и screenshots.

Public repository: `https://github.com/stalar78/web-audit-lab`.

Не позиционировать как полноценное SEO-продвижение или security audit.

### Phone Operator Detector

Python monorepo с Excel processing, operator/region lookup, GUI, CLI, Flask web MVP, PyInstaller и тестами.

Public cleaned snapshot: `https://github.com/stalar78/phone-operator-detector-public`.

Private history и реальные рабочие Excel не раскрываются.

### Закрытая информационная система

Knowledge platform с web portal, offline-first mobile app, document pipeline, SQLite/FTS5 search, bookmarks и access control.

Публикация возможна только обезличенно, без настоящего названия, организации, предметной области, URL, source repository и читаемых screenshots закрытого контента.

### T-Bank Trading Bot

Python research/runtime framework с backtesting, portfolio orchestration, sandbox/operator tooling, research-to-runtime bridge и explicit live-risk gates.

Нельзя заявлять гарантированную прибыль, подтверждённую доходность или массовую production-ready автоторговлю.

## Прикладные / инфраструктурные кейсы

### Конвейер извлечения знаний из аудио и видео

Python/AI-assisted pipeline с faster-whisper, batch processing, таймкодами, очисткой, audit reports и локальной базой знаний.

### Анализатор производственных смен

Streamlit + SQLite analysis: time series, histogram, box plot, rolling metrics, correlations, outliers, Cp/Cpk. Реальные производственные данные не раскрываются.

### Защищённый VPN deployment

WireGuard/Ubuntu VPS, SSH hardening, UFW, backup/restore и runbooks. Не публиковать IP, подсети, порты, peer names и ключи.

### Система документированного анализа рисков онлайн-платформ

Evidence-first framework с intake, evidence log, public legal/site review и cautious report. Не заявлять юридически доказанное мошенничество или нарушение без соответствующего основания.

## Компактные продукты / archive candidates

- Math Brain Trainer;
- каталог образовательных программ;
- Stalar Vision как собственный сайт;
- SportAndBeauty до отдельной проверки зрелости;
- небольшие Python utilities;
- desktop Java/JavaFX tools;
- ранние parsers/prototypes;
- design/reference/asset repositories;
- учебные Java/React/algorithm projects.

Stalar Vision не должен становиться главным кейсом, чтобы портфолио не выглядело замкнутым на самом себе.

## Текущее отображение на production-сайте

Source of truth основных карточек: `src/data/cases.ts`.

Рекомендуемый порядок real-project карточек:

1. Cake & Shape
2. Intelverbum
3. ETRN Flow
4. QuoteFlow
5. ApprovalFlow
6. EIS Procurement Analyzer

Отдельные case/landing pages:

- `/cases/cake-and-shape/`
- `/cases/eis-procurement-analyzer/`
- `/etrn/`

Правила:

- screenshots должны подтверждать реальный интерфейс и быть очищены от PII;
- private repository CTA не публикуется;
- future/perspective блоки содержат disclaimer;
- Technology Stack подтверждает компетенции через реальные проекты, но не заменяет portfolio registry;
- не добавлять новые карточки только ради количества.

## Следующий практический шаг

1. После production deploy проверить Cake & Shape case и один раз отправить URL на индексирование.
2. Исправить GitHub CTA ETRN Flow, пока repository private.
3. Следующий большой case/project добавлять только после fact/security/publication audit и при понятной коммерческой ценности.
4. Существующие карточки улучшать только при конкретной UX, clarity или conversion-проблеме.
