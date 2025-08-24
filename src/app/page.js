// app/page.js (server component by default)
import Home from './Home';

export const metadata = {
  title: "Varghese Construction | Best  Home & Commercial Builders in Kanyakumari & Nagercoil",
  description: "Varghese Construction is the top-rated construction company in South Tamil Nadu. We specialize in homes, premium villas, and commercial building projects with 10+ years of trusted experience in Kanyakumari & Nagercoil.",
  keywords: [
    "home builders Kanyakumari",
    "Construction company in Nagercoil",
    "Villa builders Kanyakumari",
    "Best construction company South Tamil Nadu",
    "Commercial building contractors Nagercoil",
    "Residential construction Kanyakumari",
  ],
  metadataBase: new URL("https://vargheseconstruction.com"),
  alternates: {
    canonical: "https://vargheseconstruction.com/",
  },
  openGraph: {
    title: "Varghese Construction | Best Luxury Home & Villa Builders in Kanyakumari & Nagercoil",
    description: "Trusted construction company for luxury homes, premium villas, and commercial buildings in Kanyakumari, Nagercoil & South Tamil Nadu.",
    url: "https://vargheseconstruction.com/",
    siteName: "Varghese Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varghese Construction - Luxury Home Builders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varghese Construction | Luxury Home & Villa Builders in Kanyakumari",
    description: "Top-rated construction services for premium villas, luxury homes & commercial spaces in Kanyakumari & Nagercoil.",
    images: ["/twitter-image.jpg"],
  },
};
 
export default function Page() {
  return <Home />;
}
