import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ViewTransitions } from "next-view-transitions"
import { info } from "@/lib/content"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: info.title,
    template: `%s | ${info.title}`,
  },
  description: `${info.title} — ${info.subtitle}`,
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
          <div className="2xl:max-w-[1920px] mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
