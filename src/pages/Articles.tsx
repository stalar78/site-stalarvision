import { useEffect } from 'react';
import { ArrowRight, BookOpen, MessageCircle } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { articlesIndexPage, publishedArticles } from '@/data/articles';
import { profile } from '@/data/profile';
import { articlesIndexStructuredData } from '@/data/structuredData';
import { formatRussianCalendarDate } from '@/lib/date';
import { applyDocumentMeta } from '@/lib/meta';
import { applyDocumentStructuredData } from '@/lib/structuredData';

export default function Articles() {
  const [featuredArticle] = publishedArticles;

  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: articlesIndexPage.seo.title,
      description: articlesIndexPage.seo.description,
      ogTitle: articlesIndexPage.seo.title,
      ogDescription: articlesIndexPage.seo.description,
      ogType: articlesIndexPage.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: articlesIndexPage.seo.canonical,
      ogImage: articlesIndexPage.seo.socialImage,
      canonical: articlesIndexPage.seo.canonical,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: articlesIndexPage.seo.title,
      twitterDescription: articlesIndexPage.seo.description,
      twitterImage: articlesIndexPage.seo.socialImage,
      themeColor: profile.seo.themeColor,
      robots: articlesIndexPage.seo.robots,
    });

    return applyDocumentStructuredData(articlesIndexStructuredData);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pb-14 pt-32 sm:pb-18 sm:pt-36">
          <div aria-hidden="true" className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[130px]" />
          <div aria-hidden="true" className="absolute right-[-8rem] top-36 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 sm:mb-6">
                <BookOpen size={14} />
                <span>Материалы</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Практические материалы о сайтах и веб-приложениях
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Здесь собраны практические материалы о выборе формата проекта, планировании разработки сайта или веб-приложения, составе работ, эксплуатации, безопасности и спокойной работе с разработчиком.
              </p>
              <p className="mt-5 max-w-3xl border-l border-indigo-300/35 pl-5 text-sm leading-relaxed text-slate-400 sm:text-base">
                Раздел помогает заранее понять ограничения решений, подготовить вопросы и выбрать первый разумный шаг без лишнего усложнения проекта.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7 flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Новый материал</p>
                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Редакционный разбор</h2>
              </div>
            </div>

            <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_20rem] 2xl:items-start">
              <article className="min-w-0 overflow-hidden rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.14),transparent_32%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] shadow-2xl shadow-slate-950/35">
                <div className="grid gap-0 2xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
                  <div className="order-2 min-w-0 flex flex-col justify-center p-6 sm:p-8 2xl:order-1 2xl:p-10">
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-cyan-200">
                        {featuredArticle.category}
                      </span>
                      <time dateTime={featuredArticle.publishedAt}>
                        {formatRussianCalendarDate(featuredArticle.publishedAt)}
                      </time>
                    </div>
                    <h3 className="max-w-3xl break-words text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl 2xl:text-5xl">
                      {featuredArticle.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                      {featuredArticle.excerpt}
                    </p>
                    <a
                      href={featuredArticle.path}
                      className="mt-7 inline-flex w-fit items-center gap-2 rounded-2xl border border-indigo-400/25 bg-indigo-500/10 px-5 py-3 text-sm font-semibold text-indigo-100 transition-colors hover:border-indigo-300/45 hover:bg-indigo-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                    >
                      Читать материал
                      <ArrowRight size={16} />
                    </a>
                  </div>
                  <a
                    href={featuredArticle.path}
                    className="group order-1 block min-w-0 overflow-hidden bg-slate-950/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-300/70 2xl:order-2"
                    aria-label={`Читать материал: ${featuredArticle.title}`}
                  >
                    <img
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.coverAlt}
                      width={featuredArticle.coverWidth}
                      height={featuredArticle.coverHeight}
                      className="h-full min-h-[15rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] sm:min-h-[20rem] 2xl:min-h-full"
                      style={{ objectPosition: featuredArticle.coverPosition }}
                    />
                  </a>
                </div>
              </article>

              <aside className="min-w-0 rounded-[2rem] border border-indigo-500/20 bg-indigo-500/10 p-6 sm:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
                  <MessageCircle size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Есть реальная задача?</h2>
                <p className="mt-3 text-sm leading-relaxed text-indigo-100/85 sm:text-base">
                  Можно коротко описать текущую ситуацию, ограничения и ожидаемый результат. Я помогу определить, с какого формата работ разумнее начать.
                </p>
                <a
                  href="/#contact"
                  className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Обсудить задачу
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
