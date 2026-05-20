import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { contactMethods, contactSection } from '@/data/contacts';

type FormValues = {
  name: string;
  contact: string;
  projectType: string;
  project: string;
  honeypot: string;
};

type FormErrors = Partial<Record<'name' | 'contact' | 'project', string>>;

const initialFormValues: FormValues = {
  name: '',
  contact: '',
  projectType: contactSection.form.projectTypeOptions[0] ?? '',
  project: '',
  honeypot: '',
};

export function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [lastSubmittedAt, setLastSubmittedAt] = useState<number | null>(null);
  const fieldIds = {
    name: 'contact-name',
    contact: 'contact-method',
    projectType: 'contact-project-type',
    project: 'contact-project-message',
  } as const;

  const formSecurity = contactSection.form.security;

  const handleChange =
    (field: keyof FormValues) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const rawValue = event.target.value;
        const nextValue =
          field === 'name' || field === 'contact' || field === 'project'
            ? rawValue.slice(0, formSecurity.maxLength[field])
            : rawValue;

        setFormValues((current) => ({
          ...current,
          [field]: nextValue,
        }));

        if (field === 'name' || field === 'contact' || field === 'project') {
          setFormErrors((current) => {
            if (!current[field]) {
              return current;
            }

            const nextErrors = { ...current };
            delete nextErrors[field];
            return nextErrors;
          });
        }

        if (submitState === 'success' || submitState === 'error') {
          setSubmitState('idle');
          setSubmitMessage('');
        }
      };

  const validateForm = () => {
    const nextErrors: FormErrors = {};
    const trimmedName = formValues.name.trim();
    const trimmedContact = formValues.contact.trim();
    const trimmedProject = formValues.project.trim();

    if (!trimmedName) {
      nextErrors.name = contactSection.form.validationErrors.name;
    } else if (trimmedName.length > formSecurity.maxLength.name) {
      nextErrors.name = contactSection.form.validationErrors.nameTooLong;
    }

    if (!trimmedContact) {
      nextErrors.contact = contactSection.form.validationErrors.contact;
    } else if (trimmedContact.length > formSecurity.maxLength.contact) {
      nextErrors.contact = contactSection.form.validationErrors.contactTooLong;
    }

    if (!trimmedProject) {
      nextErrors.project = contactSection.form.validationErrors.project;
    } else if (trimmedProject.length > formSecurity.maxLength.project) {
      nextErrors.project = contactSection.form.validationErrors.projectTooLong;
    }

    setFormErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitState === 'loading') {
      return;
    }

    if (formValues.honeypot.trim()) {
      setSubmitState('success');
      setSubmitMessage(contactSection.form.successMessage);
      setFormValues(initialFormValues);
      setFormErrors({});
      return;
    }

    const now = Date.now();
    if (lastSubmittedAt && now - lastSubmittedAt < formSecurity.cooldownMs) {
      setSubmitState('error');
      setSubmitMessage(contactSection.form.cooldownMessage);
      return;
    }

    if (!validateForm()) {
      setSubmitState('error');
      setSubmitMessage(contactSection.form.errorMessage);
      return;
    }

    setSubmitState('loading');
    setSubmitMessage('');

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), formSecurity.timeoutMs);

    try {
      const response = await fetch(contactSection.form.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: contactSection.form.accessKey,
          subject: contactSection.form.subject,
          from_name: formValues.name.trim(),
          name: formValues.name.trim(),
          contact: formValues.contact.trim(),
          project_type: formValues.projectType,
          project_description: formValues.project.trim(),
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'submit_failed');
      }

      setSubmitState('success');
      setSubmitMessage(contactSection.form.successMessage);
      setLastSubmittedAt(now);
      setFormValues(initialFormValues);
      setFormErrors({});
    } catch {
      setSubmitState('error');
      setSubmitMessage(contactSection.form.errorMessage);
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 max-w-[20ch] text-3xl font-bold leading-tight text-white sm:mb-6 sm:max-w-none sm:text-4xl">
              {contactSection.title.lead}
              <span className="block text-indigo-500">{contactSection.title.accent}</span>
            </h2>
            <p className="mb-7 max-w-xl text-[1.01rem] leading-relaxed text-slate-400 sm:mb-8 sm:text-[1.06rem]">
              {contactSection.description}
            </p>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={contactSection.actions.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 sm:w-auto"
              >
                {contactSection.actions.primary.label}
              </a>
              <a
                href={contactSection.actions.secondary.href}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:border-slate-700 hover:text-white sm:w-auto"
              >
                {contactSection.actions.secondary.label}
              </a>
            </div>

            <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-500 sm:mb-9">
              {contactSection.actions.note}
            </p>

            <div className="mb-8 space-y-5 sm:mb-9 sm:space-y-6">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-3 sm:gap-4 no-underline hover:no-underline"
                  aria-label={`Связаться через ${method.label}: ${method.value}`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-indigo-500 transition-all group-hover:bg-indigo-600 group-hover:text-white sm:h-12 sm:w-12">
                    <method.icon size={24} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      {method.label}
                    </div>
                    <span className="break-all text-base font-medium text-white transition-colors group-hover:text-indigo-400 sm:text-lg">
                      {method.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-3xl bg-indigo-600 p-5 text-white sm:p-6">
              <div className="mb-2 text-xl font-bold sm:text-2xl">{contactSection.consultation.title}</div>
              <p className="text-sm leading-relaxed text-indigo-100/90 sm:text-base">
                {contactSection.consultation.description}
              </p>
              <div className="mt-5 border-t border-white/15 pt-5 sm:mt-6 sm:pt-6">
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-indigo-100/80 sm:text-sm">
                  {contactSection.firstStep.title}
                </div>
                <div className="space-y-2.5">
                  {contactSection.firstStep.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-indigo-50">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white/80" />
                      <span className="text-sm leading-6">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-5 sm:mt-5 sm:p-6">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
                {contactSection.preparation.title}
              </div>
              <div className="space-y-2.5">
                {contactSection.preparation.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
                    <span className="text-sm leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-slate-800 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-xl sm:p-9"
          >
            <form className="relative space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor={formSecurity.honeypotFieldName}>Не заполняйте это поле</label>
                <input
                  id={formSecurity.honeypotFieldName}
                  name={formSecurity.honeypotFieldName}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formValues.honeypot}
                  onChange={handleChange('honeypot')}
                />
              </div>

              <p className="text-sm leading-relaxed text-slate-400">
                {contactSection.form.note}
              </p>
              {submitMessage ? (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${submitState === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-100'
                    : 'border-rose-500/30 bg-rose-500/10 text-rose-100'
                    }`}
                >
                  {submitMessage}
                </div>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor={fieldIds.name} className="ml-1 text-sm font-medium text-slate-400">
                    {contactSection.form.nameLabel}
                  </label>
                  <input
                    id={fieldIds.name}
                    type="text"
                    name="name"
                    maxLength={formSecurity.maxLength.name}
                    placeholder={contactSection.form.namePlaceholder}
                    value={formValues.name}
                    onChange={handleChange('name')}
                    aria-invalid={Boolean(formErrors.name)}
                    className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-white transition-colors focus:border-indigo-500 focus:outline-none sm:px-5 sm:py-4"
                  />
                  {formErrors.name ? (
                    <p className="ml-1 text-xs leading-relaxed text-rose-300">{formErrors.name}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <label htmlFor={fieldIds.contact} className="ml-1 text-sm font-medium text-slate-400">
                    {contactSection.form.contactLabel}
                  </label>
                  <input
                    id={fieldIds.contact}
                    type="text"
                    name="contact"
                    maxLength={formSecurity.maxLength.contact}
                    placeholder={contactSection.form.contactPlaceholder}
                    value={formValues.contact}
                    onChange={handleChange('contact')}
                    aria-invalid={Boolean(formErrors.contact)}
                    className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-white transition-colors focus:border-indigo-500 focus:outline-none sm:px-5 sm:py-4"
                  />
                  {formErrors.contact ? (
                    <p className="ml-1 text-xs leading-relaxed text-rose-300">{formErrors.contact}</p>
                  ) : null}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor={fieldIds.projectType} className="ml-1 text-sm font-medium text-slate-400">
                  {contactSection.form.projectTypeLabel}
                </label>
                <select
                  id={fieldIds.projectType}
                  name="projectType"
                  value={formValues.projectType}
                  onChange={handleChange('projectType')}
                  className="w-full appearance-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-white transition-colors focus:border-indigo-500 focus:outline-none sm:px-5 sm:py-4"
                >
                  {contactSection.form.projectTypeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <p className="ml-1 text-xs leading-relaxed text-slate-500">
                  {contactSection.form.projectTypeHelp}
                </p>
              </div>
              <div className="space-y-2">
                <label htmlFor={fieldIds.project} className="ml-1 text-sm font-medium text-slate-400">
                  {contactSection.form.projectLabel}
                </label>
                <textarea
                  id={fieldIds.project}
                  rows={4}
                  name="project"
                  maxLength={formSecurity.maxLength.project}
                  placeholder={contactSection.form.projectPlaceholder}
                  value={formValues.project}
                  onChange={handleChange('project')}
                  aria-invalid={Boolean(formErrors.project)}
                  className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-white transition-colors focus:border-indigo-500 focus:outline-none sm:px-5 sm:py-4"
                ></textarea>
                {formErrors.project ? (
                  <p className="ml-1 text-xs leading-relaxed text-rose-300">{formErrors.project}</p>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-4 font-bold text-white transition-all hover:translate-y-[-2px] hover:bg-indigo-700 active:translate-y-0 disabled:cursor-not-allowed disabled:bg-indigo-500/70 disabled:hover:translate-y-0 sm:py-5"
              >
                {submitState === 'loading'
                  ? contactSection.form.loadingLabel
                  : contactSection.form.submitLabel}
                <Send size={18} />
              </button>
              <p className="text-center text-xs leading-relaxed text-slate-500">
                {contactSection.form.legalNote}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
