import { Section } from "@/components/section";
import React from "react";
import { BlogCategories } from "./blog-detail-page";
import {
  ArrowRight,
  Cpu,
  Gamepad2,
  Lightbulb,
  LucideIcon,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getPostBySlug } from "@/lib/api";
import Image from "next/image";
import { Subscribe } from "@/components/subscribe";

type Category = {
  title: BlogCategories;
  description: string;
  icon: LucideIcon;
};
const categories: Category[] = [
  {
    title: "fun-golf-games",
    description:
      "Discover exciting new ways to enjoy your time on the course with creative golf games and challenges.",
    icon: Gamepad2,
  },
  {
    title: "golf-technology",
    description:
      "Stay up-to-date with the latest advancements in golf tech, from smart clubs to AI-powered training aids.",
    icon: Cpu,
  },
  {
    title: "social-golfing",
    description:
      "Learn how to make the most of your golfing network and enhance your social experience on and off the course.",
    icon: Users,
  },
  {
    title: "golf-tips",
    description:
      "Improve your game with expert advice, covering everything from swing mechanics to course management strategies.",
    icon: Lightbulb,
  },
];

export const BlogScreen = async () => {
  const featuredPosts = await Promise.all([
    getPostBySlug("hazard-hero", "fun-golf-games"),
  ]);

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
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Section className=" bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Wednesdays Golf Blog
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Your source for golf tips, technology insights, fun games, and
                social golfing ideas.
              </p>
            </div>
            {/*  <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input type="text" placeholder="Search articles..." className="flex-1" />
                  <Button type="submit">Search</Button>
                </form>
              </div> */}
          </div>
        </div>
      </Section>
      <Section>
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Blog Categories
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <category.icon className="h-10 w-10 text-green-500 mb-2" />
                  <CardTitle className="capitalize">
                    {category.title.replaceAll("-", " ")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{category.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${category.title}`}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <Section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Featured Articles
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="flex flex-col">
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
                  <div className="text-sm text-green-600 mb-2 capitalize">
                    {post.category.replaceAll("-", " ")}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-500 mb-4">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/blog/${post.category}/${post.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-white">
        <Subscribe />
      </Section>
    </>
  );
};
