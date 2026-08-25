import articleMetadata from './articleMetadata.json';
import content from './webServiceOrPersonalAccountArticleContent.json';
import type { Article, ArticleTextSegment } from './articles';

const metadata = articleMetadata.articles.find(
  (article) => article.slug === 'kogda-biznesu-nuzhen-veb-servis-ili-lichnyj-kabinet',
);

if (!metadata) {
  throw new Error('Missing article metadata: kogda-biznesu-nuzhen-veb-servis-ili-lichnyj-kabinet');
}

const linkedParagraph = (
  text: string,
  phrase: string,
  href: string,
): ArticleTextSegment[] => {
  const phraseIndex = text.indexOf(phrase);

  if (phraseIndex === -1) {
    return [{ text }];
  }

  return [
    { text: text.slice(0, phraseIndex) },
    { text: phrase, href },
    { text: text.slice(phraseIndex + phrase.length) },
  ].filter((segment) => segment.text);
};

const paragraphLinks: Record<string, { phrase: string; href: string }> = {
  'site-and-service-boundary:1': {
    phrase: 'Хороший информационный сайт',
    href: '/razrabotka-sajta/',
  },
  'sign-7-admin-workplace:3': {
    phrase: 'Cake & Shape',
    href: '/cases/cake-and-shape/',
  },
  'not-every-feature-needs-app:5': {
    phrase: 'небольшая доработка существующего сайта',
    href: '/dorabotka-sajta/',
  },
  'hybrid-model:4': {
    phrase: 'Cake & Shape',
    href: '/cases/cake-and-shape/',
  },
  'how-to-decide-next-step:0': {
    phrase: 'разработка веб-приложения',
    href: '/razrabotka-veb-prilozhenij/',
  },
  'how-to-decide-next-step:5': {
    phrase: 'На первом обсуждении',
    href: '/articles/podgotovka-k-razrabotke-sajta-ili-veb-prilozheniya/',
  },
};

const sections = content.sections.map((section) => ({
  ...section,
  paragraphs: section.paragraphs.map((paragraph, paragraphIndex) => {
    const link = paragraphLinks[`${section.id}:${paragraphIndex}`];
    return link ? linkedParagraph(paragraph, link.phrase, link.href) : [{ text: paragraph }];
  }),
}));

const comparisonCriteria = [
  'Содержание и данные',
  'Персонализация',
  'Основное действие пользователя',
  'Состояние объектов',
  'Бизнес-логика',
  'Место процесса',
];

export const webServiceOrPersonalAccountArticle: Article = {
  ...metadata,
  lead: content.lead,
  sections,
  callouts: content.callouts.map((callout) => ({
    ...callout,
    type: callout.type === 'note' ? 'note' : 'summary',
  })),
  comparison: {
    title: content.comparison.title,
    introduction: content.comparison.introduction,
    leftColumnTitle: content.comparison.leftColumnTitle,
    rightColumnTitle: content.comparison.rightColumnTitle,
    rows: comparisonCriteria.map((criterion, index) => ({
      criterion,
      left: content.comparison.leftItems[index],
      right: content.comparison.rightItems[index],
    })),
  },
  decisionQuestions: content.decisionQuestions,
  conclusion: content.conclusion,
  relatedServiceLinks: metadata.relatedServiceLinks,
  cta: {
    eyebrow: 'Разбор задачи',
    title: 'Не уверены, достаточно ли доработать сайт?',
    description:
      'Можно разобрать текущий процесс, пользователей, данные и ограничения, а затем определить, достаточно ли существующего сайта, нужна ли его доработка или задача уже требует отдельного рабочего интерфейса.',
    primaryLabel: 'Обсудить задачу',
    primaryHref: '/#contact',
    secondaryLabel: 'Посмотреть услуги',
    secondaryHref: '/#services',
  },
};
