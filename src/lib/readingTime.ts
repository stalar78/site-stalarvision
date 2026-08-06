import type { Article } from '@/data/articles';

const wordPattern = /[\p{L}\p{N}]+/gu;

const countWords = (value: string) => value.match(wordPattern)?.length ?? 0;

const pluralizeRussian = (value: number, one: string, few: string, many: string) => {
  const mod100 = value % 100;
  const mod10 = value % 10;

  if (mod100 >= 11 && mod100 <= 14) {
    return many;
  }

  if (mod10 === 1) {
    return one;
  }

  if (mod10 >= 2 && mod10 <= 4) {
    return few;
  }

  return many;
};

export const formatSectionCountLabel = (count: number) =>
  `${count} ${pluralizeRussian(count, 'раздел', 'раздела', 'разделов')}`;

export const formatReadingTimeLabel = (minutes: number) =>
  `${minutes} ${pluralizeRussian(minutes, 'минута', 'минуты', 'минут')} чтения`;

export const calculateReadingTimeMinutes = (article: Article, wordsPerMinute = 190) => {
  const textSegments = [
    article.staticIntro,
    ...article.sections.flatMap((section) => [
      ...(section.paragraphs ?? []).flatMap((paragraph) => paragraph.map((segment) => segment.text)),
      ...(section.items ?? []),
    ]),
    ...article.comparison.flatMap((row) => [row.criterion, row.wordpress, row.custom]),
    ...article.callouts.flatMap((callout) => [callout.title, ...callout.paragraphs]),
    ...article.decisionQuestions,
    article.conclusion.title,
    ...article.conclusion.paragraphs,
  ];

  const words = textSegments.reduce((total, segment) => total + countWords(segment), 0);
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};
