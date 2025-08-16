import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "../app/Clientwrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Varghese Construction | Best Luxury Home Builders in Kanyakumari & Nagercoil",
  description:
    "Varghese Construction is a leading construction company in South Tamil Nadu. We specialize in luxury villas, premium homes, commercial projects & modern architecture. Trusted by 500+ clients with 10+ years of excellence in construction services.",
  keywords: [
    "Luxury Home Builders Kanyakumari",
    "Construction Company in Nagercoil",
    "Best Builders in South Tamil Nadu",
    "Villa Construction Kanyakumari",
    "Commercial Construction Nagercoil",
    "Top Civil Engineers Kanyakumari",
  ],
  metadataBase: new URL("https://vargheseconstruction.com"),
  alternates: {
    canonical: "https://vargheseconstruction.com",
  },
  openGraph: {
    title: "Varghese Construction | Trusted Luxury Builders in Kanyakumari & Nagercoil",
    description:
      "Build your dream villa, home, or commercial project with Varghese Construction. Top-rated builders with 10+ years of experience in premium construction across South Tamil Nadu.",
    url: "https://vargheseconstruction.com",
    siteName: "Varghese Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Home Builders in Kanyakumari - Varghese Construction",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varghese Construction | Luxury Builders in Kanyakumari & Nagercoil",
    description:
      "Top-rated construction company in South Tamil Nadu. Specializing in luxury homes, villas, and commercial spaces with modern architecture.",
    images: ["/twitter-image.jpg"],
  },
  themeColor: "#F05A29",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-none">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
