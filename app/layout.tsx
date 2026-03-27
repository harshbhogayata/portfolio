import type { Metadata } from "next";
import { DM_Serif_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Bhogayata · v2.3.1",
  description:
    "Software engineer. Security-aware, full-stack, ships with intent. Based in Vadodara, India.",
  metadataBase: new URL("https://harshbhogayata.vercel.app"),
  openGraph: {
    title: "Harsh Bhogayata · v2.3.1",
    description:
      "Software engineer. Security-aware, full-stack, ships with intent. Based in Vadodara, India.",
    url: "https://harshbhogayata.vercel.app",
    siteName: "Harsh Bhogayata",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Bhogayata · v2.3.1",
    description:
      "Software engineer. Security-aware, full-stack, ships with intent. Based in Vadodara, India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${geist.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-paper">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
