export const casesSection = {
  title: {
    lead: 'Примеры',
    accent: 'формата проектов',
  },
  description:
    'Ниже я показываю, как может выглядеть подача проекта на сайте после согласования реальных материалов: задача, стек и рабочий результат первого этапа.',
  note:
    'Это не публичные клиентские кейсы, а честные примеры структуры подачи. Изображения в карточках используются как иллюстративные превью.',
  githubCta: {
    label: 'Публичные ссылки появятся позже',
    href: '',
    status: 'todo-link',
  },
  representativeLabel: 'Пример формата',
  imageFallbackLabel: 'Иллюстративное превью',
  items: [
    {
      title: 'CRM для агентства недвижимости',
      description:
        'Система автоматизации продаж с интеграцией телефонии, мессенджеров и автоматическим расчетом комиссий.',
      image: '/uploads/cases/case-01-crm-real-estate.jpg',
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
      link: '',
      github: '',
      category: 'Веб-приложение',
      status: 'representative-template',
    },
    {
      title: 'EdTech Платформа обучения',
      description:
        'Личный кабинет студента, система тестирования, видеоплеер с защитой контента и аналитика прогресса.',
      image: '/uploads/cases/case-02-edtech-platform.jpg',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      link: '',
      github: '',
      category: 'SaaS',
      status: 'representative-template',
    },
    {
      title: 'Landing Page для FinTech',
      description:
        'Высококонверсионный одностраничный сайт с калькулятором доходности и сложными SVG-анимациями.',
      image: '/uploads/cases/case-03-fintech-landing.jpg',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      link: '',
      github: '',
      category: 'Лендинг',
      status: 'representative-template',
    },
  ],
};
