/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,   // ⛔ DISABLE TURBOPACK
  },
  webpack: (config) => {
    return config;  // forces Next.js to use Webpack instead of Turbopack
  },
};

module.exports = nextConfig;
