export type Certificate = {
  id: string;
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

export const certificates: Certificate[] = [
  {
    id: 'css-basic-theory',
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
    id: 'html-advanced-theory',
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
    id: 'python-advanced-theory-practice',
    title: 'Python',
    level: 'продвинутый',
    scope: 'Теория и практика',
    confirmedAt: '18.08.2026',
    certificateId: '312489',
    validUntil: '18.08.2027',
    image: '/certificates/python-certificate.webp',
    alt: 'Сертификат по компетенции Python продвинутого уровня',
  },
];
