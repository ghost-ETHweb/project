
import HeroSlider from "@/components/hero-slider";
import { ShopDirectory } from "@/components/shop-directory";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ArrowRight, Briefcase, Tag } from "lucide-react"

const featuredEvents = [
    { 
        id: 1, 
        title: "Открытие нового магазина", 
        description: "Откройте для себя последние тренды в новом флагмане Aura.", 
        date: "2024-09-01", 
        location: "Aura Fashion, 1 этаж",
        image: { src: "/images/pages/featured-event-1.png", hint: "luxury store opening" },
        category: "Магазины",
    },
    { 
        id: 2, 
        title: "Мастер-класс по рисованию", 
        description: "Приводите своих детей на увлекательный мастер-класс.", 
        date: "2024-09-14", 
        location: "Детская зона",
        image: { src: "/images/pages/featured-event-2.png", hint: "kids painting" },
        category: "Для детей",
    },
];

const featuredPromotions = [
    { id: 1, title: "Грандиозная летняя распродажа", description: "Скидки до 70% на ваши любимые бренды.", shop: "Aura Fashion" },
    { id: 2, title: "Купи одну, получи вторую со скидкой 50%", description: "Обновите свою коллекцию обуви.", shop: "Sole Mates" },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      
      <section id="about" className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                    src="/images/slider/1.jpg"
                    alt="Интерьер торгового центра"
                    fill
                    className="object-cover"
                    data-ai-hint="mall interior"
                />
            </div>
            <div className="text-center md:text-left">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Добро пожаловать в «Галерею Навигатор»
                </h2>
                <p className="mt-4 max-w-xl mx-auto md:mx-0 text-muted-foreground">
                    Ваше премиальное место для шопинга, встреч и незабываемых впечатлений в самом сердце города.
                </p>
                <Button asChild className="mt-6">
                    <Link href="/about">Узнать больше <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </div>
      </section>
      
      <section id="shops" className="bg-secondary px-4 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto">
            <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Откройте для себя наши магазины
            </h2>
            <ShopDirectory isPaginated={false} />
             <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/shops">Смотреть все магазины <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </div>
      </section>

      <section id="events" className="px-4 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="mb-4 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Ближайшие события
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Не пропустите самые интересные мероприятия в нашем ТЦ.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {featuredEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image src={event.image.src} alt={event.title} fill className="object-cover" data-ai-hint={event.image.hint} />
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                                <Badge variant="secondary">{event.category}</Badge>
                            </div>
                        <CardDescription className="pt-1 !mt-0">{event.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                        <div className="flex items-center gap-2">
                            <Calendar size={16}/>
                            <span>{new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</span>
                        </div>
                            <div className="flex items-center gap-2">
                            <MapPin size={16}/>
                            <span>{event.location}</span>
                        </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center">
                <Button asChild size="lg" variant="outline">
                    <Link href="/events">Смотреть все события <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </div>
      </section>
      
      <section id="promotions" className="bg-secondary px-4 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <h2 className="mb-4 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Акции и предложения
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Воспользуйтесь эксклюзивными скидками и специальными предложениями.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {featuredPromotions.map((promo) => (
                    <Card key={promo.id}>
                        <CardHeader>
                          <div className="flex items-start gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0 mt-1">
                                <Tag size={20} />
                              </div>
                              <div>
                                <CardTitle className="font-headline text-xl">{promo.title}</CardTitle>
                                <CardDescription className="pt-1 !mt-0">{promo.description}</CardDescription>
                              </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground"><strong>Магазин:</strong> {promo.shop}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center">
                <Button asChild size="lg" variant="outline">
                    <Link href="/promotions">Смотреть все акции <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </div>
      </section>

      <section id="partners" className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto text-center">
            <Briefcase className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 mb-4 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Станьте нашим партнером
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Присоединяйтесь к нам и развивайте свой бизнес. Мы предлагаем выгодные условия аренды и высокий трафик посетителей.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/partners">Заполнить форму <ArrowRight className="ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
