/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for production
  swcMinify: true,
  // Enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;
