# GA4: AI Assistants channel group and conversions

The site sends the events; GA4 channel groups are configured in the GA4 admin UI (they cannot be set from code).

## 1. Turn on tracking
Create a GA4 web data stream for `https://melba.et`, copy the Measurement ID (`G-XXXXXXXXXX`) and set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel (Production). Analytics load only in production and only when this variable is set. There is currently no cookie-consent banner; if you serve EU visitors, add one. The tracker already respects `localStorage["melba-analytics-consent"] = "denied"`.

## 2. Create the channel group
Admin, Data display, Channel groups, Create new channel group. Name it "Channels with AI Assistants". Add a channel named **AI Assistants** *above* "Referral" with the condition:

- Source **matches regex** `chatgpt\.com|chat\.openai\.com|openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|bing\.com/chat|claude\.ai`

Keep every other default channel definition below it. (Order matters: GA4 uses the first match.)

## 3. Events the site fires
| Event | When |
|---|---|
| `generate_lead` | Contact form submitted successfully (parameter `source` = the "How did you find us?" answer) |
| `click_phone` | Any `tel:` link is clicked |
| `click_email` | Any `mailto:` link is clicked |
| `click_whatsapp` | Any wa.me / api.whatsapp.com link is clicked |

Mark `generate_lead`, `click_phone`, `click_email` and `click_whatsapp` as **key events** (Admin, Data display, Events).

## 4. User property
When a visit arrives from an AI assistant the site sets the user property `ai_assistant` (ChatGPT, Perplexity, Gemini, Copilot or Claude). Register it as a custom dimension (Admin, Custom definitions, Create custom dimension, scope: User, user property `ai_assistant`) to report on it.

## 5. Reports to build
- Acquisition: sessions and key events by the "AI Assistants" channel.
- Landing pages for the AI Assistants channel (which pages get cited).
- Compare with the "How they found us" line in enquiry emails; the two should broadly agree.

Note: some assistants strip the referrer, so a share of AI-driven visits will appear as Direct. The form field and UTM capture exist to cover that gap. ChatGPT usually adds `utm_source=chatgpt.com` to links, which GA4 records automatically.
