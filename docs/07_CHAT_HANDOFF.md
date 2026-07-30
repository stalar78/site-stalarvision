# Chat Handoff

## Позиционирование

- Stalar Vision — сайт услуг и личный бренд одного независимого разработчика, а не агентства и не обычное резюме.
- Владелец: Ларин Станислав, ИП Ларин Станислав Николаевич.
- Работа ведётся напрямую с заказчиком и удалённо по всей России.
- Санкт-Петербург и Ленинградская область — только тестовый рекламный регион, а не ограничение услуг и не подтверждение офиса.
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

Если изменены только `docs/*`, production build и reload Nginx не нужны.

## Коммерческие страницы

Опубликованы:

- `/dorabotka-sajta/`
- `/audit-sajta/`
- `/razrabotka-sajta/`
- `/razrabotka-veb-prilozhenij/`

Первые три проиндексированы Google. Четвёртая опубликована и отправлена на переобход.

Для страниц реализованы route-specific static HTML, metadata, JSON-LD, sitemap entries, canonical с завершающим слешем, Nginx redirects и route-specific контекст формы.

Генератор service pages использует:

- `src/data/servicePageSeo.json`
- `scripts/service-page.template.html`
- `scripts/generate-service-html.mjs`

## Яндекс Вебмастер и Метрика

- Права подтверждены файлом `public/yandex_04d5d400834f4551.html`.
- Sitemap добавлен.
- Главная и четыре коммерческие страницы отправлены на переобход.
- Повторно отправлять те же URL без новой причины не нужно.
- Исправлен soft 404: неизвестные страницы и файлы возвращают настоящий HTTP `404` с визуальной React NotFound.
- Нужно дождаться повторной диагностики Яндекса после server-side исправления.
- Основная цель формы: `contact_form_success` / `Успешная отправка формы`.
- Подтверждены цели: `Переход в Telegram`, `Переход в MAX`, `Клик по email`, `Клик по телефону`.

## Реальные проекты и портфолио

Канонический реестр: `docs/06_PORTFOLIO_REGISTRY.md`.

### Основное портфолио

Source of truth: `src/data/cases.ts`.

В основном портфолио сейчас находятся:

- Intelverbum;
- QuoteFlow — коммерческие предложения;
- ApprovalFlow — согласование внутренних заявок.

QuoteFlow и ApprovalFlow являются собственными публичными demo-проектами, а не клиентскими заказами.

### QuoteFlow

- Demo: `https://quoteflow.stalarvision.ru/`.
- Repository: `https://github.com/stalar78/quoteflow-demo`.
- Подтверждены React, TypeScript, Vite, FastAPI, Python, Docker, Nginx, расчётная логика, local drafts, JSON/CSV import/export, browser print, server-side PDF и API preview.
- Карточка перенесена в основное портфолио commit `1d469de004a16119b8e245bc55fa4ee8ba12832e`.
- Текущее название карточки: `QuoteFlow — коммерческие предложения`.
- «Перспектива развития» описывает возможные направления, а не реализованные функции.
- Нельзя заявлять клиентов, активных коммерческих пользователей, выручку, конверсию, экономию времени и другие неподтверждённые результаты.

### ApprovalFlow

- Demo: `https://approvalflow.stalarvision.ru/`.
- Repository: `https://github.com/stalar78/approvalflow`.
- Подтверждены роли сотрудника и руководителя, создание и согласование заявок, история изменений, React/TypeScript, Spring Boot, PostgreSQL, Docker и Nginx.
- Добавлен в основное портфолио commit `1d469de004a16119b8e245bc55fa4ee8ba12832e`.
- Текущее название карточки: `ApprovalFlow — согласование внутренних заявок`.
- «Перспектива развития» описывает возможные маршруты, уведомления, администрирование и интеграции, но не функции текущего demo.
- Нельзя заявлять реальное внедрение, число пользователей или подтверждённое ускорение согласований.

### Другие подтверждённые проекты

- Intelverbum — реальный production-кейс, приватный исходный код не раскрывается.
- Web Audit Lab — public repository `https://github.com/stalar78/web-audit-lab`.
- Phone Operator Detector — отдельный очищенный snapshot `https://github.com/stalar78/phone-operator-detector-public`; private history и реальные Excel-файлы не раскрываются.
- Специализированные software cases хранятся в `src/data/softwareCases.ts` и показываются отдельным блоком.

## Последние завершённые изменения

### 1. Workflow projects в основном портфолио

Commit: `1d469de004a16119b8e245bc55fa4ee8ba12832e` (`Add workflow projects to portfolio`).

- QuoteFlow перенесён в основное портфолио;
- добавлен ApprovalFlow;
- добавлены optional collapsed perspective sections;
- карточки перестали растягиваться до высоты соседней раскрытой карточки.

### 2. Covers и перспективы проектов

Commit: `0b90b49f99978cc9a046a07df5efeeced0b7c3d8` (`Improve portfolio covers and project perspectives`).

- устранено пересечение category/status badges;
- унифицированы названия и категории;
- QuoteFlow получил кодовую обложку;
- перспективы QuoteFlow и ApprovalFlow сгруппированы по направлениям;
- disclaimer о нереализованных функциях сохранён.

### 3. Практический Technology Stack

Commit: `704057df1e2b87f8151704f1e705a07fe23acf49` (`Add expandable technology stack details`).

- добавлен фильтр `Все` и категории стека;
- технологии оформлены как accessible expandable rows через `details/summary`;
- добавлены task-oriented описания;
- добавлены подтверждённые проекты применения;
- перечень технологий уточнён по фактическим проектам;
- Technology Stack теперь объясняет практическое применение, а не служит декоративным списком.

## Dependency security

- `react-router-dom` и `react-router` обновлены до `6.30.4`.
- `@remix-run/router` обновлён транзитивно до `1.23.3`.
- Vite остаётся на `5.4.21`.
- Остались 4 tooling vulnerabilities: 1 low, 2 moderate, 1 high.
- Не запускать `npm audit fix --force`; tooling upgrade должен быть отдельной задачей.

## Главные source of truth файлы

- `src/data/profile.ts`
- `src/data/site.ts`
- `src/data/services.ts`
- `src/data/servicePageSeo.json`
- `src/data/webApplicationDevelopment.ts`
- `src/data/cases.ts`
- `src/data/softwareCases.ts`
- `src/components/Portfolio.tsx`
- `src/components/SoftwareCases.tsx`
- `src/components/TechStack.tsx`
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
- Остались 4 tooling vulnerabilities.
- Script `lint` отсутствует.
- Есть неблокирующее дублирование structured-data сущностей между runtime и HTML generator.
- Lighthouse runtime-метрики вариативны; новые performance-задачи открывать только при конкретной проблеме или полевых данных.
- Сервер сообщает `System restart required`; обновление и перезагрузка должны выполняться отдельным инфраструктурным этапом.

## Следующий шаг

1. Дождаться повторной диагностики Яндекс Вебмастера после исправления real 404.
2. Проверить обработку и индексирование четырёх коммерческих страниц без повторной отправки тех же URL.
3. Наблюдать показы, запросы, переходы и обращения.
4. Следующий growth-этап выбирать по реальным поисковым и conversion-данным, а не ради количества страниц.
5. Не открывать новый технический optimization pass без конкретной пользовательской проблемы.
