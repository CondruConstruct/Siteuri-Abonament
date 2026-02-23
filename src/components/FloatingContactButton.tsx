import { MessageCircle } from 'lucide-react'
import { useContactModal } from '../context/ContactModalContext'
import { useLanguage } from '../context/LanguageContext'

export function FloatingContactButton() {
  const { openModal } = useContactModal()
  const { locale } = useLanguage()

  return (
    <button
      type="button"
      onClick={openModal}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/20 bg-electric px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan"
    >
      <MessageCircle size={18} />
      {locale === 'ro' ? 'Contact' : 'Контакт'}
    </button>
  )
}
