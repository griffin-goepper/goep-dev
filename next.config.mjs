import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

/** @type {import('next').NextConfig} */
const __dirname = dirname(fileURLToPath(import.meta.url));
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': resolve(__dirname),
    };
    return config;
  },
}

export default nextConfig
