import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com", // Allow Clerk images
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Allow Unsplash (if you use it)
      },
    ],
  },
};

export default nextConfig;
