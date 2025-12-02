import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure webpack to handle Windows DLL issues
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  // Handle source maps more gracefully
  productionBrowserSourceMaps: false,
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
