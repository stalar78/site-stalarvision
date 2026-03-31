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
    tail: 'без лишней цепочки посредников',
  },
  description:
    `Я работаю под брендом ${profile.brand.fullName} и напрямую помогаю бизнесу, экспертам и небольшим командам запускать сайты, веб-приложения, автоматизацию и развивать существующие проекты. Можно прийти с новой идеей, текущим сайтом или точечной задачей, чтобы спокойно определить понятный первый этап.`,
  actions: {
    primary: {
      label: profile.ctas.breakDownTask,
      href: '/#contact',
    },
    secondary: {
      label: profile.ctas.viewServices,
      href: '/#services',
    },
  },
  highlights: [
    { icon: CheckCircle2, text: 'Прямой контакт с исполнителем' },
    { icon: Shield, text: 'Понятный первый этап' },
    { icon: Rocket, text: 'Новый проект или доработка' },
  ] satisfies IconTextItem[],
  codeWindowLabel: 'project-brief.ts',
  codeSnippet: `const collaboration = {
  owner: "${profile.owner.name}",
  brand: "${profile.brand.fullName}",
  format: "direct work",
  focus: ${JSON.stringify(profile.mainDirections)},
  priorities: ["clarity", "scope", "practical value"],

  nextStep(task) {
    return defineScope(task);
  }
};`,
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
    'Я подключаюсь там, где нужен один сильный технический исполнитель: запустить сайт, собрать интерфейс, автоматизировать часть процесса или спокойно развивать существующий проект.',
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
    lead: 'Как мы',
    accent: 'придем к результату',
  },
  description:
    'Прозрачный процесс помогает заранее видеть этапы, объём работ и следующие решения по проекту.',
  steps: [
    {
      icon: MessageSquare,
      title: 'Обсуждение задачи',
      description:
        'Сначала разбираемся в задаче, ограничениях проекта и том, какой результат действительно нужен.',
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      icon: Search,
      title: 'Анализ и решение',
      description:
        'Провожу аудит, предлагаю оптимальный стек технологий и архитектуру системы.',
      color: 'bg-indigo-500/10 text-indigo-500',
    },
    {
      icon: PenTool,
      title: 'Дизайн и прототип',
      description:
        'Создаю структуру и визуальный прототип, чтобы согласовать UX до написания кода.',
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      icon: Code,
      title: 'Разработка',
      description:
        'Написание чистого, масштабируемого кода с регулярными отчетами о прогрессе.',
      color: 'bg-pink-500/10 text-pink-500',
    },
    {
      icon: ShieldCheck,
      title: 'QA и Тестирование',
      description:
        'Проверка на ошибки, оптимизация скорости и тестирование на всех устройствах.',
      color: 'bg-emerald-500/10 text-emerald-500',
    },
    {
      icon: Rocket,
      title: 'Запуск и поддержка',
      description:
        'Помогаю с запуском, передачей проекта и дальнейшими доработками, если это входит в договорённости.',
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
    'Использую стек под задачу, а не ради витрины технологий. Основной фокус — современные frontend- и backend-инструменты, с которыми проект удобно запускать, поддерживать и спокойно развивать дальше.',
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
    { name: 'Git / GitHub', category: 'Tools', levelLabel: 'Рабочий процесс', levelWidth: '86%', status: 'neutral-stack' },
  ],
};

export const trustSection = {
  eyebrow: 'Почему удобно работать напрямую',
  title: 'Не про обещания, а про рабочий формат',
  description:
    'На сайте пока нет блока с подтверждёнными отзывами и публичными кейсами. Вместо социального доказательства здесь собраны практические причины, по которым многим проектам удобнее работать напрямую с одним сильным исполнителем.',
  items: [
    {
      icon: MessageSquare,
      title: 'Один контекст вместо цепочки пересказов',
      description:
        'Вы обсуждаете задачу с тем, кто её анализирует и реализует. Это сокращает искажения, ускоряет уточнения и помогает быстрее принимать решения по проекту.',
      note: 'Меньше потерь на передаче контекста.',
    },
    {
      icon: ShieldCheck,
      title: 'Объём под реальную задачу',
      description:
        'Можно начать с понятного этапа, проверить идею, доработать существующий проект или собрать рабочую основу без тяжёлого подрядного процесса.',
      note: 'Проще управлять приоритетами и бюджетом.',
    },
    {
      icon: Code2,
      title: 'Проект легче развивать дальше',
      description:
        'Решения принимаются с оглядкой на дальнейшую поддержку: как обновлять сайт, расширять сервис или передавать проект в следующую итерацию.',
      note: 'Ниже порог для следующих шагов после запуска.',
    },
  ],
  summary:
    'Такой формат особенно полезен, когда проекту нужен не большой подряд, а один ответственный технический партнёр, который может разобраться в задаче и довести её до рабочего состояния.',
};

export const footerData = {
  brandName: profile.brand.fullName,
  description:
    'Помогаю бизнесу запускать сайты, веб-приложения, автоматизацию и развивать существующие проекты без лишней коммуникационной цепочки.',
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
