export type Locale = 'ro' | 'ru' | 'en'

export type PlanTier = 'landing' | 'presentation' | 'store'

export type Plan = {
  id: PlanTier
  name: Record<Locale, string>
  subtitle: Record<Locale, string>
  price: Record<Locale, string>
  features: Record<Locale, string[]>
  specificBenefits: Record<Locale, string[]>
  extra?: Record<Locale, string>
  afterExtraNote?: Record<Locale, string>
  button: Record<Locale, string>
  noteUnderButton?: Record<Locale, string>
  badge?: Record<Locale, string>
}

export type Testimonial = {
  name: string
  role: Record<Locale, string>
  quote: Record<Locale, string>
}

export type ProjectItem = {
  id: number
  title: Record<Locale, string>
  type: PlanTier
  tags: Record<Locale, string[]>
}
