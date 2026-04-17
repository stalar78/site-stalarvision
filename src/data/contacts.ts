import {
  Github,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  type LucideIcon,
} from 'lucide-react';
import { profile } from '@/data/profile';

type IconLink = {
  label: string;
  href?: string;
  icon: LucideIcon;
  status: string;
};

type ContactMethod = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
  status: string;
};

export const navbarSocialLinks = [
  {
    label: 'GitHub',
    href: profile.contacts.github.href,
    icon: Github,
    status: 'approved-link',
  },
  {
    label: 'MAX',
    href: profile.contacts.max.href,
    icon: MessageSquare,
    status: 'approved-link',
  },
] satisfies IconLink[];

export const mobileMenuSocialLinks = [
  {
    label: 'GitHub',
    href: profile.contacts.github.href,
    icon: Github,
    status: 'approved-link',
  },
  {
    label: 'Telegram',
    href: profile.contacts.telegram.href,
    icon: Send,
    status: 'approved-link',
  },
  {
    label: 'MAX',
    href: profile.contacts.max.href,
    icon: MessageSquare,
    status: 'approved-link',
  },
] satisfies IconLink[];

export const footerSocialLinks = [
  {
    label: 'GitHub',
    href: profile.contacts.github.href,
    icon: Github,
    status: 'approved-link',
  },
  {
    label: 'Telegram',
    href: profile.contacts.telegram.href,
    icon: Send,
    status: 'approved-link',
  },
  {
    label: 'MAX',
    href: profile.contacts.max.href,
    icon: MessageSquare,
    status: 'approved-link',
  },
  {
    label: 'Email',
    href: profile.contacts.email.href,
    icon: Mail,
    status: 'approved-contact',
  },
] satisfies IconLink[];

export const contactSection = {
  title: {
    lead: 'Новый проект, доработка или аудит?',
    accent: 'Начнём с короткого разбора',
  },
  description:
    `Быстрее всего написать мне в Telegram, в MAX, на email или оставить заявку через форму. Сюда можно обратиться и за запуском нового проекта, и за доработкой существующего сайта, и за аудитом / техническим разбором перед изменениями.`,
  actions: {
    primary: {
      label: profile.ctas.writeTelegram,
      href: profile.contacts.telegram.href,
    },
    secondary: {
      label: profile.ctas.writeEmail,
      href: profile.contacts.email.href,
    },
    note:
      'Достаточно коротко описать сценарий: новый проект, доработка действующего решения или аудит текущего сайта.',
  },
  consultation: {
    title: 'Что написать в первом сообщении',
    description:
      'Обычно достаточно трёх вещей: чем вы занимаетесь, какая задача сейчас приоритетна и что именно нужно запустить, доработать или сначала разобрать перед изменениями. Если речь про аудит, полезно сразу дать ссылку на текущий сайт и коротко написать, что именно беспокоит.',
  },
  firstStep: {
    title: 'Что будет после обращения',
    items: [
      'Коротко разбираем задачу, контекст и ограничения проекта.',
      'Если запрос про аудит или техразбор, сначала смотрим на текущее состояние, проблемные места и риски перед изменениями.',
      'Фиксируем, какие материалы, доступы или уточнения нужны дальше.',
    ],
  },
  preparation: {
    title: 'Что поможет быстрее стартовать',
    items: [
      'Ссылку на текущий сайт, продукт, макет или репозиторий, если они уже есть.',
      'Короткое описание проблемы или цели: что нужно запустить, доработать, проверить или разобрать перед изменениями.',
      'Если запрос связан с аудитом, полезно сразу написать, что именно беспокоит: стабильность, структура, безопасность, ошибки или риски перед доработкой.',
      'Приоритет на ближайший этап: что важнее сделать сейчас, а что может подождать.',
      'Ограничения по срокам, согласованию или технической среде, если они есть.',
    ],
  },
  form: {
    note:
      'Можно отправить заявку прямо через форму или написать мне напрямую в Telegram, в MAX, на email или позвонить, если удобнее быстрее обсудить задачу. Форма подходит и для нового проекта, и для запроса на аудит / технический разбор текущего сайта.',
    accessKey: '7ced4029-36f8-447a-bf49-6055fd82d36e',
    endpoint: 'https://api.web3forms.com/submit',
    subject: `Заявка с сайта ${profile.brand.fullName}`,
    nameLabel: 'Как вас зовут?',
    namePlaceholder: 'Ваше имя',
    contactLabel: 'Контакт (Telegram/Email)',
    contactPlaceholder: profile.contacts.telegram.value,
    projectTypeLabel: 'Тип проекта',
    projectTypeOptions: [
      'Landing Page',
      'Веб-приложение',
      'Аудит / технический разбор',
      'Автоматизация бизнеса',
      'Другое',
    ],
    projectTypeHelp:
      'Если нужен аудит / технический разбор, достаточно ссылки на текущий сайт или проект и короткого описания того, что именно хотите проверить перед изменениями.',
    projectLabel: 'О проекте',
    projectPlaceholder:
      'Что уже есть сейчас, что нужно сделать или проверить, и что именно беспокоит: структура, стабильность, безопасность, ошибки или следующий этап развития?',
    submitLabel: 'Отправить заявку',
    loadingLabel: 'Отправка...',
    successMessage:
      'Заявка отправлена. Я посмотрю описание задачи или текущего состояния проекта и вернусь с ответом в ближайшее время.',
    errorMessage: 'Не получилось отправить форму. Попробуйте ещё раз или напишите мне напрямую в Telegram или на email.',
    cooldownMessage:
      'Сообщение уже отправлялось совсем недавно. Подождите немного и попробуйте ещё раз или напишите мне напрямую.',
    validationErrors: {
      name: 'Укажите имя, чтобы я понимал, как к вам обращаться.',
      contact: 'Добавьте контакт для ответа: Telegram или email.',
      project: 'Коротко опишите задачу, чтобы я понял следующий шаг.',
      nameTooLong: 'Имя лучше оставить коротким — до 80 символов.',
      contactTooLong: 'Контакт лучше указать короче — до 120 символов.',
      projectTooLong: 'Описание стоит сократить до 2000 символов, чтобы не потерять суть.',
    },
    security: {
      honeypotFieldName: 'company_website',
      timeoutMs: 10000,
      cooldownMs: 15000,
      maxLength: {
        name: 80,
        contact: 120,
        project: 2000,
      },
    },
    legalNote:
      `Форма передаёт обращение через Web3Forms. Если удобнее, можно сразу написать мне в ${profile.contacts.telegram.value}, в ${profile.contacts.max.label}, на ${profile.contacts.email.value} или позвонить по номеру ${profile.contacts.phone.value}.`,
  },
};

export const contactMethods = [
  {
    label: 'Телефон',
    value: profile.contacts.phone.value,
    href: profile.contacts.phone.href,
    icon: Phone,
    status: 'approved-contact',
  },
  {
    label: 'Email',
    value: profile.contacts.email.value,
    href: profile.contacts.email.href,
    icon: Mail,
    status: 'approved-contact',
  },
  {
    label: 'Telegram',
    value: profile.contacts.telegram.value,
    href: profile.contacts.telegram.href,
    icon: MessageCircle,
    status: 'approved-contact',
  },
  {
    label: 'MAX',
    value: profile.contacts.max.value,
    href: profile.contacts.max.href,
    icon: MessageSquare,
    status: 'approved-contact',
  },
] satisfies ContactMethod[];

export const footerContactMethods = [
  {
    label: 'Телефон',
    value: profile.contacts.phone.value,
    href: profile.contacts.phone.href,
    icon: Phone,
    status: 'approved-contact',
  },
  {
    label: 'Telegram',
    value: profile.contacts.telegram.value,
    href: profile.contacts.telegram.href,
    icon: Send,
    status: 'approved-contact',
  },
  {
    label: 'MAX',
    value: profile.contacts.max.value,
    href: profile.contacts.max.href,
    icon: MessageSquare,
    status: 'approved-contact',
  },
  {
    label: 'Email',
    value: profile.contacts.email.value,
    href: profile.contacts.email.href,
    icon: Mail,
    status: 'approved-contact',
  },
] satisfies ContactMethod[];
