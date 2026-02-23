import { Copy, Mail, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { contactInfo } from '../content/siteContent'
import { useLanguage } from '../context/LanguageContext'

type ContactModalProps = {
  open: boolean
  onClose: () => void
}

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function ContactModal({ open, onClose }: ContactModalProps) {
  const { locale } = useLanguage()
  const panelRef = useRef<HTMLDivElement | null>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null)

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

  const copyValue = async (value: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(type)
      window.setTimeout(() => setCopied(null), 1800)
    } catch {
      setCopied(null)
    }
  }

  const title = locale === 'ro' ? 'Contact rapid' : 'Быстрый контакт'
  const subtitle =
    locale === 'ro'
      ? 'Scrie-ne și îți răspundem rapid. Trimite ce dorești pe site + domeniul dorit.'
      : 'Напишите нам и мы быстро ответим. Отправьте, что вы хотите на сайте + желаемый домен.'

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

        <p className="mb-6 text-sm text-muted">{subtitle}</p>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-cyan">Email</p>
            <p className="text-base text-white">{contactInfo.email}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => copyValue(contactInfo.email, 'email')}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                <Copy size={15} />
                {locale === 'ro' ? 'Copiază email' : 'Копировать email'}
              </button>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-electric px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan"
              >
                <Mail size={15} />
                mailto
              </a>
            </div>
            {copied === 'email' ? (
              <p className="mt-2 text-xs text-cyan">{locale === 'ro' ? 'Email copiat.' : 'Email скопирован.'}</p>
            ) : null}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-cyan">Telefon</p>
            <p className="text-base text-white">{contactInfo.phone}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => copyValue(contactInfo.phone, 'phone')}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                <Copy size={15} />
                {locale === 'ro' ? 'Copiază număr' : 'Копировать номер'}
              </button>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 rounded-lg bg-electric px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan"
              >
                <Phone size={15} />
                tel
              </a>
            </div>
            {copied === 'phone' ? (
              <p className="mt-2 text-xs text-cyan">{locale === 'ro' ? 'Număr copiat.' : 'Номер скопирован.'}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
