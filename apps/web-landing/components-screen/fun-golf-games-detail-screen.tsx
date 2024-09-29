import { getPostBySlug, getPostsForCategory } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import React from "react";

type Params = {
  params: {
    slug: string;
  };
};

export const FunGolfGamesDetailPage = async ({ params }: Params) => {
  const post = await getPostBySlug(params.slug, "fun-golf-games");

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug, "fun-golf-games");

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const postsForCategory = await getPostsForCategory("fun-golf-games");

  return postsForCategory.map((post) => ({
    slug: post.slug,
  }));
}
