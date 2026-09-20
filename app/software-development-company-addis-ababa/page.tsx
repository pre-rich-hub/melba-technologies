"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/shared/page-hero"
import { PageCta } from "@/components/shared/page-cta"
import { FaqList } from "@/components/shared/faq-list"
import { services, unlistedServices } from "@/lib/data/services"
import { locationFaqs } from "@/lib/data/faqs"
import { SITE } from "@/lib/seo/site"

const industries = [
  { industry: "Tour & travel", build: "Booking-ready, multilingual websites with WhatsApp and live-chat enquiry", work: [["Hamba Ethiopia Tours", "hamba-tours"], ["Gonder Simien Tours", "gonder-simien-tours"], ["EthioAfro Tours", "ethioafro-tours"], ["Ethio Origins Tour", "ethio-origins-tour"]] },
  { industry: "Real estate", build: "Luxury property listings, advisory booking and CRM integration", work: [["Maison", "maison-real-estate"]] },
  { industry: "Automotive & luxury", build: "Fleet showcases, memberships and real-time booking", work: [["PRESTIGE", "prestige-car-rental"]] },
  { industry: "Hospitality & dining", build: "Menus, reservations and private-dining enquiries", work: [["Aurum", "aurum-restaurant"]] },
  { industry: "Fitness & construction", build: "Class booking and memberships; enterprise portfolios and inquiry flows", work: [["IronPulse", "iron-pulse"], ["AtlasBuild Group", "atlas-build"]] },
] as const

const howWeWork = [
  { title: "The team that scopes it builds it", body: "You work directly with the engineers who scoped your project, with a named technical lead and no account managers in between." },
  { title: "Weekly demos and clear milestones", body: "An open backlog and regular demos mean you always know the state of your project, budget and timeline." },
  { title: "Discovery call within 24 hours", body: "Tell us about your project and we schedule a free discovery call, then send a detailed proposal before any engagement begins." },
  { title: "60-day post-launch support", body: "Every engagement includes a hyper-care period, with retainer-based maintenance available afterwards." },
]

export default function LocationPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const all = [...services, ...unlistedServices]

  return (
    <main>
      <PageHero
        eyebrow="Addis Ababa, Ethiopia"
        title="Software development company in"
        highlighted="Addis Ababa"
        description="Melba Technology is a software development company based in Addis Ababa, Ethiopia. We design and build custom websites, mobile apps, AI automation and cloud platforms for businesses in Ethiopia, with a specialty in booking websites for tour and travel companies."
      />

      {/* What we build */}
      <section className="py-16 md:py-20 lg:py-24" ref={ref}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">What We Build</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[0.92]">Services From Our Addis Ababa Studio</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {all.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.05 }}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col h-full rounded-md border border-border bg-card/40 hover:bg-card/80 p-7 transition-colors duration-500 relative overflow-hidden"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-ember transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-ember transition-all duration-700 ease-out" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 lg:py-24 border-y border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Industries</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[0.92] max-w-2xl">Who We Build For</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium py-3 pr-6">Industry</th>
                  <th className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium py-3 pr-6">What we build</th>
                  <th className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium py-3">Selected work</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {industries.map((row) => (
                  <tr key={row.industry}>
                    <td className="py-5 pr-6 font-semibold align-top whitespace-nowrap">{row.industry}</td>
                    <td className="py-5 pr-6 text-muted-foreground leading-relaxed align-top min-w-[16rem]">{row.build}</td>
                    <td className="py-5 align-top">
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {row.work.map(([name, slug]) => (
                          <Link key={slug} href={`/work/${slug}`} className="inline-flex items-center gap-1 text-muted-foreground hover:text-ember transition-colors">
                            {name} <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">How We Work</p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[0.92] max-w-2xl">Working With a Local Team</h2>
          </div>
          <div className="divide-y divide-border max-w-3xl">
            {howWeWork.map((item, i) => (
              <div key={item.title} className="flex gap-8 py-7">
                <span className="font-mono text-xs font-bold text-ember/50 tabular-nums flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 border-t border-border" style={{ background: "var(--section-alt)" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember font-medium mb-5">Find Us</p>
          <h2 className="text-3xl font-semibold tracking-tight leading-[0.92] mb-8">Melba Technology, Addis Ababa</h2>
          <div className="space-y-5">
            {[
              { icon: MapPin, value: `${SITE.address.locality}, ${SITE.address.country}`, href: null as string | null },
              { icon: Mail, value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Phone, value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
            ].map(({ icon: Icon, value, href }) => (
              <div key={value} className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-md border border-border flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-ember" />
                </div>
                {href ? (
                  <a href={href} className="text-sm text-muted-foreground hover:text-ember transition-colors">{value}</a>
                ) : (
                  <span className="text-sm text-muted-foreground">{value}</span>
                )}
              </div>
            ))}
          </div>
          {/* TODO(content): add the street address / map link once confirmed, and add it to the footer, schema and Google Business Profile together. */}
        </div>
      </section>

      <FaqList faqs={locationFaqs} />

      <PageCta />
    </main>
  )
}
