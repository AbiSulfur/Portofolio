import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Benedictus Abigail Triwiyatno | Freelance Web Developer Indonesia",
  description:
    "Portfolio of Benedictus Abigail Triwiyatno, a professional freelance web developer in Indonesia specializing in high-converting B2B websites, SaaS landing pages, and custom web applications.",
  keywords: ["Freelance Web Developer Indonesia", "B2B Web Apps", "React Developer Jakarta", "Next.js Developer Indonesia", "Jasa Pembuatan Website Profesional", "SaaS Landing Page"],
  authors: [{ name: "Benedictus Abigail Triwiyatno" }],
  openGraph: {
    title: "Benedictus Abigail Triwiyatno | Freelance Web Developer",
    description: "Professional web development services for businesses. Specializing in high-converting websites and modern web applications.",
    url: "https://abigaildev.vercel.app/",
    siteName: "Abigail Dev Portfolio",
    locale: "id_ID",
    type: "website",
  },
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

