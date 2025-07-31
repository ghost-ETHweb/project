
"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { shopsData, categories, floors } from "@/lib/shops"

interface ShopDirectoryProps {
  isPaginated?: boolean;
}

export function ShopDirectory({ isPaginated = true }: ShopDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("Все");
  const [floor, setFloor] = useState("Все");
  const [sort, setSort] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const shopsPerPage = 6;
  const directoryRef = useRef<HTMLDivElement>(null);


  const filteredShops = useMemo(() => {
    let filtered = shopsData
      .filter((shop) =>
        shop.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((shop) => category === "Все" || shop.category === category)
      .filter((shop) => floor === "Все" || shop.floor.toString() === floor);

    if (sort === "asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
    return filtered;
  }, [searchQuery, category, floor, sort]);
  
  useEffect(() => {
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [searchQuery, category, floor, sort]);

  const paginatedShops = useMemo(() => {
    if (!isPaginated) return filteredShops;
    const startIndex = (currentPage - 1) * shopsPerPage;
    return filteredShops.slice(startIndex, startIndex + shopsPerPage);
  }, [filteredShops, currentPage, isPaginated]);

  const totalPages = Math.ceil(filteredShops.length / shopsPerPage);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (directoryRef.current) {
        directoryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div ref={directoryRef}>
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-card p-4 sm:flex-row sm:items-center">
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" size={20} />
          <Input
            placeholder="Поиск по названию магазина..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={floor} onValueChange={setFloor}>
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue placeholder="Этаж" />
            </SelectTrigger>
            <SelectContent>
              {floors.map((f) => (
                <SelectItem key={f} value={f}>
                  {f === "Все" ? "Все этажи" : `Этаж ${f}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">А-Я</SelectItem>
              <SelectItem value="desc">Я-А</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {paginatedShops.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedShops.map((shop) => (
             <Link key={shop.id} href={`/shops/${shop.id}`} className="group">
                <Card className="flex h-full flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
                    <div className="relative aspect-video w-full">
                        <Image
                        src={shop.images[0]}
                        alt={shop.name}
                        fill
                        className="object-cover"
                        />
                    </div>
                    <CardContent className="flex flex-col p-4 flex-grow">
                        <div className="flex-grow">
                            <h3 className="font-headline text-lg font-semibold text-foreground">{shop.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{shop.category}</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-fit mt-4 pointer-events-none">Этаж {shop.floor}</Button>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted p-12 text-center">
            <p className="text-muted-foreground">Магазины, соответствующие вашим критериям, не найдены.</p>
        </div>
      )}

      {isPaginated && totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <Button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>Назад</Button>
          <span className="flex items-center px-4 text-sm">Страница {currentPage} из {totalPages}</span>
          <Button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>Вперед</Button>
        </div>
      )}
    </div>
  )
}
