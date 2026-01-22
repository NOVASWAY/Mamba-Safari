/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Static export for GitHub Pages
  output: 'export',
  // Base path for GitHub Pages (remove this if using a custom domain)
  // If your repo is username.github.io, you don't need basePath
  // If your repo is username/repo-name, set basePath to '/repo-name'
  basePath: '/Mamba-Safari',
  // Asset prefix to ensure images and assets load correctly
  assetPrefix: '/Mamba-Safari',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    domains: [],
  },
  // Enable compression
  compress: true,
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
}

export default nextConfig
