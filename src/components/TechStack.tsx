import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { techStackSection } from '@/data/site';
import type { TechStackCategory } from '@/data/site';

type TechStackFilter = 'Все' | TechStackCategory;

const techStackFilters: TechStackFilter[] = ['Все', ...techStackSection.categories];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechStackFilter>('Все');
  const visibleTechnologies =
    activeCategory === 'Все'
      ? techStackSection.technologies
      : techStackSection.technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section id="tech-stack" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-5 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-5xl">
              {techStackSection.title.lead}{' '}
              <span className="text-indigo-500 font-extrabold">
                {techStackSection.title.accent}
              </span>
            </h2>
            <p className="mb-7 max-w-xl text-[1.01rem] leading-relaxed text-slate-400 sm:mb-8 sm:text-[1.06rem]">
              {techStackSection.description}
            </p>
            
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {techStackFilters.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl border px-3 py-2 text-center text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:px-4 sm:text-sm ${
                    activeCategory === cat
                      ? 'border-indigo-400/45 bg-indigo-500/15 text-indigo-100'
                      : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:bg-slate-900/80 hover:text-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-5">
            {visibleTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <details className="group/tech rounded-2xl border border-slate-800 bg-slate-900/35 px-4 py-3 transition-colors hover:border-slate-700 hover:bg-slate-900/45">
                  <summary className="cursor-pointer list-none marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                          <div className="min-w-0">
                            <span className="block break-words text-base font-bold text-white sm:inline sm:text-lg">
                              {tech.name}
                            </span>
                            <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-slate-500 sm:ml-3 sm:mt-0 sm:inline sm:text-xs">
                              {tech.category}
                            </span>
                          </div>
                          <span className="shrink-0 text-sm font-mono text-indigo-400 sm:text-right">
                            {tech.levelLabel}
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full border border-slate-800 bg-slate-950">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: tech.levelWidth }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400"
                          />
                        </div>
                      </div>
                      <ChevronDown
                        size={18}
                        className="mt-1 shrink-0 text-slate-500 transition-transform duration-200 group-open/tech:rotate-180"
                        aria-hidden="true"
                      />
                    </div>
                  </summary>

                  <div className="mt-4 border-t border-slate-800 pt-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      Практическое применение
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {tech.practicalUse}
                    </p>

                    {tech.projects?.length ? (
                      <div className="mt-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                          Применение
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {tech.projects.map((project) => (
                            <span
                              key={project}
                              className="rounded-md border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-[11px] font-medium text-indigo-200"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
