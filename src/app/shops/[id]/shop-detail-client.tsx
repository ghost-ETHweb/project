
"use client"

import { useState } from "react";
import type { Shop } from "@/lib/shops";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Tag, Clock, Phone, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface ShopDetailClientProps {
  shop: Shop;
}

export default function ShopDetailClient({ shop }: ShopDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/shops">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад к списку магазинов
        </Link>
      </Button>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
            <Carousel className="w-full rounded-lg overflow-hidden border" opts={{ loop: true }}>
                <CarouselContent>
                {shop.images.map((img, i) => (
                    <CarouselItem key={i} className="cursor-pointer" onClick={() => setSelectedImageIndex(i)}>
                        <div className="aspect-video relative group">
                         <Image src={img} alt={`Фото ${shop.name} ${i + 1}`} fill className="object-cover" />
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Expand className="h-10 w-10 text-white" />
                         </div>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
             <div className="space-y-4 mt-8">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-semibold text-foreground">Часы работы</h3>
                  <p className="text-muted-foreground">{shop.workingHours}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-semibold text-foreground">Телефон</h3>
                  <p className="text-muted-foreground">{shop.phone}</p>
                </div>
              </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-start gap-4 mb-4">
            <Image
              src={shop.logo}
              alt={`Логотип ${shop.name}`}
              width={120}
              height={120}
              className="rounded-xl border-2 object-contain p-1 bg-background"
              data-ai-hint={shop.hint}
            />
            <div>
              <h1 className="font-headline text-3xl md:text-4xl font-bold">{shop.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mt-1">
                <Badge variant="secondary">{shop.category}</Badge>
                <span className="flex items-center gap-1"><MapPin size={14} /> Этаж {shop.floor}</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 flex-grow">{shop.description}</p>
          
          {shop.promotions.length > 0 && (
            <Card className="mb-6 bg-secondary">
              <CardHeader>
                <CardTitle className="font-headline text-lg flex items-center gap-2"><Tag size={20} /> Текущие акции</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {shop.promotions.map((promo, i) => <li key={i} className="text-sm text-muted-foreground">{promo}</li>)}
                </ul>
              </CardContent>
            </Card>
          )}

          <Button asChild size="lg">
            <Link href={`/map`}>Найти на карте</Link>
          </Button>
        </div>
      </div>
       <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && setSelectedImageIndex(null)}>
        <DialogContent className="max-w-4xl w-[95vw] h-auto p-0 border-0 bg-transparent shadow-none">
          {selectedImageIndex !== null && (
            <Carousel opts={{ loop: true, startIndex: selectedImageIndex }} onOpenChange={setSelectedImageIndex}>
              <CarouselContent>
                {shop.images.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="relative aspect-video">
                        <Image src={img} alt={`Просмотр изображения ${i + 1}`} fill className="object-contain" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70" />
               <DialogClose className="absolute right-4 top-4 z-10 rounded-full p-1.5 bg-black/50 text-white opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <Expand className="h-4 w-4 transform rotate-45" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
