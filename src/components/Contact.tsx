import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { contactMethods, contactSection } from '@/data/contacts';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {contactSection.title.lead} <br />
              <span className="text-indigo-500">{contactSection.title.accent}</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-md">
              {contactSection.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={contactSection.actions.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-indigo-500/20"
              >
                {contactSection.actions.primary.label}
              </a>
              <a
                href={contactSection.actions.secondary.href}
                className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold transition-all"
              >
                {contactSection.actions.secondary.label}
              </a>
            </div>

            <div className="space-y-6 mb-12">
              {contactMethods.map((method) => (
                <div key={method.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <method.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                      {method.label}
                    </div>
                    {method.href ? (
                      <a href={method.href} className="text-lg text-white font-medium hover:text-indigo-400 transition-colors">
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-lg text-slate-300 font-medium">
                        {method.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-indigo-600 rounded-3xl text-white">
              <div className="text-2xl font-bold mb-2">{contactSection.consultation.title}</div>
              <p className="text-indigo-100 opacity-80">
                {contactSection.consultation.description}
              </p>
              <div className="mt-6 pt-6 border-t border-white/15">
                <div className="text-sm font-bold uppercase tracking-widest text-indigo-100/80 mb-4">
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

            <div className="mt-6 p-8 bg-slate-900/50 border border-slate-800 rounded-3xl">
              <div className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
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
            className="p-8 sm:p-10 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <p className="text-sm text-slate-400 leading-relaxed">
                {contactSection.form.note}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    {contactSection.form.nameLabel}
                  </label>
                  <input 
                    type="text" 
                    placeholder={contactSection.form.namePlaceholder}
                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">
                    {contactSection.form.contactLabel}
                  </label>
                  <input 
                    type="text" 
                    placeholder={contactSection.form.contactPlaceholder}
                    className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">
                  {contactSection.form.projectTypeLabel}
                </label>
                <select className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
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
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:translate-y-[-2px] active:translate-y-0"
              >
                {contactSection.form.submitLabel}
                <Send size={18} />
              </button>
              <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest font-bold">
                {contactSection.form.legalNote}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
