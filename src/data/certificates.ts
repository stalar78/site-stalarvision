export type CompetencyCertificate = {
  id: string;
  kind: 'competency';
  title: string;
  level: string;
  scope: string;
  confirmedAt: string;
  certificateId: string;
  validUntil: string;
  image: string;
  alt: string;
  verificationUrl?: string;
};

export type CourseCertificate = {
  id: string;
  kind: 'course';
  title: string;
  issuer: string;
  completedAt: string;
  certificateId: string;
  image: string;
  alt: string;
  verificationUrl?: string;
};

export type Certificate = CompetencyCertificate | CourseCertificate;

export const certificates: Certificate[] = [
  {
    id: 'api-medium-theory',
    kind: 'competency',
    title: 'API',
    level: 'средний',
    scope: 'Теория',
    confirmedAt: '24.08.2026',
    certificateId: '314396',
    validUntil: '24.08.2027',
    image: '/certificates/api-certificate.webp',
    alt: 'Сертификат по компетенции API среднего уровня',
  },
  {
    id: 'docker-basic-theory',
    kind: 'competency',
    title: 'Docker',
    level: 'базовый',
    scope: 'Теория',
    confirmedAt: '24.08.2026',
    certificateId: '314395',
    validUntil: '24.08.2027',
    image: '/certificates/docker-certificate.webp',
    alt: 'Сертификат по компетенции Docker базового уровня',
  },
  {
    id: 'git-advanced-theory',
    kind: 'competency',
    title: 'Git',
    level: 'продвинутый',
    scope: 'Теория',
    confirmedAt: '21.08.2026',
    certificateId: '313784',
    validUntil: '21.08.2027',
    image: '/certificates/git-certificate.webp',
    alt: 'Сертификат по компетенции Git продвинутого уровня',
  },
  {
    id: 'linux-medium-theory',
    kind: 'competency',
    title: 'Linux',
    level: 'средний',
    scope: 'Теория',
    confirmedAt: '20.08.2026',
    certificateId: '313501',
    validUntil: '20.08.2027',
    image: '/certificates/linux-certificate.webp',
    alt: 'Сертификат по компетенции Linux среднего уровня',
  },
  {
    id: 'postgresql-advanced-theory',
    kind: 'competency',
    title: 'PostgreSQL',
    level: 'продвинутый',
    scope: 'Теория',
    confirmedAt: '20.08.2026',
    certificateId: '313160',
    validUntil: '20.08.2027',
    image: '/certificates/postgresql-certificate.webp',
    alt: 'Сертификат по компетенции PostgreSQL продвинутого уровня',
  },
  {
    id: 'javascript-advanced-theory',
    kind: 'competency',
    title: 'JavaScript',
    level: 'продвинутый',
    scope: 'Теория',
    confirmedAt: '18.08.2026',
    certificateId: '312679',
    validUntil: '18.08.2027',
    image: '/certificates/javascript-certificate.webp',
    alt: 'Сертификат по компетенции JavaScript продвинутого уровня',
  },
  {
    id: 'python-advanced-theory-practice',
    kind: 'competency',
    title: 'Python',
    level: 'продвинутый',
    scope: 'Теория и практика',
    confirmedAt: '18.08.2026',
    certificateId: '312489',
    validUntil: '18.08.2027',
    image: '/certificates/python-certificate.webp',
    alt: 'Сертификат по компетенции Python продвинутого уровня',
  },
  {
    id: 'html-advanced-theory',
    kind: 'competency',
    title: 'HTML',
    level: 'продвинутый',
    scope: 'Теория',
    confirmedAt: '17.08.2026',
    certificateId: '312448',
    validUntil: '17.08.2027',
    image: '/certificates/html-certificate.webp',
    alt: 'Сертификат по компетенции HTML продвинутого уровня',
  },
  {
    id: 'css-basic-theory',
    kind: 'competency',
    title: 'CSS',
    level: 'базовый',
    scope: 'Теория',
    confirmedAt: '17.08.2026',
    certificateId: '312363',
    validUntil: '17.08.2027',
    image: '/certificates/css-certificate.webp',
    alt: 'Сертификат по компетенции CSS, выданный Ларину Станиславу Николаевичу',
  },
  {
    id: 'yandex-direct-google-ads-course',
    kind: 'course',
    issuer: 'Сертификат с отличием',
    title: 'Специалист по контекстной рекламе: Яндекс Директ и Google Ads',
    completedAt: '21.09.2021',
    certificateId: '1663',
    image: '/certificates/yandex-direct-certificate.webp',
    alt: 'Сертификат о прохождении курса по контекстной рекламе Яндекс Директ и Google Ads',
  },
  {
    id: 'geekbrains-html-css-course',
    kind: 'course',
    issuer: 'GeekBrains',
    title: 'HTML/CSS. Интерактивный курс',
    completedAt: '18.10.2021',
    certificateId: '1433225',
    image: '/certificates/geekbrains-html-css-certificate.webp',
    alt: 'Сертификат GeekBrains о прохождении интерактивного курса HTML CSS',
  },
  {
    id: 'geekbrains-javascript-basic-course',
    kind: 'course',
    issuer: 'GeekBrains',
    title: 'Базовый курс JavaScript',
    completedAt: '14.01.2022',
    certificateId: '1637218',
    image: '/certificates/geekbrains-javascript-basic-certificate.webp',
    alt: 'Сертификат GeekBrains о прохождении базового курса JavaScript',
  },
  {
    id: 'geekbrains-professional-layout-course',
    kind: 'course',
    issuer: 'GeekBrains',
    title: 'Профессиональная вёрстка',
    completedAt: '12.12.2021',
    certificateId: '1558356',
    image: '/certificates/geekbrains-professional-layout-certificate.webp',
    alt: 'Сертификат GeekBrains о прохождении курса Профессиональная вёрстка',
  },
  {
    id: 'geekbrains-javascript-advanced-course',
    kind: 'course',
    issuer: 'GeekBrains',
    title: 'Продвинутый курс JavaScript',
    completedAt: '24.02.2022',
    certificateId: '1697860',
    image: '/certificates/geekbrains-javascript-advanced-certificate.webp',
    alt: 'Сертификат GeekBrains о прохождении продвинутого курса JavaScript',
  },
];
