import { motion } from 'framer-motion';
import { MessageSquare, Search, PenTool, Code, ShieldCheck, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Обсуждение задачи',
    description: 'Вникаю в ваш бизнес, определяем цели проекта, целевую аудиторию и KPI.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    icon: Search,
    title: 'Анализ и решение',
    description: 'Провожу аудит, предлагаю оптимальный стек технологий и архитектуру системы.',
    color: 'bg-indigo-500/10 text-indigo-500'
  },
  {
    icon: PenTool,
    title: 'Дизайн и прототип',
    description: 'Создаю структуру и визуальный прототип, чтобы согласовать UX до написания кода.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    icon: Code,
    title: 'Разработка',
    description: 'Написание чистого, масштабируемого кода с регулярными отчетами о прогрессе.',
    color: 'bg-pink-500/10 text-pink-500'
  },
  {
    icon: ShieldCheck,
    title: 'QA и Тестирование',
    description: 'Проверка на ошибки, оптимизация скорости и тестирование на всех устройствах.',
    color: 'bg-emerald-500/10 text-emerald-500'
  },
  {
    icon: Rocket,
    title: 'Запуск и поддержка',
    description: 'Перенос на боевой сервер, обучение команды и сопровождение после запуска.',
    color: 'bg-amber-500/10 text-amber-500'
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Как мы <span className="text-indigo-500">придем к результату</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Прозрачный процесс разработки — залог успешного проекта. Вы всегда знаете, на каком этапе мы находимся.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-indigo-500/20 transition-all group"
            >
              <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                0{index + 1}
              </div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${step.color} group-hover:scale-110 transition-transform`}>
                <step.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
