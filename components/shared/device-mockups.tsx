"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  Bell, Search, Home, Calendar, User, Heart, MapPin, Star, Check,
  BarChart3, Package, Truck, Plus,
} from "lucide-react"

const EASE = [0.16, 1, 0.3, 1] as const

/* ═══════════════════════════════════════════════════════════════════════
   Browser window
   ═══════════════════════════════════════════════════════════════════════ */
export function BrowserFrame({
  src,
  alt,
  url,
  className = "",
  priority = false,
}: {
  src: string
  alt: string
  url: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/80 bg-white shadow-float ring-1 ring-black/[0.04] ${className}`}>
      <div className="flex items-center gap-3 border-b border-border-subtle bg-[oklch(0.985_0.003_266)] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex max-w-[60%] flex-1 items-center justify-center gap-1.5 truncate rounded-full bg-white px-3 py-1 text-[10px] text-muted-foreground ring-1 ring-border-subtle">
          <span className="size-1.5 shrink-0 rounded-full bg-[#28c840]" />
          <span className="truncate">{url}</span>
        </div>
        <div className="w-10" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block aspect-[1280/662] w-full object-cover object-top"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   Phone
   ═══════════════════════════════════════════════════════════════════════ */
export function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19.2] rounded-[2.6rem] bg-ink p-[7px] shadow-float ring-1 ring-black/10 ${className}`}
    >
      {/* side buttons */}
      <span className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l bg-ink-soft" />
      <span className="absolute -left-[3px] top-[28%] h-12 w-[3px] rounded-l bg-ink-soft" />
      <span className="absolute -right-[3px] top-[24%] h-16 w-[3px] rounded-r bg-ink-soft" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-[oklch(0.985_0.004_266)]">
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2 z-30 h-[18px] w-[34%] -translate-x-1/2 rounded-full bg-ink" />
        {/* status bar */}
        <div className="relative z-20 flex items-center justify-between px-5 pt-2.5 text-[9px] font-semibold text-foreground">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="flex items-end gap-[1.5px]">
              {[3, 5, 7, 9].map(h => <span key={h} className="w-[2px] rounded-sm bg-foreground" style={{ height: h }} />)}
            </span>
            <span className="ml-1 h-[8px] w-[16px] rounded-[2px] border border-foreground/70 p-[1px]">
              <span className="block h-full w-3/4 rounded-[1px] bg-foreground" />
            </span>
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

/* ─── Screen 1: travel booking "Explore" ─────────────────────────────── */
function ExploreScreen() {
  const cards = [
    { img: "/thumbnails/simien-ethiopia-s.jpg", name: "Simien Trek", place: "Gondar", pos: "30% 50%" },
    { img: "/thumbnails/afar-horizon-s.jpg", name: "Danakil Days", place: "Afar", pos: "70% 50%" },
  ]
  return (
    <div className="px-3.5 pt-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-muted-foreground">Good morning</p>
          <p className="text-[12px] font-bold leading-tight">Plan your next trip</p>
        </div>
        <div className="relative flex size-7 items-center justify-center rounded-full bg-white shadow-soft">
          <Bell className="size-3.5" />
          <span className="absolute right-1 top-1 size-1.5 rounded-full bg-ember" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 rounded-xl bg-white px-2.5 py-2 text-[8px] text-muted-foreground shadow-soft">
        <Search className="size-3" /> Search destinations
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-[10px] font-bold">Recommended</p>
        <p className="text-[8px] text-muted-foreground">See all</p>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: EASE }}
            className="overflow-hidden rounded-xl bg-white shadow-soft"
          >
            <div className="relative h-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt="" className="h-full w-full object-cover" style={{ objectPosition: c.pos }} />
              <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-white/90">
                <Heart className="size-2.5 text-ember" fill="currentColor" />
              </span>
            </div>
            <div className="p-1.5">
              <p className="text-[8px] font-bold">{c.name}</p>
              <p className="flex items-center gap-0.5 text-[7px] text-muted-foreground"><MapPin className="size-2" />{c.place}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-[10px] font-bold">My schedule</p>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
        className="mt-2 flex items-center gap-2 rounded-xl bg-white p-2 shadow-soft"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/thumbnails/hamba-s.jpg" alt="" className="size-8 rounded-lg object-cover" />
        <div className="flex-1">
          <p className="text-[8px] font-bold">Lalibela Churches</p>
          <p className="flex items-center gap-0.5 text-[7px] text-muted-foreground"><Star className="size-2 fill-ember text-ember" />4.9 · 3 days</p>
        </div>
        <span className="rounded-full bg-ember px-2 py-0.5 text-[7px] font-semibold text-white">Booked</span>
      </motion.div>
    </div>
  )
}

/* ─── Screen 2: analytics dashboard ──────────────────────────────────── */
function DashboardScreen() {
  const bars = [38, 62, 45, 80, 58, 92, 70]
  return (
    <div className="px-3.5 pt-3">
      <p className="text-[8px] text-muted-foreground">Overview</p>
      <p className="text-[12px] font-bold leading-tight">This week</p>
      <div className="mt-3 rounded-2xl bg-ink p-3 text-white">
        <p className="text-[8px] text-white/60">Active users</p>
        <p className="text-[18px] font-bold leading-tight tracking-tight">12,480</p>
        <p className="mt-0.5 text-[7px] text-[oklch(0.82_0.15_150)]">▲ 18.2% vs last week</p>
        <div className="mt-3 flex h-14 items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className={`flex-1 rounded-t-md ${i === 5 ? "bg-ember" : "bg-white/20"}`}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: EASE }}
            />
          ))}
        </div>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-2">
        {[
          { icon: BarChart3, label: "Conversion", value: "6.4%" },
          { icon: Package, label: "Orders", value: "1,208" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.5 + i * 0.1, ease: EASE }}
            className="rounded-xl bg-white p-2 shadow-soft"
          >
            <s.icon className="size-3 text-ember" />
            <p className="mt-1 text-[7px] text-muted-foreground">{s.label}</p>
            <p className="text-[11px] font-bold">{s.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-2.5 space-y-1.5">
        {["Payment received", "New sign-up"].map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
            className="flex items-center gap-2 rounded-lg bg-white px-2 py-1.5 shadow-soft"
          >
            <span className="flex size-4 items-center justify-center rounded-full bg-ember-soft"><Check className="size-2.5 text-ember" /></span>
            <span className="text-[8px] font-medium">{t}</span>
            <span className="ml-auto text-[7px] text-muted-foreground">now</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ─── Screen 3: order tracking ───────────────────────────────────────── */
function TrackingScreen() {
  const steps = ["Order placed", "Packed", "On the way", "Delivered"]
  return (
    <div className="px-3.5 pt-3">
      <p className="text-[8px] text-muted-foreground">Order #4021</p>
      <p className="text-[12px] font-bold leading-tight">Arriving today</p>
      <div className="relative mt-3 h-24 overflow-hidden rounded-2xl bg-[oklch(0.94_0.03_250)]">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full" fill="none">
          <motion.path
            d="M15 80 C 50 80, 60 30, 100 45 S 160 20, 185 25"
            stroke="var(--ember)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="0 1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
          />
        </svg>
        <motion.span
          className="absolute flex size-6 items-center justify-center rounded-full bg-white shadow-lift"
          initial={{ left: "4%", top: "70%" }}
          animate={{ left: "46%", top: "33%" }}
          transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
        >
          <Truck className="size-3 text-ember" />
        </motion.span>
        <span className="absolute right-[6%] top-[16%] size-3 rounded-full border-2 border-white bg-ink" />
      </div>
      <div className="mt-3 space-y-2.5 rounded-2xl bg-white p-3 shadow-soft">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.25 }}
          >
            <span className={`flex size-4 items-center justify-center rounded-full ${i < 3 ? "bg-ember text-white" : "border border-border bg-white"}`}>
              {i < 3 && <Check className="size-2.5" />}
            </span>
            <span className={`text-[8px] ${i < 3 ? "font-semibold" : "text-muted-foreground"}`}>{s}</span>
            {i === 2 && <span className="ml-auto rounded-full bg-ember-soft px-1.5 py-0.5 text-[6px] font-semibold text-ember">LIVE</span>}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const SCREENS = [ExploreScreen, DashboardScreen, TrackingScreen]

/** Phone with a self-advancing carousel of animated app screens. */
export function AnimatedPhone({
  className = "",
  interval = 3400,
  startIndex = 0,
}: {
  className?: string
  interval?: number
  startIndex?: number
}) {
  const [index, setIndex] = useState(startIndex % SCREENS.length)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const id = setInterval(() => setIndex(i => (i + 1) % SCREENS.length), interval)
    return () => clearInterval(id)
  }, [interval])

  const Screen = SCREENS[index]
  const tabs = [Home, Calendar, Plus, Heart, User]

  return (
    <PhoneFrame className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="absolute inset-x-0 top-7 bottom-12"
        >
          <Screen />
        </motion.div>
      </AnimatePresence>

      {/* tab bar */}
      <div className="absolute inset-x-2.5 bottom-2.5 z-20 flex items-center justify-around rounded-2xl bg-white py-2 shadow-soft">
        {tabs.map((Icon, i) =>
          i === 2 ? (
            <span key={i} className="-mt-5 flex size-8 items-center justify-center rounded-full bg-ember text-white shadow-lift ring-4 ring-[oklch(0.985_0.004_266)]">
              <Icon className="size-3.5" />
            </span>
          ) : (
            <Icon key={i} className={`size-3.5 ${i === 0 ? "text-ember" : "text-muted-foreground/70"}`} />
          ),
        )}
      </div>

    </PhoneFrame>
  )
}

/* ─── Floating glass notification used around mockups ─────────────────── */
export function FloatingCard({
  icon: Icon,
  title,
  subtitle,
  className = "",
  delay = 0,
  floatDelay = 0,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle?: string
  className?: string
  delay?: number
  floatDelay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={`absolute z-30 ${className}`}
    >
      <div
        className="glass flex items-center gap-2.5 rounded-2xl px-3 py-2.5 shadow-lift"
        style={{ animation: `float-y 6s ease-in-out ${floatDelay}s infinite` }}
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-ember-soft text-ember">
          <Icon className="size-4" />
        </span>
        <span className="leading-tight">
          <span className="block whitespace-nowrap text-[12px] font-semibold text-foreground">{title}</span>
          {subtitle && <span className="block whitespace-nowrap text-[10px] text-muted-foreground">{subtitle}</span>}
        </span>
      </div>
    </motion.div>
  )
}
