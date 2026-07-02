"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

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

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Укажите имя или название компании.")
    .max(120, "Слишком длинное значение."),
  contactInfo: z
    .string()
    .trim()
    .min(5, "Укажите email или телефон.")
    .max(160, "Слишком длинное значение."),
  businessType: z
    .string()
    .trim()
    .min(2, "Укажите тип бизнеса.")
    .max(120, "Слишком длинное значение."),
  message: z
    .string()
    .trim()
    .min(10, "Расскажите немного подробнее.")
    .max(1000, "Сообщение не должно превышать 1000 символов."),
  website: z.string().max(0).optional(),
})

type InquiryValues = z.infer<typeof inquirySchema>

export function PartnerInquiryForm({
  configured,
}: {
  configured: boolean
}) {
  const [submitError, setSubmitError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      contactInfo: "",
      businessType: "",
      message: "",
      website: "",
    },
  })

  const onSubmit = async (values: InquiryValues) => {
    setSubmitError("")
    setSubmitted(false)

    try {
      const response = await fetch("/api/partner-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Не удалось отправить запрос.")
      }

      form.reset()
      setSubmitted(true)
    } catch {
      setSubmitError(
        "Запрос не отправлен. Попробуйте позже или свяжитесь с администрацией по телефону."
      )
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Полное имя / Название компании</FormLabel>
              <FormControl>
                <Input
                  autoComplete="organization"
                  placeholder="Например, Иван Иванов или название бренда"
                  {...field}
                />
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
              <FormLabel>Контактная информация</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  placeholder="Email или номер телефона"
                  {...field}
                />
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
                <Input
                  placeholder="Например, одежда, услуги или кафе"
                  {...field}
                />
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
                <Textarea
                  placeholder="Расскажите о бренде и требованиях к помещению"
                  className="min-h-32 resize-y"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Кратко опишите формат, желаемую площадь и сроки.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="hidden" aria-hidden="true">
              <FormLabel>Сайт</FormLabel>
              <FormControl>
                <Input tabIndex={-1} autoComplete="off" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {submitted && (
          <p className="rounded-xl bg-secondary px-4 py-3 text-sm text-foreground">
            Запрос отправлен. Администрация свяжется с вами по указанным
            контактам.
          </p>
        )}

        {submitError && (
          <p className="text-sm text-destructive" role="alert">
            {submitError}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={!configured || form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          Отправить запрос
        </Button>

        {!configured && (
          <p className="text-center text-xs leading-5 text-muted-foreground">
            Форма готова. Отправка станет доступна после подключения почты,
            Telegram или другого канала.
          </p>
        )}
      </form>
    </Form>
  )
}
