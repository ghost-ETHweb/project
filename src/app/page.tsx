import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Clock3,
  MapPinned,
  Phone,
  Search,
  Store,
} from "lucide-react"

import { ShopDirectory } from "@/components/shop-directory"
import { Button } from "@/components/ui/button"
import { shopsData } from "@/lib/shops"

const visitorLinks = [
  {
    href: "/shops",
    icon: Search,
    eyebrow: "Каталог",
    title: "Найти магазин",
    description: "По названию, категории или этажу",
  },
  {
    href: "/map",
    icon: MapPinned,
    eyebrow: "Навигация",
    title: "Карта центра",
    description: "Быстро сориентируйтесь на месте",
  },
  {
    href: "/contacts",
    icon: Building2,
    eyebrow: "Визит",
    title: "Как добраться",
    description: "Адрес, контакты и часы работы",
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative border-b bg-secondary/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,hsl(var(--accent)/0.13),transparent_32%)]" />
        <div className="container relative mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div className="order-2 lg:order-1">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Торговый центр в Тихвине
            </p>
            <h1 className="max-w-2xl font-headline text-5xl font-bold leading-[0.96] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
              Всё нужное —
              <span className="block text-primary">рядом.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Магазины, услуги и кафе в одном знакомом месте. Планируйте визит
              заранее или просто заглядывайте по пути.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7">
                <Link href="/shops">
                  Найти магазин
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-primary/20 bg-background/60 px-7"
              >
                <Link href="/contacts">Как добраться</Link>
              </Button>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-primary/10 pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Ежедневно
                </dt>
                <dd className="mt-1 font-headline text-lg font-semibold">10–21</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Магазинов
                </dt>
                <dd className="mt-1 font-headline text-lg font-semibold">
                  {shopsData.length}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  Этажей
                </dt>
                <dd className="mt-1 font-headline text-lg font-semibold">2</dd>
              </div>
            </dl>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-muted shadow-[0_30px_80px_-35px_hsl(var(--foreground)/0.45)] lg:aspect-[5/4]">
              <Image
                src="/images/slider/1.jpg"
                alt="Торговый центр «Галерея» в Тихвине"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/75">
                    Наш адрес
                  </p>
                  <p className="mt-1 font-headline text-lg font-semibold sm:text-xl">
                    ул. Карла Маркса, 50
                  </p>
                </div>
                <div className="hidden rounded-full border border-white/35 bg-black/20 px-4 py-2 text-sm backdrop-blur sm:block">
                  Тихвин
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {visitorLinks.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {item.eyebrow}
                </p>
                <h2 className="mt-2 font-headline text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      <section id="shops" className="border-y bg-secondary/55">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Магазины и услуги
              </p>
              <h2 className="mt-3 max-w-2xl font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Найдите то, за чем пришли
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Ищите по названию, категории или этажу — каталог сразу покажет
                подходящие варианты.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full">
              <Link href="/shops">
                Все магазины
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ShopDirectory isPaginated={false} />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-primary text-primary-foreground">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[480px]">
              <Image
                src="/images/slider/4.jpg"
                alt="Вывеска торгового центра «Галерея»"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/65">
                Планируйте визит
              </p>
              <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Открыты каждый день с 10:00 до 21:00
              </h2>
              <div className="mt-7 space-y-4 text-primary-foreground/75">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-accent" />
                  <span>Без выходных</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinned className="h-5 w-5 text-accent" />
                  <span>Тихвин, ул. Карла Маркса, 50</span>
                </div>
                <div className="flex items-center gap-3">
                  <Store className="h-5 w-5 text-accent" />
                  <span>{shopsData.length} магазинов и сервисов</span>
                </div>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contacts">Построить маршрут</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="tel:89990642355">
                    <Phone className="mr-2 h-4 w-4" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="font-headline text-2xl font-semibold">
              Хотите открыть магазин в «Галерее»?
            </p>
            <p className="mt-2 text-muted-foreground">
              Расскажем о свободных площадях и условиях сотрудничества.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/partners">
              Арендаторам
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
