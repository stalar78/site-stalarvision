# Roadmap

## Текущее состояние

Stalar Vision — production-ready коммерческий сайт одного независимого разработчика. Сайт работает на `https://stalarvision.ru`, использует React + TypeScript + Vite + Tailwind, HTTPS, Nginx и Web3Forms.

Опубликованы и проиндексированы Google три самостоятельные коммерческие страницы:

- `https://stalarvision.ru/dorabotka-sajta/`
- `https://stalarvision.ru/audit-sajta/`
- `https://stalarvision.ru/razrabotka-sajta/`

Для всех трёх страниц подтверждены:

- корректный canonical с завершающим слешем;
- успешное сканирование Googlebot;
- разрешённое индексирование;
- совпадение user-declared canonical и Google-selected canonical.

## Что уже сделано

### 1. Проектная и контентная рамка

- сайт позиционируется как сайт одного независимого разработчика, а не агентства;
- зафиксирован спокойный деловой tone of voice;
- удалены неподтверждённые отзывы, клиенты, метрики и другие фиктивные trust signals;
- профиль, юридические данные и контакты централизованы в `src/data/profile.ts`;
- контент и конфигурация вынесены в `src/data/*`;
- услуги оказываются удалённо по всей России;
- Санкт-Петербург и Ленинградская область используются только как первый рекламный тестовый регион, а не как ограничение услуги или подтверждение офиса.

### 2. Production-инфраструктура

- VPS, Ubuntu, Nginx, домен и SSL настроены;
- Nginx отдаёт `/home/stanislav/project/stalarvision/dist`;
- production deploy выполняется через `git pull`, `npm install`, `npm run build`, `nginx -t`, reload;
- добавлены privacy/legal page, terms page, 404 и форма Web3Forms;
- локальный `postcss.config.mjs` изолирует проект от внешней конфигурации родительского каталога.

### 3. SEO и structured data

- настроены canonical, Open Graph, Twitter meta, `robots.txt` и `sitemap.xml`;
- добавлен runtime metadata helper;
- добавлен runtime JSON-LD helper со стабильным id `stalar-structured-data`;
- используются стабильные сущности `Organization`, `Person`, `WebSite`, `WebPage`, `Service`;
- не используются фиктивные `address`, `LocalBusiness`, `Offer`, цены, рейтинги или отзывы;
- service area для коммерческих страниц — Россия.

### 4. Route-specific static HTML

- Vite работает в MPA-режиме для главной и трёх service pages;
- source HTML для service pages содержит правильные metadata и JSON-LD до выполнения JavaScript;
- canonical всех service pages согласован с URL с завершающим слешем;
- Nginx отвечает `301` с URL без слеша на URL со слешем и `200` на канонический URL.

Текущие Vite HTML entries:

- `index.html`
- `dorabotka-sajta/index.html`
- `audit-sajta/index.html`
- `razrabotka-sajta/index.html`

### 5. Генератор service-page HTML

- создан `src/data/servicePageSeo.json` как единый источник route-specific SEO;
- создан `scripts/service-page.template.html`;
- создан `scripts/generate-service-html.mjs`;
- `npm run build` сначала запускает генератор, затем Vite;
- генератор детерминирован и не переписывает идентичные HTML-файлы;
- runtime SEO страниц использует те же централизованные значения.

### 6. Страница доработки сайтов

- опубликована `/dorabotka-sajta/`;
- добавлены самостоятельный контент, route, metadata, JSON-LD, sitemap и контекст формы;
- Google проиндексировал страницу;
- user-declared canonical и Google-selected canonical совпадают с `https://stalarvision.ru/dorabotka-sajta/`.

### 7. Страница аудита сайта

- опубликована `/audit-sajta/`;
- добавлены самостоятельный контент, route, metadata, JSON-LD, sitemap и контекст формы;
- Google проиндексировал страницу;
- user-declared canonical и Google-selected canonical совпадают с `https://stalarvision.ru/audit-sajta/`.

### 8. Страница разработки нового сайта

- опубликована `/razrabotka-sajta/`;
- карточка `Новый сайт или первый релиз` ведёт на самостоятельную страницу;
- добавлены контент, route, metadata, JSON-LD и sitemap;
- форма использует default `Новый сайт / первый релиз`;
- production build создаёт `dist/razrabotka-sajta/index.html`;
- production-проверка подтвердила `301` без слеша, `200` со слешем, правильные title, canonical, `og:url`, JSON-LD и sitemap entry;
- Google проиндексировал страницу;
- сканирование разрешено и успешно;
- user-declared canonical и Google-selected canonical совпадают с `https://stalarvision.ru/razrabotka-sajta/`.

## Текущие технические наблюдения

- Vite сообщает предупреждение о chunk больше 500 kB; сборка успешна, это не блокирует текущий SEO-этап;
- `npm install` сообщает 6 vulnerabilities: 1 low, 4 moderate, 1 high;
- нельзя запускать `npm audit fix --force` без отдельного анализа;
- общие данные `Organization`, `Person`, `WebSite` в generator пока заданы отдельно от `profile.ts`; это неблокирующий риск будущего рассинхрона;
- на странице `/razrabotka-sajta/` есть неблокирующая семантическая мелочь: вложенный `<section>` в Hero;
- визуальный QA страницы `/razrabotka-sajta/` на mobile, промежуточной ширине и desktop пройден владельцем успешно.

## Следующие шаги

1. Добавить сайт и три service pages в Яндекс Вебмастер и проверить индексирование.
2. Настроить цели Яндекс Метрики для заявок и ключевых CTA.
3. Провести инвентаризацию реальных проектов для будущих кейсов.
4. Отдельно разобрать dependency audit без `--force`.
5. Позже устранить дублирование общего профиля между runtime structured data и HTML generator.
6. При отдельном техническом проходе исправить вложенный `<section>` в Hero и оценить необходимость code splitting.

## Что не является приоритетом сейчас

- большой редизайн;
- миграция на Next.js;
- тяжёлый backend или CMS;
- массовое создание десятков SEO-страниц;
- искусственные региональные страницы;
- фиктивный адрес;
- автоматическое исправление зависимостей через `npm audit fix --force`.

## Рабочий процесс

1. GPT определяет один следующий обоснованный шаг.
2. GPT готовит точный prompt для Codex.
3. Codex изменяет код, но не `docs/*`, не commit и не push.
4. Владелец проверяет, commit и push.
5. GPT проводит GitHub review и обновляет docs.
6. Владелец выполняет безопасный production deploy.
7. Результат проверяется вручную перед следующим этапом.
