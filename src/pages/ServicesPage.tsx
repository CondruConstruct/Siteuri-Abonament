import { Check } from 'lucide-react'
import { PricingCards } from '../components/PricingCards'
import { Section } from '../components/Section'
import { pricingData } from '../config/pricingData'
import { ctaLabels, seoByPage, servicesContent } from '../content/siteContent'
import { useContactModal } from '../context/ContactModalContext'
import { useLanguage } from '../context/LanguageContext'
import { useSeo } from '../hooks/useSeo'

export function ServicesPage() {
  const { locale } = useLanguage()
  const { openModal } = useContactModal()

  const seo = seoByPage.services[locale]
  useSeo(seo.title, seo.description)

  const comparisonRows = [
    {
      name: { ro: 'Număr pagini', ru: 'Количество страниц' },
      values: [
        pricingData[0].subtitle[locale],
        pricingData[1].subtitle[locale],
        pricingData[2].subtitle[locale],
      ],
    },
    {
      name: { ro: '2 limbi RO/RU', ru: '2 языка RO/RU' },
      values: ['✓', '✓', '✓'],
    },
    {
      name: { ro: 'Dashboard produse', ru: 'Панель товаров' },
      values: ['—', '—', '✓'],
    },
    {
      name: { ro: 'Produse nelimitate', ru: 'Неограниченные товары' },
      values: ['—', '—', '✓'],
    },
    {
      name: { ro: 'Sistem de plată inclus', ru: 'Система оплаты включена' },
      values: ['—', '—', locale === 'ro' ? 'Opțional (+50 EUR)' : 'Опционально (+50 EUR)'],
    },
  ]

  return (
    <>
      <Section title={servicesContent.title[locale]} description={servicesContent.intro[locale]} className="pt-16">
        <PricingCards />
      </Section>

      <Section title={locale === 'ro' ? 'Tabel comparativ' : 'Сравнительная таблица'}>
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="min-w-[680px] w-full border-collapse text-left text-sm">
            <thead className="bg-white/5 text-white">
              <tr>
                <th className="px-4 py-4 font-semibold">{locale === 'ro' ? 'Caracteristică' : 'Параметр'}</th>
                {pricingData.map(plan => (
                  <th key={plan.id} className="px-4 py-4 font-semibold">
                    {plan.name[locale]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(row => (
                <tr key={row.name[locale]} className="border-t border-white/10 text-muted">
                  <td className="px-4 py-4 text-white/90">{row.name[locale]}</td>
                  {row.values.map((value, index) => (
                    <td key={`${value}-${index}`} className="px-4 py-4">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title={servicesContent.includesTitle[locale]}>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <ul className="space-y-3">
            {servicesContent.includes[locale].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={openModal}
            className="rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan"
          >
            {ctaLabels.askOffer[locale]}
          </button>
        </div>
      </Section>

      <Section title={servicesContent.firstWeekTitle[locale]}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicesContent.firstWeek[locale].map((item, index) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="mb-3 text-xs uppercase tracking-widest text-cyan">0{index + 1}</p>
              <p className="text-sm text-muted">{item}</p>
            </article>
          ))}
        </div>
        <button
          type="button"
          onClick={openModal}
          className="mt-6 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          {ctaLabels.contact[locale]}
        </button>
      </Section>

      <Section title={servicesContent.maintenanceTitle[locale]}>
        <p className="max-w-3xl text-base text-muted">{servicesContent.maintenance[locale]}</p>
        <button
          type="button"
          onClick={openModal}
          className="mt-6 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan"
        >
          {ctaLabels.choosePlan[locale]}
        </button>
      </Section>

      <Section title={servicesContent.extrasTitle[locale]}>
        <div className="grid gap-3 md:grid-cols-2">
          {servicesContent.extras[locale].map(item => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-muted">
              {item}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={openModal}
          className="mt-6 rounded-full border border-cyan/50 px-5 py-3 text-sm font-semibold text-cyan transition hover:bg-cyan/15"
        >
          {ctaLabels.askOffer[locale]}
        </button>
      </Section>
    </>
  )
}
