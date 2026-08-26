import servicePageSeo from './servicePageSeo.json';

type SeoData = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
};

type HeroData = {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
};

type TextCard = {
  title: string;
  description: string;
};

type LinkCard = TextCard & {
  href?: string;
  linkLabel?: string;
};

type ContentSection<TItem extends TextCard> = {
  id: string;
  title: string;
  description?: string;
  items: TItem[];
};

type ArchitectureColumn = {
  title: string;
  items: string[];
};

type FormatCard = TextCard & {
  cta: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type FinalCta = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

type ClientProof = {
  eyebrow: string;
  compactEyebrow: string;
  title: string;
  company: string;
  date: {
    display: string;
    compact: string;
  };
  author: string;
  role: string;
  quote: string;
  note: string;
  image: string;
  imageAlt: string;
  openLabel: string;
  openAriaLabel: string;
  compactOpenLabel: string;
  pageLinkLabel: string;
};

export type LegalEngineeringPageData = {
  seo: SeoData;
  hero: HeroData;
  architectures: {
    id: string;
    title: string;
    description: string;
    left: ArchitectureColumn;
    right: ArchitectureColumn;
    summary: string;
  };
  dataFlow: {
    id: string;
    title: string;
    description: string;
    steps: string[];
    branches: string[];
  };
  formats: {
    id: string;
    title: string;
    description: string;
    items: FormatCard[];
    note: string;
  };
  auditScope: ContentSection<TextCard>;
  process: ContentSection<TextCard>;
  caseStudy: LinkCard & {
    id: string;
  };
  clientProof: ClientProof;
  relatedServices: ContentSection<LinkCard>;
  itContext: ContentSection<TextCard>;
  partnerFormat: {
    id: string;
    title: string;
    description: string;
    items: string[];
    note: string;
    cta: string;
    href: string;
  };
  faq: {
    id: string;
    title: string;
    items: FaqItem[];
  };
  finalCta: FinalCta;
};

const seo = servicePageSeo.legalEngineering;

export const legalEngineeringPage: LegalEngineeringPageData = {
  seo: {
    path: seo.path,
    title: seo.title,
    description: seo.description,
    canonical: seo.canonical,
    robots: seo.robots,
    ogType: seo.ogType,
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
  },
  hero: {
    eyebrow: 'StalarVision Legal Engineering',
    title: 'Право должно работать не только в документах, но и в коде',
    description:
      'Юридико-технический аудит сайтов и веб-приложений: документы, формы, персональные данные, API, серверы, внешние сервисы и фактические процессы обработки данных.',
    note:
      'Legal Engineering здесь — практический подход к задачам на стыке права и цифровой архитектуры, а не название официальной отрасли или сертификации.',
    primaryCta: 'Проверить цифровой продукт',
    primaryCtaHref: '/#contact',
    secondaryCta: 'Посмотреть реальный разбор',
    secondaryCtaHref: '/articles/pochemu-odnoj-galochki-nedostatochno/',
  },
  architectures: {
    id: 'architectures',
    title: 'Один продукт — две архитектуры',
    description:
      'У цифрового продукта одновременно есть юридическая модель и техническая система. Аудит сопоставляет эти слои и показывает, где документы, интерфейс и фактическая обработка данных расходятся.',
    left: {
      title: 'Юридическая модель',
      items: ['Цель', 'Основание', 'Согласие', 'Состав данных', 'Срок хранения', 'Получатели', 'Документы'],
    },
    right: {
      title: 'Техническая система',
      items: ['Form', 'Frontend', 'API', 'Backend', 'Database', 'SMTP', 'CRM', 'Logs', 'Backup'],
    },
    summary: 'Юридико-технический аудит проверяет, совпадают ли эти две схемы.',
  },
  dataFlow: {
    id: 'data-flow',
    title: 'Почему одной формы недостаточно',
    description:
      'Контактная форма может выглядеть корректно, но данные после отправки проходят через несколько технических узлов. Проверять нужно не только checkbox и текст согласия, а весь маршрут.',
    steps: ['Пользователь', 'Форма', 'Frontend', 'API', 'Backend', 'Database'],
    branches: ['SMTP', 'CRM', 'Backup'],
  },
  formats: {
    id: 'formats',
    title: 'Три рабочих формата',
    description:
      'Формат подбирается под состояние продукта: иногда достаточно аудита, иногда после разбора логично перейти к аккуратным техническим изменениям, а иногда юридическую модель лучше учитывать до разработки.',
    items: [
      {
        title: 'Юридико-технический аудит',
        description:
          'Проверяю соответствие цифрового продукта: документы, интерфейс, фактические маршруты данных, сервисы и инфраструктуру.',
        cta: 'Обсудить юридико-технический аудит',
        href: '/#contact',
      },
      {
        title: 'Аудит + исправление',
        description:
          'Если проблема понятна и находится в зоне кода или конфигурации, после аудита можно согласовать ограниченный объём технических правок.',
        cta: 'Проверить и исправить',
        href: '/#contact',
      },
      {
        title: 'Legal by Design',
        description:
          'Юридически значимые требования учитываются ещё до финальной реализации: состав данных, роли, согласия, хранение, интеграции и события.',
        cta: 'Обсудить новый продукт',
        href: '/#contact',
      },
    ],
    note:
      'Каждый формат начинается с короткого обсуждения задачи и границ проверки. Отдельные правовые вопросы могут потребовать дополнительной проверки вне кода.',
  },
  auditScope: {
    id: 'audit-scope',
    title: 'Что можно проверить в продукте',
    description:
      'Состав проверки зависит от доступа и зрелости проекта. Обычно полезно пройтись по узлам, где юридическая модель чаще всего расходится с технической реальностью.',
    items: [
      {
        title: 'Формы и согласия',
        description:
          'Поля, тексты, отдельность согласия, обязательность отметок, состояния ошибок и фактический payload отправки.',
      },
      {
        title: 'Персональные данные',
        description:
          'Какие данные собираются, где они сохраняются, кому передаются, как долго живут и где появляются копии.',
      },
      {
        title: 'API и backend',
        description:
          'Маршруты отправки, серверная обработка, валидация, уведомления, логирование и интеграции с внешними сервисами.',
      },
      {
        title: 'Инфраструктура',
        description:
          'Хостинг, почтовая инфраструктура, резервные копии, CRM, внешние SaaS и зоны ответственности между участниками проекта.',
      },
      {
        title: 'Документы как часть системы',
        description:
          'Политики, согласия, пользовательские тексты и договорные условия сопоставляются с реальным поведением продукта.',
      },
      {
        title: 'Сценарии пользователя',
        description:
          'Проверяю путь от интерфейса до результата: что видит пользователь, что подтверждает и что реально происходит после действия.',
      },
    ],
  },
  process: {
    id: 'process',
    title: 'Как проходит работа',
    description:
      'Подход остаётся инженерным: сначала фиксируем факты, затем формулируем вопросы и только после этого обсуждаем изменения.',
    items: [
      {
        title: 'Коротко фиксируем задачу',
        description:
          'Достаточно ссылки на сайт или описания продукта и вопроса, который вызывает сомнение.',
      },
      {
        title: 'Собираю фактическую схему',
        description:
          'Сопоставляю документы, интерфейс, frontend, API, backend, базы, интеграции и инфраструктуру в доступном объёме.',
      },
      {
        title: 'Выявляю расхождения',
        description:
          'Показываю, где юридическая модель не совпадает с тем, что система фактически запрашивает, отправляет, хранит или передаёт.',
      },
      {
        title: 'Формирую рекомендации',
        description:
          'Разделяю вопросы на технические правки, изменения в документах и пункты, которые требуют отдельной правовой проверки.',
      },
      {
        title: 'При необходимости исправляю',
        description:
          'Если задача в зоне разработки, можно согласовать ограниченный объём правок: форму, тексты, маршруты, настройки или интеграции.',
      },
    ],
  },
  caseStudy: {
    id: 'case-study',
    title: 'Реальный пример: почему одной галочки оказалось мало',
    description:
      'В статье разобран практический сценарий: проверка формы быстро приводит к вопросам о frontend, API, backend, базе данных, SMTP, резервных копиях и внешних сервисах.',
    href: '/articles/pochemu-odnoj-galochki-nedostatochno/',
    linkLabel: 'Открыть статью-кейс',
  },
  clientProof: {
    eyebrow: 'ПОДТВЕРЖДЕНО КЛИЕНТОМ',
    compactEyebrow: 'LEGAL ENGINEERING · РЕКОМЕНДАЦИЯ КЛИЕНТА',
    title: 'Клиент о подходе Legal Engineering',
    company: 'ООО «МЕТАЛЛОБАЗА ВОЛХОНКА»',
    date: {
      display: '26 августа 2026',
      compact: '26.08.2026',
    },
    author: 'Джураев Дмитрий Артурович',
    role: 'Генеральный директор',
    quote:
      '«Особенно ценным для нас оказался сам подход Legal Engineering, при котором юридические требования рассматриваются во взаимосвязи с интерфейсом, технической реализацией, архитектурой сайта и бизнес-процессами.»',
    note:
      'В благодарственном письме клиент отдельно отметил профессиональный подход, внимательность к фактическим обстоятельствам и стремление разграничивать подтверждённые факты, потенциальные риски и вопросы, требующие дополнительной проверки.',
    image: '/legal-engineering/metallobaza-recommendation.jpeg',
    imageAlt: 'Благодарственное письмо ООО «Металлобаза Волхонка» по результатам Legal Engineering',
    openLabel: 'Открыть благодарственное письмо',
    openAriaLabel: 'Открыть оригинал благодарственного письма ООО «МЕТАЛЛОБАЗА ВОЛХОНКА»',
    compactOpenLabel: 'Открыть письмо',
    pageLinkLabel: 'Подробнее о Legal Engineering',
  },
  relatedServices: {
    id: 'related-services',
    title: 'Связанные направления StalarVision',
    description:
      'Legal Engineering не заменяет существующие услуги, а дополняет их там, где техническая задача соприкасается с юридически значимыми требованиями.',
    items: [
      {
        title: 'Аудит сайта',
        description:
          'Технический разбор текущего состояния сайта, пользовательских сценариев, SEO-сигналов, форм и видимых проблем.',
        href: '/audit-sajta/',
        linkLabel: 'Перейти к аудиту сайта',
      },
      {
        title: 'Доработка сайта',
        description:
          'Аккуратные изменения действующего проекта после разбора: формы, тексты, маршруты, интеграции и технические узкие места.',
        href: '/dorabotka-sajta/',
        linkLabel: 'Перейти к доработке',
      },
      {
        title: 'Разработка сайта',
        description:
          'Новый сайт или первый релиз с понятной структурой, пользовательским сценарием и базой для дальнейшего развития.',
        href: '/razrabotka-sajta/',
        linkLabel: 'Перейти к разработке сайта',
      },
      {
        title: 'Веб-приложения',
        description:
          'Личные кабинеты, внутренние интерфейсы, роли, данные, API и прикладные сценарии для бизнеса.',
        href: '/razrabotka-veb-prilozhenij/',
        linkLabel: 'Перейти к веб-приложениям',
      },
    ],
  },
  itContext: {
    id: 'it-context',
    title: 'IT-договоры и спорные технические ситуации',
    description:
      'Иногда проблема проявляется не только в интерфейсе, но и в договорённостях вокруг продукта: кто отвечает за результат, доступы, данные, поддержку и интеграции.',
    items: [
      {
        title: 'Договоры на разработку и поддержку',
        description:
          'Помогаю сопоставить технический scope, фактическую реализацию и формулировки, которые определяют ожидания сторон.',
      },
      {
        title: 'Передача проекта между исполнителями',
        description:
          'Можно проверить, что действительно есть в коде, инфраструктуре и документах перед доработкой или сменой подрядчика.',
      },
      {
        title: 'Техническая аргументация',
        description:
          'Формулирую инженерную картину: какие факты видны в продукте, какие требуют доступа, а какие стоит проверять отдельно.',
      },
    ],
  },
  partnerFormat: {
    id: 'partner-format',
    title: 'Legal Engineering для веб-студий и разработчиков',
    description:
      'Формат может быть полезен как внешний юридико-технический слой для клиентских проектов, когда команде нужно проверить продукт до запуска, доработки или передачи.',
    items: [
      'аудит формы и data-flow',
      'privacy/data-flow разбор',
      'проверка интеграций',
      'сопоставление документов и интерфейса',
      'рекомендации для разработчиков',
      'повторная проверка после правок',
    ],
    note: 'White Label Legal Engineering — партнёрский формат, а не самостоятельный продукт Stage 1.',
    cta: 'Обсудить партнёрский формат',
    href: '/#contact',
  },
  faq: {
    id: 'faq',
    title: 'Частые вопросы',
    items: [
      {
        question: 'У меня уже есть политика обработки персональных данных. Зачем дополнительный аудит?',
        answer:
          'Документ важен, но нужно сопоставить его с тем, что продукт фактически запрашивает, отправляет, хранит и передаёт через технические сервисы.',
      },
      {
        question: 'Вы проверяете только документы или код тоже?',
        answer:
          'Предмет проверки находится на стыке: документы, интерфейс, frontend, API, backend, инфраструктура и фактические маршруты данных.',
      },
      {
        question: 'Можно ли после аудита сразу исправить технические проблемы?',
        answer:
          'Да, если проблема понятна, находится в зоне разработки и согласован ограниченный scope. Отдельные правовые вопросы могут потребовать дополнительной работы вне кода.',
      },
      {
        question: 'Работаете ли вы только с персональными данными?',
        answer:
          'Нет. Privacy — одно из направлений. В цифровых проектах также возникают вопросы договоров, пользовательских документов, SaaS, API и прав на результат разработки.',
      },
      {
        question: 'Можно ли обратиться до начала разработки?',
        answer:
          'Да. Legal by Design предполагает, что состав данных, роли, интеграции, хранение и юридически значимые события учитываются до окончательной реализации.',
      },
      {
        question: 'Можно ли проверить продукт, разработанный другой командой?',
        answer:
          'Да. Для аудита важнее доступный контекст о продукте, документах и технической архитектуре, а не то, кто изначально его разработал.',
      },
      {
        question: 'Работаете ли вы с веб-студиями и разработчиками?',
        answer:
          'Да. Возможен партнёрский формат для конкретного клиентского проекта: аудит, рекомендации и повторная проверка после изменений.',
      },
    ],
  },
  finalCta: {
    title: 'Проверим, совпадают ли документы с тем, что действительно делает продукт',
    description:
      'Для первого разговора достаточно ссылки на сайт или короткого описания системы и вопроса, который вызывает сомнение. Полное техническое задание заранее не требуется.',
    buttonLabel: 'Коротко описать задачу',
    buttonHref: '/#contact',
  },
};
