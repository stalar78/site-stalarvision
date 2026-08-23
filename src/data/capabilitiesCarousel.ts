import {
  Code2,
  Database,
  LayoutDashboard,
  LayoutTemplate,
  SearchCheck,
  ServerCog,
  Webhook,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type CapabilityCard = {
  title: string;
  description: string;
  stack: string;
  icon: LucideIcon;
};

export const capabilitiesCarouselSection = {
  eyebrow: 'Не только сайты',
  title: 'Интерфейсы, в которых есть логика',
  description:
    'От клиентского кабинета до рабочего веб-сервиса с ролями, статусами, интеграциями и автоматизацией. Ниже — примеры задач, которые можно собрать в единый цифровой инструмент.',
  items: [
    {
      title: 'Веб-приложения',
      description:
        'Интерфейсы, где сайт становится рабочим инструментом: формы, состояния, бизнес-логика и данные.',
      stack: 'React · TypeScript · Python',
      icon: Code2,
    },
    {
      title: 'Личные кабинеты',
      description:
        'Роли пользователей, документы, статусы, история действий и отдельные сценарии доступа.',
      stack: 'React · API · PostgreSQL',
      icon: LayoutDashboard,
    },
    {
      title: 'Workflow и автоматизация',
      description:
        'Маршруты согласования, этапы процессов, уведомления и контроль состояния задач.',
      stack: 'Python · FastAPI · PostgreSQL',
      icon: Workflow,
    },
    {
      title: 'API и интеграции',
      description:
        'Связь сайта или приложения с внешними сервисами, API, ботами и внутренними системами.',
      stack: 'REST API · Webhooks · Telegram',
      icon: Webhook,
    },
    {
      title: 'Работа с данными',
      description:
        'Сбор, обработка, фильтрация, хранение и представление данных в удобном интерфейсе.',
      stack: 'Python · SQL · PostgreSQL',
      icon: Database,
    },
    {
      title: 'Аудит и развитие',
      description:
        'Поиск технических и UX-проблем, приоритизация изменений и постепенная доработка существующего продукта.',
      stack: 'Audit · UX · Performance',
      icon: SearchCheck,
    },
    {
      title: 'Инфраструктура и deployment',
      description:
        'Сборка, контейнеризация, серверное окружение, reverse proxy и эксплуатация приложения.',
      stack: 'Docker · Linux · Nginx',
      icon: ServerCog,
    },
    {
      title: 'Сайты и интерфейсы',
      description:
        'Коммерческие сайты и интерфейсы, которые объясняют предложение и ведут пользователя к целевому действию.',
      stack: 'React · TypeScript · Tailwind',
      icon: LayoutTemplate,
    },
  ] satisfies CapabilityCard[],
  cta: {
    eyebrow: 'Обсудим ваш случай',
    title: 'Есть задача, которой нет в списке?',
    description:
      'Опишите её в нескольких предложениях — посмотрю контекст и предложу ближайший разумный первый шаг.',
    label: 'Обсудить проект',
    href: '/#contact',
  },
} as const;
