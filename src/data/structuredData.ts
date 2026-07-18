import { profile } from './profile';
import servicePageSeo from './servicePageSeo.json';
import { webApplicationDevelopmentPage } from './webApplicationDevelopment';
import { websiteAuditPage } from './websiteAudit';
import { websiteImprovementPage } from './websiteImprovement';
import { websiteLaunchPage } from './websiteLaunch';
import type { JsonLdObject } from '@/lib/structuredData';

const siteUrl = profile.seo.siteUrl;

const organizationId = `${siteUrl}/#organization`;
const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;
const homepageId = `${siteUrl}/#homepage`;
const websiteImprovementWebpageId = `${websiteImprovementPage.seo.canonical}#webpage`;
const websiteImprovementServiceId = `${websiteImprovementPage.seo.canonical}#service`;
const websiteAuditWebpageId = `${websiteAuditPage.seo.canonical}#webpage`;
const websiteAuditServiceId = `${websiteAuditPage.seo.canonical}#service`;
const websiteLaunchWebpageId = `${websiteLaunchPage.seo.canonical}#webpage`;
const websiteLaunchServiceId = `${websiteLaunchPage.seo.canonical}#service`;
const webApplicationDevelopmentWebpageId = `${webApplicationDevelopmentPage.seo.canonical}#webpage`;
const webApplicationDevelopmentServiceId = `${webApplicationDevelopmentPage.seo.canonical}#service`;

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
      name: servicePageSeo.websiteImprovement.serviceName,
      serviceType: servicePageSeo.websiteImprovement.serviceType,
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

export const websiteAuditStructuredData: JsonLdObject = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationEntity,
    personEntity,
    websiteEntity,
    {
      '@type': 'WebPage',
      '@id': websiteAuditWebpageId,
      url: websiteAuditPage.seo.canonical,
      name: websiteAuditPage.seo.title,
      description: websiteAuditPage.seo.description,
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': websiteAuditServiceId,
      },
      mainEntity: {
        '@id': websiteAuditServiceId,
      },
      inLanguage: 'ru-RU',
    },
    {
      '@type': 'Service',
      '@id': websiteAuditServiceId,
      name: servicePageSeo.websiteAudit.serviceName,
      serviceType: servicePageSeo.websiteAudit.serviceType,
      description: websiteAuditPage.seo.description,
      url: websiteAuditPage.seo.canonical,
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

export const websiteLaunchStructuredData: JsonLdObject = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationEntity,
    personEntity,
    websiteEntity,
    {
      '@type': 'WebPage',
      '@id': websiteLaunchWebpageId,
      url: websiteLaunchPage.seo.canonical,
      name: websiteLaunchPage.seo.title,
      description: websiteLaunchPage.seo.description,
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': websiteLaunchServiceId,
      },
      mainEntity: {
        '@id': websiteLaunchServiceId,
      },
      inLanguage: 'ru-RU',
    },
    {
      '@type': 'Service',
      '@id': websiteLaunchServiceId,
      name: servicePageSeo.websiteLaunch.serviceName,
      serviceType: servicePageSeo.websiteLaunch.serviceType,
      description: websiteLaunchPage.seo.description,
      url: websiteLaunchPage.seo.canonical,
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

export const webApplicationDevelopmentStructuredData: JsonLdObject = {
  '@context': 'https://schema.org',
  '@graph': [
    organizationEntity,
    personEntity,
    websiteEntity,
    {
      '@type': 'WebPage',
      '@id': webApplicationDevelopmentWebpageId,
      url: webApplicationDevelopmentPage.seo.canonical,
      name: webApplicationDevelopmentPage.seo.title,
      description: webApplicationDevelopmentPage.seo.description,
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': webApplicationDevelopmentServiceId,
      },
      mainEntity: {
        '@id': webApplicationDevelopmentServiceId,
      },
      inLanguage: 'ru-RU',
    },
    {
      '@type': 'Service',
      '@id': webApplicationDevelopmentServiceId,
      name: servicePageSeo.webApplicationDevelopment.serviceName,
      serviceType: servicePageSeo.webApplicationDevelopment.serviceType,
      description: webApplicationDevelopmentPage.seo.description,
      url: webApplicationDevelopmentPage.seo.canonical,
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
