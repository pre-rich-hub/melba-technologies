import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo/schema"

const description =
  "Custom software, web and mobile development, AI automation, UI/UX design, cloud and DevOps from Melba Technology in Addis Ababa, Ethiopia."

export const metadata: Metadata = buildMetadata({
  title: "Software Development Services in Ethiopia",
  description,
  path: "/services",
})

export default function ServicesIndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
          collectionPageSchema("Melba Technology Services", description, "/services"),
        ]}
      />
      {children}
    </>
  )
}
