import { profile } from '@/data/profile';

export const casesSection = {
  title: {
    lead: 'Реальные проекты',
    accent: 'и форматы задач',
  },
  description:
    'Здесь собраны реальные собственные проекты и типовые сценарии, с которыми можно обратиться: от разработки контентных платформ до аудита и поэтапного развития существующих систем.',
  note:
    'Реальные проекты отмечены отдельно. Типовые сценарии не выдаются за клиентские кейсы и показывают только возможный формат работы.',
  githubCta: {
    label: 'Ссылки и исходники показываю там, где это допустимо',
    href: '',
    status: 'todo-link',
  },
  representativeLabel: 'Representative example',
  imageFallbackLabel: 'Иллюстративный пример',
  cta: {
    note:
      'Если у вас похожая задача, можно коротко обсудить контекст и определить первый рабочий этап.',
    label: profile.ctas.breakDownTask,
    href: '/#contact',
  },
  items: [
    {
      title: 'Intelverbum — контентная платформа',
      description:
        'Многораздельная культурно-интеллектуальная платформа, в которой контент хранится в структурированных JSON-корпусах, проходит проверку и собирается в публичные статические страницы.',
      scenario:
        'Создать единую publishing system для разных типов материалов: словарных статей, тематических публикаций, латинских фраз, философских направлений, инструментов мышления и произведений искусства.',
      whatUsuallyNeeded: [
        'отдельные JSON-корпусы, модели данных и валидаторы;',
        'release manifests, статическая генерация страниц и общий поисковый индекс;',
        'специализированные админки и безопасный production publish workflow.',
      ],
      firstStep:
        'Контент, проверка, публикация и эксплуатация разделены на воспроизводимые этапы, а новые тематические корпуса можно развивать внутри общей архитектуры.',
      image: '/uploads/cases/intelverbum-vignette-compass.webp',
      mediaVariant: 'brand-mark',
      cover: {
        title: 'Intelverbum',
        subtitle: 'Content publishing system',
      },
      tags: ['JSON content', 'Static generation', 'Admin tools', 'Search', 'Production workflow'],
      link: 'https://intelverbum.ru/',
      github: '',
      category: 'Контентная система',
      status: 'real-project',
    },
    {
      title: 'QuoteFlow',
      description:
        'Публичный demo-проект для подготовки коммерческих предложений: позиции, расчёты, скидки, налоги, черновики, обмен данными и формирование PDF.',
      scenario:
        'Показать полный цикл browser-based приложения: пользователь добавляет позиции, задаёт количество и стоимость, применяет скидки и налоги, сохраняет черновики и формирует документ.',
      whatUsuallyNeeded: [
        'позиции, расчёты, скидки и налоги;',
        'локальные черновики, JSON/CSV import и export;',
        'browser print и server-side PDF;',
        'frontend на React, TypeScript и Vite;',
        'backend на FastAPI;',
        'Docker, Nginx и публичный demo-контур.',
      ],
      firstStep:
        'Рабочий публичный demo-проект, который показывает frontend, backend, расчётную логику, PDF generation, API и deployment в Docker.',
      image: '/uploads/cases/quoteflow-dashboard.webp',
      tags: ['React', 'TypeScript', 'FastAPI', 'PDF', 'Docker', 'Nginx'],
      link: 'https://quoteflow.stalarvision.ru/',
      github: 'https://github.com/stalar78/quoteflow-demo',
      category: 'Веб-приложение',
      status: 'real-project',
    },
    {
      title: 'ApprovalFlow — согласование внутренних заявок',
      description:
        'Демонстрационное веб-приложение для полного цикла согласования внутренних заявок: от создания сотрудником до решения руководителя с сохранением истории изменений.',
      scenario:
        'Показать понятный и воспроизводимый процесс работы с внутренними запросами, ролями и последовательными статусами без перегруженной корпоративной инфраструктуры.',
      whatUsuallyNeeded: [
        'роли сотрудника и руководителя;',
        'создание, редактирование и отправка заявок;',
        'одобрение, отклонение, повторное открытие и повторная отправка;',
        'история изменений и решений;',
        'публичный demo-доступ для обеих ролей;',
        'контейнерное развёртывание с отдельными frontend, backend и PostgreSQL.',
      ],
      firstStep:
        'Работающий публичный demo-контур, в котором посетитель может самостоятельно пройти полный сценарий сотрудника и руководителя.',
      cover: {
        title: 'ApprovalFlow',
        subtitle: 'Internal approval workflow',
      },
      tags: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker', 'Nginx'],
      link: 'https://approvalflow.stalarvision.ru/',
      github: 'https://github.com/stalar78/approvalflow',
      category: 'Веб-приложение / Internal workflow',
      status: 'real-project',
      perspective: {
        introduction:
          'Проект можно развивать как более гибкий контур внутренних согласований, если потребуется показать сложные правила, роли и интеграции.',
        items: [
          'настраиваемые маршруты согласования;',
          'уведомления и сроки рассмотрения;',
          'вложения и комментарии;',
          'административное управление пользователями и ролями;',
          'аудит и расширенная история действий;',
          'интеграции с корпоративными системами.',
        ],
        disclaimer:
          'Это направления возможного развития, а не функции текущей demo-версии.',
      },
    },
  ],
};

export const ownedProductSpotlight = {
  eyebrow: 'Собственный продукт',
  title: 'LocalKit — каталог готовых сайтов для малого бизнеса',
  description:
    'Каталог готовых Next.js-шаблонов для малого бизнеса с отдельными нишевыми и premium-моделями, live demo и возможностью настройки под конкретный проект.',
  highlights: [
    'нишевые и premium-модели для малого бизнеса',
    'Next.js, TypeScript, Tailwind CSS',
    'product pages, live demo и структура для кастомизации',
  ],
  link: {
    label: 'Открыть LocalKit',
    href: 'https://localkit.ru/',
  },
  status: 'owned-product',
};
