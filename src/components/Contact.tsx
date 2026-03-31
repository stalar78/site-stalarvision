import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { contactMethods, contactSection } from '@/data/contacts';

export function Contact() {
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

            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <p className="text-sm text-slate-400 leading-relaxed">
                {contactSection.form.note}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    {contactSection.form.nameLabel}
                  </label>
                  <input 
                    type="text" 
                    placeholder={contactSection.form.namePlaceholder}
                    className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-white transition-colors focus:border-indigo-500 focus:outline-none sm:px-5 sm:py-4"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    {contactSection.form.contactLabel}
                  </label>
                  <input 
                    type="text" 
                    placeholder={contactSection.form.contactPlaceholder}
                    className="w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-white transition-colors focus:border-indigo-500 focus:outline-none sm:px-5 sm:py-4"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  {contactSection.form.projectTypeLabel}
                </label>
                <select className="w-full appearance-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-white transition-colors focus:border-indigo-500 focus:outline-none sm:px-5 sm:py-4">
                  {contactSection.form.projectTypeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  {contactSection.form.projectLabel}
                </label>
                <textarea 
                  rows={4}
                  placeholder={contactSection.form.projectPlaceholder}
                  className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-white transition-colors focus:border-indigo-500 focus:outline-none sm:px-5 sm:py-4"
                ></textarea>
              </div>
              <button 
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-4 font-bold text-white transition-all hover:translate-y-[-2px] hover:bg-indigo-700 active:translate-y-0 sm:py-5"
              >
                {contactSection.form.submitLabel}
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
