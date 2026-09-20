import { ImageResponse } from "next/og"

export const alt = "Melba Technology — custom software, web, mobile and AI in Addis Ababa, Ethiopia"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Social-share card only; never rendered on the site itself. Colors mirror the brand tokens (near-black + ember).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0f0f10",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, color: "#e2572f", textTransform: "uppercase" }}>Melba Technology</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>Build your next digital product with us.</div>
          <div style={{ fontSize: 32, marginTop: 28, color: "#a1a1a6" }}>
            Custom software, web, mobile and AI — Addis Ababa, Ethiopia
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#a1a1a6" }}>melba.et</div>
      </div>
    ),
    size,
  )
}
