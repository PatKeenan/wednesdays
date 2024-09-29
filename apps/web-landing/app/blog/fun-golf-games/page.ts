import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Fun Golf Games",
  description: "Explore our collection of fun golf games and challenges.",
  keywords: "golf, games, challenges, wednesdays, app",
  openGraph: {
    url: "https://www.wednesdays-golf.com/blog/fun-golf-games",
  },
};
export { FunGolfGamesScreen as default } from "@/components-screen/fun-golf-games-screen";
