import { useEffect } from 'react';
import {
  ArrowDown,
  CheckCircle2,
  Compass,
  Database,
  Layers3,
  Link as LinkIcon,
  MessageCircle,
  Workflow,
} from 'lucide-react';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { WEB_APPLICATION_DEVELOPMENT_PROJECT_TYPE } from '@/data/contacts';
import { profile } from '@/data/profile';
import { webApplicationDevelopmentStructuredData } from '@/data/structuredData';
import { webApplicationDevelopmentPage } from '@/data/webApplicationDevelopment';
import { scrollToCurrentHashWithRetry } from '@/lib/hashScroll';
import { applyDocumentMeta } from '@/lib/meta';
import { applyDocumentStructuredData } from '@/lib/structuredData';

const numbered = (index: number) => String(index + 1).padStart(2, '0');

export default function WebApplicationDevelopment() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: webApplicationDevelopmentPage.seo.title,
      description: webApplicationDevelopmentPage.seo.description,
      ogTitle: webApplicationDevelopmentPage.seo.ogTitle,
      ogDescription: webApplicationDevelopmentPage.seo.ogDescription,
      ogType: webApplicationDevelopmentPage.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: webApplicationDevelopmentPage.seo.canonical,
      ogImage: profile.seo.ogImageUrl,
      canonical: webApplicationDevelopmentPage.seo.canonical,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: webApplicationDevelopmentPage.seo.ogTitle,
      twitterDescription: webApplicationDevelopmentPage.seo.ogDescription,
      twitterImage: profile.seo.ogImageUrl,
      themeColor: profile.seo.themeColor,
      robots: webApplicationDevelopmentPage.seo.robots,
    });

    return applyDocumentStructuredData(webApplicationDevelopmentStructuredData);
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
          <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div aria-labelledby="web-application-development-title">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 sm:mb-6">
                <Workflow size={14} />
                <span>{webApplicationDevelopmentPage.hero.eyebrow}</span>
              </div>
              <h1
                id="web-application-development-title"
                className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {webApplicationDevelopmentPage.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {webApplicationDevelopmentPage.hero.description}
              </p>
              <p className="mt-5 max-w-2xl rounded-3xl border border-white/8 bg-slate-900/60 p-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {webApplicationDevelopmentPage.hero.regionNote}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={webApplicationDevelopmentPage.hero.primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {webApplicationDevelopmentPage.hero.primaryCta}
                </a>
                <a
                  href={webApplicationDevelopmentPage.hero.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {webApplicationDevelopmentPage.hero.secondaryCta}
                  <ArrowDown size={18} />
                </a>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
                {webApplicationDevelopmentPage.hero.ctaNote}
              </p>
            </div>

            <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-7 lg:rounded-[2.5rem]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                  <Compass size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Первый релиз
                  </div>
                  <h2 className="text-lg font-bold text-white">Сценарий, роли и данные</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {webApplicationDevelopmentPage.resultSummary.map((item, index) => (
                  <li key={item.title} className="rounded-2xl border border-white/6 bg-slate-950/55 p-4">
                    <div className="mb-2 text-xs font-bold text-indigo-300">{numbered(index)}</div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id={webApplicationDevelopmentPage.situations.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.situations.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {webApplicationDevelopmentPage.situations.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {webApplicationDevelopmentPage.situations.items.map((item, index) => (
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

        <section id={webApplicationDevelopmentPage.solutionTypes.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.solutionTypes.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {webApplicationDevelopmentPage.solutionTypes.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {webApplicationDevelopmentPage.solutionTypes.items.map((item) => (
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

        <section id={webApplicationDevelopmentPage.firstRelease.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.firstRelease.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {webApplicationDevelopmentPage.firstRelease.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {webApplicationDevelopmentPage.firstRelease.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={webApplicationDevelopmentPage.process.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">
              {webApplicationDevelopmentPage.process.title}
            </h2>
            <ol className="space-y-4">
              {webApplicationDevelopmentPage.process.items.map((item, index) => (
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

        <section id={webApplicationDevelopmentPage.distinctions.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.distinctions.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {webApplicationDevelopmentPage.distinctions.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {webApplicationDevelopmentPage.distinctions.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                  {item.href && item.linkLabel ? (
                    <a
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 transition-colors hover:border-indigo-300/35 hover:bg-indigo-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
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

        <section id={webApplicationDevelopmentPage.confirmedProjects.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.confirmedProjects.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {webApplicationDevelopmentPage.confirmedProjects.description}
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {webApplicationDevelopmentPage.confirmedProjects.items.map((item) => (
                <article key={item.title} className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {item.link ? (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-indigo-400/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                    >
                      {item.link.label}
                      <LinkIcon size={16} />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={webApplicationDevelopmentPage.technologies.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="absolute right-[-10rem] top-16 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.technologies.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {webApplicationDevelopmentPage.technologies.description}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {webApplicationDevelopmentPage.technologies.items.map((item) => (
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

        <section id={webApplicationDevelopmentPage.clientInputs.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.clientInputs.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {webApplicationDevelopmentPage.clientInputs.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {webApplicationDevelopmentPage.clientInputs.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={webApplicationDevelopmentPage.limitations.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/10 p-6 sm:p-8 lg:p-10">
              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.limitations.title}
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {webApplicationDevelopmentPage.limitations.items.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-indigo-100/85">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id={webApplicationDevelopmentPage.faq.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              {webApplicationDevelopmentPage.faq.title}
            </h2>
            <div className="space-y-4">
              {webApplicationDevelopmentPage.faq.items.map((item) => (
                <article key={item.question} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={webApplicationDevelopmentPage.relatedServices.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {webApplicationDevelopmentPage.relatedServices.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {webApplicationDevelopmentPage.relatedServices.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {webApplicationDevelopmentPage.relatedServices.items.map((item) => (
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

        <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-indigo-500/25 bg-gradient-to-br from-indigo-600/18 to-slate-900 p-6 shadow-2xl shadow-indigo-950/20 sm:p-8 lg:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
              <MessageCircle size={24} />
            </div>
            <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              {webApplicationDevelopmentPage.finalCta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
              {webApplicationDevelopmentPage.finalCta.description}
            </p>
            <a
              href={webApplicationDevelopmentPage.finalCta.buttonHref}
              className="mt-7 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {webApplicationDevelopmentPage.finalCta.buttonLabel}
            </a>
          </div>
        </section>

        <Contact defaultProjectType={WEB_APPLICATION_DEVELOPMENT_PROJECT_TYPE} />
      </main>
      <Footer />
    </div>
  );
}
