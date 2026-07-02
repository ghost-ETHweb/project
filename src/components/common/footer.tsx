import Link from "next/link"
import { Clock3, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = [
  { href: "/shops", label: "Магазины" },
  { href: "/about", label: "О центре" },
  { href: "/partners", label: "Арендаторам" },
  { href: "/contacts", label: "Контакты" },
]

export function Footer() {
  return (
    <footer className="border-t bg-secondary/60 text-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-headline text-sm font-bold text-primary-foreground">
                Г
              </span>
              <span>
                <span className="block font-headline text-lg font-bold tracking-[0.12em]">
                  ГАЛЕРЕЯ
                </span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Торговый центр · Тихвин
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
              Магазины, услуги и кафе в центре Тихвина. Всё нужное — рядом.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Разделы
            </h2>
            <nav className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-1">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Контакты
            </h2>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>г. Тихвин, ул. Карла Маркса, 50</span>
              </p>
              <p className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 shrink-0 text-accent" />
                <span>Ежедневно, 10:00–21:00</span>
              </p>
              <a
                href="tel:89990642355"
                className="flex items-center gap-3 transition hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                8 999 064-23-55
              </a>
              <a
                href="mailto:buh@timolo.ru"
                className="flex items-center gap-3 transition hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                buh@timolo.ru
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ТЦ «Галерея»</p>
          <p>Информация о режиме работы магазинов может отличаться.</p>
        </div>
      </div>
    </footer>
  )
}
