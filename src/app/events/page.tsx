import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CalendarDays, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "События",
  description: "Афиша мероприятий торгового центра «Галерея» в Тихвине.",
}

export default function EventsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="rounded-[2rem] border bg-card p-7 text-center shadow-sm sm:p-12 lg:p-16">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
          <CalendarDays className="h-6 w-6" />
        </div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Афиша
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Новые события скоро появятся
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">
          Мы убрали прошедшие мероприятия и готовим актуальную программу.
          Информацию о ближайших событиях можно уточнить у администрации.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <a href="tel:89990642355">
              <Phone className="mr-2 h-4 w-4" />
              Позвонить
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/shops">
              Перейти к магазинам
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
