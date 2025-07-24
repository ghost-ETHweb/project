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
    title: "Summer Sale Spectacular",
    description: "Up to 70% off on your favorite brands. Don't miss out!",
    image: {
      src: "https://placehold.co/1600x800.png",
      hint: "fashion sale",
    },
    buttons: [
      { href: "/shops", label: "View Shops" },
      { href: "#promotions", label: "Promotions", variant: "accent" },
    ],
  },
  {
    type: "image",
    title: "New Flagship Store Now Open",
    description: "Discover the latest trends at the grand opening of Aura.",
    image: {
      src: "https://placehold.co/1600x800.png",
      hint: "luxury store",
    },
    buttons: [
      { href: "/shops/aura", label: "Explore Store" },
      { href: "/map", label: "Mall Map", variant: "secondary" },
    ],
  },
  {
    type: "video",
    title: "A Day at the Gallery",
    description: "Experience the vibrant atmosphere of our mall.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ",
    buttons: [
      { href: "/events", label: "Upcoming Events" },
    ],
  },
]

export default function HeroSlider() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full md:h-[80vh]">
      <Carousel
        className="h-full w-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
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
        <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 transform">
            <CarouselPrevious className="relative left-[-15px] border-white text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="relative right-[-15px] border-white text-white hover:bg-white/20 hover:text-white" />
        </div>
      </Carousel>
    </section>
  )
}
