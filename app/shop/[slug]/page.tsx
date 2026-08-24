import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import {
  formatPrice,
  getBagBySlug,
  getBags,
  getRelatedBags,
} from "@/lib/bags";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBags().map((bag) => ({ slug: bag.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bag = getBagBySlug(slug);
  if (!bag) return { title: "Bag" };
  return {
    title: bag.name,
    description: bag.tagline,
  };
}

export default async function BagDetailPage({ params }: Props) {
  const { slug } = await params;
  const bag = getBagBySlug(slug);

  if (!bag) notFound();

  const related = getRelatedBags(bag);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <p className="text-xs tracking-wide text-muted">
        <Link href="/shop" className="hover:text-accent">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/shop?category=${encodeURIComponent(bag.category)}`}
          className="hover:text-accent"
        >
          {bag.category}
        </Link>
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#efe8df]">
          <Image
            src={bag.image}
            alt={bag.name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:py-6">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-accent">
            {bag.color} · {bag.category}
          </p>
          <h1 className="mt-3 font-serif text-5xl tracking-tight">{bag.name}</h1>
          <p className="mt-4 text-2xl font-serif">{formatPrice(bag.price)}</p>
          <p className="mt-6 max-w-md text-base leading-7 text-muted">
            {bag.description}
          </p>

          <dl className="mt-10 space-y-4 border-t border-border pt-8 text-sm">
            <div className="grid grid-cols-[7rem_1fr] gap-4">
              <dt className="tracking-[0.12em] uppercase text-muted">
                Materials
              </dt>
              <dd>{bag.materials}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4">
              <dt className="tracking-[0.12em] uppercase text-muted">
                Size
              </dt>
              <dd>{bag.dimensions}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4">
              <dt className="tracking-[0.12em] uppercase text-muted">
                Strap
              </dt>
              <dd>{bag.strap}</dd>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-4">
              <dt className="tracking-[0.12em] uppercase text-muted">
                Color
              </dt>
              <dd>{bag.color}</dd>
            </div>
          </dl>

          <div className="mt-10 border border-border bg-card p-6">
            <p className="font-serif text-xl">Available in the atelier</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Helen Shop does not take payment online. Visit us Tuesday through
              Saturday to try the bag on the shoulder and take it home the
              same day.
            </p>
            <p className="mt-4 text-sm">18 Atelier Lane · 11–6</p>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="font-serif text-3xl tracking-tight">
            More in {bag.category}
          </h2>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} bag={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
