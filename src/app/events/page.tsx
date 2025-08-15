
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"

const eventsData = [
    { 
        id: 1, 
        title: "Джазовый вечер", 
        description: "Насладитесь живой джазовой музыкой в центральном атриуме. Вход свободный.", 
        date: "2024-09-05", 
        time: "19:00 - 21:00", 
        location: "Центральный атриум, 1 этаж",
        image: { src: "/images/events/1.png", hint: "jazz music" },
        category: "Музыка",
    },
    { 
        id: 2, 
        title: "Мастер-класс по рисованию для детей", 
        description: "Приводите своих детей на увлекательный мастер-класс, где они научатся основам живописи.", 
        date: "2024-09-14", 
        time: "12:00 - 14:00", 
        location: "Детская зона, 2 этаж",
        image: { src: "/images/events/2.png", hint: "kids painting" },
        category: "Для детей",
    },
    { 
        id: 3, 
        title: "Выставка современного искусства", 
        description: "Откройте для себя работы талантливых местных художников на нашей новой выставке.", 
        date: "2024-09-20", 
        time: "10:00 - 21:00", 
        location: "Галерея 'Арт-Пространство', 2 этаж",
        image: { src: "/images/events/3.png", hint: "art gallery" },
        category: "Искусство",
    },
     { 
        id: 4, 
        title: "Фермерский рынок", 
        description: "Свежие и натуральные продукты от местных фермеров каждую субботу.", 
        date: "2024-09-21", 
        time: "10:00 - 16:00", 
        location: "Открытая площадка у входа А",
        image: { src: "/images/events/4.png", hint: "farmers market" },
        category: "Ярмарка",
    },
];


export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          События и мероприятия
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Будьте в курсе самых интересных событий, происходящих в «Галерее Навигатор».
        </p>
      </div>

      <div className="space-y-12">
        {eventsData.map((event) => (
          <Card key={event.id} className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
            <div className="relative md:col-span-1 h-64 md:h-full">
                 <Image src={event.image.src} alt={event.title} fill className="object-cover" data-ai-hint={event.image.hint} />
            </div>
            <div className="md:col-span-2">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                        <Badge variant="secondary">{event.category}</Badge>
                    </div>
                  <CardDescription className="pt-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={16}/>
                    <span>{new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                   <div className="flex items-center gap-2">
                    <Clock size={16}/>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16}/>
                    <span>{event.location}</span>
                  </div>
                </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
