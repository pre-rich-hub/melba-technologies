import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import { locationFaqs } from "@/lib/data/faqs"

const path = "/software-development-company-addis-ababa"

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Software Development Company in Addis Ababa",
    description:
      "Melba Technology is a software development company in Addis Ababa, Ethiopia: custom web, mobile and AI products, and booking websites for tour operators.",
    path,
  }),
  // Absolute so the full keyword phrase fits within 60 characters.
  title: { absolute: "Software Development Company in Addis Ababa | Melba" },
}

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Software Development Company in Addis Ababa", path }]),
          faqSchema(locationFaqs),
        ]}
      />
      {children}
    </>
  )
}
