import {
  Layout,
  LayoutDashboard,
  Network,
  Plug,
  Search,
  Shield,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { profile } from '@/data/profile';

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  enabled?: boolean;
  request: string;
  firstStep: string;
  format: string;
  color: string;
  detailsHref?: string;
  detailsLabel?: string;
};

type FeaturedServiceDirection = {
  title: string;
  description: string;
};

type FeaturedServiceLink = {
  label: string;
  href: string;
};

type FeaturedService = {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  icon: LucideIcon;
  items: FeaturedServiceDirection[];
  primaryCta: FeaturedServiceLink;
  secondaryCta: FeaturedServiceLink;
};

export const servicesSection = {
  title: {
    lead: 'Что именно',
    accent: 'беру в работу',
  },
  description:
    'Ко мне приходят с запуском и доработкой цифровых продуктов, техническим аудитом, веб-интерфейсами, интеграциями и автоматизацией. Отдельное направление StalarVision Legal Engineering объединяет веб-разработку с юридико-техническим анализом цифровых продуктов.',
  items: [
    {
      title: 'Новый сайт или первый релиз',
      description:
        'Подходит, когда нужно запустить сайт, лендинг или первую рабочую версию продукта с понятной структурой и базой для дальнейшего развития.',
      icon: Layout,
      request:
        'Нужен новый сайт или первая версия продукта под конкретную задачу бизнеса.',
      firstStep:
        'Сверяем цель, основной пользовательский сценарий и состав первого релиза без лишних функций.',
      format:
        'Поэтапно: структура и объём, затем рабочая реализация.',
      color: 'from-blue-500/10 to-indigo-500/10',
      detailsHref: '/razrabotka-sajta/',
      detailsLabel: 'Подробнее о разработке сайта',
    },
    {
      title: 'Доработка действующего проекта',
      description:
        'Подключаюсь к действующему сайту или сервису, когда нужно улучшить конкретный участок, убрать узкие места и двигаться дальше без переписывания с нуля.',
      icon: Wrench,
      request:
        'Проект уже работает, но нужно аккуратно доработать функциональность или исправить проблемные зоны.',
      firstStep:
        'Определяем приоритетный участок и фиксируем конкретный объём ближайшей итерации.',
      format:
        'Итерационно: приоритет, объём, доработка, следующий шаг.',
      color: 'from-amber-500/10 to-orange-500/10',
      detailsHref: '/dorabotka-sajta/',
      detailsLabel: 'Подробнее о доработке сайтов',
    },
    {
      title: 'Аудит сайта и технический разбор',
      description:
        'Проверяю внешний контур сайта: мобильную и desktop-версию, битые ссылки, базовую SEO-разметку, canonical/Open Graph, формы, доступность, ошибки загрузки и performance red flags.',
      icon: Search,
      request:
        'Есть работающий сайт, но непонятно, что мешает нормальной работе, индексации, мобильному UX или дальнейшему развитию.',
      firstStep:
        'Провожу внешний аудит основных страниц, фиксирую проблемы, приоритеты и формирую понятный список исправлений.',
      format:
        'Отчёт для владельца и техническое ТЗ для разработчика: что исправить, почему это важно и в каком порядке.',
      color: 'from-slate-500/10 to-slate-400/10',
      detailsHref: '/audit-sajta/',
      detailsLabel: 'Подробнее об аудите сайта',
    },
    {
      title: 'Рабочие интерфейсы и личные кабинеты',
      description:
        'Собираю веб-приложения, клиентские кабинеты и внутренние интерфейсы, когда нужен понятный рабочий сценарий, а не просто набор экранов.',
      icon: LayoutDashboard,
      request:
        'Нужен личный кабинет или внутренний интерфейс, чтобы сотрудники и клиенты решали задачу быстрее и без лишней ручной работы.',
      firstStep:
        'Уточняем роли, ключевые действия и минимальный набор экранов для первого рабочего этапа.',
      format:
        'От сценариев и структуры к реализации интерфейса по этапам.',
      color: 'from-violet-500/10 to-fuchsia-500/10',
      detailsHref: '/razrabotka-veb-prilozhenij/',
      detailsLabel: 'Подробнее о веб-приложениях',
    },
    {
      title: 'Интеграции и небольшая автоматизация',
      description:
        'Подключаю формы, CRM, Telegram, email-сценарии и API, если нужно убрать ручные повторяющиеся операции и связать части процесса.',
      icon: Plug,
      request:
        'Нужно связать сайт или внутренний процесс с внешними сервисами и сократить ручную работу.',
      firstStep:
        'Выбираем один самый болезненный сценарий и автоматизируем его первым этапом.',
      format:
        'Старт с одного сценария, затем масштабирование по необходимости.',
      color: 'from-cyan-500/10 to-sky-500/10',
    },
    {
      title: 'Личный VPN под ключ',
      description:
        'Настраиваю личный VPN-сервер для стабильного и безопасного доступа к нужным сервисам без зависимости от публичных VPN-провайдеров.',
      icon: Shield,
      enabled: false,
      request:
        'Нужен безопасный доступ к сервисам, стабильное подключение и контроль своего VPN.',
      firstStep:
        'Подбираем VPS, настраиваем сервер, подключаем устройства и проверяем рабочий сценарий.',
      format:
        'Удалённо, с пошаговой настройкой и проверкой.',
      color: 'from-green-500/10 to-lime-500/10',
    },
  ] satisfies ServiceItem[],
  legalEngineering: {
    eyebrow: 'STALARVISION LEGAL ENGINEERING',
    title: 'Право и архитектура цифрового продукта — в одной системе',
    description:
      'Юридико-технический аудит и сопровождение сайтов и веб-приложений: от документов, форм и согласий до API, backend, инфраструктуры и фактического движения данных.',
    note:
      'Legal Engineering соединяет юридический анализ с практической веб-разработкой: требования сопоставляются с тем, что продукт действительно делает на уровне интерфейса, кода и инфраструктуры.',
    icon: Network,
    items: [
      {
        title: 'Юридико-технический аудит',
        description:
          'Проверить существующий продукт и сопоставить документы с реальными процессами обработки данных.',
      },
      {
        title: 'Аудит + исправление',
        description:
          'Перевести выявленные расхождения в конкретные технические изменения, если они входят в рабочий scope.',
      },
      {
        title: 'Legal by Design',
        description:
          'Учесть юридически значимые требования ещё при проектировании нового цифрового продукта.',
      },
    ],
    primaryCta: {
      label: 'Перейти в Legal Engineering',
      href: '/legal-engineering/',
    },
    secondaryCta: {
      label: 'Посмотреть реальный кейс',
      href: '/articles/pochemu-odnoj-galochki-nedostatochno/',
    },
  } satisfies FeaturedService,
  cta: {
    note: 'Если задача не совпадает с формулировками один в один, можно коротко описать её в сообщении. Обычно этого достаточно, чтобы определить первый этап.',
    label: profile.ctas.breakDownTask,
    href: '/#contact',
  },
};
