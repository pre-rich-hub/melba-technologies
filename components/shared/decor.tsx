"use client"

import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"

const EASE = [0.16, 1, 0.3, 1] as const

/* ─── Hand-drawn marker underline that draws itself ─────────────────────── */
export function ScribbleUnderline({
  className = "",
  delay = 0.6,
  color = "var(--ember)",
}: {
  className?: string
  delay?: number
  color?: string
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 w-full ${className}`}
    >
      <motion.path
        d="M3 15 C 60 6, 130 4, 200 8 S 280 14, 297 9"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: "easeInOut" }}
      />
      <motion.path
        d="M18 20 C 90 13, 170 13, 268 17"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity={0.55}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, delay: delay + 0.35, ease: "easeInOut" }}
      />
    </svg>
  )
}

/* ─── Three-stroke "spark" doodle (the little emphasis lines) ───────────── */
export function SparkDoodle({ className = "", delay = 0.9 }: { className?: string; delay?: number }) {
  const strokes = ["M6 30 L16 22", "M14 12 L20 2", "M26 20 L36 14"]
  return (
    <svg aria-hidden viewBox="0 0 40 34" className={`pointer-events-none ${className}`} fill="none">
      {strokes.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: delay + i * 0.12, ease: "easeOut" }}
        />
      ))}
    </svg>
  )
}

/* ─── Loose looping motion line that trails behind mockups ──────────────── */
export function LoopLine({ className = "", delay = 0.8 }: { className?: string; delay?: number }) {
  return (
    <svg aria-hidden viewBox="0 0 320 180" className={`pointer-events-none ${className}`} fill="none">
      <motion.path
        d="M4 150 C 60 170, 120 120, 150 90 C 180 60, 140 20, 115 45 C 90 70, 150 110, 210 92 C 260 76, 290 40, 316 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="1 0"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, delay, ease: "easeInOut" }}
      />
    </svg>
  )
}

/* ─── Small pill label above section headings ───────────────────────────── */
export function SectionBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft shadow-soft ${className}`}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inset-0 rounded-full bg-ember" style={{ animation: "pulse-ring 1.8s ease-out infinite" }} />
        <span className="relative size-1.5 rounded-full bg-ember" />
      </span>
      {children}
    </span>
  )
}

/* ─── Heading whose words fill from grey → ink as it scrolls into view ──── */
function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1])
  const y = useTransform(progress, range, [6, 0])
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children}
    </motion.span>
  )
}

export function ScrollRevealText({
  text,
  accent,
  className = "",
  as: Tag = "h2",
}: {
  text: string
  /** word(s) rendered in ember, must appear in `text` */
  accent?: string
  className?: string
  as?: "h2" | "h3" | "p"
}) {
  const ref = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.92", "start 0.45"] })
  const words = text.split(" ")
  const accentWords = new Set(accent?.split(" ") ?? [])

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <span key={`${w}-${i}`} aria-hidden className={accentWords.has(w) ? "text-ember" : undefined}>
            <Word progress={scrollYProgress} range={[start, end]}>{w}</Word>
            {i < words.length - 1 ? " " : ""}
          </span>
        )
      })}
    </Tag>
  )
}

/* ─── Simple blur + rise reveal for blocks entering the viewport ─────────── */
export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-70px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
