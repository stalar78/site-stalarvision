import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  FileSpreadsheet,
  Github,
  ImageOff,
  Monitor,
  Radar,
  Terminal,
} from 'lucide-react';
import { softwareCasesSection } from '@/data/softwareCases';

const iconByItem = {
  quoteflow: Database,
  'knowledge-extractor': BrainCircuit,
  'operator-detector': FileSpreadsheet,
  'web-audit-lab': Radar,
} as const;

export function SoftwareCases() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

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
                className="h-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/45"
              >
                {item.image && !failedImages[item.title] ? (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 sm:aspect-video">
                    <img
                      src={item.image}
                      alt={`${item.title}: интерфейс проекта`}
                      loading="lazy"
                      decoding="async"
                      onError={() =>
                        setFailedImages((current) => ({
                          ...current,
                          [item.title]: true,
                        }))
                      }
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : item.image ? (
                  <div className="relative flex aspect-[16/10] items-center justify-center border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 px-5 text-center sm:aspect-video">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-sm">
                      <ImageOff size={18} className="mx-auto mb-2 text-cyan-300/80" />
                      <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-300">
                        Скриншот временно недоступен
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="p-5 sm:p-6">
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

                  {item.demoUrl || item.repositoryUrl || item.github ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.demoUrl ? (
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Открыть демо ${item.title}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-500/10 px-3.5 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-200 hover:bg-cyan-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                        >
                          <ExternalLink size={16} />
                          Открыть демо
                        </a>
                      ) : null}
                      {item.repositoryUrl || item.github ? (
                        <a
                          href={item.repositoryUrl ?? item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Открыть GitHub ${item.title}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-3.5 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-300/50 hover:bg-cyan-500/10 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                        >
                          <Github size={16} />
                          {item.repositoryUrl ? 'GitHub' : 'Открыть GitHub'}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
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
