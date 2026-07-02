import enMessages from '@/messages/en.json'
import idMessages from '@/messages/id.json'

type Messages = typeof enMessages

const messages: Record<string, Messages> = {
  en: enMessages,
  id: idMessages,
}

export function getMessages(locale: string): Messages {
  return messages[locale] || messages.en
}

export function getLocaleFromCookie(): string {
  if (typeof document === 'undefined') return 'en'
  
  const cookies = document.cookie.split('; ')
  const localeCookie = cookies.find(row => row.startsWith('locale='))
  
  if (localeCookie) {
    const locale = localeCookie.split('=')[1]
    return ['en', 'id'].includes(locale) ? locale : 'en'
  }
  
  return 'en'
}

export function setLocaleCookie(locale: string) {
  document.cookie = `locale=${locale};path=/;max-age=31536000;SameSite=Lax`
}

export function getBrowserLocale(): string {
  if (typeof navigator === 'undefined') return 'en'
  
  const browserLang = navigator.language.split('-')[0]
  return ['en', 'id'].includes(browserLang) ? browserLang : 'en'
}

export function formatNumberByLocale(
  number: number,
  locale: string = 'en'
): string {
  return new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US').format(number)
}

export function formatCurrencyByLocale(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en'
): string {
  return new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US', {
    style: 'currency',
    currency: locale === 'id' ? 'IDR' : currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(locale === 'id' ? amount * 15000 : amount)
}