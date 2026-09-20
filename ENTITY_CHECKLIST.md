# Entity checklist: off-site actions (manual)

AI assistants and search engines decide whether to trust and cite a company by checking that many independent places describe it the same way. The website is only one of them. Do these in order, and copy the text below exactly so every profile matches.

## Canonical business details (NAP)

| Field | Value |
|---|---|
| Name | Melba Technology |
| Website | https://www.melba.et |
| Email | hellomelbatechnology@gmail.com |
| Phone | +251 941 318 298 |
| Location | Addis Ababa, Ethiopia |
| Category | Software company / Software development company |
| Founded | TODO: confirm year |
| Street address | TODO: confirm if you want one published (must then match the footer, schema and Google Business Profile) |

Existing social profiles already linked in the site footer (and in the Organization schema `sameAs`):
X https://x.com/melbatechX · Facebook https://www.facebook.com/profile.php?id=61590083957934 · Instagram https://www.instagram.com/melbatechI · LinkedIn https://www.linkedin.com/company/123224009/ · Telegram https://t.me/melbatechT

## Descriptions (copy and paste)

**50 words**

> Melba Technology is a software development company based in Addis Ababa, Ethiopia. We build custom websites, mobile apps, AI automation and cloud platforms, with a specialty in multilingual booking websites for tour and travel companies. Our tour projects include Hamba Ethiopia Tours, Gonder Simien Tours, EthioAfro Tours and Ethio Origins Tour.

**150 words**

> Melba Technology is a software development company based in Addis Ababa, Ethiopia. We design and build custom web and mobile products, AI automation, UI/UX and branding, business process automation and cloud infrastructure for businesses in Ethiopia.
>
> Our specialty is websites and booking platforms for tour and travel companies. We have built multilingual tour platforms with itinerary architecture, WhatsApp and live-chat enquiry, and SEO and GEO optimization for Hamba Ethiopia Tours, Gonder Simien Tours, EthioAfro Tours and Ethio Origins Tour. We also build for hospitality, real estate and automotive brands.
>
> You work directly with the engineers who scope your project, with weekly demos, clear milestones and a 60-day post-launch support period. Every engagement starts with a free discovery call and a detailed proposal. Visit https://www.melba.et or email hellomelbatechnology@gmail.com to start a project.

## Actions

Do them in this order; tick each when done and paste the profile URL into `lib/seo/site.ts` (`sameAs`) so the schema stays in sync.

- [ ] **Google Business Profile.** Create or claim it. Category "Software company". Use the NAP above. Add the website, phone, hours and a photo or logo. Verify it. Add the URL to `sameAs`.
- [ ] **Bing Places.** Import from Google Business Profile so the details match. Bing feeds Microsoft Copilot.
- [ ] **Google Search Console.** Add `https://www.melba.et` as a Domain property, copy the verification code into the `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` environment variable in Vercel, and submit `https://www.melba.et/sitemap.xml`.
- [ ] **Bing Webmaster Tools.** Import from Search Console (or add the code as `NEXT_PUBLIC_BING_SITE_VERIFICATION`) and submit the sitemap. Then enable IndexNow (see `docs/ai-visibility/README.md`).
- [ ] **LinkedIn company page.** Complete it (already exists: check that the description, website, location and logo match the text above).
- [ ] **GitHub organization.** Create `melba-technology` (or similar) with the same description and logo; pin one or two public repositories if you have any.
- [ ] **Clutch.** Create a company profile with the 150-word description, services, and portfolio links to the four tour case studies. Ask real clients for real reviews; never post fake ones.
- [ ] **GoodFirms.** Same profile, same text.
- [ ] **Crunchbase.** Create an organization page using the 50-word description.
- [ ] **Wikidata.** Only if Melba meets notability rules (independent published sources about the company). Do not create an entry without them; it will be deleted.
- [ ] **Ethiopian business directories.** List the company on reputable local directories and chamber-of-commerce style listings, with identical NAP. TODO: choose which ones you trust.
- [ ] **Tourism-tech directories.** Ask each tour client (Hamba, Gonder Simien, EthioAfro, Ethio Origins) to link back to Melba from their site (for example a "Website by Melba Technology" credit) and to their own profiles where relevant.
- [ ] **Client review sources.** Encourage genuine client reviews on Google and Clutch. AI answers often draw on third-party sources.

## Consistency rules

- Use "Melba Technology" everywhere (not "Melba Tech" or "Melba Software").
- Use the same phone format everywhere: +251 941 318 298.
- Never publish a rating, award or client count that you cannot prove.
- When you change any detail, change it in `lib/seo/site.ts` first, then update every profile above.
