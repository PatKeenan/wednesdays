import { BlogCategory } from "@/components/blog-category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Golf Technology",
  description:
    "Explore the latest golf technology and how it's changing the game.",
  keywords: "golf, technology, wednesdays, app",
  category: "golf-technology",
  openGraph: {
    url: "https://www.wednesday-golf.com/blog/golf-technology",
    title: "Wednesdays Golf App: Golf Technology",
    description:
      "Explore the latest golf technology and how it's changing the game.",
    images: [
      {
        url: "https://www.wednesday-golf.com/blog-images/category/golf-technology.jpg",
        width: 1200,
        height: 630,
        alt: "Wednesdays Golf App: Golf Technology",
      },
    ],
  },
};
export default function SocialGolfingScreen() {
  return (
    <BlogCategory
      category="golf-technology"
      subTitle="Explore the latest golf technology and how it's changing the game."
    />
  );
}
