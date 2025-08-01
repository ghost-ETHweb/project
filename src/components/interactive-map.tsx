
"use client"

import { useState } from "react"
import Image from "next/image"
import { useSearchParams } from 'next/navigation'
import { Shirt, Footprints, Utensils, BookOpen, Gem, Baby, Home, Wrench, Gift, ShoppingBasket, CookingPot, Sparkles, MapPin, FireExtinguisher, DoorOpen, ArrowUpRight, ConciergeBell, Users, Ticket, Phone, Ruler } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mapData = [
  { floor: 1, type: "svg" },
]

const legendCategories = [
    { icon: Shirt, text: "Одежда", color: "text-green-500" },
    { icon: Footprints, text: "Обувь", color: "text-pink-500" },
    { icon: Utensils, text: "Кафе/рестораны", color: "text-purple-400" },
    { icon: BookOpen, text: "Книги", color: "text-blue-500" },
    { icon: Gem, text: "Ювелирные изделия", color: "text-yellow-500" },
    { icon: Baby, text: "Детский магазин", color: "text-purple-600" },
    { icon: Home, text: "Все для дома", color: "text-indigo-600" },
    { icon: Wrench, text: "Инструменты", color: "text-red-500" },
    { icon: Gift, text: "Все для праздника", color: "text-lime-500" },
    { icon: ShoppingBasket, text: "Эконом-магазин", color: "text-teal-500" },
    { icon: CookingPot, text: "Бытовая техника", color: "text-orange-500" },
    { icon: Sparkles, text: "Нижнее белье", color: "text-emerald-500" },
    { icon: Ticket, text: "Продажа билетов", color: "text-cyan-500" },
    { icon: Phone, text: "Цифровая техника", color: "text-sky-500" },
    { icon: Ruler, text: "Спортивные товары", color: "text-amber-500" },
]

const legendFacilities = [
    { icon: FireExtinguisher, text: "Огнетушитель", color: "text-red-600" },
    { icon: DoorOpen, text: "Эвакуационный выход", color: "text-green-600" },
    { icon: Users, text: "Туалет", color: "text-gray-600" },
    { icon: ArrowUpRight, text: "Лестница", color: "text-yellow-700" },
    { icon: ConciergeBell, text: "Служебные помещения", color: "text-amber-800" },
]

const Floor1SvgMap = () => (
    <svg viewBox="0 0 1200 650" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>{`.shop-shape { fill: hsl(var(--muted)); stroke: hsl(var(--border)); stroke-width: 2; transition: fill 0.2s; cursor: pointer; } .shop-shape:hover { fill: hsl(var(--primary) / 0.2); } .shop-text { font-size: 20px; font-weight: bold; font-family: sans-serif; fill: hsl(var(--muted-foreground)); pointer-events: none; text-anchor: middle; dominant-baseline: central; } .small-text { font-size: 16px; }`}</style>
        </defs>
        
        <rect width="1200" height="650" fill="hsl(var(--background))" />
        
        <g id="shops-and-walkways">
            {/* Top-left vertical blocks */}
            <rect x="50" y="50" width="100" height="100" className="shop-shape" />
            <text x="100" y="100" className="shop-text">1</text>
            <rect x="50" y="150" width="100" height="100" className="shop-shape" />
            <text x="100" y="200" className="shop-text">2</text>
            <rect x="50" y="250" width="100" height="100" className="shop-shape" />
            <text x="100" y="300" className="shop-text">3</text>
            <rect x="50" y="350" width="100" height="100" className="shop-shape" />
            <text x="100" y="400" className="shop-text">4</text>
            
            {/* Top-left horizontal blocks */}
            <rect x="200" y="50" width="150" height="50" className="shop-shape" />
            <text x="275" y="75" className="shop-text">5</text>
            <rect x="200" y="100" width="150" height="50" className="shop-shape" />
            <text x="275" y="125" className="shop-text">6</text>
            <rect x="200" y="150" width="150" height="50" className="shop-shape" />
            <text x="275" y="175" className="shop-text">7</text>
            <rect x="200" y="200" width="150" height="50" className="shop-shape" />
            <text x="275" y="225" className="shop-text">8</text>

            {/* Middle section */}
            <rect x="200" y="300" width="100" height="100" className="shop-shape" />
            <text x="250" y="350" className="shop-text">9</text>
            <rect x="300" y="300" width="100" height="100" className="shop-shape" />
            <text x="350" y="350" className="shop-text">10</text>
            <path d="M 450 300 H 550 V 350 H 500 V 400 H 450 Z" className="shop-shape" />
            <text x="495" y="350" className="shop-text">11</text>
            <rect x="550" y="300" width="200" height="100" className="shop-shape" />
            <text x="650" y="350" className="shop-text">12</text>
             <rect x="750" y="300" width="300" height="100" className="shop-shape" />
            <text x="900" y="350" className="shop-text">13</text>

            {/* Bottom row */}
            <rect x="200" y="450" width="100" height="100" className="shop-shape" />
            <text x="250" y="500" className="shop-text">14</text>
            <path d="M 300 450 H 400 V 500 H 350 V 550 H 300 Z" className="shop-shape" />
            <text x="340" y="500" className="shop-text">15</text>
            <rect x="400" y="450" width="100" height="100" className="shop-shape" />
            <text x="450" y="500" className="shop-text">16</text>
            <rect x="500" y="450" width="100" height="100" className="shop-shape" />
            <text x="550" y="500" className="shop-text">17</text>
            <rect x="600" y="450" width="100" height="100" className="shop-shape" />
            <text x="650" y="500" className="shop-text">18</text>
            <path d="M 700 450 H 800 V 500 H 750 V 550 H 700 Z" className="shop-shape" />
            <text x="740" y="500" className="shop-text">19</text>
            <rect x="800" y="450" width="100" height="100" className="shop-shape" />
            <text x="850" y="500" className="shop-text">20</text>
             <rect x="900" y="450" width="150" height="100" className="shop-shape" />
            <text x="975" y="500" className="shop-text">21</text>

            {/* Right side */}
            <path d="M 1050 300 V 550 H 1100 V 450 H 1150 V 300 Z" className="shop-shape" />
            <text x="1100" y="375" className="shop-text">22</text>

            <rect x="1100" y="450" width="50" height="50" className="shop-shape" />
            <text x="1125" y="475" className="shop-text">23</text>

            <rect x="1100" y="500" width="50" height="50" className="shop-shape" />
            <text x="1125" y="525" className="shop-text">24</text>
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
        
        {mapData.map(({ floor, type }) => (
          <TabsContent key={floor} value={`floor-${floor}`} className="mt-4">
            <Card>
              <CardContent className="p-2 md:p-4">
                <div className="relative aspect-[1200/650] w-full overflow-hidden rounded-lg border">
                  {type === 'svg' && <Floor1SvgMap /> }
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
