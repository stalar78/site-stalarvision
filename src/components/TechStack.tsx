import { motion } from 'framer-motion';
import { techStackSection } from '@/data/site';

export function TechStack() {
  return (
    <section id="tech-stack" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-white sm:mb-8 sm:text-4xl md:text-5xl">
              {techStackSection.title.lead}{' '}
              <span className="text-indigo-500 font-extrabold">
                {techStackSection.title.accent}
              </span>
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-400 sm:mb-10 sm:text-lg">
              {techStackSection.description}
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {techStackSection.categories.map((cat, i) => (
                <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-center text-xs font-medium text-slate-400 sm:px-4 sm:text-sm">
                  {cat}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-5 sm:space-y-6">
            {techStackSection.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div className="min-w-0">
                    <span className="block break-words text-base font-bold text-white sm:inline sm:text-lg">{tech.name}</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:ml-3 sm:mt-0 sm:inline sm:text-xs">{tech.category}</span>
                  </div>
                  <span className="text-sm font-mono text-indigo-400 sm:text-right">{tech.levelLabel}</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tech.levelWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
