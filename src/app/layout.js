import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/common/CustomCursor/CustomCursor";
import Script from "next/script";

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

// ✅ Replace this with your real GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

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
  authors: [{ name: "Sumon Mondle", url: "https://www.lumenza.pro" }],
  creator: "Sumon Mondle",
  metadataBase: new URL("https://www.lumenza.pro"),
  openGraph: {
    title: "Lumenza Midea",
    description: "Discover smart living with Lumenza Midea - comfort meets technology.",
    url: "https://www.lumenza.pro",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="Sumon Mondle" />
        <link rel="canonical" href={metadata.metadataBase.toString()} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta
          property="og:image"
          content={`${metadata.metadataBase.toString()}${metadata.openGraph.images[0].url}`}
        />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta
          name="twitter:image"
          content={`${metadata.metadataBase.toString()}${metadata.twitter.images[0]}`}
        />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Google Analytics */}
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
