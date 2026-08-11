export const cakeAndShapeCase = {
  seo: {
    title: 'Cake & Shape — разработка сайта и системы управления бизнесом | StalarVision',
    description:
      'Кейс Cake & Shape: production-сайт кондитерского бизнеса с собственным admin-интерфейсом, FastAPI, PostgreSQL, управлением каталогом, контентом и production-инфраструктурой.',
    canonical: 'https://stalarvision.ru/cases/cake-and-shape/',
    ogTitle: 'Cake & Shape — разработка сайта и системы управления бизнесом | StalarVision',
    ogDescription:
      'Кейс Cake & Shape: production-сайт кондитерского бизнеса с собственным admin-интерфейсом, FastAPI, PostgreSQL, управлением каталогом, контентом и production-инфраструктурой.',
    ogType: 'website',
    robots: 'index,follow',
  },
  hero: {
    eyebrow: 'Production case · Business system',
    title: 'Публичный сайт и собственная система управления для кондитерского бизнеса',
    lead:
      'Cake & Shape — production web-система, объединяющая клиентский сайт, каталог продукции, собственную административную панель, backend и базу данных.',
    description:
      'Основные данные и содержание бизнеса управляются через админку без необходимости менять код публичного сайта.',
    techLine: 'Next.js · React · FastAPI · PostgreSQL · Docker · Nginx',
    primaryCta: {
      label: 'Открыть сайт',
      href: 'https://cakeshape.ru/',
    },
    secondaryCta: {
      label: 'Исходный код',
      href: 'https://github.com/stalar78/shapecake',
    },
    image: {
      src: '/uploads/cases/cake-and-shape/cake-and-shape-hero.webp',
      alt: 'Главная страница Cake & Shape с каталогом авторских десертов',
    },
  },
  overview: {
    title: 'Публичный сайт — только один интерфейс системы',
    description:
      'Для посетителя Cake & Shape выглядит как каталог кондитерской продукции. Но за публичной частью находится отдельный управленческий контур: административное приложение, API и общая база данных.',
    flow: ['Покупатель', 'Next.js public', 'FastAPI', 'PostgreSQL', 'React / Vite Admin', 'Администратор'],
    note: 'packages/api-client выступает общей typed integration boundary между фронтендами и API.',
  },
  publicExperience: {
    title: 'Публичный опыт: каталог, карточки и прямой контакт',
    description:
      'Публичная часть показывает responsive production website с динамическим каталогом, страницами десертов, SEO metadata, canonical, robots.txt, sitemap, Open Graph и Bakery/Product JSON-LD.',
    image: {
      src: '/uploads/cases/cake-and-shape/cake-and-shape-catalog.webp',
      alt: 'Каталог десертов Cake & Shape',
    },
    items: [
      'динамический каталог и отдельные страницы десертов',
      'direct-contact ordering UX вместо публичной checkout-воронки',
      'database-backed business content',
      'SEO surface для публичных страниц',
    ],
  },
  adminCatalog: {
    title: 'Админ-панель управляет ассортиментом, состояниями и порядком',
    description:
      'Отдельное React/Vite приложение позволяет управлять категориями, десертами, публикацией, доступностью, архивом, сортировкой, отзывами и акциями.',
    image: {
      src: '/uploads/cases/cake-and-shape/cake-and-shape-admin-catalog.webp',
      alt: 'Административная панель Cake & Shape: редактор каталога',
    },
    items: [
      'categories and desserts',
      'publication / availability / archive states',
      'ordering',
      'reviews and promotions',
    ],
  },
  adminMedia: {
    title: 'Карточка продукта хранит варианты веса, цены и изображения',
    description:
      'Внутри карточки десерта управляются weight and price variants, изображения, основное изображение и порядок изображений.',
    image: {
      src: '/uploads/cases/cake-and-shape/cake-and-shape-admin-product-media.webp',
      alt: 'Административная панель Cake & Shape: варианты цены и изображения',
    },
    items: [
      'weight and price variants',
      'images and main image',
      'image ordering',
      'safe media paths and server-generated keys',
    ],
  },
  siteSettings: {
    title: 'Публичный контент тоже управляется из системы',
    description:
      'Система хранит site settings, business contacts/content, hero/public business text, about-master content, изображения, условия заказа, доставки, самовывоза и рабочие часы.',
    image: {
      src: '/uploads/cases/cake-and-shape/cake-and-shape-admin-settings.webp',
      alt: 'Административная панель Cake & Shape: настройки публичного сайта',
    },
    note:
      'Владельцу не нужно обращаться к разработчику для каждого текстового изменения, но это не означает, что абсолютно весь сайт редактируется из admin.',
  },
  architecture: {
    title: 'Системная архитектура',
    items: [
      {
        title: 'Public',
        description: 'Next.js frontend для посетителей, каталога, detail pages и SEO surface.',
      },
      {
        title: 'Admin',
        description: 'Отдельное React/Vite приложение для управления данными бизнеса.',
      },
      {
        title: 'API',
        description: 'FastAPI modular backend как единая точка бизнес-логики и работы с данными.',
      },
      {
        title: 'Data',
        description: 'PostgreSQL + async SQLAlchemy + Alembic migrations.',
      },
    ],
    sharedClient: 'packages/api-client — shared typed API client.',
  },
  engineering: {
    title: 'Engineering-слой без раскрытия operational secrets',
    items: [
      'собственная admin-панель',
      'единая серверная модель данных',
      'opaque server-backed sessions, HttpOnly cookies, CSRF protection, Argon2',
      'media subsystem with server-generated storage keys',
      'Next metadata / canonical / sitemap / robots / Open Graph / JSON-LD',
      'Docker Compose / Nginx / HTTPS / health checks / backup operations',
    ],
  },
  production: {
    title: 'Проект доведён до production, а не заканчивается локальной разработкой',
    description:
      'Cake & Shape работает как production-система: публичный сайт, admin, API и PostgreSQL развёрнуты через Docker Compose за Nginx и HTTPS.',
    flow: ['Internet', 'Nginx', 'public', 'admin', 'API', 'PostgreSQL'],
  },
  evolution: {
    title: 'Эволюция системы после запуска',
    description:
      'В проекте был реализован backend-контур inquiry/order-request со статусами и административным workflow. После production launch публичная форма была удалена в пользу прямых business contacts, а backend/admin domain сохранён для возможного будущего использования.',
  },
  future: {
    title: 'Возможные направления развития',
    items: [
      'online payment',
      'customer accounts',
      'delivery integrations',
      'warehouse accounting',
      'loyalty',
      'CRM / external integrations',
    ],
    disclaimer:
      'Эти возможности не входят в текущий production-контур Cake & Shape и приведены как возможные направления дальнейшего развития.',
  },
  finalCta: {
    title: 'Нужен не просто сайт, а собственный рабочий контур для бизнеса?',
    description:
      'Публичный сайт можно связать с собственной административной системой, данными и бизнес-логикой так, чтобы ежедневные изменения выполнялись через рабочий интерфейс, а не через правки кода.',
    buttonLabel: 'Обсудить похожую задачу',
    buttonHref: '#contact',
  },
} as const;
