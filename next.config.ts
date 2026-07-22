import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Gereksiz büyük varyantları üretme -> daha küçük dosya, daha hızlı LCP
    deviceSizes: [360, 480, 640, 828, 1080, 1200],
    imageSizes: [96, 160, 256, 384],
    qualities: [60, 70, 75],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizeCss: true,
    inlineCss: true,
  },
  compiler: {
    removeConsole: { exclude: ["error"] },
  },
};

export default nextConfig;
