import { useLanguage } from '../context/LanguageContext'

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="inline-flex rounded-full border border-white/15 bg-white/5 p-1 text-xs font-semibold">
      <button
        type="button"
        onClick={() => setLocale('ro')}
        className={`rounded-full px-3 py-1 transition ${locale === 'ro' ? 'bg-electric text-white shadow-glow' : 'text-muted hover:text-white'}`}
      >
        RO
      </button>
      <button
        type="button"
        onClick={() => setLocale('ru')}
        className={`rounded-full px-3 py-1 transition ${locale === 'ru' ? 'bg-electric text-white shadow-glow' : 'text-muted hover:text-white'}`}
      >
        RU
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded-full px-3 py-1 transition ${locale === 'en' ? 'bg-electric text-white shadow-glow' : 'text-muted hover:text-white'}`}
      >
        EN
      </button>
    </div>
  )
}
