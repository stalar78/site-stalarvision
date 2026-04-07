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

export const navbarData = {
  brand: {
    href: profile.brand.href,
    name: profile.brand.primaryName,
    accent: profile.brand.accentName,
  },
  links: [
    { name: 'Услуги', href: '/#services' },
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
    lead: 'Независимый разработчик',
    accent: 'для бизнеса',
    tail: 'напрямую, без лишних посредников',
  },
  description:
    `Под брендом ${profile.brand.fullName} я напрямую работаю с бизнесом, экспертами и небольшими командами: запускаю новые сайты и веб-приложения, дорабатываю действующие решения и подключаюсь там, где сначала нужен аудит или технический разбор текущего состояния проекта.`,
  actions: {
    primary: {
      label: profile.ctas.breakDownTask,
      href: '/#contact',
    },
    secondary: {
      label: profile.ctas.viewServices,
      href: '/#services',
    },
    note: 'Новый проект, доработка или аудит / техразбор — можно начать с короткого разбора задачи и первого этапа.',
  },
  highlights: [
    { icon: Rocket, text: 'Новый проект или запуск' },
    { icon: CheckCircle2, text: 'Доработка текущего решения' },
    { icon: Search, text: 'Аудит / техразбор' },
  ] satisfies IconTextItem[],
  codeWindowLabel: 'project-brief.ts',
  codeSnippet: `const collaboration = {
  owner: "${profile.owner.name}",
  brand: "${profile.brand.fullName}",
  format: "direct work",
  entryPoints: ["new project", "existing solution", "audit / tech review"],
  focus: ${JSON.stringify(profile.mainDirections)},
  firstStage: {
    start: "short discovery",
    output: ["priorities", "scope", "next actions"],
  },
  priorities: ["clarity", "scope", "practical value"],

  nextStep(task) {
    return defineScope(task).buildFirstStage();
  }
};`,
  panelSummary: {
    items: [
      { label: 'Старт', value: 'Короткий разбор' },
      { label: 'Выход', value: 'Первый этап' },
      { label: 'Сценарий', value: 'Запуск / доработка / аудит' },
    ],
    note:
      'Можно прийти с новой задачей, действующим проектом или запросом на технический разбор текущего состояния.',
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
    'Я подключаюсь там, где нужен один сильный технический исполнитель: запустить сайт, собрать интерфейс, автоматизировать часть процесса, доработать действующий проект или спокойно провести технический разбор перед следующим этапом.',
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
    'Использую стек под задачу, а не ради витрины технологий. В фокусе frontend, backend, базы данных и tooling, с которыми проект удобно запускать, разбирать, поддерживать и спокойно развивать дальше.',
  categories: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools'],
  technologies: [
    { name: 'HTML5', category: 'Frontend', levelLabel: 'Рабочий стек', levelWidth: '90%', status: 'neutral-stack' },
    { name: 'CSS3 / Tailwind', category: 'Frontend', levelLabel: 'Рабочий стек', levelWidth: '88%', status: 'neutral-stack' },
    { name: 'JavaScript / TS', category: 'Frontend/Backend', levelLabel: 'Основа проектов', levelWidth: '92%', status: 'neutral-stack' },
    { name: 'React / Next.js', category: 'Frontend', levelLabel: 'Основной фокус', levelWidth: '94%', status: 'neutral-stack' },
    { name: 'Node.js / Express', category: 'Backend', levelLabel: 'Под рабочие задачи', levelWidth: '82%', status: 'neutral-stack' },
    { name: 'Java', category: 'Backend', levelLabel: 'Рабочий стек', levelWidth: '82%', status: 'neutral-stack' },
    { name: 'REST API / GraphQL', category: 'Backend', levelLabel: 'Интеграции и API', levelWidth: '84%', status: 'neutral-stack' },
    { name: 'Spring / Spring Boot', category: 'Backend', levelLabel: 'Backend и API', levelWidth: '80%', status: 'neutral-stack' },
    { name: 'PostgreSQL / Mongo', category: 'Database', levelLabel: 'По задаче', levelWidth: '76%', status: 'neutral-stack' },
    { name: 'SQL', category: 'Database', levelLabel: 'Работа с данными', levelWidth: '84%', status: 'neutral-stack' },
    { name: 'Docker / Nginx', category: 'DevOps', levelLabel: 'Для деплоя и окружения', levelWidth: '70%', status: 'neutral-stack' },
    { name: 'Maven', category: 'Tools', levelLabel: 'Сборка и зависимости', levelWidth: '74%', status: 'neutral-stack' },
    { name: 'Gradle', category: 'Tools', levelLabel: 'JVM tooling', levelWidth: '72%', status: 'neutral-stack' },
    { name: 'Git / GitHub', category: 'Tools', levelLabel: 'Рабочий процесс', levelWidth: '86%', status: 'neutral-stack' },
  ],
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
    { name: 'Реквизиты', href: '/privacy#requisites' },
  ] satisfies NavLink[],
  contactTitle: 'Контакты',
  legalName: profile.owner.legalName,
  taxIdLabel: `ИНН ${profile.owner.taxId}`,
  rightsLabel: 'Все права защищены.',
  signature: profile.owner.name,
};
