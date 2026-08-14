import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root. Without this, Turbopack walks up past the repo and
  // picks up an unrelated package-lock.json in the home directory.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
