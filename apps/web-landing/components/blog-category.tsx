import { BlogCategories } from "@/components-screen/blog-detail-page";
import { Section } from "@/components/section";
import { getPostsForCategory } from "@/lib/api";
import Link from "next/link";

export const BlogCategory = async ({
  category,
}: {
  category: BlogCategories;
}) => {
  const posts = await getPostsForCategory(category);

  return (
    <Section>
      <div className="container">
        {posts?.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${category}/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        )) ?? <div>No posts found</div>}
      </div>
    </Section>
  );
};
