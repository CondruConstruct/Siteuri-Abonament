type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20 ${className}`} data-reveal>
      <div className="mb-8 max-w-3xl">
        {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p> : null}
        <h2 className="font-manrope text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base text-muted sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}
