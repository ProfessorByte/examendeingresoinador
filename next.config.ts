import type { NextConfig } from "next";

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

export default nextConfig;
