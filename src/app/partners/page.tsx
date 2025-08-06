"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Download, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов." }),
  contactInfo: z.string().min(5, { message: "Пожалуйста, укажите действительные контактные данные." }),
  businessType: z.string().min(3, { message: "Тип бизнеса должен содержать не менее 3 символов." }),
  message: z.string().min(10, { message: "Сообщение должно содержать не менее 10 символов." }).max(500),
})

export default function PartnersPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactInfo: "",
      businessType: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Запрос отправлен!",
      description: "Спасибо за ваш интерес. Наш отдел аренды скоро свяжется с вами.",
    })
    form.reset()
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Станьте нашим партнером
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Присоединяйтесь к процветающей розничной экосистеме. Откройте для себя возможности аренды в «Галерее Навигатор» и обеспечьте успех вашему бренду.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="font-headline text-2xl font-semibold">Информация об аренде</h2>
            <p className="mt-4 text-muted-foreground">
              Мы предлагаем гибкие и конкурентоспособные условия аренды для различных торговых площадей, от поп-ап магазинов до флагманских бутиков. Наша команда поможет вам найти идеальное место для роста вашего бизнеса.
            </p>
            <Button className="mt-6">
              <Download className="mr-2 h-4 w-4" />
              Скачать брошюру (PDF)
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Building2 className="h-5 w-5"/>
                Отдел аренды
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p><strong>Email:</strong> leasing@gallerynav.com</p>
              <p><strong>Часы работы:</strong> Пн-Пт, 9:00 - 17:00</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Форма запроса на аренду</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Полное имя / Название компании</FormLabel>
                        <FormControl>
                          <Input placeholder="например, Иван Иванов или Aura Fashion" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Контактная информация (Email или телефон)</FormLabel>
                        <FormControl>
                          <Input placeholder="например, contact@aurafashion.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Тип бизнеса</FormLabel>
                        <FormControl>
                          <Input placeholder="например, Женская одежда, Кафе" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Сообщение</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Расскажите немного о вашем бизнесе и потребностях в аренде..." className="resize-y" {...field} />
                        </FormControl>
                        <FormDescription>
                          Кратко опишите ваш бренд и что вы ищете.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Отправить запрос</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
