"use client"

import { useState } from "react"
import Image from "next/image"
import { useSearchParams } from 'next/navigation'
import { Shirt, Footprints, Utensils, BookOpen, Gem, Baby, Home, Wrench, Gift, ShoppingBasket, Appliance, Sparkles, MapPin, FireExtinguisher, Hydrant, DoorOpen, Stairs, ConciergeBell, Users } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mapData = [
  { floor: 1, image: "https://storage.googleapis.com/studiostore/map.png", hint: "mall map floor 1" },
  { floor: 2, image: "https://placehold.co/1200x800.png", hint: "mall map floor 2" },
  { floor: 3, image: "https://placehold.co/1200x800.png", hint: "mall map floor 3" },
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
    { icon: Appliance, text: "Бытовая техника", color: "text-orange-500" },
    { icon: Sparkles, text: "Нижнее белье", color: "text-emerald-500" },
]

const legendFacilities = [
    { icon: FireExtinguisher, text: "Огнетушитель", color: "text-red-600" },
    { icon: Hydrant, text: "Пожарный гидрант", color: "text-red-600" },
    { icon: DoorOpen, text: "Эвакуационный выход", color: "text-green-600" },
    { icon: Users, text: "Туалет", color: "text-gray-600" },
    { icon: Stairs, text: "Лестница", color: "text-yellow-700" },
    { icon: ConciergeBell, text: "Служебные помещения", color: "text-amber-800" },
]


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
        
        {mapData.map(({ floor, image, hint }) => (
          <TabsContent key={floor} value={`floor-${floor}`} className="mt-4">
            <Card>
              <CardContent className="p-2 md:p-4">
                <div className="relative aspect-[1200/848] w-full overflow-hidden rounded-lg border">
                  <Image
                    src={image}
                    alt={`Карта этажа ${floor}`}
                    fill
                    className="object-contain"
                    data-ai-hint={hint}
                  />
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
