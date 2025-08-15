
"use client"

import { useState } from "react";
import { shopsData } from "@/lib/shops";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Tag, Clock, Phone, Expand } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function generateStaticParams() {
  return shopsData.map((shop) => ({
    id: shop.id.toString(),
  }));
}

export default function ShopDetailPage({ params }: { params: { id: string } }) {
  const shop = shopsData.find((s) => s.id.toString() === params.id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  if (!shop) {
    notFound();
  }

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
                    <CarouselItem key={i} className="cursor-pointer" onClick={() => setSelectedImage(img)}>
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
       <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
          {selectedImage && (
            <div className="relative aspect-video">
                <Image src={selectedImage} alt="Просмотр изображения" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
