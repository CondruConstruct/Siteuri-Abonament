import type { Locale } from '../types'
import { NavLink } from 'react-router-dom'
import { contactInfo, navLabels } from '../content/siteContent'
import { useLanguage } from '../context/LanguageContext'

const descriptionByLocale: Record<Locale, string> = {
  ro: 'Website-uri premium pe abonament lunar. Rapid, clar, orientat pe rezultate.',
  ru: 'Премиальные сайты по ежемесячной подписке. Быстро, понятно и с фокусом на результат.',
  en: 'Premium websites on monthly subscription. Fast, clear, and focused on results.',
}

const menuLabelByLocale: Record<Locale, string> = {
  ro: 'Meniu',
  ru: 'Меню',
  en: 'Menu',
}

const contactLabelByLocale: Record<Locale, string> = {
  ro: 'Contact permanent',
  ru: 'Постоянный контакт',
  en: 'Always available',
}

export function Footer() {
  const { locale } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-obsidian">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-manrope text-2xl font-bold text-white">Siteuri Abonament</p>
          <p className="mt-3 max-w-sm text-sm text-muted">{descriptionByLocale[locale]}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">{menuLabelByLocale[locale]}</p>
          <div className="flex flex-col gap-2">
            {navLabels[locale].map(item => (
              <NavLink key={item.key} to={item.path} className="text-sm text-muted transition hover:text-white">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">{contactLabelByLocale[locale]}</p>
          <div className="space-y-2 text-sm">
            <a href={`mailto:${contactInfo.email}`} className="block text-white transition hover:text-cyan">
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="block text-white transition hover:text-cyan">
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
