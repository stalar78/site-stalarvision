# Roadmap

## Что уже сделано

### Этап 1. Базовая документация и проектная рамка
- созданы базовые docs и README;
- зафиксированы роли, workflow и позиционирование.

### Этап 2. Централизация контента
- контент вынесен в `src/data/*`;
- смыслы отделены от UI;
- определены source-of-truth файлы.

### Этап 3. Credibility cleanup
- удалены фейковые trust signals, отзывы и неподтверждённые метрики;
- placeholder-контент приведён к честной рамке.

### Этап 4. Реальный профиль владельца
- добавлены реальные бренд, имя, юридические данные и контакты;
- профиль централизован в `src/data/profile.ts`.

### Этап 5. Launch-ready инфраструктура
- настроены VPS, nginx, домен и SSL;
- опубликован сайт;
- добавлены privacy/legal page, terms page, 404 и форма Web3Forms.

### Этап 6. Mobile polish
- улучшена адаптивность;
- исправлены проблемные блоки;
- добавлены fallback-механизмы для изображений;
- подача переведена ближе к первому лицу.

### Этап 7. Post-launch polish
- доработаны contact flow и legal тексты;
- добавлен телефон;
- настроены canonical, Open Graph, Twitter meta, `robots.txt` и `sitemap.xml`.

### Этап 8. Conversion polish after launch
- усилены Hero, Contact, Services, Portfolio и FAQ;
- отполированы Navbar и Footer;
- добавлен умеренный branded motion;
- обновлены share-preview и favicon consistency;
- удалены устаревшие assets.

### Этап 9. SEO growth foundation
- первым направлением выбрана доработка и развитие существующих сайтов;
- создан и опубликован маршрут `/dorabotka-sajta`;
- добавлены `src/data/websiteImprovement.ts` и `src/pages/WebsiteImprovement.tsx`;
- добавлены отдельные metadata, canonical, OG/Twitter, sitemap entry и внутренняя ссылка с главной;
- страница прошла production build, прямое открытие и desktop-проверку;
- nginx подтверждённо отдаёт `/home/stanislav/project/stalarvision/dist`.

Важное уточнение географии:
- услуги оказываются удалённо по всей России;
- Санкт-Петербург и Ленинградская область — первый тестовый регион будущей кампании в Яндекс Директе;
- это не ограничение территории услуги и не подтверждение физического офиса.

### Этап 10. Production build isolation
- обнаружена зависимость Vite от внешнего `/home/stanislav/postcss.config.mjs`;
- внешний файл не изменялся;
- в корень репозитория добавлен локальный `postcss.config.mjs`;
- сборка изолирована от соседних проектов;
- зафиксировано правило: nginx reload только после успешных build и `nginx -t`.

### Этап 11. Runtime structured data
Реализовано и проверено в production:
- создан `src/lib/structuredData.ts`;
- создан `src/data/structuredData.ts`;
- JSON-LD подключён в `src/pages/Home.tsx` и `src/pages/WebsiteImprovement.tsx`;
- на `/` добавлены `Organization`, `Person`, `WebSite`, `WebPage`;
- на `/dorabotka-sajta` дополнительно добавлен `Service`;
- `Service.areaServed` установлен как Россия;
- используется один runtime JSON-LD script со стабильным id и cleanup для SPA-переходов;
- `index.html` не содержит маршрутно-зависимую JSON-LD разметку;
- не добавлены неподтверждённые address, LocalBusiness, Offer, цены, рейтинги и отзывы;
- локальный и production build прошли успешно;
- nginx config test прошёл успешно;
- в production DOM подтверждено:
  - `/` — один JSON-LD script с `Organization`, `Person`, `WebSite`, `WebPage`;
  - `/dorabotka-sajta` — один JSON-LD script с `Service`;
  - `/privacy` — 0 JSON-LD scripts;
  - `/terms` — 0 JSON-LD scripts;
  - 404 — 0 JSON-LD scripts.

### Этап 12. Внешняя проверка structured data
Проверено через Schema.org Validator и Google Rich Results Test:
- главная страница распознаётся без ошибок и предупреждений Schema.org;
- `/dorabotka-sajta` распознаётся без ошибок и предупреждений Schema.org;
- Google Rich Results Test обнаруживает структурированные данные после выполнения JavaScript;
- сущности `Organization` и связанные данные проходят без критических ошибок;
- предупреждения об отсутствующих `address` и `image` являются необязательными;
- `address` сознательно не добавляется, поскольку физический офис не подтверждён;
- существующий `logo` распознаётся;
- добавление отдельного `image` не является обязательным исправлением.

Важное наблюдение:
- исходный HTML SPA для `/dorabotka-sajta` до выполнения JavaScript содержит homepage title, description и canonical;
- маршрутные metadata и canonical обновляются runtime-кодом;
- успешная проверка JSON-LD подтверждает выполнение JavaScript, но сама по себе не подтверждает, что выбранный поисковиком canonical совпадает с `/dorabotka-sajta`;
- перед внедрением пререндеринга нужно проверить URL через Google Search Console URL Inspection и Яндекс Вебмастер.

### Этап 13. Google Search Console
Выполнено:
- создан доменный ресурс `stalarvision.ru`;
- право собственности подтверждено через DNS TXT-запись;
- главная страница подтверждённо находится в индексе Google;
- для главной страницы отправлен повторный запрос на индексирование;
- для `https://stalarvision.ru/dorabotka-sajta` отправлен запрос на индексирование;
- Search Console начал обработку данных по ресурсу.

Ещё не подтверждено:
- успешная обработка sitemap в Search Console;
- фактическая индексация `/dorabotka-sajta` после отправленного запроса;
- user-declared canonical и Google-selected canonical для `/dorabotka-sajta`;
- route-specific title и description в отрендерированной версии Google.

## Текущий статус

Проект находится на стадии:

**production-ready polished landing + опубликованная первая коммерческая SEO-страница + проверенный runtime JSON-LD + подключённый Google Search Console**

Сайт уже прошёл:
- запуск;
- UX/conversion/trust/brand polish;
- базовую SEO/share-подготовку;
- создание первой service page;
- изоляцию production build;
- внедрение, production-проверку и внешнюю валидацию structured data;
- подтверждение домена в Google Search Console и отправку ключевых URL на индексирование.

## Подтверждённая коммерческая и рекламная рамка

- работа выполняется удалённо по всей России;
- сайт и structured data не должны ограничивать услугу Санкт-Петербургом;
- Санкт-Петербург и Ленинградская область — первый регион теста Яндекс Директа;
- Москва и Московская область могут рассматриваться как следующий рекламный тест;
- приоритет услуг:
  1. доработка существующих сайтов;
  2. технический аудит сайта;
  3. разработка нового сайта;
  4. веб-приложения и личные кабинеты;
  5. интеграции и автоматизация;
- предпочтительная загрузка — один крупный или два средних проекта;
- каждый реальный кейс публикуется только после проверки фактов и допустимости раскрытия.

## Что дальше

Следующие шаги выполнять по одному, без смешивания нескольких крупных задач.

Ближайший порядок:
1. подтвердить успешный статус `https://stalarvision.ru/sitemap.xml` в Google Search Console;
2. дождаться обработки запроса на индексирование `/dorabotka-sajta`;
3. проверить URL через Google Search Console URL Inspection;
4. сравнить user-declared canonical и Google-selected canonical;
5. проверить rendered HTML и фактический title/description/canonical;
6. проверить URL в Яндекс Вебмастере и при необходимости отправить на переобход;
7. только после этого принять решение о build-time пререндеринге или route-specific static HTML;
8. пройти отдельный mobile QA `/dorabotka-sajta`;
9. подготовить вторую страницу услуги — технического аудита сайта;
10. провести инвентаризацию реальных проектов для будущих кейсов;
11. настроить цели Яндекс Метрики;
12. подготовить структуру первого теста Яндекс Директа для Санкт-Петербурга и Ленинградской области;
13. отдельно разобрать текущий `npm audit` без `--force`.

## Предварительное решение по пререндерингу

- немедленная миграция на Next.js не нужна;
- динамический рендеринг для ботов не рассматривается;
- runtime JSON-LD работает и доступен внешнему рендереру;
- возможная проблема остаётся не в JSON-LD, а в исходных route-specific metadata и canonical;
- пререндеринг не внедряется вслепую: сначала проверяется фактический canonical в Search Console;
- если Google выбирает главную как canonical для `/dorabotka-sajta` или не видит маршрутные metadata, следующим техническим этапом станет build-time route-specific HTML/prerender.

## Открытые вопросы

- обработан ли sitemap в Google Search Console;
- какой canonical Google выбрал для `/dorabotka-sajta`;
- видит ли Google route-specific title и description после рендеринга;
- нужен ли build-time пререндеринг в текущем Vite-проекте;
- какие проекты первыми оформить как полноценные кейсы;
- оставить ли mixed RU/EN framing в Portfolio;
- нужен ли дополнительный legal/privacy слой;
- какие зависимости формируют предупреждения `npm audit`;
- какие посадочные страницы, объявления и цели использовать в первом тесте Яндекс Директа.

## Что не является приоритетом прямо сейчас

- большой редизайн;
- тяжёлый backend;
- сложная CMS или админка;
- массовое создание десятков SEO-страниц;
- миграция на Next.js “на всякий случай”;
- dynamic rendering по user-agent;
- `npm audit fix --force` без анализа;
- искусственные региональные страницы без данных о спросе и отдельной стратегии;
- добавление фиктивного адреса ради устранения необязательного предупреждения валидатора.

## Принцип следующего шага

1. одна обоснованная задача;
2. реализация кода через Codex;
3. build, commit и push владельцем;
4. GitHub review через GPT;
5. обновление docs через GPT;
6. безопасный production deploy;
7. ручная проверка результата перед следующим этапом.
