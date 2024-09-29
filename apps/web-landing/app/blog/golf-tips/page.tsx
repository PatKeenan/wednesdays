import { BlogCategory } from "@/components/blog-category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Golf Tips",
  description: "Improve your golf game with our expert tips.",
  keywords: "golf, tips, wednesdays, app",
  category: "golf-tips",
  openGraph: {
    url: "https://www.wednesday-golf.com/blog/golf-tips",
    title: "Wednesdays Golf App: Golf Tips",
    description: "Improve your golf game with our expert tips.",
    images: [
      {
        url: "https://www.wednesday-golf.com/blog-images/category/golf-tips.jpg",
        width: 1200,
        height: 630,
        alt: "Wednesdays Golf App: Golf Tips",
      },
    ],
  },
};
export default function GolfTipsScreen() {
  return (
    <BlogCategory
      category="golf-tips"
      subTitle="Improve your golf game with our expert tips."
    />
  );
}
