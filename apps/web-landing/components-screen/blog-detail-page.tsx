import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import React from "react";
import { PostBody } from "@/components/post-body";
import { Section } from "@/components/section";
import { Subscribe } from "@/components/subscribe";
import Head from "next/head";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export type BlogCategories =
  | "fun-golf-games"
  | "golf-technology"
  | "golf-tips"
  | "social-golfing";

export type BlogDetailPageProps = {
  category: BlogCategories;
  slug: string;
};

export const BlogDetailPage = async ({
  slug,
  category,
}: BlogDetailPageProps) => {
  const post = await getPostBySlug(slug, category);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <Head>
        <link rel="preload" href={post.coverImage} as="image" />
      </Head>
      <section className="w-full pt-6 md:pt-8 pb-6 md:pb-12 lg:pb-18 xl:pb-22 container">
        {/* Breadcrumbs */}
        <Breadcrumb className="max-w-4xl mx-auto px-4 pb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/blog/${category}`}>
                {category === "fun-golf-games"
                  ? "Fun Golf Games"
                  : category === "golf-technology"
                  ? "Golf Technology"
                  : category === "golf-tips"
                  ? "Golf Tips"
                  : "Social Golfing"}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <PostBody
          content={content}
          coverImage={post.coverImage}
          publishedOn={new Date(post.date).toLocaleDateString()}
        />
      </section>
      <Section className="bg-green-100">
        <Subscribe />
      </Section>
    </>
  );
};
