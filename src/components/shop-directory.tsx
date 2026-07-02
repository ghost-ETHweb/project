"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories, floors, shopsData } from "@/lib/shops"

interface ShopDirectoryProps {
  isPaginated?: boolean
}

const shopsPerPage = 6

export function ShopDirectory({ isPaginated = true }: ShopDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("Все")
  const [floor, setFloor] = useState("Все")
  const [sort, setSort] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const directoryRef = useRef<HTMLDivElement>(null)

  const filteredShops = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase("ru")
    const filtered = shopsData
      .filter((shop) =>
        shop.name.toLocaleLowerCase("ru").includes(normalizedQuery)
      )
      .filter((shop) => category === "Все" || shop.category === category)
      .filter((shop) => floor === "Все" || shop.floor.toString() === floor)

    return filtered.sort((a, b) =>
      sort === "asc"
        ? a.name.localeCompare(b.name, "ru")
        : b.name.localeCompare(a.name, "ru")
    )
  }, [searchQuery, category, floor, sort])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, category, floor, sort])

  const visibleShops = useMemo(() => {
    if (!isPaginated) return filteredShops.slice(0, shopsPerPage)
    const startIndex = (currentPage - 1) * shopsPerPage
    return filteredShops.slice(startIndex, startIndex + shopsPerPage)
  }, [filteredShops, currentPage, isPaginated])

  const totalPages = Math.ceil(filteredShops.length / shopsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.requestAnimationFrame(() => {
      directoryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <div ref={directoryRef} className="scroll-mt-24">
      <div className="mb-8 rounded-2xl border bg-card p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative w-full lg:flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={19}
              aria-hidden="true"
            />
            <Input
              aria-label="Поиск магазина"
              placeholder="Название магазина"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="h-11 rounded-xl bg-background pl-11"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:flex">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger
                className="h-11 w-full rounded-xl bg-background lg:w-[210px]"
                aria-label="Категория магазина"
              >
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={floor} onValueChange={setFloor}>
              <SelectTrigger
                className="h-11 w-full rounded-xl bg-background lg:w-[135px]"
                aria-label="Этаж"
              >
                <SelectValue placeholder="Этаж" />
              </SelectTrigger>
              <SelectContent>
                {floors.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item === "Все" ? "Все этажи" : `${item} этаж`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger
                className="h-11 w-full rounded-xl bg-background lg:w-[125px]"
                aria-label="Сортировка"
              >
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">А — Я</SelectItem>
                <SelectItem value="desc">Я — А</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Найдено: {filteredShops.length}
        </p>
      </div>

      {visibleShops.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleShops.map((shop) => {
            const hasLogo = !shop.logo.includes("default-logo")

            return (
              <Link
                key={shop.id}
                href={`/shops/${shop.id}`}
                className="group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Card className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-none transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/25 group-hover:shadow-xl group-hover:shadow-primary/5">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary/55">
                    {hasLogo ? (
                      <Image
                        src={shop.logo}
                        alt={`Логотип магазина ${shop.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="font-headline text-4xl font-bold tracking-tight text-primary/75">
                          {shop.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="flex flex-1 items-end justify-between gap-5 p-5">
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground">
                        {shop.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {shop.category} · {shop.floor} этаж
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed bg-card p-8 text-center">
          <Search className="h-8 w-8 text-muted-foreground/45" />
          <p className="mt-4 font-headline text-lg font-semibold">
            Ничего не нашли
          </p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Попробуйте изменить запрос, категорию или этаж.
          </p>
        </div>
      )}

      {isPaginated && totalPages > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Назад
          </Button>
          <span className="px-2 text-sm text-muted-foreground">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            Вперёд
          </Button>
        </div>
      )}
    </div>
  )
}
