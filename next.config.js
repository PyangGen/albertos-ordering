/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      
    ],
  },
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, child_process: false };
    return config;
  },
};

module.exports = nextConfig;
