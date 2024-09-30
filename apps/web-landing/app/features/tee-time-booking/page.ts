import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wednesdays Golf App: Easy Tee Time Booking",
  description:
    "Book your tee time with ease using our Wednesdays Golf App. Find the perfect time and course for your next round.",
  keywords: "golf, tee time, booking, wednesdays, app, easy, convenient",
  openGraph: {
    url: "https://www.wednesday-golf.com/features/tee-time-booking",
    description:
      "Book your tee time with ease using our Wednesdays Golf App. Find the perfect time and course for your next round.",
  },
};
export { TeeTimeBookingScreen as default } from "@/components-screen/tee-time-booking-screen";
