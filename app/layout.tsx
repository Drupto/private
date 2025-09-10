import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import ClarityAnalytics from "@/components/analytics/clarity"

export const metadata: Metadata = {
  title: "Saurabh Chandra - Software & AI Engineer",
  description:
    "Software & AI Engineer specializing in AI/ML solutions, cloud computing, and IT consultancy through DRUPTO CONSULTANTS",
  generator: "v0.app",
  icons: {
    icon: "/favicon-16x16.png",
  },
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
        <ClarityAnalytics />
      </body>
    </html>
  )
}
