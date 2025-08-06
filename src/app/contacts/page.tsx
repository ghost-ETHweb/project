import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Свяжитесь с нами
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Есть вопросы о магазинах, услугах или мероприятиях? Мы готовы помочь.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <MapPin className="h-6 w-6 text-primary" />
                Наш адрес
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Торговый проспект, 123</p>
              <p>Коммерц-Сити, 12345</p>
              <p>Российская Федерация</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <Phone className="h-6 w-6 text-primary" />
                Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p><strong>Общие вопросы:</strong> (123) 456-7890</p>
              <p><strong>Аренда:</strong> (123) 456-7891</p>
              <p><strong>Email:</strong> <a href="mailto:info@gallerynavigator.com" className="text-primary hover:underline">info@gallerynavigator.com</a></p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <Clock className="h-6 w-6 text-primary" />
                Часы работы
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p><strong>Понедельник - Суббота:</strong> 10:00 - 21:00</p>
              <p><strong>Воскресенье:</strong> 11:00 - 19:00</p>
              <p>Часы работы могут меняться в праздничные дни.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-center font-headline text-2xl font-semibold mb-6">Как нас найти</h2>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A99432657d425b0784265d629a882a4773c3a44253018898380389335a939464e&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute inset-0"
                allowFullScreen
            ></iframe>
          </div>
        </div>
        
      </div>
    </div>
  )
}
