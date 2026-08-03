import { useEffect } from 'react';
import {
  AlertTriangle,
  ArrowDown,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Database,
  ExternalLink,
  FileSearch,
  Files,
  FolderKanban,
  Github,
  MessageCircle,
  ShieldCheck,
  Waypoints,
} from 'lucide-react';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { eisProcurementAnalyzerCase } from '@/data/eisProcurementAnalyzerCase';
import { profile } from '@/data/profile';
import { eisProcurementAnalyzerCaseStructuredData } from '@/data/structuredData';
import { scrollToCurrentHashWithRetry } from '@/lib/hashScroll';
import { applyDocumentMeta } from '@/lib/meta';
import { applyDocumentStructuredData } from '@/lib/structuredData';

const numbered = (index: number) => String(index + 1).padStart(2, '0');

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer',
} as const;

export default function EisProcurementAnalyzerCase() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: eisProcurementAnalyzerCase.seo.title,
      description: eisProcurementAnalyzerCase.seo.description,
      ogTitle: eisProcurementAnalyzerCase.seo.ogTitle,
      ogDescription: eisProcurementAnalyzerCase.seo.ogDescription,
      ogType: eisProcurementAnalyzerCase.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: eisProcurementAnalyzerCase.seo.canonical,
      ogImage: profile.seo.ogImageUrl,
      canonical: eisProcurementAnalyzerCase.seo.canonical,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: eisProcurementAnalyzerCase.seo.ogTitle,
      twitterDescription: eisProcurementAnalyzerCase.seo.ogDescription,
      twitterImage: profile.seo.ogImageUrl,
      themeColor: profile.seo.themeColor,
      robots: eisProcurementAnalyzerCase.seo.robots,
    });

    return applyDocumentStructuredData(eisProcurementAnalyzerCaseStructuredData);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    scrollToCurrentHashWithRetry({ behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-18 pt-32 sm:pb-24 sm:pt-36">
          <div aria-hidden="true" className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[130px]" />
          <div aria-hidden="true" className="absolute right-[-10rem] top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200 sm:mb-6">
                <ShieldCheck size={14} />
                <span>{eisProcurementAnalyzerCase.hero.label}</span>
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {eisProcurementAnalyzerCase.hero.title}
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-indigo-200 sm:text-2xl">
                {eisProcurementAnalyzerCase.hero.lead}
              </p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {eisProcurementAnalyzerCase.hero.description}
              </p>

              <div className="mt-6 space-y-3">
                {eisProcurementAnalyzerCase.hero.notes.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-900/55 p-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={eisProcurementAnalyzerCase.hero.primaryCta.href}
                  className="inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {eisProcurementAnalyzerCase.hero.primaryCta.label}
                </a>
                <a
                  href={eisProcurementAnalyzerCase.hero.secondaryCta.href}
                  {...externalLinkProps}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {eisProcurementAnalyzerCase.hero.secondaryCta.label}
                  <Github size={18} />
                </a>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-7 lg:rounded-[2.5rem]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                  <FolderKanban size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Контур проекта
                  </div>
                  <h2 className="text-lg font-bold text-white">От сбора карточек до слоев решения</h2>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="rounded-2xl border border-white/6 bg-slate-950/55 p-4">
                  <div className="mb-2 text-xs font-bold text-indigo-300">01</div>
                  <h2 className="text-sm font-semibold text-white">Сбор, документы, evidence</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Система работает с выдачей закупок, карточками процедур, вложениями и документами разных форматов.
                  </p>
                </li>
                <li className="rounded-2xl border border-white/6 bg-slate-950/55 p-4">
                  <div className="mb-2 text-xs font-bold text-indigo-300">02</div>
                  <h2 className="text-sm font-semibold text-white">Отдельные decision layers</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Technical verdict, market result status и overall recommendation разделены и не смешиваются в одно поле.
                  </p>
                </li>
                <li className="rounded-2xl border border-white/6 bg-slate-950/55 p-4">
                  <div className="mb-2 text-xs font-bold text-indigo-300">03</div>
                  <h2 className="text-sm font-semibold text-white">Ручная финальная проверка</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Итог нужен для аналитика, а не вместо аналитика: evidence, ограничения и quality issues остаются видимыми.
                  </p>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.problem.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.problem.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {eisProcurementAnalyzerCase.problem.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {eisProcurementAnalyzerCase.problem.items.map((item, index) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 transition-colors hover:border-indigo-500/25 sm:p-6">
                  <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-indigo-300">
                    {numbered(index)}
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.capabilities.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div aria-hidden="true" className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.capabilities.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {eisProcurementAnalyzerCase.capabilities.description}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {eisProcurementAnalyzerCase.capabilities.items.map((item) => (
                <article key={item} className="rounded-3xl border border-white/6 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                    <Boxes size={22} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.pipeline.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">
              {eisProcurementAnalyzerCase.pipeline.title}
            </h2>
            <ol className="space-y-4">
              {eisProcurementAnalyzerCase.pipeline.stages.map((item, index) => (
                <li key={item} className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:grid-cols-[5rem_1fr_auto] sm:p-6">
                  <div className="text-3xl font-extrabold tracking-tight text-indigo-400">{numbered(index)}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item}</h3>
                  </div>
                  <Waypoints size={20} className="hidden self-center text-slate-500 sm:block" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.documentIntelligence.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.documentIntelligence.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {eisProcurementAnalyzerCase.documentIntelligence.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {eisProcurementAnalyzerCase.documentIntelligence.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                    <FileSearch size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.decisionModel.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.decisionModel.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {eisProcurementAnalyzerCase.decisionModel.description}
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {eisProcurementAnalyzerCase.decisionModel.cards.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[2rem] border p-6 sm:p-7 ${
                    index === 0
                      ? 'border-emerald-400/25 bg-emerald-500/8'
                      : index === 1
                        ? 'border-cyan-400/25 bg-cyan-500/8'
                        : 'border-indigo-400/25 bg-indigo-500/8'
                  }`}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/60 text-white">
                    <BrainCircuit size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.outputs.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div aria-hidden="true" className="absolute right-[-10rem] top-16 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.outputs.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {eisProcurementAnalyzerCase.outputs.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {eisProcurementAnalyzerCase.outputs.items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/6 bg-slate-900/45 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                    <Database size={20} />
                  </div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.syntheticExample.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.syntheticExample.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {eisProcurementAnalyzerCase.syntheticExample.description}
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-3">
              {eisProcurementAnalyzerCase.syntheticExample.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...externalLinkProps}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-indigo-400/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {link.label}
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.95fr]">
              <article className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/45">
                <div className="border-b border-slate-800 px-5 py-4 sm:px-6">
                  <h3 className="text-lg font-bold text-white">sample_analysis.json</h3>
                </div>
                <div className="overflow-x-auto px-5 py-5 sm:px-6">
                  <table className="min-w-full text-left text-sm text-slate-300">
                    <tbody>
                      {eisProcurementAnalyzerCase.syntheticExample.analysisPreview.map(([key, value]) => (
                        <tr key={key} className="border-b border-slate-800/70 last:border-b-0">
                          <th className="py-3 pr-4 font-medium text-indigo-200">{key}</th>
                          <td className="py-3 text-slate-300">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <div className="grid gap-5">
                <article className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/45">
                  <div className="border-b border-slate-800 px-5 py-4 sm:px-6">
                    <h3 className="text-lg font-bold text-white">sample_document_classification.csv</h3>
                  </div>
                  <div className="overflow-x-auto px-5 py-5 sm:px-6">
                    <table className="min-w-full text-left text-sm text-slate-300">
                      <thead>
                        <tr className="border-b border-slate-800/70 text-xs uppercase tracking-[0.18em] text-slate-500">
                          <th className="pb-3 pr-4 font-medium">Файл</th>
                          <th className="pb-3 pr-4 font-medium">Тип</th>
                          <th className="pb-3 font-medium">Роль</th>
                        </tr>
                      </thead>
                      <tbody>
                        {eisProcurementAnalyzerCase.syntheticExample.classificationPreview.map(([file, type, role]) => (
                          <tr key={file} className="border-b border-slate-800/70 last:border-b-0">
                            <td className="py-3 pr-4">{file}</td>
                            <td className="py-3 pr-4 text-indigo-200">{type}</td>
                            <td className="py-3">{role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </article>

                <article className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/45">
                  <div className="border-b border-slate-800 px-5 py-4 sm:px-6">
                    <h3 className="text-lg font-bold text-white">sample_summary.md</h3>
                  </div>
                  <div className="space-y-3 px-5 py-5 sm:px-6">
                    {eisProcurementAnalyzerCase.syntheticExample.summaryPreview.map((line, index) => (
                      <p
                        key={`${index}-${line}`}
                        className={index === 0 ? 'text-base font-semibold text-white' : 'text-sm leading-relaxed text-slate-300'}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.aggregateFindings.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.aggregateFindings.title}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {eisProcurementAnalyzerCase.aggregateFindings.items.map((item) => (
                <article key={item.label} className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/8 p-6">
                  <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{item.value}</div>
                  <p className="mt-3 text-sm leading-relaxed text-indigo-100/85 sm:text-base">{item.label}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/45 p-5 text-sm leading-relaxed text-slate-300 sm:p-6 sm:text-base">
              {eisProcurementAnalyzerCase.aggregateFindings.disclaimer}
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.limitations.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-amber-500/20 bg-amber-500/10 p-6 sm:p-8 lg:p-10">
              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.limitations.title}
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {eisProcurementAnalyzerCase.limitations.items.map((item) => (
                  <article key={item} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-200">
                      <AlertTriangle size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-amber-50/90">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.technology.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.technology.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {eisProcurementAnalyzerCase.technology.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {eisProcurementAnalyzerCase.technology.items.map((item) => (
                <article key={item} className="rounded-2xl border border-white/6 bg-slate-900/45 p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                    <Files size={20} />
                  </div>
                  <p className="font-medium text-white">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.developmentPerspective.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div aria-hidden="true" className="absolute left-[-8rem] top-16 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-4xl sm:mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                <FolderKanban size={14} />
                {eisProcurementAnalyzerCase.developmentPerspective.eyebrow}
              </div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.developmentPerspective.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {eisProcurementAnalyzerCase.developmentPerspective.description}
              </p>
              <p className="mt-4 max-w-3xl rounded-3xl border border-white/8 bg-slate-900/50 p-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {eisProcurementAnalyzerCase.developmentPerspective.introduction}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {eisProcurementAnalyzerCase.developmentPerspective.groups.map((group) => (
                <article key={group.title} className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200">
                    <FileSearch size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  <div className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-indigo-400/20 bg-indigo-500/8 p-6 sm:p-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950/55 text-indigo-200">
                <Waypoints size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {eisProcurementAnalyzerCase.developmentPerspective.sourceAdaptation.title}
              </h3>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-indigo-100/90 sm:text-base">
                {eisProcurementAnalyzerCase.developmentPerspective.sourceAdaptation.description}
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {eisProcurementAnalyzerCase.developmentPerspective.sourceAdaptation.notes.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-relaxed text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-200" />
                <p className="text-sm leading-relaxed text-amber-50/90 sm:text-base">
                  {eisProcurementAnalyzerCase.developmentPerspective.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id={eisProcurementAnalyzerCase.repository.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-200">
                <Github size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {eisProcurementAnalyzerCase.repository.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {eisProcurementAnalyzerCase.repository.description}
              </p>
              <a
                href={eisProcurementAnalyzerCase.repository.href}
                {...externalLinkProps}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-indigo-400/25 bg-indigo-500/10 px-5 py-3 text-sm font-semibold text-indigo-100 transition-colors hover:border-indigo-300/45 hover:bg-indigo-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
              >
                {eisProcurementAnalyzerCase.repository.label}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-indigo-500/25 bg-gradient-to-br from-indigo-600/18 to-slate-900 p-6 shadow-2xl shadow-indigo-950/20 sm:p-8 lg:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
              <MessageCircle size={24} />
            </div>
            <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              {eisProcurementAnalyzerCase.finalCta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
              {eisProcurementAnalyzerCase.finalCta.description}
            </p>
            <a
              href={eisProcurementAnalyzerCase.finalCta.buttonHref}
              className="mt-7 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {eisProcurementAnalyzerCase.finalCta.buttonLabel}
              <ArrowDown size={18} className="ml-2" />
            </a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
