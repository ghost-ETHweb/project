"use client"

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps"

const TIKHVIN_COORDS = [59.6489, 33.5186];

export function YandexMap() {
    const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;

    if (!apiKey) {
        return (
            <div className="flex items-center justify-center h-full bg-muted">
                <p className="text-muted-foreground">API-ключ для Яндекс.Карт не найден.</p>
            </div>
        )
    }

    return (
        <YMaps query={{ apikey: apiKey }}>
            <Map 
                defaultState={{ center: TIKHVIN_COORDS, zoom: 16 }}
                width="100%"
                height="100%"
            >
                <Placemark 
                    geometry={TIKHVIN_COORDS} 
                    properties={{
                        balloonContentHeader: "ТЦ Галерея Навигатор",
                        balloonContentBody: "ул. Карла Маркса, 50, Тихвин",
                    }}
                    options={{
                        preset: 'islands#redShoppingIcon'
                    }}
                />
            </Map>
        </YMaps>
    )
}
