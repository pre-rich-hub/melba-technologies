# AI visibility toolkit

| File | Use |
|---|---|
| `prompts.md` | 60 target prompts, grouped by intent |
| `tracker.csv` | Empty results log (fill it in; do not fabricate results) |
| `monthly-checklist.md` | Monthly routine and baseline comparison |
| `ga4-ai-assistants.md` | GA4 channel group, events and user property |

## Environment variables (set in Vercel)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional; defaults to `https://melba.et` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console verification code |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster verification code (`msvalidate.01`) |
| `RESEND_API_KEY` | Already used by the contact form |

## IndexNow
The key file is in `public/` (a `.txt` named after the key). After every production deploy run `npm run indexnow` to notify Bing and other participating engines of all sitemap URLs. It can also be added as a post-deploy step in CI.

## Honest expectations
Nobody can guarantee a citation or ranking in AI answers. This toolkit measures visibility so you can see whether the technical and content work is moving the numbers.
