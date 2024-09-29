import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import type { Post } from "@/interfaces/posts";

const postsDirectory = join(process.cwd(), "_blog");

export async function getPostCategories() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostCategorySlugs(category: string) {
  const slugs = await Promise.all(
    fs.readdirSync(join(postsDirectory, category)).map((slug) => slug)
  );
  return slugs.flat();
}

// Get post by slug
export async function getPostBySlug(
  slug: string,
  category: string
): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const file = fs.readFileSync(
    join(postsDirectory, category, `${realSlug}.md`),
    "utf8"
  );
  const { data, content } = matter(file);
  return { ...data, content, slug: realSlug } as Post;
}

export async function getAllPosts(): Promise<Post[]> {
  const categories = await getPostCategories();

  const allPosts = await Promise.all(
    categories.map(async (category) => {
      const slugs = await getPostCategorySlugs(category);
      const posts = await Promise.all(
        slugs.map((slug) => getPostBySlug(slug, category))
      );
      return posts;
    })
  );
  const flatPosts = allPosts
    .flat()
    .sort((a, b) => a.date.localeCompare(b.date));
  return flatPosts;
}

export async function getPostsForCategory(
  category: string
): Promise<Post[] | null> {
  const slugs = await getPostCategorySlugs(category);
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, category))
  );
  return posts.sort((a, b) => a.date.localeCompare(b.date));
}
