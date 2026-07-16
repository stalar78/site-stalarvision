import { useEffect } from 'react';
import { ArrowDown, CheckCircle2, Compass, MessageCircle, Wrench } from 'lucide-react';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { WEBSITE_IMPROVEMENT_PROJECT_TYPE } from '@/data/contacts';
import { profile } from '@/data/profile';
import { websiteImprovementStructuredData } from '@/data/structuredData';
import { websiteImprovementPage } from '@/data/websiteImprovement';
import { scrollToCurrentHashWithRetry } from '@/lib/hashScroll';
import { applyDocumentMeta } from '@/lib/meta';
import { applyDocumentStructuredData } from '@/lib/structuredData';

const numbered = (index: number) => String(index + 1).padStart(2, '0');

export default function WebsiteImprovement() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: websiteImprovementPage.seo.title,
      description: websiteImprovementPage.seo.description,
      ogTitle: websiteImprovementPage.seo.ogTitle,
      ogDescription: websiteImprovementPage.seo.ogDescription,
      ogType: websiteImprovementPage.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: websiteImprovementPage.seo.canonical,
      ogImage: profile.seo.ogImageUrl,
      canonical: websiteImprovementPage.seo.canonical,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: websiteImprovementPage.seo.ogTitle,
      twitterDescription: websiteImprovementPage.seo.ogDescription,
      twitterImage: profile.seo.ogImageUrl,
      themeColor: profile.seo.themeColor,
      robots: websiteImprovementPage.seo.robots,
    });

    return applyDocumentStructuredData(websiteImprovementStructuredData);
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
            <section aria-labelledby="website-improvement-title">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 sm:mb-6">
                <Wrench size={14} />
                <span>{websiteImprovementPage.hero.eyebrow}</span>
              </div>
              <h1
                id="website-improvement-title"
                className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {websiteImprovementPage.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {websiteImprovementPage.hero.description}
              </p>
              <p className="mt-5 max-w-2xl rounded-3xl border border-white/8 bg-slate-900/60 p-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {websiteImprovementPage.hero.regionNote}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={websiteImprovementPage.hero.primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {websiteImprovementPage.hero.primaryCta}
                </a>
                <a
                  href={websiteImprovementPage.hero.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {websiteImprovementPage.hero.secondaryCta}
                  <ArrowDown size={18} />
                </a>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
                {websiteImprovementPage.hero.ctaNote}
              </p>
            </section>

            <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-7 lg:rounded-[2.5rem]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                  <Compass size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Первый этап
                  </div>
                  <h2 className="text-lg font-bold text-white">Разобраться и выбрать приоритет</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {websiteImprovementPage.process.items.slice(0, 4).map((item, index) => (
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

        <section id={websiteImprovementPage.situations.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {websiteImprovementPage.situations.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {websiteImprovementPage.situations.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {websiteImprovementPage.situations.items.map((item, index) => (
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

        <section id={websiteImprovementPage.workAreas.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {websiteImprovementPage.workAreas.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {websiteImprovementPage.workAreas.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {websiteImprovementPage.workAreas.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/6 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={websiteImprovementPage.process.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">
              {websiteImprovementPage.process.title}
            </h2>
            <ol className="space-y-4">
              {websiteImprovementPage.process.items.map((item, index) => (
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

        <section id={websiteImprovementPage.principles.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/10 p-6 sm:p-8 lg:p-10">
              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                {websiteImprovementPage.principles.title}
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {websiteImprovementPage.principles.items.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-indigo-100/85">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id={websiteImprovementPage.faq.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              {websiteImprovementPage.faq.title}
            </h2>
            <div className="space-y-4">
              {websiteImprovementPage.faq.items.map((item) => (
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
              {websiteImprovementPage.finalCta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
              {websiteImprovementPage.finalCta.description}
            </p>
            <a
              href={websiteImprovementPage.finalCta.buttonHref}
              className="mt-7 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {websiteImprovementPage.finalCta.buttonLabel}
            </a>
          </div>
        </section>

        <Contact defaultProjectType={WEBSITE_IMPROVEMENT_PROJECT_TYPE} />
      </main>
      <Footer />
    </div>
  );
}
