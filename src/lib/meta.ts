type MetaConfig = {
  lang?: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogLocale?: string;
  ogSiteName?: string;
  ogUrl?: string;
  ogImage?: string;
  canonical?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
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

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let link = document.head.querySelector<HTMLLinkElement>(selector);

  if (!link) {
    link = document.createElement('link');
    document.head.appendChild(link);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    link?.setAttribute(key, value);
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
  ogUrl,
  ogImage,
  canonical,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
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

  if (ogUrl) {
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: ogUrl,
    });
  }

  if (ogImage) {
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: ogImage,
    });
  }

  if (canonical) {
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonical,
    });
  }

  if (twitterCard) {
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: twitterCard,
    });
  }

  if (twitterTitle ?? title) {
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: twitterTitle ?? title,
    });
  }

  if (twitterDescription ?? description) {
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: twitterDescription ?? description,
    });
  }

  if (twitterImage ?? ogImage) {
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: twitterImage ?? ogImage ?? '',
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
