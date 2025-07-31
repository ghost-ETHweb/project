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
            <style>{`.shop-shape { fill: hsl(var(--muted)); stroke: hsl(var(--border)); stroke-width: 2; transition: fill 0.2s; cursor: pointer; } .shop-shape:hover { fill: hsl(var(--primary) / 0.2); } .shop-text { font-size: 20px; font-weight: bold; font-family: sans-serif; fill: hsl(var(--muted-foreground)); pointer-events: none; text-anchor: middle; dominant-baseline: central; } .small-text { font-size: 16px; }`}</style>
        </defs>
        
        {/* Background */}
        <rect width="1200" height="800" fill="hsl(var(--background))" />

        {/* Left Wing */}
        <g id="left-wing">
            <rect x="50" y="50" width="150" height="70" className="shop-shape" />
            <text x="125" y="85" className="shop-text">5</text>
            <rect x="50" y="120" width="150" height="70" className="shop-shape" />
            <text x="125" y="155" className="shop-text">4</text>
            <rect x="50" y="190" width="150" height="70" className="shop-shape" />
            <text x="125" y="225" className="shop-text">3</text>
            <rect x="50" y="260" width="150" height="70" className="shop-shape" />
            <text x="125" y="295" className="shop-text">2</text>
            <rect x="50" y="330" width="150" height="250" className="shop-shape" />
            <text x="125" y="455" className="shop-text">1</text>
        </g>
        
        {/* Top-Center Wing */}
        <g id="top-center-wing">
            <rect x="250" y="50" width="150" height="70" className="shop-shape" />
            <text x="325" y="85" className="shop-text">6</text>
            <rect x="250" y="120" width="150" height="70" className="shop-shape" />
            <text x="325" y="155" className="shop-text">7</text>
            <rect x="250" y="190" width="150" height="70" className="shop-shape" />
            <text x="325" y="225" className="shop-text">8</text>
            <rect x="250" y="260" width="150" height="120" className="shop-shape" />
            <text x="325" y="320" className="shop-text">9</text>
        </g>

        {/* Center-Left Area */}
        <g id="center-left-area">
            <path d="M420 280 H 570 V 380 H 420 Z" className="shop-shape" />
            <text x="495" y="330" className="shop-text">10</text>
            <path d="M420 380 H 495 V 450 H 420 Z" className="shop-shape" />
            <text x="457.5" y="415" className="shop-text">11</text>
            <path d="M495 380 H 570 V 450 H 495 Z" className="shop-shape" />
            <text x="532.5" y="415" className="shop-text">12</text>
            <path d="M570 280 H 630 V 450 H 570 Z" className="shop-shape" />
            <text x="600" y="365" className="shop-text small-text">16</text>
        </g>
        
        {/* Center-Middle Area */}
        <g id="center-middle-area">
             <path d="M630 280 H 880 V 450 H 630 Z" className="shop-shape" />
             <text x="755" y="365" className="shop-text">17</text>
        </g>

        {/* Center-Right Area */}
        <g id="center-right-area">
            <path d="M880 280 H 1150 V 350 H 980 V 450 H 880 Z" className="shop-shape" />
            <text x="980" y="315" className="shop-text">24</text>
            <path d="M980 350 H 1150 V 550 H 980 Z" className="shop-shape" />
            <text x="1065" y="450" className="shop-text">23</text>
        </g>

        {/* Bottom-Left Area */}
        <g id="bottom-left-area">
            <rect x="420" y="550" width="150" height="100" className="shop-shape" />
            <text x="495" y="600" className="shop-text">13</text>
            <rect x="420" y="650" width="75" height="100" className="shop-shape" />
            <text x="457.5" y="700" className="shop-text">14</text>
            <rect x="495" y="650" width="150" height="100" className="shop-shape" />
            <text x="570" y="700" className="shop-text">15</text>
            <rect x="570" y="550" width="75" height="100" className="shop-shape" />
            <text x="607.5" y="600" className="shop-text">18</text>
        </g>

        {/* Bottom-Center Area */}
        <g id="bottom-center-area">
            <rect x="645" y="550" width="150" height="200" className="shop-shape" />
            <text x="720" y="650" className="shop-text">19</text>
        </g>
        
        {/* Bottom-Right Area */}
        <g id="bottom-right-area">
            <rect x="795" y="550" width="60" height="200" className="shop-shape" />
            <text x="825" y="650" className="shop-text">20</text>
            <rect x="855" y="550" width="60" height="200" className="shop-shape" />
            <text x="885" y="650" className="shop-text">21</text>
            <path d="M915 550 H 975 V 610 H 945 V 580 H 915 Z" className="shop-shape" />
            <text x="945" y="565" className="shop-text small-text">M</text>
            <path d="M915 610 H 975 V 700 H 915 Z" className="shop-shape" />
            <text x="945" y="655" className="shop-text">26</text>
            <rect x="975" y="550" width="100" height="200" className="shop-shape" />
            <text x="1025" y="650" className="shop-text">22</text>
            <path d="M1075 550 H 1150 V 750 H 1075 Z" className="shop-shape" />
            <text x="1112.5" y="650" className="shop-text">25</text>
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
