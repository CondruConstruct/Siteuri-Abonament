import { useEffect } from 'react'

function setMetaTag(attribute: 'name' | 'property', key: string, value: string) {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', value)
}

export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:type', 'website')
  }, [title, description])
}
