// First-touch attribution captured invisibly in sessionStorage and sent with the contact form,
// so AI-assistant referrals can be told apart from Google, social and direct traffic.

export interface Attribution {
  referrer: string
  landingPage: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
}

const KEY = "melba-attribution"

// Hosts that indicate a visit that came from an AI assistant.
export const AI_REFERRERS: Record<string, string> = {
  "chatgpt.com": "ChatGPT",
  "chat.openai.com": "ChatGPT",
  "perplexity.ai": "Perplexity",
  "www.perplexity.ai": "Perplexity",
  "gemini.google.com": "Gemini",
  "copilot.microsoft.com": "Copilot",
  "claude.ai": "Claude",
}

export function aiAssistantFrom(referrerOrSource: string): string | null {
  const s = referrerOrSource.toLowerCase()
  if (!s) return null
  let host = s
  try {
    host = new URL(s).hostname
  } catch {}
  return AI_REFERRERS[host] ?? Object.entries(AI_REFERRERS).find(([h]) => host.includes(h.replace(/^www\./, "")))?.[1] ?? null
}

const empty = (): Attribution => ({
  referrer: "", landingPage: "", utm_source: "", utm_medium: "", utm_campaign: "", utm_term: "", utm_content: "",
})

export function captureAttribution(): Attribution {
  try {
    const existing = sessionStorage.getItem(KEY)
    if (existing) return JSON.parse(existing)
    const params = new URLSearchParams(window.location.search)
    const referrer = document.referrer && new URL(document.referrer).hostname !== window.location.hostname ? document.referrer : ""
    const a: Attribution = {
      referrer,
      landingPage: window.location.pathname,
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_term: params.get("utm_term") ?? "",
      utm_content: params.get("utm_content") ?? "",
    }
    sessionStorage.setItem(KEY, JSON.stringify(a))
    return a
  } catch {
    return empty()
  }
}

export function getAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : captureAttribution()
  } catch {
    return empty()
  }
}
