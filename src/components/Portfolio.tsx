import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Globe, Layout } from 'lucide-react';

const projects = [
  {
    title: 'CRM для агентства недвижимости',
    description: 'Система автоматизации продаж с интеграцией телефонии, мессенджеров и автоматическим расчетом комиссий.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    link: '#',
    github: '#',
    category: 'Веб-приложение'
  },
  {
    title: 'EdTech Платформа обучения',
    description: 'Личный кабинет студента, система тестирования, видеоплеер с защитой контента и аналитика прогресса.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    github: '#',
    category: 'SaaS'
  },
  {
    title: 'Landing Page для FinTech',
    description: 'Высококонверсионный одностраничный сайт с калькулятором доходности и сложными SVG-анимациями.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
    github: '#',
    category: 'Лендинг'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Отобранные <span className="text-indigo-500">кейсы</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Проекты, в которых я не просто писал код, а создавал работающий инструмент для решения конкретных задач бизнеса.
            </p>
          </motion.div>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors"
          >
            <Github size={20} />
            Смотреть все на GitHub
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden hover:border-indigo-500/30 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-indigo-600/90 text-white text-xs font-bold backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <a href={project.link} className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2 text-sm font-semibold">
                    <Globe size={16} />
                    Демо
                  </a>
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold">
                    <Github size={16} />
                    Код
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
