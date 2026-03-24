import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hdglobalgroup.us"),
  title: {
    default:
      "HD Global Group | Underground Construction & HDD Drilling Services",
    template: "%s | HD Global Group",
  },
  description:
    "HD Global Group delivers expert HDD drilling, fiber optic installation & underground utility services across the US. Request a free quote today.",
  keywords: [
    "horizontal directional drilling",
    "HDD drilling",
    "fiber optic installation",
    "underground construction",
    "utility contractor",
    "trenchless drilling",
    "underground utility contractor",
    "HDD drilling services United States",
    "fiber optic installation contractor",
    "underground construction company",
  ],
  authors: [{ name: "HD Global Group" }],
  creator: "HD Global Group",
  publisher: "HD Global Group",
  formatDetection: { telephone: true, email: true, address: true },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hdglobalgroup.us",
    siteName: "HD Global Group",
    title:
      "HD Global Group | Underground Construction & HDD Drilling Services",
    description:
      "Expert underground construction services — HDD drilling, fiber optic installation, project management. Serving contractors nationwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HD Global Group - Underground Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HD Global Group | Underground Construction & HDD Drilling",
    description: "Expert underground construction services across the US.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hdglobalgroup.us",
  },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-surface-dim text-on-surface`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary-container focus:text-on-primary-container focus:rounded-lg focus:text-sm focus:font-semibold focus:tracking-wider focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
