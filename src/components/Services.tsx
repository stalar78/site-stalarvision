import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicesSection } from '@/data/services';

export function Services() {
  const visibleServices = servicesSection.items.filter((service) => !('enabled' in service) || service.enabled !== false);

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
          {visibleServices.map((service, index) => (
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
                  {service.detailsHref ? (
                    <a
                      href={service.detailsHref}
                      className="inline-flex w-fit items-center gap-2 rounded-xl border border-indigo-400/25 bg-indigo-500/10 px-3.5 py-2 text-xs font-semibold text-indigo-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300/45 hover:bg-indigo-500/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                    >
                      {service.detailsLabel}
                      <ArrowRight size={14} />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_18%_10%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_88%_0%,rgba(99,102,241,0.16),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))] p-5 shadow-2xl shadow-slate-950/30 sm:mt-10 sm:p-7 lg:p-8"
        >
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
          <div className="pointer-events-none absolute right-6 top-6 hidden h-28 w-28 rounded-full border border-indigo-300/10 bg-[linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:18px_18px] lg:block" />

          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-200 sm:text-xs">
              <servicesSection.legalEngineering.icon size={14} />
              <span>{servicesSection.legalEngineering.eyebrow}</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)] lg:items-start">
              <div>
                <h3 className="max-w-4xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {servicesSection.legalEngineering.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  {servicesSection.legalEngineering.description}
                </p>
                <p className="mt-4 max-w-3xl rounded-2xl border border-white/6 bg-slate-950/35 p-4 text-sm leading-relaxed text-slate-400">
                  {servicesSection.legalEngineering.note}
                </p>
              </div>

              <div className="rounded-3xl border border-white/6 bg-slate-950/35 p-4">
                <div className="grid gap-3">
                  {servicesSection.legalEngineering.items.map((item, index) => (
                    <div
                      key={item.title}
                      className={`rounded-2xl border p-4 ${
                        index === 1
                          ? 'border-cyan-300/22 bg-cyan-300/8'
                          : 'border-white/6 bg-slate-900/45'
                      }`}
                    >
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4 className="text-sm font-bold text-white sm:text-base">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={servicesSection.legalEngineering.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-400/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 sm:text-base"
              >
                {servicesSection.legalEngineering.primaryCta.label}
                <ArrowRight size={18} />
              </a>
              <a
                href={servicesSection.legalEngineering.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/40 px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:text-base"
              >
                {servicesSection.legalEngineering.secondaryCta.label}
              </a>
            </div>
          </div>
        </motion.div>

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
