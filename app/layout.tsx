import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://saurabhchandra.in"),
  title: {
    default: "Saurabh Chandra — Software & AI Engineer | DRUPTO CONSULTANTS",
    template: "%s | Saurabh Chandra",
  },
  description:
    "Software & AI Engineer with 10+ years of experience, Founder of DRUPTO CONSULTANTS PRIVATE LIMITED. Building AI/ML solutions, cloud computing systems, and IT consultancy for small and medium businesses.",
  keywords: [
    "Saurabh Chandra",
    "Software Engineer",
    "AI Engineer",
    "AI ML solutions",
    "IT consultancy",
    "DRUPTO CONSULTANTS",
    "Lucknow IT consulting",
    "cloud computing",
    "DPIIT recognized",
    "AI-powered systems",
  ],
  authors: [{ name: "Saurabh Chandra", url: "https://saurabhchandra.in" }],
  creator: "Saurabh Chandra",
  publisher: "DRUPTO CONSULTANTS PRIVATE LIMITED",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Saurabh Chandra — Software & AI Engineer",
    title: "Saurabh Chandra — Software & AI Engineer | DRUPTO CONSULTANTS",
    description:
      "Founder of DRUPTO CONSULTANTS. Building intelligent AI/ML systems and cloud solutions for small and medium businesses. 10+ years of engineering experience.",
    images: [
      {
        url: "/portfolio.jpg",
        width: 952,
        height: 956,
        alt: "Saurabh Chandra — Software & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Chandra — Software & AI Engineer | DRUPTO CONSULTANTS",
    description:
      "Founder of DRUPTO CONSULTANTS. Building intelligent AI/ML systems and cloud solutions for small and medium businesses.",
    images: ["/portfolio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon-16x16.png",
  },
}

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://saurabhchandra.in/#person",
        name: "Saurabh Chandra",
        url: "https://saurabhchandra.in",
        email: "mailto:contact@saurabhchandra.in",
        telephone: "+91-63880-63038",
        jobTitle: "Software & AI Engineer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
        worksFor: { "@id": "https://saurabhchandra.in/#organization" },
        knowsAbout: [
          "AI/ML solutions",
          "Cloud computing",
          "IT consultancy",
          "Software engineering",
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://saurabhchandra.in/#organization",
        name: "DRUPTO CONSULTANTS PRIVATE LIMITED",
        url: "https://druptoconsultants.com",
        founder: { "@id": "https://saurabhchandra.in/#person" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://saurabhchandra.in/#website",
        url: "https://saurabhchandra.in",
        name: "Saurabh Chandra — Software & AI Engineer",
        publisher: { "@id": "https://saurabhchandra.in/#person" },
        inLanguage: "en-IN",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <JsonLd />
      </body>
    </html>
  )
}
