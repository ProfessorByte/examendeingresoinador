import { getExamsData } from "@/utils/services";
import type { MetadataRoute } from "next";

const slugs = (await getExamsData()).map((exam) => exam.slug);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://examendeingresoinador.pages.dev",
      priority: 1,
    },
    ...slugs.map((slug) => ({
      url: `https://examendeingresoinador.pages.dev/exams/fcyt/${slug}`,
      priority: 0.8,
    })),
  ];
}
