export const profile = {
  brand: {
    fullName: 'Stalar Vision',
    primaryName: 'Stalar',
    accentName: ' Vision',
    href: '/',
  },
  seo: {
    htmlLang: 'ru',
    title: 'Stalar Vision | Независимый разработчик для бизнеса',
    description:
      'Stalar Vision — независимый разработчик для бизнеса: сайты, веб-приложения, автоматизация, программное обеспечение и развитие существующих проектов.',
    ogType: 'website',
    ogLocale: 'ru_RU',
    themeColor: '#020617',
  },
  owner: {
    name: 'Ларин Станислав',
    legalName: 'ИП Ларин Станислав Николаевич',
    taxId: '561701537372',
  },
  positioning: {
    short:
      'Независимый разработчик для бизнеса: сайты, веб-приложения, автоматизация, программное обеспечение и развитие существующих проектов.',
    heroSupport:
      'Сайты, веб-приложения, автоматизация и развитие существующих проектов без лишней коммуникационной цепочки.',
  },
  workFormat: {
    summary:
      'Работаю напрямую с заказчиком без посредников. Беру в работу как новые проекты, так и доработку существующих решений. Предпочитаю поэтапный формат: сначала определяем приоритетную задачу, затем собираем понятный объём первого этапа.',
  },
  mainDirections: [
    'сайты',
    'веб-приложения',
    'автоматизация',
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
    discussTask: 'Разобрать задачу',
    contact: 'Связаться',
    viewServices: 'Посмотреть услуги',
    howICanHelp: 'Как могу помочь',
    discussProject: 'Обсудить проект',
    writeAboutProject: 'Написать по проекту',
    writeTelegram: 'Написать в Telegram',
    writeEmail: 'Написать на email',
    breakDownTask: 'Разобрать задачу',
    getFirstPlan: 'Получить первый план работ',
  },
} as const;
