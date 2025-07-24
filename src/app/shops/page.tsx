import { ShopDirectory } from "@/components/shop-directory";

export default function ShopsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Справочник магазинов
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Просмотрите нашу коллекцию магазинов. Фильтруйте по категории или этажу, чтобы найти именно то, что вы ищете.
        </p>
      </div>
      <ShopDirectory isPaginated={true} />
    </div>
  );
}
