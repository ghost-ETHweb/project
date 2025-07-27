"use client"

import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const sliderItems = [
  {
    type: "image",
    title: "Грандиозная летняя распродажа",
    description: "Скидки до 70% на ваши любимые бренды. Не пропустите!",
    image: {
      src: "https://placehold.co/1600x600.png",
      hint: "fashion sale",
    },
    buttons: [
      { href: "/shops", label: "Смотреть магазины" },
      { href: "/promotions", label: "Акции", variant: "accent" },
    ],
  },
  {
    type: "image",
    title: "Открылся новый флагманский магазин",
    description: "Откройте для себя последние тренды на грандиозном открытии Aura.",
    image: {
      src: "https://placehold.co/1600x600.png",
      hint: "luxury store",
    },
    buttons: [
      { href: "/shops/aura", label: "Перейти в магазин" },
      { href: "/map", label: "Карта ТЦ", variant: "secondary" },
    ],
  },
  {
    type: "video",
    title: "День в Галерее",
    description: "Ощутите яркую атмосферу нашего торгового центра.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ",
    buttons: [
      { href: "/events", label: "Предстоящие события" },
    ],
  },
  {
    type: "image",
    title: "Новая коллекция уже здесь",
    description: "Познакомьтесь с последними новинками сезона.",
    image: {
      src: "https://placehold.co/1600x600.png",
      hint: "new collection",
    },
    buttons: [
      { href: "/shops", label: "В магазины" },
    ],
  },
  {
    type: "image",
    title: "Гастрономический фестиваль",
    description: "Насладитесь лучшими блюдами от наших ресторанов.",
    image: {
      src: "https://placehold.co/1600x600.png",
      hint: "food festival",
    },
    buttons: [
      { href: "#restaurants", label: "Узнать больше", variant: "accent" },
    ],
  },
]

export default function HeroSlider() {
  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-[500px]">
          {sliderItems.map((item, index) => (
            <CarouselItem key={index} className="relative h-full w-full">
              <div className="absolute inset-0 z-10 bg-black/50" />
              {item.type === "image" && item.image && (
                <Image
                  src={item.image.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  data-ai-hint={item.image.hint}
                  priority={index === 0}
                />
              )}
              {item.type === "video" && item.videoUrl && (
                 <div className="absolute inset-0 overflow-hidden">
                    <iframe
                        src={item.videoUrl}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="h-full w-full object-cover pointer-events-none scale-[1.3]"
                    ></iframe>
                </div>
              )}
              <div className="container relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  {item.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
                  {item.description}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {item.buttons.map((button) => (
                    <Button
                      key={button.href}
                      asChild
                      size="lg"
                      className={
                        button.variant === "accent"
                          ? "bg-accent text-accent-foreground hover:bg-accent/90"
                          : ""
                      }
                      variant={button.variant === 'secondary' ? 'secondary' : 'default'}
                    >
                      <Link href={button.href}>{button.label}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-30 translate-y-[-50%] top-1/2 h-12 w-12 border-white/50 text-white bg-white/20 hover:bg-white/30 hover:text-white opacity-100" />
        <CarouselNext className="absolute right-4 z-30 translate-y-[-50%] top-1/2 h-12 w-12 border-white/50 text-white bg-white/20 hover:bg-white/30 hover:text-white opacity-100" />
      </Carousel>
    </section>
  )
}
