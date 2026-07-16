export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[];

export type JsonLdObject = {
  [key: string]: JsonLdValue;
};

const DEFAULT_SCRIPT_ID = 'stalar-structured-data';
const MANAGED_BY_ATTRIBUTE = 'data-managed-by';
const MANAGED_BY_VALUE = 'stalar-vision-structured-data';
const RENDER_TOKEN_ATTRIBUTE = 'data-render-token';

export const applyDocumentStructuredData = (
  data: JsonLdObject,
  scriptId = DEFAULT_SCRIPT_ID,
) => {
  if (typeof document === 'undefined') {
    return () => undefined;
  }

  let script = document.getElementById(scriptId) as HTMLScriptElement | null;
  const renderToken = `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.setAttribute(MANAGED_BY_ATTRIBUTE, MANAGED_BY_VALUE);
  script.setAttribute(RENDER_TOKEN_ATTRIBUTE, renderToken);
  script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');

  return () => {
    const currentScript = document.getElementById(scriptId);

    if (
      currentScript === script &&
      currentScript.getAttribute(MANAGED_BY_ATTRIBUTE) === MANAGED_BY_VALUE &&
      currentScript.getAttribute(RENDER_TOKEN_ATTRIBUTE) === renderToken
    ) {
      currentScript.remove();
    }
  };
};
