import { motion } from 'framer-motion';
import { aboutSection } from '@/data/site';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-4xl md:text-5xl">
              {aboutSection.title.lead}{' '}
              <span className="text-indigo-500">{aboutSection.title.accent}</span>
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:space-y-6 sm:text-lg">
              {aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-12 sm:gap-4 lg:gap-5">
              {aboutSection.stats.map((stat, i) => (
                <div key={i} className="flex min-h-[84px] flex-col justify-center rounded-xl border border-slate-800/80 bg-slate-900/35 px-4 py-3 text-center sm:min-h-[96px] sm:rounded-2xl sm:bg-slate-900/45 sm:px-5 sm:py-4 lg:min-h-[104px]">
                  <div className="mb-1.5 text-lg font-semibold leading-snug text-white sm:mb-2 sm:text-[1.35rem] lg:text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:text-[11px] sm:tracking-[0.2em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-4 sm:grid-cols-2 sm:gap-6"
          >
            {aboutSection.values.map((item, i) => (
              <div key={i} className="group rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-5 transition-all hover:border-indigo-500/20 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-400 transition-transform group-hover:scale-110 sm:h-12 sm:w-12">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-white sm:text-lg">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">
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
