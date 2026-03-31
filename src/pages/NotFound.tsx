import { useEffect } from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { applyDocumentMeta } from '@/lib/meta';
import { profile } from '@/data/profile';

export default function NotFound() {
  useEffect(() => {
    applyDocumentMeta({
      lang: profile.seo.htmlLang,
      title: `Страница не найдена | ${profile.brand.fullName}`,
      description:
        `Запрошенная страница не найдена. Вернитесь на главную ${profile.brand.fullName} или используйте основные разделы сайта.`,
      ogTitle: `Страница не найдена | ${profile.brand.fullName}`,
      ogDescription:
        `Запрошенная страница не найдена. Вернитесь на главную ${profile.brand.fullName}.`,
      ogType: profile.seo.ogType,
      ogLocale: profile.seo.ogLocale,
      ogSiteName: profile.brand.fullName,
      themeColor: profile.seo.themeColor,
      robots: 'noindex,nofollow',
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
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="max-w-xl w-full text-center rounded-[2rem] border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-10 sm:p-12 shadow-2xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
          <Compass size={30} />
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-4">
          Ошибка маршрута
        </div>
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-4">404</h1>
        <p className="text-xl text-slate-300 mb-3">Страница не найдена</p>
        <p className="text-slate-400 leading-relaxed mb-8">
          Возможно, ссылка устарела или адрес был введён с ошибкой. Можно вернуться на главную и продолжить просмотр сайта.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/20"
        >
          <ArrowLeft size={18} />
          На главную
        </Link>
      </div>
    </div>
  );
}
