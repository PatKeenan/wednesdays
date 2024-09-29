import { BlogCategory } from "@/components/blog-category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Social Golfing",
  description: "Connect with friends and play golf together.",
  keywords: "golf, social, wednesdays, app",
  category: "social-golfing",
  openGraph: {
    url: "https://www.wednesday-golf.com/blog/social-golfing",
    title: "Wednesdays Golf App: Social Golfing",
    description: "Connect with friends and play golf together.",
    images: [
      {
        url: "https://www.wednesday-golf.com/blog-images/category/social-golfing.jpg",
        width: 1200,
        height: 630,
        alt: "Wednesdays Golf App: Social Golfing",
      },
    ],
  },
};
export default function SocialGolfingScreen() {
  return (
    <BlogCategory
      category="social-golfing"
      subTitle="Connect with friends and play golf together."
    />
  );
}
