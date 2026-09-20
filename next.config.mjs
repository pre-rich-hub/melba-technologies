/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets QA builds run beside a live dev server without touching its .next folder.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // One canonical host: www -> apex (trailing slashes are already normalised by Next).
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.melba.et" }],
        destination: "https://melba.et/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
