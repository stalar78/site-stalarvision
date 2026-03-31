import { motion } from 'framer-motion';
import { techStackSection } from '@/data/site';

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {techStackSection.title.lead}{' '}
              <span className="text-indigo-500 font-extrabold">
                {techStackSection.title.accent}
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              {techStackSection.description}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techStackSection.categories.map((cat, i) => (
                <div key={i} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium text-center">
                  {cat}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {techStackSection.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-white font-bold">{tech.name}</span>
                    <span className="text-slate-500 text-xs ml-3 uppercase tracking-widest">{tech.category}</span>
                  </div>
                  <span className="text-indigo-400 font-mono text-sm">{tech.levelLabel}</span>
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
