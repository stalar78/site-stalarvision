import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const seoConfigPath = path.join(projectRoot, 'src/data/servicePageSeo.json');
const templatePath = path.join(__dirname, 'service-page.template.html');

const organizationId = 'https://stalarvision.ru/#organization';
const personId = 'https://stalarvision.ru/#person';
const websiteId = 'https://stalarvision.ru/#website';

const sharedGraphEntities = [
  {
    '@type': 'Organization',
    '@id': organizationId,
    name: 'Stalar Vision',
    legalName: 'ИП Ларин Станислав Николаевич',
    url: 'https://stalarvision.ru',
    logo: 'https://stalarvision.ru/icon-512.png',
    description:
      'Независимый разработчик для бизнеса: запуск сайтов и веб-приложений, доработка существующих проектов, технический разбор текущего состояния, аудит работающего сайта и, при необходимости, базовый аудит безопасности.',
    email: 'info@stalarvision.ru',
    telephone: '+7 993 977-99-77',
    taxID: '561701537372',
    sameAs: [
      'https://github.com/stalar78',
      'https://t.me/stanislav_lsn',
      'https://max.ru/u/f9LHodD0cOJItuTP3SMGVRtHcw0yRKpDg9eECrwfI-RnFlZ6MpXXSN0OrYI',
    ],
    founder: {
      '@id': personId,
    },
  },
  {
    '@type': 'Person',
    '@id': personId,
    name: 'Ларин Станислав',
    url: 'https://stalarvision.ru',
    jobTitle: 'Независимый разработчик',
    worksFor: {
      '@id': organizationId,
    },
    sameAs: [
      'https://github.com/stalar78',
      'https://t.me/stanislav_lsn',
    ],
  },
  {
    '@type': 'WebSite',
    '@id': websiteId,
    url: 'https://stalarvision.ru',
    name: 'Stalar Vision',
    inLanguage: 'ru-RU',
    publisher: {
      '@id': organizationId,
    },
  },
];

const requiredFields = [
  'outputDirectory',
  'path',
  'canonical',
  'title',
  'description',
  'robots',
  'ogType',
  'ogTitle',
  'ogDescription',
  'serviceName',
  'serviceType',
];

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const indentLines = (value, spaces) => {
  const prefix = ' '.repeat(spaces);
  return value
    .split('\n')
    .map((line) => `${prefix}${line}`)
    .join('\n');
};

const readJson = async (filePath) => JSON.parse(await readFile(filePath, 'utf8'));

const assertServicePage = (key, page) => {
  requiredFields.forEach((field) => {
    if (!page[field]) {
      throw new Error(`Missing "${field}" in servicePageSeo.${key}`);
    }
  });

  if (!page.path.startsWith('/') || !page.path.endsWith('/')) {
    throw new Error(`servicePageSeo.${key}.path must start and end with "/"`);
  }

  if (!page.canonical.endsWith(page.path)) {
    throw new Error(`servicePageSeo.${key}.canonical must end with its path`);
  }
};

const buildJsonLd = (page) => ({
  '@context': 'https://schema.org',
  '@graph': [
    ...sharedGraphEntities,
    {
      '@type': 'WebPage',
      '@id': `${page.canonical}#webpage`,
      url: page.canonical,
      name: page.title,
      description: page.description,
      isPartOf: {
        '@id': websiteId,
      },
      about: {
        '@id': `${page.canonical}#service`,
      },
      mainEntity: {
        '@id': `${page.canonical}#service`,
      },
      inLanguage: 'ru-RU',
    },
    {
      '@type': 'Service',
      '@id': `${page.canonical}#service`,
      name: page.serviceName,
      serviceType: page.serviceType,
      description: page.description,
      url: page.canonical,
      provider: {
        '@id': organizationId,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Россия',
      },
    },
  ],
});

const renderTemplate = (template, page) => {
  const jsonLd = indentLines(JSON.stringify(buildJsonLd(page), null, 2).replace(/</g, '\\u003c'), 4);
  const replacements = {
    title: escapeHtml(page.title),
    canonical: escapeHtml(page.canonical),
    description: escapeHtml(page.description),
    robots: escapeHtml(page.robots),
    ogTitle: escapeHtml(page.ogTitle),
    ogDescription: escapeHtml(page.ogDescription),
    ogType: escapeHtml(page.ogType),
    jsonLd,
  };

  return Object.entries(replacements).reduce(
    (result, [placeholder, value]) => result.replaceAll(`{{${placeholder}}}`, value),
    template,
  );
};

const writeIfChanged = async (filePath, content) => {
  try {
    const currentContent = await readFile(filePath, 'utf8');
    if (currentContent === content) {
      return false;
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, 'utf8');
  return true;
};

const main = async () => {
  const [servicePages, template] = await Promise.all([
    readJson(seoConfigPath),
    readFile(templatePath, 'utf8'),
  ]);

  for (const [key, page] of Object.entries(servicePages)) {
    assertServicePage(key, page);

    const outputPath = path.join(projectRoot, page.outputDirectory, 'index.html');
    const html = renderTemplate(template, page);
    const didWrite = await writeIfChanged(outputPath, html);
    console.log(`${didWrite ? 'generated' : 'unchanged'} ${path.relative(projectRoot, outputPath)}`);
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
