"use client"

import { useState } from "react"
import Image from "next/image"
import { useSearchParams } from 'next/navigation'
import { Shirt, Footprints, Utensils, BookOpen, Gem, Baby, Home, Wrench, Gift, ShoppingBasket, CookingPot, Sparkles, MapPin, FireExtinguisher, DoorOpen, ArrowUpRight, ConciergeBell, Users } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mapData = [
  { floor: 1, type: "svg" },
  { floor: 2, type: "image", image: "https://placehold.co/1200x800.png", hint: "mall map floor 2" },
  { floor: 3, type: "image", image: "https://placehold.co/1200x800.png", hint: "mall map floor 3" },
]

const legendCategories = [
    { icon: Shirt, text: "Одежда", color: "text-green-500" },
    { icon: Footprints, text: "Обувь", color: "text-pink-500" },
    { icon: Utensils, text: "Кафе", color: "text-purple-400" },
    { icon: BookOpen, text: "Книги", color: "text-blue-500" },
    { icon: Gem, text: "Ювелирные изделия", color: "text-yellow-500" },
    { icon: Baby, text: "Все для детей", color: "text-purple-600" },
    { icon: Home, text: "Все для дома и уюта", color: "text-indigo-600" },
    { icon: Wrench, text: "Инструмент", color: "text-red-500" },
    { icon: Gift, text: "Подарки, Цветы", color: "text-lime-500" },
    { icon: ShoppingBasket, text: "Эконом-магазин", color: "text-teal-500" },
    { icon: CookingPot, text: "Бытовая техника", color: "text-orange-500" },
    { icon: Sparkles, text: "Нижнее белье", color: "text-emerald-500" },
]

const legendFacilities = [
    { icon: FireExtinguisher, text: "Огнетушитель", color: "text-red-600" },
    { icon: DoorOpen, text: "Эвакуационный выход", color: "text-green-600" },
    { icon: Users, text: "Туалет", color: "text-gray-600" },
    { icon: ArrowUpRight, text: "Лестница", color: "text-yellow-700" },
    { icon: ConciergeBell, text: "Служебные помещения", color: "text-amber-800" },
]

const Floor1SvgMap = () => (
    <svg viewBox="0 0 1200 800" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>{`.shop-shape { fill: hsl(var(--muted)); stroke: hsl(var(--border)); stroke-width: 2; transition: fill 0.2s; cursor: pointer; } .shop-shape:hover { fill: hsl(var(--primary) / 0.2); } .shop-text { font-size: 14px; font-family: sans-serif; fill: hsl(var(--muted-foreground)); pointer-events: none; text-anchor: middle; }`}</style>
        </defs>
        
        {/* Background */}
        <rect width="1200" height="800" fill="hsl(var(--background))" />

        {/* Shop Shapes */}
        <g id="shops-left">
            {/* Big block at the bottom */}
            <path d="M50 450 H 250 V 750 H 50 Z" className="shop-shape" />
            {/* 4 smaller blocks on top */}
            <path d="M50 350 H 250 V 450 H 50 Z" className="shop-shape" />
            <path d="M50 250 H 250 V 350 H 50 Z" className="shop-shape" />
            <path d="M50 150 H 250 V 250 H 50 Z" className="shop-shape" />
            <path d="M50 50 H 250 V 150 H 50 Z" className="shop-shape" />
        </g>
        
        <g id="shops-bottom-center">
            <path d="M250 650 H 450 V 750 H 250 Z" className="shop-shape" />
            <path d="M450 650 H 650 V 750 H 450 Z" className="shop-shape" />
            <path d="M650 650 H 850 V 750 H 650 Z" className="shop-shape" />
            <path d="M850 650 H 1000 V 750 H 850 Z" className="shop-shape" />
        </g>
        
        <g id="shops-top-center">
             <path d="M450 50 H 650 V 150 H 450 Z" className="shop-shape" />
             <path d="M650 50 H 850 V 150 H 650 Z" className="shop-shape" />
        </g>

        <g id="shops-center">
            <path d="M450 400 L 450 650 L 700 650 L 700 400 Z" className="shop-shape" />
            <path d="M450 150 L 450 400 L 700 400 L 700 150 Z" className="shop-shape" />
        </g>

        <g id="shops-right-center">
            <path d="M700 150 L 850 150 L 850 650 L 700 650 Z" className="shop-shape" />
        </g>

        <g id="shops-far-right">
             <path d="M850 50 L 1150 50 L 1150 350 L 850 350 Z" className="shop-shape" />
             <path d="M850 350 L 1150 350 L 1150 650 L 850 650 Z" className="shop-shape" />
             <path d="M1000 650 L 1150 650 L 1150 750 L 1000 750 Z" className="shop-shape" />
        </g>
    </svg>
)


export function InteractiveMallMap() {
  const [searchQuery, setSearchQuery] = useState("")
  const searchParams = useSearchParams()
  const floorParam = searchParams.get('floor')
  
  const defaultFloor = floorParam ? `floor-${floorParam}` : "floor-1";

  return (
    <div className="w-full">
      <Tabs defaultValue={defaultFloor} className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <TabsList>
            {mapData.map(({ floor }) => (
                <TabsTrigger key={floor} value={`floor-${floor}`}>
                Этаж {floor}
                </TabsTrigger>
            ))}
            </TabsList>
            <div className="w-full sm:w-auto sm:max-w-xs">
                <Input
                    placeholder="Поиск по названию магазина..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
        
        {mapData.map(({ floor, type, image, hint }) => (
          <TabsContent key={floor} value={`floor-${floor}`} className="mt-4">
            <Card>
              <CardContent className="p-2 md:p-4">
                <div className="relative aspect-[1200/800] w-full overflow-hidden rounded-lg border">
                  {type === 'svg' ? (
                    <Floor1SvgMap />
                  ) : image ? (
                    <Image
                      src={image}
                      alt={`Карта этажа ${floor}`}
                      fill
                      className="object-contain"
                      data-ai-hint={hint}
                    />
                  ) : null}
                  {/* Future: Add absolutely positioned shop markers here */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
       <Card className="mt-8">
        <CardHeader>
            <CardTitle className="font-headline text-xl">Легенда карты</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
                <h3 className="font-semibold mb-4 text-muted-foreground">Категории магазинов</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
                    {legendCategories.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <item.icon className={`${item.color} h-5 w-5 flex-shrink-0`} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="font-semibold mb-4 text-muted-foreground">Обозначения</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
                    {legendFacilities.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <item.icon className={`${item.color} h-5 w-5 flex-shrink-0`} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </CardContent>
       </Card>
    </div>
  )
}
