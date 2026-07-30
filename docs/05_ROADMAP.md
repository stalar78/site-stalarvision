# Roadmap

## Текущее состояние

Stalar Vision — production-ready коммерческий сайт одного независимого разработчика. Сайт работает на `https://stalarvision.ru`, использует React + TypeScript + Vite + Tailwind, HTTPS, Nginx, Web3Forms и Яндекс Метрику.

Опубликованы четыре самостоятельные коммерческие страницы:

- `https://stalarvision.ru/dorabotka-sajta/`
- `https://stalarvision.ru/audit-sajta/`
- `https://stalarvision.ru/razrabotka-sajta/`
- `https://stalarvision.ru/razrabotka-veb-prilozhenij/`

Для страниц настроены route-specific static HTML, metadata, JSON-LD, sitemap entries, canonical URL и Nginx redirects. Первые три страницы проиндексированы Google; четвёртая опубликована и отправлена на переобход.

Сайт добавлен в Яндекс Вебмастер, права подтверждены HTML-файлом, sitemap добавлен. Исправлен server-side soft 404: неизвестные URL и файлы возвращают настоящий HTTP `404`.

На главной опубликованы подтверждённые реальные проекты и собственные demo-продукты. Intelverbum представлен как production-кейс; QuoteFlow и ApprovalFlow — как публичные workflow-demo с живыми demo и открытыми репозиториями.

## Что уже сделано

### 1. Проектная и контентная рамка

- сайт позиционируется как сайт одного независимого разработчика, а не агентства;
- зафиксирован спокойный деловой tone of voice;
- удалены неподтверждённые отзывы, клиенты, метрики и другие фиктивные trust signals;
- профиль, юридические данные, контакты и контент централизованы в `src/data/*`;
- услуги оказываются удалённо по всей России;
- Санкт-Петербург и Ленинградская область используются только как тестовый рекламный регион, а не как ограничение услуги или подтверждение офиса.

### 2. Production-инфраструктура

- VPS, Ubuntu, Nginx, домен и SSL настроены;
- production deploy выполняется через `git pull`, `npm install`, `npm run build`, `nginx -t`, reload;
- добавлены privacy/legal page, terms page, 404 и форма Web3Forms;
- локальный `postcss.config.mjs` изолирует проект от внешней конфигурации родительского каталога;
- неизвестные страницы и файлы возвращают настоящий HTTP `404`, а React NotFound сохраняется как визуальная оболочка;
- `/privacy` и `/terms` сохраняют `200`, варианты со слешем перенаправляются на канонические URL;
- commercial MPA routes возвращают `200` со слешем и `301` без слеша.

### 3. SEO, structured data и static HTML

- настроены canonical, Open Graph, Twitter meta, `robots.txt` и `sitemap.xml`;
- добавлены runtime metadata и JSON-LD helpers;
- используются `Organization`, `Person`, `WebSite`, `WebPage`, `Service`;
- не используются фиктивные `address`, `LocalBusiness`, `Offer`, цены, рейтинги и отзывы;
- service area коммерческих страниц — Россия;
- Vite работает в MPA-режиме для главной и четырёх service pages;
- `src/data/servicePageSeo.json` используется как единый источник route-specific SEO;
- `scripts/service-page.template.html` и `scripts/generate-service-html.mjs` формируют детерминированный static HTML перед Vite build.

### 4. Коммерческие страницы

- опубликованы `/dorabotka-sajta/`, `/audit-sajta/`, `/razrabotka-sajta/` и `/razrabotka-veb-prilozhenij/`;
- каждая страница имеет самостоятельный контент, route, metadata, JSON-LD, sitemap entry и контекст формы;
- страница веб-приложений ориентирована на намерение «разработка веб-приложений на заказ»;
- подтверждены решения целиком или отдельные frontend, backend, база данных, интеграция и интерфейсный слой;
- подтверждены личные кабинеты, роли, авторизация и разграничение доступа;
- production-проверки подтвердили direct load, redirects, title, canonical, `og:url`, JSON-LD, desktop/mobile, Console и Network.

### 5. Яндекс Вебмастер и Метрика

- права подтверждены файлом `public/yandex_04d5d400834f4551.html`;
- sitemap добавлен;
- главная и четыре коммерческие страницы отправлены на переобход;
- повторно отправлять те же URL без причины не нужно;
- после исправления real 404 нужно дождаться повторной диагностики Яндекса;
- счётчик Метрики: `108788776`;
- основная цель формы: `contact_form_success` / `Успешная отправка формы`;
- подтверждены цели `Переход в Telegram`, `Переход в MAX`, `Клик по email`, `Клик по телефону`.

### 6. Реальные проекты и портфолио

Канонический реестр: `docs/06_PORTFOLIO_REGISTRY.md`.

- Intelverbum опубликован как реальный production-кейс без раскрытия приватного репозитория;
- Web Audit Lab имеет публичный GitHub repository;
- Phone Operator Detector опубликован через отдельный очищенный public snapshot без private history и чувствительных данных;
- QuoteFlow прошёл engineering/publication audit и опубликован как собственный публичный demo-проект;
- QuoteFlow demo: `https://quoteflow.stalarvision.ru/`;
- QuoteFlow repository: `https://github.com/stalar78/quoteflow-demo`;
- ApprovalFlow опубликован как собственный публичный workflow-demo;
- ApprovalFlow demo: `https://approvalflow.stalarvision.ru/`;
- ApprovalFlow repository: `https://github.com/stalar78/approvalflow`.

### 7. Route-level code splitting

- в commit `f25c8353691c40597a575154d1b2283fc6c6d8b9` lazy loading добавлен для service/legal/404 routes;
- основной JS chunk уменьшился, предупреждение Vite о chunk больше 500 kB исчезло;
- контрольные Lighthouse-прогоны подтвердили уменьшение JS transfer и unused JS;
- итог классифицирован как modest improvement;
- дальнейшая полировка Lighthouse без пользовательской проблемы не является приоритетом.

### 8. QuoteFlow и ApprovalFlow в основном портфолио

- в commit `1d469de004a16119b8e245bc55fa4ee8ba12832e` (`Add workflow projects to portfolio`) QuoteFlow перенесён из отдельного software-блока в основное портфолио;
- добавлен ApprovalFlow с публичными demo и repository;
- source of truth основных карточек портфолио — `src/data/cases.ts`;
- специализированные software cases продолжают храниться в `src/data/softwareCases.ts`;
- для QuoteFlow и ApprovalFlow добавлены сворачиваемые блоки «Перспектива развития»;
- перспективы явно отделены от функций текущих demo-версий и не должны подаваться как уже реализованные возможности.

### 9. Улучшение карточек проектов

- в commit `0b90b49f99978cc9a046a07df5efeeced0b7c3d8` (`Improve portfolio covers and project perspectives`) унифицированы названия и категории;
- устранено пересечение category/status badges;
- QuoteFlow получил кодовую обложку в основном портфолио;
- перспективы QuoteFlow и ApprovalFlow сгруппированы по направлениям;
- сохранён disclaimer о том, что это направления возможного развития, а не текущие функции demo.

### 10. Практический раскрываемый Technology Stack

- в commit `704057df1e2b87f8151704f1e705a07fe23acf49` (`Add expandable technology stack details`) раздел технологий перестроен из декоративного списка в практическую витрину компетенций;
- добавлен фильтр `Все` и категории Frontend, Backend, Database, Testing, DevOps и Tools;
- каждая технология раскрывается через accessible `details/summary`;
- для технологий добавлены task-oriented описания и подтверждённые проекты применения;
- список уточнён по фактическому стеку Stalarvision, Intelverbum, QuoteFlow, ApprovalFlow, LocalKit и других подтверждённых проектов;
- неподтверждённые сертификаты, достижения и численные метрики не добавлялись.

### 11. Dependency security

- React Router runtime advisory устранён обновлением до `6.30.4`;
- Vite остаётся на `5.4.21`;
- остаются 4 tooling vulnerabilities: 1 low, 2 moderate, 1 high;
- `npm audit fix --force` не применять без отдельного major-upgrade плана.

## Текущие технические наблюдения

- build проходит успешно;
- в `package.json` отсутствует script `lint`;
- общие structured-data сущности частично дублируются между runtime и HTML generator;
- Lighthouse runtime-метрики вариативны;
- сервер сообщает `System restart required`; плановое обновление и перезагрузка должны выполняться отдельным инфраструктурным этапом с проверкой всех размещённых сервисов.

Эти пункты не являются текущим growth-приоритетом.

## Следующие шаги

1. Дождаться повторной диагностики Яндекс Вебмастера после исправления real 404.
2. Дождаться обработки оставшихся коммерческих URL без повторной отправки.
3. Проверить индексирование четырёх коммерческих страниц в Яндексе и Google.
4. Наблюдать показы, поисковые запросы, переходы и обращения без преждевременных выводов.
5. Использовать `contact_form_success` и именованные контактные цели как основные conversion signals.
6. Использовать QuoteFlow и ApprovalFlow как проверяемые доказательства компетенций; отдельные case studies создавать только при обоснованной conversion-потребности.
7. Следующий growth-этап выбирать на основе реальных поисковых данных, а не ради количества страниц.

## Что не является приоритетом сейчас

- дальнейшая полировка Lighthouse без подтверждённой проблемы;
- большой редизайн;
- миграция на Next.js;
- тяжёлый backend или CMS для самого сайта;
- массовое создание десятков SEO-страниц;
- искусственные региональные страницы;
- фиктивный адрес;
- `npm audit fix --force`;
- публикация приватных репозиториев без предварительного аудита.

## Рабочий процесс

1. GPT определяет один следующий обоснованный шаг.
2. GPT готовит точный prompt для Codex на английском языке.
3. Codex изменяет код, но не `docs/*`, не commit и не push.
4. Владелец проверяет изменения, делает commit и push.
5. GPT проводит GitHub review и обновляет docs.
6. Владелец выполняет безопасный production deploy.
7. Результат проверяется вручную перед следующим этапом.
