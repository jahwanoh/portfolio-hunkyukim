import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ViewTransitions } from "next-view-transitions"
import { getInfo } from "@/lib/content"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Absolute base for link-preview images (Vercel sets this automatically)
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000"

export async function generateMetadata(): Promise<Metadata> {
  const info = await getInfo()

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: info.title,
      template: `%s | ${info.title}`,
    },
    description: `${info.title} — ${info.subtitle}`,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}
