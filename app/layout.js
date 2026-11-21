import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";
const head = Space_Grotesk({ subsets: ["latin"], variable: "--font-head", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Nexora Lab | Website & Software Development Company",
    template: "%s | Nexora Lab",
  },
  description:
    "Nexora Lab builds business websites, web and mobile apps, CRM, ERP and e-commerce solutions for startups and growing businesses.",
  applicationName: "Nexora Lab",
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Nexora Lab",
    type: "website",
    locale: "en_IN",
    title: "Nexora Lab | Website & Software Development Company",
    description:
      "Business websites, web and mobile apps, CRM, ERP and e-commerce solutions built for startups and growing businesses.",
    images: [{ url: "/logo-full.png", width: 1200, height: 630, alt: "Nexora Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Lab | Website & Software Development Company",
    description:
      "Business websites, web and mobile apps, CRM, ERP and e-commerce solutions built for startups and growing businesses.",
    images: ["/logo-full.png"],
  },
};
export const viewport = { themeColor: "#08090D" };
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${head.variable} ${body.variable}`}><body><script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nexora Lab",
      url: SITE.url,
      logo: `${SITE.url}/logo-mark.png`,
    }),
  }}
/><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-[60] focus:bg-white focus:p-2 focus:text-black">Skip to content</a> <ScrollReveal /> <Navbar /><main id="main" className="pt-16">{children}</main><Footer /><WhatsAppButton /></body></html>);
}
