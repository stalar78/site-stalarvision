import {
  CheckCircle2,
  Code,
  Code2,
  MessageSquare,
  PenTool,
  Rocket,
  Search,
  Shield,
  ShieldCheck,
  Target,
  type LucideIcon,
  Users2,
  Zap,
} from 'lucide-react';
import { profile } from '@/data/profile';

type NavLink = {
  name: string;
  href: string;
};

type IconTextItem = {
  icon: LucideIcon;
  text: string;
};

type AboutValue = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

export type TechStackCategory = 'Frontend' | 'Backend' | 'Database' | 'Testing' | 'DevOps' | 'Tools';

type TechnologyItem = {
  name: string;
  category: TechStackCategory;
  levelLabel: string;
  levelWidth: string;
  status: string;
  practicalUse: string;
  projects?: string[];
};

export const navbarData = {
  brand: {
    href: profile.brand.href,
    name: profile.brand.primaryName,
    accent: profile.brand.accentName,
  },
  links: [
    { name: 'Услуги', href: '/#services' },
    { name: 'Материалы', href: '/articles/' },
    { name: 'Обо мне', href: '/#about' },
    { name: 'Портфолио', href: '/#portfolio' },
    { name: 'Этапы', href: '/#process' },
    { name: 'FAQ', href: '/#faq' },
  ] satisfies NavLink[],
  desktopCta: {
    label: profile.ctas.breakDownTask,
    href: '/#contact',
  },
  mobileCta: {
    label: profile.ctas.breakDownTask,
    href: '/#contact',
  },
};

export const heroSection = {
  badge: {
    icon: Zap,
    text: profile.availability.label,
  },
  title: {
    lead: 'Разработка цифровых решений',
    accent: 'для бизнеса и рабочих процессов',
    tail: '',
  },
  description:
    'Сайты, веб-интерфейсы, прикладное ПО, автоматизация и аудит для проектов, где важно не просто что-то сделать, а разобраться в текущем состоянии, выделить приоритеты и двигаться к рабочему результату по понятному плану.',
  actions: {
    primary: {
      label: 'Коротко обсудить задачу',
      href: '/#contact',
    },
    secondary: {
      label: 'Посмотреть услуги',
      href: '/#services',
    },
    note: 'Большое ТЗ на старте не нужно: достаточно короткого сообщения о задаче, а детали и первый этап определим в обсуждении.',
  },
  highlights: [
    { icon: Rocket, text: 'Новый сайт или запуск' },
    { icon: CheckCircle2, text: 'Доработка существующего проекта' },
    { icon: Search, text: 'Технический разбор / аудит' },
  ] satisfies IconTextItem[],
  terminal: {
    label: 'stalarvision-terminal',
    status: 'ready',
    prompt: 'stanislav@stalarvision:~$',
    initialCommand: 'help',
    helpTitle: 'Available commands:',
    commands: [
      {
        id: 'new-project',
        command: 'new-project',
        scenario: 'новый проект',
        start: 'короткий разбор задачи',
        output: ['приоритеты', 'рабочий scope', 'структура первого релиза', 'следующий шаг'],
      },
      {
        id: 'improve-site',
        command: 'improve-site',
        scenario: 'существующий проект',
        start: 'разбор текущего состояния',
        output: ['что мешает сейчас', 'что исправлять первым', 'что можно оставить', 'ближайший этап'],
      },
      {
        id: 'web-app',
        command: 'web-app',
        scenario: 'веб-приложение / личный кабинет',
        start: 'разбор процессов и ролей',
        output: ['ключевой workflow', 'роли пользователей', 'структура интерфейса', 'первый рабочий релиз'],
      },
      {
        id: 'audit',
        command: 'audit',
        scenario: 'технический разбор',
        start: 'анализ текущего решения',
        output: ['приоритеты', 'риски перед изменениями', 'объём первого этапа', 'следующий разумный шаг'],
      },
      {
        id: 'automation',
        command: 'automation',
        scenario: 'автоматизация процесса',
        start: 'разбор текущего workflow',
        output: ['ручные операции', 'точки автоматизации', 'интеграции', 'первый полезный этап'],
      },
      {
        id: 'contact',
        command: 'contact',
        scenario: 'канал связи готов',
        start: 'коротко обсудить задачу',
        output: ['короткое описание задачи', 'ссылка на текущий проект — если есть', 'ограничения — если важны'],
        cta: {
          label: 'Перейти к форме',
          href: '/#contact',
        },
      },
    ],
  },
  panelSummary: {
    items: [
      { label: 'Старт', value: 'Короткий разбор' },
      { label: 'Выход', value: 'Первый этап' },
      { label: 'Сценарий', value: 'Запуск / доработка / аудит' },
    ],
    note:
      'Можно прийти с новой задачей, действующим проектом или запросом на спокойный технический разбор перед изменениями.',
  },
  floatingCards: {
    conversion: {
      label: 'Формат работы',
      value: 'Напрямую',
      status: 'neutral-copy',
    },
    launch: {
      label: 'Кому подхожу',
      value: 'Бизнес и эксперты',
      icon: MessageSquare,
      status: 'neutral-copy',
    },
  },
};

export const aboutSection = {
  title: {
    lead: 'Формат работы',
    accent: 'напрямую и по делу',
  },
  paragraphs: [
    'Я подключаюсь там, где проекту нужна техническая ясность: запустить новый сайт, доработать существующий, найти слабые места, автоматизировать процесс или понять, что исправлять первым.',
    profile.workFormat.summary,
    'Работаю так, чтобы задачу можно было обсуждать напрямую, не терять контекст по дороге и быстрее переходить к первому рабочему этапу.',
  ],
  stats: [
    { label: 'Формат', value: 'Напрямую', status: 'neutral-copy' },
    { label: 'Старт', value: 'С приоритета', status: 'neutral-copy' },
    { label: 'Решения', value: 'По контексту', status: 'neutral-copy' },
    { label: 'Процесс', value: 'Прозрачно', status: 'neutral-copy' },
  ],
  values: [
    {
      icon: Code2,
      title: 'Погружение в задачу',
      description:
        'Сначала разбираю цель, ограничения и текущую ситуацию, а не начинаю со стека или списка экранов.',
    },
    {
      icon: Target,
      title: 'Рабочий объём',
      description:
        'Помогаю выделить первый разумный этап: то, что уже приносит пользу и не перегружает проект.',
    },
    {
      icon: Users2,
      title: 'Поддерживаемая база',
      description:
        'Собираю решение так, чтобы его можно было спокойно дорабатывать и развивать без болезненного переписывания.',
    },
    {
      icon: ShieldCheck,
      title: 'Спокойная коммуникация',
      description:
        'Договорённости, риски и следующие шаги фиксируются человеческим языком и без лишнего шума.',
    },
  ] satisfies AboutValue[],
};

export const processSection = {
  title: {
    lead: 'Как я',
    accent: 'веду проект',
  },
  description:
    'Предпочитаю понятный процесс: сначала разобраться в задаче, затем согласовать рабочий объём и спокойно двигаться по этапам без лишнего шума.',
  steps: [
    {
      icon: MessageSquare,
      title: 'Обсуждение задачи',
      description:
        'Сначала разбираю задачу, ограничения проекта и то, какой результат действительно нужен на первом этапе.',
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      icon: Search,
      title: 'Анализ и решение',
      description:
        'Провожу аудит текущей ситуации и предлагаю решение, которое подходит задаче, а не выглядит красиво только на бумаге.',
      color: 'bg-indigo-500/10 text-indigo-500',
    },
    {
      icon: PenTool,
      title: 'Дизайн и прототип',
      description:
        'Собираю структуру и прототип там, где это помогает заранее согласовать логику интерфейса и не терять время в разработке.',
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      icon: Code,
      title: 'Разработка',
      description:
        'Реализую рабочую часть проекта и держу в фокусе читаемую базу, которую можно поддерживать и развивать дальше.',
      color: 'bg-pink-500/10 text-pink-500',
    },
    {
      icon: ShieldCheck,
      title: 'QA и Тестирование',
      description:
        'Проверяю ключевые сценарии, убираю очевидные ошибки и смотрю, чтобы проект вёл себя адекватно на разных устройствах.',
      color: 'bg-emerald-500/10 text-emerald-500',
    },
    {
      icon: Rocket,
      title: 'Запуск и поддержка',
      description:
        'Помогаю с запуском, передачей проекта и следующими доработками, если мы заранее закладываем это в работу.',
      color: 'bg-amber-500/10 text-amber-500',
    },
  ] satisfies ProcessStep[],
};

export const techStackSection = {
  title: {
    lead: 'Мой технологический',
    accent: 'стек',
  },
  description:
    'Использую стек под задачу, а не ради витрины технологий. В фокусе frontend, backend, базы данных, testing, devops и tooling, с которыми проект удобно запускать, разбирать, проверять и спокойно развивать дальше.',
  categories: ['Frontend', 'Backend', 'Database', 'Testing', 'DevOps', 'Tools'] satisfies TechStackCategory[],
  technologies: [
    {
      name: 'HTML5',
      category: 'Frontend',
      levelLabel: 'Рабочий стек',
      levelWidth: '90%',
      status: 'neutral-stack',
      practicalUse:
        'Собираю семантическую структуру страниц, форм, навигации и контентных разделов, учитывая доступность, SEO и корректную организацию базовой разметки.',
      projects: ['Stalarvision', 'Intelverbum', 'QuoteFlow', 'ApprovalFlow'],
    },
    {
      name: 'CSS3 / Tailwind',
      category: 'Frontend',
      levelLabel: 'Рабочий стек',
      levelWidth: '88%',
      status: 'neutral-stack',
      practicalUse:
        'Создаю адаптивные интерфейсы, дизайн-системные компоненты, состояния элементов, сетки и мобильные раскладки. Поддерживаю единый визуальный язык без дублирования большого объёма CSS.',
      projects: ['Stalarvision', 'QuoteFlow', 'ApprovalFlow'],
    },
    {
      name: 'JavaScript / TypeScript',
      category: 'Frontend',
      levelLabel: 'Рабочий стек',
      levelWidth: '92%',
      status: 'neutral-stack',
      practicalUse:
        'Реализую клиентскую логику, формы, расчёты, валидацию, работу с API и типизированные модели данных. TypeScript использую для явных контрактов и раннего обнаружения ошибок.',
      projects: ['Stalarvision', 'QuoteFlow', 'ApprovalFlow'],
    },
    {
      name: 'React / Vite',
      category: 'Frontend',
      levelLabel: 'Основной frontend',
      levelWidth: '94%',
      status: 'neutral-stack',
      practicalUse:
        'Собираю SPA-интерфейсы, маршрутизацию, формы, состояния загрузки и ошибок, адаптивные пользовательские сценарии и интеграцию frontend с API. Vite использую для быстрой разработки и воспроизводимой production-сборки.',
      projects: ['Stalarvision', 'QuoteFlow', 'ApprovalFlow'],
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      levelLabel: 'По задаче',
      levelWidth: '82%',
      status: 'neutral-stack',
      practicalUse:
        'Разрабатываю сайты и продуктовые интерфейсы с файловой маршрутизацией, серверным рендерингом или статической генерацией, SEO-метаданными и оптимизированной структурой страниц.',
      projects: ['LocalKit'],
    },
    {
      name: 'TanStack Query / Zod',
      category: 'Frontend',
      levelLabel: 'API state и валидация',
      levelWidth: '76%',
      status: 'neutral-stack',
      practicalUse:
        'Организую получение и обновление серверных данных, кеширование запросов, состояния загрузки и ошибок. Zod использую для проверки структуры данных и защиты интерфейса от некорректных ответов API.',
      projects: ['ApprovalFlow'],
    },
    {
      name: 'Java / Spring Boot',
      category: 'Backend',
      levelLabel: 'Основной backend',
      levelWidth: '82%',
      status: 'neutral-stack',
      practicalUse:
        'Разрабатываю REST backend для бизнес-процессов, разделяю доменную и прикладную логику, реализую валидацию, работу с PostgreSQL, пользователей, роли и историю изменений.',
      projects: ['ApprovalFlow'],
    },
    {
      name: 'Spring Security',
      category: 'Backend',
      levelLabel: 'Роли и авторизация',
      levelWidth: '78%',
      status: 'neutral-stack',
      practicalUse:
        'Реализую вход пользователей, безопасное хранение паролей, разграничение ролей и защиту backend-маршрутов. Проверяю сценарии доступа интеграционными тестами.',
      projects: ['ApprovalFlow'],
    },
    {
      name: 'Python / FastAPI',
      category: 'Backend',
      levelLabel: 'Backend и API',
      levelWidth: '80%',
      status: 'neutral-stack',
      practicalUse:
        'Создаю API для расчётов и обработки данных, формирую документы на сервере и связываю backend с React-интерфейсом. Описываю и проверяю входные и выходные модели API.',
      projects: ['QuoteFlow'],
    },
    {
      name: 'Node.js / Express',
      category: 'Backend',
      levelLabel: 'По задаче',
      levelWidth: '82%',
      status: 'neutral-stack',
      practicalUse:
        'Разрабатываю серверную логику и вспомогательные API под конкретные рабочие сценарии, когда для задачи достаточно лёгкого Node.js backend и понятной маршрутизации.',
    },
    {
      name: 'REST API',
      category: 'Backend',
      levelLabel: 'Интеграции и API',
      levelWidth: '84%',
      status: 'neutral-stack',
      practicalUse:
        'Проектирую HTTP-контракты между frontend и backend, ресурсы, методы, статусы, обработку ошибок и проверку данных. Связываю интерфейс с серверной бизнес-логикой и базой данных.',
      projects: ['QuoteFlow', 'ApprovalFlow'],
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      levelLabel: 'Работа с данными',
      levelWidth: '76%',
      status: 'neutral-stack',
      practicalUse:
        'Проектирую хранение связанных сущностей, пользователей, заявок и истории действий. Подключаю базу к backend и проверяю сценарии на реальной PostgreSQL.',
      projects: ['ApprovalFlow'],
    },
    {
      name: 'SQL',
      category: 'Database',
      levelLabel: 'Работа с данными',
      levelWidth: '84%',
      status: 'neutral-stack',
      practicalUse:
        'Работаю со структурой реляционных данных, связями, ограничениями и запросами, необходимыми для backend-логики и проверки состояния приложения.',
      projects: ['ApprovalFlow'],
    },
    {
      name: 'Vitest / Jest',
      category: 'Testing',
      levelLabel: 'Проверка логики и UI',
      levelWidth: '72%',
      status: 'neutral-stack',
      practicalUse:
        'Проверяю функции, компоненты и пользовательскую логику изолированными автоматическими тестами, чтобы изменения не ломали уже работающие сценарии.',
    },
    {
      name: 'Playwright',
      category: 'Testing',
      levelLabel: 'Ключевые сценарии',
      levelWidth: '68%',
      status: 'neutral-stack',
      practicalUse:
        'Проверяю ключевые пользовательские сценарии в реальном браузере: навигацию, формы, адаптивность и критические состояния интерфейса.',
      projects: ['Web Audit Lab'],
    },
    {
      name: 'Testcontainers',
      category: 'Testing',
      levelLabel: 'Интеграционные тесты',
      levelWidth: '66%',
      status: 'neutral-stack',
      practicalUse:
        'Запускаю интеграционные тесты backend на временной реальной PostgreSQL, чтобы проверять репозитории, безопасность и полные серверные сценарии независимо от локальной базы разработчика.',
      projects: ['ApprovalFlow'],
    },
    {
      name: 'Docker / Docker Compose',
      category: 'DevOps',
      levelLabel: 'Контейнерные окружения',
      levelWidth: '70%',
      status: 'neutral-stack',
      practicalUse:
        'Собираю frontend, backend и базу данных в изолированные контейнеры, настраиваю внутреннюю сеть, переменные окружения, healthchecks и воспроизводимый запуск всего приложения.',
      projects: ['QuoteFlow', 'ApprovalFlow'],
    },
    {
      name: 'Nginx',
      category: 'DevOps',
      levelLabel: 'Reverse proxy и HTTPS',
      levelWidth: '70%',
      status: 'neutral-stack',
      practicalUse:
        'Настраиваю раздачу SPA, reverse proxy к backend, маршрутизацию API, домены и публикацию приложений через HTTPS на VPS.',
      projects: ['Stalarvision', 'QuoteFlow', 'ApprovalFlow'],
    },
    {
      name: 'Linux / VPS',
      category: 'DevOps',
      levelLabel: 'Deployment и окружения',
      levelWidth: '70%',
      status: 'neutral-stack',
      practicalUse:
        'Разворачиваю приложения на Ubuntu-серверах, работаю через SSH, подключаю домены, Nginx и TLS-сертификаты, проверяю health endpoints и выполняю контролируемые обновления.',
      projects: ['Stalarvision', 'QuoteFlow', 'ApprovalFlow'],
    },
    {
      name: 'Maven',
      category: 'Tools',
      levelLabel: 'Сборка и зависимости',
      levelWidth: '74%',
      status: 'neutral-stack',
      practicalUse:
        'Собираю Java backend, управляю зависимостями, запускаю тесты и формирую исполняемый артефакт для контейнерной сборки.',
      projects: ['ApprovalFlow'],
    },
    {
      name: 'Gradle',
      category: 'Tools',
      levelLabel: 'JVM tooling',
      levelWidth: '72%',
      status: 'neutral-stack',
      practicalUse:
        'Использую JVM tooling для задач, где нужен альтернативный сценарий сборки, управления зависимостями и запуска проверок в Java-проектах.',
    },
    {
      name: 'Git / GitHub',
      category: 'Tools',
      levelLabel: 'Рабочий процесс',
      levelWidth: '86%',
      status: 'neutral-stack',
      practicalUse:
        'Веду изменения в отдельных ветках, проверяю diff, оформляю pull request, контролирую историю изменений и разворачиваю проверенные версии из main.',
      projects: ['Stalarvision', 'QuoteFlow', 'ApprovalFlow'],
    },
  ] satisfies TechnologyItem[],
};

export const trustSection = {
  eyebrow: 'Почему удобно работать напрямую',
  title: 'Не про обещания, а про рабочий формат',
  description:
    'На сайте нет выдуманных отзывов и надуманных цифр. Вместо этого здесь собраны практические причины, по которым многим задачам удобнее идти напрямую: быстрее договориться о первом этапе, не терять контекст и спокойно развивать существующий проект.',
  items: [
    {
      icon: MessageSquare,
      title: 'Прямой контакт по задаче',
      description:
        'Вы обсуждаете проект с тем, кто его разбирает и реализует. Это сокращает лишние пересказы, помогает быстрее уточнять детали и не терять контекст по ходу работы.',
      note: 'Один канал общения вместо длинной цепочки.',
    },
    {
      icon: ShieldCheck,
      title: 'Понятный первый этап',
      description:
        'Можно начать не с большого объёма, а с короткого разбора, аудита текущего состояния или первого рабочего этапа, который действительно двигает задачу вперёд.',
      note: 'Проще согласовать приоритет и следующий шаг.',
    },
    {
      icon: Code2,
      title: 'Аккуратное развитие действующего проекта',
      description:
        'Если сайт или сервис уже работает, можно спокойно разобраться в проблемных местах, понять риски перед изменениями и двигаться поэтапно без резкого переписывания всего проекта.',
      note: 'Удобно для доработки, развития и технического разбора.',
    },
  ],
  summary:
    'Если удобнее начать с короткого сообщения, на сайте уже есть рабочая форма, Telegram, email и телефон. Можно выбрать привычный канал связи и быстро перейти к предметному разговору о задаче.',
};

export const footerData = {
  brandName: profile.brand.fullName,
  description:
    'Помогаю бизнесу запускать сайты и веб-приложения, дорабатывать существующие проекты и проводить технический разбор или аудит текущего состояния без лишней коммуникационной цепочки.',
  navigationTitle: 'Навигация',
  navigationLinks: [
    { name: 'Услуги', href: '/#services' },
    { name: 'Портфолио', href: '/#portfolio' },
    { name: 'Этапы работы', href: '/#process' },
    { name: 'Контакты', href: '/#contact' },
  ] satisfies NavLink[],
  documentsTitle: 'Документы',
  documentLinks: [
    { name: 'Политика данных', href: '/privacy' },
    { name: 'Условия использования', href: '/terms' },
    { name: 'Реквизиты', href: '/privacy#requisites' },
  ] satisfies NavLink[],
  analyticsSettingsLabel: 'Настройки аналитики',
  contactTitle: 'Контакты',
  legalName: profile.owner.legalName,
  taxIdLabel: `ИНН ${profile.owner.taxId}`,
  rightsLabel: 'Все права защищены.',
  signature: profile.owner.name,
};
