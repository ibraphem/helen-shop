import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import {
  categories,
  getBags,
  getBagsByCategory,
  type Category,
} from "@/lib/bags";

export const metadata: Metadata = {
  title: "Shop",
  description: "The full Helen Shop collection of leather and canvas bags.",
};

function isCategory(value: string): value is Category {
  return (categories as readonly string[]).includes(value);
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.category)
    ? params.category[0]
    : params.category;
  const active = raw && isCategory(raw) ? raw : undefined;
  const bags = active ? getBagsByCategory(active) : getBags();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-[0.7rem] tracking-[0.22em] uppercase text-muted">
        The collection
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">Shop</h1>
      <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
        Twelve bags, each in its own color. Prices are listed; we do not take
        payment online — visit the atelier to take one home.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        <FilterLink href="/shop" active={!active}>
          All
        </FilterLink>
        {categories.map((category) => (
          <FilterLink
            key={category}
            href={`/shop?category=${encodeURIComponent(category)}`}
            active={active === category}
          >
            {category}
          </FilterLink>
        ))}
      </div>

      <p className="mt-8 text-xs tracking-wide text-muted">
        {bags.length} {bags.length === 1 ? "bag" : "bags"}
        {active ? ` in ${active}` : ""}
      </p>

      <div className="mt-8">
        <ProductGrid bags={bags} />
      </div>
    </div>
  );
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-9 items-center border px-4 text-xs tracking-[0.14em] uppercase transition ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border hover:border-foreground"
      }`}
    >
      {children}
    </Link>
  );
}
