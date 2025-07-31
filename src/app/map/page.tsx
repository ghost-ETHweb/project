import { InteractiveMallMap } from "@/components/interactive-map";
import { Suspense } from "react";
import { shopsData } from "@/lib/shops";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";


function MapPageContent() {
    const shopsByFloor = shopsData.reduce((acc, shop) => {
        const floor = shop.floor;
        if (!acc[floor]) {
            acc[floor] = [];
        }
        acc[floor].push(shop);
        return acc;
    }, {} as Record<number, typeof shopsData>);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Карта Торгового Центра
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Найдите любимые магазины, рестораны и развлечения.
            </p>
        </div>
        <InteractiveMallMap />

        <div className="mt-12 space-y-8">
            {Object.entries(shopsByFloor).sort(([a], [b]) => Number(a) - Number(b)).map(([floor, shops]) => (
                 <div key={floor}>
                    <h2 className="font-headline text-2xl font-semibold mb-4">Этаж {floor}</h2>
                    <Card>
                        <CardContent className="p-4 sm:p-6">
                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {shops.sort((a,b) => a.id - b.id).map(shop => (
                                    <Link href={`/shops/${shop.id}`} key={shop.id} className="block hover:bg-muted/50 p-3 rounded-md transition-colors">
                                        <p className="font-semibold text-foreground">{shop.id}. {shop.name}</p>
                                        <p className="text-sm text-muted-foreground">{shop.category}</p>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default function MapPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <MapPageContent />
    </Suspense>
  )
}
