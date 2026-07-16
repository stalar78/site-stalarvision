# Tech Guidelines

## Текущий стек

Проект построен на:
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide Icons

## Архитектурный принцип

Проект не должен усложняться раньше времени.

Предпочтение:
- простым data-файлам;
- понятным компонентам;
- предсказуемой структуре;
- минимальному количеству абстракций.

## Что считается нормой

Нормально:
- централизовать контент в `src/data/*`;
- держать компоненты простыми;
- использовать небольшие локальные состояния там, где это реально нужно;
- делать точечные улучшения;
- развивать проект по шагам.

## Что не приветствуется

Не приветствуется:
- бессмысленный рефакторинг;
- переусложнённая архитектура;
- лишние слои абстракции;
- новые библиотеки без явной пользы;
- большие переписывания “на всякий случай”.

## Текущий source of truth

Для текущей production-версии уже важно держать данные централизованно:
- `src/data/profile.ts` — бренд, владелец, контакты, CTA, production URL и базовые SEO/share-поля;
- `src/data/site.ts` — тексты и структура homepage, включая верхнеуровневое positioning и CTA;
- `src/data/services.ts` — секция услуг и внутренние ссылки на самостоятельные service pages;
- `src/data/websiteImprovement.ts` — контент и SEO-данные страницы `/dorabotka-sajta`;
- `src/data/contacts.ts` — contact-секция, contact CTA и настройки формы Web3Forms;
- `src/data/cases.ts` — representative-примеры сценариев и честная рамка блока примеров;
- `src/data/faq.ts` — FAQ-копирайт и ответы на типичные вопросы перед обращением;
- `src/data/legal.ts` — privacy/legal copy и реквизиты;
- `src/lib/meta.ts` — runtime-обновление meta для маршрутов.

Если меняются домен, OG image, контактные данные или верхнеуровневые тексты секций, правка должна идти через source of truth, а не через разрозненные значения в JSX.

## Маршруты

Сайт работает как SPA на React Router.

Текущие пользовательские маршруты:
- `/`;
- `/privacy`;
- `/terms`;
- `/dorabotka-sajta`;
- fallback 404.

Nginx должен быть настроен на SPA fallback, чтобы прямое открытие пользовательских маршрутов возвращало актуальный `dist/index.html`, а маршрутизацию продолжал React Router.

## Статические файлы

Статические файлы и production-friendly assets должны жить в `public/`.

Для сайта уже важно использовать локальные изображения там, где мобильная стабильность критична.

Также в `public/` уже лежат:
- `robots.txt`;
- `sitemap.xml`;
- favicon;
- локальные изображения для representative examples и sharing assets.

## Tailwind и PostCSS

Tailwind подключён через официальный Vite-плагин `@tailwindcss/vite` в `vite.config.ts`.

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

Этот файл изолирует сборку Stalar Vision от PostCSS-конфигураций в родительских каталогах сервера. Нельзя удалять его как “пустой” или заменять зависимостью `@tailwindcss/postcss` без отдельной технической причины.

Нельзя изменять или удалять PostCSS-конфигурации за пределами каталога Stalar Vision: они могут принадлежать другим проектам на том же сервере.

## Форма

Форма контакта подключена через Web3Forms.
Это осознанное решение текущего этапа:
- без собственного backend;
- с email-доставкой;
- с минимальной сложностью;
- с понятной клиентской логикой.

Privacy/legal тексты должны оставаться согласованными с этим фактом.

## SEO / sharing

В проекте уже есть базовый production-ready SEO/share слой:
- runtime meta через `src/lib/meta.ts`;
- canonical URL;
- Open Graph meta;
- Twitter meta;
- `robots.txt`;
- `sitemap.xml`;
- отдельные metadata для `/dorabotka-sajta`.

Не нужно откатывать это обратно к одному только статическому `index.html`.

JSON-LD и возможный пререндеринг коммерческих маршрутов выполняются отдельными этапами.

## Production build и deploy

Production-папка проекта:

```text
/home/stanislav/project/stalarvision/dist
```

Nginx должен отдавать именно эту папку:

```nginx
root /home/stanislav/project/stalarvision/dist;
```

Безопасный порядок деплоя:

```bash
cd /home/stanislav/project/stalarvision
git pull --ff-only origin main
npm install
npm run build
sudo nginx -t
sudo systemctl reload nginx
```

Критическое правило: `sudo systemctl reload nginx` выполняется только после успешного `npm run build` и успешного `sudo nginx -t`.

Нельзя копировать `dist/index.html` и `dist/assets` вручную частями: они должны происходить из одной production-сборки.

На сервере находятся другие проекты. Любые команды должны быть ограничены каталогом Stalar Vision и его конкретным nginx server block.

## Dependency audit

`npm install` может показывать предупреждения `npm audit`. Они не исправляются автоматически командой `npm audit fix --force` в рамках обычного SEO-деплоя.

Разбор уязвимостей выполняется отдельной технической задачей с проверкой конкретных пакетов, реальной применимости и риска breaking changes.

## Mobile first sanity

Любые изменения нужно проверять:
- на телефоне;
- на промежуточной ширине;
- на desktop.

Особенно внимательно:
- Hero;
- About stats;
- Services cards;
- Portfolio cards;
- service pages;
- Tech Stack;
- Contact form;
- Footer;
- отсутствие горизонтального overflow.
