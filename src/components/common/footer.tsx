import Link from "next/link";
import { ShoppingBag, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-semibold text-primary">
                Gallery Navigator
              </span>
            </Link>
            <p className="text-sm">
              The premier destination for shopping, dining, and entertainment. Experience world-class brands and unforgettable moments.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shops" className="text-sm hover:text-primary">Shops</Link></li>
              <li><Link href="/map" className="text-sm hover:text-primary">Services</Link></li>
              <li><Link href="#promotions" className="text-sm hover:text-primary">Promotions</Link></li>
              <li><Link href="#events" className="text-sm hover:text-primary">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Information
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/partners" className="text-sm hover:text-primary">For Partners</Link></li>
              <li><Link href="/contacts" className="text-sm hover:text-primary">Contacts</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>123 Shopping Ave, Commerce City, 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@gallerynav.com</li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gallery Navigator. All Rights Reserved.</p>
          <p className="mt-1">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link> | <Link href="/terms" className="hover:text-primary">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
