"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
  DialogClose,
} from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Search, MapPin, Tag, MousePointerClick } from "lucide-react"

const shopsData = [
  { id: 1, name: "Aura Fashion", category: "Одежда", floor: 1, logo: "https://placehold.co/200x100.png", hint: "fashion logo", description: "Высокая мода для современных женщин. Откройте для себя эксклюзивные коллекции от ведущих мировых дизайнеров. Мы предлагаем платья, костюмы, верхнюю одежду и аксессуары, которые подчеркнут ваш уникальный стиль.", images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"], promotions: ["Скидка 20% на новые поступления"] },
  { id: 2, name: "Sole Mates", category: "Обувь", floor: 2, logo: "https://placehold.co/200x100.png", hint: "shoe logo", description: "Последние тенденции в мире обуви для мужчин и женщин. От классических моделей до спортивных кроссовок – у нас есть все, чтобы вы чувствовали себя комфортно и уверенно.", images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"], promotions: ["Купи одну пару, получи вторую со скидкой 50%"] },
  { id: 3, name: "TechVerse", category: "Электроника", floor: 1, logo: "https://placehold.co/200x100.png", hint: "tech logo", description: "Гаджеты и аксессуары для вашей цифровой жизни. Новейшие смартфоны, ноутбуки, наушники и умные устройства от ведущих брендов. Наши консультанты помогут вам сделать правильный выбор.", images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"], promotions: [] },
  { id: 4, name: "Glamour Zone", category: "Красота", floor: 2, logo: "https://placehold.co/200x100.png", hint: "beauty logo", description: "Все для вашей красоты: косметика, уход за кожей и парфюмерия от люксовых и нишевых брендов. Профессиональные визажисты всегда готовы дать вам совет.", images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png"], promotions: ["Подарок при покупке от 50$"] },
  { id: 5, name: "Book Nook", category: "Книги", floor: 3, logo: "https://placehold.co/200x100.png", hint: "bookstore logo", description: "Уютный уголок для любителей книг. У нас вы найдете бестселлеры, классику, детскую литературу и редкие издания. Наслаждайтесь чтением в нашей комфортной зоне отдыха.", images: ["https://placehold.co/600x400.png"], promotions: [] },
  { id: 6, name: "Zenith Watches", category: "Ювелирные изделия", floor: 1, logo: "https://placehold.co/200x100.png", hint: "watch logo", description: "Роскошные часы и изысканные украшения для особых моментов. Мы являемся официальным дилером всемирно известных часовых и ювелирных мануфактур.", images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"], promotions: ["Бесплатная чистка в подарок"] },
  { id: 7, "name": "Vogue Apparel", "category": "Одежда", "floor": 2, "logo": "https://placehold.co/200x100.png", hint: "clothing logo", "description": "Модная и доступная одежда для всех. Мы следим за последними трендами и еженедельно обновляем наши коллекции, чтобы вы всегда выглядели стильно.", "images": ["https://placehold.co/600x400.png"], "promotions": ["Скидка 15% для студентов"] },
  { id: 8, "name": "Step Up", "category": "Обувь", "floor": 1, "logo": "https://placehold.co/200x100.png", hint: "sneaker logo", "description": "Спортивная и повседневная обувь для всей семьи. У нас вы найдете идеальную пару для бега, тренировок или просто для активного отдыха.", "images": ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png"], "promotions": [] }
];

const categories = ["Все", ...Array.from(new Set(shopsData.map((s) => s.category)))];
const floors = ["Все", ...Array.from(new Set(shopsData.map((s) => s.floor.toString())))].sort();

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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {paginatedShops.map((shop) => (
            <Dialog key={shop.id}>
              <div className="group perspective-1000">
                <div className="relative h-[380px] w-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of the card */}
                    <div className="absolute h-full w-full backface-hidden cursor-pointer">
                      <Card className="flex h-full flex-col overflow-hidden rounded-lg bg-secondary shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
                        <CardHeader className="p-0">
                          <div className="relative aspect-video w-full">
                            <Image
                              src={shop.images[0]}
                              alt={shop.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <MousePointerClick size={12} />
                                <span>Наведите на акции</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex flex-col p-4 flex-grow">
                          <div className="flex-grow">
                            <h3 className="font-headline text-lg font-semibold text-foreground">{shop.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{shop.category}</p>
                          </div>
                           <Button variant="outline" size="sm" className="w-fit pointer-events-none">Этаж {shop.floor}</Button>
                        </CardContent>
                      </Card>
                    </div>

                  {/* Back of the card */}
                  <div className="absolute h-full w-full backface-hidden rotate-y-180">
                    <Card className="relative flex h-full flex-col overflow-hidden rounded-lg bg-primary text-primary-foreground shadow-xl">
                      <Image
                        src={shop.logo}
                        alt={`${shop.name} logo`}
                        fill
                        className="object-contain scale-125 opacity-10 blur-lg"
                        data-ai-hint={shop.hint}
                      />
                      <div className="relative z-10 flex flex-col h-full">
                        <CardHeader>
                          <CardTitle className="font-headline text-xl">Акции в {shop.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-grow flex-col justify-center items-center text-center">
                          {shop.promotions.length > 0 ? (
                            <ul className="space-y-2">
                              {shop.promotions.map((promo, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <Tag className="h-4 w-4 flex-shrink-0" />
                                  <span>{promo}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>На данный момент активных акций нет.</p>
                          )}
                        </CardContent>
                        <div className="p-4 border-t border-primary-foreground/20 text-center">
                            <DialogTrigger asChild>
                                <Button variant="secondary">Подробнее о магазине</Button>
                            </DialogTrigger>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
              <DialogContent className="sm:max-w-4xl p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 flex flex-col">
                    <div className="flex items-start gap-4 mb-6">
                      <Image
                        src={shop.logo}
                        alt={`Логотип ${shop.name}`}
                        width={80}
                        height={80}
                        className="rounded-xl border-2 object-contain p-1"
                        data-ai-hint={shop.hint}
                      />
                      <div>
                        <DialogTitle className="font-headline text-3xl mb-1">{shop.name}</DialogTitle>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span>{shop.category}</span>
                          <span className="flex items-center gap-1"><MapPin size={14} /> Этаж {shop.floor}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground flex-grow">{shop.description}</p>
                    <DialogClose asChild>
                      <Button asChild className="mt-6 w-full">
                        <Link href={`/map?floor=${shop.floor}`}>Перейти на карту</Link>
                      </Button>
                    </DialogClose>
                  </div>
                  <div className="relative">
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {shop.images.map((img, i) => (
                          <CarouselItem key={i}>
                            <Image src={img} alt={`Фото ${shop.name} ${i + 1}`} width={800} height={600} className="object-cover h-full w-full md:rounded-r-lg" />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4" />
                      <CarouselNext className="right-4" />
                    </Carousel>
                    {shop.promotions.length > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <h4 className="font-headline font-semibold text-lg flex items-center gap-2"><Tag size={20} /> Текущие акции</h4>
                        <ul className="mt-2 space-y-1">
                          {shop.promotions.map((promo, i) => <li key={i} className="text-sm backdrop-blur-sm bg-white/10 rounded-full px-3 py-1 inline-block mr-2 mt-2">{promo}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted p-12 text-center">
            <p className="text-muted-foreground">Магазины, соответствующие вашим критериям, не найдены.</p>
        </div>
      )}

      {isPaginated && totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <Button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Назад</Button>
          <span className="flex items-center px-4 text-sm">Страница {currentPage} из {totalPages}</span>
          <Button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Вперед</Button>
        </div>
      )}
    </div>
  )
}
