import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Benedictus Abigail Triwiyatno - Web Developer",
  description:
    "Portfolio of Benedictus Abigail Triwiyatno, a web developer specializing in building high-converting and professional business websites.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/Logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/Logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${dmSans.variable}`}>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}

