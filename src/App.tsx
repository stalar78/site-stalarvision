import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { trackPageView, trackYandexMetrikaPageView } from '@/lib/utils';

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
    // Track page views for Top.Mail.Ru in SPA
    trackPageView();

    // Яндекс Метрика: отправляем hit только при смене маршрута, не на первом mount
    if (!isInitialMount.current) {
      trackYandexMetrikaPageView();
    } else {
      isInitialMount.current = false;
    }
  }, [location.pathname]);

  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}