# Tech Guidelines

## Текущий стек

Проект построен на:
- React;
- TypeScript;
- Vite;
- Tailwind CSS;
- React Router;
- Framer Motion;
- Lucide Icons.

## Архитектурный принцип

Проект не должен усложняться раньше времени.

Предпочтение:
- простым data-файлам;
- понятным компонентам;
- предсказуемой структуре;
- минимальному количеству абстракций;
- точечным изменениям без большого рефакторинга.

## Что считается нормой

Нормально:
- централизовать контент в `src/data/*`;
- держать компоненты простыми;
- использовать небольшие локальные состояния там, где это реально нужно;
- делать точечные улучшения;
- развивать проект по шагам;
- добавлять специализированные helpers только для повторяемой технической задачи.

## Что не приветствуется

Не приветствуется:
- бессмысленный рефакторинг;
- переусложнённая архитектура;
- лишние слои абстракции;
- новые библиотеки без явной пользы;
- большие переписывания “на всякий случай”.

## Текущий source of truth

Для production-версии данные должны оставаться централизованными:
- `src/data/profile.ts` — бренд, владелец, контакты, CTA, production URL и базовые SEO/share-поля;
- `src/data/site.ts` — тексты и структура homepage;
- `src/data/services.ts` — секция услуг и внутренние ссылки на service pages;
- `src/data/websiteImprovement.ts` — контент и SEO-данные `/dorabotka-sajta`;
- `src/data/structuredData.ts` — JSON-LD графы главной и страницы услуги;
- `src/data/contacts.ts` — contact-секция и Web3Forms;
- `src/data/cases.ts` и `src/data/softwareCases.ts` — примеры проектов;
- `src/data/faq.ts` — FAQ;
- `src/data/legal.ts` — privacy/legal copy;
- `src/lib/meta.ts` — runtime metadata;
- `src/lib/structuredData.ts` — runtime lifecycle JSON-LD.

Если меняются домен, OG image, контакты, география, structured data или верхнеуровневые тексты, правка должна идти через source of truth, а не через разрозненные значения в JSX.

## Подтверждённая география

Фактическая модель:
- работа выполняется удалённо;
- услуги оказываются по всей России;
- Санкт-Петербург и Ленинградская область — первый тестовый регион будущей рекламной кампании в Яндекс Директе, а не ограничение территории оказания услуги;
- неподтверждённый локальный адрес или офис добавлять нельзя.

Для `/dorabotka-sajta` видимый текст, metadata и JSON-LD используют федеральную географию.

## Маршруты

Сайт работает как SPA на React Router.

Текущие пользовательские маршруты:
- `/`;
- `/privacy`;
- `/terms`;
- `/dorabotka-sajta`;
- fallback 404.

Nginx должен использовать SPA fallback, чтобы прямое открытие пользовательских маршрутов возвращало актуальный `dist/index.html`, а маршрутизацию продолжал React Router.

## Статические файлы

Статические файлы и production-friendly assets должны жить в `public/`.

В `public/` находятся:
- `robots.txt`;
- `sitemap.xml`;
- favicon и icons;
- локальные изображения для примеров проектов;
- share-preview assets.

## Tailwind и PostCSS

Tailwind подключён через `@tailwindcss/vite` в `vite.config.ts`.

В корне проекта должен сохраняться локальный файл:

```text
postcss.config.mjs
```

Содержимое:

```js
export default {
  plugins: {},
}
```

Он изолирует Stalar Vision от PostCSS-конфигураций в родительских каталогах сервера. Нельзя удалять его как “пустой” или изменять `/home/stanislav/postcss.config.mjs`: внешний файл может принадлежать другому проекту.

## Форма

Контактная форма подключена через Web3Forms:
- без собственного backend;
- с email-доставкой;
- с минимальной сложностью;
- с согласованным privacy/legal слоем.

## SEO / sharing

В проекте есть:
- runtime meta через `src/lib/meta.ts`;
- canonical URL;
- Open Graph meta;
- Twitter meta;
- `robots.txt`;
- `sitemap.xml`;
- отдельные metadata для `/dorabotka-sajta`;
- runtime JSON-LD для `/` и `/dorabotka-sajta`.

Не нужно откатывать SEO к одному статическому `index.html`.

## Runtime JSON-LD

Structured data реализованы через:
- `src/data/structuredData.ts` — содержимое графов;
- `src/lib/structuredData.ts` — создание, обновление и cleanup одного `<script type="application/ld+json">`;
- подключения в `src/pages/Home.tsx` и `src/pages/WebsiteImprovement.tsx`.

Используется один script со стабильным id `stalar-structured-data`.

На главной публикуются:
- `Organization`;
- `Person`;
- `WebSite`;
- `WebPage`.

На `/dorabotka-sajta` дополнительно публикуется:
- `Service`;
- `areaServed` как `Country` со значением `Россия`.

При переходе на `/privacy`, `/terms` или 404 JSON-LD предыдущей страницы должен удаляться cleanup-функцией. React StrictMode и SPA-переходы не должны создавать дубликаты.

Нельзя без подтверждения добавлять:
- `LocalBusiness`;
- `ProfessionalService` в локальном смысле;
- физический адрес;
- `Offer` и цены;
- рейтинги и отзывы;
- сотрудников, число клиентов, сроки и гарантии.

## Production build и deploy

Production-папка:

```text
/home/stanislav/project/stalarvision/dist
```

Nginx должен отдавать:

```nginx
root /home/stanislav/project/stalarvision/dist;
```

Безопасный порядок:

```bash
cd /home/stanislav/project/stalarvision
git pull --ff-only origin main
npm install
npm run build
sudo nginx -t
sudo systemctl reload nginx
```

`reload` выполняется только после успешного build и успешного `nginx -t`.

Нельзя копировать `dist/index.html` и `dist/assets` вручную частями. На сервере находятся другие проекты, поэтому команды должны быть ограничены каталогом Stalar Vision и его конкретным nginx server block.

## Dependency audit

Предупреждения `npm audit` не исправляются автоматически через `npm audit fix --force` в рамках обычного SEO-деплоя.

Нужна отдельная техническая задача с проверкой:
- затронутых пакетов;
- применимости к production;
- возможности обновления без breaking changes.

## Mobile first sanity

Любые изменения проверяются:
- на телефоне;
- на промежуточной ширине;
- на desktop.

Особенно внимательно:
- Hero;
- Services;
- Portfolio;
- service pages;
- Contact;
- Footer;
- отсутствие горизонтального overflow;
- корректность SPA-переходов и cleanup runtime metadata/JSON-LD.
