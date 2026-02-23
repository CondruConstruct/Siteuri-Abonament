import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ContactModal } from '../components/ContactModal'
import { FloatingContactButton } from '../components/FloatingContactButton'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useContactModal } from '../context/ContactModalContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function AppLayout() {
  const { pathname } = useLocation()
  const { isOpen, closeModal } = useContactModal()

  useScrollReveal(pathname)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="min-h-screen bg-gradient-to-b from-midnight via-obsidian to-midnight text-text">
      <Header />
      <main key={pathname}>
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButton />
      <ContactModal open={isOpen} onClose={closeModal} />
    </div>
  )
}
