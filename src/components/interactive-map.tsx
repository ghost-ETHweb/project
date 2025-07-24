"use client"

import { useState } from "react"
import Image from "next/image"
import { Building, ParkingCircle, Utensils, PersonStanding, Elevator, EscalatorUp } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const mapData = [
  { floor: 1, image: "https://placehold.co/1200x800.png", hint: "mall map" },
  { floor: 2, image: "https://placehold.co/1200x800.png", hint: "shopping center" },
  { floor: 3, image: "https://placehold.co/1200x800.png", hint: "floor plan" },
]

const legendItems = [
    { icon: PersonStanding, text: "Restrooms", color: "text-blue-500" },
    { icon: Elevator, text: "Elevators", color: "text-green-500" },
    { icon: EscalatorUp, text: "Escalators", color: "text-purple-500" },
    { icon: ParkingCircle, text: "Parking", color: "text-gray-500" },
    { icon: Utensils, text: "Food Court", color: "text-orange-500" },
]

export function InteractiveMallMap() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Interactive Mall Map
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find your way around with ease. Select a floor to begin.
        </p>
      </div>

      <Tabs defaultValue="floor-1" className="mt-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <TabsList>
            {mapData.map(({ floor }) => (
                <TabsTrigger key={floor} value={`floor-${floor}`}>
                Floor {floor}
                </TabsTrigger>
            ))}
            </TabsList>
            <div className="w-full sm:w-auto sm:max-w-xs">
                <Input
                    placeholder="Search by shop name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
        
        {mapData.map(({ floor, image, hint }) => (
          <TabsContent key={floor} value={`floor-${floor}`} className="mt-4">
            <Card>
              <CardContent className="p-2 md:p-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border">
                  <Image
                    src={image}
                    alt={`Map of floor ${floor}`}
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
        <CardContent className="p-6">
            <h3 className="font-headline text-lg font-semibold mb-4">Map Legend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm">
                {legendItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <item.icon className={`${item.color} h-5 w-5`} />
                        <span className="text-muted-foreground">{item.text}</span>
                    </div>
                ))}
            </div>
        </CardContent>
       </Card>
    </div>
  )
}
