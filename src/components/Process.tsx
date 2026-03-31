import { motion } from 'framer-motion';
import { processSection } from '@/data/site';

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl"
          >
            {processSection.title.lead}{' '}
            <span className="text-indigo-500">{processSection.title.accent}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {processSection.description}
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {processSection.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl border border-white/5 bg-slate-900/40 p-6 transition-all hover:border-indigo-500/20 sm:p-8"
            >
              <div className="absolute right-6 top-6 text-5xl font-bold text-white/5 transition-colors group-hover:text-white/10 sm:right-8 sm:top-8 sm:text-6xl">
                0{index + 1}
              </div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${step.color} group-hover:scale-110 transition-transform`}>
                <step.icon size={28} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">{step.title}</h3>
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
