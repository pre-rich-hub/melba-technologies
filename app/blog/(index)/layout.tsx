import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema"

const description =
  "Guides from Melba Technology on tour operator websites, booking platforms, AI visibility and custom software development in Ethiopia."

export const metadata: Metadata = buildMetadata({
  title: "Blog: Web, AI & Tour Website Guides",
  description,
  path: "/blog",
})

export default function BlogIndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]),
          collectionPageSchema("Melba Technology Blog", description, "/blog"),
        ]}
      />
      {children}
    </>
  )
}
