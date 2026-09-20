# Monthly AI visibility checklist

Baseline: the first full run is the baseline. Save it as a separate copy (`tracker-baseline.csv`) and never edit it. Results are not fabricated: leave a cell blank if you did not test it.

## 1. Re-run the prompts (about 2 hours)
- [ ] Use the 60 prompts in `prompts.md`, unchanged, on ChatGPT (search on), Gemini, Perplexity, Copilot, Claude (web search on) and Google AI Overviews / AI Mode.
- [ ] For each: log the date, platform, prompt, whether Melba was mentioned (Y/N), the cited URL, the position in the list, competitors mentioned, sentiment (positive / neutral / negative) and any factual errors, in `tracker.csv`.
- [ ] Screenshot any answer that mentions Melba or that gets a fact wrong.

## 2. Compare with the baseline
- [ ] Mention rate per platform: (mentions / prompts run) this month vs baseline.
- [ ] Which prompts newly mention Melba? Which lost their mention?
- [ ] Which pages are cited? Are they the pages you want cited (service, case study, blog)?
- [ ] Which competitors appear most often? Note what their cited pages have that ours lack.
- [ ] List factual errors and fix the source (site copy, `llms.txt`, directory profiles).

## 3. Check the technical side (30 minutes)
- [ ] `/robots.txt`, `/sitemap.xml`, `/llms.txt` load.
- [ ] Search Console: coverage errors, new queries, impressions for "software company Addis Ababa" style queries.
- [ ] Bing Webmaster Tools: crawl errors; IndexNow submissions accepted (`npm run indexnow` after deploys).
- [ ] GA4: sessions and conversions from the "AI Assistants" channel group (see `ga4-ai-assistants.md`).
- [ ] Enquiry emails: count "How they found us: ChatGPT / AI assistant" and referrer lines.

## 4. Act
- [ ] Publish or update one article or service page based on a prompt where competitors appear and Melba does not.
- [ ] Ask a real client for a review (Google, Clutch). Do not fake or incentivize reviews.
- [ ] Update "last updated" dates only when the content genuinely changed.
- [ ] Record what changed this month in a `CHANGELOG` note so results can be linked to actions.
