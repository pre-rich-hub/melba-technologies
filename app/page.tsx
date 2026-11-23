import { HeroSection } from "@/components/hero-section"
import { TrustStrip } from "@/components/trust-strip"
import { ServicesPreview } from "@/components/services-preview"
import { FeaturedWork } from "@/components/featured-work"
import { PartnersSection, StatsBand } from "@/components/partners-section"
import { MobileShowcase } from "@/components/mobile-showcase"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FinalCta } from "@/components/final-cta"
import type { Metadata } from "next"
import { SITE } from "@/lib/seo/site"

export const metadata: Metadata = {
  title: { absolute: "Melba Technology | Smart Digital Solutions" },
  description: SITE.description,
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE.url,
    title: "Melba Technology | Smart Digital Solutions",
    description: SITE.description,
    images: [{ url: `${SITE.url}/opengraph-image` }],
  },
}

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <StatsBand />
      <PartnersSection />
      <TrustStrip />
      <ServicesPreview />
      <MobileShowcase />
      <FeaturedWork />
      <WhyChooseUs />
      <FinalCta />
    </main>
  )
}
