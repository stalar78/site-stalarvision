# Canonical Portfolio Registry

## Назначение

Этот документ фиксирует подтверждённую структуру портфолио Stalar Vision и правила публикации проектов на production-сайте.

Реестр нужен, чтобы:

- не путать количество GitHub-репозиториев с количеством самостоятельных проектов;
- объединять frontend, backend, mobile, desktop и вспомогательные инструменты в цельные инженерные истории;
- не выдавать прототипы, учебные работы и шаблонные репозитории за коммерческие кейсы;
- не публиковать закрытую информацию;
- выбирать формат показа проекта исходя из зрелости и коммерческой ценности;
- не придумывать клиентов, метрики, сроки, финансовые результаты и неподтверждённые эффекты.

## Правила публикации

1. Полноценный кейс публикуется только на основе подтверждённого проекта и проверяемых функций.
2. Результат описывается качественно, если нет подтверждённых численных метрик.
3. Приватный GitHub-репозиторий не связывается с публичной карточкой автоматически.
4. Закрытые проекты публикуются только обезличенно.
5. Несколько репозиториев одной системы объединяются в один кейс.
6. Дизайн-референсы, asset-репозитории и ранние прототипы не считаются отдельными проектами.
7. Учебные репозитории остаются частью GitHub-архива, но не смешиваются с production-кейсами.
8. Ссылки, скриншоты и названия добавляются только после отдельной проверки допустимости раскрытия.
9. Направления возможного развития должны быть явно отделены от функций текущей версии.

## Уровень A — основные доказательные кейсы

### 1. Intelverbum

**Публичное название:** Intelverbum — культурно-интеллектуальная publishing system.

**Тип:** production content platform.

**Подтверждённая техническая рамка:** JSON-корпусы, валидация данных, release manifests, статическая генерация, поисковый индекс, административные интерфейсы, безопасный publish pipeline, Nginx/Linux и Git workflow.

**Что демонстрирует:** архитектура контентных систем, Node.js tooling, поиск, админки и production operations.

**Формат:** сильная карточка на главной и потенциальный подробный case study.

**Публичность:** название и публичный сайт допустимы; технические секреты, credentials и внутренние данные не публикуются.

---

### 2. QuoteFlow — коммерческие предложения

**Тип:** собственный публичный demo-проект Stalar Vision, не клиентский заказ.

**Подтверждённая техническая рамка:**

- позиции и автоматические расчёты;
- скидки и налоги;
- локальные черновики;
- JSON/CSV import и export;
- browser print и server-side PDF;
- API preview;
- адаптивный React/TypeScript/Vite frontend;
- FastAPI/Python backend;
- Docker и Nginx deployment;
- публичный HTTPS demo и GitHub repository.

**Что демонстрирует:** full-stack development, расчётную бизнес-логику, API, PDF generation, frontend/backend integration, контейнеризацию и production deployment.

**Публичность:**

- demo: `https://quoteflow.stalarvision.ru/`;
- repository: `https://github.com/stalar78/quoteflow-demo`;
- source of truth основной карточки: `src/data/cases.ts`.

**Текущее отображение:** QuoteFlow находится в основном портфолио, а не в отдельном software-case блоке.

**Перспектива развития:** в карточке допустим сворачиваемый блок с возможными направлениями — шаблоны и брендирование, каталоги и расчёты, CRM/1С, командное согласование, интеграции и аналитика. Эти пункты не являются функциями текущей demo-версии.

**Строгие ограничения:** не называть клиентским кейсом, не заявлять реальных пользователей, выручку, конверсию, экономию времени и иные неподтверждённые метрики.

---

### 3. ApprovalFlow — согласование внутренних заявок

**Тип:** собственный публичный workflow-demo Stalar Vision, не клиентский заказ.

**Подтверждённая техническая рамка:**

- роли сотрудника и руководителя;
- создание, редактирование и отправка заявок;
- одобрение, отклонение, повторное открытие и повторная отправка;
- история изменений и решений;
- публичный demo-доступ для обеих ролей;
- React/TypeScript frontend;
- Spring Boot backend;
- PostgreSQL;
- Docker и Nginx deployment;
- публичный HTTPS demo и GitHub repository.

**Что демонстрирует:** workflow-системы, роли и состояния, frontend/backend integration, relational database, контейнеризацию и production deployment.

**Публичность:**

- demo: `https://approvalflow.stalarvision.ru/`;
- repository: `https://github.com/stalar78/approvalflow`;
- source of truth карточки: `src/data/cases.ts`.

**Перспектива развития:** допустим сворачиваемый блок с направлениями маршрутизации и правил, совместной работы, администрирования, аудита, уведомлений, SSO/LDAP, 1С, CRM/ERP и API/webhooks. Эти пункты не являются функциями текущей demo-версии.

**Строгие ограничения:** не называть клиентским кейсом, не заявлять реальное внедрение в компании, число пользователей, ускорение согласований и другие неподтверждённые результаты.

---

### 4. LocalKit

**Тип:** собственный продукт и система коммерческих шаблонов.

**Подтверждённая рамка:** Next.js App Router, TypeScript, Tailwind CSS, самостоятельные niche/premium модели, product pages, live demo, различающиеся hero/CTA/trust структуры, VPS deployment через Nginx, PM2 и SSL.

**Что демонстрирует:** продуктовый подход, коммерческие сайты, Next.js, переиспользуемую архитектуру и production deployment.

**Ограничение:** template/reference/asset repositories не публикуются как отдельные кейсы.

---

### 5. Web Audit Lab

**Тип:** инженерный инструмент для browser-based технического аудита.

**Подтверждённая рамка:** Playwright checks, SEO/metadata/canonical/internal links, desktop/mobile, accessibility basics, failed resources, page weight, JSON/Markdown reports и screenshots.

**Публичность:** `https://github.com/stalar78/web-audit-lab`.

**Ограничение:** не позиционировать как полноценное SEO-продвижение или security-аудит.

---

### 6. Закрытая информационная система

**Тип:** закрытая knowledge platform с web portal, offline-first mobile app, document pipeline, SQLite/FTS5 search, локальными закладками и разграничением доступа.

**Формат:** обезличенный подробный кейс без demo и внешних ссылок.

**Строгие ограничения:** не раскрывать настоящее название, организацию, предметную область, реальные документы, URL, GitHub и читаемые screenshots закрытого содержания.

---

### 7. T-Bank Trading Bot

**Тип:** Python research/runtime framework.

**Подтверждённая рамка:** research-to-runtime workflow, backtesting, portfolio orchestration, sandbox, operator CLI, evidence collection, explicit live-risk gates и artifact governance.

**Запрещённые формулировки:** гарантированная прибыль, подтверждённая доходность, полностью автоматическая торговля и готовность к массовому live-использованию.

## Уровень B — сильные прикладные и инфраструктурные кейсы

### 8. Конвейер извлечения знаний из аудио и видео

Python/AI-assisted pipeline с faster-whisper, batch processing, таймкодами, словарной очисткой, audit reports, GPT-конспектами, локальной базой знаний и операторской панелью.

### 9. Анализатор производственных смен

Streamlit-инструмент анализа SQLite-данных: time series, histogram, box plot, rolling metrics, correlations, outliers и Cp/Cpk. Реальные производственные базы и чувствительные данные не публикуются.

### 10. Phone Operator Detector

Python monorepo с Excel processing, operator/region lookup, desktop GUI, CLI, Flask web MVP, PyInstaller build и тестами.

Публичный snapshot: `https://github.com/stalar78/phone-operator-detector-public`.

Исходный приватный repository не открывается из-за чувствительных файлов в Git history.

### 11. Развёртывание и сопровождение защищённого VPN

Operations-first проект на WireGuard/Ubuntu VPS с SSH hardening, UFW, backup/restore и runbooks. Не публиковать IP, подсети, порты, peer names, ключи и topology details.

### 12. Система документированного анализа рисков онлайн-платформ

Documentation-first evidence framework с intake, evidence log, public legal/site review и cautious report. Не заявлять выявление мошенничества, незаконности или юридически доказанного нарушения.

## Уровень C — компактные продукты

### 13. Math Brain Trainer

Локальный React + TypeScript + Vite тренажёр устного счёта с RU/EN интерфейсом и локальной историей.

### 14. Сценарный каталог образовательных программ

Next.js MVP с подборками, guides, methodology/disclosure pages и типизированной моделью Offer/Collection/Guide. Не позиционировать как marketplace, школу или transactional platform.

### 15. Stalar Vision

Production-сайт услуг независимого разработчика: React/Vite/Tailwind, route-specific static HTML, service pages, SEO, structured data, Web3Forms, Метрика и VPS deployment.

Не должен становиться главным кейсом, чтобы портфолио не выглядело замкнутым на самом себе.

### 16. SportAndBeauty

Подтверждён Next.js/TypeScript baseline, но назначение, сценарии и зрелость ещё не проверены полностью. До дополнительной проверки не публиковать.

## Технический архив

В архив, а не в основную коммерческую витрину, относятся:

- desktop-загрузчик видео на Java/JavaFX;
- парсеры и инструменты сбора контента;
- ранние client/server-прототипы;
- небольшие Python-утилиты;
- design/reference/asset repositories;
- учебные Java, React и алгоритмические проекты.

## Текущее отображение на production-сайте

- основное портфолио формируется из `src/data/cases.ts`;
- QuoteFlow и ApprovalFlow находятся в основном портфолио;
- специализированные программные кейсы продолжают храниться в `src/data/softwareCases.ts` и отображаться отдельным блоком;
- карточки используют единые названия, кодовые обложки и непротиворечивые category/status badges;
- блоки «Перспектива развития» доступны только для подтверждённых проектов и содержат явный disclaimer;
- раздел Technology Stack связывает технологии с подтверждёнными проектами, но не заменяет реестр портфолио.

## Следующий практический шаг

Не расширять портфолио количеством карточек без необходимости. Следующий кейсовый шаг выбирать по коммерческой ценности:

- отдельный QuoteFlow или ApprovalFlow case study — только при подтверждённой conversion-потребности;
- следующий сильный проект — только после fact/security/publication audit;
- существующие карточки улучшать только при конкретной UX, clarity или conversion-проблеме.
