export const CONTACT_SOURCES = {
  stalarvision: 'stalarvision',
  stalarlegal: 'stalarlegal',
};

export const STALARLEGAL_MATTER_TYPES = [
  'IT-договор',
  'Претензионная работа',
  'IT-спор',
  'Представительство',
  'Контрольные и надзорные органы',
  'Legal Engineering',
  'Другое',
];

const MAX_LENGTHS = {
  name: 80,
  contact: 120,
  stalarvisionCategory: 120,
  stalarvisionMessage: 2000,
  stalarlegalMessage: 3000,
};

const STALARLEGAL_MATTER_TYPE_SET = new Set(STALARLEGAL_MATTER_TYPES);

const isString = (value) => typeof value === 'string';
const charLength = (value) => [...value].length;

const normalizeText = (value) => (isString(value) ? value.trim() : '');

const isWithinLength = (value, min, max) => {
  const length = charLength(value);
  return length >= min && length <= max;
};

const validateCommonFields = (payload) => {
  const name = normalizeText(payload.name);
  const contact = normalizeText(payload.contact);

  if (
    !isWithinLength(name, 1, MAX_LENGTHS.name) ||
    !isWithinLength(contact, 1, MAX_LENGTHS.contact) ||
    payload.consent !== true
  ) {
    return null;
  }

  return { name, contact };
};

const validateStalarVisionFields = (payload) => {
  const category = normalizeText(payload.projectType);
  const message = normalizeText(payload.project);

  if (
    !isWithinLength(category, 1, MAX_LENGTHS.stalarvisionCategory) ||
    !isWithinLength(message, 1, MAX_LENGTHS.stalarvisionMessage)
  ) {
    return null;
  }

  return { category, message };
};

const validateStalarLegalFields = (payload) => {
  const category = normalizeText(payload.matterType);
  const message = normalizeText(payload.message);

  if (
    !STALARLEGAL_MATTER_TYPE_SET.has(category) ||
    !isWithinLength(message, 1, MAX_LENGTHS.stalarlegalMessage)
  ) {
    return null;
  }

  return { category, message };
};

export function validateContactPayload(payload, expectedConsentVersions) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { ok: false, error: 'invalid_request' };
  }

  const source = normalizeText(payload.source);

  if (!Object.hasOwn(CONTACT_SOURCES, source)) {
    return { ok: false, error: 'invalid_request' };
  }

  const honeypot = normalizeText(payload.honeypot);

  if (honeypot) {
    return { ok: true, spam: true, source };
  }

  const commonFields = validateCommonFields(payload);
  const sourceFields =
    source === CONTACT_SOURCES.stalarvision
      ? validateStalarVisionFields(payload)
      : validateStalarLegalFields(payload);

  if (!commonFields || !sourceFields) {
    return { ok: false, error: 'invalid_request' };
  }

  if (payload.consentVersion !== expectedConsentVersions[source]) {
    return { ok: false, error: 'invalid_consent' };
  }

  return {
    ok: true,
    data: {
      source,
      name: commonFields.name,
      contact: commonFields.contact,
      category: sourceFields.category,
      message: sourceFields.message,
      consentVersion: payload.consentVersion,
    },
  };
}
