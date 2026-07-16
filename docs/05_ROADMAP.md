# Roadmap

## Что уже сделано

### Этап 1. Базовая документация и проектная рамка
- созданы базовые docs и README;
- зафиксированы роли, workflow и позиционирование;
- сайт развивается как коммерческий сайт одного независимого разработчика, а не агентства и не обычного резюме.

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
- опубликован production-сайт;
- добавлены privacy/legal page, terms page, 404 и форма Web3Forms.

### Этап 6. Mobile и post-launch polish
- улучшена адаптивность;
- исправлены проблемные блоки;
- добавлены fallback-механизмы для изображений;
- усилены Hero, Contact, Services, Portfolio и FAQ;
- отполированы Navbar и Footer;
- добавлен умеренный branded motion;
- обновлены share-preview и favicon consistency.

### Этап 7. SEO/share foundation
- настроены canonical, Open Graph, Twitter meta, `robots.txt` и `sitemap.xml`;
- добавлен runtime metadata helper;
- добавлен runtime JSON-LD helper со стабильным script id `stalar-structured-data`;
- на главной используются `Organization`, `Person`, `WebSite`, `WebPage`.

### Этап 8. Первая коммерческая страница — доработка сайтов
Реализовано и опубликовано:
- маршрут `/dorabotka-sajta/`;
- `src/data/websiteImprovement.ts`;
- `src/pages/WebsiteImprovement.tsx`;
- отдельные title, description, canonical, OG/Twitter;
- runtime и static JSON-LD с `WebPage` и `Service`;
- внутренняя ссылка из карточки услуги;
- запись в sitemap;
- route-specific static HTML `dorabotka-sajta/index.html`;
- отдельная Vite MPA entry.

Production-проверка подтвердила:
- `/dorabotka-sajta` отвечает `301` на `/dorabotka-sajta/`;
- `/dorabotka-sajta/` отвечает `200`;
- Nginx отдаёт правильный route-specific HTML;
- title, canonical, `og:url` и JSON-LD присутствуют до выполнения JavaScript;
- canonical и sitemap используют URL с завершающим слешем.

Google Search Console подтвердил:
- URL `https://stalarvision.ru/dorabotka-sajta/` находится в индексе;
- индексирование разрешено;
- каноническая страница, указанная пользователем: `https://stalarvision.ru/dorabotka-sajta/`;
- каноническая страница, выбранная Google: проверенный URL.

### Этап 9. Mobile QA и контекст формы
- проведена проверка на ширине 390 px;
- горизонтальный overflow не обнаружен;
- mobile menu, Process, FAQ, Contact и Footer отображаются корректно;
- переходы из мобильного меню закрывают меню и приводят к нужным секциям;
- overlap заголовков с фиксированным Navbar не воспроизведён;
- placeholder контакта заменён на `@username или name@example.com`;
- `Contact` принимает optional `defaultProjectType`;
- главная сохраняет default `Landing Page`;
- `/dorabotka-sajta/` использует default `Доработка существующего сайта`;
- reset после успешной отправки и honeypot сохраняет route-specific default.

### Этап 10. Вторая коммерческая страница — аудит сайта
Реализовано и опубликовано:
- маршрут `/audit-sajta/`;
- `src/data/websiteAudit.ts`;
- `src/pages/WebsiteAudit.tsx`;
- route-specific static HTML `audit-sajta/index.html`;
- отдельная Vite MPA entry;
- отдельные title, description, canonical, OG/Twitter;
- runtime и static JSON-LD с `Organization`, `Person`, `WebSite`, `WebPage`, `Service`;
- `Service.areaServed` установлен как Россия;
- внутренняя ссылка из карточки услуги;
- запись в sitemap;
- контекстный тип формы `Аудит / технический разбор`.

Production-проверка подтвердила:
- `/audit-sajta` отвечает `301` на `/audit-sajta/`;
- `/audit-sajta/` отвечает `200`;
- Nginx отдаёт правильный route-specific HTML;
- title, canonical, `og:url` и JSON-LD присутствуют до выполнения JavaScript;
- sitemap содержит `https://stalarvision.ru/audit-sajta/`.

Google Search Console:
- live test подтверждает доступность страницы для Google;
- индексирование разрешено;
- запрос на индексирование отправлен;
- окончательный статус индекса ещё ожидается.

## Текущий статус

**Production-ready коммерческий сайт независимого разработчика с двумя опубликованными service pages, route-specific static HTML, согласованными trailing-slash canonical, structured data и завершённым mobile QA.**

## Подтверждённая коммерческая и рекламная рамка
- работа выполняется удалённо по всей России;
- сайт и structured data не должны ограничивать услугу Санкт-Петербургом;
- Санкт-Петербург и Ленинградская область — первый регион теста Яндекс Директа;
- это не подтверждение физического офиса;
- приоритет услуг:
  1. доработка существующих сайтов;
  2. технический аудит сайта;
  3. разработка нового сайта;
  4. веб-приложения и личные кабинеты;
  5. интеграции и автоматизация;
- предпочтительная загрузка — один крупный или два средних проекта;
- каждый кейс публикуется только после проверки фактов.

## Что дальше
1. дождаться индексации `https://stalarvision.ru/audit-sajta/` и проверить выбранный Google canonical;
2. проверить обе service pages в Яндекс Вебмастере;
3. перед созданием третьей service page решить вопрос автоматизации route-specific HTML, чтобы не поддерживать metadata и JSON-LD вручную в нескольких местах;
4. провести инвентаризацию реальных проектов для будущих кейсов;
5. настроить цели Яндекс Метрики;
6. отдельно разобрать текущий `npm audit` без `--force`.

## Открытые вопросы
- когда Google окончательно проиндексирует `/audit-sajta/`;
- какой минимальный генератор route-specific HTML использовать перед следующей service page;
- какие проекты первыми оформить как полноценные кейсы;
- какие зависимости формируют предупреждения `npm audit`;
- какие объявления и цели использовать в первом тесте Яндекс Директа.

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
