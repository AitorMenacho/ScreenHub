/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "tailwindui.com",
      "image.tmdb.org",
    ],
    },
  };

module.exports = withPlugins([optimizedImages], nextConfig);