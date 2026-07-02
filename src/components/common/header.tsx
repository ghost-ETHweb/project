"use client"

import Link from "next/link"
import { useState } from "react"
import { MapPin, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "/shops", label: "Магазины" },
  { href: "/about", label: "О центре" },
  { href: "/partners", label: "Арендаторам" },
  { href: "/contacts", label: "Контакты" },
]

function Brand() {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-headline text-sm font-bold text-primary-foreground">
        Г
      </span>
      <span className="leading-none">
        <span className="block font-headline text-base font-bold tracking-[0.12em] text-foreground">
          ГАЛЕРЕЯ
        </span>
        <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Торговый центр · Тихвин
        </span>
      </span>
    </span>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="ТЦ «Галерея», главная">
          <Brand />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden rounded-full md:inline-flex">
            <Link href="/contacts">
              <MapPin className="mr-2 h-4 w-4" />
              Как добраться
            </Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Открыть меню"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm p-0">
              <div className="flex h-full flex-col p-6">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Brand />
                </Link>
                <nav className="mt-10 flex flex-col" aria-label="Мобильная навигация">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="border-b py-4 font-headline text-xl font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto rounded-2xl bg-secondary p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Мы открыты
                  </p>
                  <p className="mt-2 font-headline text-lg font-semibold">
                    Ежедневно 10:00–21:00
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    ул. Карла Маркса, 50
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
