import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import markdownToHtml from "@/lib/markdownToHtml";
import React from "react";
import { PostBody } from "@/components/post-body";
import { Section } from "@/components/section";
import { Subscribe } from "@/components/subscribe";
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
      <div className="py-4 container px-4 md:px-6 max-w-4xl">
        <Breadcrumb>
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
      </div>
      <section className="pb-12 md:pb-24 lg:pb-32  px-4 md:px-6">
        <div className="container max-w-4xl">
          {/* Breadcrumbs */}
          <PostBody
            content={content}
            coverImage={post.coverImage}
            publishedOn={new Date(post.date).toLocaleDateString()}
          />
        </div>
      </section>
      <Section className="bg-green-100">
        <Subscribe />
      </Section>
    </>
  );
};
