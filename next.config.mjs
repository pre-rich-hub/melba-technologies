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
}

export default nextConfig
