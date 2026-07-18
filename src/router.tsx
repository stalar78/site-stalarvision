import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'

const WebsiteImprovement = lazy(() => import('./pages/WebsiteImprovement'))
const WebsiteAudit = lazy(() => import('./pages/WebsiteAudit'))
const WebsiteLaunch = lazy(() => import('./pages/WebsiteLaunch'))
const WebApplicationDevelopment = lazy(() => import('./pages/WebApplicationDevelopment'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

/**
 * Роутер приложения
 * 
 * Добавляйте новые страницы в массив routes:
 * 
 * import About from './pages/About'
 * import Privacy from './pages/Privacy'
 * 
 * { path: '/about', element: <About /> },
 * { path: '/privacy', element: <Privacy /> },
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'dorabotka-sajta',
        element: <WebsiteImprovement />,
      },
      {
        path: 'audit-sajta',
        element: <WebsiteAudit />,
      },
      {
        path: 'razrabotka-sajta',
        element: <WebsiteLaunch />,
      },
      {
        path: 'razrabotka-veb-prilozhenij',
        element: <WebApplicationDevelopment />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
