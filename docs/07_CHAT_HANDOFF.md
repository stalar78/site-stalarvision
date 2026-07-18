# Chat Handoff

## Что это за файл

Краткая handoff-сводка фактического состояния проекта Stalar Vision для продолжения работы в новом чате без повторного анализа уже принятых решений.

## Позиционирование

- Stalar Vision — сайт услуг и личный бренд одного независимого разработчика, а не агентства и не обычное резюме.
- Владелец: Ларин Станислав, ИП Ларин Станислав Николаевич.
- Формат работы — напрямую с заказчиком, удалённо по всей России.
- Санкт-Петербург и Ленинградская область используются только как первый тестовый регион рекламы, а не как ограничение услуг или подтверждение офиса.
- Нельзя придумывать клиентов, отзывы, кейсы, сроки, цены, гарантии, цифры и метрики.

## Production-состояние

- Сайт: `https://stalarvision.ru`.
- VPS: Ubuntu, Nginx, HTTPS.
- Репозиторий: `stalar78/site-stalarvision`, ветка `main`.
- Серверный каталог: `/home/stanislav/project/stalarvision`.
- Nginx root: `/home/stanislav/project/stalarvision/dist`.
- Стек: React + TypeScript + Vite + Tailwind.
- Контактная форма: Web3Forms.
- Яндекс Метрика: счётчик `108788776`.

Безопасный deploy:

```bash
cd /home/stanislav/project/stalarvision
git pull --ff-only origin main
npm install
npm run build
sudo nginx -t
sudo systemctl reload nginx
```

Не копировать `dist` вручную частями и не изменять внешний `/home/stanislav/postcss.config.mjs`.

## Коммерческие страницы

Реализованы, опубликованы и проиндексированы Google:

- `/dorabotka-sajta/`
- `/audit-sajta/`
- `/razrabotka-sajta/`

Для них подтверждены route-specific HTML, metadata, JSON-LD, sitemap entries, canonical с завершающим слешем и корректные nginx redirects.

Генератор service pages использует:

- `src/data/servicePageSeo.json`
- `scripts/service-page.template.html`
- `scripts/generate-service-html.mjs`

## Яндекс Вебмастер и Метрика

- Права в Яндекс Вебмастере подтверждены файлом `public/yandex_04d5d400834f4551.html`.
- Sitemap добавлен.
- Главная и три коммерческие страницы отправлены на переобход 2026-07-17; повторно не отправлять без причины.
- Основная цель формы: `contact_form_success` / `Успешная отправка формы`.
- Подтверждены цели: `Переход в Telegram`, `Переход в MAX`, `Клик по email`, `Клик по телефону`.
- Именованные цели используются как основные; автоцели Метрики — только вспомогательные.

## Реальные проекты и портфолио

Канонический реестр: `docs/06_PORTFOLIO_REGISTRY.md`.

### Intelverbum

- Реальный production-кейс с публичным сайтом `https://intelverbum.ru/`.
- Приватный исходный код не раскрывается.
- Brand-mark версия карточки зафиксирована commit `2886b69b3d54dd21e820dc9a0dc9e721e6c32b0c`.
- Production deploy и visual QA пройдены.

### Web Audit Lab

- Публичный репозиторий: `https://github.com/stalar78/web-audit-lab`.
- GitHub-ссылка добавлена на сайт commit `473afef9c66ee9060ed0cff5013313ae9edd2197`.
- Production deploy и visual QA пройдены.

### Phone Operator Detector

- Исходный приватный репозиторий не открыт публично: в reachable history были реальные Excel-файлы с персональными данными.
- Создан отдельный очищенный public snapshot без private Git history, реальных Excel-файлов и скачанных operator-reference CSV snapshots.
- Публичный репозиторий: `https://github.com/stalar78/phone-operator-detector-public`.
- Snapshot основан на private source `origin/main` SHA `be2a684f51e5cb6ac4c138901c1788bd66636881`.
- Полный тест: 26 tests OK; compile validation passed.
- Текущий public commit: `9e6a533` (`Record public repository publication`).
- GitHub-ссылка добавлена в `src/data/softwareCases.ts` commit `b5a8b93` (`Add Phone Operator Detector GitHub link`).
- `SoftwareCases.tsx` уже условно показывает кнопку `Открыть GitHub`, поэтому компонент не менялся.
- Следующий обязательный шаг: production deploy commit `b5a8b93` и responsive visual QA карточки.

## Главные source of truth файлы

- `src/data/profile.ts` — бренд, владелец, контакты и юрданные.
- `src/data/site.ts` — Hero и главные секции.
- `src/data/services.ts` — услуги и внутренние ссылки.
- `src/data/servicePageSeo.json` — SEO service pages.
- `src/data/cases.ts` — основные project cards.
- `src/data/softwareCases.ts` — карточки прикладного ПО и GitHub-ссылки.
- `src/components/SoftwareCases.tsx` — общий renderer software cards.
- `src/data/contacts.ts` — контактная секция и форма.
- `src/data/faq.ts` — FAQ.
- `src/data/legal.ts` — legal/privacy copy.
- `src/lib/meta.ts` — runtime metadata.
- `src/lib/utils.ts` — helper Яндекс Метрики и цели.
- `public/sitemap.xml` — индексируемые маршруты.
- `postcss.config.mjs` — локальная изоляция PostCSS.

## Рабочий процесс

1. GPT анализирует фактическое состояние и предлагает один следующий логичный шаг.
2. GPT пишет точный prompt для Codex на русском языке.
3. Codex меняет только код и связанные статические файлы, не `docs/*`, не commit и не push.
4. Владелец проверяет diff, делает commit и push.
5. GPT читает GitHub, проводит review и обновляет `docs/*` непосредственно в GitHub.
6. Владелец выполняет `git pull --ff-only origin main`; если изменение влияет на production, выполняет безопасный deploy.
7. После deploy выполняется ручной visual/functional QA.

## Текущие технические наблюдения

- Build проходит успешно.
- Vite предупреждает о chunk больше 500 kB; это пока не блокирует работу.
- `npm install` сообщает 6 vulnerabilities: 1 low, 4 moderate, 1 high.
- Не запускать `npm audit fix --force` без отдельного анализа.
- Script `lint` отсутствует.
- Есть неблокирующее дублирование общих structured-data сущностей между runtime и HTML generator.
- На `/razrabotka-sajta/` остаётся неблокирующий вложенный `<section>` в Hero.

## Следующий шаг

Выполнить production deploy commit `b5a8b93`, затем проверить на desktop и mobile:

- наличие кнопки `Открыть GitHub` в карточке Phone Operator Detector;
- переход на `https://github.com/stalar78/phone-operator-detector-public` в новой вкладке;
- отсутствие изменений в карточках GPT Course Knowledge Extractor и Web Audit Lab;
- сохранение нормальной высоты, сетки и отступов карточек.

После QA зафиксировать результат в docs. Следующий публичный репозиторий выбирать только после отдельного security и fact audit; приватные репозитории не переводить в public напрямую без проверки истории.
