import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema"

const description =
  "Case studies from Melba Technology: booking websites for Ethiopian tour operators, plus luxury real estate, automotive, fitness and hospitality platforms."

export const metadata: Metadata = buildMetadata({
  title: "Our Work: Websites & Platforms We Built",
  description,
  path: "/work",
})

export default function WorkIndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]),
          collectionPageSchema("Melba Technology Case Studies", description, "/work"),
        ]}
      />
      {children}
    </>
  )
}
