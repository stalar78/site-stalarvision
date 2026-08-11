# Chat Handoff

## Позиционирование

- Stalar Vision — сайт услуг и личный бренд одного независимого разработчика, а не агентства и не обычное резюме.
- Владелец: Станислав Ларин, ИП Ларин Станислав Николаевич.
- Работа ведётся напрямую с заказчиком и удалённо по России.
- Нельзя придумывать клиентов, отзывы, кейсы, бюджеты, цены, гарантии, сроки, метрики и бизнес-эффекты.
- Если подтверждённых данных нет, нужно прямо отметить ограничение, а не заполнять пробел предположением.

## Production-состояние

- Сайт: `https://stalarvision.ru`.
- Репозиторий: `stalar78/site-stalarvision`.
- Основная ветка: `main`.
- Локальный проект: `C:\Users\stala\OneDrive\Рабочий стол\Dev\site-stalarvision`.
- Серверный каталог: `/home/stanislav/project/stalarvision`.
- Nginx root: `/home/stanislav/project/stalarvision/dist`.
- Стек: React + TypeScript + Vite + Tailwind + React Router.
- Контактная форма: Web3Forms.
- Яндекс Метрика: `108788776`.

Безопасный deploy:

```bash
cd /home/stanislav/project/stalarvision
git status
git branch --show-current
git pull --ff-only origin main
npm install
npm run build
sudo nginx -t
sudo systemctl reload nginx
```

Для docs-only изменения production build и reload Nginx не нужны.

## Публичные коммерческие страницы

- `/dorabotka-sajta/`
- `/audit-sajta/`
- `/razrabotka-sajta/`
- `/razrabotka-veb-prilozhenij/`
- `/etrn/`

Коммерческие страницы имеют route-specific metadata/static HTML/structured data в рамках текущей архитектуры, canonical с завершающим слешем и sitemap entries.

## Материалы

Раздел:

- `/articles/`

Опубликованы:

- `/articles/wordpress-ili-individualnaya-razrabotka/`
- `/articles/podgotovka-k-razrabotke-sajta-ili-veb-prilozheniya/`

Главный редакционный документ:

- `docs/ARTICLE_EDITORIAL_GUIDE.md`

Рабочая частота: примерно одна сильная статья в неделю / 3–4 статьи в месяц, без публикаций ради количества.

## Портфолио

Канонический реестр:

- `docs/06_PORTFOLIO_REGISTRY.md`

Source of truth основных карточек:

- `src/data/cases.ts`

Текущий рекомендуемый порядок основных real-project карточек:

1. Cake & Shape
2. Intelverbum
3. ETRN Flow
4. QuoteFlow
5. ApprovalFlow
6. EIS Procurement Analyzer

### Cake & Shape

Production case завершён и merge-нут в `main`.

- Portfolio title: `Cake & Shape — сайт и система управления бизнесом`.
- Category: `Сайт + бизнес-система`.
- Case page: `https://stalarvision.ru/cases/cake-and-shape/`.
- Production: `https://cakeshape.ru/`.
- Repository: `https://github.com/stalar78/shapecake` — public.
- Main commit: `67a8d8ff9636f425421d7d9d597f1f53fc9a5587`.

Ключевое позиционирование:

Cake & Shape — не просто сайт кондитерской, а production business system: публичный Next.js frontend, отдельное React/Vite admin-приложение, FastAPI backend, PostgreSQL, общая модель данных и production Docker/Nginx/HTTPS контур.

В case page используются 5 оптимизированных WebP screenshots:

- `cake-and-shape-hero.webp`
- `cake-and-shape-catalog.webp`
- `cake-and-shape-admin-catalog.webp`
- `cake-and-shape-admin-product-media.webp`
- `cake-and-shape-admin-settings.webp`

Admin screenshots публикуются только после маскирования персональных данных.

Future directions строго отделены от текущего production scope. Нельзя заявлять online payment, customer accounts, delivery integrations, warehouse, loyalty или CRM как уже реализованные возможности.

### ETRN Flow

- Commercial landing: `https://stalarvision.ru/etrn/`.
- Demo: `https://etrn.stalarvision.ru/`.
- Landing commit: `6703d03d58697b35c536dc520c26f6766057d40d`.
- Portfolio internal-link commit: `383a0bc9258d09a5cf5260187c53d911643f1d8e`.
- Repository `stalar78/etrn-flow-demo` сейчас private.

Позиционирование:

ETRN Flow — интерактивное B2B demo управления жизненным циклом перевозки через состояния, роли, действия и события. Это не готовая универсальная TMS и не оператор ИС ЭПД.

Текущий маленький UX-долг: убрать/заменить публичный GitHub CTA в карточке ETRN Flow, пока repository остаётся private.

### QuoteFlow

- Demo: `https://quoteflow.stalarvision.ru/`.
- Repository: `https://github.com/stalar78/quoteflow-demo`.
- Собственный публичный demo-проект, не клиентское внедрение.
- Perspective описывает только возможное развитие.

### ApprovalFlow

- Demo: `https://approvalflow.stalarvision.ru/`.
- Repository: `https://github.com/stalar78/approvalflow`.
- Собственный публичный workflow-demo, не клиентское внедрение.
- Perspective описывает будущие направления, а не текущие функции.

### Intelverbum

- Реальный production-кейс.
- Закрытый исходный код не раскрывается.
- Нельзя создавать публичный GitHub CTA для приватного исходного repository.

### EIS Procurement Analyzer

- Отдельная case page: `/cases/eis-procurement-analyzer/`.
- Использовать только подтверждённые факты и аккуратные ограничения вокруг аналитических выводов.

## Cake & Shape — последний завершённый stage

PR #13:

`feat: add Cake & Shape production case`

Squash merge commit:

`67a8d8ff9636f425421d7d9d597f1f53fc9a5587`

Stage включил:

- первую карточку Portfolio;
- отдельную case page;
- screenshots;
- route;
- SEO metadata;
- structured data;
- sitemap;
- static HTML;
- Vite input;
- финальный CTA;
- privacy masking admin screenshots.

После merge локальный `main` был синхронизирован и имел clean working tree.

## SEO / Search Console / Webmaster

- Яндекс Вебмастер подключён, права подтверждены.
- Sitemap добавлен.
- Исправлен server-side soft 404.
- Основная цель формы: `contact_form_success` / `Успешная отправка формы`.
- Подтверждены цели Telegram/MAX/email/phone.
- Новый публичный URL после deploy можно один раз отправить на индексирование в Google Search Console и Яндекс Вебмастер.
- Не делать регулярные повторные submit без новой причины.

## Главные source of truth файлы

- `src/data/profile.ts`
- `src/data/site.ts`
- `src/data/services.ts`
- `src/data/servicePageSeo.json`
- `src/data/cases.ts`
- `src/data/cakeAndShapeCase.ts`
- `src/data/eisProcurementAnalyzerCase.ts`
- `src/data/etrn.ts`
- `src/data/structuredData.ts`
- `src/components/Portfolio.tsx`
- `src/pages/CakeAndShapeCase.tsx`
- `src/pages/Etrn.tsx`
- `src/router.tsx`
- `public/sitemap.xml`
- `vite.config.ts`
- `docs/05_ROADMAP.md`
- `docs/06_PORTFOLIO_REGISTRY.md`
- `docs/ARTICLE_EDITORIAL_GUIDE.md`

## Технические baseline-условия

- `npm run build` должен проходить.
- Новых TypeScript errors быть не должно.
- Допустимы только известные baseline errors в `src/data/webApplicationDevelopment.ts` и `src/pages/Terms.tsx`.
- `git diff --check` должен проходить; Windows line-ending warnings сами по себе не blocker.
- Vite warning о chunk > 500 kB может считаться baseline, если не сопровождается пользовательской проблемой.
- Не применять `npm audit fix --force` без отдельного upgrade-stage.

## Рабочий процесс

1. GPT анализирует фактический код и docs и выбирает один следующий логичный шаг.
2. Для крупных изменений GPT пишет точный prompt для Codex на русском языке.
3. Codex меняет код/статику, но не `docs/*`, если это отдельно не указано.
4. Пользователь присылает отчёт или полные изменённые файлы, проверяет локально, затем commit/push feature branch.
5. GPT делает GitHub review и при необходимости небольшие безопасные remote review-fix.
6. GPT управляет PR/merge и после принятого stage обновляет docs.
7. Пользователь синхронизирует `main`, выполняет build/deploy и production QA.

## Следующий практический шаг

После подтверждения production deploy Cake & Shape:

1. проверить `/cases/cake-and-shape/` в production;
2. один раз отправить URL на индексирование;
3. убрать/заменить GitHub CTA у private ETRN repository;
4. затем выбирать следующий growth-stage по реальным поисковым/conversion данным или по новой сильной бизнес-возможности.
