// Pings IndexNow (Bing, Yandex and partners) with every URL in the live sitemap.
// Run after each production deploy:  npm run indexnow
// Optional: SITE_URL=https://melba.et node scripts/indexnow.mjs
const SITE = (process.env.SITE_URL || "https://melba.et").replace(/\/$/, "")
const KEY = "9baa65b44e0afbbfd8adbf9be3404883" // must match public/9baa65b44e0afbbfd8adbf9be3404883.txt

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (urlList.length === 0) {
  console.error("No URLs found in sitemap; nothing to submit.")
  process.exit(1)
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
})
console.log(`IndexNow: submitted ${urlList.length} URLs, response ${res.status}`)
if (!res.ok && res.status !== 202) process.exit(1)
