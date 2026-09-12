import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Delight Store",
    template: "%s · Delight Store",
  },
  description:
    "Delight Store sells quality bags in considered colors. Inspected twice, made to last, reserved in the atelier.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Script
          src="https://widget.zorachat.ai/zora-widget/universalWidget.js"
          strategy="lazyOnload"
          data-key="zc_live_4defd683f28446eea6cd1abf"
          data-api-base="https://api.zorachat.ai"
        />
      </body>
    </html>
  );
}
