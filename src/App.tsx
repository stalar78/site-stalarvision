import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { initializeAnalytics, trackPageView, trackYandexMetrikaPageView } from '@/lib/utils';

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
    initializeAnalytics();
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
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
