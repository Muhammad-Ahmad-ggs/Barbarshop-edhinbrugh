/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ─── ADD YOUR IMAGE DOMAINS HERE ──────────────────────────────────
    // If you use external image hosting (e.g., Cloudinary, Unsplash),
    // add the domain string below. Example: "images.unsplash.com"
    domains: [],
    // Enables modern image formats for better performance
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
