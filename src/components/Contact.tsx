import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { contactExternalProfiles, contactMethods, contactSection } from '@/data/contacts';
import { profile } from '@/data/profile';

type ContactProps = {
  defaultProjectType?: string;
};

export function Contact(_props: ContactProps) {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
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
                  className="group flex items-start gap-3 no-underline hover:no-underline sm:gap-4"
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

            <div className="mb-8 sm:mb-9">
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                Профили
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                {contactExternalProfiles.map((profileLink) => (
                  <a
                    key={profileLink.label}
                    href={profileLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:w-auto"
                    aria-label={`Открыть профиль ${profileLink.label} в новой вкладке`}
                  >
                    <span>{profileLink.value}</span>
                    <profileLink.icon size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
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
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-200">
                  Связь напрямую
                </div>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Форма обращения временно недоступна
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  Сейчас обращения принимаются напрямую. Выберите удобный способ связи — отвечу лично.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={profile.contacts.telegram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-400/30 bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  <Send size={18} />
                  Написать в Telegram
                </a>
                <a
                  href={profile.contacts.email.href}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  <Mail size={18} />
                  Написать на email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
