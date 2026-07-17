import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpenText,
  ExternalLink,
  Github,
  Globe,
  ImageOff,
  LayoutTemplate,
} from 'lucide-react';
import { casesSection, ownedProductSpotlight } from '@/data/cases';

export function Portfolio() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const externalLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  } as const;

  return (
    <section id="portfolio" className="relative bg-slate-950 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 md:mb-11 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl">
              {casesSection.title.lead}{' '}
              <span className="text-indigo-500">{casesSection.title.accent}</span>
            </h2>
            <p className="max-w-2xl text-[1.01rem] leading-relaxed text-slate-400 sm:text-[1.06rem]">
              {casesSection.description}
            </p>
            <div className="mt-4 max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
              {casesSection.note}
            </div>
          </motion.div>

          {casesSection.githubCta.href ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={casesSection.githubCta.href}
              {...externalLinkProps}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 font-medium text-white transition-colors hover:border-slate-700 hover:bg-slate-800 sm:w-auto"
            >
              <Github size={20} />
              {casesSection.githubCta.label}
            </motion.a>
          ) : (
            <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-6 py-3 font-medium text-slate-400 sm:w-auto">
              <Github size={20} />
              {casesSection.githubCta.label}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {casesSection.items.map((project, index) => {
            const isRealProject = project.status === 'real-project';
            const badgeLabel = isRealProject ? 'Реальный проект' : casesSection.representativeLabel;
            const badgeClassName = isRealProject
              ? 'border-emerald-300/20 bg-emerald-500/12 text-emerald-100'
              : 'border-white/10 bg-slate-950/80 text-slate-200';
            const scenarioLabel = isRealProject ? 'Задача проекта' : 'Формат задачи';
            const neededLabel = isRealProject ? 'Что реализовано' : 'Что важно на старте';
            const resultLabel = isRealProject ? 'Технический результат' : 'Возможный первый этап';
            const linkLabel = isRealProject ? 'Открыть сайт' : 'Демо';
            const missingGithubLabel = isRealProject
              ? 'Исходники проекта закрыты'
              : 'Исходники не опубликованы';
            const isBrandMarkMedia = project.mediaVariant === 'brand-mark';

            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 sm:aspect-video">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.28),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_42%)]" />
                {project.image && !failedImages[project.title] ? (
                  <div className={isBrandMarkMedia ? 'absolute inset-0 flex items-center justify-center p-8 sm:p-10' : 'absolute inset-0'}>
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
                      className={
                        isBrandMarkMedia
                          ? 'h-full w-full object-contain transition-transform duration-500 group-hover:scale-105'
                          : 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                      }
                    />
                  </div>
                ) : project.cover ? (
                  <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
                    <div className="max-w-[18rem] rounded-3xl border border-emerald-300/15 bg-slate-950/65 px-5 py-5 shadow-2xl shadow-emerald-950/20 backdrop-blur-sm">
                      <BookOpenText size={28} className="mx-auto mb-3 text-emerald-200" />
                      <div className="text-2xl font-bold tracking-tight text-white">
                        {project.cover.title}
                      </div>
                      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100/80">
                        {project.cover.subtitle}
                      </div>
                    </div>
                  </div>
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
                <div className="absolute top-4 left-4 rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                  {project.category}
                </div>
                <div className={`absolute right-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md sm:right-4 sm:top-4 ${badgeClassName}`}>
                  {badgeLabel}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
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
                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mb-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                    {scenarioLabel}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {project.scenario}
                  </p>
                </div>

                <div className="mb-6 space-y-4">
                  <div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">
                      {neededLabel}
                    </div>
                    <div className="space-y-2">
                      {project.whatUsuallyNeeded.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-indigo-300">
                      {resultLabel}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200">
                      {project.firstStep}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-slate-800 pt-4 sm:flex-row sm:items-center sm:gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      {...externalLinkProps}
                      className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-400"
                    >
                      <Globe size={16} />
                      {linkLabel}
                    </a>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-2 text-sm font-semibold">
                      <Globe size={16} />
                      Публичная ссылка не добавлена
                    </span>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      {...externalLinkProps}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
                    >
                      <Github size={16} />
                      Код
                    </a>
                  ) : (
                    <span className="text-slate-500 flex items-center gap-2 text-sm font-semibold">
                      <Github size={16} />
                      {missingGithubLabel}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-7 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-cyan-950/20 p-5 sm:mt-8 sm:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                <LayoutTemplate size={14} />
                {ownedProductSpotlight.eyebrow}
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                {ownedProductSpotlight.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {ownedProductSpotlight.description}
              </p>
            </div>
            <a
              href={ownedProductSpotlight.link.href}
              {...externalLinkProps}
              aria-label={ownedProductSpotlight.link.label}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-200/50 hover:bg-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              {ownedProductSpotlight.link.label}
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {ownedProductSpotlight.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-slate-700/70 bg-slate-950/50 px-3.5 py-2.5 text-sm text-slate-200"
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 align-middle" />
                {highlight}
              </div>
            ))}
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
            {casesSection.cta.note}
          </p>
          <a
            href={casesSection.cta.href}
            className="mt-4 inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:text-base"
          >
            {casesSection.cta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
