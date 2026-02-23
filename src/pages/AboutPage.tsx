import { Section } from '../components/Section'
import { ctaLabels, aboutContent, seoByPage } from '../content/siteContent'
import { useContactModal } from '../context/ContactModalContext'
import { useLanguage } from '../context/LanguageContext'
import { useSeo } from '../hooks/useSeo'

export function AboutPage() {
  const { locale } = useLanguage()
  const { openModal } = useContactModal()

  const seo = seoByPage.about[locale]
  useSeo(seo.title, seo.description)

  return (
    <>
      <Section title={aboutContent.title[locale]} className="pt-16">
        <p className="max-w-4xl text-base leading-relaxed text-muted">{aboutContent.story[locale]}</p>
      </Section>

      <Section title={aboutContent.valuesTitle[locale]}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aboutContent.values[locale].map(value => (
            <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white">
              {value}
            </div>
          ))}
        </div>
      </Section>

      <Section title={aboutContent.communicationTitle[locale]}>
        <p className="max-w-3xl text-base text-muted">{aboutContent.communication[locale]}</p>
      </Section>

      <section className="mx-auto mb-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8" data-reveal>
        <div className="rounded-3xl border border-electric/50 bg-electric/10 p-8">
          <h2 className="font-manrope text-2xl font-semibold text-white md:text-3xl">{aboutContent.mission[locale]}</h2>
          <button
            type="button"
            onClick={openModal}
            className="mt-5 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan"
          >
            {ctaLabels.contact[locale]}
          </button>
        </div>
      </section>
    </>
  )
}
