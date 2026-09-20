# SEO / GEO / AEO implementation report

Branch: `feature/geo-aio-seo`. Nothing here guarantees a ranking or an AI citation; it removes technical blockers, adds machine-readable facts, and adds measurement.

## 1. What changed

**Metadata and crawl files (invisible)**
- `app/layout.tsx`: `metadataBase`, title template, Open Graph/Twitter defaults, Search Console and Bing verification via env, Organization + WebSite JSON-LD, `<Tracking />`.
- Route layouts (server components) export `generateMetadata` and JSON-LD for the client-rendered pages, so those pages were not edited: `app/about`, `app/contact`, `app/services/(index)`, `app/services/[slug]`, `app/work/(index)`, `app/work/[slug]`, `app/blog/(index)`, `app/blog/[slug]`, `app/software-development-company-addis-ababa`.
- `app/services/page.tsx` and `app/work/page.tsx` moved into `(index)` route groups (URLs unchanged) so listing schema does not leak into detail pages.
- `app/robots.ts`, `app/sitemap.ts`, `app/llms.txt/route.ts`, `app/llms-full.txt/route.ts` (generated from the data files), `app/opengraph-image.tsx` (social card), `app/not-found.tsx`.
- `next.config.mjs`: optional `NEXT_DIST_DIR`. (The apex to www redirect is a Vercel domain setting, so none is defined in code.)
- `lib/seo/{site,metadata,schema,llms}.ts`, `components/seo/json-ld.tsx`: single source of truth for entity facts and typed schema helpers.
- `lib/data/faqs.ts`: contact FAQs moved out of the page (no visual change) so JSON-LD reads the same source.
- `scripts/seo-check.mjs` runs after `next build` (in `package.json` and `vercel.json`) and fails the build on invalid or incomplete JSON-LD, titles over 60 chars, duplicate titles, descriptions over 160 chars, missing canonical, or a wrong H1 count.

**Structured data:** Organization + ProfessionalService, WebSite (no SearchAction: no site search), BreadcrumbList on every inner page, Service on every service page, CreativeWork on every case study, FAQPage on `/contact`, the location page and each blog post, BlogPosting on posts, CollectionPage on listings.

**New content (built from existing components and classes)**
- `/services/tour-travel-website-development` (unlisted service; `/services` and the home page are unchanged).
- `/software-development-company-addis-ababa`.
- `/blog` with 2 fully written articles. Six outlines are in `docs/content/blog-outlines.md` (kept out of the site to avoid thin pages).
- `components/shared/faq-list.tsx` and `service-extras.tsx`: FAQ/audience/included/pricing sections that only render when a service defines them.
- The Contact and new-page FAQ answers are now in the HTML (`hidden` attribute) so crawlers can read them; visuals are identical.

**Lead capture and tracking**
- "How did you find us?" select on `/contact` (existing input styles), included in the email together with first-touch referrer, landing page and UTM values (`lib/attribution.ts`, `app/api/contact/route.ts`).
- `components/analytics/tracking.tsx`: GA4 (production and env var only), `ai_assistant` user property, `click_phone` / `click_email` / `click_whatsapp`, `generate_lead`.
- IndexNow: key file in `public/` and `npm run indexnow`.

**Docs:** `ENTITY_CHECKLIST.md`, `docs/ai-visibility/` (60 prompts, blank tracker, monthly checklist, GA4 setup).

## 2. Design freeze verification

Method: the pre-SEO commit (`926cdde`) and the current branch were both production-built and served, and the same Playwright script took full-page screenshots (desktop 1440 px and mobile 390 px, scrolling the page first so animations fire) of 9 pages.

| Result | Screenshots |
|---|---|
| Pixel-identical | 15 of 18 (home, about, services, web-development, AI service, work desktop, both case studies, and their mobile versions) |
| Intentionally different | 2: `/contact` desktop and mobile. The approved "How did you find us?" field adds about 90 px of height |
| 203 px difference | 1: `/work` mobile, around the logo. Re-running showed 0 differences (base vs base, base vs new and new vs new), so this was a transient render race and not a design change |

A dev-server comparison also showed only the Next.js dev badge and one header sub-pixel timing flicker, which is why the production A/B was used as the authoritative check.

## 3. Lighthouse (mobile emulation, local production server)

| Page | Before (P / A / BP / SEO) | After (P / A / BP / SEO) |
|---|---|---|
| Home | 63 / 94 / 96 / 100 | 62 / 94 / 96 / 100 |
| Web development service | 65 / 96 / 96 / 100 | 67 / 96 / 96 / 100 |
| Contact | 69 / 96 / 96 / 100 | 63 / 97 / 96 / 100 |

Performance varies by up to about 6 points between identical runs (repeat runs: contact 67-69 before, 62-68 after; TBT 750-1850 ms on the same build), so there is no measurable regression. Performance is 60-69 because of client-side animation JavaScript; that is unchanged (see section 4).

## 4. Needs design approval (not applied)

1. **Direct answer on the home page.** Suggested text (about 45 words) for the top of the hero area: "Melba Technology is a software company in Addis Ababa, Ethiopia. We build custom websites, mobile apps and AI automation, and we specialise in multilingual booking websites for tour and travel companies. Every project starts with a free discovery call and a fixed-scope proposal."
2. **Links to the new pages.** They are in the sitemap, `llms.txt` and cross-linked from each other, but not in the navigation, footer or the `/services` grid. Suggested: footer "Company" list gets Blog and "Software company in Addis Ababa"; add "Tour & Travel Website Development" to the services list (this would add a card to `/services` and the home services preview).
3. **WhatsApp click-to-chat.** Suggested placement: a small floating button, bottom-right. Click tracking is already wired for any wa.me link.
4. **Images.** `images.unoptimized: true` and plain `<img>` tags are used everywhere. Moving to `next/image` with dimensions and responsive sizes would cut image weight, but risks subtle visual differences.
5. **Animation JavaScript.** TBT of 750-1850 ms and a LCP of about 4 s come from framer-motion on every section. Reducing it would require touching animations.
6. **Cookie consent.** No consent banner exists. GA4 respects `localStorage["melba-analytics-consent"] = "denied"`, but a banner would be needed for EU visitors.
7. **Existing visible claims to review.** Some service benefits contain unverified numbers (for example "Automate 70% of repetitive workflows with agentic AI", "Sub-2s load times on mobile"). They were left untouched but should be substantiated or softened. The unused `components/testimonials-section.tsx` contains testimonials; no Review schema was added for that reason.
8. **Heading hierarchy.** Every page has exactly one H1; H2/H3 nesting was not audited in depth, and any fix that alters styling would need approval.
9. **Case-study results.** The existing case-study pages have no measured outcomes and three show "Recently completed"; real metrics would strengthen them.

## 5. TODO / placeholders to fill (search the code for `TODO(content)`)

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` in Vercel.
- More `sameAs` profiles in `lib/seo/site.ts`: Google Business Profile, GitHub, Clutch, GoodFirms, Crunchbase.
- Founder / team names and bios (Person schema skipped: no real data), plus a named blog author.
- Street address (only "Addis Ababa, Ethiopia" is published today), founded year.
- Price ranges (pricing text says fixed-scope proposal after discovery, no numbers invented).
- Whether services are offered outside Ethiopia (`areaServed` is Ethiopia only).
- Review the location-page and tour-service FAQ wording with the team.
- Write the six blog outlines when ready.
- Aggregate ratings / reviews: skipped because there are no verified reviews in the repo.

## 6. Manual off-site actions

See `ENTITY_CHECKLIST.md` (Google Business Profile, Bing Places, Search Console, Bing Webmaster, LinkedIn, GitHub, Clutch, GoodFirms, Crunchbase, Wikidata if eligible, Ethiopian and tourism-tech directories, reviews), including the exact NAP and 50-word and 150-word descriptions.

## 7. What is not guaranteed

- No one can guarantee placement or citation in ChatGPT, Google AI Overviews / AI Mode, Gemini, Perplexity, Copilot or Claude. Answers change with each model and index update.
- Citations depend heavily on external signals: reviews, third-party mentions, backlinks, brand searches and the age of the domain.
- `llms.txt` is included as low-cost supporting material only; there is no confirmed evidence that major assistants use it.
- Structured data helps machines understand pages but does not guarantee rich results.
- The measurement toolkit (GA4 channel group, form field, tracker) is there so progress is visible instead of assumed.
- Lint could not be run: ESLint is not installed in this repo (`npm run lint` fails with "eslint: command not found"). `tsc` shows the same 3 pre-existing type errors before and after (toast options in `app/layout.tsx`, two in `components/work-section.tsx`); `next.config.mjs` has `ignoreBuildErrors: true`.
