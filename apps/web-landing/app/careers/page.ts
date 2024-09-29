import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Careers",
  description: "Join our team and help shape the future of golf.",
  keywords: "golf, careers, wednesdays, app",
  openGraph: {
    url: "https://www.wednesdays-golf.com/careers",
  },
};
export { CareersScreen as default } from "@/components-screen/careers-screen";
