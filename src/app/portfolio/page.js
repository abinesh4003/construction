import Portfolio from "../pages/portfolio";
import Script from 'next/script';

export const metadata = {
    title: "About Varghese Construction Trusted Builders in Nagercoil",
    description: "Varghese Construction has 20+ years of experience in building luxury homes, villas & commercial projects in Nagercoil. Quality, trust & innovation.",
    keywords: ["Varghese Construction Nagercoil", "Trusted builders in Tamil Nadu", "Experienced home builders Nagercoil","Best construction company Tamil Nadu"],
    verification: { google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50" },
    metadataBase: new URL("https://www.vargheseconstruction.com"),
    alternates: { canonical: "/portfolio" },
    openGraph: {
      title: "Portfolio - Varghese Construction",
      description: "Showcasing our completed projects and premium construction work.",
      url: "https://www.vargheseconstruction.com/portfolio",
      siteName: "Varghese Construction",
      images: [{ url: "https://www.vargheseconstruction.com/og-portfolio.jpg", width: 1200, height: 630, alt: "Portfolio - Varghese Construction" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vargheseconst",
      creator: "@vargheseconst",
      title: "Portfolio - Varghese Construction",
      description: "Showcasing our completed projects and premium construction work.",
      images: ["https://www.vargheseconstruction.com/twitter-portfolio.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
  };

export default function PortfolioPage() {
  const schemaData = {
      "@type": "CollectionPage",
      "name": "Project Portfolio",
      "description": "Showcase of completed construction projects including luxury homes, villas, and commercial buildings",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 25,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "CreativeWork",
              "name": "Luxury Villa Projects",
              "description": "Premium villa construction projects in Nagercoil"
            }
          },
          {
            "@type": "ListItem", 
            "position": 2,
            "item": {
              "@type": "CreativeWork",
              "name": "Residential Home Projects",
              "description": "Custom home construction projects across Tamil Nadu"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "CreativeWork", 
              "name": "Commercial Building Projects",
              "description": "Commercial construction and development projects"
            }
          }
        ]
      }
    };
  return (<>
    {/* JSON-LD Schema for Packages */}
    <Script
      type="application/ld+json"
      id="portfolio-schema"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
    <Portfolio/>
  </>
  );
}