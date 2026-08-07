import { useEffect } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, MessageCircle, Quote } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import type { Article } from '@/data/articles';
import { profile } from '@/data/profile';
import { formatRussianCalendarDate } from '@/lib/date';
import { applyDocumentMeta } from '@/lib/meta';
import { calculateReadingTimeMinutes, formatReadingTimeLabel, formatSectionCountLabel } from '@/lib/readingTime';
import { applyDocumentStructuredData } from '@/lib/structuredData';
import type { JsonLdObject } from '@/lib/structuredData';

type ArticlePageProps = {
  article: Article;
  structuredData: JsonLdObject;
};

export function ArticlePage({ article, structuredData }: ArticlePageProps) {
  const readingTimeMinutes = calculateReadingTimeMinutes(article);
  const readingTimeLabel = formatReadingTimeLabel(readingTimeMinutes);
  const readingRoadmap = [
    ...article.sections.map((section) => ({
      id: section.id,
      title: section.title,
    })),
    {
      id: 'comparison',
      title: article.comparison.title,
    },
    {
      id: 'decision-questions',
      title: article.decisionQuestions.title,
    },
    {
      id: 'conclusion',
      title: article.conclusion.title,
    },
  ];
  const sectionCountLabel = formatSectionCountLabel(readingRoadmap.length);

  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: article.seo.title,
      description: article.seo.description,
      ogTitle: article.seo.title,
      ogDescription: article.seo.description,
      ogType: article.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: article.seo.canonical,
      ogImage: article.seo.socialImage,
      ogImageAlt: article.seo.socialImageAlt,
      canonical: article.seo.canonical,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: article.seo.title,
      twitterDescription: article.seo.description,
      twitterImage: article.seo.socialImage,
      themeColor: profile.seo.themeColor,
      robots: article.seo.robots,
    });

    return applyDocumentStructuredData(structuredData);
  }, [article, structuredData]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <article className="relative overflow-hidden">
          <header className="relative overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-36">
            <div aria-hidden="true" className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-indigo-600/13 blur-[130px]" />
            <div aria-hidden="true" className="absolute right-[-10rem] top-36 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center lg:px-8">
              <div className="min-w-0">
                <div className="mb-7 flex flex-wrap items-center gap-3">
                  <a
                    href="/articles/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                    Все материалы
                  </a>
                  <div className="inline-flex w-full max-w-full items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:w-auto sm:tracking-[0.22em]">
                    <BookOpen size={14} className="shrink-0" />
                    <span className="min-w-0 break-words">{article.category}</span>
                  </div>
                </div>
                <h1 className="max-w-4xl break-words text-2xl font-extrabold leading-[1.12] tracking-tight text-white [overflow-wrap:anywhere] sm:text-5xl sm:leading-[1.04] sm:[overflow-wrap:normal] lg:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                  {article.excerpt}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500 sm:text-sm">
                  <span className="break-words">{article.author}</span>
                  <span aria-hidden="true" className="hidden sm:inline">•</span>
                  <time dateTime={article.publishedAt} className="break-words">{formatRussianCalendarDate(article.publishedAt)}</time>
                  <span aria-hidden="true" className="hidden sm:inline">•</span>
                  <span className="break-words">{readingTimeLabel}</span>
                  <span aria-hidden="true" className="hidden sm:inline">•</span>
                  <span className="break-words">{sectionCountLabel}</span>
                </div>
              </div>

              <figure className="min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 shadow-2xl shadow-slate-950/40">
                <img
                  src={article.coverImage}
                  alt={article.coverAlt}
                  width={article.coverWidth}
                  height={article.coverHeight}
                  className="aspect-[1200/630] w-full object-cover"
                  style={{ objectPosition: article.coverPosition }}
                />
              </figure>
            </div>
          </header>

          <div className="bg-slate-950 pb-16 sm:pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 xl:grid-cols-[15rem_minmax(0,1fr)] xl:items-start">
                <aside className="hidden xl:block">
                  <nav className="sticky top-28 rounded-3xl border border-slate-800 bg-slate-900/35 p-5" aria-label="В этом материале">
                    <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">В этом материале</h2>
                    <ul className="mt-4 space-y-2.5">
                      {readingRoadmap.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block break-words rounded-xl px-3 py-2 text-sm leading-snug text-slate-400 transition-colors [overflow-wrap:anywhere] hover:bg-slate-800/70 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:[overflow-wrap:normal]"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </aside>

                <div className="min-w-0 space-y-6">
                  <nav className="rounded-3xl border border-slate-800 bg-slate-900/35 p-5 xl:hidden" aria-label="В этом материале">
                    <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">В этом материале</h2>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {readingRoadmap.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block break-words rounded-xl px-3 py-2 text-sm leading-snug text-slate-400 transition-colors [overflow-wrap:anywhere] hover:bg-slate-800/70 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70 sm:[overflow-wrap:normal]"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="min-w-0 overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.08),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.82),rgba(2,6,23,0.92))] p-5 shadow-2xl shadow-slate-950/30 sm:p-8 lg:p-10">
                    <div className="mx-auto max-w-[46rem] space-y-16">
                      {article.lead?.length ? (
                        <div className="space-y-6 border-b border-slate-800 pb-12 text-lg leading-9 text-slate-200 sm:text-xl sm:leading-10">
                          {article.lead.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      ) : null}

                      {article.sections.map((section) => (
                        <section key={section.id} id={section.id} className="scroll-mt-28">
                          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            {section.title}
                          </h2>
                          <div className="mt-6 space-y-6 text-[1.04rem] leading-[1.82] text-slate-300 sm:text-[1.1rem]">
                            {section.paragraphs?.map((paragraph, paragraphIndex) => (
                              <p key={`${section.id}-${paragraphIndex}`}>
                                {paragraph.map((segment, segmentIndex) =>
                                  segment.href ? (
                                    <a
                                      key={`${section.id}-${paragraphIndex}-${segmentIndex}`}
                                      href={segment.href}
                                      className="font-semibold text-cyan-200 underline decoration-cyan-300/35 underline-offset-4 transition-colors hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                                    >
                                      {segment.text}
                                    </a>
                                  ) : (
                                    <span key={`${section.id}-${paragraphIndex}-${segmentIndex}`}>{segment.text}</span>
                                  ),
                                )}
                              </p>
                            ))}
                            {section.items ? (
                              <ul className="space-y-3">
                                {section.items.map((item) => (
                                  <li key={item} className="flex gap-3">
                                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                          {article.callouts
                            .filter((callout) => callout.afterSectionId === section.id)
                            .map((callout) => (
                              <aside
                                key={`${section.id}-${callout.title}`}
                                className={`mt-8 rounded-[1.75rem] border p-5 sm:p-6 ${
                                  callout.type === 'summary'
                                    ? 'border-cyan-300/20 bg-cyan-300/8'
                                    : 'border-indigo-300/20 bg-indigo-500/8'
                                }`}
                              >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950/55 text-cyan-200">
                                  <Quote size={18} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{callout.title}</h3>
                                <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                                  {callout.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                  ))}
                                </div>
                              </aside>
                            ))}
                        </section>
                      ))}
                    </div>

                    <section id="comparison" className="mx-auto mt-16 max-w-5xl scroll-mt-28">
                      <div className="mx-auto max-w-[46rem]">
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                          {article.comparison.title}
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                          {article.comparison.introduction}
                        </p>
                      </div>
                      <div className="mt-7 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/40">
                        <table className="w-full border-collapse text-left text-sm text-slate-300">
                          <caption className="sr-only">{article.comparison.title}</caption>
                          <thead className="hidden md:table-header-group">
                            <tr className="border-b border-slate-800 bg-slate-900/70 text-xs uppercase tracking-[0.18em] text-slate-500">
                              <th scope="col" className="px-5 py-4 font-semibold">Критерий</th>
                              <th scope="col" className="px-5 py-4 font-semibold">{article.comparison.leftColumnTitle}</th>
                              <th scope="col" className="px-5 py-4 font-semibold">{article.comparison.rightColumnTitle}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {article.comparison.rows.map((row) => (
                              <tr key={row.criterion} className="block border-b border-slate-800/70 p-4 last:border-b-0 md:table-row md:p-0 odd:md:bg-white/[0.015]">
                                <th scope="row" className="block pb-3 text-base font-semibold text-white md:table-cell md:px-5 md:py-4 md:align-top">
                                  {row.criterion}
                                </th>
                                <td className="block pb-3 leading-relaxed md:table-cell md:px-5 md:py-4 md:align-top">
                                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 md:hidden">{article.comparison.leftColumnTitle}</span>
                                  {row.left}
                                </td>
                                <td className="block leading-relaxed md:table-cell md:px-5 md:py-4 md:align-top">
                                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 md:hidden">{article.comparison.rightColumnTitle}</span>
                                  {row.right}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>

                    <section id="decision-questions" className="mx-auto mt-16 max-w-[46rem] scroll-mt-28">
                      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                        {article.decisionQuestions.title}
                      </h2>
                      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                        {article.decisionQuestions.introduction}
                      </p>
                      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                        {article.decisionQuestions.questions.map((question, index) => (
                          <li key={question} className="rounded-2xl border border-slate-800 bg-slate-900/45 p-4">
                            <div className="mb-2 text-xs font-bold text-indigo-300">{String(index + 1).padStart(2, '0')}</div>
                            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{question}</p>
                          </li>
                        ))}
                      </ol>
                    </section>

                    <section id="conclusion" className="mx-auto mt-16 max-w-[46rem] scroll-mt-28 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/8 p-6 sm:p-8">
                      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                        {article.conclusion.title}
                      </h2>
                      <div className="mt-5 space-y-5 text-base leading-8 text-indigo-100/90 sm:text-lg sm:leading-9">
                        {article.conclusion.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </section>

                    <section id="related-services" className="mx-auto mt-16 max-w-5xl scroll-mt-28 border-t border-slate-800 pt-12">
                      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                        Связанные услуги
                      </h2>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {article.relatedServiceLinks.map((service) => (
                          <a
                            key={service.href}
                            href={service.href}
                            className="group rounded-3xl border border-slate-800 bg-slate-900/45 p-5 transition-colors hover:border-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                          >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                              <CheckCircle2 size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-white">{service.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors group-hover:text-indigo-200">
                              Перейти к услуге
                              <ArrowRight size={16} />
                            </span>
                          </a>
                        ))}
                      </div>
                    </section>

                    <section className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-indigo-500/25 bg-gradient-to-br from-indigo-600/18 to-slate-900 p-6 shadow-2xl shadow-indigo-950/20 sm:p-8 lg:p-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
                        <MessageCircle size={24} />
                      </div>
                      {article.cta.eyebrow ? (
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">{article.cta.eyebrow}</p>
                      ) : null}
                      <h2 className={`${article.cta.eyebrow ? 'mt-3' : ''} max-w-3xl text-3xl font-bold text-white sm:text-4xl`}>
                        {article.cta.title}
                      </h2>
                      <p className="mt-4 max-w-3xl text-base leading-relaxed text-indigo-100/85 sm:text-lg">
                        {article.cta.description}
                      </p>
                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href={article.cta.primaryHref}
                          className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                        >
                          {article.cta.primaryLabel}
                        </a>
                        {article.cta.secondaryHref && article.cta.secondaryLabel ? (
                          <a
                            href={article.cta.secondaryHref}
                            className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3.5 font-bold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                          >
                            {article.cta.secondaryLabel}
                          </a>
                        ) : null}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
