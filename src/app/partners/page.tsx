import type { Metadata } from "next"
import { Building2, Mail, Phone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Арендаторам",
  description:
    "Информация для арендаторов и партнёров торгового центра «Галерея» в Тихвине.",
}

const advantages = [
  {
    icon: Building2,
    title: "Понятное расположение",
    description: "Центральная городская локация по адресу ул. Карла Маркса, 50.",
  },
  {
    icon: Users,
    title: "Ежедневный поток",
    description: "Магазины, услуги и кафе формируют устойчивый трафик посетителей.",
  },
]

export default function PartnersPage() {
  return (
    <div>
      <section className="border-b bg-secondary/60">
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Арендаторам
            </p>
            <h1 className="mt-4 max-w-3xl font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Откройте своё пространство в «Галерее»
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Свяжитесь с администрацией: расскажем о доступных площадях,
              формате размещения и условиях сотрудничества.
            </p>
          </div>
          <div className="rounded-2xl bg-primary p-7 text-primary-foreground sm:p-9">
            <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/55">
              Отдел аренды
            </p>
            <a
              href="tel:89990642355"
              className="mt-5 flex items-center gap-3 font-headline text-2xl font-semibold transition hover:text-accent"
            >
              <Phone className="h-5 w-5" />
              8 999 064-23-55
            </a>
            <a
              href="mailto:buh@timolo.ru?subject=Аренда в ТЦ Галерея"
              className="mt-4 flex items-center gap-3 text-primary-foreground/75 transition hover:text-primary-foreground"
            >
              <Mail className="h-5 w-5" />
              buh@timolo.ru
            </a>
            <Button
              asChild
              size="lg"
              className="mt-8 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="mailto:buh@timolo.ru?subject=Аренда в ТЦ Галерея">
                Написать по аренде
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {advantages.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-2xl border bg-card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-6 font-headline text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
