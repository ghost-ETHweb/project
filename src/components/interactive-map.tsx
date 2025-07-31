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
    <svg viewBox="0 0 1200 848" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>{`.shop-shape { fill: hsl(var(--muted)); stroke: hsl(var(--border)); stroke-width: 2; transition: fill 0.2s; cursor: pointer; } .shop-shape:hover { fill: hsl(var(--primary) / 0.2); } .shop-text { font-size: 14px; font-family: sans-serif; fill: hsl(var(--muted-foreground)); pointer-events: none; text-anchor: middle; }`}</style>
        </defs>
        
        {/* Main mall outline */}
        <path d="M50 50 H1150 V798 H50 Z" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="3" />

        {/* Corridors */}
        <path d="M150 150 H1050 V250 H150 Z" fill="hsl(var(--background))" />
        <path d="M150 598 H1050 V698 H150 Z" fill="hsl(var(--background))" />
        <path d="M575 250 V598" stroke="hsl(var(--background))" strokeWidth="100" fill="hsl(var(--background))" />

        {/* Shops - Top Row */}
        <g id="shop-14" className="shop-group">
            <rect x="150" y="50" width="120" height="100" className="shop-shape" />
            <text x="210" y="105" className="shop-text">14</text>
        </g>
        <g id="shop-2" className="shop-group">
            <rect x="270" y="50" width="120" height="100" className="shop-shape" />
            <text x="330" y="105" className="shop-text">2</text>
        </g>
        <g id="shop-19" className="shop-group">
            <rect x="390" y="50" width="120" height="100" className="shop-shape" />
            <text x="450" y="105" className="shop-text">19</text>
        </g>
        <g id="shop-3" className="shop-group">
            <rect x="630" y="50" width="120" height="100" className="shop-shape" />
            <text x="690" y="105" className="shop-text">3</text>
        </g>
        <g id="shop-23" className="shop-group">
            <rect x="750" y="50" width="120" height="100" className="shop-shape" />
            <text x="810" y="105" className="shop-text">23</text>
        </g>
        <g id="shop-10" className="shop-group">
            <rect x="870" y="50" width="120" height="100" className="shop-shape" />
            <text x="930" y="105" className="shop-text">10</text>
        </g>

        {/* Shops - Bottom Row */}
        <g id="shop-21" className="shop-group">
            <rect x="150" y="698" width="240" height="100" className="shop-shape" />
            <text x="270" y="753" className="shop-text">21. DNS</text>
        </g>
        <g id="shop-1" className="shop-group">
            <rect x="390" y="698" width="180" height="100" className="shop-shape" />
            <text x="480" y="753" className="shop-text">1. Kari</text>
        </g>
        <g id="shop-4" className="shop-group">
            <rect x="570" y="698" width="180" height="100" className="shop-shape" />
            <text x="660" y="753" className="shop-text">4. Напротив</text>
        </g>
         <g id="shop-unassigned-1" className="shop-group">
            <rect x="750" y="698" width="300" height="100" className="shop-shape" />
            <text x="900" y="753" className="shop-text">Вход</text>
        </g>

        {/* Shops - Middle Area Left */}
         <g id="shop-middle-left-1" className="shop-group">
            <rect x="150" y="250" width="200" height="174" className="shop-shape" />
             <text x="250" y="337" className="shop-text">WC</text>
        </g>
         <g id="shop-middle-left-2" className="shop-group">
            <rect x="150" y="424" width="200" height="174" className="shop-shape" />
             <text x="250" y="511" className="shop-text">Гардероб</text>
        </g>

         {/* Shops - Middle Area Right */}
        <g id="shop-middle-right-1" className="shop-group">
            <rect x="850" y="250" width="200" height="348" className="shop-shape" />
             <text x="950" y="424" className="shop-text">Ресторанный дворик</text>
        </g>

        {/* Facilities */}
        <g transform="translate(100, 424)">
            <DoorOpen className="text-green-600" width="32" height="32" />
            <text x="0" y="50" className="shop-text" textAnchor="middle">Выход</text>
        </g>
         <g transform="translate(1100, 424)">
            <DoorOpen className="text-green-600" width="32" height="32" />
            <text x="0" y="50" className="shop-text" textAnchor="middle">Выход</text>
        </g>
         <g transform="translate(500, 424)">
            <ArrowUpRight className="text-yellow-700" width="32" height="32" />
            <text x="0" y="50" className="shop-text" textAnchor="middle">Эскалатор</text>
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
                <div className="relative aspect-[1200/848] w-full overflow-hidden rounded-lg border">
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
