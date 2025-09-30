import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import Script from "next/script"
import GATracker from "@/components/ga-tracker"

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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

  return (
    <html lang="en">
      <head><script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "skzkodwcio");
</script></head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>

        {GA_ID ? (
          <>
            <Script
              id="ga-script"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="ga-inline" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
// Disable automatic page_view to avoid duplicates; we'll send on route changes
gtag('config', '${GA_ID}', { send_page_view: false });`}</Script>
            <GATracker />
          </>
        ) : null}

        {CLARITY_ID ? (
          <Script id="clarity-script" strategy="afterInteractive">{`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
})(window, document, "clarity", "script", "${CLARITY_ID}");`}</Script>
        ) : null}

        <Analytics />
      </body>
    </html>
  )
}
