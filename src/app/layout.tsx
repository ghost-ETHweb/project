import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"

import "./globals.css"
import { Footer } from "@/components/common/footer"
import { Header } from "@/components/common/header"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
  subsets: ["cyrillic", "latin"],
  variable: "--font-headline",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gallery-blue-eta.vercel.app"),
  title: {
    default: "ТЦ «Галерея» — Тихвин",
    template: "%s | ТЦ «Галерея»",
  },
  description:
    "Торговый центр «Галерея» в Тихвине: магазины, карта, часы работы и контакты. Ежедневно с 10:00 до 21:00.",
  openGraph: {
    title: "ТЦ «Галерея» — Тихвин",
    description: "Магазины, услуги и кафе в одном знакомом месте.",
    type: "website",
    locale: "ru_RU",
    images: ["/images/slider/1.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground antialiased",
          montserrat.variable,
          openSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
