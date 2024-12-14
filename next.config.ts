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
};

export default nextConfig;
