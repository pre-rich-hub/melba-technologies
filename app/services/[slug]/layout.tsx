import type { Metadata } from "next"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetadata, truncate } from "@/lib/seo/metadata"
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema"
import { getServiceBySlug, allServiceSlugs } from "@/lib/data/services"

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return buildMetadata({
    // Add the location keyword only when the full <title> still fits in 60 characters.
    title: service.title.length + " in Ethiopia".length + " | Melba Technology".length <= 60 ? `${service.title} in Ethiopia` : service.title,
    description: truncate(service.description),
    path: `/services/${service.slug}`,
  })
}

export default async function ServiceDetailLayout({ children, params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return <>{children}</>
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          serviceSchema(service),
        ]}
      />
      {children}
    </>
  )
}
