/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "tailwindui.com",
      "image.tmdb.org",
    ],
  },
  // experimental: {
  //   output: "standalone",
  // },
};

module.exports = nextConfig;
