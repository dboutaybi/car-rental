import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone", // This helps with some Webpack setups
  // To force Webpack, run: npm run dev -- --webpack
};

export default nextConfig;
