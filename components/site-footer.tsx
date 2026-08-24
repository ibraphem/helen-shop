import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <div>
          <p className="font-serif text-2xl">Helen Shop</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            Quality bags, inspected twice, sold in person. A small atelier for
            leather that is meant to last.
          </p>
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-muted">
            Visit
          </p>
          <p className="mt-3 text-sm leading-6">
            18 Atelier Lane
            <br />
            Tuesday–Saturday, 11–6
            <br />
            hello@helenshop.example
          </p>
        </div>
        <div>
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-muted">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/shop" className="hover:text-accent">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                About & quality
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs tracking-wide text-muted sm:px-8">
          Helen Shop — bags made to be used, not merely displayed.
        </p>
      </div>
    </footer>
  );
}
