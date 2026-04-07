import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { contactMethods, contactSection } from '@/data/contacts';

type FormValues = {
  name: string;
  contact: string;
  projectType: string;
  project: string;
};

type FormErrors = Partial<Record<'name' | 'contact' | 'project', string>>;

const initialFormValues: FormValues = {
  name: '',
  contact: '',
  projectType: contactSection.form.projectTypeOptions[0] ?? '',
  project: '',
};

export function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange =
    (field: keyof FormValues) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const nextValue = event.target.value;

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

    if (!formValues.name.trim()) {
      nextErrors.name = contactSection.form.validationErrors.name;
    }

    if (!formValues.contact.trim()) {
      nextErrors.contact = contactSection.form.validationErrors.contact;
    }

    if (!formValues.project.trim()) {
      nextErrors.project = contactSection.form.validationErrors.project;
    }

    setFormErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setSubmitState('error');
      setSubmitMessage(contactSection.form.errorMessage);
      return;
    }

    setSubmitState('loading');
    setSubmitMessage('');

    try {
      const response = await fetch(contactSection.form.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
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
      setFormValues(initialFormValues);
      setFormErrors({});
    } catch {
      setSubmitState('error');
      setSubmitMessage(contactSection.form.errorMessage);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl">
              {contactSection.title.lead} <br />
              <span className="text-indigo-500">{contactSection.title.accent}</span>
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-400 sm:mb-10 sm:text-lg">
              {contactSection.description}
            </p>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={contactSection.actions.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-700 sm:w-auto"
              >
                {contactSection.actions.primary.label}
              </a>
              <a
                href={contactSection.actions.secondary.href}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 px-6 py-3 font-bold text-white transition-all hover:border-slate-700 sm:w-auto"
              >
                {contactSection.actions.secondary.label}
              </a>
            </div>

            <p className="mb-10 max-w-xl text-sm leading-relaxed text-slate-500 sm:mb-12">
              {contactSection.actions.note}
            </p>

            <div className="mb-10 space-y-5 sm:mb-12 sm:space-y-6">
              {contactMethods.map((method) => (
                <div key={method.label} className="group flex items-start gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-indigo-500 transition-all group-hover:bg-indigo-600 group-hover:text-white sm:h-12 sm:w-12">
                    <method.icon size={24} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                      {method.label}
                    </div>
                    {method.href ? (
                      <a href={method.href} className="break-all text-base font-medium text-white transition-colors hover:text-indigo-400 sm:text-lg">
                        {method.value}
                      </a>
                    ) : (
                      <span className="break-all text-base font-medium text-slate-300 sm:text-lg">
                        {method.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-indigo-600 p-6 text-white sm:p-8">
              <div className="mb-2 text-xl font-bold sm:text-2xl">{contactSection.consultation.title}</div>
              <p className="text-sm text-indigo-100 opacity-80 sm:text-base">
                {contactSection.consultation.description}
              </p>
              <div className="mt-6 pt-6 border-t border-white/15">
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-indigo-100/80 sm:text-sm">
                  {contactSection.firstStep.title}
                </div>
                <div className="space-y-3">
                  {contactSection.firstStep.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-indigo-50">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white/80" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:mt-6 sm:p-8">
              <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
                {contactSection.preparation.title}
              </div>
              <div className="space-y-3">
                {contactSection.preparation.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-slate-800 bg-slate-900/50 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
          >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <p className="text-sm text-slate-400 leading-relaxed">
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
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    {contactSection.form.nameLabel}
                  </label>
                  <input
                    type="text"
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
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    {contactSection.form.contactLabel}
                  </label>
                  <input
                    type="text"
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
                <label className="text-sm font-medium text-slate-400 ml-1">
                  {contactSection.form.projectTypeLabel}
                </label>
                <select
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
                <label className="text-sm font-medium text-slate-400 ml-1">
                  {contactSection.form.projectLabel}
                </label>
                <textarea
                  rows={4}
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
