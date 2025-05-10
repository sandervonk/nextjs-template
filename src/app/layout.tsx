import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import SmoothScrolling from "@/components/SmoothScrolling";
import { Cursor } from "motion-plus/react";

const inter = Inter({
  weight: "variable",
  style: "normal",
  subsets: ["latin"],
  variable: "--font",
});

const SITE_URL = "https://svonk.me";
const SITE_TITLE = "Sander Vonk";
const SITE_PAGE = [SITE_TITLE, "Home"].join(" | ");
const SITE_DESCRIPTION =
  "Hi, I'm Sander, a student studying Information Systems and Human-Computer Interaction at Carnegie Mellon developing web applications aimed at providing equal opportunity for students worldwide";
export const metadata: Metadata = {
  title: SITE_PAGE,
  metadataBase: new URL(SITE_URL),
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_PAGE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: "/img/og.webp",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_PAGE,
    description: SITE_DESCRIPTION,
    images: ["/img/og.webp"],
    creator: "@sandercvonk",
  },
  icons: {
    icon: [
      {
        url: "/img/icon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/img/icon/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/img/icon/favicon-dark.ico",
        type: "image/x-icon",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: [
      { url: "/img/icon/favicon.ico", type: "image/x-icon" },
      {
        url: "/img/icon/favicon-dark.ico",
        type: "image/x-icon",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: [
      {
        url: "/img/icon/apple-touch-icon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SmoothScrolling>
          <Cursor />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
