import bagsData from "@/data/bags.json";

export type Bag = {
  id: string;
  slug: string;
  name: string;
  price: number;
  color: string;
  category: string;
  featured: boolean;
  tagline: string;
  description: string;
  materials: string;
  dimensions: string;
  strap: string;
  image: string;
};

export const bags = bagsData as Bag[];

export const categories = [
  "Totes",
  "Shoulder",
  "Crossbody",
  "Mini",
  "Travel",
] as const;

export type Category = (typeof categories)[number];

export const categoryCopy: Record<
  Category,
  { title: string; description: string }
> = {
  Totes: {
    title: "Totes",
    description: "Open, structured carry for workdays and markets.",
  },
  Shoulder: {
    title: "Shoulder",
    description: "Flap bags that move from desk to dinner.",
  },
  Crossbody: {
    title: "Crossbody",
    description: "Hands-free silhouettes for walking days.",
  },
  Mini: {
    title: "Mini",
    description: "Evening scale. Phone, cards, and nothing extra.",
  },
  Travel: {
    title: "Travel",
    description: "Weekenders and commuters built for longer days.",
  },
};

export function getCategoryBags(): {
  category: Category;
  bag: Bag;
  description: string;
}[] {
  return categories
    .map((category) => {
      const bag = bags.find((item) => item.category === category);
      if (!bag) return null;
      return {
        category,
        bag,
        description: categoryCopy[category].description,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);
}

export function getBags(): Bag[] {
  return bags;
}

export function getBagBySlug(slug: string): Bag | undefined {
  return bags.find((bag) => bag.slug === slug);
}

export function getFeaturedBags(): Bag[] {
  return bags.filter((bag) => bag.featured);
}

export function getBagsByCategory(category: string): Bag[] {
  return bags.filter((bag) => bag.category === category);
}

export function getRelatedBags(bag: Bag, limit = 3): Bag[] {
  return bags
    .filter((item) => item.slug !== bag.slug && item.category === bag.category)
    .slice(0, limit);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
