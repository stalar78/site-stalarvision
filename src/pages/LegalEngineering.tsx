import { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  FileText,
  GitBranch,
  Link as LinkIcon,
  MessageCircle,
  Network,
  Workflow,
} from 'lucide-react';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { LEGAL_ENGINEERING_PROJECT_TYPE } from '@/data/contacts';
import { getClientProofMetadata, legalEngineeringPage, type ClientProof } from '@/data/legalEngineering';
import { profile } from '@/data/profile';
import { legalEngineeringStructuredData } from '@/data/structuredData';
import { scrollToCurrentHashWithRetry } from '@/lib/hashScroll';
import { applyDocumentMeta } from '@/lib/meta';
import { applyDocumentStructuredData } from '@/lib/structuredData';

const numbered = (index: number) => String(index + 1).padStart(2, '0');

const renderProofMetadata = (proof: ClientProof) => {
  const cells = [
    proof.date
      ? {
          title: 'Дата',
          value: proof.date.display,
        }
      : null,
    proof.author || proof.role
      ? {
          title: proof.author ? 'Автор' : 'Роль',
          value: proof.author ?? proof.role ?? '',
          detail: proof.author ? proof.role : undefined,
        }
      : null,
  ].filter(Boolean) as Array<{ title: string; value: string; detail?: string }>;

  if (!cells.length) {
    return null;
  }

  return (
    <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
      {cells.map((cell) => (
        <div key={cell.title} className="rounded-2xl border border-white/6 bg-slate-950/55 p-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">{cell.title}</div>
          <div className="mt-1 font-semibold text-white">{cell.value}</div>
          {cell.detail ? <div className="mt-1 text-slate-400">{cell.detail}</div> : null}
        </div>
      ))}
    </div>
  );
};

export default function LegalEngineering() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: legalEngineeringPage.seo.title,
      description: legalEngineeringPage.seo.description,
      ogTitle: legalEngineeringPage.seo.ogTitle,
      ogDescription: legalEngineeringPage.seo.ogDescription,
      ogType: legalEngineeringPage.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: legalEngineeringPage.seo.canonical,
      ogImage: profile.seo.ogImageUrl,
      canonical: legalEngineeringPage.seo.canonical,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: legalEngineeringPage.seo.ogTitle,
      twitterDescription: legalEngineeringPage.seo.ogDescription,
      twitterImage: profile.seo.ogImageUrl,
      themeColor: profile.seo.themeColor,
      robots: legalEngineeringPage.seo.robots,
    });

    return applyDocumentStructuredData(legalEngineeringStructuredData);
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
        <section className="relative overflow-hidden pt-32 pb-18 sm:pt-36 sm:pb-24">
          <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[130px]" />
          <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <section aria-labelledby="legal-engineering-title">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 sm:mb-6">
                <Workflow size={14} />
                <span>{legalEngineeringPage.hero.eyebrow}</span>
              </div>
              <h1
                id="legal-engineering-title"
                className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {legalEngineeringPage.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {legalEngineeringPage.hero.description}
              </p>
              <p className="mt-5 max-w-2xl rounded-3xl border border-white/8 bg-slate-900/60 p-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {legalEngineeringPage.hero.note}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={legalEngineeringPage.hero.primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {legalEngineeringPage.hero.primaryCta}
                </a>
                <a
                  href={legalEngineeringPage.hero.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {legalEngineeringPage.hero.secondaryCta}
                  <ArrowRight size={18} />
                </a>
              </div>
            </section>

            <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-7 lg:rounded-[2.5rem]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Compass size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Что сопоставляется
                  </div>
                  <h2 className="text-lg font-bold text-white">Документы, интерфейс и реальная схема данных</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {legalEngineeringPage.process.items.slice(0, 4).map((item, index) => (
                  <li key={item.title} className="rounded-2xl border border-white/6 bg-slate-950/55 p-4">
                    <div className="mb-2 text-xs font-bold text-cyan-200">{numbered(index)}</div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id={legalEngineeringPage.architectures.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.architectures.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {legalEngineeringPage.architectures.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {[legalEngineeringPage.architectures.left, legalEngineeringPage.architectures.right].map((column) => (
                <article key={column.title} className="rounded-[2rem] border border-slate-800 bg-slate-900/50 p-5 sm:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                      {column.title === legalEngineeringPage.architectures.left.title ? <FileText size={22} /> : <Network size={22} />}
                    </div>
                    <h3 className="text-xl font-bold text-white">{column.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {column.items.map((item) => (
                      <div key={item} className="w-fit rounded-2xl border border-white/6 bg-slate-950/55 px-4 py-3 text-sm font-semibold text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/8 p-5 text-base font-semibold leading-relaxed text-cyan-100 sm:p-6">
              {legalEngineeringPage.architectures.summary}
            </p>
          </div>
        </section>

        <section id={legalEngineeringPage.dataFlow.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.dataFlow.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {legalEngineeringPage.dataFlow.description}
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.09),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.86),rgba(2,6,23,0.96))] p-5 sm:p-8">
              <div className="grid gap-3 lg:grid-cols-6 lg:items-center">
                {legalEngineeringPage.dataFlow.steps.map((step, index) => (
                  <div key={step} className="min-w-0">
                    <div className="rounded-2xl border border-cyan-300/18 bg-slate-950/65 p-4 text-center">
                      <div className="mb-2 text-xs font-bold text-cyan-200">{numbered(index)}</div>
                      <div className="break-words text-sm font-semibold text-white">{step}</div>
                    </div>
                    {index < legalEngineeringPage.dataFlow.steps.length - 1 ? (
                      <div className="mx-auto h-5 w-px bg-cyan-300/35 lg:hidden" />
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {legalEngineeringPage.dataFlow.branches.map((branch) => (
                  <div key={branch} className="rounded-2xl border border-indigo-300/18 bg-indigo-500/8 p-4 text-center text-sm font-semibold text-indigo-100">
                    {branch}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id={legalEngineeringPage.formats.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="absolute right-[-10rem] top-16 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.formats.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {legalEngineeringPage.formats.description}
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {legalEngineeringPage.formats.items.map((item, index) => (
                <article
                  key={item.title}
                  className={`flex flex-col rounded-3xl border p-5 transition-colors sm:p-6 ${
                    index === 1
                      ? 'border-cyan-300/30 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.14),transparent_36%),rgba(15,23,42,0.62)] shadow-2xl shadow-cyan-950/20'
                      : 'border-slate-800 bg-slate-900/45'
                  }`}
                >
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl ${
                      index === 1 ? 'bg-cyan-300/12 text-cyan-200' : 'bg-indigo-500/10 text-indigo-300'
                    }`}
                  >
                    <ClipboardCheck size={22} />
                  </div>
                  <div className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${index === 1 ? 'text-cyan-200/70' : 'text-slate-500'}`}>
                    Формат {numbered(index)}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 grow text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-indigo-400/25 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 transition-colors hover:border-indigo-300/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                  >
                    {item.cta}
                    <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-6 rounded-3xl border border-white/8 bg-slate-900/45 p-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {legalEngineeringPage.formats.note}
            </p>
          </div>
        </section>

        <section id={legalEngineeringPage.auditScope.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.auditScope.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {legalEngineeringPage.auditScope.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {legalEngineeringPage.auditScope.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/6 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={legalEngineeringPage.process.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {legalEngineeringPage.process.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              {legalEngineeringPage.process.description}
            </p>
            <ol className="mt-10 space-y-4">
              {legalEngineeringPage.process.items.map((item, index) => (
                <li key={item.title} className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:grid-cols-[5rem_1fr] sm:p-6">
                  <div className="text-3xl font-extrabold tracking-tight text-cyan-300">{numbered(index)}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id={legalEngineeringPage.caseStudy.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/8 p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/55 text-cyan-200">
                <GitBranch size={24} />
              </div>
              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.caseStudy.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-cyan-100/85 sm:text-lg">
                {legalEngineeringPage.caseStudy.description}
              </p>
              <a
                href={legalEngineeringPage.caseStudy.href}
                className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-cyan-200/25 bg-slate-950/55 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-100/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 sm:text-base"
              >
                {legalEngineeringPage.caseStudy.linkLabel}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id={legalEngineeringPage.clientProofSection.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200">
                {legalEngineeringPage.clientProofSection.eyebrow}
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.clientProofSection.title}
              </h2>
            </div>

            <div className="space-y-8">
              {legalEngineeringPage.clientProofSection.items.map((proof) => (
                <article
                  key={proof.id}
                  className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-start"
                >
                  <div className="rounded-[2rem] border border-white/8 bg-slate-900/45 p-6 sm:p-8 lg:p-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200">
                      {proof.eyebrow}
                    </div>
                    <div className="mb-4 text-sm font-semibold text-cyan-200">{proof.company}</div>
                    <blockquote className="max-w-3xl text-lg leading-relaxed text-white sm:text-xl">
                      {proof.quote}
                    </blockquote>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">{proof.note}</p>
                    {renderProofMetadata(proof)}
                    <a
                      href={proof.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={proof.openAriaLabel}
                      className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-indigo-300/25 bg-indigo-500/10 px-5 py-3 text-sm font-semibold text-indigo-100 transition-colors hover:border-indigo-200/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                    >
                      {proof.openLabel}
                      <ArrowRight size={18} />
                    </a>
                  </div>

                  <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/35 p-4 sm:p-5 lg:p-6">
                    <a
                      href={proof.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={proof.openAriaLabel}
                      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                    >
                      <img
                        src={proof.image}
                        alt={proof.imageAlt}
                        className="h-auto w-full rounded-[1.5rem] border border-white/8 object-contain shadow-2xl shadow-slate-950/40 transition-transform duration-300 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </a>
                    <p className="mt-4 text-xs leading-relaxed text-slate-500 sm:text-sm">
                      {getClientProofMetadata(proof)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={legalEngineeringPage.relatedServices.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.relatedServices.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {legalEngineeringPage.relatedServices.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {legalEngineeringPage.relatedServices.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  {item.href && item.linkLabel ? (
                    <a
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                    >
                      {item.linkLabel}
                      <LinkIcon size={16} />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={legalEngineeringPage.itContext.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.itContext.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {legalEngineeringPage.itContext.description}
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {legalEngineeringPage.itContext.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={legalEngineeringPage.partnerFormat.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-800 bg-[linear-gradient(135deg,rgba(30,41,59,0.48),rgba(15,23,42,0.72))] p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-200">
                <Network size={24} />
              </div>
              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                {legalEngineeringPage.partnerFormat.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
                {legalEngineeringPage.partnerFormat.description}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {legalEngineeringPage.partnerFormat.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm font-semibold text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-indigo-100/75 sm:text-base">
                {legalEngineeringPage.partnerFormat.note}
              </p>
              <a
                href={legalEngineeringPage.partnerFormat.href}
                className="mt-7 inline-flex items-center justify-center rounded-2xl border border-indigo-300/25 bg-indigo-500/10 px-6 py-3.5 font-bold text-indigo-100 transition-colors hover:border-indigo-200/45 hover:bg-indigo-500/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
              >
                {legalEngineeringPage.partnerFormat.cta}
              </a>
            </div>
          </div>
        </section>

        <section id={legalEngineeringPage.faq.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              {legalEngineeringPage.faq.title}
            </h2>
            <div className="space-y-4">
              {legalEngineeringPage.faq.items.map((item) => (
                <article key={item.question} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-indigo-500/25 bg-gradient-to-br from-indigo-600/18 to-slate-900 p-6 shadow-2xl shadow-indigo-950/20 sm:p-8 lg:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
              <MessageCircle size={24} />
            </div>
            <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              {legalEngineeringPage.finalCta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
              {legalEngineeringPage.finalCta.description}
            </p>
            <a
              href={legalEngineeringPage.finalCta.buttonHref}
              className="mt-7 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {legalEngineeringPage.finalCta.buttonLabel}
            </a>
          </div>
        </section>

        <Contact defaultProjectType={LEGAL_ENGINEERING_PROJECT_TYPE} />
      </main>
      <Footer />
    </div>
  );
}
