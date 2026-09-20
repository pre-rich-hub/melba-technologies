import Link from "next/link"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow="404"
        title="This page"
        highlighted="could not be found."
        description="The page you are looking for has moved or no longer exists. Explore our services and work instead."
      />
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-wrap gap-6">
          <Link href="/services" className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-ember transition-colors">
            Services →
          </Link>
          <Link href="/work" className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-ember transition-colors">
            Our work →
          </Link>
        </div>
      </section>
      <PageCta />
    </main>
  )
}
