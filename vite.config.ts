import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const defaultAllowedHosts = ['localhost', '127.0.0.1', '::1']

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const allowExternalHost = env.VITE_DEV_ALLOW_NETWORK === 'true'
  const extraAllowedHosts = (env.VITE_DEV_ALLOWED_HOSTS ?? '')
    .split(',')
    .map((host) => host.trim())
    .filter(Boolean)

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],

    // Кэш и временные файлы Vite хранятся в проекте, а не в node_modules
    // потому что node_modules может быть symlink на readonly папку
    cacheDir: '.vite',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      // По умолчанию сервер доступен только локально.
      // Для доступа из локальной сети явно задайте VITE_DEV_ALLOW_NETWORK=true.
      host: allowExternalHost ? '0.0.0.0' : '127.0.0.1',
      port: 5173,
      allowedHosts: [...new Set([...defaultAllowedHosts, ...extraAllowedHosts])],
      hmr: {
        overlay: false,
      },
      // Временные файлы сервера в .vite вместо node_modules/.vite-temp
      fs: {
        cachedChecks: false,
      },
    },

    // Оптимизация зависимостей в локальную папку
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          websiteImprovement: path.resolve(__dirname, 'dorabotka-sajta/index.html'),
          websiteAudit: path.resolve(__dirname, 'audit-sajta/index.html'),
        },
      },
    },

    optimizeDeps: {
      // Временная папка для оптимизированных зависимостей
      cacheDir: '.vite',
    },
  }
})
