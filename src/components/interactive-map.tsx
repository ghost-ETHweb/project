
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
    <svg viewBox="0 0 1200 800" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>{`.shop-shape { fill: hsl(var(--muted)); stroke: hsl(var(--border)); stroke-width: 2; transition: fill 0.2s; cursor: pointer; } .shop-shape:hover { fill: hsl(var(--primary) / 0.2); } .shop-text { font-size: 20px; font-weight: bold; font-family: sans-serif; fill: hsl(var(--muted-foreground)); pointer-events: none; text-anchor: middle; dominant-baseline: central; } .small-text { font-size: 16px; }`}</style>
        </defs>
        
        <rect width="1200" height="800" fill="hsl(var(--background))" />
        
        <g id="shops-and-walkways">
            <rect x="50" y="50" width="200" height="125" className="shop-shape" />
            <text x="150" y="112.5" className="shop-text">1</text>

            <rect x="50" y="175" width="200" height="125" className="shop-shape" />
            <text x="150" y="237.5" className="shop-text">2</text>

            <rect x="50" y="300" width="200" height="125" className="shop-shape" />
            <text x="150" y="362.5" className="shop-text">3</text>

            <rect x="50" y="425" width="200" height="125" className="shop-shape" />
            <text x="150" y="487.5" className="shop-text">4</text>

            <rect x="50" y="550" width="200" height="125" className="shop-shape" />
            <text x="150" y="612.5" className="shop-text">5</text>
        
            <rect x="290" y="50" width="160" height="125" className="shop-shape" />
            <text x="370" y="112.5" className="shop-text">6</text>

            <rect x="290" y="175" width="160" height="125" className="shop-shape" />
            <text x="370" y="237.5" className="shop-text">7</text>

            <rect x="290" y="300" width="160" height="125" className="shop-shape" />
            <text x="370" y="362.5" className="shop-text">8</text>

            <rect x="290" y="550" width="160" height="125" className="shop-shape" />
            <text x="370" y="612.5" className="shop-text">9</text>

            <path d="M 490 50 L 650 50 L 650 210 L 490 210 Z" className="shop-shape" />
            <text x="570" y="130" className="shop-text">10</text>
            
            <path d="M 490 210 L 650 210 L 650 370 L 490 370 Z" className="shop-shape" />
            <text x="570" y="290" className="shop-text">11</text>

            <path d="M 490 370 L 650 370 L 650 530 L 490 530 Z" className="shop-shape" />
            <text x="570" y="450" className="shop-text">12</text>

            <path d="M 490 530 L 650 530 L 650 690 L 490 690 Z" className="shop-shape" />
            <text x="570" y="610" className="shop-text">13</text>
            
            <path d="M 650 50 L 810 50 L 810 210 L 650 210 Z" className="shop-shape" />
            <text x="730" y="130" className="shop-text">17</text>

            <path d="M 650 210 L 810 210 L 810 370 L 650 370 Z" className="shop-shape" />
            <text x="730" y="290" className="shop-text">18</text>
            
            <path d="M 650 370 L 730 370 L 730 530 L 650 530 Z" className="shop-shape" />
            <text x="690" y="450" className="shop-text">19</text>
            
            <path d="M 730 370 L 810 370 L 810 530 L 730 530 Z" className="shop-shape" />
            <text x="770" y="450" className="shop-text">20</text>

            <path d="M 650 530 L 810 530 L 810 690 L 650 690 Z" className="shop-shape" />
            <text x="730" y="610" className="shop-text">14</text>
            
            <rect x="810" y="530" width="160" height="160" className="shop-shape" />
            <text x="890" y="610" className="shop-text">15</text>
            
            <rect x="850" y="50" width="300" height="200" className="shop-shape" />
            <text x="1000" y="150" className="shop-text">22</text>
            
            <rect x="950" y="250" width="200" height="440" className="shop-shape" />
            <text x="1050" y="470" className="shop-text">23</text>

            <rect x="950" y="530" width="200" height="160" className="shop-shape" />
            <text x="1050" y="610" className="shop-text">24</text>

            <rect x="290" y="425" width="80" height="125" className="shop-shape" />
            <text x="330" y="487.5" className="shop-text">21</text>
            
            <rect x="850" y="250" width="100" height="280" className="shop-shape" />
            <text x="900" y="390" className="shop-text">16</text>
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
