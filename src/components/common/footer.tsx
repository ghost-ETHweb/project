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
                Галерея Навигатор
              </span>
            </Link>
            <p className="text-sm">
              Лучшее место для шопинга, ужинов и развлечений. Откройте для себя мировые бренды и незабываемые моменты.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Навигация
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shops" className="text-sm hover:text-primary">Магазины</Link></li>
              <li><Link href="/map" className="text-sm hover:text-primary">Услуги</Link></li>
              <li><Link href="#promotions" className="text-sm hover:text-primary">Акции</Link></li>
              <li><Link href="#events" className="text-sm hover:text-primary">События</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Информация
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/partners" className="text-sm hover:text-primary">Для партнеров</Link></li>
              <li><Link href="/contacts" className="text-sm hover:text-primary">Контакты</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary">О нас</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Свяжитесь с нами
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Торговый проспект, 123, Коммерц-Сити, 12345</li>
              <li>Телефон: (123) 456-7890</li>
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
          <p>&copy; {new Date().getFullYear()} Галерея Навигатор. Все права защищены.</p>
          <p className="mt-1">
            <Link href="/privacy" className="hover:text-primary">Политика конфиденциальности</Link> | <Link href="/terms" className="hover:text-primary">Условия использования</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
