import { motion } from 'framer-motion';
import {
  AlertCircle,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  FileSpreadsheet,
  Monitor,
  Radar,
  Terminal,
} from 'lucide-react';
import { softwareCasesSection } from '@/data/softwareCases';

const iconByItem = {
  'knowledge-extractor': BrainCircuit,
  'operator-detector': FileSpreadsheet,
  'web-audit-lab': Radar,
} as const;

export function SoftwareCases() {
  return (
    <section id="software-cases" className="relative bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200">
            <Monitor size={14} />
            {softwareCasesSection.eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {softwareCasesSection.title.lead}{' '}
            <span className="text-indigo-500">{softwareCasesSection.title.accent}</span>
          </h2>
          <p className="mt-4 max-w-3xl text-[1.01rem] leading-relaxed text-slate-400 sm:text-[1.06rem]">
            {softwareCasesSection.description}
          </p>
          <div className="mt-5 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/45 px-4 py-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
            {softwareCasesSection.note}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
          {softwareCasesSection.items.map((item, index) => {
            const MainIcon = iconByItem[item.icon as keyof typeof iconByItem] ?? Cpu;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-cyan-500/10 px-3 py-2 text-cyan-200">
                    <MainIcon size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em]">Software case</span>
                  </div>
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-200">
                    {item.status}
                  </div>
                </div>

                <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {item.shortDescription}
                </p>

                <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    <Cpu size={14} />
                    Контекст задачи
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {item.problem}
                  </p>
                </div>

                <div className="mt-5">
                  <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    <Terminal size={14} />
                    Что реализовано
                  </div>
                  <div className="space-y-2">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-indigo-300" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-300">
                    <Database size={14} />
                    Фокус разработки
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">{item.focus}</p>
                </div>

                {item.limitations ? (
                  <div className="mt-4 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-200">
                      <AlertCircle size={14} />
                      Ограничение
                    </div>
                    <p className="text-sm leading-relaxed text-amber-100">
                      {item.limitations}
                    </p>
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-7 rounded-3xl border border-white/8 bg-slate-900/45 p-5 sm:mt-8 sm:p-6"
        >
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {softwareCasesSection.cta.note}
          </p>
          <a
            href={softwareCasesSection.cta.href}
            className="mt-4 inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:text-base"
          >
            {softwareCasesSection.cta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
