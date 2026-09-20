import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema"
import { contactFaqs } from "@/lib/data/faqs"

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Start a project with Melba Technology in Addis Ababa. Tell us about your website, app or AI automation and get a discovery call within 24 hours.",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          faqSchema(contactFaqs),
        ]}
      />
      {children}
    </>
  )
}
