import { BlogCategory } from "@/components/blog-category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Fun Golf Games",
  description: "Explore our collection of fun golf games and challenges.",
  keywords: "golf, games, challenges, wednesdays, app",
  category: "fun-golf-games",
  openGraph: {
    url: "https://www.wednesday-golf.com/blog/fun-golf-games",
    title: "Wednesdays Golf App: Fun Golf Games",
    description: "Explore our collection of fun golf games and challenges.",
    images: [
      {
        url: "https://www.wednesday-golf.com/blog-images/category/fun-golf-games.jpg",
        width: 1200,
        height: 630,
        alt: "Wednesdays Golf App: Fun Golf Games",
      },
    ],
  },
};
export default function FunGolfGamseScreen() {
  return (
    <BlogCategory
      category="fun-golf-games"
      subTitle="Discover exciting ways to add variety and challenge to your golf rounds with our collection of fun golf games."
    />
  );
}
