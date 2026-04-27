import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Top.Mail.Ru analytics types
declare global {
  interface Window {
    _tmr?: Array<{ id: string; type: string; start?: number }>;
    ym?: (counterId: number, action: string, ...params: any[]) => void;
  }
}

export function trackPageView() {
  if (typeof window !== 'undefined' && window._tmr) {
    try {
      window._tmr.push({ id: '3759601', type: 'pageView', start: new Date().getTime() });
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
      window.ym(108788776, 'hit', window.location.href, {
        referrer: document.referrer,
        title: document.title,
      });
    } catch (error) {
      // Silently ignore if analytics fails
    }
  }
}
