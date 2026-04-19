import { motion } from 'framer-motion';
import { servicesSection } from '@/data/services';

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-white sm:mb-5 sm:text-4xl md:text-5xl"
          >
            {servicesSection.title.lead}{' '}
            <span className="text-indigo-500">{servicesSection.title.accent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-[1.01rem] leading-relaxed text-slate-400 sm:text-[1.06rem]"
          >
            {servicesSection.description}
          </motion.p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesSection.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative h-full overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 focus-within:border-indigo-400/35 sm:p-7 ${service.color}`}
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-400 transition-transform duration-300 group-hover:scale-105 sm:mb-6 sm:h-14 sm:w-14">
                  <service.icon size={24} />
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-white sm:text-[1.18rem]">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-300/90 sm:mb-6">
                  {service.description}
                </p>

                <div className="mb-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-indigo-300">
                    С чего обычно начинается
                  </div>
                  <p className="text-sm leading-relaxed text-slate-100/95">
                    {service.firstStep}
                  </p>
                </div>

                <div className="mt-auto space-y-3 border-t border-white/5 pt-4">
                  <div className="flex flex-col items-start gap-1.5 text-xs sm:gap-2">
                    <span className="shrink-0 font-semibold uppercase tracking-wider text-slate-500">
                      Типичный запрос
                    </span>
                    <span className="leading-relaxed text-slate-300">{service.request}</span>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 text-xs sm:gap-2">
                    <span className="shrink-0 font-semibold uppercase tracking-wider text-slate-500">
                      Формат работы
                    </span>
                    <span className="font-medium leading-relaxed text-indigo-400">{service.format}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-7 rounded-3xl border border-white/8 bg-slate-900/45 p-5 sm:mt-8 sm:p-6"
        >
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {servicesSection.cta.note}
          </p>
          <a
            href={servicesSection.cta.href}
            className="mt-4 inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:text-base"
          >
            {servicesSection.cta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
