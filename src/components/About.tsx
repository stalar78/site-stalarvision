import { motion } from 'framer-motion';
import { Target, Code2, Users2, ShieldCheck } from 'lucide-react';

const stats = [
  { label: 'Лет опыта', value: '5+' },
  { label: 'Проектов', value: '40+' },
  { label: 'Клиентов', value: '25+' },
  { label: 'Технологий', value: '15+' },
];

const values = [
  {
    icon: Code2,
    title: 'Чистая архитектура',
    description: 'Пишу масштабируемый и поддерживаемый код, который легко развивать в будущем.'
  },
  {
    icon: Target,
    title: 'Бизнес-ориентированность',
    description: 'Фокусируюсь на решении конкретных задач бизнеса, а не просто на написании строк кода.'
  },
  {
    icon: Users2,
    title: 'Прозрачность',
    description: 'Регулярные отчеты, понятные этапы и постоянная связь на протяжении всего проекта.'
  },
  {
    icon: ShieldCheck,
    title: 'Надежность',
    description: 'Гарантирую соблюдение сроков и высокое качество финального продукта.'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Создаю решения, которые <span className="text-indigo-500">работают на вас</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Привет! Я — опытный full-stack разработчик, специализирующийся на создании современных веб-интерфейсов и сложных систем автоматизации.
              </p>
              <p>
                Мой подход заключается в глубоком погружении в бизнес-процессы клиента. Я верю, что качественный софт — это не просто набор функций, а инструмент для достижения конкретных KPI: увеличения продаж, снижения затрат или ускорения работы команды.
              </p>
              <p>
                Я работаю с современным стеком (React, Next.js, Node.js), что позволяет создавать быстрые, безопасные и легко масштабируемые решения.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/5 hover:border-indigo-500/20 transition-all group">
                <div className="w-12 h-12 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
