import type { MetadataRoute } from "next"
import { CONTENT_LAST_UPDATED, absoluteUrl } from "@/lib/seo/site"
import { services, unlistedServices } from "@/lib/data/services"
import { caseStudies } from "@/lib/data/case-studies"
import { publishedPosts } from "@/lib/data/blog"

// Static routes that are not driven by a data file. Update the date when their content changes.
const staticPages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/work", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/software-development-company-addis-ababa", priority: 0.8, changeFrequency: "monthly" as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_LAST_UPDATED)

  return [
    ...staticPages.map((p) => ({ url: absoluteUrl(p.path), lastModified, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...[...services, ...unlistedServices].map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudies.map((c) => ({
      url: absoluteUrl(`/work/${c.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...publishedPosts().map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: new Date(p.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
