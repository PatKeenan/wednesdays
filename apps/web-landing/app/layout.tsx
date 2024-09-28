import type { Metadata } from "next";
import localFont from "next/font/local";
import "project-tailwind/base-theme.css";
import "./globals.css";
import { CSPostHogProvider } from "@/components/post-hog-provider";
import Head from "next/head";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Wednesdays Golf App: Transform Your Golf Game | Join the Waiting List",
  description:
    "Revolutionize your golf experience with Wednesdays Golf App. Play exciting mini-games, compete with friends, and enjoy casual golf like never before. Join the waiting list for our Spring 2025 launch!",
  openGraph: {
    type: "website",
    url: "https://wednesday-golf.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title =
    "Wednesdays Golf App: Transform Your Golf Game | Join the Waiting List";
  const description =
    "Revolutionize your golf experience with Wednesdays Golf App. Play exciting mini-games, compete with friends, and enjoy casual golf like never before. Join the waiting list for our Spring 2025 launch!";
  const url = "https://wednesday-golf.com";
  const imageUrl = "https://wednesday-golf.com/wednesday-image.webp";

  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Wednesdays Golf App" />

        <meta
          name="keywords"
          content="golf app, golf games, social golf, golf mini-games, casual golf, golf technology, fun golf games"
        />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Wednesdays Golf App",
            "applicationCategory": "SportsApplication",
            "operatingSystem": "iOS, Android",
            "description": "${description}",
          }
        `}
        </script>
      </Head>
      <CSPostHogProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background flex flex-col min-h-screen`}
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
