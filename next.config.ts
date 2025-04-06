import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_BASE_URL: "localhost:3000",
  },
};

export default nextConfig;
