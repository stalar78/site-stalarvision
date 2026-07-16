import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import WebsiteImprovement from './pages/WebsiteImprovement'

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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
