import { BlogCategories } from "@/components-screen/blog-detail-page";
import { getPostsForCategory } from "@/lib/api";
import Link from "next/link";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

export const BlogCategory = async ({
  category,
}: {
  category: BlogCategories;
}) => {
  const posts = await getPostsForCategory(category);

  const hasPosts = posts && posts?.length > 0;

  return (
    <>
      <div className="container">
        <h1 className="capitalize text-4xl mt-10 mb-4 font-bold">
          {category.replaceAll("-", " ")}
        </h1>
      </div>
      <div className="container">
        {hasPosts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts?.map((post) => (
              <Card key={post.slug}>
                <CardHeader className="space-y-3">
                  <div className="rounded-md overflow-hidden w-full">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0">
                  <Button asChild variant="link">
                    <Link href={`/blog/${category}/${post.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="container">No posts found</div>
        )}
      </div>
    </>
  );
};
