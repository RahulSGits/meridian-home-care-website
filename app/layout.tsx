import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — Cleaning, Reimagined`,
    template: `%s · ${site.brand}`,
  },
  description:
    "Chicago house and commercial cleaning with a flat price you see before you book, the same background-checked team every visit, and a free re-clean if a single room misses the standard.",
  keywords: [
    "cleaning service Chicago",
    "house cleaning Chicago",
    "deep cleaning",
    "move-out cleaning",
    "Airbnb turnover cleaning",
    "commercial cleaning Chicago",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — Cleaning, Reimagined`,
    description:
      "Flat pricing, the same background-checked team every visit, and a free re-clean guarantee. Chicago & the North Shore.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — Cleaning, Reimagined`,
    description:
      "Flat pricing, the same team every visit, free re-clean guarantee. Chicago & the North Shore.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.legalName,
  alternateName: site.brand,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  priceRange: "$$",
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Chicago" },
    { "@type": "Place", name: "North Shore, Illinois" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "21:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
