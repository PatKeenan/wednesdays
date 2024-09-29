import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Social Golfing",
  description: "Connect with friends and play golf together.",
  keywords: "golf, social, wednesdays, app",
  openGraph: {
    url: "https://www.wednesdays-golf.com/blog/social-golfing",
  },
};
export { SocialGolfingScreen as default } from "@/components-screen/social-golfing-screen";
