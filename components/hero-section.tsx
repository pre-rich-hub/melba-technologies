"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Rocket, Smartphone, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { ScribbleUnderline, SparkDoodle, LoopLine, SectionBadge } from "@/components/shared/decor"
import { BrowserFrame, AnimatedPhone, FloatingCard } from "@/components/shared/device-mockups"

const EASE = [0.16, 1, 0.3, 1] as const

const partnerLogos = [
  "/partners/hamba.png",
  "/partners/gonder-simien.png",
  "/partners/ethioafro.png",
  "/partners/afar-horizon.png",
]

/** Words blur in one after another, like the inspiration's hero. */
function BlurWords({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className={`inline-block ${className}`}
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: delay + i * 0.08, ease: EASE }}
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </>
  )
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const browserY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const tilt = useTransform(scrollYProgress, [0, 0.6], [10, 0])

  return (
    <section ref={ref} className="sky-backdrop relative overflow-hidden">
      {/* drifting clouds */}
      <div aria-hidden className="cloud left-[-8%] top-[18%] h-48 w-[38rem] opacity-80" />
      <div aria-hidden className="cloud right-[-10%] top-[6%] h-40 w-[30rem] opacity-90" style={{ animationDelay: "-6s" }} />
      <div aria-hidden className="cloud bottom-[8%] left-[30%] h-56 w-[44rem] opacity-70" style={{ animationDelay: "-11s" }} />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-6 md:pt-36 lg:grid-cols-[1.02fr_1fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-40">
        {/* ── Copy ── */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <SectionBadge>Software studio · Addis Ababa</SectionBadge>
          </motion.div>

          <h1 className="relative mt-7 text-[clamp(2.75rem,6.6vw,5.25rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground">
            <SparkDoodle className="absolute -top-8 right-[8%] hidden w-10 text-ember sm:block lg:right-auto lg:left-[62%]" delay={1.1} />
            <BlurWords text="We Build" delay={0.1} />
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <BlurWords text="Digital" delay={0.26} />
              <ScribbleUnderline className="-bottom-1 h-4 sm:h-5" delay={0.9} />
            </span>{" "}
            <BlurWords text="Excellence." delay={0.34} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
            className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Custom software, web platforms and mobile apps — designed, engineered and launched
            end-to-end for businesses shaping the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-cream shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
            >
              Start Your Project
              <span className="flex size-6 items-center justify-center rounded-full bg-ember transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:border-foreground/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex items-center justify-center gap-3 lg:justify-start"
          >
            <div className="flex -space-x-2.5">
              {partnerLogos.map(src => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" className="size-9 rounded-full border-2 border-white bg-white object-contain p-0.5 shadow-soft" />
              ))}
            </div>
            <p className="text-left text-xs leading-snug text-muted-foreground">
              <span className="font-semibold text-foreground">Trusted by growing brands</span>
              <br />across travel, retail, real estate &amp; more
            </p>
          </motion.div>
        </div>

        {/* ── Device composition ── */}
        <div className="relative mx-auto mb-10 w-full max-w-[560px] pt-16 [perspective:1400px] sm:mb-0 sm:pt-10 lg:max-w-none lg:pt-0">
          <LoopLine className="absolute -left-16 bottom-0 hidden w-80 text-ember/40 lg:block" delay={1.2} />

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
            style={{ y: browserY, rotateX: tilt }}
            className="relative ml-auto w-[92%] origin-bottom sm:w-[88%]"
          >
            <BrowserFrame
              src="/thumbnails/hamba-s.jpg"
              alt="Hamba Ethiopia Tours website built by Melba Technology"
              url="hambatours.com"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
            style={{ y: phoneY }}
            className="absolute -bottom-12 -left-1 w-[36%] min-w-[118px] max-w-[220px] sm:-bottom-14 sm:left-0"
          >
            <AnimatedPhone />
          </motion.div>

          <FloatingCard
            icon={Rocket}
            title="Launched on time"
            subtitle="Web · iOS · Android"
            className="right-0 top-10 sm:-top-6 sm:right-[-2%]"
            delay={1.1}
          />
          <FloatingCard
            icon={ShieldCheck}
            title="Production-ready"
            subtitle="Secure & scalable"
            className="bottom-[-1.5rem] right-[4%] hidden sm:block"
            delay={1.3}
            floatDelay={1.5}
          />
          <FloatingCard
            icon={Smartphone}
            title="Mobile-first"
            className="bottom-[-2.75rem] left-[42%] hidden md:block"
            delay={1.5}
            floatDelay={3}
          />
        </div>
      </div>
    </section>
  )
}
