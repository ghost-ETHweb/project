import type { Metadata } from "next"
import { notFound } from "next/navigation"

import ShopDetailClient from "@/components/shop-detail-client"
import { shopsData } from "@/lib/shops"

export function generateStaticParams() {
  return shopsData.map((shop) => ({
    id: shop.id.toString(),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const shop = shopsData.find((item) => item.id.toString() === id)

  return {
    title: shop?.name ?? "Магазин",
    description: shop
      ? `${shop.name}: ${shop.category}, ${shop.floor} этаж ТЦ «Галерея» в Тихвине.`
      : undefined,
  }
}

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const shop = shopsData.find((item) => item.id.toString() === id)

  if (!shop) {
    notFound()
  }

  return <ShopDetailClient shop={shop} />
}
