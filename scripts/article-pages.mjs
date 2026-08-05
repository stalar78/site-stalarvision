import articleMetadata from '../src/data/articleMetadata.json' with { type: 'json' };
import {
  buildArticleStructuredData,
  buildArticlesIndexStructuredData,
} from './article-structured-data.mjs';

const trimSlashes = (value) => value.replace(/^\/+|\/+$/g, '');

export const articleStaticPages = [
  {
    outputDirectory: trimSlashes(articleMetadata.index.path),
    path: articleMetadata.index.path,
    canonical: articleMetadata.index.seo.canonical,
    title: articleMetadata.index.seo.title,
    description: articleMetadata.index.seo.description,
    robots: articleMetadata.index.seo.robots,
    ogType: articleMetadata.index.seo.ogType,
    socialImage: articleMetadata.index.seo.socialImage,
    socialImageAlt: articleMetadata.index.seo.socialImageAlt,
    h1: articleMetadata.index.title,
    intro: articleMetadata.index.staticIntro,
    image: articleMetadata.articles[0].coverImage,
    imageAlt: articleMetadata.articles[0].coverAlt,
    imageWidth: articleMetadata.articles[0].coverWidth,
    imageHeight: articleMetadata.articles[0].coverHeight,
    jsonLd: buildArticlesIndexStructuredData(articleMetadata.index, articleMetadata.articles),
  },
  ...articleMetadata.articles.map((article) => ({
    outputDirectory: trimSlashes(article.path),
    path: article.path,
    canonical: article.seo.canonical,
    title: article.seo.title,
    description: article.seo.description,
    robots: article.seo.robots,
    ogType: article.seo.ogType,
    socialImage: article.seo.socialImage,
    socialImageAlt: article.seo.socialImageAlt,
    h1: article.title,
    intro: article.staticIntro,
    image: article.coverImage,
    imageAlt: article.coverAlt,
    imageWidth: article.coverWidth,
    imageHeight: article.coverHeight,
    jsonLd: buildArticleStructuredData(article),
  })),
];
