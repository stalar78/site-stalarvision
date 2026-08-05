const websiteId = 'https://stalarvision.ru/#website';
const siteUrl = 'https://stalarvision.ru';
const rasterImagePattern = /\.(png|jpe?g|webp)(?:$|\?)/i;

const absoluteUrl = (value) => (value.startsWith('http') ? value : `${siteUrl}${value}`);
const getRasterSocialImage = (value) => (value && rasterImagePattern.test(value) ? absoluteUrl(value) : undefined);

export const buildArticlesIndexStructuredData = (indexPage, articles) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${indexPage.seo.canonical}#collection`,
  url: indexPage.seo.canonical,
  name: indexPage.seo.title,
  description: indexPage.seo.description,
  isPartOf: {
    '@id': websiteId,
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: article.seo.canonical,
      name: article.title,
    })),
  },
  inLanguage: 'ru-RU',
});

export const buildArticleStructuredData = (article) => {
  const articleEntity = {
    '@type': 'Article',
    '@id': `${article.seo.canonical}#article`,
    headline: article.title,
    description: article.seo.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stalar Vision',
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: article.seo.canonical,
    url: article.seo.canonical,
  };
  const socialImage = getRasterSocialImage(article.seo.socialImage);

  if (socialImage) {
    articleEntity.image = socialImage;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${article.seo.canonical}#webpage`,
      url: article.seo.canonical,
      name: article.seo.title,
      description: article.seo.description,
      isPartOf: {
        '@id': websiteId,
      },
      mainEntity: {
        '@id': `${article.seo.canonical}#article`,
      },
      inLanguage: 'ru-RU',
    },
    articleEntity,
    ],
  };
};
