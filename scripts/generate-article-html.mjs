import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { articleStaticPages } from './article-pages.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const templatePath = path.join(__dirname, 'article-page.template.html');

const requiredFields = [
  'outputDirectory',
  'path',
  'canonical',
  'title',
  'description',
  'robots',
  'ogType',
  'h1',
  'intro',
  'jsonLd',
];

const siteUrl = 'https://stalarvision.ru';
const rasterImagePattern = /\.(png|jpe?g|webp)(?:$|\?)/i;

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

const absoluteUrl = (value) => (value?.startsWith('http') ? value : `${siteUrl}${value}`);
const isRasterImage = (value) => rasterImagePattern.test(value);

const assertPage = (page) => {
  requiredFields.forEach((field) => {
    if (!page[field]) {
      throw new Error(`Missing "${field}" in article static page config`);
    }
  });

  if (!page.path.startsWith('/') || !page.path.endsWith('/')) {
    throw new Error(`${page.outputDirectory}.path must start and end with "/"`);
  }

  if (!page.canonical.endsWith(page.path)) {
    throw new Error(`${page.outputDirectory}.canonical must end with its path`);
  }

  if (page.ogType === 'article' && (!page.image || !page.imageAlt || !page.imageWidth || !page.imageHeight)) {
    throw new Error(`${page.outputDirectory} article pages must include complete cover image metadata`);
  }

  if (page.socialImage && !isRasterImage(page.socialImage)) {
    throw new Error(`${page.outputDirectory}.socialImage must be a raster PNG, JPEG, or WebP image`);
  }

  if (page.socialImage && !page.socialImageAlt?.trim()) {
    throw new Error(`${page.outputDirectory}.socialImageAlt is required when socialImage is present`);
  }
};

const renderTemplate = (template, page) => {
  const jsonLd = indentLines(JSON.stringify(page.jsonLd, null, 2).replace(/</g, '\\u003c'), 4);
  const imageUrl = page.socialImage ? absoluteUrl(page.socialImage) : 'https://stalarvision.ru/brand/share-preview.png';
  const socialImageAlt = page.socialImageAlt ?? 'Stalar Vision — разработка сайтов и веб-приложений';
  const imageMarkup = page.image
    ? `<figure>\n          <img src="${escapeHtml(page.image)}" alt="${escapeHtml(page.imageAlt)}" width="${escapeHtml(page.imageWidth)}" height="${escapeHtml(page.imageHeight)}" />\n        </figure>`
    : '';
  const replacements = {
    title: escapeHtml(page.title),
    canonical: escapeHtml(page.canonical),
    description: escapeHtml(page.description),
    robots: escapeHtml(page.robots),
    ogType: escapeHtml(page.ogType),
    image: escapeHtml(imageUrl),
    imageAlt: escapeHtml(socialImageAlt),
    h1: escapeHtml(page.h1),
    intro: escapeHtml(page.intro),
    imageMarkup,
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
  const template = await readFile(templatePath, 'utf8');

  for (const page of articleStaticPages) {
    assertPage(page);

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
