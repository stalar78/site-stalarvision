const MAX_LENGTHS = {
  name: 80,
  contact: 120,
  projectType: 120,
  project: 2000,
};

const isString = (value) => typeof value === 'string';
const charLength = (value) => [...value].length;

const normalizeText = (value) => (isString(value) ? value.trim() : '');

const isWithinLength = (value, min, max) => {
  const length = charLength(value);
  return length >= min && length <= max;
};

export function validateContactPayload(payload, expectedConsentVersion) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { ok: false, error: 'invalid_request' };
  }

  const honeypot = isString(payload.honeypot) ? payload.honeypot.trim() : '';

  if (honeypot) {
    return { ok: true, spam: true };
  }

  const name = normalizeText(payload.name);
  const contact = normalizeText(payload.contact);
  const projectType = normalizeText(payload.projectType);
  const project = normalizeText(payload.project);

  if (
    !isWithinLength(name, 1, MAX_LENGTHS.name) ||
    !isWithinLength(contact, 1, MAX_LENGTHS.contact) ||
    !isWithinLength(projectType, 1, MAX_LENGTHS.projectType) ||
    !isWithinLength(project, 1, MAX_LENGTHS.project) ||
    payload.consent !== true
  ) {
    return { ok: false, error: 'invalid_request' };
  }

  if (payload.consentVersion !== expectedConsentVersion) {
    return { ok: false, error: 'invalid_consent' };
  }

  return {
    ok: true,
    data: {
      name,
      contact,
      projectType,
      project,
      consentVersion: payload.consentVersion,
    },
  };
}
