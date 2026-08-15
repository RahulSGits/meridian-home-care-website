import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["", 1, "weekly"],
    ["/services", 0.9, "monthly"],
    ["/pricing", 0.9, "monthly"],
    ["/book", 0.9, "monthly"],
    ["/gallery", 0.7, "monthly"],
    ["/about", 0.7, "yearly"],
    ["/areas", 0.7, "monthly"],
    ["/faq", 0.6, "monthly"],
    ["/contact", 0.6, "yearly"],
    ["/careers", 0.5, "weekly"],
    ["/privacy", 0.2, "yearly"],
    ["/terms", 0.2, "yearly"],
    ["/accessibility", 0.2, "yearly"],
  ];

  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
