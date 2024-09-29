/**
 *
 * Pillar Screen
 *
 */

import { Section } from "@/components/section";
import { getPostsForCategory } from "@/lib/api";
import Link from "next/link";

export const FunGolfGamesScreen = async () => {
  const posts = await getPostsForCategory("fun-golf-games");

  return (
    <Section>
      <div className="container">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/fun-golf-games/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};
