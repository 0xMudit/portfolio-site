import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    /* The whole stylesheet is ~6 KB; inlining it removes a render-blocking
       round trip and lets the hero paint with the first HTML response. */
    inlineCss: true,
  },
};

export default nextConfig;
