import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Dynamic Mini-Games",
  description:
    "Enhance your golf game with our dynamic mini-games. Practice and play with our targeted mini-games.",
  keywords: "golf, mini-games, practice, play, wednesdays, app",
  openGraph: {
    url: "https://www.wednesday-golf.com/features/mini-games",
  },
};
export { MiniGamesScreen as default } from "@/components-screen/mini-games-screen";
