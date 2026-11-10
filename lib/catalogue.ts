import arrivages from "@/data/arrivages.json";
import prix from "@/data/prix.json";
import type { L10n } from "@/lib/locales";
import { addDays } from "@/lib/shop";

export const CATEGORIES = ["femme", "homme", "bijoux", "sacs", "vintage"] as const;
export type CategoryId = (typeof CATEGORIES)[number];
export type TileId = CategoryId | "petits-prix";

export type Piece = {
  id: string;
  ref: string;
  name: L10n;
  category: CategoryId;
  size: string;
  price: number | null;
  priceFrom: boolean;
  colors: string[];
  status: "dispo" | "reserve" | "vendu";
  photo: string | null;
  demo?: boolean;
};

export const pieces = arrivages.items as Piece[];
export const arrivalDate = arrivages.date;
export const petitsPrix = arrivages.petitsPrix;
export const pieceOf = (id: string) => pieces.find((p) => p.id === id);
export const hasDemo = pieces.some((p) => p.demo);
export const isPetitPrix = (p: Piece) => p.price != null && p.price <= petitsPrix;

/** Arrivage de moins de 7 jours (bandeau « Nouvel arrivage cette semaine »). */
export const isFreshArrival = (todayIso: string) => arrivalDate <= todayIso && addDays(arrivalDate, 7).iso > todayIso;

/** Tailles présentes dans les arrivages, dans un ordre lisible. */
const SIZE_ORDER = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
export function sizesOf(list: Piece[]) {
  const all = [...new Set(list.map((p) => p.size))];
  const rank = (s: string) => (SIZE_ORDER.includes(s) ? SIZE_ORDER.indexOf(s) : /^\d+$/.test(s) ? 100 + Number(s) : 1000);
  return all.sort((a, b) => rank(a) - rank(b));
}

export type PriceLine = { id: string; name: L10n; from: number | null; to: number | null };
export type PriceCategory = { id: CategoryId; items: PriceLine[] };
export const priceCategories = prix.categories as PriceCategory[];

/** Prix « à partir de » le plus bas d'une famille (null si rien n'est renseigné). */
export function fromPrice(id: TileId) {
  if (id === "petits-prix") return null;
  const list = (priceCategories.find((c) => c.id === id)?.items ?? []).map((s) => s.from).filter((p): p is number => p != null);
  return list.length ? Math.min(...list) : null;
}
