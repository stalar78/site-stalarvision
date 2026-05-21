import { useEffect } from 'react';
import { FileText, Mail, Send, ShieldCheck } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { termsPage } from '@/data/legal';
import { profile } from '@/data/profile';
import { applyDocumentMeta } from '@/lib/meta';

export default function Terms() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: termsPage.seo.title,
      description: termsPage.seo.description,
      ogTitle: termsPage.seo.title,
      ogDescription: termsPage.seo.description,
      ogType: profile.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      ogUrl: `${profile.seo.siteUrl}${profile.seo.termsPath}`,
      ogImage: profile.seo.ogImageUrl,
      canonical: `${profile.seo.siteUrl}${profile.seo.termsPath}`,
      twitterCard: profile.seo.twitterCard,
      twitterTitle: termsPage.seo.title,
      twitterDescription: termsPage.seo.description,
      twitterImage: profile.seo.ogImageUrl,
      themeColor: profile.seo.themeColor,
      robots: 'index,follow',
    });

    return () => {
      applyDocumentMeta({
        lang: profile.seo.htmlLang,
        title: profile.seo.title,
        description: profile.seo.description,
        ogTitle: profile.seo.title,
        ogDescription: profile.seo.description,
        ogType: profile.seo.ogType,
        ogLocale: profile.seo.ogLocale,
        ogSiteName: profile.brand.fullName,
        ogUrl: `${profile.seo.siteUrl}${profile.seo.defaultPath}`,
        ogImage: profile.seo.ogImageUrl,
        canonical: `${profile.seo.siteUrl}${profile.seo.defaultPath}`,
        twitterCard: profile.seo.twitterCard,
        twitterTitle: profile.seo.title,
        twitterDescription: profile.seo.description,
        twitterImage: profile.seo.ogImageUrl,
        themeColor: profile.seo.themeColor,
        robots: 'index,follow',
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main className="pt-28 pb-20 sm:pt-32 sm:pb-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 sm:mb-6 sm:text-sm">
              <ShieldCheck size={14} />
              <span>{termsPage.hero.eyebrow}</span>
            </div>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:mb-6 sm:text-4xl md:text-6xl">
              {termsPage.hero.title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {termsPage.hero.description}
            </p>
          </div>

          <div className="grid gap-6">
            {termsPage.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    {index % 2 === 0 ? <FileText size={20} /> : <ShieldCheck size={20} />}
                  </div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">{section.title}</h2>
                </div>

                {section.paragraphs && (
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {section.items && (
                  <ul className="space-y-3 text-slate-300 leading-relaxed">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.links && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <a
                        key={`${link.label}-${link.href}`}
                        href={link.href}
                        className="inline-flex items-center rounded-2xl border border-indigo-500/25 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 transition-colors hover:border-indigo-500/40 hover:text-indigo-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-6 sm:p-8">
              <div className="mb-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={profile.contacts.email.href}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:opacity-90"
                >
                  <Mail size={18} />
                  <span>Написать на email</span>
                </a>
                <a
                  href={profile.contacts.telegram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-bold text-white transition hover:border-white/30"
                >
                  <Send size={18} />
                  <span>Написать в Telegram</span>
                </a>
              </div>
              <p className="text-indigo-100/90 leading-relaxed">{termsPage.note}</p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
