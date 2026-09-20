import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { breadcrumbSchema } from "@/lib/seo/schema"

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Melba Technology is a software studio in Addis Ababa, Ethiopia. Meet the engineering principles and values behind our custom web, mobile and AI products.",
  path: "/about",
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      {children}
    </>
  )
}
