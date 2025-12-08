import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
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
    ];
  },
  trailingSlash: true,
};

export default nextConfig;
