import { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  GitBranch,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { WEB_APPLICATION_DEVELOPMENT_PROJECT_TYPE } from '@/data/contacts';
import { etrnPage } from '@/data/etrn';
import { profile } from '@/data/profile';
import { etrnStructuredData } from '@/data/structuredData';
import { scrollToCurrentHashWithRetry } from '@/lib/hashScroll';
import { applyDocumentMeta } from '@/lib/meta';
import { applyDocumentStructuredData } from '@/lib/structuredData';
import { YANDEX_METRIKA_GOALS, trackYandexMetrikaGoal } from '@/lib/utils';

const numbered = (index: number) => String(index + 1).padStart(2, '0');

export default function Etrn() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: etrnPage.seo.title,
      description: etrnPage.seo.description,
      ogTitle: etrnPage.seo.ogTitle,
      ogDescription: etrnPage.seo.ogDescription,
      ogType: etrnPage.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: etrnPage.seo.canonical,
      ogImage: profile.seo.ogImageUrl,
      canonical: etrnPage.seo.canonical,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: etrnPage.seo.ogTitle,
      twitterDescription: etrnPage.seo.ogDescription,
      twitterImage: profile.seo.ogImageUrl,
      themeColor: profile.seo.themeColor,
      robots: etrnPage.seo.robots,
    });

    return applyDocumentStructuredData(etrnStructuredData);
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    scrollToCurrentHashWithRetry({ behavior: 'auto' });
  }, []);

  const trackContactCta = () => {
    trackYandexMetrikaGoal(YANDEX_METRIKA_GOALS.etrnContactCtaClick, {
      page: 'etrn',
      destination: etrnPage.hero.primaryCtaHref,
    });
  };

  const trackDemoCta = () => {
    trackYandexMetrikaGoal(YANDEX_METRIKA_GOALS.etrnDemoCtaClick, {
      page: 'etrn',
      destination: etrnPage.hero.secondaryCtaHref,
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-18 sm:pt-36 sm:pb-24">
          <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[130px]" />
          <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <section aria-labelledby="etrn-title">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300 sm:mb-6 sm:tracking-[0.22em]">
                <Workflow size={14} />
                <span>{etrnPage.hero.eyebrow}</span>
              </div>
              <h1
                id="etrn-title"
                className="max-w-4xl text-[2rem] font-extrabold leading-[1.16] tracking-tight text-white min-[375px]:text-[2.15rem] sm:text-5xl sm:leading-[1.04] lg:text-6xl"
              >
                {etrnPage.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {etrnPage.hero.description}
              </p>
              <p className="mt-5 max-w-2xl rounded-3xl border border-white/8 bg-slate-900/60 p-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {etrnPage.hero.additionalText}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={etrnPage.hero.primaryCtaHref}
                  onClick={trackContactCta}
                  className="inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {etrnPage.hero.primaryCta}
                </a>
                <a
                  href={etrnPage.hero.secondaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackDemoCta}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {etrnPage.hero.secondaryCta}
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
                {etrnPage.hero.trustLine}
              </p>
            </section>

            <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-7 lg:rounded-[2.5rem]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                  <GitBranch size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Логика страницы
                  </div>
                  <h2 className="text-lg font-bold text-white">Процесс, интерфейс, интеграции</h2>
                </div>
              </div>
              <ol className="space-y-3">
                {etrnPage.architecture.steps.slice(0, 5).map((step, index) => (
                  <li key={step} className="rounded-2xl border border-white/6 bg-slate-950/55 p-4">
                    <div className="mb-2 text-xs font-bold text-indigo-300">{numbered(index)}</div>
                    <h3 className="text-sm font-semibold text-white">{step}</h3>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        <section id={etrnPage.change.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{etrnPage.change.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                {etrnPage.change.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                {etrnPage.change.additionalText}
              </p>
              {etrnPage.change.callout ? (
                <p className="mt-6 rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-5 text-sm leading-relaxed text-indigo-100/90 sm:text-base">
                  {etrnPage.change.callout}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section id={etrnPage.businessProblems.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{etrnPage.businessProblems.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {etrnPage.businessProblems.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {etrnPage.businessProblems.items.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 transition-colors hover:border-indigo-500/25 sm:p-6"
                >
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

        <section id={etrnPage.capabilities.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{etrnPage.capabilities.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {etrnPage.capabilities.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {etrnPage.capabilities.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/6 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                    <Layers3 size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={etrnPage.architecture.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{etrnPage.architecture.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {etrnPage.architecture.description}
              </p>
            </div>
            <ol className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
              {etrnPage.architecture.steps.map((step, index) => (
                <li key={step} className="relative rounded-3xl border border-slate-800 bg-slate-900/45 p-5">
                  <div className="mb-4 text-xs font-bold text-indigo-300">{numbered(index)}</div>
                  <h3 className="text-base font-bold text-white">{step}</h3>
                  {index < etrnPage.architecture.steps.length - 1 ? (
                    <ArrowRight className="mt-4 hidden text-slate-600 xl:block" size={18} aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-sm leading-relaxed text-cyan-100/90 sm:text-base">
              {etrnPage.architecture.callout}
            </p>
          </div>
        </section>

        <section id={etrnPage.operatorPositioning.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/10 p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
                <ShieldCheck size={24} />
              </div>
              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                {etrnPage.operatorPositioning.title}
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
                {etrnPage.operatorPositioning.description}
              </p>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-indigo-100/75">
                {etrnPage.operatorPositioning.additionalText}
              </p>
              {etrnPage.operatorPositioning.callout ? (
                <p className="mt-6 max-w-4xl rounded-3xl border border-white/10 bg-slate-950/45 p-5 text-sm leading-relaxed text-indigo-100/90 sm:text-base">
                  {etrnPage.operatorPositioning.callout}
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <section id={etrnPage.demo.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="absolute right-[-10rem] top-16 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200">
                <Workflow size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{etrnPage.demo.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{etrnPage.demo.description}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">{etrnPage.demo.additionalText}</p>
              <a
                href={etrnPage.demo.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackDemoCta}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-500/10 px-6 py-3.5 font-semibold text-cyan-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                {etrnPage.demo.ctaLabel}
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-5 sm:p-7">
              <p className="mb-5 text-sm leading-relaxed text-cyan-100/85">{etrnPage.demo.callout}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {etrnPage.demo.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/6 bg-slate-950/55 p-4 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id={etrnPage.perspectives.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{etrnPage.perspectives.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {etrnPage.perspectives.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {etrnPage.perspectives.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={etrnPage.audience.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{etrnPage.audience.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {etrnPage.audience.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {etrnPage.audience.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/6 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={etrnPage.process.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">{etrnPage.process.title}</h2>
            <ol className="space-y-4">
              {etrnPage.process.items.map((item, index) => (
                <li key={item.title} className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:grid-cols-[5rem_1fr] sm:p-6">
                  <div className="text-3xl font-extrabold tracking-tight text-indigo-400">{numbered(index)}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id={etrnPage.faq.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">{etrnPage.faq.title}</h2>
            <div className="space-y-4">
              {etrnPage.faq.items.map((item) => (
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
            <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">{etrnPage.finalCta.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
              {etrnPage.finalCta.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={etrnPage.finalCta.buttonHref}
                onClick={trackContactCta}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                {etrnPage.finalCta.buttonLabel}
              </a>
              <a
                href={etrnPage.demo.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackDemoCta}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-500/10 px-6 py-3.5 font-semibold text-cyan-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                Посмотреть ETRN Flow
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </section>

        <Contact defaultProjectType={WEB_APPLICATION_DEVELOPMENT_PROJECT_TYPE} />
      </main>
      <Footer />
    </div>
  );
}
