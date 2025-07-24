import { ShopDirectory } from "@/components/shop-directory";

export default function ShopsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Shop Directory
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse our collection of stores. Filter by category or floor to find exactly what you're looking for.
        </p>
      </div>
      <ShopDirectory isPaginated={true} />
    </div>
  );
}
