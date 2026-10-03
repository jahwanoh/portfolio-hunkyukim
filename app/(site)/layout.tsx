import type React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="2xl:max-w-[1920px] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
