import {
  Brain,
  Github,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  type LucideIcon,
} from 'lucide-react';
import { VkIcon } from '@/components/icons/VkIcon';
import { WorkspaceIcon } from '@/components/icons/WorkspaceIcon';
import { profile } from '@/data/profile';

type IconComponent = LucideIcon | typeof VkIcon;

type IconLink = {
  label: string;
  href?: string;
  icon: IconComponent;
  status: string;
};

type ContactMethod = {
  label: string;
  value: string;
  href?: string;
  icon: IconComponent;
  status: string;
};

export const WEBSITE_IMPROVEMENT_PROJECT_TYPE = 'Доработка существующего сайта';
export const WEBSITE_AUDIT_PROJECT_TYPE = 'Аудит / технический разбор';
export const WEBSITE_LAUNCH_PROJECT_TYPE = 'Новый сайт / первый релиз';
export const WEB_APPLICATION_DEVELOPMENT_PROJECT_TYPE = 'Веб-приложение / личный кабинет';
export const LEGAL_ENGINEERING_PROJECT_TYPE = 'Юридико-технический аудит / Legal Engineering';
export const IT_LAW_PROJECT_TYPE = 'IT-право / договоры / споры';

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
  {
    label: 'Brain Trainer',
    href: 'http://155.212.138.22/brain_trainer/',
    icon: Brain,
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
  {
    label: 'Brain Trainer',
    href: 'http://155.212.138.22/brain_trainer/',
    icon: Brain,
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
  {
    label: profile.contacts.vk.label,
    href: profile.contacts.vk.href,
    icon: VkIcon,
    status: 'approved-link',
  },
  {
    label: profile.contacts.workspace.label,
    href: profile.contacts.workspace.href,
    icon: WorkspaceIcon,
    status: 'approved-link',
  },
] satisfies IconLink[];

export const contactSection = {
  title: {
    lead: 'Новый проект, доработка или аудит?',
    accent: 'Начнём с короткого разбора',
  },
  description:
    `Достаточно коротко описать задачу и текущее состояние проекта. Я посмотрю контекст и предложу ближайший разумный первый шаг: разбор, доработку, запуск или отдельную техническую задачу.`,
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
      'Можно написать в свободной форме: что уже есть сейчас, что нужно изменить или запустить, и какой результат хотите получить на ближайшем этапе. Если это аудит или техразбор, добавьте ссылку на текущий сайт и коротко опишите, что беспокоит.',
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
      'Заполните короткую форму и отправьте обращение — оно поступит мне напрямую для ответа и предварительного обсуждения задачи.',
    nameLabel: 'Как вас зовут?',
    namePlaceholder: 'Ваше имя',
    contactLabel: 'Контакт (Telegram/Email)',
    contactPlaceholder: '@username или name@example.com',
    projectTypeLabel: 'Тип проекта',
    projectTypeOptions: [
      'Landing Page',
      WEBSITE_LAUNCH_PROJECT_TYPE,
      WEBSITE_IMPROVEMENT_PROJECT_TYPE,
      WEB_APPLICATION_DEVELOPMENT_PROJECT_TYPE,
      WEBSITE_AUDIT_PROJECT_TYPE,
      LEGAL_ENGINEERING_PROJECT_TYPE,
      IT_LAW_PROJECT_TYPE,
      'Автоматизация бизнеса',
      'Другое',
    ],
    projectTypeHelp:
      'Для аудита / техразбора достаточно ссылки на текущий сайт или проект и короткого комментария, что хотите проверить.',
    projectLabel: 'О проекте',
    projectPlaceholder:
      'Коротко: что уже есть, что нужно сделать на первом этапе и какой результат сейчас приоритетен.',
    consentLabel:
      'Я даю согласие на обработку персональных данных для ответа на обращение и предварительного обсуждения задачи.',
    consentLinkLabel: 'Согласие на обработку персональных данных',
    consentHref: '/consent-personal-data/',
    privacyLinkLabel: 'Политика обработки персональных данных',
    privacyHref: profile.seo.privacyPath,
    submitLabel: 'Отправить обращение',
    submittingLabel: 'Отправляю…',
    successMessage:
      'Обращение отправлено. Я получил его и свяжусь с вами по указанному контакту.',
    validationMessage: 'Проверьте обязательные поля и согласие на обработку персональных данных.',
    requestErrorMessage:
      'Не удалось отправить обращение. Проверьте заполненные поля и попробуйте снова.',
    rateLimitMessage:
      'Слишком много попыток отправки. Подождите немного и попробуйте снова.',
    oversizedMessage:
      'Сообщение получилось слишком большим. Сократите описание и попробуйте снова.',
    serverErrorMessage:
      'Не удалось отправить обращение. Попробуйте ещё раз позже или свяжитесь со мной напрямую.',
    networkErrorMessage:
      'Не удалось отправить обращение. Попробуйте ещё раз позже или свяжитесь со мной напрямую.',
    validationErrors: {
      name: 'Укажите имя, чтобы я понимал, как к вам обращаться.',
      contact: 'Добавьте контакт для ответа: Telegram или email.',
      project: 'Коротко опишите задачу, чтобы я понял следующий шаг.',
      projectType: 'Выберите тип проекта.',
      consent: 'Подтвердите согласие на обработку персональных данных.',
      nameTooLong: 'Имя лучше оставить коротким — до 80 символов.',
      contactTooLong: 'Контакт лучше указать короче — до 120 символов.',
      projectTooLong: 'Описание стоит сократить до 2000 символов, чтобы не потерять суть.',
    },
    security: {
      honeypotFieldName: 'company_website',
      maxLength: {
        name: 80,
        contact: 120,
        project: 2000,
      },
    },
    legalNote:
      `Отправляя форму, пользователь подтверждает согласие на обработку персональных данных для ответа на обращение и предварительного обсуждения задачи. Также можно связаться напрямую через ${profile.contacts.telegram.value}, ${profile.contacts.max.label}, ${profile.contacts.email.value} или по номеру ${profile.contacts.phone.value}.`,
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

export const contactExternalProfiles = [
  {
    label: profile.contacts.vk.label,
    value: profile.contacts.vk.value,
    href: profile.contacts.vk.href,
    icon: VkIcon,
    status: 'approved-link',
  },
  {
    label: profile.contacts.workspace.label,
    value: profile.contacts.workspace.value,
    href: profile.contacts.workspace.href,
    icon: WorkspaceIcon,
    status: 'approved-link',
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
