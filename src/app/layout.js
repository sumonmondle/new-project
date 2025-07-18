import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/common/CustomCursor/CustomCursor";
import Script from "next/script";  // Import next/script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Lumenza Midea",
  description: "Lumenza Midea is a smart and modern solution for digital comfort, innovation, and lifestyle.",
  keywords: [
    "Lumenza Midea",
    "smart home",
    "digital lifestyle",
    "modern appliances",
    "Next.js SEO",
    "JavaScript web app",
    "Sumon Mondle",
    "technology",
    "innovation",
  ],
  authors: [{ name: "Sumon Mondle", url: "https://www.lumenzamidea.com" }],
  creator: "Sumon Mondle",
  metadataBase: new URL("https://www.lumenzamidea.com"),
  openGraph: {
    title: "Lumenza Midea",
    description: "Discover smart living with Lumenza Midea - comfort meets technology.",
    url: "https://www.lumenzamidea.com",
    siteName: "Lumenza Midea",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Lumenza Midea Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumenza Midea",
    description: "Experience modern living with Lumenza Midea.",
    images: ["/logo.png"],
    creator: "@lumenzamidea",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // <-- এখানে তোমার GA4 Measurement ID বসাবে

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
