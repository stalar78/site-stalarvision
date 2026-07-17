import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Top.Mail.Ru analytics types
declare global {
  interface Window {
    _tmr?: Array<{ id: string; type: string; start?: number }>;
    ym?: ((counterId: number, action: string, ...params: any[]) => void) & {
      a?: unknown[];
      l?: number;
    };
    __stalarAnalyticsInitialized?: boolean;
    __stalarTopMailInitialViewSent?: boolean;
    __stalarYandexInitialized?: boolean;
  }
}

const TOP_MAIL_COUNTER_ID = '3759601'
const YANDEX_METRIKA_COUNTER_ID = 108788776

export const YANDEX_METRIKA_GOALS = {
  contactFormSuccess: 'contact_form_success',
} as const

function injectScriptOnce(src: string, id: string): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  if (document.getElementById(id)) {
    return
  }

  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export function initializeAnalytics() {
  if (typeof window === 'undefined') {
    return
  }

  if (window.__stalarAnalyticsInitialized) {
    return
  }

  window.__stalarAnalyticsInitialized = true

  window._tmr = window._tmr || []
  if (!window.__stalarTopMailInitialViewSent) {
    window._tmr.push({ id: TOP_MAIL_COUNTER_ID, type: 'pageView', start: Date.now() })
    window.__stalarTopMailInitialViewSent = true
  }
  injectScriptOnce('https://top-fwz1.mail.ru/js/code.js', 'tmr-code')

  if (!window.ym) {
    const ymQueue = function (...args: unknown[]) {
      (ymQueue.a = ymQueue.a || []).push(args)
    } as NonNullable<Window['ym']>
    ymQueue.l = Date.now()
    window.ym = ymQueue
  }

  if (!window.__stalarYandexInitialized && window.ym) {
    window.ym(YANDEX_METRIKA_COUNTER_ID, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: 'dataLayer',
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce: true,
      trackLinks: true,
    })
    window.__stalarYandexInitialized = true
  }

  injectScriptOnce(`https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_COUNTER_ID}`, 'ym-metrika-code')
}

export function trackPageView() {
  if (typeof window !== 'undefined') {
    try {
      window._tmr = window._tmr || []
      window._tmr.push({ id: TOP_MAIL_COUNTER_ID, type: 'pageView', start: Date.now() });
    } catch (error) {
      // Silently ignore if analytics fails
    }
  }
}

/**
 * Отправляет pageview в Яндекс Метрику.
 * Безопасно работает, если ym ещё не загружен.
 */
export function trackYandexMetrikaPageView() {
  if (typeof window !== 'undefined' && window.ym) {
    try {
      window.ym(YANDEX_METRIKA_COUNTER_ID, 'hit', window.location.href, {
        referrer: document.referrer,
        title: document.title,
      });
    } catch (error) {
      // Silently ignore if analytics fails
    }
  }
}

export function trackYandexMetrikaGoal(
  goalIdentifier: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === 'undefined' || !window.ym) {
    return
  }

  const normalizedGoalIdentifier = goalIdentifier.trim()
  if (!normalizedGoalIdentifier) {
    return
  }

  try {
    window.ym(
      YANDEX_METRIKA_COUNTER_ID,
      'reachGoal',
      normalizedGoalIdentifier,
      params,
    )
  } catch (error) {
    // Silently ignore if analytics fails
  }
}
