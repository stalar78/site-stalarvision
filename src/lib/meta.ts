type MetaConfig = {
  lang?: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogLocale?: string;
  ogSiteName?: string;
  themeColor?: string;
  robots?: string;
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement('meta');
    document.head.appendChild(meta);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    meta?.setAttribute(key, value);
  });
};

export const applyDocumentMeta = ({
  lang,
  title,
  description,
  ogTitle,
  ogDescription,
  ogType,
  ogLocale,
  ogSiteName,
  themeColor,
  robots,
}: MetaConfig) => {
  if (lang) {
    document.documentElement.lang = lang;
  }

  document.title = title;

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: description,
  });

  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: ogTitle ?? title,
  });

  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: ogDescription ?? description,
  });

  if (ogType) {
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: ogType,
    });
  }

  if (ogLocale) {
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: ogLocale,
    });
  }

  if (ogSiteName) {
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: ogSiteName,
    });
  }

  if (themeColor) {
    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: themeColor,
    });
  }

  if (robots) {
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    });
  }
};
