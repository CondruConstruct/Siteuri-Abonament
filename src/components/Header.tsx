import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ctaLabels, navLabels, contactInfo } from '../content/siteContent'
import { useContactModal } from '../context/ContactModalContext'
import { useLanguage } from '../context/LanguageContext'
import { LanguageToggle } from './LanguageToggle'

export function Header() {
  const [open, setOpen] = useState(false)
  const { locale } = useLanguage()
  const { openModal } = useContactModal()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs text-muted sm:px-6 lg:px-8">
        <a href={`mailto:${contactInfo.email}`} className="truncate transition hover:text-white">
          {contactInfo.email}
        </a>
        <a href={`tel:${contactInfo.phone}`} className="shrink-0 transition hover:text-white">
          {contactInfo.phone}
        </a>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="font-manrope text-xl font-bold text-white">
          Siteuri Abonament
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLabels[locale].map(item => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-white' : 'text-muted hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan"
          >
            <Phone size={16} />
            {ctaLabels.contact[locale]}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle mobile menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-obsidian/95 px-4 py-4 lg:hidden">
          <div className="mb-4 flex items-center justify-between gap-3">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => {
                openModal()
                setOpen(false)
              }}
              className="rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white"
            >
              {ctaLabels.contact[locale]}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {navLabels[locale].map(item => (
              <NavLink
                key={item.key}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm ${isActive ? 'bg-white/10 text-white' : 'text-muted hover:bg-white/5 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
