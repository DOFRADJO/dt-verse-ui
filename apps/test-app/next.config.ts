import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@dtverse/ui", "@dtverse/motion", "@dtverse/utils"],
};

export default nextConfig;