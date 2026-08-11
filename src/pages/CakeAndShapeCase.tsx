import { useEffect } from 'react';
import { ArrowDown, ExternalLink, Github, Layers3, LockKeyhole, ServerCog, ShieldCheck } from 'lucide-react';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { WEB_APPLICATION_DEVELOPMENT_PROJECT_TYPE } from '@/data/contacts';
import { cakeAndShapeCase } from '@/data/cakeAndShapeCase';
import { cakeAndShapeCaseStructuredData } from '@/data/structuredData';
import { scrollToCurrentHashWithRetry } from '@/lib/hashScroll';
import { applyDocumentMeta } from '@/lib/meta';
import { applyDocumentStructuredData } from '@/lib/structuredData';

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

const ScreenshotPanel = ({
  image,
  caption,
}: {
  image: { src: string; alt: string };
  caption: string;
}) => (
  <figure className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/55 p-3 shadow-2xl shadow-slate-950/30 sm:p-4">
    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-auto w-full rounded-[1.35rem] object-contain" />
    <figcaption className="px-2 pt-3 text-sm leading-relaxed text-slate-400">{caption}</figcaption>
  </figure>
);

export default function CakeAndShapeCase() {
  useEffect(() => {
    applyDocumentMeta({
      lang: 'ru',
      title: cakeAndShapeCase.seo.title,
      description: cakeAndShapeCase.seo.description,
      ogTitle: cakeAndShapeCase.seo.ogTitle,
      ogDescription: cakeAndShapeCase.seo.ogDescription,
      ogType: cakeAndShapeCase.seo.ogType,
      ogLocale: 'ru_RU',
      ogSiteName: 'Stalar Vision',
      ogUrl: cakeAndShapeCase.seo.canonical,
      ogImage: 'https://stalarvision.ru/brand/share-preview.png',
      canonical: cakeAndShapeCase.seo.canonical,
      twitterCard: 'summary_large_image',
      twitterTitle: cakeAndShapeCase.seo.ogTitle,
      twitterDescription: cakeAndShapeCase.seo.ogDescription,
      twitterImage: 'https://stalarvision.ru/brand/share-preview.png',
      themeColor: '#020617',
      robots: cakeAndShapeCase.seo.robots,
    });

    return applyDocumentStructuredData(cakeAndShapeCaseStructuredData);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      scrollToCurrentHashWithRetry({ behavior: 'auto' });
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-100">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-36">
          <div aria-hidden="true" className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
          <div aria-hidden="true" className="absolute right-[-10rem] top-0 h-[30rem] w-[30rem] rounded-full bg-indigo-500/15 blur-[130px]" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-emerald-300/25 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-emerald-200">
                {cakeAndShapeCase.hero.eyebrow}
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
                {cakeAndShapeCase.hero.title}
              </h1>
              <p className="mt-6 text-lg font-semibold leading-relaxed text-emerald-100 sm:text-2xl">
                {cakeAndShapeCase.hero.lead}
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                {cakeAndShapeCase.hero.description}
              </p>
              <div className="mt-5 rounded-2xl border border-white/8 bg-slate-900/55 px-4 py-3 text-sm font-semibold text-slate-200">
                {cakeAndShapeCase.hero.techLine}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={cakeAndShapeCase.hero.primaryCta.href} {...externalLinkProps} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200">
                  {cakeAndShapeCase.hero.primaryCta.label}
                  <ExternalLink size={18} />
                </a>
                <a href={cakeAndShapeCase.hero.secondaryCta.href} {...externalLinkProps} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 font-semibold text-slate-100 transition hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200">
                  {cakeAndShapeCase.hero.secondaryCta.label}
                  <Github size={18} />
                </a>
              </div>
            </div>
            <ScreenshotPanel image={cakeAndShapeCase.hero.image} caption="Hero-витрина публичного сайта без потери пропорций скриншота." />
          </div>
        </section>

        <section className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">{cakeAndShapeCase.overview.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{cakeAndShapeCase.overview.description}</p>
                <p className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-4 text-sm leading-relaxed text-cyan-100">{cakeAndShapeCase.overview.note}</p>
              </div>
              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-5 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cakeAndShapeCase.overview.flow.map((item, index) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/55 p-4">
                      <div className="mb-3 text-xs font-bold text-emerald-300">{String(index + 1).padStart(2, '0')}</div>
                      <div className="font-semibold text-white">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {[cakeAndShapeCase.publicExperience, cakeAndShapeCase.adminCatalog, cakeAndShapeCase.adminMedia].map((section, index) => (
          <section key={section.title} className="bg-slate-950 py-16 sm:py-20">
            <div className={`mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 ${index % 2 ? 'lg:[&>figure]:order-first' : ''}`}>
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">{section.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{section.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900/45 p-4 text-sm font-medium text-slate-200">
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300 align-middle" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <ScreenshotPanel image={section.image} caption={section.image.alt} />
            </div>
          </section>
        ))}

        <section className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <ScreenshotPanel image={cakeAndShapeCase.siteSettings.image} caption={cakeAndShapeCase.siteSettings.image.alt} />
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{cakeAndShapeCase.siteSettings.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{cakeAndShapeCase.siteSettings.description}</p>
              <p className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-50/90">{cakeAndShapeCase.siteSettings.note}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">{cakeAndShapeCase.architecture.title}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {cakeAndShapeCase.architecture.items.map((item) => (
                <article key={item.title} className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-6">
                  <Layers3 className="mb-5 text-cyan-200" size={24} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">{cakeAndShapeCase.architecture.sharedClient}</p>
          </div>
        </section>

        <section className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-3">
              <article className="rounded-[2rem] border border-emerald-400/20 bg-emerald-500/8 p-6 sm:p-8">
                <ShieldCheck className="mb-5 text-emerald-200" size={26} />
                <h2 className="text-2xl font-bold">{cakeAndShapeCase.engineering.title}</h2>
                <div className="mt-5 space-y-3">
                  {cakeAndShapeCase.engineering.items.map((item) => <p key={item} className="text-sm leading-relaxed text-emerald-50/90">{item}</p>)}
                </div>
              </article>
              <article className="rounded-[2rem] border border-indigo-400/20 bg-indigo-500/8 p-6 sm:p-8">
                <ServerCog className="mb-5 text-indigo-200" size={26} />
                <h2 className="text-2xl font-bold">{cakeAndShapeCase.production.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-indigo-50/90">{cakeAndShapeCase.production.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{cakeAndShapeCase.production.flow.map((item) => <span key={item} className="rounded-full bg-slate-950/45 px-3 py-1 text-xs font-bold text-indigo-100">{item}</span>)}</div>
              </article>
              <article className="rounded-[2rem] border border-amber-400/20 bg-amber-500/8 p-6 sm:p-8">
                <LockKeyhole className="mb-5 text-amber-200" size={26} />
                <h2 className="text-2xl font-bold">{cakeAndShapeCase.evolution.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-amber-50/90">{cakeAndShapeCase.evolution.description}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-6 sm:p-8">
              <h2 className="text-3xl font-bold sm:text-4xl">{cakeAndShapeCase.future.title}</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {cakeAndShapeCase.future.items.map((item) => <span key={item} className="rounded-full border border-slate-700 bg-slate-950/55 px-4 py-2 text-sm font-semibold text-slate-200">{item}</span>)}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">{cakeAndShapeCase.future.disclaimer}</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-emerald-500/25 bg-gradient-to-br from-emerald-600/18 to-slate-900 p-6 shadow-2xl shadow-emerald-950/20 sm:p-8 lg:p-10">
            <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">{cakeAndShapeCase.finalCta.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-emerald-50/85 sm:text-lg">{cakeAndShapeCase.finalCta.description}</p>
            <a href={cakeAndShapeCase.finalCta.buttonHref} className="mt-7 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80">
              {cakeAndShapeCase.finalCta.buttonLabel}
              <ArrowDown size={18} className="ml-2" />
            </a>
          </div>
        </section>

        <Contact defaultProjectType={WEB_APPLICATION_DEVELOPMENT_PROJECT_TYPE} />
      </main>
      <Footer />
    </div>
  );
}
