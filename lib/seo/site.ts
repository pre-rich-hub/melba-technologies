// Single source of truth for entity facts. Schema, metadata, llms.txt and the
// sitemap all read from here so the company details never drift apart.
// Facts mirror the visible footer / contact page (email, phone, address, socials).

export const SITE = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://melba.et").replace(/\/$/, ""),
  name: "Melba Technology",
  legalName: "Melba Technology",
  shortName: "Melba",
  // One description reused by metadata, JSON-LD and llms.txt (kept under 160 chars for search snippets).
  description:
    "Melba Technology is a software company in Addis Ababa, Ethiopia, building custom web, mobile and AI products, and booking websites for tour operators.",
  tagline: "Smart Digital Solutions",
  email: "hellomelbatechnology@gmail.com",
  phone: "+251941318298",
  phoneDisplay: "+251 941 318 298",
  address: {
    locality: "Addis Ababa",
    country: "Ethiopia",
    countryCode: "ET",
  },
  logo: "/melba-logo.png",
  // Taken from the site footer.
  sameAs: [
    "https://x.com/melbatechX",
    "https://www.facebook.com/profile.php?id=61590083957934",
    "https://www.instagram.com/melbatechI",
    "https://www.linkedin.com/company/123224009/",
    "https://t.me/melbatechT",
  ],
  // TODO(content): add GitHub org, Clutch, GoodFirms, Crunchbase, Google Business Profile URLs once created (see ENTITY_CHECKLIST.md).
  // TODO(content): founder / team member names and bios for Person schema.
  knowsAbout: [
    "Custom software development",
    "Web development",
    "Mobile app development",
    "AI automation",
    "UI/UX design and branding",
    "Business process automation",
    "Technology consulting",
    "Cloud and DevOps",
    "Tour and travel website development",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
  ],
  areaServed: "Ethiopia",
} as const

// Bump when site-wide static content changes; blog posts carry their own dates.
export const CONTENT_LAST_UPDATED = "2026-09-20"

export function absoluteUrl(path = "/") {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`
}
