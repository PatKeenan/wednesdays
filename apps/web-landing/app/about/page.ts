import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: About Us",
  description:
    "From organizing games to improving skills and fostering a vibrant community, Wednesdays Golf App is at the forefront of golf's digital revolution",
  keywords:
    "golf, app, wednesdays, about, us, golf, golf games, challenges, mini-games",
  openGraph: {
    url: "https://www.wednesday-golf.com/about",
    description:
      "From organizing games to improving skills and fostering a vibrant community, Wednesdays Golf App is at the forefront of golf's digital revolution",
  },
};
export { AboutUsScreen as default } from "@/components-screen/about-us-screen";
