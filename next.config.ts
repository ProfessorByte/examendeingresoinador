import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/fcyt/darkmind",
        permanent: false,
      },
      {
        source: "/fcyt",
        destination: "/fcyt/darkmind",
        permanent: false,
      },
      {
        source: "/fcyt/exams",
        destination: "/fcyt/darkmind",
        permanent: false,
      },
      {
        source: "/exams/:slug",
        destination: "/fcyt/exams/:slug",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
};

if (process.env.NODE_ENV === "development") {
  (async () => {
    await setupDevPlatform();
  })();
}

export default nextConfig;
