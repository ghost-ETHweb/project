import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Tag } from "lucide-react"

import { shopsData } from "@/lib/shops"

export const metadata: Metadata = {
  title: "Предложения магазинов",
  description: "Предложения магазинов торгового центра «Галерея» в Тихвине.",
}

const promotions = shopsData.flatMap((shop) =>
  shop.promotions
    .filter((promotion) => !promotion.includes("$"))
    .map((promotion) => ({
      shopId: shop.id,
      shopName: shop.name,
      floor: shop.floor,
      promotion,
    }))
)

export default function PromotionsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Выгодно заглянуть
        </p>
        <h1 className="mt-3 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Предложения магазинов
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Условия и сроки могут меняться. Перед покупкой уточните детали у
          сотрудников магазина.
        </p>
      </div>

      {promotions.length > 0 ? (
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {promotions.map((item) => (
            <Link
              key={`${item.shopId}-${item.promotion}`}
              href={`/shops/${item.shopId}`}
              className="group rounded-2xl border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                  <Tag className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>
              <h2 className="mt-6 font-headline text-xl font-semibold">
                {item.promotion}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {item.shopName} · {item.floor} этаж
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed bg-card p-10 text-center text-muted-foreground">
          Актуальные предложения скоро появятся.
        </div>
      )}
    </div>
  )
}
