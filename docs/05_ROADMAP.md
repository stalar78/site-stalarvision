# Roadmap

## Текущее состояние

Stalar Vision — production-ready коммерческий сайт одного независимого разработчика. Сайт работает на `https://stalarvision.ru`, использует React + TypeScript + Vite + Tailwind, HTTPS, Nginx, Web3Forms и Яндекс Метрику.

Опубликованы и проиндексированы Google три самостоятельные коммерческие страницы:

- `https://stalarvision.ru/dorabotka-sajta/`
- `https://stalarvision.ru/audit-sajta/`
- `https://stalarvision.ru/razrabotka-sajta/`

Для всех трёх страниц подтверждены корректные canonical с завершающим слешем, успешное сканирование Googlebot и совпадение user-declared canonical с Google-selected canonical.

Сайт добавлен в Яндекс Вебмастер, права подтверждены HTML-файлом, sitemap добавлен, главная и три коммерческие страницы отправлены на переобход.

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
- текущий ожидаемый этап — обработка очереди и появление URL в поисковой базе Яндекса.

### 8. Яндекс Метрика

- счётчик `108788776` установлен и получает просмотры страниц;
- SPA-переходы отправляются отдельными pageview;
- включены `webvisor`, `clickmap` и `trackLinks`;
- создана пользовательская цель `Успешная отправка формы` с идентификатором `contact_form_success`;
- в `src/lib/utils.ts` добавлены `YANDEX_METRIKA_GOALS` и безопасный helper `trackYandexMetrikaGoal`;
- цель вызывается только после подтверждённого успешного ответа Web3Forms;
- honeypot, validation failure, cooldown, network error и неуспешный ответ цель не вызывают;
- персональные данные в Метрику не передаются;
- production-тест подтверждён: сообщение об успехе показано, письмо получено, Метрика зарегистрировала 1 достижение и 1 целевой визит;
- автоцель Метрики `Отправка формы` также срабатывает, но основной конверсией для отчётов и будущей рекламы считается пользовательская цель `contact_form_success`.

## Текущие технические наблюдения

- Vite сообщает предупреждение о chunk больше 500 kB; сборка успешна, это не блокирует текущий этап;
- `npm install` сообщает 6 vulnerabilities: 1 low, 4 moderate, 1 high;
- нельзя запускать `npm audit fix --force` без отдельного анализа;
- общие данные `Organization`, `Person`, `WebSite` в generator пока заданы отдельно от `profile.ts`; это неблокирующий риск будущего рассинхрона;
- на странице `/razrabotka-sajta/` есть неблокирующая семантическая мелочь: вложенный `<section>` в Hero;
- визуальный QA `/razrabotka-sajta/` на mobile, промежуточной ширине и desktop пройден успешно.

## Следующие шаги

1. Дождаться обработки URL в Яндекс Вебмастере и проверить индексирование без повторной отправки.
2. Настроить отдельные пользовательские цели Метрики для ключевых каналов связи: Telegram, email, телефон и MAX.
3. Использовать `contact_form_success` как основную цель заявки в отчётах и будущих рекламных кампаниях.
4. Провести инвентаризацию реальных проектов для будущих кейсов.
5. Отдельно разобрать dependency audit без `--force`.
6. Позже устранить дублирование общего профиля между runtime structured data и HTML generator.
7. При отдельном техническом проходе исправить вложенный `<section>` в Hero и оценить необходимость code splitting.

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
4. Владелец проверяет изменения, делает commit и push.
5. GPT проводит GitHub review и обновляет docs.
6. Владелец выполняет безопасный production deploy.
7. Результат проверяется вручную перед следующим этапом.
