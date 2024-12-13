import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/exams/:slug",
        destination: "/exams/fcyt/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
