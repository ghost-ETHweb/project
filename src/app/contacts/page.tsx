import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-24">
        <div className="text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Whether you have a question about our stores, services, or events, feel free to reach out.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <MapPin className="h-6 w-6 text-primary" />
                Our Address
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>123 Shopping Ave</p>
              <p>Commerce City, 12345</p>
              <p>United States</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <Phone className="h-6 w-6 text-primary" />
                Contact Info
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p><strong>General Inquiries:</strong> (123) 456-7890</p>
              <p><strong>Leasing:</strong> (123) 456-7891</p>
              <p><strong>Email:</strong> <a href="mailto:info@gallerynav.com" className="text-primary hover:underline">info@gallerynav.com</a></p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline">
                <Clock className="h-6 w-6 text-primary" />
                Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p><strong>Monday - Saturday:</strong> 10:00 AM - 9:00 PM</p>
              <p><strong>Sunday:</strong> 11:00 AM - 7:00 PM</p>
              <p>Hours may vary for holidays and specific stores.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 rounded-lg overflow-hidden border">
            <div className="aspect-video bg-muted flex items-center justify-center">
                 <p className="text-muted-foreground text-center p-4">
                    Map integration placeholder. <br/> A fully interactive map (e.g., Google Maps) would be displayed here.
                 </p>
            </div>
        </div>

      </div>
    </div>
  )
}
