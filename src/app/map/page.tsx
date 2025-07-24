import { InteractiveMallMap } from "@/components/interactive-map";
import { Suspense } from "react";

function MapPageContent() {
  return <InteractiveMallMap />;
}

export default function MapPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <MapPageContent />
    </Suspense>
  )
}
