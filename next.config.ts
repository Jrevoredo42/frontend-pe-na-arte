import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
    ],
  },
  basePath: '/frontend-pe-na-arte',
  assetPrefix: '/frontend-pe-na-arte/',
};

export default nextConfig;
