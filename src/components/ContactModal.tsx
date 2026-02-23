import { Mail, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { contactInfo } from '../content/siteContent'
import { useLanguage } from '../context/LanguageContext'
import { sendTelegramLead } from '../utils/sendTelegramLead'

type ContactModalProps = {
  open: boolean
  onClose: () => void
}

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function ContactModal({ open, onClose }: ContactModalProps) {
  const { locale } = useLanguage()
  const panelRef = useRef<HTMLDivElement | null>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  useEffect(() => {
    if (!open) return

    previousFocusRef.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'

    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
    focusables?.[0]?.focus()

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'Tab' && panelRef.current) {
        const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
        if (!nodes.length) return

        const first = nodes[0]
        const last = nodes[nodes.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
      previousFocusRef.current?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) return

    setSubmitState('sending')

    const result = await sendTelegramLead({
      name,
      email,
      message,
      locale,
    })

    if (result.ok) {
      form.reset()
      setSubmitState('success')
      return
    }

    setSubmitState('error')
  }

  const title = locale === 'ro' ? 'Cere ofertă rapid' : 'Быстрый запрос оферты'
  const subtitle =
    locale === 'ro'
      ? 'Completează scurt formularul și îți trimitem răspuns rapid pe contact.'
      : 'Кратко заполните форму, и мы быстро ответим вам по контактам.'

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4" onMouseDown={onClose} role="presentation">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={event => event.stopPropagation()}
        className="w-full max-w-lg rounded-3xl border border-white/15 bg-[#090d15] p-6 shadow-2xl"
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="font-manrope text-2xl font-semibold text-white">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mb-5 text-sm text-muted">{subtitle}</p>

        <div className="mb-5 grid gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/90">
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-2 transition hover:text-cyan">
            <Mail size={16} className="text-cyan" />
            {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-2 transition hover:text-cyan">
            <Phone size={16} className="text-cyan" />
            {contactInfo.phone}
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            name="name"
            required
            type="text"
            placeholder={locale === 'ro' ? 'Nume' : 'Имя'}
            className="w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder={
              locale === 'ro'
                ? 'Ce site dorești + domeniul dorit'
                : 'Какой сайт нужен + желаемый домен'
            }
            className="w-full rounded-xl border border-white/15 bg-obsidian px-3 py-2 text-sm text-white outline-none transition focus:border-cyan"
          />

          <button
            type="submit"
            disabled={submitState === 'sending'}
            className="w-full rounded-xl bg-electric px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === 'sending'
              ? locale === 'ro'
                ? 'Se trimite...'
                : 'Отправка...'
              : locale === 'ro'
                ? 'Trimite cererea'
                : 'Отправить запрос'}
          </button>
        </form>

        {submitState === 'success' ? (
          <p className="mt-3 rounded-xl border border-cyan/40 bg-cyan/10 px-3 py-2 text-xs text-white">
            {locale === 'ro'
              ? 'Mesaj trimis pe Telegram. Revenim rapid.'
              : 'Сообщение отправлено в Telegram. Скоро ответим.'}
          </p>
        ) : null}

        {submitState === 'error' ? (
          <p className="mt-3 rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-white">
            {locale === 'ro'
              ? 'Eroare la trimitere. Scrie direct pe email/telefon.'
              : 'Ошибка отправки. Напишите напрямую на email/телефон.'}
          </p>
        ) : null}
      </div>
    </div>
  )
}
