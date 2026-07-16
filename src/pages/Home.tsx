import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { SoftwareCases } from '../components/SoftwareCases';
import { Process } from '../components/Process';
import { TechStack } from '../components/TechStack';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { profile } from '../data/profile';
import { homeStructuredData } from '../data/structuredData';
import { scrollToCurrentHashWithRetry } from '../lib/hashScroll';
import { applyDocumentMeta } from '../lib/meta';
import { applyDocumentStructuredData } from '../lib/structuredData';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
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

    return applyDocumentStructuredData(homeStructuredData);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    scrollToCurrentHashWithRetry({ behavior: 'auto' });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <SoftwareCases />
        <Process />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
