import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Contact Us",
  description: "Get in touch with us for support or to share your feedback.",
  keywords: "golf, contact, support, feedback, wednesdays, app",
  openGraph: {
    url: "https://www.wednesdays-golf.com/contact",
  },
};
export { ContactScreen as default } from "@/components-screen/contact-screen";
