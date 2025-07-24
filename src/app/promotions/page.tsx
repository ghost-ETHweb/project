import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tag } from "lucide-react"

const promotionsData = [
    { id: 1, title: "Грандиозная летняя распродажа", description: "Скидки до 70% на ваши любимые бренды. Не пропустите!", shop: "Aura Fashion", category: "Одежда", endDate: "2024-08-31" },
    { id: 2, title: "Купи одну пару, получи вторую со скидкой 50%", description: "Обновите свою коллекцию обуви с выгодным предложением от Sole Mates.", shop: "Sole Mates", category: "Обувь", endDate: "2024-09-15" },
    { id: 3, title: "Подарок при покупке от 50$", description: "Получите эксклюзивный набор миниатюр при покупке в Glamour Zone.", shop: "Glamour Zone", category: "Красота", endDate: "2024-08-20" },
    { id: 4, title: "Скидка 15% для студентов", description: "Предъявите студенческий билет и получите скидку на всю новую коллекцию.", shop: "Vogue Apparel", category: "Одежда", endDate: "2024-09-30" },
    { id: 5, title: "Бесплатная чистка в подарок", description: "При покупке любых часов Zenith, получите сертификат на бесплатную чистку и полировку.", shop: "Zenith Watches", category: "Ювелирные изделия", endDate: "2024-10-01" },
];


export default function PromotionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Акции и спецпредложения
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Не упустите лучшие предложения от магазинов нашего торгового центра.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {promotionsData.map((promo) => (
          <Card key={promo.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 text-primary mb-2">
                <Tag size={20}/>
                <CardTitle className="font-headline text-xl">{promo.title}</CardTitle>
              </div>
              <CardDescription>{promo.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Магазин:</strong> {promo.shop}</p>
                <div className="flex items-center gap-2"><strong>Категория:</strong> <Badge variant="secondary">{promo.category}</Badge></div>
                <p><strong>Действует до:</strong> {new Date(promo.endDate).toLocaleDateString('ru-RU')}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
