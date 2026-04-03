import type { Metadata } from "next";
import "./globals.css";

/* ─── SEO METADATA ──────────────────────────────────────────────────────────
   Change title, description, keywords, and og:image to match your brand.
   The og:image should be a 1200×630 image placed in /public/og-image.jpg
   ─────────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  // ─── METADATA BASE ────────────────────────────────────────────────────
  // Change this to your actual production domain
  metadataBase: new URL("https://massbarbershop.co.uk"),
  title: "Mass Barber Shop | Premium Barbering in Edinburgh",
  description:
    "Edinburgh's premium barber shop at 182A Ferry Rd. Expert haircuts, beard trims, and full grooming packages. Book online or walk in today.",
  keywords: [
    "barber Edinburgh",
    "haircut Edinburgh",
    "beard trim Edinburgh",
    "Ferry Road barber",
    "Mass Barber Shop",
    "mens haircut Edinburgh",
    "barber shop near me",
  ],
  authors: [{ name: "Mass Barber Shop" }],
  // ─── OPEN GRAPH (social sharing preview) ──────────────────────────────
  openGraph: {
    title: "Mass Barber Shop | Premium Barbering in Edinburgh",
    description:
      "Precision cuts, clean style. Edinburgh's trusted local barber at 182A Ferry Rd.",
    url: "https://massbarbershop.co.uk", // ← Change to your actual domain
    siteName: "Mass Barber Shop",
    images: [
      {
        url: "/og-image.jpg", // ← Place a 1200×630 image in /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Mass Barber Shop Edinburgh",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  // ─── TWITTER CARD ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Mass Barber Shop | Premium Barbering in Edinburgh",
    description: "Precision cuts, clean style. Edinburgh's trusted local barber.",
    images: ["/og-image.jpg"],
  },
  // ─── ICONS ────────────────────────────────────────────────────────────
  // Place favicon files in /public/
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // Tells search engines this is the canonical URL
  alternates: {
    canonical: "https://massbarbershop.co.uk", // ← Change to your actual domain
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="bg-[#0f0f0f] text-[#e8e8e8] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
