import { getPostsForCategory } from "@/lib/api";
import type { MetadataRoute } from "next";

async function getPostsForSitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await Promise.all([
    getPostsForCategory("fun-golf-games"),
    getPostsForCategory("golf-tips"),
    getPostsForCategory("social-golfing"),
    getPostsForCategory("golf-technology"),
  ]);

  return allPosts.flatMap((posts) =>
    posts.map((p) => ({
      url: `https://www.wednesday-golf.com/blog/${p.category}/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.wednesday-golf.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.wednesday-golf.com/careers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: "https://www.wednesday-golf.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: "https://www.wednesday-golf.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.wednesday-golf.com/blog/fun-golf-games",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.wednesday-golf.com/blog/golf-tips",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.wednesday-golf.com/blog/social-golfing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.wednesday-golf.com/blog/golf-technology",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.wednesday-golf.com/features/mini-games",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.wednesday-golf.com/features/leaderboards",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.wednesday-golf.com/features/social",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.wednesday-golf.com/features/tee-time-booking",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...(await getPostsForSitemap()),
  ];
}
