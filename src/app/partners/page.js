import Partners from "../pages/partners";
import Script from "next/script";

export const metadata ={ title: "Our Partners - Varghese Construction",
    description: "Meet the trusted partners and collaborators who help us deliver exceptional construction projects across Kanyakumari & Nagercoil.",
    keywords: ["Construction partners Nagercoil", "Collaborators Tamil Nadu", "Building partners Kanyakumari"],
    verification: { google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50" },
    metadataBase: new URL("https://www.vargheseconstruction.com"),
    alternates: { canonical: "/partners" },
    openGraph: {
      title: "Our Partners - Varghese Construction",
      description: "Trusted collaborators helping us deliver exceptional construction projects.",
      url: "https://www.vargheseconstruction.com/partners",
      siteName: "Varghese Construction",
      images: [{ url: "/og-partners.jpg", width: 1200, height: 630, alt: "Our Partners - Varghese Construction" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vargheseconst",
      creator: "@vargheseconst",
      title: "Our Partners - Varghese Construction",
      description: "Trusted collaborators helping us deliver exceptional construction projects.",
      images: ["/twitter-partners.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
  };

export default function PartnersPage() {
  const schemaData = {
      "@type": "CollectionPage",
      "name": "Our Trusted Partners",
      "description": "Network of trusted partners and collaborators in construction industry",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Organization",
              "name": "Material Suppliers",
              "description": "Trusted construction material suppliers"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Organization", 
              "name": "Architecture Firms",
              "description": "Collaborating architecture and design partners"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Organization",
              "name": "Engineering Consultants",
              "description": "Structural and civil engineering partners"
            }
          }
        ]
      }
    };
  return( <>
   {/* JSON-LD Schema for Packages */}
      <Script
        type="application/ld+json"
        id="partners-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
     <Partners />
  </>
  );
}