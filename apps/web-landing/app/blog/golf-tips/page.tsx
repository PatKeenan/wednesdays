import { BlogCategory } from "@/components/blog-category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Golf Tips",
  description: "Improve your golf game with our expert tips.",
  keywords: "golf, tips, wednesdays, app",
  openGraph: {
    url: "https://www.wednesdays-golf.com/blog/golf-tips",
  },
};
export default function GolfTipsScreen() {
  return <BlogCategory category="golf-tips" />;
}
