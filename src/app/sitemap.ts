import { getFcytExamsData } from "@/utils/services";
import type { MetadataRoute } from "next";

const slugs = (await getFcytExamsData()).map((exam) => exam.slug);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://examendeingresoinador.pages.dev",
      priority: 1,
    },
    ...slugs.map((slug) => ({
      url: `https://examendeingresoinador.pages.dev/fcyt/exams/${slug}`,
      priority: 0.7,
    })),
  ];
}
