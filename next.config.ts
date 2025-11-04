import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'mjlsveljvauthnbcaxsq.supabase.co',
      },
    ],
  },
  devIndicators: {
    position: 'bottom-right',
  },
  reactStrictMode: false,
};

export default nextConfig;
