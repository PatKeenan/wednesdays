import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Blog",
  description:
    "Your source for golf tips, technology insights, fun games, and social golfing ideas.",
  keywords: "golf, tips, technology, games, social, wednesdays, app",
  openGraph: {
    url: "https://www.wednesday-golf.com/blog",
  },
};

export { BlogScreen as default } from "@/components-screen/blog-screen";
