import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { faqSection } from '@/data/faq';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-950 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-9 text-center sm:mb-11">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-indigo-500 sm:mb-4">
            {faqSection.eyebrow}
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {faqSection.title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-[1.01rem] leading-relaxed text-slate-400 sm:text-[1.06rem]">
            {faqSection.description}
          </p>
        </div>

        <div className="space-y-4">
          {faqSection.items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`overflow-hidden rounded-2xl border transition-colors ${openIndex === index
                ? 'border-indigo-500/30 bg-slate-900/70'
                : 'border-slate-800 bg-slate-900/50'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:p-6"
              >
                <span className="pr-2 text-base font-bold leading-snug text-white sm:pr-8 sm:text-lg">{faq.question}</span>
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-indigo-400 transition-colors ${openIndex === index ? 'bg-indigo-500/20' : 'bg-indigo-500/10'
                    }`}
                >
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24 }}
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="border-t border-slate-800/60 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-300 sm:px-6 sm:pb-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-7 rounded-3xl border border-white/8 bg-slate-900/45 p-5 sm:mt-8 sm:p-6"
        >
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {faqSection.cta.note}
          </p>
          <a
            href={faqSection.cta.href}
            className="mt-4 inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:text-base"
          >
            {faqSection.cta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
