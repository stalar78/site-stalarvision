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
    `Можно написать в Telegram, в MAX, на email или оставить заявку через форму. Подходит для нового проекта, доработки текущего решения и аудита / технического разбора.`,
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
      'Для старта достаточно короткого описания задачи. Большое ТЗ не требуется.',
  },
  consultation: {
    title: 'Что написать в первом сообщении',
    description:
      'Достаточно 3 пунктов: чем вы занимаетесь, какая задача сейчас приоритетна и что нужно сделать первым шагом. Если это аудит или техразбор, добавьте ссылку на текущий сайт и коротко опишите, что беспокоит.',
  },
  firstStep: {
    title: 'Что будет после обращения',
    items: [
      'Коротко сверяем задачу, контекст и приоритет.',
      'Если нужен аудит / техразбор, сначала смотрим текущее состояние и риски перед изменениями.',
      'Фиксируем первый этап и что нужно подготовить дальше.',
    ],
  },
  preparation: {
    title: 'Что можно прислать сразу (по желанию)',
    items: [
      'Ссылку на текущий сайт, продукт, макет или репозиторий, если они уже есть.',
      'Коротко: что нужно запустить, доработать или проверить в первую очередь.',
      'Если это аудит, что именно беспокоит: ошибки, стабильность, структура, безопасность.',
      'Ограничения по срокам или согласованию, если они важны.',
    ],
  },
  form: {
    note:
      'Можно отправить заявку через форму или написать напрямую в Telegram, MAX, email или по телефону. Форму удобно использовать и для нового проекта, и для доработки, и для запроса на аудит / техразбор.',
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
      'Для аудита / техразбора достаточно ссылки на текущий сайт или проект и короткого комментария, что хотите проверить.',
    projectLabel: 'О проекте',
    projectPlaceholder:
      'Коротко: что уже есть, что нужно сделать на первом этапе и какой результат сейчас приоритетен.',
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
