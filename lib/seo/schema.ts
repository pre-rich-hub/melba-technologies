import { SITE, absoluteUrl } from "./site"
import type { Service } from "@/lib/data/services"
import type { CaseStudy } from "@/lib/data/case-studies"

type Node = Record<string, unknown>

const ORG_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`

const orgRef = { "@id": ORG_ID }

/** Organization + ProfessionalService. Real facts only; see lib/seo/site.ts for TODOs. */
export function organizationSchema(): Node {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.logo),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressCountry: SITE.address.countryCode,
    },
    areaServed: { "@type": "Country", name: SITE.areaServed },
    sameAs: SITE.sameAs,
    knowsAbout: SITE.knowsAbout,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.phone,
      availableLanguage: ["English"],
    },
  }
}

/** WebSite without SearchAction: the site has no search feature. */
export function websiteSchema(): Node {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en",
    publisher: orgRef,
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Node {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]): Node {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}

export function serviceSchema(
  service: Pick<Service, "slug" | "title" | "description" | "technologies">,
  basePath = "/services",
): Node {
  const url = absoluteUrl(`${basePath}/${service.slug}`)
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url,
    provider: orgRef,
    areaServed: { "@type": "Country", name: SITE.areaServed },
    // TODO(content): confirm whether services are also offered to clients outside Ethiopia and widen areaServed.
    keywords: service.technologies.join(", "),
  }
}

export function caseStudySchema(cs: CaseStudy): Node {
  const url = absoluteUrl(`/work/${cs.slug}`)
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    name: `${cs.title} — ${cs.category}`,
    headline: cs.title,
    description: cs.overview,
    url,
    image: absoluteUrl(cs.thumbnail),
    creator: orgRef,
    about: cs.industry,
    keywords: [...cs.tags, ...cs.technologies].join(", "),
    // Live site is the project the case study describes.
    mainEntityOfPage: url,
    citation: cs.liveUrl,
    isBasedOn: cs.liveUrl,
  }
}

export function blogPostingSchema(post: {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified: string
}): Node {
  const url = absoluteUrl(`/blog/${post.slug}`)
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    // TODO(content): replace the organization author with a named person once an author is confirmed.
    author: orgRef,
    publisher: orgRef,
    inLanguage: "en",
  }
}

export function collectionPageSchema(name: string, description: string, path: string): Node {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": WEBSITE_ID },
    publisher: orgRef,
  }
}
