import { motion } from 'framer-motion';
import { servicesSection } from '@/data/services';

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl"
          >
            {servicesSection.title.lead}{' '}
            <span className="text-indigo-500">{servicesSection.title.accent}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {servicesSection.description}
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {servicesSection.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative min-h-full overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br p-6 transition-all duration-300 hover:border-indigo-500/30 sm:p-8 ${service.color}`}
            >
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-400 transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14">
                  <service.icon size={28} />
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-white sm:text-xl">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-400 sm:mb-6">
                  {service.description}
                </p>
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex flex-col items-start gap-1.5 text-xs sm:flex-row sm:gap-2">
                    <span className="shrink-0 font-semibold uppercase tracking-wider text-slate-500">Подходит, если:</span>
                    <span className="leading-relaxed text-slate-300">{service.forWhom}</span>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 text-xs sm:flex-row sm:gap-2">
                    <span className="shrink-0 font-semibold uppercase tracking-wider text-slate-500">На выходе:</span>
                    <span className="font-medium leading-relaxed text-indigo-400">{service.result}</span>
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
