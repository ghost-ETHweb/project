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
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  contactInfo: z.string().min(5, { message: "Please provide valid contact info." }),
  businessType: z.string().min(3, { message: "Business type must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500),
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
      title: "Inquiry Sent!",
      description: "Thank you for your interest. Our leasing team will be in touch shortly.",
    })
    form.reset()
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Partner With Us
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Join a thriving retail ecosystem. Discover leasing opportunities at Gallery Navigator and position your brand for success.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="font-headline text-2xl font-semibold">Leasing Information</h2>
            <p className="mt-4 text-muted-foreground">
              We offer flexible and competitive lease terms for a variety of retail spaces, from pop-up shops to flagship stores. Our team is dedicated to helping you find the perfect location to grow your business.
            </p>
            <Button className="mt-6">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure (PDF)
            </Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Building2 className="h-5 w-5"/>
                Leasing Department
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p><strong>Phone:</strong> (123) 456-7891</p>
              <p><strong>Email:</strong> leasing@gallerynav.com</p>
              <p><strong>Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Leasing Inquiry Form</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name / Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., John Doe or Aura Fashion" {...field} />
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
                        <FormLabel>Contact Info (Email or Phone)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., contact@aurafashion.com" {...field} />
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
                        <FormLabel>Type of Business</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Women's Apparel, Cafe" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us a bit about your business and leasing needs..." className="resize-y" {...field} />
                        </FormControl>
                        <FormDescription>
                          Briefly describe your brand and what you're looking for.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Submit Inquiry</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
