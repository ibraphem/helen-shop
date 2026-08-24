import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Helen Shop chooses leather, stitches bags, and inspects every piece twice.",
};

const practices = [
  {
    title: "The hide comes first",
    body: "We buy leather by the touch, not the catalog. Vegetable-tanned cowhide for totes that will take a commute. Nappa for minis that sit against a dress. Canvas only when it is heavy enough to stand in for leather on a market day. If a hide is too noisy — too much scar, too much stretch — it does not enter the cutting room.",
  },
  {
    title: "Stitched once, properly",
    body: "Helen’s rule is simple: a bag is not a draft. Seams are locked, edges are painted in thin coats, and hardware is seated so it will not rattle after a year of keys. We would rather make twelve bags well than forty bags quickly.",
  },
  {
    title: "Inspected twice",
    body: "Every bag is opened, filled, emptied, and worn on the shoulder by two people before it is tagged. Stitch skips, dye bloom, a clasp that does not sit flush — those bags go back to the bench. What reaches the front table is what we would carry ourselves.",
  },
  {
    title: "Color with a reason",
    body: "Black for the city. Cognac because it ages in public. Sage and sand for daylight. Crimson and bordeaux when a bag should be the loudest thing in the room. We dye in small lots so the color belongs to the hide, not a print on top of it.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase text-accent">
            About us
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl">
            Helen Shop is a bag atelier with a short list and a long memory.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Founded by Helen Adeyemi after a decade in leather restoration, the
            shop exists to sell bags that survive real use. We are not a
            marketplace. We are a room, a cutting table, and a window that
            faces the street.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#efe8df]">
          <Image
            src="/bags/espresso-satchel.jpg"
            alt="Espresso leather satchel"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl tracking-tight">
            Why quality, for us, is a habit.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Helen spent years repairing bags that had failed at the hinge, the
            strap, or the dye. The shop is the answer to those repairs: fewer
            pieces, heavier thread, hardware that is meant to be opened every
            day. A Helen Shop bag is priced for the work inside it, not for a
            logo on the flap.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            We do not take payment online. You come in, you try the strap, you
            decide. If a bag is not right, we will say so.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-serif text-4xl tracking-tight">
            How each bag is treated
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {practices.map((practice) => (
              <article key={practice.title}>
                <h3 className="font-serif text-2xl">{practice.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {practice.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl tracking-tight">Visit the shop</h2>
          <p className="mt-4 text-base leading-7 text-muted">
            18 Atelier Lane, Tuesday to Saturday, eleven until six. Bring the
            bag you already own if you want an honest opinion about whether it
            can be restored — Helen still keeps a small repair bench in the
            back.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex h-12 items-center bg-foreground px-6 text-xs tracking-[0.18em] uppercase text-background transition hover:bg-accent"
          >
            See the bags
          </Link>
        </div>
      </section>
    </div>
  );
}
