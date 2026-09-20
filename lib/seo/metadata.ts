import type { Metadata } from "next"
import { SITE, absoluteUrl } from "./site"

interface BuildMetadataInput {
  /** Page title without the site suffix (the root layout template appends it). Keep under ~50 chars. */
  title: string
  /** Meta description, keep under 160 chars. */
  description: string
  /** Canonical path, e.g. "/services/web-development". */
  path: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  /** Absolute-or-relative image; defaults to the generated site OG image. */
  image?: string
  noIndex?: boolean
}

/** Shared helper so every page gets canonical, Open Graph and Twitter tags with sane defaults. */
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  image,
  noIndex,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path)
  // Falls back to the generated site card (app/opengraph-image.tsx).
  const img = image ?? "/opengraph-image"
  const images = [{ url: img.startsWith("http") ? img : absoluteUrl(img) }]

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type,
      ...(type === "article" && { publishedTime, modifiedTime }),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: images.map((i) => i.url),
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  }
}

/** Trim to a meta-description length on a word boundary. */
export function truncate(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-—]$/, "")}…`
}
