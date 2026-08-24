import { ProductCard } from "@/components/product-card";
import type { Bag } from "@/lib/bags";

export function ProductGrid({ bags }: { bags: Bag[] }) {
  if (bags.length === 0) {
    return (
      <p className="py-16 text-center text-muted">
        No bags in this collection yet.
      </p>
    );
  }

  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {bags.map((bag) => (
        <ProductCard key={bag.id} bag={bag} />
      ))}
    </div>
  );
}
