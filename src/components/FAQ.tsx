import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { faqSection } from '@/data/faq';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-950 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">
            {faqSection.eyebrow}
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {faqSection.title}
          </h3>
        </div>

        <div className="space-y-4">
          {faqSection.items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-slate-900 sm:p-6"
              >
                <span className="pr-2 text-base font-bold leading-snug text-white sm:pr-8 sm:text-lg">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-500 group">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-slate-800/50 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-400 sm:px-6 sm:pb-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
