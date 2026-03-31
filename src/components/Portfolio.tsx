import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Globe, ImageOff } from 'lucide-react';
import { casesSection } from '@/data/cases';

export function Portfolio() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="portfolio" className="relative bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {casesSection.title.lead}{' '}
              <span className="text-indigo-500">{casesSection.title.accent}</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {casesSection.description}
            </p>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              {casesSection.note}
            </p>
          </motion.div>
          
          {casesSection.githubCta.href ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={casesSection.githubCta.href}
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-800 sm:w-auto"
            >
              <Github size={20} />
              {casesSection.githubCta.label}
            </motion.a>
          ) : (
            <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 font-medium text-slate-400 sm:w-auto">
              <Github size={20} />
              {casesSection.githubCta.label}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {casesSection.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden hover:border-indigo-500/30 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 sm:aspect-video">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.28),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_42%)]" />
                {project.image && !failedImages[project.title] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    onError={() =>
                      setFailedImages((current) => ({
                        ...current,
                        [project.title]: true,
                      }))
                    }
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-sm">
                      <ImageOff size={18} className="mx-auto mb-2 text-indigo-300/80" />
                      <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-300">
                        {casesSection.imageFallbackLabel}
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-indigo-600/90 text-white text-xs font-bold backdrop-blur-md">
                  {project.category}
                </div>
                <div className="absolute right-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md sm:right-4 sm:top-4">
                  {casesSection.representativeLabel}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-lg font-bold leading-snug text-white transition-colors group-hover:text-indigo-400 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-col gap-3 border-t border-slate-800 pt-4 sm:flex-row sm:items-center sm:gap-4">
                  {project.link ? (
                    <a href={project.link} className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2 text-sm font-semibold">
                      <Globe size={16} />
                      Демо
                    </a>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-2 text-sm font-semibold">
                      <Globe size={16} />
                      Публичная ссылка не добавлена
                    </span>
                  )}
                  {project.github ? (
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold">
                      <Github size={16} />
                      Код
                    </a>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-2 text-sm font-semibold">
                      <Github size={16} />
                      Исходники не опубликованы
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
