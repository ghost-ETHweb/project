
import { shopsData, type Shop } from "@/lib/shops";
import { notFound } from "next/navigation";
import ShopDetailClient from "@/components/shop-detail-client";


export function generateStaticParams() {
  return shopsData.map((shop) => ({
    id: shop.id.toString(),
  }));
}

export default function ShopDetailPage({ params }: { params: { id:string } }) {
  const shop = shopsData.find((s) => s.id.toString() === params.id);

  if (!shop) {
    notFound();
  }

  return (
   <ShopDetailClient shop={shop} />
  );
}
