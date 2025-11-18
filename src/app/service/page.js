
import Service from "../pages/service";
import { Metadata } from 'next';
import Script from "next/script";

export const metadata =  {
    title: "Construction Services in Nagercoil Homes, Villas & Commercial",
    description: "Explore Varghese Construction's premium services including luxury home building, villa projects, and commercial construction in Nagercoil & Kanyakumari.",
    keywords: ["Home construction services Nagercoil", "Villa builders Nagercoil", "Commercial construction Tamil Nadu", "Renovation and interiors Nagercoil"],
    verification: { google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50" },
    metadataBase: new URL("https://www.vargheseconstruction.com"),
    alternates: { canonical: "/service" },
    openGraph: {
      title: "Our Services - Varghese Construction",
      description: "Explore our construction services in Nagercoil. From premium villas to commercial projects, Varghese Construction delivers quality on time.",
      url: "https://www.vargheseconstruction.com/service",
      siteName: "Varghese Construction",
      images: [{ url: "https://www.vargheseconstruction.com/og-service.jpg", width: 1200, height: 630, alt: "Our Services - Varghese Construction" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vargheseconst",
      creator: "@vargheseconst",
      title: "Our Services - Varghese Construction",
      description: "Premium residential, villa, and commercial construction services.",
      images: ["https://www.vargheseconstruction.com/twitter-service.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
  }
 

export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Construction Services",
    "description":
      "Premium construction services including luxury homes, villas, and commercial projects in Nagercoil & Kanyakumari.",
    "provider": {
      "@id": "https://www.vargheseconstruction.com/#organization",
    },
    "serviceType": "Construction",
    "areaServed": ["Nagercoil", "Kanyakumari", "Tamil Nadu"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Home Construction",
            "description": "Custom luxury home building services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Villa Construction",
            "description": "Premium villa construction projects",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Construction",
            "description": "Commercial building construction services",
          },
        },
      ],
    },
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Service />
    </>
  );
}