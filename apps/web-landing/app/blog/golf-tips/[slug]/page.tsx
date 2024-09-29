import {
  type BlogCategories,
  BlogDetailPage,
} from "@/components-screen/blog-detail-page";
import { getPostBySlug, getPostsForCategory } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

const category: BlogCategories = "golf-tips";

export default function GolfTipsDetailPage({ params }: Params) {
  return <BlogDetailPage slug={params.slug} category={category} />;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, category);

  if (!post) {
    return notFound();
  }

  const title = `Wednesdays Golf App: ${post.title}`;

  return {
    title,
    openGraph: {
      title,
      url: `https://www.wednesday-golf.com/blog/${category}/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const postsForCategory = await getPostsForCategory(category);
  return postsForCategory?.map((post) => ({
    slug: post.slug,
  }));
}
