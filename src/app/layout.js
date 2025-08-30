import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import ClientWrapper from "../app/Clientwrapper";
import Script from 'next/script';

// Initialize fonts (optimized for performance)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Structured Data for Local Business
// Structured Data for Local Business (Improved)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Varghese Construction",
  "description": "Varghese Construction is the most trusted construction company in Kanyakumari and Nagercoil. We build quality homes, villas, and commercial spaces with 10+ years of experience and 500+ satisfied clients.",
  "url": "https://vargheseconstruction.com",
  "telephone": "+91-9042166403", 
  "image": "https://vargheseconstruction.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Thalavaipuram Main Road, Near Beski Auditorium, Simon Nagar",
    "addressLocality": "Nagercoil",
    "addressRegion": "Tamil Nadu",
    "postalCode": "629004",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "8.168429831672974",
    "longitude": "77.41670852597616"
  },
  "openingHours": "Mo-Sa 08:00-20:00",
  "areaServed": [
    "Kanyakumari", 
    "Nagercoil", 
    "Thuckalay", 
    "Marthandam", 
    "Kuzhithurai", 
    "Colachel",
    "Suchindram",
    "Puthukadai",
    "Thiruvattar",
    "Thiruvanathapuram"
  ],
  "serviceType": [
    "Home Construction", 
    "Villa Construction", 
    "Commercial Construction", 
    "Building Contractors",
    "House Planning",
    "Construction Consultancy",
    "Civil Works"
  ],
  "priceRange": "₹₹",
  "sameAs": [
    "https://facebook.com/vargheseconstruction",
    "https://instagram.com/vargheseconstruction",
    "https://linkedin.com/company/vargheseconstruction"
  ]
};


// FAQ Structured Data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas does Varghese Construction serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve all of South Tamil Nadu with focus on Kanyakumari District, Nagercoil, Thuckalay, Marthandam, Kuzhithurai, Colachel and surrounding areas."
      }
    },
    {
      "@type": "Question",
      "name": "How many years of experience does Varghese Construction have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have over 10 years of experience in construction industry with 500+ completed projects and satisfied clients across Kanyakumari and Nagercoil."
      }
    },
    {
      "@type": "Question",
      "name": "What types of construction projects do you handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in home construction, villa projects, commercial buildings, renovation works, interior design, and construction consultancy services."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide free consultation for construction projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer free consultation and estimation for all construction projects in Kanyakumari and Nagercoil areas. Contact us to discuss your project requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Varghese Construction over other builders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With 10+ years experience, 500+ happy clients, quality materials, timely completion, and transparent pricing, we are the most trusted construction company in Kanyakumari district."
      }
    }
  ]
};

export const metadata = {
  title: "Varghese Construction | Trusted Home Builders in Kanyakumari & Nagercoil | 10+ Years Experience",
  description: "Varghese Construction: Most trusted construction company in Kanyakumari & Nagercoil. 10+ years experience, 500+ happy clients. Get quality home construction, villas & commercial buildings at best price. Free consultation available.",
  keywords: [
    "construction company nagercoil",
    "home builders kanyakumari",
    "building contractors nagercoil",
    "house construction kanyakumari",
    "villa construction nagercoil",
    "commercial builders kanyakumari",
    "best construction company nagercoil",
    "civil contractors kanyakumari",
    "home construction cost kanyakumari",
    "building materials nagercoil",
    "house construction contractors nagercoil",
    "construction company kanyakumari district",
    "varghese construction nagercoil",
    "building construction company kanyakumari",
    "home construction services nagercoil",
    "civil construction contractors kanyakumari",
    "house building company nagercoil",
    "residential construction kanyakumari",
    "commercial construction contractors nagercoil",
    "construction consultants kanyakumari"
  ],
  metadataBase: new URL("https://vargheseconstruction.com"),
  alternates: {
    canonical: "https://vargheseconstruction.com",
  },
  openGraph: {
    title: "Varghese Construction | Trusted Builders in Kanyakumari & Nagercoil | 10+ Years Experience",
    description: "10+ years experienced construction company in Kanyakumari & Nagercoil. Quality home construction, villas & commercial buildings with 500+ happy clients. Free consultation available.",
    url: "https://vargheseconstruction.com",
    siteName: "Varghese Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varghese Construction - Trusted Builders in Kanyakumari & Nagercoil with 10+ Years Experience",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varghese Construction | Trusted Builders in Kanyakumari & Nagercoil",
    description: "10+ years experienced construction company in Kanyakumari & Nagercoil. Quality home construction with 500+ happy clients. Free consultation available.",
    images: ["/twitter-image.jpg"],
    site: "@vargheseconstruction", // Add your Twitter handle if available
  },
  themeColor: "#F05A29",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  authors: [{ name: "Varghese Construction" }],
  publisher: "Varghese Construction",
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
  verification: {
    google: "rJh6zo9ZCw3UQagOszffyZe6wzRTk9Vfz2_Umcagozo",
  },
  viewport: "width=device-width, initial-scale=1",
  category: "construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-none">
      <head>
        <Script
          id="company-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="afterInteractive"
        />
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
          strategy="afterInteractive"
        />
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body className={`
        ${geistSans.variable} 
        ${geistMono.variable}
        ${playfair.variable}
        ${montserrat.variable}
        antialiased
      `}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}