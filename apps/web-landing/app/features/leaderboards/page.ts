import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Real-Time Leaderboards",
  description:
    "Experience the thrill of live competition with our dynamic, real-time leaderboards.",
  keywords: "golf, leaderboards, competition, wednesdays, app",
  openGraph: {
    url: "https://www.wednesdays-golf.com/features/leaderboards",
  },
};
export { LeaderboardsScreen as default } from "@/components-screen/leaderboards-screen";
