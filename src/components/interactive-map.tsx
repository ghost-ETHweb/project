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
            <style>{`.shop-shape { fill: hsl(var(--muted)); stroke: hsl(var(--border)); stroke-width: 2; transition: fill 0.2s; cursor: pointer; } .shop-shape:hover { fill: hsl(var(--primary) / 0.2); } .shop-text { font-size: 16px; font-weight: bold; font-family: sans-serif; fill: hsl(var(--muted-foreground)); pointer-events: none; text-anchor: middle; dominant-baseline: central; } .small-text { font-size: 12px; }`}</style>
        </defs>
        
        {/* Background */}
        <rect width="1200" height="800" fill="hsl(var(--background))" />

        {/* Top Row */}
        <g id="shops-top-row">
            {/* Block 10 */}
            <path d="M50 50 H 200 V 250 H 150 V 150 H 50 Z" className="shop-shape" style={{fill: '#a2d6a4'}} />
            <text x="80" y="80" className="shop-text">10</text>
            
            {/* Block 11 */}
            <path d="M50 150 H 150 V 250 H 50 Z" className="shop-shape" style={{fill: '#fcd837'}} />
            <text x="100" y="200" className="shop-text">11</text>
            
            {/* Block 12 */}
            <path d="M150 100 H 270 V 250 H 150 Z" className="shop-shape" style={{fill: '#a2d6a4'}} />
            <text x="210" y="175" className="shop-text">12</text>
            
            {/* Block 16 */}
            <path d="M270 100 H 390 V 200 H 270 Z" className="shop-shape" style={{fill: '#662d91'}} />
            <text x="330" y="130" className="shop-text">16</text>
            <path d="M270 200 H 330 V 250 H 270 Z" className="shop-shape" style={{fill: '#4d206d'}} />
            
            {/* Block 17 */}
            <path d="M390 50 H 680 V 250 H 390 Z" className="shop-shape" style={{fill: '#d883b9'}} />
            <text x="535" y="150" className="shop-text">17</text>
            
            {/* WC */}
            <path d="M580 200 H 650 V 250 H 580 Z" className="shop-shape" style={{fill: '#999999'}} />
            <text x="600" y="225" className="shop-text small-text">WC</text>
            <text x="630" y="225" className="shop-text small-text">Ж</text>
            
            {/* Block 24 */}
            <path d="M680 50 H 880 V 200 H 680 Z" className="shop-shape" style={{fill: '#ed1c24'}} />
            <text x="780" y="125" className="shop-text">24</text>

            {/* Block 23 */}
            <path d="M800 200 H 1150 V 450 H 800 Z" className="shop-shape" style={{fill: '#f7931e'}} />
            <text x="975" y="325" className="shop-text">23</text>
        </g>
        
        {/* Bottom Row */}
        <g id="shops-bottom-row">
             {/* Block 13 */}
            <path d="M50 450 H 250 V 550 H 50 Z" className="shop-shape" style={{fill: '#a2d6a4'}} />
            <text x="150" y="500" className="shop-text">13</text>
            
            {/* Block 14 */}
            <path d="M50 550 H 150 V 650 H 50 Z" className="shop-shape" style={{fill: '#39b54a'}} />
            <text x="100" y="600" className="shop-text">14</text>
            
            {/* Block 15 */}
            <path d="M50 650 H 250 V 750 H 50 Z" className="shop-shape" style={{fill: '#f2bad5'}} />
            <text x="150" y="700" className="shop-text">15</text>
            
            {/* Block 18 */}
            <path d="M250 450 H 380 V 580 H 250 Z" className="shop-shape" style={{fill: '#39b54a'}} />
            <text x="315" y="515" className="shop-text">18</text>

            {/* Block 19 */}
            <path d="M250 580 H 450 V 750 H 250 Z" className="shop-shape" style={{fill: '#00a99d'}} />
            <text x="350" y="665" className="shop-text">19</text>
            
            {/* Block 20 */}
            <path d="M480 450 H 540 V 750 H 480 Z" className="shop-shape" style={{fill: '#8dc63f'}} />
            <text x="510" y="600" className="shop-text">20</text>
            
            {/* Block 21 */}
            <path d="M540 450 H 600 V 750 H 540 Z" className="shop-shape" style={{fill: '#a2d6a4'}} />
            <text x="570" y="600" className="shop-text">21</text>
            
             {/* Block M */}
            <path d="M600 450 H 680 V 520 H 600 Z" className="shop-shape" style={{fill: '#a67c52'}} />
            <text x="640" y="485" className="shop-text">M</text>
            
            {/* Block 26 with stairs */}
            <g id="stairs-26">
                <path d="M600 520 H 680 V 620 H 600 Z" className="shop-shape" style={{fill: '#cccccc'}}/>
                <text x="640" y="550" className="shop-text">26</text>
                <line x1="605" y1="525" x2="675" y2="615" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                <line x1="605" y1="535" x2="665" y2="615" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                <line x1="605" y1="545" x2="655" y2="615" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                <line x1="605" y1="555" x2="645" y2="615" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                <line x1="605" y1="565" x2="635" y2="615" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                <line x1="605" y1="575" x2="625" y2="615" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
                <line x1="605" y1="585" x2="615" y2="615" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
            </g>

            {/* Block 22 */}
            <path d="M680 450 H 850 V 750 H 680 Z" className="shop-shape" style={{fill: '#662d91'}} />
            <text x="765" y="600" className="shop-text">22</text>
            
            {/* Bottom right blocks */}
            <path d="M950 680 H 1150 V 750 H 950 Z" className="shop-shape" style={{fill: '#a67c52'}} />
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
