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
- `/dorabotka-sajta` отвечает `301` на `/dorabot