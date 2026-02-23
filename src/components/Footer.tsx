import { NavLink } from 'react-router-dom'
import { contactInfo, navLabels } from '../content/siteContent'
import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { locale } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-obsidian">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-manrope text-2xl font-bold text-white">Siteuri Abonament</p>
          <p className="mt-3 max-w-sm text-sm text-muted">
            {locale === 'ro'
              ? 'Website-uri premium pe abonament lunar. Rapid, clar, orientat pe rezultate.'
              : 'Премиальные сайты по ежемесячной подписке. Быстро, понятно и с фокусом на результат.'}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
            {locale === 'ro' ? 'Meniu' : 'Меню'}
          </p>
          <div className="flex flex-col gap-2">
            {navLabels[locale].map(item => (
              <NavLink key={item.key} to={item.path} className="text-sm text-muted transition hover:text-white">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan">
            {locale === 'ro' ? 'Contact permanent' : 'Постоянный контакт'}
          </p>
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
