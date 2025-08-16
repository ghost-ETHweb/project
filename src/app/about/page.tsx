
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            О «Галерее Навигатор»
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Откройте для себя историю и миссию нашего торгового центра — центра шоппинга, развлечений и встреч в самом сердце города.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                    src="/images/pages/about/1.jpg"
                    alt="Интерьер торгового центра"
                    fill
                    className="object-cover"
                    data-ai-hint="mall interior"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="font-headline text-2xl font-semibold">Наша история</h2>
                <p className="mt-4 text-muted-foreground">
                    «Галерея Навигатор» открыла свои двери в 2010 году с целью создать уникальное пространство, где каждый посетитель сможет найти что-то для себя. С тех пор мы постоянно развиваемся, предлагая лучшие бренды, качественные услуги и незабываемые впечатления. Мы гордимся тем, что стали неотъемлемой частью жизни города.
                </p>
            </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center font-headline text-2xl font-semibold mb-10">Наши ценности</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Building className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">Совершенство</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Мы стремимся к высочайшим стандартам во всем, от архитектуры до обслуживания клиентов.
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">Сообщество</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Мы создаем гостеприимную атмосферу, где люди могут встречаться, общаться и проводить время вместе.
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline">Инновации</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Мы постоянно ищем новые способы удивить и порадовать наших посетителей, внедряя современные технологии и идеи.
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  )
}
