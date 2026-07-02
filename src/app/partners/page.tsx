import type { Metadata } from "next"
import { Building2, Clock3, Phone, Users } from "lucide-react"

import { PartnerInquiryForm } from "@/components/partner-inquiry-form"

export const metadata: Metadata = {
  title: "Арендаторам",
  description:
    "Информация для арендаторов и партнёров торгового центра «Галерея» в Тихвине.",
}

const advantages = [
  {
    icon: Building2,
    title: "Центральное расположение",
    description:
      "Понятная городская локация по адресу ул. Карла Маркса, 50.",
  },
  {
    icon: Users,
    title: "Ежедневный поток",
    description:
      "Магазины, услуги и кафе формируют устойчивый трафик посетителей.",
  },
]

export default function PartnersPage() {
  const formConfigured = Boolean(process.env.PARTNER_FORM_WEBHOOK_URL)

  return (
    <div>
      <section className="border-b bg-secondary/60">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Арендаторам
            </p>
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Откройте своё пространство в «Галерее»
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Расскажите о своём бизнесе и требованиях к помещению. После
              подключения канала доставки запросы из формы будут поступать
              администрации напрямую.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-5">
            {advantages.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl border bg-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 font-headline text-xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}

            <div className="rounded-2xl border bg-secondary/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Отдел аренды
              </p>
              <a
                href="tel:89990642355"
                className="mt-4 flex items-center gap-3 font-headline text-xl font-semibold transition hover:text-accent"
              >
                <Phone className="h-5 w-5 text-accent" />
                8 999 064-23-55
              </a>
              <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <Clock3 className="h-5 w-5 text-accent" />
                Ежедневно, 10:00–21:00
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Заявка
              </p>
              <h2 className="mt-3 font-headline text-3xl font-semibold">
                Форма запроса на аренду
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Заполните поля — это займёт около двух минут.
              </p>
            </div>
            <PartnerInquiryForm configured={formConfigured} />
          </div>
        </div>
      </section>
    </div>
  )
}
