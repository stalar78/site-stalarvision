import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Сколько стоит разработка сайта?',
    answer: 'Стоимость зависит от сложности функционала, дизайна и объема работ. Лендинги начинаются от 50к, корпоративные сайты от 120к, веб-приложения — индивидуально после оценки ТЗ.'
  },
  {
    question: 'Какие сроки реализации проекта?',
    answer: 'Простой лендинг занимает 7–14 дней. Корпоративный сайт — от 3 до 5 недель. Сложные системы и автоматизация могут занимать от 1.5 месяцев.'
  },
  {
    question: 'Работаете ли вы по техническому заданию?',
    answer: 'Да, я могу работать как по вашему готовому ТЗ, так и помочь составить его с нуля после первичного аудита ваших бизнес-задач.'
  },
  {
    question: 'Оказываете ли поддержку после запуска?',
    answer: 'Конечно. Я предоставляю гарантию на отсутствие багов и предлагаю варианты ежемесячной технической поддержки и развития проекта.'
  },
  {
    question: 'Можно ли доработать существующий проект?',
    answer: 'Да, если проект написан на современном стеке (React, Vue, Node.js). Я провожу аудит кода и предлагаю план оптимизации или внедрения новых функций.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">FAQ</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Ответы на частые вопросы</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900 transition-colors"
              >
                <span className="font-bold text-white pr-8">{faq.question}</span>
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
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
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
