import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Connect and Compete with Social Golf Features",
  description:
    "Connect with fellow golfers, plan your next round, and take your golfing experience to the next level with Wednesdays Golf App.",
  keywords: "golf, social, connect, compete, wednesdays, app",
  openGraph: {
    url: "https://www.wednesday-golf.com/features/social",
  },
};

export { SocialFeaturesScreen as default } from "@/components-screen/social-features-screen";
