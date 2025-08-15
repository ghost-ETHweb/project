"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog"

import { type Shop } from "@/lib/shops"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Phone, Tag, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function ShopDetailClient({ shop }: { shop: Shop }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % shop.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + shop.images.length) % shop.images.length);
  };


  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
           <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {shop.images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg" onClick={() => openModal(index)}>
                    <Image
                      src={src}
                      alt={`${shop.name} - изображение ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint="store interior"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 z-10" />
            <CarouselNext className="absolute right-4 z-10" />
          </Carousel>
        </div>
        <div className="flex flex-col">
          <div className="flex items-start gap-4">
             <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border p-1 md:h-24 md:w-24 lg:h-32 lg:w-32">
              <Image
                src={shop.logo}
                alt={`Логотип ${shop.name}`}
                fill
                className="object-contain"
                 data-ai-hint={shop.hint}
              />
            </div>
            <div>
                <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    {shop.name}
                </h1>
                <Badge variant="secondary" className="mt-2 text-base">{shop.category}</Badge>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground">{shop.description}</p>
          <div className="mt-6 space-y-4 text-sm">
             <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Этаж {shop.floor}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Часы работы: {shop.workingHours}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Телефон: {shop.phone}</span>
            </div>
          </div>
           {shop.promotions.length > 0 && (
            <div className="mt-8">
              <h2 className="font-headline text-xl font-semibold">Текущие акции</h2>
              <ul className="mt-4 list-none space-y-2">
                {shop.promotions.map((promo, index) => (
                  <li key={index} className="flex items-start gap-3">
                     <Tag className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <span className="text-muted-foreground">{promo}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full p-2 bg-transparent border-0">
           <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-1 text-white opacity-80 hover:opacity-100">
            <X className="h-6 w-6" />
          </DialogClose>
          <div className="relative aspect-video w-full">
            <Image
              src={shop.images[selectedImageIndex]}
              alt={`${shop.name} - изображение ${selectedImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
           <Button onClick={prevImage} variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button onClick={nextImage} variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
