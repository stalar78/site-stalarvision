const productionSiteUrl = 'https://stalarvision.ru';
const defaultOgImagePath = '/uploads/14c05609-image.png';

export const profile = {
  brand: {
    fullName: 'Stalar Vision',
    primaryName: 'Stalar',
    accentName: ' Vision',
    href: '/',
  },
  seo: {
    siteUrl: productionSiteUrl,
    defaultPath: '/',
    privacyPath: '/privacy',
    htmlLang: 'ru',
    title: 'Stalar Vision | Независимый разработчик для бизнеса',
    description:
      'Stalar Vision — независимый разработчик: запуск сайтов и веб-приложений, доработка существующих проектов, технический разбор и аудит работающего сайта.',
    ogType: 'website',
    ogLocale: 'ru_RU',
    ogImageUrl: `${productionSiteUrl}${defaultOgImagePath}`,
    ogImagePath: defaultOgImagePath,
    twitterCard: 'summary_large_image',
    themeColor: '#020617',
  },
  owner: {
    name: 'Ларин Станислав',
    legalName: 'ИП Ларин Станислав Николаевич',
    taxId: '561701537372',
  },
  positioning: {
    short:
      'Независимый разработчик для бизнеса: запуск сайтов и веб-приложений, доработка существующих проектов, технический разбор текущего состояния, аудит работающего сайта и, при необходимости, базовый аудит безопасности.',
    heroSupport:
      'Запуск новых сайтов и веб-приложений, доработка существующих проектов, технический разбор и аудит работающего сайта без лишней коммуникационной цепочки.',
  },
  workFormat: {
    summary:
      'Работаю напрямую с заказчиком без посредников. Беру в работу как новые проекты, так и доработку существующих решений. При необходимости начинаем с технического разбора, аудита текущего состояния или базовой проверки безопасности сайта, чтобы спокойно определить приоритетный первый этап.',
  },
  mainDirections: [
    'сайты',
    'веб-приложения',
    'автоматизация',
    'технический разбор и аудит',
    'развитие существующих проектов',
  ],
  targetClients: [
    'малый и средний бизнес',
    'эксперты',
    'физические лица',
    'небольшие команды',
    'компании',
  ],
  clientTypes: {
    summary:
      'Малый и средний бизнес, эксперты, физические лица, небольшие команды и компании, которым нужен один сильный технический исполнитель без лишней коммуникационной цепочки.',
  },
  contacts: {
    email: {
      label: 'Email',
      value: 'info@stalarvision.ru',
      href: 'mailto:info@stalarvision.ru',
    },
    phone: {
      label: 'Телефон',
      value: '+7 993 977-99-77',
      href: 'tel:+79939779977',
    },
    telegram: {
      label: 'Telegram',
      value: '@stanislav_lsn',
      href: 'https://t.me/stanislav_lsn',
    },
    github: {
      label: 'GitHub',
      value: 'stalar78',
      href: 'https://github.com/stalar78',
    },
  },
  availability: {
    label: 'Открыт к новым проектам',
  },
  ctas: {
    discussTask: 'Обсудить задачу',
    contact: 'Связаться',
    viewServices: 'Сценарии работы',
    howICanHelp: 'Как могу помочь',
    discussProject: 'Обсудить проект',
    writeAboutProject: 'Написать по проекту',
    writeTelegram: 'Написать в Telegram',
    writeEmail: 'Написать на email',
    breakDownTask: 'Обсудить задачу',
    getFirstPlan: 'Получить первый план работ',
  },
} as const;
