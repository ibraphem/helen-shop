import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Bag } from "@/lib/bags";

export function ProductCard({ bag }: { bag: Bag }) {
  return (
    <article>
      <Link href={`/shop/${bag.slug}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#efe8df]">
          <Image
            src={bag.image}
            alt={bag.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl leading-tight tracking-tight">
              {bag.name}
            </h3>
            <p className="mt-1 text-xs tracking-[0.16em] uppercase text-muted">
              {bag.color} · {bag.category}
            </p>
          </div>
          <p className="text-sm">{formatPrice(bag.price)}</p>
        </div>
      </Link>
    </article>
  );
}
