import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata, truncate } from "@/lib/seo/metadata"
import { breadcrumbSchema, caseStudySchema } from "@/lib/seo/schema"
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies"

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) return {}
  return buildMetadata({
    title: `${cs.title} Case Study`,
    description: truncate(cs.overview),
    path: `/work/${cs.slug}`,
    image: cs.thumbnail,
  })
}

export default async function CaseStudyLayout({ children, params }: Props) {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) return <>{children}</>
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: cs.title, path: `/work/${cs.slug}` },
          ]),
          caseStudySchema(cs),
        ]}
      />
      {children}
    </>
  )
}
