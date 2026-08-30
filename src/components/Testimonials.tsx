import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { trustSection } from '@/data/site';

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-4">
            {trustSection.eyebrow}
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {trustSection.title}
          </h3>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {trustSection.description}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 sm:gap-8">
          {trustSection.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-indigo-500/50 sm:p-8"
            >
              <item.icon className="absolute top-6 right-8 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors" size={60} />
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <h4 className="mb-3 text-lg font-bold text-white sm:text-xl">{item.title}</h4>
              <p className="mb-8 text-sm leading-relaxed text-slate-300 sm:text-base">{item.description}</p>
              <div className="border-t border-slate-800 pt-4 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
                {item.note}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {trustSection.clientRecommendations.map((recommendation, index) => (
            <motion.article
              key={recommendation.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + 0.12 }}
              className="overflow-hidden rounded-3xl border border-cyan-300/18 bg-[radial-gradient(circle_at_14%_0%,rgba(34,211,238,0.1),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.82),rgba(2,6,23,0.92))] p-5 sm:p-6"
            >
              <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_7rem] lg:items-start">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-[11px]">
                    {recommendation.compactEyebrow}
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-500/10 text-indigo-200 sm:flex">
                      <Quote size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-cyan-100">{recommendation.company}</div>
                      <blockquote className="mt-3 text-base leading-relaxed text-slate-100 sm:text-lg">
                        {recommendation.quote}
                      </blockquote>
                      <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {recommendation.metadata}
                      </div>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                          href={recommendation.legalEngineeringHref}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-300/25 bg-indigo-500/12 px-4 py-2.5 text-sm font-semibold text-indigo-100 transition-colors hover:border-indigo-200/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                        >
                          {recommendation.pageLinkLabel}
                          <ArrowRight size={16} />
                        </a>
                        <a
                          href={recommendation.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={recommendation.openAriaLabel}
                          className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/35 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-cyan-300/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                        >
                          {recommendation.compactOpenLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={recommendation.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={recommendation.openAriaLabel}
                  className="hidden overflow-hidden rounded-2xl border border-white/10 bg-slate-950/45 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 lg:block"
                >
                  <img
                    src={recommendation.image}
                    alt={recommendation.imageAlt}
                    className="h-28 w-full rounded-xl object-cover object-top"
                    loading="lazy"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/40 p-5 text-center text-sm leading-relaxed text-slate-300 sm:p-6 sm:text-base">
          {trustSection.summary}
        </div>
      </div>
    </section>
  );
}
