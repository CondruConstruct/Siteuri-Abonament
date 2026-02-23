import { useMemo, useState } from 'react'
import { Section } from '../components/Section'
import { ctaLabels, seoByPage, worksContent, worksProjects } from '../content/siteContent'
import { useContactModal } from '../context/ContactModalContext'
import { useLanguage } from '../context/LanguageContext'
import { useSeo } from '../hooks/useSeo'
import type { PlanTier } from '../types'

export function WorksPage() {
  const { locale } = useLanguage()
  const { openModal } = useContactModal()

  const seo = seoByPage.works[locale]
  useSeo(seo.title, seo.description)

  const [filter, setFilter] = useState<'all' | PlanTier>('all')

  const filteredProjects = useMemo(
    () => worksProjects.filter(project => filter === 'all' || project.type === filter),
    [filter],
  )

  const filters = [
    { key: 'all' as const, label: worksContent.filters[locale].all },
    { key: 'landing' as const, label: worksContent.filters[locale].landing },
    { key: 'presentation' as const, label: worksContent.filters[locale].presentation },
    { key: 'store' as const, label: worksContent.filters[locale].store },
  ]

  return (
    <Section title={worksContent.title[locale]} description={worksContent.intro[locale]} className="pt-16">
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map(item => (
          <button
            key={item.key}
            type="button"
            onClick={() => setFilter(item.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === item.key ? 'bg-electric text-white' : 'border border-white/15 text-muted hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filteredProjects.map(project => (
          <article key={project.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="h-36 bg-gradient-to-br from-electric/45 via-cyan/20 to-transparent p-4">
              <div className="h-full w-full rounded-xl border border-white/20 bg-hero-grid bg-[size:18px_18px] opacity-80" />
            </div>
            <div className="p-4">
              <h3 className="font-manrope text-lg font-semibold text-white">{project.title[locale]}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags[locale].map(tag => (
                  <span key={tag} className="rounded-full border border-cyan/40 px-2 py-1 text-[11px] text-cyan">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={openModal}
                className="mt-4 rounded-lg bg-electric px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan"
              >
                {locale === 'ro' ? 'Vreau similar' : 'Хочу похожий'}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h3 className="font-manrope text-2xl font-semibold text-white">
          {locale === 'ro' ? 'Ai un model preferat?' : 'Есть понравившийся пример?'}
        </h3>
        <p className="mt-2 text-sm text-muted">
          {locale === 'ro'
            ? 'Spune-ne ce stil îți place, iar noi îl adaptăm pentru businessul tău.'
            : 'Скажите, какой стиль вам нравится, и мы адаптируем его под ваш бизнес.'}
        </p>
        <button
          type="button"
          onClick={openModal}
          className="mt-5 rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan"
        >
          {ctaLabels.askOffer[locale]}
        </button>
      </div>
    </Section>
  )
}
