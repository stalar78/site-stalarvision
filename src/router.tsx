import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'

const WebsiteImprovement = lazy(() => import('./pages/WebsiteImprovement'))
const WebsiteAudit = lazy(() => import('./pages/WebsiteAudit'))
const WebsiteLaunch = lazy(() => import('./pages/WebsiteLaunch'))
const WebApplicationDevelopment = lazy(() => import('./pages/WebApplicationDevelopment'))
const Etrn = lazy(() => import('./pages/Etrn'))
const CakeAndShapeCase = lazy(() => import('./pages/CakeAndShapeCase'))
const EisProcurementAnalyzerCase = lazy(() => import('./pages/EisProcurementAnalyzerCase'))
const Articles = lazy(() => import('./pages/Articles'))
const SiteNoLeadsArticle = lazy(() => import('./pages/SiteNoLeadsArticle'))
const WebServiceOrPersonalAccountArticle = lazy(() => import('./pages/WebServiceOrPersonalAccountArticle'))
const WordPressOrCustomDevelopmentArticle = lazy(() => import('./pages/WordPressOrCustomDevelopmentArticle'))
const ProjectPreparationArticle = lazy(() => import('./pages/ProjectPreparationArticle'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const ConsentPersonalData = lazy(() => import('./pages/ConsentPersonalData'))
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
        path: 'consent-personal-data',
        element: <ConsentPersonalData />,
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
        path: 'etrn',
        element: <Etrn />,
      },
      {
        path: 'cases/cake-and-shape',
        element: <CakeAndShapeCase />,
      },
      {
        path: 'cases/eis-procurement-analyzer',
        element: <EisProcurementAnalyzerCase />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'articles/pochemu-sajt-ne-prinosit-zayavki',
        element: <SiteNoLeadsArticle />,
      },
      {
        path: 'articles/kogda-biznesu-nuzhen-veb-servis-ili-lichnyj-kabinet',
        element: <WebServiceOrPersonalAccountArticle />,
      },
      {
        path: 'articles/wordpress-ili-individualnaya-razrabotka',
        element: <WordPressOrCustomDevelopmentArticle />,
      },
      {
        path: 'articles/podgotovka-k-razrabotke-sajta-ili-veb-prilozheniya',
        element: <ProjectPreparationArticle />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
