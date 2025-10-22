import Package from "../pages/package";
import Script from "next/script";

export const metadata = {
  title: "Affordable Construction Packages in Nagercoil | Varghese Construction",
  description: "Choose from affordable construction packages in Nagercoil. Transparent pricing, quality materials & turnkey solutions for every budget.",
  keywords: ["Construction packages Nagercoil", "Villa construction cost Tamil Nadu", "House construction rates Nagercoil","Turnkey home builders Tamil Nadu"],
  verification: { google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50" },
  metadataBase: new URL("https://www.vargheseconstruction.com"),
  alternates: { canonical: "/package" },
  openGraph: {
    title: "Packages & Pricing - Varghese Construction",
    description: "Transparent construction packages for villas, homes, and commercial projects.",
    url: "https://www.vargheseconstruction.com/package",
    siteName: "Varghese Construction",
    images: [{ url: "/og-package.jpg", width: 1200, height: 630, alt: "Packages & Pricing - Varghese Construction" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vargheseconst",
    creator: "@vargheseconst",
    title: "Packages & Pricing - Varghese Construction",
    description: "Transparent construction packages for villas, homes, and commercial projects.",
    images: ["/twitter-package.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  authors: [{ name: "Varghese Construction" }],
  category: "Construction",
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Construction Packages & Pricing",
    "description": "Transparent construction packages for various budgets and requirements in Nagercoil",
    "provider": {
      "@id": "https://www.vargheseconstruction.com/#organization"
    },
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Standard Construction Package",
        "description": "Basic construction package with quality materials and timely completion",
        "priceCurrency": "INR",
        "category": "Construction"
      },
      {
        "@type": "Offer",
        "name": "Premium Construction Package", 
        "description": "Premium package with high-end materials, modern finishes and expert workmanship",
        "priceCurrency": "INR",
        "category": "Construction"
      },
      {
        "@type": "Offer",
        "name": "Luxury Villa Package",
        "description": "Complete luxury villa construction package with premium amenities",
        "priceCurrency": "INR", 
        "category": "Construction"
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Schema for Packages */}
      <Script
        type="application/ld+json"
        id="package-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Package />
    </>
  );
}
