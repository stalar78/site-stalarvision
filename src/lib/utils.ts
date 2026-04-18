import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Top.Mail.Ru analytics types
declare global {
  interface Window {
    _tmr?: Array<{ id: string; type: string; start?: number }>;
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
