
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
            <style>{`.shop-shape { fill: hsl(var(--muted)); stroke: hsl(var(--border)); stroke-width: 2; transition: fill 0.2s; cursor: pointer; } .shop-shape:hover { fill: hsl(var(--primary) / 0.2); } .shop-text { font-size: 14px; font-family: sans-serif; fill: hsl(var(--muted-foreground)); pointer-events: none; text-anchor: middle; vertical-alignment: middle; dominant-baseline: middle; }`}</style>
        </defs>
        
        {/* Background */}
        <rect width="1200" height="800" fill="hsl(var(--background))" />

        {/* Shop Shapes */}
        <g id="shops-left">
            {/* Big block at the bottom (60%) */}
            <path d="M50 330 H 250 V 750 H 50 Z" className="shop-shape" />
            <text x="150" y="540" className="shop-text">5</text>
            {/* 4 smaller blocks on top (10% each) */}
            <path d="M50 260 H 250 V 330 H 50 Z" className="shop-shape" />
            <text x="150" y="295" className="shop-text">4</text>
            <path d="M50 190 H 250 V 260 H 50 Z" className="shop-shape" />
            <text x="150" y="225" className="shop-text">3</text>
            <path d="M50 120 H 250 V 190 H 50 Z" className="shop-shape" />
            <text x="150" y="155" className="shop-text">2</text>
            <path d="M50 50 H 250 V 120 H 50 Z" className="shop-shape" />
            <text x="150" y="85" className="shop-text">1</text>
        </g>
        
        <g id="shops-center-left">
            <path d="M450 260 H 650 V 330 H 450 Z" className="shop-shape" />
            <text x="550" y="295" className="shop-text">8</text>
            <path d="M450 190 H 650 V 260 H 450 Z" className="shop-shape" />
            <text x="550" y="225" className="shop-text">7</text>
            <path d="M450 120 H 650 V 190 H 450 Z" className="shop-shape" />
            <text x="550" y="155" className="shop-text">6</text>
            <path d="M450 50 H 650 V 120 H 450 Z" className="shop-shape" />
            <text x="550" y="85" className="shop-text">9</text>
        </g>

        <g id="shops-center">
            {/* L-shaped Block 10 */}
            <path d="M450 330 H 650 V 455 H 570 V 580 H 450 Z" className="shop-shape" />
            <text x="510" y="455" className="shop-text">10</text>
            
            {/* Block 11 */}
            <path d="M570 455 H 650 V 517.5 H 570 Z" className="shop-shape" />
            <text x="610" y="486.25" className="shop-text">11</text>
            
             {/* Block 12 */}
            <path d="M570 517.5 H 650 V 580 H 570 Z" className="shop-shape" />
            <text x="610" y="548.75" className="shop-text">12</text>
        </g>

        <g id="shops-right-center">
            <path d="M700 150 L 850 150 L 850 650 L 700 650 Z" className="shop-shape" />
            <text x="775" y="400" className="shop-text">13</text>
        </g>

        <g id="shops-far-right">
             <path d="M850 50 L 1150 50 L 1150 350 L 850 350 Z" className="shop-shape" />
             <text x="1000" y="200" className="shop-text">14</text>
             <path d="M850 350 L 1150 350 L 1150 650 L 850 650 Z" className="shop-shape" />
             <text x="1000" y="500" className="shop-text">15</text>
             <path d="M1000 650 L 1150 650 L 1150 750 L 1000 750 Z" className="shop-shape" />
             <text x="1075" y="700" className="shop-text">16</text>
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
