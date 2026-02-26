import { Check } from 'lucide-react'
import type { Locale } from '../types'
import { commonPricingBenefits, pricingData } from '../config/pricingData'
import { useContactModal } from '../context/ContactModalContext'
import { useLanguage } from '../context/LanguageContext'

const includedBenefitsLabel: Record<Locale, string> = {
  ro: 'Beneficii incluse',
  ru: 'Включённые преимущества',
  en: 'Included benefits',
}

export function PricingCards() {
  const { locale } = useLanguage()
  const { openModal } = useContactModal()

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingData.map((plan, index) => (
        <article
          key={plan.id}
          className={`group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-glow ${
            index === 1 ? 'ring-1 ring-electric/50' : ''
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan">{plan.name[locale]}</p>
            {plan.badge ? (
              <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan">
                {plan.badge[locale]}
              </span>
            ) : null}
          </div>

          <h3 className="mt-2 font-manrope text-2xl font-semibold text-white">{plan.subtitle[locale]}</h3>
          <p className="mt-4 text-3xl font-bold text-white">{plan.price[locale]}</p>

          <ul className="mt-5 space-y-3 text-sm text-muted">
            {plan.features[locale].map(item => (
              <li key={item} className="flex items-start gap-2">
                <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-[11px] uppercase tracking-[0.15em] text-white/70">{includedBenefitsLabel[locale]}</p>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              {commonPricingBenefits[locale].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={14} className="mt-0.5 shrink-0 text-electric" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4">
            <ul className="space-y-2 text-xs text-slate-300">
              {plan.specificBenefits[locale].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={14} className="mt-0.5 shrink-0 text-electric" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-5">
            {plan.extra ? <p className="rounded-xl bg-electric/15 p-3 text-sm text-cyan">{plan.extra[locale]}</p> : null}
            {plan.afterExtraNote ? <p className="mt-2 text-xs text-muted">{plan.afterExtraNote[locale]}</p> : null}

            <button
              type="button"
              onClick={openModal}
              className="mt-6 w-full rounded-xl bg-electric px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan"
            >
              {plan.button[locale]}
            </button>

            {plan.noteUnderButton ? <p className="mt-2 text-xs text-muted">{plan.noteUnderButton[locale]}</p> : null}
          </div>
        </article>
      ))}
    </div>
  )
}
