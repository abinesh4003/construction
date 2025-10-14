import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Montserrat,
  Bebas_Neue,
  Roboto,
  Cormorant_Garamond,
  Raleway,
  Kumar_One,
  Kaushan_Script
} from "next/font/google";
import "./globals.css";
import ClientWrapper from "../app/Clientwrapper";
import Script from "next/script";

// Initialize Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Initialize other fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['italic', 'normal']
});


const bebas = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400'
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500']
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600']
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500']
});

const kumarOne = Kumar_One({
  subsets: ['latin'],
  variable: '--font-kumar-one',
  weight: '400'
});

const kaushanScript = Kaushan_Script({
  subsets: ['latin'],
  variable: '--font-kaushan-script',
  weight: '400'
});


export const viewport = {
  themeColor: "#FFD580",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-none">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConstructionBusiness",
              "name": "Varghese Construction",
              "url": "https://www.vargheseconstruction.com",
              "logo": "https://www.vargheseconstruction.com/logo.png",
              "image": "https://www.vargheseconstruction.com/og-image.jpg",
              "description": "Premier construction company specializing in luxury villas, custom homes, and commercial projects in Kanyakumari & Nagercoil, Tamil Nadu.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thalavaipuram Main Road, Near Beski Auditorium, Simon Nagar",
                "addressLocality": "Nagercoil",
                "addressRegion": "Tamil Nadu",
                "postalCode": "629004",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "8.1745",
                "longitude": "77.4171"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "telephone": "+91-9629695979",
              "priceRange": "₹₹",
              "areaServed": [
                "Kanyakumari",
                "Nagercoil",
                "Boothapandi",
                "Rajakkamangalam",
                "Muttom",
                "Colachel",
                "Thuckalay",
                "Marthandam",
                "Kavalkinaru",
                "South Tamil Nadu"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Luxury Home Construction",
                      "description": "Premium residential construction services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Villa Construction",
                      "description": "Custom villa building services"
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
              },
              "sameAs": [
                "https://www.facebook.com/vargheseconstruction",
                "https://www.instagram.com/vargheseconstruction",
                "https://twitter.com/vargheseconst"
              ]
            })
          }}
        />
      </head>
      <body className={`
        ${geistSans.variable} 
        ${geistMono.variable}
        ${playfair.variable}
        ${bebas.variable}
        ${roboto.variable}
        ${cormorant.variable}
        ${raleway.variable}
        ${kumarOne.variable}
        ${kaushanScript.variable}
        antialiased
      `}>
        <ClientWrapper>{children}</ClientWrapper>

      </body>
    </html>
  );
}