import { BlogCategories } from "@/components-screen/blog-detail-page";
import { getPostsForCategory } from "@/lib/api";
import Link from "next/link";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Section } from "./section";
import { Calendar } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Subscribe } from "./subscribe";

export const BlogCategory = async ({
  category,
  subTitle,
}: {
  category: BlogCategories;
  subTitle: string;
}) => {
  const posts = await getPostsForCategory(category);

  const hasPosts = posts && posts?.length > 0;

  return (
    <>
      <div className="py-4 container px-4 sm:px-0">
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
              <BreadcrumbPage>
                {category === "fun-golf-games"
                  ? "Fun Golf Games"
                  : category === "golf-technology"
                  ? "Golf Technology"
                  : category === "golf-tips"
                  ? "Golf Tips"
                  : "Social Golfing"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Section className=" bg-green-100">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter capitalize sm:text-4xl md:text-5xl lg:text-6xl/none">
                {category.replaceAll("-", " ")}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section className="pb-12 pt-6 md:pb-24 md:pt-12 lg:pb-32 lg:pt-16">
        <div className="container px-4 md:px-6">
          {hasPosts ? (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card key={post.slug} className="flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <CardTitle className="text-2xl font-bold mb-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-500 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString()}
                      </time>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${category}/${post.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center">No posts found</div>
          )}
        </div>
      </section>
      <Section className="bg-gray-100">
        <Subscribe
          heading="Ready to spice up your golf game?"
          description="Join our waiting list to get notified when we launch"
          buttonText="Join Waiting List"
        />
      </Section>
    </>
  );
};
