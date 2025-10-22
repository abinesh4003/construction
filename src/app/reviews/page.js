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
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Customer Reviews & Testimonials",
  "description": "Authentic customer reviews and testimonials for Varghese Construction services in Nagercoil",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
          "author": { "@type": "Person", "name": "Sudarson" },
          "reviewBody": "From planning to execution, their precision and commitment were outstanding. My home was completed ahead of schedule with flawless detailing and uncompromising quality.",
          "itemReviewed": { "@id": "https://www.vargheseconstruction.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
          "author": { "@type": "Person", "name": "Selvam" },
          "reviewBody": "Our commercial project was executed seamlessly with excellent coordination. They managed approvals effortlessly while maintaining top-notch quality throughout.",
          "itemReviewed": { "@id": "https://www.vargheseconstruction.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
          "author": { "@type": "Person", "name": "Predheesh Kumar" },
          "reviewBody": "Having worked with them on multiple projects, I can confidently say they excel in timely delivery, superior quality, and absolute transparency in pricing.",
          "itemReviewed": { "@id": "https://www.vargheseconstruction.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
          "author": { "@type": "Person", "name": "Dr. Jagan Jascut" },
          "reviewBody": "They translated my design ideas into reality with remarkable precision. Every detail was executed with care, making the entire journey stress-free and satisfying.",
          "itemReviewed": { "@id": "https://www.vargheseconstruction.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
          "author": { "@type": "Person", "name": "Nandhakumar" },
          "reviewBody": "Our resort project was handled with exceptional professionalism. Despite regulatory challenges, they delivered world-class craftsmanship beyond expectations.",
          "itemReviewed": { "@id": "https://www.vargheseconstruction.com/#organization" }
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