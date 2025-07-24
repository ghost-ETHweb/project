"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Search } from "lucide-react"

const shopsData = [
  { id: 1, name: "Aura Fashion", category: "Clothing", floor: 1, logo: "https://placehold.co/100x100.png", hint: "fashion logo", description: "High-end fashion for modern women.", images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png"], promotions: ["20% off new arrivals"] },
  { id: 2, name: "Sole Mates", category: "Shoes", floor: 2, logo: "https://placehold.co/100x100.png", hint: "shoe logo", description: "The latest trends in footwear.", images: ["https://placehold.co/600x400.png"], promotions: ["Buy one, get one 50% off"] },
  { id: 3, name: "TechVerse", category: "Electronics", floor: 1, logo: "https://placehold.co/100x100.png", hint: "tech logo", description: "Gadgets and accessories for your digital life.", images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png"], promotions: [] },
  { id: 4, name: "Glamour Zone", category: "Beauty", floor: 2, logo: "https://placehold.co/100x100.png", hint: "beauty logo", description: "Cosmetics, skincare, and fragrances.", images: ["https://placehold.co/600x400.png"], promotions: ["Free gift with purchase over $50"] },
  { id: 5, name: "Book Nook", category: "Books", floor: 3, logo: "https://placehold.co/100x100.png", hint: "bookstore logo", description: "A cozy corner for book lovers.", images: ["https://placehold.co/600x400.png"], promotions: [] },
  { id: 6, name: "Zenith Watches", category: "Jewelry", floor: 1, logo: "https://placehold.co/100x100.png", hint: "watch logo", description: "Luxury timepieces and fine jewelry.", images: ["https://placehold.co/600x400.png"], promotions: ["Complimentary cleaning service"] },
  { id: 7, "name": "Vogue Apparel", "category": "Clothing", "floor": 2, "logo": "https://placehold.co/100x100.png", hint: "clothing logo", "description": "Trendy and affordable fashion for all.", "images": ["https://placehold.co/600x400.png"], "promotions": ["Student Discount 15% off"] },
  { id: 8, "name": "Step Up", "category": "Shoes", "floor": 1, "logo": "https://placehold.co/100x100.png", hint: "sneaker logo", "description": "Athletic and casual shoes for the whole family.", "images": ["https://placehold.co/600x400.png"], "promotions": [] }
];

const categories = ["All", ...new Set(shopsData.map((s) => s.category))];
const floors = ["All", ...new Set(shopsData.map((s) => s.floor.toString()))].sort();

interface ShopDirectoryProps {
  isPaginated?: boolean;
}

export function ShopDirectory({ isPaginated = true }: ShopDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [floor, setFloor] = useState("All");
  const [sort, setSort] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const shopsPerPage = 6;

  const filteredShops = useMemo(() => {
    let filtered = shopsData
      .filter((shop) =>
        shop.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((shop) => category === "All" || shop.category === category)
      .filter((shop) => floor === "All" || shop.floor.toString() === floor);

    if (sort === "asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
    return filtered;
  }, [searchQuery, category, floor, sort]);

  const paginatedShops = useMemo(() => {
    if (!isPaginated) return filteredShops;
    const startIndex = (currentPage - 1) * shopsPerPage;
    return filteredShops.slice(startIndex, startIndex + shopsPerPage);
  }, [filteredShops, currentPage, isPaginated]);

  const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-card p-4 sm:flex-row sm:items-center">
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" size={20} />
          <Input
            placeholder="Search by shop name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={floor} onValueChange={setFloor}>
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue placeholder="Floor" />
            </SelectTrigger>
            <SelectContent>
              {floors.map((f) => (
                <SelectItem key={f} value={f}>
                  {f === "All" ? "All Floors" : `Floor ${f}`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full sm:w-[120px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">A-Z</SelectItem>
              <SelectItem value="desc">Z-A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {paginatedShops.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedShops.map((shop) => (
            <Dialog key={shop.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Image
                      src={shop.logo}
                      alt={`${shop.name} logo`}
                      width={64}
                      height={64}
                      className="rounded-lg border"
                      data-ai-hint={shop.hint}
                    />
                    <div className="flex-1">
                      <CardTitle className="font-headline text-lg">{shop.name}</CardTitle>
                      <CardDescription>{shop.category}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">Floor {shop.floor}</Badge>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl">{shop.name}</DialogTitle>
                  <DialogDescription>{shop.category} - Floor {shop.floor}</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {shop.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <Image src={img} alt={`${shop.name} view ${i+1}`} width={600} height={400} className="rounded-lg object-cover" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <p className="mt-4 text-sm text-muted-foreground">{shop.description}</p>
                  {shop.promotions.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-headline font-semibold">Current Promotions</h4>
                      <ul className="mt-2 list-inside list-disc space-y-1">
                        {shop.promotions.map((promo, i) => <li key={i} className="text-sm"><Badge className="bg-accent/20 text-accent-foreground hover:bg-accent/30">{promo}</Badge></li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted p-12 text-center">
            <p className="text-muted-foreground">No shops found matching your criteria.</p>
        </div>
      )}

      {isPaginated && totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</Button>
          <span className="flex items-center px-4 text-sm">Page {currentPage} of {totalPages}</span>
          <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next</Button>
        </div>
      )}
    </div>
  )
}
