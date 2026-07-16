import { useEffect } from 'react';
import { ArrowDown, CheckCircle2, Compass, Layers3, MessageCircle, Rocket } from 'lucide-react';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { WEBSITE_LAUNCH_PROJECT_TYPE } from '@/data/contacts';
import { profile } from '@/data/profile';
import { websiteLaunchStructuredData } from '@/data/structuredData';
import { websiteLaunchPage } from '@/data/websiteLaunch';
import { scrollToCurrentHashWithRetry } from '@/lib/hashScroll';
import { applyDocumentMeta } from '@/lib/meta';
import { applyDocumentStructuredData } from '@/lib/structuredData';

const numbered = (index: number) => String(index + 1).padStart(2, '0');

export default function WebsiteLaunch() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: websiteLaunchPage.seo.title,
      description: websiteLaunchPage.seo.description,
      ogTitle: websiteLaunchPage.seo.ogTitle,
      ogDescription: websiteLaunchPage.seo.ogDescription,
      ogType: websiteLaunchPage.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: websiteLaunchPage.seo.canonical,
      ogImage: profile.seo.ogImageUrl,
      canonical: websiteLaunchPage.seo.canonical,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: websiteLaunchPage.seo.ogTitle,
      twitterDescription: websiteLaunchPage.seo.ogDescription,
      twitterImage: profile.seo.ogImageUrl,
      themeColor: profile.seo.themeColor,
      robots: websiteLaunchPage.seo.robots,
    });

    return applyDocumentStructuredData(websiteLaunchStructuredData);
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
          <div className="absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <section aria-labelledby="website-launch-title">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 sm:mb-6">
                <Rocket size={14} />
                <span>{websiteLaunchPage.hero.eyebrow}</span>
              </div>
              <h1
                id="website-launch-title"
                className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {websiteLaunchPage.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {websiteLaunchPage.hero.description}
              </p>
              <p className="mt-5 max-w-2xl rounded-3xl border border-white/8 bg-slate-900/60 p-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {websiteLaunchPage.hero.regionNote}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={websiteLaunchPage.hero.primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {websiteLaunchPage.hero.primaryCta}
                </a>
                <a
                  href={websiteLaunchPage.hero.secondaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                >
                  {websiteLaunchPage.hero.secondaryCta}
                  <ArrowDown size={18} />
                </a>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500">
                {websiteLaunchPage.hero.ctaNote}
              </p>
            </section>

            <aside className="rounded-[2rem] border border-slate-800 bg-slate-900/55 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-7 lg:rounded-[2.5rem]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                  <Compass size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Первый релиз
                  </div>
                  <h2 className="text-lg font-bold text-white">Главный сценарий и рабочий запуск</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {websiteLaunchPage.firstRelease.items.slice(0, 4).map((item, index) => (
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

        <section id={websiteLaunchPage.situations.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {websiteLaunchPage.situations.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {websiteLaunchPage.situations.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {websiteLaunchPage.situations.items.map((item, index) => (
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

        <section id={websiteLaunchPage.projectFormats.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {websiteLaunchPage.projectFormats.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {websiteLaunchPage.projectFormats.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {websiteLaunchPage.projectFormats.items.map((item) => (
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

        <section id={websiteLaunchPage.firstRelease.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {websiteLaunchPage.firstRelease.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {websiteLaunchPage.firstRelease.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {websiteLaunchPage.firstRelease.items.map((item) => (
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

        <section id={websiteLaunchPage.process.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-3xl font-bold text-white sm:text-4xl">
              {websiteLaunchPage.process.title}
            </h2>
            <ol className="space-y-4">
              {websiteLaunchPage.process.items.map((item, index) => (
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

        <section id={websiteLaunchPage.clientInputs.id} className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 max-w-3xl sm:mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {websiteLaunchPage.clientInputs.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                {websiteLaunchPage.clientInputs.description}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {websiteLaunchPage.clientInputs.items.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={websiteLaunchPage.principles.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/10 p-6 sm:p-8 lg:p-10">
              <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                {websiteLaunchPage.principles.title}
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {websiteLaunchPage.principles.items.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-indigo-100/85">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id={websiteLaunchPage.faq.id} className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              {websiteLaunchPage.faq.title}
            </h2>
            <div className="space-y-4">
              {websiteLaunchPage.faq.items.map((item) => (
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
              {websiteLaunchPage.finalCta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
              {websiteLaunchPage.finalCta.description}
            </p>
            <a
              href={websiteLaunchPage.finalCta.buttonHref}
              className="mt-7 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              {websiteLaunchPage.finalCta.buttonLabel}
            </a>
          </div>
        </section>

        <Contact defaultProjectType={WEBSITE_LAUNCH_PROJECT_TYPE} />
      </main>
      <Footer />
    </div>
  );
}
