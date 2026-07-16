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
- создан и опубликован маршрут `/dorabotka-sajta/`;
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
Реализовано и проверено:
- создан `src/lib/structuredData.ts`;
- создан `src/data/structuredData.ts`;
- JSON-LD подключён в `src/pages/Home.tsx` и `src/pages/WebsiteImprovement.tsx`;
- на `/` добавлены `Organization`, `Person`, `WebSite`, `WebPage`;
- на `/dorabotka-sajta/` дополнительно добавлен `Service`;
- `Service.areaServed` установлен как Россия;
- используется один runtime JSON-LD script со стабильным id и cleanup для SPA-переходов;
- в production DOM подтверждено наличие JSON-LD только на нужных маршрутах.

### Этап 12. Внешняя проверка structured data
Проверено через Schema.org Validator и Google Rich Results Test:
- главная страница распознаётся без ошибок и предупреждений Schema.org;
- `/dorabotka-sajta/` распознаётся без ошибок и предупреждений Schema.org;
- Google Rich Results Test обнаруживает structured data после выполнения JavaScript;
- предупреждения об отсутствующих `address` и `image` являются необязательными;
- `address` сознательно не добавляется, поскольку физический офис не подтверждён.

### Этап 13. Google Search Console
Выполнено:
- создан доменный ресурс `stalarvision.ru`;
- право собственности подтверждено через DNS TXT-запись;
- главная страница подтверждённо находится в индексе Google;
- коммерческая страница была обнаружена Google;
- sitemap обнаружен Google;
- для главной и коммерческой страницы отправлялись запросы на индексирование.

Критический результат первоначальной проверки:
- Google просканировал страницу успешно;
- индексирование разрешено;
- URL находился в индексе;
- canonical, указанный пользователем, был распознан как `https://stalarvision.ru/`;
- сохранённый Google HTML содержал homepage title, description и canonical;
- runtime metadata страницы услуги не попали в сохранённый HTML Search Console.

После перехода на canonical со слешем:
- опубликованная версия `https://stalarvision.ru/dorabotka-sajta/` доступна Google;
- live test подтверждает возможность индексирования;
- запрос на индексирование отправлен;
- данные индекса для нового канонического URL ещё обновляются.

### Этап 14. Route-specific static HTML
Реализован минимальный Vite MPA слой без миграции на Next.js:
- `vite.config.ts` собирает `index.html` и `dorabotka-sajta/index.html` как отдельные HTML entries;
- build создаёт `dist/index.html` и `dist/dorabotka-sajta/index.html`;
- route-specific HTML содержит правильные title, description, canonical, OG/Twitter и JSON-LD до выполнения JavaScript;
- static JSON-LD использует тот же id `stalar-structured-data`, что и runtime helper;
- React Router и визуальная реализация не изменялись.

Production-проверка подтвердила:
- `dist/dorabotka-sajta/index.html` существует;
- `/dorabotka-sajta` отвечает `301` на `/dorabotka-sajta/`;
- `/dorabotka-sajta/` отвечает `200`;
- Nginx реально отдаёт route-specific HTML;
- в исходном HTML присутствуют правильные title, canonical и JSON-LD.

### Этап 15. Trailing-slash alignment
Все SEO-сигналы приведены к фактическому конечному URL:
- canonical: `https://stalarvision.ru/dorabotka-sajta/`;
- `og:url`: `https://stalarvision.ru/dorabotka-sajta/`;
- sitemap использует URL со слешем;
- внутренняя ссылка с главной использует `/dorabotka-sajta/`;
- static и runtime JSON-LD используют `/#webpage` и `/#service`;
- route-specific URL без завершающего слеша удалены из SEO-слоя.

### Этап 16. Mobile QA и контекст формы
Проведена проверка на ширине 390 px:
- горизонтальный overflow не обнаружен;
- mobile menu, Process, FAQ, Contact и Footer отображаются корректно;
- переходы из мобильного меню закрывают меню и приводят к нужным секциям;
- overlap заголовков с фиксированным Navbar не воспроизведён;
- `src/index.css` менять не потребовалось.

Исправления формы:
- placeholder контакта заменён на нейтральный `@username или name@example.com`;
- добавлен централизованный тип проекта `Доработка существующего сайта`;
- `Contact` принимает optional `defaultProjectType`;
- главная сохраняет default `Landing Page`;
- `/dorabotka-sajta/` использует default `Доработка существующего сайта`;
- reset после успешной отправки и honeypot сохраняет route-specific default;
- Web3Forms payload и endpoint не изменялись.

## Текущий статус

Проект находится на стадии:

**production-ready polished landing + первая коммерческая SEO-страница с route-specific static HTML + согласованный trailing-slash canonical + завершённый mobile QA формы**

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

Ближайший порядок:
1. развернуть commit `b1ed8aa` на production;
2. проверить нейтральный placeholder и route-specific default формы на `/` и `/dorabotka-sajta/`;
3. дождаться повторного обхода canonical URL в Google Search Console;
4. убедиться, что user-declared canonical равен `https://stalarvision.ru/dorabotka-sajta/`;
5. проверить Яндекс Вебмастер;
6. подготовить вторую страницу услуги — технического аудита сайта;
7. провести инвентаризацию реальных проектов для будущих кейсов;
8. настроить цели Яндекс Метрики;
9. отдельно разобрать текущий `npm audit` без `--force`.

## Открытые вопросы

- когда Google обновит сохранённый HTML и user-declared canonical после повторного обхода;
- нужно ли автоматизировать генерацию route-specific HTML перед созданием следующих service pages;
- какие проекты первыми оформить как полноценные кейсы;
- какие зависимости формируют предупреждения `npm audit`;
- какие посадочные страницы, объявления и цели использовать в первом тесте Яндекс Директа.

## Что не является приоритетом прямо сейчас

- большой редизайн;
- тяжёлый backend;
- сложная CMS или админка;
- массовое создание десятков SEO-страниц;
- миграция на Next.js;
- dynamic rendering по user-agent;
- `npm audit fix --force` без анализа;
- искусственные региональные страницы;
- добавление фиктивного адреса.

## Принцип следующего шага

1. одна обоснованная задача;
2. реализация кода через Codex;
3. build, commit и push владельцем;
4. GitHub review через GPT;
5. обновление docs через GPT;
6. безопасный production deploy;
7. ручная проверка результата перед следующим этапом.
