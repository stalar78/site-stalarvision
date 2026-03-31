import { motion } from 'framer-motion';
import { Layout, Smartphone, Cpu, Globe, Database, Terminal } from 'lucide-react';

const services = [
  {
    title: 'Лендинги и корп. сайты',
    description: 'Высококонверсионные посадочные страницы с уникальным дизайном, оптимизированные под маркетинг.',
    icon: Layout,
    forWhom: 'Для малого и среднего бизнеса',
    result: 'Рост заявок и имидж бренда',
    color: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    title: 'Веб-приложения',
    description: 'Сложные системы: CRM, дашборды, личные кабинеты и SaaS-платформы любой сложности.',
    icon: Smartphone,
    forWhom: 'Для стартапов и компаний',
    result: 'Автоматизация внутренних процессов',
    color: 'from-purple-500/10 to-pink-500/10'
  },
  {
    title: 'Frontend-разработка',
    description: 'Создание современных интерфейсов на React/Next.js с фокусом на UX/UI и производительность.',
    icon: Globe,
    forWhom: 'Для IT-команд и агентств',
    result: 'Быстрый и плавный интерфейс',
    color: 'from-emerald-500/10 to-teal-500/10'
  },
  {
    title: 'Backend и API',
    description: 'Проектирование архитектуры баз данных, разработка серверной логики и интеграции со сторонними сервисами.',
    icon: Database,
    forWhom: 'Для интеграции сложных систем',
    result: 'Надежная и безопасная работа данных',
    color: 'from-amber-500/10 to-orange-500/10'
  },
  {
    title: 'Автоматизация бизнес-процессов',
    description: 'Скрипты, боты, парсеры и интеграция различных сервисов для экономии вашего времени.',
    icon: Cpu,
    forWhom: 'Для оптимизации работы',
    result: 'Снижение рутинных задач на 80%',
    color: 'from-indigo-500/10 to-cyan-500/10'
  },
  {
    title: 'Поддержка и развитие',
    description: 'Аудит, доработка существующего кода, оптимизация скорости и регулярное обслуживание.',
    icon: Terminal,
    forWhom: 'Для существующих проектов',
    result: 'Стабильность и современный стек',
    color: 'from-slate-500/10 to-slate-400/10'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Услуги, которые <span className="text-indigo-500">решают задачи</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Я не просто пишу код. Я создаю цифровые инструменты, которые помогают вашему бизнесу работать эффективнее и зарабатывать больше.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden bg-gradient-to-br ${service.color}`}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 uppercase tracking-wider font-semibold">Для кого:</span>
                    <span className="text-slate-300">{service.forWhom}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500 uppercase tracking-wider font-semibold">Результат:</span>
                    <span className="text-indigo-400 font-medium">{service.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
