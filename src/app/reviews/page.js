import Reviews from "../pages/reviews";
import {Metadata} from "next";
import Script from "next/script"; 

export const metadata = { title: "Customer Reviews - Varghese Construction",
    description: "Read reviews from our satisfied clients who trusted Varghese Construction for their luxury homes and villa projects.",
    keywords: ["Construction reviews Nagercoil", "Customer feedback Kanyakumari", "Testimonials Tamil Nadu"],
    verification: { google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50" },
    metadataBase: new URL("https://www.vargheseconstruction.com"),
    alternates: { canonical: "/reviews" },
    openGraph: {
      title: "Customer Reviews - Varghese Construction",
      description: "Client testimonials for luxury home and villa construction projects.",
      url: "https://www.vargheseconstruction.com/reviews",
      siteName: "Varghese Construction",
      images: [{ url: "/og-reviews.jpg", width: 1200, height: 630, alt: "Customer Reviews - Varghese Construction" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vargheseconst",
      creator: "@vargheseconst",
      title: "Customer Reviews - Varghese Construction",
      description: "Client testimonials for luxury home and villa construction projects.",
      images: ["/twitter-reviews.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },

    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
  };
export default function ReviewsPage() {
  const schemaData = {
      "@type": "CollectionPage", 
      "name": "Customer Reviews & Testimonials",
      "description": "Authentic customer reviews and testimonials for Varghese Construction services",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 150,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": 5,
                "bestRating": 5
              },
              "author": {
                "@type": "Person",
                "name": "Satisfied Customer"
              },
              "reviewBody": "Excellent construction quality and professional team",
              "itemReviewed": {
                "@id": "https://www.vargheseconstruction.com/#organization"
              }
            }
          }
        ]
      }
    };
  return (
      <>
       {/* JSON-LD Schema for Packages */}
          <Script
            type="application/ld+json"
            id="reviews-schema"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <Reviews />
      </>
  );
}