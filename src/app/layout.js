import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Montserrat,
  Bebas_Neue,
  Roboto,
  Cormorant_Garamond,
  Raleway,
  Kumar_One,
  Kaushan_Script
} from "next/font/google";
import "./globals.css";
import ClientWrapper from "../app/Clientwrapper";
import Script from "next/script";

// Initialize Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Initialize other fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['italic', 'normal']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '700']
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400'
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500']
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600']
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500']
});

const kumarOne = Kumar_One({
  subsets: ['latin'],
  variable: '--font-kumar-one',
  weight: '400'
});

const kaushanScript = Kaushan_Script({
  subsets: ['latin'],
  variable: '--font-kaushan-script',
  weight: '400'
});

export const metadata = {
  title: "Luxury Home Builders in Nagercoil | Varghese Construction",
  description: "Varghese Construction, trusted builders in Kanyakumari district. We deliver quality homes, villas & projects with transparent pricing and timely completion.",
  keywords: [
    "Construction company Nagercoil",
    "Villa builders Kanyakumari",
    "House construction Tamil Nadu",
    "Luxury home builders Nagercoil",
    "Renovation services"
  ],
  verification: {
    google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50",
  },
  metadataBase: new URL("https://www.vargheseconstruction.com"),
  alternates: {
    canonical: "/",
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
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
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

export const viewport = {
  themeColor: "#F05A29",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-none">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionBusiness",
              "name": "Varghese Construction",
              "url": "https://www.vargheseconstruction.com",
              "logo": "https://www.vargheseconstruction.com/logo.png",
              "image": "https://www.vargheseconstruction.com/og-image.jpg",
              "description": "Premier construction company specializing in luxury villas, custom homes, and commercial projects in Kanyakumari & Nagercoil, Tamil Nadu.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thalavaipuram Main Road, Near Beski Auditorium, Simon Nagar",
                "addressLocality": "Nagercoil",
                "addressRegion": "Tamil Nadu",
                "postalCode": "629004",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "8.1745",
                "longitude": "77.4171"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "telephone": "+91-9629695979",
              "priceRange": "₹₹",
              "areaServed": [
                "Kanyakumari",
                "Nagercoil",
                "Boothapandi",
                "Rajakkamangalam",
                "Muttom",
                "Colachel",
                "Thuckalay",
                "Marthandam",
                "Kavalkinaru",
                "South Tamil Nadu"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Luxury Home Construction",
                      "description": "Premium residential construction services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Villa Construction",
                      "description": "Custom villa building services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Construction",
                      "description": "Commercial building construction services"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/vargheseconstruction",
                "https://www.instagram.com/vargheseconstruction",
                "https://twitter.com/vargheseconst"
              ]
            })
          }}
        />
      </head>
      <body className={`
        ${geistSans.variable} 
        ${geistMono.variable}
        ${playfair.variable}
        ${montserrat.variable}
        ${bebas.variable}
        ${roboto.variable}
        ${cormorant.variable}
        ${raleway.variable}
        ${kumarOne.variable}
        ${kaushanScript.variable}
        antialiased
      `}>
        <ClientWrapper>{children}</ClientWrapper>

        {/* Additional Schema for Reviews */}
        <Script id="review-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Customer Reviews - Varghese Construction",
            "description": "Read authentic customer reviews and testimonials for Varghese Construction services",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </Script>
      </body>
    </html>
  );
}