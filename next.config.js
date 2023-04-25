/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'tailwindui.com',
      'image.tmdb.org'
    ],
  },
}

module.exports = nextConfig
