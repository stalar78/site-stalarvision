import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/utils';

/**
 * Layout компонент (опционально)
 * 
 * Можно использовать для общей обёртки страниц:
 * - Шапка (Header)
 * - Подвал (Footer)
 * - Навигация
 * 
 * Для использования оберните routes в router.tsx:
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

  useEffect(() => {
    // Track page views for Top.Mail.Ru in SPA
    trackPageView();
  }, [location.pathname]);

  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}