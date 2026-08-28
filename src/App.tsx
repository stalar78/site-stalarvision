import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  type AnalyticsConsent,
  ANALYTICS_SETTINGS_EVENT,
  getAnalyticsConsent,
  initializeAnalytics,
  setAnalyticsConsent,
  trackPageView,
  trackYandexMetrikaPageView,
} from '@/lib/utils';
import { AmbientCursorGlow } from '@/components/AmbientCursorGlow';

const AnalyticsConsentBanner = () => {
  const [consent, setConsent] = useState<AnalyticsConsent>(() => getAnalyticsConsent());

  useEffect(() => {
    const handleOpenSettings = () => setConsent('unknown');

    window.addEventListener(ANALYTICS_SETTINGS_EVENT, handleOpenSettings);
    return () => window.removeEventListener(ANALYTICS_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  const chooseConsent = (nextConsent: Exclude<AnalyticsConsent, 'unknown'>) => {
    const shouldReloadAfterReject =
      nextConsent === 'rejected' && window.__stalarAnalyticsInitialized;

    setAnalyticsConsent(nextConsent);
    setConsent(nextConsent);

    if (nextConsent === 'accepted') {
      initializeAnalytics();
      return;
    }

    if (shouldReloadAfterReject) {
      window.location.reload();
    }
  };

  if (consent !== 'unknown') {
    return null;
  }

  return (
    <section
      aria-label="Настройки аналитики"
      className="fixed inset-x-3 bottom-3 z-50 rounded-3xl border border-slate-700 bg-slate-950/95 p-4 text-slate-200 shadow-2xl shadow-slate-950/40 backdrop-blur sm:inset-x-auto sm:right-5 sm:max-w-xl sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-bold text-white">Необязательная аналитика</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Сайт использует Яндекс Метрику и Top.Mail.Ru только после разрешения. Можно отказаться: сайт, форма и ссылки продолжат работать.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:min-w-36">
          <button
            type="button"
            onClick={() => chooseConsent('accepted')}
            className="rounded-2xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
          >
            Разрешить
          </button>
          <button
            type="button"
            onClick={() => chooseConsent('rejected')}
            className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
          >
            Отказаться
          </button>
        </div>
      </div>
    </section>
  );
};

/**
 * Layout компонент (опционально)
 *
 * Можно использовать для общей обёртки страниц:
 * - Шапка (Header)
 * - Подвал (Footer)
 * - Навигация
 *
 * Для использования оберните routes in router.tsx:
 *
 * {
 *   element: <App />,
 *   children: [
 *     { path: '/', element: <Home /> },
 *     { path: '/about', element: <About /> },
 *   ]
 * }
 */
export default function App() {
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (getAnalyticsConsent() === 'accepted') {
      initializeAnalytics();
    }
  }, []);

  useEffect(() => {
    // Initial page view is already queued in initializeAnalytics.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Track page views for SPA route transitions.
    trackPageView();
    trackYandexMetrikaPageView();
  }, [location.pathname]);

  return (
    <>
      {/* <Header /> */}
      <AmbientCursorGlow />
      <Suspense fallback={<div className="min-h-screen bg-slate-950" aria-hidden="true" />}>
        <Outlet />
      </Suspense>
      <AnalyticsConsentBanner />
      {/* <Footer /> */}
    </>
  );
}
