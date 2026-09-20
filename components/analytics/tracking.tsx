"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import { aiAssistantFrom, captureAttribution } from "@/lib/attribution"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  try {
    window.gtag?.("event", name, params)
  } catch {}
}

// Invisible: loads GA4 (only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set and analytics were not declined),
// records the AI-assistant referrer and fires conversion events for phone, email and WhatsApp clicks.
export function Tracking() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    try {
      // Respects a future consent banner that stores "denied" here.
      setConsented(localStorage.getItem("melba-analytics-consent") !== "denied")
    } catch {
      setConsented(true)
    }

    const attribution = captureAttribution()
    const assistant = aiAssistantFrom(attribution.referrer) ?? aiAssistantFrom(attribution.utm_source)
    if (assistant) window.gtag?.("set", "user_properties", { ai_assistant: assistant })

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute("href") ?? ""
      if (href.startsWith("tel:")) trackEvent("click_phone", { link_url: href })
      else if (href.startsWith("mailto:")) trackEvent("click_email", { link_url: href })
      else if (/(^|\/\/)(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/.test(href)) trackEvent("click_whatsapp", { link_url: href })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  if (!GA_ID || !consented || process.env.NODE_ENV !== "production") return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  )
}
