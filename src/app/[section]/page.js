// app/[section]/page.js
import Home from '../Home';
import { notFound } from 'next/navigation';

const seo = {
  home: {
    title: "Luxury Home Builders in Nagercoil | Varghese Construction",
    description: "Varghese Construction, trusted builders in Kanyakumari district. We deliver quality homes, villas & projects with transparent pricing and timely completion.",
    keywords: [
      "Construction company Nagercoil",
      "Villa builders Kanyakumari",
      "House construction Tamil Nadu",
      "Luxury home builders Nagercoil",
      "Renovation services"
    ],
    verification: { google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50" },
    metadataBase: new URL("https://www.vargheseconstruction.com"),
    alternates: { canonical: "/" },
    openGraph: {
      title: "Luxury Home Builders in Nagercoil | Varghese Construction",
      description: "Varghese Construction, trusted builders in Kanyakumari district. We deliver quality homes, villas & projects with transparent pricing and timely completion.",
      url: "https://www.vargheseconstruction.com",
      siteName: "Varghese Construction",
      images: [{ url: "/og-home.jpg", width: 1200, height: 630, alt: "Varghese Construction - Luxury Home Builders" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@vargheseconst",
      creator: "@vargheseconst",
      title: "Luxury Home Builders in Nagercoil | Varghese Construction",
      description: "Varghese Construction, trusted builders in Kanyakumari district. We deliver quality homes, villas & projects with transparent pricing and timely completion.",
      images: ["/twitter-home.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#F05A29" }],
    },
    manifest: "/manifest.webmanifest",
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
      
  },

  service: {
    title: "Our Services - Varghese Construction",
    description: "Explore Varghese Construction's premium services including luxury home building, villa projects, and commercial construction in Nagercoil & Kanyakumari.",
    keywords: ["Construction services Nagercoil", "Villa construction Kanyakumari", "House renovation Tamil Nadu"],
    verification: { google: "qPXGbHMkRjHCvd8gn2RhqkM_sWb7e43inQQIV_u3j50" },
    metadataBase: new URL("https://www.vargheseconstruction.com"),
    alternates: { canonical: "/service" },
    openGraph: {
      title: "Our Services - Varghese Construction",
      description: "Premium residential, villa, and commercial construction services in Tamil Nadu.",
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
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#F05A29" }],
    },
    manifest: "/manifest.webmanifest",
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
      
  },

  portfolio: {
    title: "Portfolio - Varghese Construction",
    description: "View our completed projects, including luxury homes, villas, and commercial buildings in Kanyakumari & Nagercoil.",
    keywords: ["Construction portfolio Nagercoil", "Luxury homes Kanyakumari", "Villa projects Tamil Nadu"],
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
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#F05A29" }],
    },
    manifest: "/manifest.webmanifest",
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
      
  },

  package: {
    title: "Packages & Pricing - Varghese Construction",
    description: "Discover our construction packages with transparent pricing for villas, luxury homes, and commercial projects in Kanyakumari & Nagercoil.",
    keywords: ["Construction packages Nagercoil", "Villa pricing Tamil Nadu", "Luxury home packages"],
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
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#F05A29" }],
    },
    manifest: "/manifest.webmanifest",
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
      
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
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#F05A29" }],
    },
    manifest: "/manifest.webmanifest",
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
      
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
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#F05A29" }],
    },
    manifest: "/manifest.webmanifest",
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
      
  },

  contact: {
    title: "Contact Us - Varghese Construction",
    description: "Get in touch with Varghese Construction for inquiries, quotes, or consultations regarding your home or villa project in Tamil Nadu.",
    keywords: ["Contact builders Nagercoil", "Construction inquiry Tamil Nadu", "Get a quote Kanyakumari"],
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
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#F05A29" }],
    },
    manifest: "/manifest.webmanifest",
    authors: [{ name: "Varghese Construction" }],
    category: "Construction",
      
  },
};


export async function generateMetadata({ params }) {
  const { section } = await params;   // ✅ Await params
  const meta = seo[section];

  if (!meta) return {}; // fallback or trigger notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": meta.title,
    "description": meta.description,
    "url": meta.openGraph.url,
    "publisher": {
      "@type": "Organization",
      "name": "Varghese Construction",
      "logo": { "@type": "ImageObject", "url": "/logo.png" }
    },
  };

  return {
    ...meta,
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
  const { section } = await params;   // ✅ Await params

  if (!seo[section]) {
    notFound(); // undefined route → 404
  }

  return <Home scrollTo={section} />;
}