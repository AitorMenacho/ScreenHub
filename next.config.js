/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "tailwindui.com",
      "image.tmdb.org",
      "via.placeholder.com",
    ],
  },
  experimental: {
    // Obligatorio para exportar en docker
    outputStandalone: true,
  },
};

module.exports = nextConfig;
