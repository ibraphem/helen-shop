import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import {
  getCategoryBags,
  getFeaturedBags,
} from "@/lib/bags";

export default function Home() {
  const featured = getFeaturedBags();
  const collections = getCategoryBags();

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-accent">
              Helen Shop
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              Bags with a life of their own.
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">
              A small atelier of leather and canvas, in colors that hold up in
              daylight. We choose hides slowly, stitch them once, and inspect
              every bag twice before it leaves the table.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex h-12 items-center bg-foreground px-6 text-xs tracking-[0.18em] uppercase text-background transition hover:bg-accent"
              >
                Shop the collection
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center border border-border px-6 text-xs tracking-[0.18em] uppercase transition hover:border-foreground"
              >
                How we work
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#efe8df] lg:aspect-[5/6]">
            <Image
              src="/bags/ivory-quilted-shoulder.jpg"
              alt="Cream quilted shoulder bag"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-muted">
              Browse by form
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight">
              The collections
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden text-xs tracking-[0.18em] uppercase text-accent sm:inline"
          >
            View all
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {collections.map(({ category, bag, description }) => (
            <Link
              key={category}
              href={`/shop?category=${encodeURIComponent(category)}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#efe8df]">
                <Image
                  src={bag.image}
                  alt={`${category} bags`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-4 font-serif text-2xl">{category}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] tracking-[0.22em] uppercase text-muted">
              Selected
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight">
              Bags we keep on the front table
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              A mix of colors and silhouettes — black for the city, green for
              walking, red when the day needs a pulse.
            </p>
          </div>
          <div className="mt-12">
            <ProductGrid bags={featured} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#efe8df]">
          <Image
            src="/bags/cognac-work-tote.jpg"
            alt="Brown leather work tote bag"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-muted">
            Quality, as we mean it
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight">
            A bag should outlast the season it was bought in.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Helen selects leather for how it will look in two years, not two
            weeks. Edges are painted by hand. Hardware is weight-tested.
            Nothing leaves the atelier until a second pair of eyes has opened
            it, closed it, and worn the strap.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex text-xs tracking-[0.18em] uppercase text-accent"
          >
            Read the atelier notes
          </Link>
        </div>
      </section>
    </div>
  );
}
