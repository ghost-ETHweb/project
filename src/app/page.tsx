import HeroSlider from "@/components/hero-slider";
import { ShopDirectory } from "@/components/shop-directory";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <section id="shops" className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Discover Our Stores
        </h2>
        <ShopDirectory isPaginated={false} />
      </section>
    </div>
  );
}
