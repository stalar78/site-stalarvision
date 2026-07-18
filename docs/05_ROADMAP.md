# Roadmap

## Текущее состояние

Stalar Vision — production-ready коммерческий сайт одного независимого разработчика. Сайт работает на `https://stalarvision.ru`, использует React + TypeScript + Vite + Tailwind, HTTPS, Nginx, Web3Forms и Яндекс Метрику.

Опубликованы и проиндексированы Google три самостоятельные коммерческие страницы:

- `https://stalarvision.ru/dorabotka-sajta/`
- `https://stalarvision.ru/audit-sajta/`
- `https://stalarvision.ru/razrabotka-sajta/`

Для всех трёх страниц подтверждены корректные canonical с завершающим слешем, успешное сканирование Googlebot и совпадение user-declared canonical с Google-selected canonical.

Сайт добавлен в Яндекс Вебмастер, права подтверждены HTML-файлом, sitemap добавлен, главная и три коммерческие страницы отправлены на переобход.

На главной опубликованы подтверждённые реальные проекты и программные продукты. Intelverbum представлен как флагманский production-кейс, а Web Audit Lab и Phone Operator Detector имеют публичные GitHub-ссылки.

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
- добавлены runtime metadata и JSON-LD helpers;
- используются стабильные сущности `Organization`, `Person`, `WebSite`, `WebPage`, `Service`;
- не используются фиктивные `address`, `LocalBusiness`, `Offer`, цены, рейтинги или отзывы;
- service area для коммерческих страниц — Россия.

### 4. Route-specific static HTML

- Vite работает в MPA-режиме для главной и трёх service pages;
- source HTML service pages содержит metadata и JSON-LD до выполнения JavaScript;
- canonical согласован с URL с завершающим слешем;
- Nginx отвечает `301` с URL без слеша на URL со слешем и `200` на канонический URL.

Текущие Vite HTML entries:

- `index.html`
- `dorabotka-sajta/index.html`
- `audit-sajta/index.html`
- `razrabotka-sajta/index.html`

### 5. Генератор service-page HTML

- `src/data/servicePageSeo.json` используется как единый источник route-specific SEO;
- созданы `scripts/service-page.template.html` и `scripts/generate-service-html.mjs`;
- `npm run build` сначала запускает генератор, затем Vite;
- генератор детерминирован и не переписывает идентичные HTML-файлы;
- runtime SEO страниц использует те же централизованные значения.

### 6. Коммерческие страницы

- опубликована и проиндексирована Google `/dorabotka-sajta/`;
- опубликована и проиндексирована Google `/audit-sajta/`;
- опубликована и проиндексирована Google `/razrabotka-sajta/`;
- каждая страница имеет самостоятельные контент, route, metadata, JSON-LD, sitemap entry и route-specific контекст формы;
- production-проверки подтвердили корректные редиректы, title, canonical, `og:url` и JSON-LD.

### 7. Яндекс Вебмастер

- сайт `https://stalarvision.ru` добавлен;
- права подтверждены файлом `public/yandex_04d5d400834f4551.html`;
- verification-файл опубликован и отвечает `200 OK`;
- `https://stalarvision.ru/sitemap.xml` добавлен;
- на переобход отправлены главная и три коммерческие страницы;
- следующий контрольный этап — дождаться обработки очереди без повторной отправки тех же URL.

### 8. Яндекс Метрика

- счётчик `108788776` установлен;
- SPA-переходы отправляются отдельными pageview;
- включены `webvisor`, `clickmap` и `trackLinks`;
- подтверждена цель `Успешная отправка формы` с идентификатором `contact_form_success`;
- подтверждены именованные цели `Переход в Telegram`, `Переход в MAX`, `Клик по email`, `Клик по телефону`;
- для отчётов и будущей рекламы используются именованные цели, а автоцели остаются вспомогательными.

### 9. Реальные проекты и портфолио

- создан `docs/06_PORTFOLIO_REGISTRY.md` с канонической классификацией подтверждённых проектов;
- Intelverbum опубликован как реальный production-кейс без раскрытия приватного репозитория;
- brand-mark Intelverbum добавлен в commit `2886b69b3d54dd21e820dc9a0dc9e721e6c32b0c`, production deploy и visual QA пройдены;
- Web Audit Lab получил публичную GitHub-ссылку в commit `473afef9c66ee9060ed0cff5013313ae9edd2197`, production deploy и visual QA пройдены;
- для Phone Operator Detector выполнен отдельный security/publication audit;
- исходный приватный репозиторий Phone Operator Detector не открывался из-за чувствительных Excel-файлов в истории;
- создан независимый очищенный публичный репозиторий `stalar78/phone-operator-detector-public` без private Git history, реальных Excel-файлов и скачанных operator-reference CSV snapshots;
- публичный snapshot прошёл 26 тестов и compile validation;
- ссылка на публичный репозиторий добавлена в карточку Phone Operator Detector commit `b5a8b93`;
- production deploy и responsive visual QA карточки Phone Operator Detector пройдены.

### 10. Dependency security

- выполнен диагностический `npm audit` без автоматических исправлений;
- runtime advisory React Router устранён patch-обновлением `react-router-dom` и `react-router` до `6.30.4`;
- изменение зафиксировано commit `c3333bb91e354bc7e9909db8c838a9a13aa26fc4` (`Update React Router security patch`);
- `@remix-run/router` обновлён транзитивно до `1.23.3`;
- Vite остался на `5.4.21`;
- после обновления осталось 4 tooling-уязвимости: 1 low, 2 moderate, 1 high;
- оставшиеся advisories относятся к `@babel/core`, `postcss`, `esbuild` и `vite`, а не к production runtime bundle;
- `npm run build`, technical QA и visual QA после production deploy пройдены;
- `npm audit fix --force` не применялся и не должен применяться без отдельного major-upgrade плана.

### 11. Семантика Hero страницы разработки

- в `src/pages/WebsiteLaunch.tsx` внутренний Hero wrapper изменён с `<section>` на `<div>`;
- `aria-labelledby`, `h1`, Tailwind classes, текст, aside, SEO, routing и contact logic не менялись;
- изменение зафиксировано commit `239e5e77c2b00c9e3d755de09f15a81480291c6f` (`Fix nested Hero section semantics`);
- production deploy выполнен;
- desktop/mobile visual QA пройдены;
- Console и Network в браузере проверены, ошибок нет.

### 12. Route-level code splitting

- production Lighthouse baseline показал высокий mobile TBT и значительный объём неиспользуемого JavaScript;
- в commit `f25c8353691c40597a575154d1b2283fc6c6d8b9` (`Add route-level code splitting`) lazy loading добавлен для `WebsiteImprovement`, `WebsiteAudit`, `WebsiteLaunch`, `Privacy`, `Terms` и `NotFound`;
- главная страница осталась eager, а в `App.tsx` добавлена единая нейтральная `Suspense` fallback-обёртка;
- route paths, metadata, structured data, analytics, контент и генератор service-page HTML не менялись;
- основной JS chunk уменьшился с 556116 до 501271 bytes, gzip — с 154961 до 148734 bytes;
- предупреждение Vite о chunk больше 500 kB исчезло;
- production deploy, direct-route checks, SPA navigation, Console и Network QA пройдены;
- контрольные 12 Lighthouse-прогонов подтвердили корректную загрузку только нужных route chunks;
- JS transfer уменьшился примерно на 41–55 KB, unused JS — примерно на 34–38 KB на проверенных маршрутах;
- итог классифицирован как modest improvement: технический проход закрыт, дальнейшая полировка Lighthouse без пользовательской проблемы не является приоритетом.


### 13. Страница разработки веб-приложений и личных кабинетов

- контентная стратегия согласована вокруг коммерческого намерения «разработка веб-приложений на заказ»;
- подтверждено, что работа может включать решение целиком или отдельный frontend, backend, базу данных, интеграцию либо интерфейсный слой;
- подтверждены клиентские, партнёрские и кабинеты сотрудников, авторизация, роли и разграничение доступа;
- в commit `6fe648fb3d037390773458e2e8f581fa7dcc4b51` (`Add web application development service page`) добавлен маршрут `/razrabotka-veb-prilozhenij/`;
- добавлены data source `src/data/webApplicationDevelopment.ts` и lazy-loaded страница `src/pages/WebApplicationDevelopment.tsx`;
- добавлены route-specific metadata, canonical, Open Graph, Twitter metadata, WebPage/Service JSON-LD и федеральный `areaServed: Россия`;
- добавлены MPA entry, детерминированно сгенерированный HTML, sitemap entry, внутренняя ссылка с главной и контекст формы `Веб-приложение / личный кабинет`;
- в качестве подтверждённых компетенций использованы Intelverbum, обезличенная закрытая информационная система и Phone Operator Detector с сохранением ограничений публикации;
- два запуска generator подтвердили детерминированность, `npm run build` и `git diff --check` прошли;
- GitHub review commit пройден без блокирующих замечаний;
- production deploy выполнен из текущего `main`, generator остался детерминированным, build и `nginx -t` прошли;
- канонический URL со слешем отвечает `200 OK`, URL без слеша перенаправляется `301` на канонический адрес;
- production-проверка подтвердила title, description, canonical, `og:url`, JSON-LD и sitemap entry;
- desktop/mobile visual QA, Console и Network QA пройдены без ошибок.
- новый URL `https://stalarvision.ru/razrabotka-veb-prilozhenij/` отправлен на переобход в Яндекс Вебмастере 2026-07-18 и находится в очереди;
- по состоянию на момент проверки главная, `/audit-sajta/` и `/dorabotka-sajta/` обработаны, а `/razrabotka-sajta/` и новая страница ещё находятся в очереди; повторная отправка не требуется.

## Текущие технические наблюдения

- после React Router patch остаются 4 tooling vulnerabilities: 1 low, 2 moderate, 1 high;
- нельзя запускать `npm audit fix --force` без отдельного анализа major upgrade Vite;
- в `package.json` отсутствует script `lint`;
- общие данные structured data в generator пока частично дублируются относительно runtime source of truth;
- Lighthouse runtime-метрики имеют заметную вариативность, поэтому дальнейшие оптимизации должны опираться на конкретную пользовательскую проблему или реальные полевые данные.

## Следующие шаги

1. Дождаться обработки `/razrabotka-sajta/` и `/razrabotka-veb-prilozhenij/` в очереди Яндекс Вебмастера без повторной отправки.
2. Позже проверить статус индексирования четырёх коммерческих страниц в Яндексе и Google.
3. Наблюдать показы, поисковые запросы, переходы и обращения без преждевременных выводов по первым дням.
4. Продолжать использовать `contact_form_success` и именованные контактные цели как основные цели конверсии.
5. Следующий growth-этап выбирать после первичной проверки обработки и индексирования; tooling upgrade и дальнейшая полировка Lighthouse не являются текущим приоритетом.

## Что не является приоритетом сейчас

- дальнейшая полировка Lighthouse без подтверждённой пользовательской проблемы;
- большой редизайн;
- миграция на Next.js;
- тяжёлый backend или CMS;
- массовое создание десятков SEO-страниц;
- искусственные региональные страницы;
- фиктивный адрес;
- автоматическое исправление зависимостей через `npm audit fix --force`;
- массовая публикация всех приватных GitHub-репозиториев без предварительного аудита.

## Рабочий процесс

1. GPT определяет один следующий обоснованный шаг.
2. GPT готовит точный prompt для Codex на английском языке.
3. Codex изменяет код, но не `docs/*`, не commit и не push.
4. Владелец проверяет изменения, делает commit и push.
5. GPT проводит GitHub review и обновляет docs.
6. Владелец выполняет безопасный production deploy.
7. Результат проверяется вручную перед следующим этапом.
