import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router'
import { profile } from './data/profile'
import { applyDocumentMeta } from './lib/meta'

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
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
