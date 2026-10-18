/**
 * Минимальная интеграция с Telegram Mini App.
 * SDK подключается в index.html (telegram-web-app.js) и создаёт window.Telegram.WebApp.
 * Локально (вне Telegram) объект отсутствует — приложение работает как обычный сайт.
 */

interface TelegramWebApp {
  ready: () => void
  expand: () => void
  colorScheme?: 'light' | 'dark'
}

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp }
  }
}

let tg: TelegramWebApp | null = null

export function initTelegram(): void {
  const app = window.Telegram?.WebApp
  if (!app) return
  tg = app
  try {
    tg.ready()
    tg.expand()
  } catch (e) {
    console.warn('Не удалось инициализировать Telegram WebApp', e)
  }
}

export function isTelegram(): boolean {
  return tg !== null
}

/** Цветовая схема из Telegram ('light' | 'dark') или null, если не в Telegram. */
export function telegramColorScheme(): 'light' | 'dark' | null {
  const scheme = tg?.colorScheme
  return scheme === 'light' || scheme === 'dark' ? scheme : null
}
