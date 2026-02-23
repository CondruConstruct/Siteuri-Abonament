/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import type { Locale } from '../types'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'site-language'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ro'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'ru' ? 'ru' : 'ro'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale())

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)
    window.localStorage.setItem(STORAGE_KEY, nextLocale)
  }

  const toggleLocale = () => {
    const nextLocale = locale === 'ro' ? 'ru' : 'ro'
    setLocale(nextLocale)
  }

  return <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }
  return context
}
