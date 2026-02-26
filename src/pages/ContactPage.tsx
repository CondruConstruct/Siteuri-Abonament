import { useState } from 'react'
import type { Locale } from '../types'
import { Section } from '../components/Section'
import { contactContent, contactInfo, seoByPage } from '../content/siteContent'
import { useLanguage } from '../context/LanguageContext'
import { useSeo } from '../hooks/useSeo'
import { sendTelegramLead } from '../utils/sendTelegramLead'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

const pageCopy: Record<
  Locale,
  {
    detailsTitle: string
    phoneLabel: string
    sending: string
    success: string
    copyEmail: string
    copyPhone: string
    emailCopied: string
    phoneCopied: string
    error: string
  }
> = {
  ro: {
    detailsTitle: 'Date de contact',
    phoneLabel: 'Telefon',
    sending: 'Se trimite...',
    success: 'Mesaj trimis cu succes pe Telegram. Îți răspundem rapid.',
    copyEmail: 'Copiază email',
    copyPhone: 'Copiază număr',
    emailCopied: 'Email copiat.',
    phoneCopied: 'Număr copiat.',
    error: 'Nu am putut trimite mesajul pe Telegram acum. Contactează-ne direct pe email/telefon.',
  },
  ru: {
    detailsTitle: 'Контактные данные',
    phoneLabel: 'Телефон',
    sending: 'Отправка...',
    success: 'Сообщение успешно отправлено в Telegram. Мы быстро ответим.',
    copyEmail: 'Копировать email',
    copyPhone: 'Копировать номер',
    emailCopied: 'Email скопирован.',
    phoneCopied: 'Номер скопирован.',
    error: 'Не удалось отправить сообщение в Telegram прямо сейчас. Свяжитесь с нами напрямую по email/телефону.',
  },
  en: {
    detailsTitle: 'Contact details',
    phoneLabel: 'Phone',
    sending: 'Sending...',
    success: 'Message sent successfully to Telegram. We will reply quickly.',
    copyEmail: 'Copy email',
    copyPhone: 'Copy number',
    emailCopied: 'Email copied.',
    phoneCopied: 'Phone number copied.',
    error: 'We could not send the Telegram message right now. Please contact us directly by email/phone.',
  },
}

export function ContactPage() {
  const { locale } = useLanguage()

  const seo = seoByPage.contact[locale]
  useSeo(seo.title, seo.description)

  const [copied, setCopied] = useState<'email' | 'phone' | null>(null)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const labels = contactContent.form[locale]
  const copy = pageCopy[locale]

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !email || !message) return

    setSubmitState('sending')

    const result = await sendTelegramLead({
      name,
      email,
      message,
      locale,
    })

    if (result.ok) {
      setSubmitState('success')
      form.reset()
      return
    }

    setSubmitState('error')
  }

  const copyToClipboard = async (value: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(type)
      window.setTimeout(() => setCopied(null), 1700)
    } catch {
      setCopied(null)
    }
  }

  const showSuccess = submitState === 'success'
  const showError = submitState === 'error'

  return (
    <>
      <Section title={contactContent.title[locale]} description={contactContent.intro[locale]} className="pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-manrope text-2xl font-semibold text-white">{copy.detailsTitle}</h3>
            <div className="mt-5 space-y-3 text-sm text-muted">
              <p>
                Email:{' '}
                <a className="text-white hover:text-cyan" href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>
              <p>
                {copy.phoneLabel}:{' '}
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
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
                />
              </label>

              <label className="block text-sm text-muted">
                {labels.email}
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
                />
              </label>

              <label className="block text-sm text-muted">
                {labels.message}
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
                />
              </label>

              <button
                type="submit"
                disabled={submitState === 'sending'}
                className="rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitState === 'sending' ? copy.sending : labels.submit}
              </button>
            </form>

            {showSuccess ? (
              <div className="mt-6 rounded-2xl border border-cyan/40 bg-cyan/10 p-4 text-sm text-white">
                <p>{copy.success}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="rounded-lg border border-white/20 px-3 py-2 text-xs text-white transition hover:bg-white/10"
                  >
                    {copy.copyEmail}
                  </button>
                  <a href={`mailto:${contactInfo.email}`} className="rounded-lg bg-electric px-3 py-2 text-xs font-semibold text-white">
                    mailto
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                    className="rounded-lg border border-white/20 px-3 py-2 text-xs text-white transition hover:bg-white/10"
                  >
                    {copy.copyPhone}
                  </button>
                  <a href={`tel:${contactInfo.phone}`} className="rounded-lg bg-electric px-3 py-2 text-xs font-semibold text-white">
                    tel
                  </a>
                </div>
                {copied ? (
                  <p className="mt-2 text-xs text-cyan">{copied === 'email' ? copy.emailCopied : copy.phoneCopied}</p>
                ) : null}
              </div>
            ) : null}

            {showError ? (
              <div className="mt-6 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-white">{copy.error}</div>
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
