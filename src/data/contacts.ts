import {
  Github,
  Mail,
  MessageCircle,
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
    label: 'Email',
    href: profile.contacts.email.href,
    icon: Mail,
    status: 'approved-contact',
  },
] satisfies IconLink[];

export const contactSection = {
  title: {
    lead: 'Есть задача?',
    accent: 'Начнём с короткого разбора',
  },
  description:
    `Быстрее всего написать мне в Telegram или на email. Достаточно пары предложений о задаче, текущем состоянии проекта и желаемом результате, чтобы понять следующий шаг.`,
  actions: {
    primary: {
      label: profile.ctas.writeTelegram,
      href: profile.contacts.telegram.href,
    },
    secondary: {
      label: profile.ctas.writeEmail,
      href: profile.contacts.email.href,
    },
  },
  consultation: {
    title: 'Что написать в первом сообщении',
    description:
      'Достаточно трёх вещей: чем вы занимаетесь, какая задача сейчас приоритетна и какой результат нужен после первого этапа.',
  },
  firstStep: {
    title: 'Что будет после обращения',
    items: [
      'Коротко разбираем задачу, контекст и ограничения проекта.',
      'Определяем, что имеет смысл делать первым этапом без лишнего объёма.',
      'Фиксируем, какие материалы, доступы или уточнения нужны дальше.',
    ],
  },
  preparation: {
    title: 'Что поможет быстрее стартовать',
    items: [
      'Ссылку на текущий сайт, продукт, макет или репозиторий, если они уже есть.',
      'Пару фраз о задаче: что нужно запустить, доработать или автоматизировать.',
      'Приоритет на ближайший этап: что важнее сделать сейчас, а что может подождать.',
      'Ограничения по срокам, согласованию или технической среде, если они есть.',
    ],
  },
  form: {
    note:
      'Можно отправить заявку прямо через форму или написать мне напрямую в Telegram и на email, если удобнее обсудить задачу без ожидания.',
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
      'Автоматизация бизнеса',
      'Другое',
    ],
    projectLabel: 'О проекте',
    projectPlaceholder: 'Что нужно сделать, что уже есть сейчас и какой результат нужен после первого этапа?',
    submitLabel: 'Отправить заявку',
    loadingLabel: 'Отправка...',
    successMessage: 'Заявка отправлена. Я посмотрю описание задачи и вернусь с ответом в ближайшее время.',
    errorMessage: 'Не получилось отправить форму. Попробуйте ещё раз или напишите мне напрямую в Telegram или на email.',
    validationErrors: {
      name: 'Укажите имя, чтобы я понимал, как к вам обращаться.',
      contact: 'Добавьте контакт для ответа: Telegram или email.',
      project: 'Коротко опишите задачу, чтобы я понял следующий шаг.',
    },
    legalNote:
      `Заявка отправляется через Web3Forms. Если удобнее, можно сразу написать мне в ${profile.contacts.telegram.value} или ${profile.contacts.email.value}.`,
  },
};

export const contactMethods = [
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
] satisfies ContactMethod[];

export const footerContactMethods = [
  {
    label: 'Telegram',
    value: profile.contacts.telegram.value,
    href: profile.contacts.telegram.href,
    icon: Send,
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
