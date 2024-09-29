import { BlogCategory } from "@/components/blog-category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Fun Golf Games",
  description: "Explore our collection of fun golf games and challenges.",
  keywords: "golf, games, challenges, wednesdays, app",
  openGraph: {
    url: "https://www.wednesdays-golf.com/blog/fun-golf-games",
  },
};
export default function FunGolfGamseScreen() {
  return <BlogCategory category="fun-golf-games" />;
}
