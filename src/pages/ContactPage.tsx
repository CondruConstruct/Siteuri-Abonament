import { useState } from 'react'
import { Section } from '../components/Section'
import { contactContent, contactInfo, seoByPage } from '../content/siteContent'
import { useLanguage } from '../context/LanguageContext'
import { useSeo } from '../hooks/useSeo'

export function ContactPage() {
  const { locale } = useLanguage()

  const seo = seoByPage.contact[locale]
  useSeo(seo.title, seo.description)

  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null)

  const labels = contactContent.form[locale]

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const copy = async (value: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(type)
      window.setTimeout(() => setCopied(null), 1700)
    } catch {
      setCopied(null)
    }
  }

  return (
    <>
      <Section title={contactContent.title[locale]} description={contactContent.intro[locale]} className="pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-manrope text-2xl font-semibold text-white">{locale === 'ro' ? 'Date de contact' : 'Контактные данные'}</h3>
            <div className="mt-5 space-y-3 text-sm text-muted">
              <p>
                Email:{' '}
                <a className="text-white hover:text-cyan" href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>
              <p>
                Telefon:{' '}
                <a className="text-white hover:text-cyan" href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phone}
                </a>
              </p>
            </div>

            <form className="mt-8 space-y-4" onSubmit={onSubmit}>
              <label className="block text-sm text-muted">
                {labels.name}
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
                />
              </label>

              <label className="block text-sm text-muted">
                {labels.email}
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
                />
              </label>

              <label className="block text-sm text-muted">
                {labels.message}
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
                />
              </label>

              <button
                type="submit"
                className="rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan"
              >
                {labels.submit}
              </button>
            </form>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-cyan/40 bg-cyan/10 p-4 text-sm text-white">
                <p>{labels.success}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => copy(contactInfo.email, 'email')}
                    className="rounded-lg border border-white/20 px-3 py-2 text-xs text-white transition hover:bg-white/10"
                  >
                    {locale === 'ro' ? 'Copiază email' : 'Копировать email'}
                  </button>
                  <a href={`mailto:${contactInfo.email}`} className="rounded-lg bg-electric px-3 py-2 text-xs font-semibold text-white">
                    mailto
                  </a>
                  <button
                    type="button"
                    onClick={() => copy(contactInfo.phone, 'phone')}
                    className="rounded-lg border border-white/20 px-3 py-2 text-xs text-white transition hover:bg-white/10"
                  >
                    {locale === 'ro' ? 'Copiază număr' : 'Копировать номер'}
                  </button>
                  <a href={`tel:${contactInfo.phone}`} className="rounded-lg bg-electric px-3 py-2 text-xs font-semibold text-white">
                    tel
                  </a>
                </div>
                {copied ? (
                  <p className="mt-2 text-xs text-cyan">
                    {copied === 'email'
                      ? locale === 'ro'
                        ? 'Email copiat.'
                        : 'Email скопирован.'
                      : locale === 'ro'
                        ? 'Număr copiat.'
                        : 'Номер скопирован.'}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="font-manrope text-2xl font-semibold text-white">{contactContent.faqTitle[locale]}</h3>
            <div className="mt-5 space-y-4">
              {contactContent.faq[locale].map(item => (
                <article key={item.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <h4 className="text-sm font-semibold text-white">{item.q}</h4>
                  <p className="mt-2 text-sm text-muted">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
