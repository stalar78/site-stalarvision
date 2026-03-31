import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

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
    element: <Home />,
  },
  // Добавляйте новые страницы здесь:
  // { path: '/about', element: <About /> },
  // { path: '/privacy', element: <Privacy /> },
  // { path: '/blog', element: <Blog /> },
  {
    path: '*',
    element: <NotFound />,
  },
])
