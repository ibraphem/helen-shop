import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="text-[0.7rem] tracking-[0.22em] uppercase text-muted">
        404
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">
        This bag is not on the table.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-6 text-muted">
        The page you asked for is not in the shop. Return home, or browse the
        collection.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center bg-foreground px-5 text-xs tracking-[0.16em] uppercase text-background"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="inline-flex h-11 items-center border border-border px-5 text-xs tracking-[0.16em] uppercase"
        >
          Shop
        </Link>
      </div>
    </div>
  );
}
