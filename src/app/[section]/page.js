// app/[section]/page.js
import Home from '../Home';
import { notFound } from 'next/navigation';

const seo = {
  service: {
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
      images: [{ url: "/og-service.jpg", width: 1200, height: 630, alt: "Our Services - Varghese Construction" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vargheseconst",
      creator: "@vargheseconst",
      title: "Our Services - Varghese Construction",
      description: "Premium residential, villa, and commercial construction services.",
      images: ["/twitter-service.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
    schema: {
      "@type": "Service",
      "name": "Construction Services",
      "description": "Premium construction services including luxury homes, villas, and commercial projects in Nagercoil & Kanyakumari",
      "provider": {
        "@id": "https://www.vargheseconstruction.com/#organization"
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
              "description": "Custom luxury home building services"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Villa Construction",
              "description": "Premium villa construction projects"
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
      }
    }
  },

  portfolio: {
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
      images: [{ url: "/og-portfolio.jpg", width: 1200, height: 630, alt: "Portfolio - Varghese Construction" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vargheseconst",
      creator: "@vargheseconst",
      title: "Portfolio - Varghese Construction",
      description: "Showcasing our completed projects and premium construction work.",
      images: ["/twitter-portfolio.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
    schema: {
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
    }
  },

  package: {
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
    schema: {
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
  },

  reviews: {
    title: "Customer Reviews - Varghese Construction",
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
    schema: {
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
    }
  },

  partners: {
    title: "Our Partners - Varghese Construction",
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
    schema: {
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
    }
  },

  contact: {
    title: "Contact Varghese Construction Nagercoil Builders",
    description: "Contact Varghese Construction for home, villa & commercial construction in Nagercoil. Call or visit us to start your dream project today.",
    keywords: ["Contact construction company Nagercoil", "Builders near me in Nagercoil", "Construction company phone number","Varghese Construction Tamil Nadu"],
    verification: { google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50" },
    metadataBase: new URL("https://www.vargheseconstruction.com"),
    alternates: { canonical: "/contact" },
    openGraph: {
      title: "Contact Us - Varghese Construction",
      description: "Reach out for quotes, consultations, or project inquiries.",
      url: "https://www.vargheseconstruction.com/contact",
      siteName: "Varghese Construction",
      images: [{ url: "/og-contact.jpg", width: 1200, height: 630, alt: "Contact Us - Varghese Construction" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vargheseconst",
      creator: "@vargheseconst",
      title: "Contact Us - Varghese Construction",
      description: "Reach out for quotes, consultations, or project inquiries.",
      images: ["/twitter-contact.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
   
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
    schema: {
      "@type": "ContactPage",
      "name": "Contact Varghese Construction",
      "description": "Get in touch with Varghese Construction for construction projects and consultations",
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://www.vargheseconstruction.com/#organization",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9629695979",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Tamil", "Malayalam"]
        }
      }
    }
  },
};

export async function generateMetadata({ params }) {
  const { section } = await params;
  const meta = seo[section];

  if (!meta) return {};

  // Create page-specific schema using the unique schema for each page
  const jsonLd = {
    "@context": "https://schema.org",
    ...meta.schema, // This spreads the unique schema type for each page
    "url": meta.openGraph.url
  };

  return {
    ...meta,
       icons: {
        icon: [
          { url: "/favicon/favicon.ico" },
          { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
          { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      },
      manifest: "/manifest.webmanifest",
    other: {
      "application/ld+json": JSON.stringify(jsonLd),
    },
  };
}

// --- Static params ---
export async function generateStaticParams() {
  return Object.keys(seo).map((section) => ({ section }));
}

// --- Page Component ---
export default async function SectionPage({ params }) {
  const { section } = await params;  

  if (!seo[section]) {
    notFound(); 
  }

  return <Home scrollTo={section} />;
}