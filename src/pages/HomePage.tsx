import { ArrowDown, Sparkles } from 'lucide-react'
import { PricingCards } from '../components/PricingCards'
import { Section } from '../components/Section'
import { ctaLabels, homeContent, seoByPage, testimonials } from '../content/siteContent'
import { useContactModal } from '../context/ContactModalContext'
import { useLanguage } from '../context/LanguageContext'
import { useSeo } from '../hooks/useSeo'

export function HomePage() {
  const { locale } = useLanguage()
  const { openModal } = useContactModal()

  const seo = seoByPage.home[locale]
  useSeo(seo.title, seo.description)

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:36px_36px] opacity-20" />
        <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-electric/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan/30 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-3xl" data-reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-cyan">
              <Sparkles size={14} />
              {homeContent.heroTag[locale]}
            </p>
            <h1 className="mt-6 font-manrope text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              {homeContent.heroTitle[locale].split('15 EUR').map((part, index, parts) => (
                <span key={`${part}-${index}`}>
                  {part}
                  {index < parts.length - 1 ? <span className="text-cyan">15 EUR</span> : null}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{homeContent.heroSubtitle[locale]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan"
              >
                {ctaLabels.chooseAPlan[locale]}
                <ArrowDown size={16} />
              </a>
              <button
                type="button"
                onClick={openModal}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {ctaLabels.contact[locale]}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Section id="plans" title={homeContent.packagesTitle[locale]} description={homeContent.packagesDescription[locale]}>
        <PricingCards />
      </Section>

      <Section title={homeContent.processTitle[locale]}>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {homeContent.processSteps[locale].map((step, index) => (
            <li
              key={step}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-muted transition hover:border-cyan/60 hover:bg-white/[0.04]"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">0{index + 1}</p>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={homeContent.rulesTitle[locale]}>
        <div className="rounded-3xl border border-electric/40 bg-electric/10 p-6">
          <ul className="space-y-3 text-base text-white/90">
            {homeContent.rules[locale].map(rule => (
              <li key={rule} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title={homeContent.whyTitle[locale]}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.whyItems[locale].map(item => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-cyan/60"
            >
              <h3 className="font-manrope text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={homeContent.testimonialsTitle[locale]}>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map(item => (
            <article key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-muted">“{item.quote[locale]}”</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-cyan">{item.role[locale]}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="mx-auto mb-20 mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8" data-reveal>
        <div className="rounded-3xl border border-electric/50 bg-gradient-to-r from-electric/30 to-cyan/20 p-8 md:p-10">
          <h2 className="font-manrope text-3xl font-semibold text-white">{homeContent.finalCtaTitle[locale]}</h2>
          <p className="mt-3 max-w-2xl text-muted">{homeContent.finalCtaText[locale]}</p>
          <button
            type="button"
            onClick={openModal}
            className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight transition hover:bg-slate-100"
          >
            {ctaLabels.contact[locale]}
          </button>
        </div>
      </section>
    </>
  )
}
