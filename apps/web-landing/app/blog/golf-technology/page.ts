import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Golf Technology",
  description:
    "Explore the latest golf technology and how it's changing the game.",
  keywords: "golf, technology, wednesdays, app",
  openGraph: {
    url: "https://www.wednesdays-golf.com/blog/golf-technology",
  },
};
export { GolfTechnologyScreen as default } from "@/components-screen/golf-technology-screen";
