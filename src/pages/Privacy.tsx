import { useEffect } from 'react';
import { Building2, FileText, Mail, Send, ShieldCheck } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { privacyPage } from '@/data/legal';
import { profile } from '@/data/profile';
import { applyDocumentMeta } from '@/lib/meta';

export default function Privacy() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: privacyPage.seo.title,
      description: privacyPage.seo.description,
      ogTitle: privacyPage.seo.title,
      ogDescription: privacyPage.seo.description,
      ogType: profile.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
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
        themeColor: profile.seo.themeColor,
        robots: 'index,follow',
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <ShieldCheck size={14} />
              <span>{privacyPage.hero.eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {privacyPage.hero.title}
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              {privacyPage.hero.description}
            </p>
          </div>

          <div className="grid gap-6">
            {privacyPage.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    {index % 2 === 0 ? <FileText size={20} /> : <ShieldCheck size={20} />}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
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
              </section>
            ))}

            <section
              id={privacyPage.requisites.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <Building2 size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">{privacyPage.requisites.title}</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {privacyPage.requisites.items.map((item) => (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white hover:text-indigo-400 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <a
                  href={profile.contacts.email.href}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-950 font-bold hover:opacity-90 transition"
                >
                  <Mail size={18} />
                  <span>Написать на email</span>
                </a>
                <a
                  href={profile.contacts.telegram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/15 text-white font-bold hover:border-white/30 transition"
                >
                  <Send size={18} />
                  <span>Написать в Telegram</span>
                </a>
              </div>
              <p className="text-indigo-100/90 leading-relaxed">
                {privacyPage.note}
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
