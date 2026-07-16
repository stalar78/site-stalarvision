import { profile } from './profile';
import { websiteImprovementPage } from './websiteImprovement';
import type { JsonLdObject } from '@/lib/structuredData';

const siteUrl = profile.seo.siteUrl;

const organizationId = `${siteUrl}/#organization`;
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const homepageId = `${siteUrl}/#homepage`;
const websiteImprovementWebpageId = `${websiteImprovementPage.seo.canonical}#webpage`;
const websiteImprovementServiceId = `${websiteImprovementPage.seo.canonical}#service`;

const homeUrl = `${siteUrl}${profile.seo.defaultPath}`;
const logoUrl = `${siteUrl}/icon-512.png`;

const organizationEntity: JsonLdObject = {
  '@type': 'Organization',
  '@id': organizationId,
  name: profile.brand.fullName,
  legalName: profile.owner.legalName,
  url: siteUrl,
  logo: logoUrl,
  description: profile.positioning.short,
  email: profile.contacts.email.value,
  telephone: profile.contacts.phone.value,
  taxID: profile.owner.taxId,
  sameAs: [
    profile.contacts.github.href,
    profile.contacts.telegram.href,
    profile.contacts.max.href,
  ],
  founder: {
    '@id': personId,
  },
};

const personEntity: JsonLdObject = {
  '@type': 'Person',
  '@id': personId,
  name: profile.owner.name,
  url: siteUrl,
  jobTitle: 'Независимый разработчик',
  worksFor: {
    '@id': organizationId,
  },
  sameAs: [
    profile.contacts.github.href,
    profile.contacts.telegram.href,
  ],
};

const websiteEntity: JsonLdObject = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: siteUrl,
  name: profile.brand.fullName,
  inLanguage: 'ru-RU',
  publisher: {
    '@id': organizationId,
  },
};

export const homeStructuredData: JsonLdObject = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationEntity,
    personEntity,
    websiteEntity,
    {
      '@type': 'WebPage',
      '@id': homepageId,
      url: homeUrl,
      name: profile.seo.title,
      description: profile.seo.description,
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': organizationId,
      },
      inLanguage: 'ru-RU',
    },
  ],
};

export const websiteImprovementStructuredData: JsonLdObject = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationEntity,
    personEntity,
    websiteEntity,
    {
      '@type': 'WebPage',
      '@id': websiteImprovementWebpageId,
      url: websiteImprovementPage.seo.canonical,
      name: websiteImprovementPage.seo.title,
      description: websiteImprovementPage.seo.description,
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': websiteImprovementServiceId,
      },
      mainEntity: {
        '@id': websiteImprovementServiceId,
      },
      inLanguage: 'ru-RU',
    },
    {
      '@type': 'Service',
      '@id': websiteImprovementServiceId,
      name: 'Доработка и развитие существующих сайтов',
      serviceType: 'Доработка и развитие существующих сайтов и веб-проектов',
      description: websiteImprovementPage.seo.description,
      url: websiteImprovementPage.seo.canonical,
      provider: {
        '@id': organizationId,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Россия',
      },
    },
  ],
};
