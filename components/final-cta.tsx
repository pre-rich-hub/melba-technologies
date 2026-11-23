"use client"

import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react"
import Link from "next/link"
import { LoopLine, SparkDoodle, ScribbleUnderline, Reveal } from "@/components/shared/decor"

export function FinalCta() {
  return (
    <section className="relative bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="sky-backdrop relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white px-6 py-20 text-center shadow-soft ring-1 ring-border-subtle sm:rounded-[2.75rem] md:py-28">
        <div aria-hidden className="cloud left-[-10%] top-[-10%] h-40 w-96 opacity-80" />
        <div aria-hidden className="cloud bottom-[-20%] right-[-5%] h-48 w-[30rem] opacity-80" style={{ animationDelay: "-8s" }} />
        <LoopLine className="absolute -left-10 bottom-4 hidden w-72 text-ember/35 md:block" />
        <LoopLine className="absolute -right-10 top-4 hidden w-72 rotate-180 text-[oklch(0.6_0.12_255)]/30 md:block" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <Reveal>
            <h2 className="relative text-4xl font-bold leading-[1.06] tracking-tight text-balance sm:text-5xl md:text-6xl">
              <SparkDoodle className="absolute -top-8 left-[6%] w-9 -scale-x-100 text-ember" />
              Ready to modernize your business with{" "}
              <span className="relative inline-block">
                digital systems?
                <ScribbleUnderline className="-bottom-2 h-4" delay={0.5} />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tell us about your idea — we&apos;ll turn it into a maintainable production system.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                Start a Project
                <span className="flex size-6 items-center justify-center rounded-full bg-ember transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/80 px-7 py-4 text-sm font-semibold backdrop-blur transition-all duration-300 hover:border-foreground/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><CalendarCheck className="size-4 text-ember" /> Free discovery call</span>
              <span className="inline-flex items-center gap-1.5"><MessageCircle className="size-4 text-ember" /> Reply within 24 hours</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
