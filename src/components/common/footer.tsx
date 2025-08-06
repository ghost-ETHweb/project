import Link from "next/link";
import { ShoppingBag, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-semibold text-primary">
                Галерея Навигатор
              </span>
            </Link>
            <p className="text-sm">
              Лучшее место для шопинга, ужинов и развлечений. Откройте для себя мировые бренды и незабываемые моменты.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Навигация
            </h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/shops" className="text-sm hover:text-primary">Магазины</Link></li>
              <li><Link href="/map" className="text-sm hover:text-primary">Карта ТЦ</Link></li>
              <li><Link href="/promotions" className="text-sm hover:text-primary">Акции</Link></li>
              <li><Link href="/events" className="text-sm hover:text-primary">События</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Информация
            </h3>
            <ul className="mt-4 space-y-2">
               <li><Link href="/about" className="text-sm hover:text-primary">О нас</Link></li>
              <li><Link href="/partners" className="text-sm hover:text-primary">Для партнеров</Link></li>
              <li><Link href="/contacts" className="text-sm hover:text-primary">Контакты</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
              Подпишитесь на рассылку
            </h3>
             <p className="mt-4 text-sm">Будьте в курсе последних новостей, акций и событий.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Ваш email" className="bg-background"/>
                <Button type="submit">Подписаться</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Галерея Навигатор. Все права защищены.</p>
          <div className="mt-4 space-y-2 text-sm">
              <p>ул. Карла Маркса, 50, г. Тихвин</p>
              <p>Телефон: <a href="tel:89990642355" className="hover:text-primary hover:underline">8-999-064-23-55</a> | Email: <a href="mailto:buh@timolo.ru" className="hover:text-primary hover:underline">buh@timolo.ru</a></p>
            </div>
        </div>
      </div>
    </footer>
  );
}
