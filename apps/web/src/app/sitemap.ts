import type { MetadataRoute } from "next";

import { env } from "@/lib/env";
import { publicPortfolioProjects } from "@/data/portfolio";

const routes = [
  "",
  "/projects",
  "/about",
  "/services",
  "/stack",
  "/process",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = publicPortfolioProjects.map((project) => `/projects/${project.slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
