import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "goep.dev | Hire your own personal Software Department",
  description:
    "Personal website of Griffin, a developer and UI designer.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "goep.dev",
              image: "https://www.goep.dev/goep.png",
              url: "https://www.goep.dev",
              telephone: "",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cincinnati",
                addressRegion: "OH",
                postalCode: "45202",
                addressCountry: "US"
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "griffin@goep.dev",
                contactType: "Customer Support"
              },
              priceRange: "$$",
              description:
                "goep.dev offers modern website design, SEO optimization, and full-service digital management for local businesses in Cincinnati, Ohio.",
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.1031",
                longitude: "-84.5120"
              },
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
