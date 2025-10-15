// app/page.js (server component by default)
import Home from './Home';
// Re-exporting metadata for the home page

 export const metadata = {
  title: "Luxury Home Builders in Nagercoil | Varghese Construction",
  description: "Build luxury villas & homes in Nagercoil with Varghese Construction. Trusted builders with 10+ years of experience in premium residential & commercial projects.",
  keywords: [
  " Luxury home builders Nagercoil",
"Villa construction Tamil Nadu",
"Best construction company Nagercoil",
"Residential & commercial builders",],
  verification: {
    google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50",
  },
  metadataBase: new URL("https://www.vargheseconstruction.com"),
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "Luxury Home Builders in Nagercoil | Varghese Construction",
    description: "Varghese Construction, trusted builders in Kanyakumari district. We deliver quality homes, villas & projects with transparent pricing and timely completion.",
    url: "https://www.vargheseconstruction.com",
    siteName: "Varghese Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varghese Construction - Luxury Home Builders in Kanyakumari & Nagercoil, Tamil Nadu",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vargheseconst",
    creator: "@vargheseconst",
    title: "Luxury Home Builders in Nagercoil | Varghese Construction",
    description: "Varghese Construction, trusted builders in Kanyakumari district. We deliver quality homes, villas & projects with transparent pricing and timely completion.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#F05A29",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  authors: [{ name: "Varghese Construction" }],
  category: "Construction",
  other: {
    "facebook-domain-verification": "your-facebook-verification-code",
  },
 };
export default function Page() {
return <Home scrollTo="home" />;
}
