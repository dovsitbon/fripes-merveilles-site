"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/components/providers";
import { PieceCard } from "@/components/PieceCard";
import { WhatsAppIcon } from "@/components/icons";
import { fill } from "@/lib/i18n";
import { CATEGORIES, petitsPrix, pieces, sizesOf, type CategoryId, type Piece } from "@/lib/catalogue";
import { waLink } from "@/lib/whatsapp";

const MID = 30;
const PRICES = ["all", "petits", "mid", "high"] as const;
type PriceId = (typeof PRICES)[number];

const inRange = (p: Piece, r: PriceId) => {
  if (r === "all") return true;
  if (p.price == null) return false;
  if (r === "petits") return p.price <= petitsPrix;
  if (r === "mid") return p.price > petitsPrix && p.price <= MID;
  return p.price > MID;
};

/** Grille des arrivages avec filtres par catégorie, taille et prix (inspirés des filtres d'une boutique de fleurs en ligne). */
export function ArrivalsBrowser() {
  const { lang, d } = useLocale();
  const a = d.arrivals;
  const f = a.filters;
  const reduce = useReducedMotion();
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [size, setSize] = useState("all");
  const [price, setPrice] = useState<PriceId>("all");

  // Filtre initial depuis l'adresse (tuiles de l'accueil : ?cat=bijoux, ?prix=petits)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const c = q.get("cat");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture de l'URL après hydratation
    if (c && (CATEGORIES as readonly string[]).includes(c)) setCat(c as CategoryId);
    if (q.get("prix") === "petits") setPrice("petits");
  }, []);

  const byCat = useMemo(() => pieces.filter((p) => cat === "all" || p.category === cat), [cat]);
  const sizes = useMemo(() => sizesOf(byCat), [byCat]);
  const list = byCat.filter((p) => (size === "all" || p.size === size) && inRange(p, price));
  const sizeLabel = (s: string) => (s === "Unique" ? a.unique : s);
  const priceLabel = (r: PriceId) => (r === "all" ? f.prices.all : r === "petits" ? fill(f.prices.petits, { n: petitsPrix }) : r === "mid" ? fill(f.prices.mid, { a: petitsPrix, b: MID }) : fill(f.prices.high, { n: MID }));
  const dirty = cat !== "all" || size !== "all" || price !== "all";

  const group = (name: string, legend: string, options: { v: string; label: string }[], value: string, set: (v: string) => void) => (
    <fieldset className="min-w-0">
      <legend className="eyebrow mb-3">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o.v} data-on={value === o.v} className="chip !min-h-10 !px-3.5 !text-[0.875rem]">
            <input type="radio" name={name} value={o.v} checked={value === o.v} onChange={() => set(o.v)} className="sr-only" />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );

  return (
    <div>
      <div className="grid gap-6 border-y border-line py-6 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1.2fr_auto] xl:items-end xl:gap-8">
        {group(
          "cat",
          f.category,
          [{ v: "all", label: f.all }, ...CATEGORIES.map((c) => ({ v: c, label: a.categories[c] }))],
          cat,
          (v) => {
            setCat(v as CategoryId | "all");
            setSize("all");
          },
        )}
        {group("size", f.size, [{ v: "all", label: f.all }, ...sizes.map((s) => ({ v: s, label: sizeLabel(s) }))], size, setSize)}
        {group(
          "price",
          f.price,
          PRICES.map((r) => ({ v: r, label: priceLabel(r) })),
          price,
          (v) => setPrice(v as PriceId),
        )}
        <div className="flex items-center gap-5 text-[0.875rem] xl:pb-2.5">
          <span className="text-muted tabular-nums" aria-live="polite">
            {fill(f.results, { n: list.length })}
          </span>
          {dirty && (
            <button
              type="button"
              className="link-line"
              onClick={() => {
                setCat("all");
                setSize("all");
                setPrice("all");
              }}
            >
              {f.reset}
            </button>
          )}
        </div>
      </div>

      {list.length ? (
        <motion.ul layout={!reduce} className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((p) => (
              <motion.li key={p.id} layout={!reduce} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 0.61, 0.36, 1] }}>
                <PieceCard p={p} lang={lang} d={d} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="mt-10 max-w-xl border border-dashed border-line p-8">
          <p className="lead">{f.none}</p>
          <a href={waLink(lang === "fr" ? "Bonjour, je cherche : " : "Hello, I'm looking for: ")} target="_blank" rel="noopener" className="btn-line mt-6 text-ink">
            <WhatsAppIcon /> {f.ask}
          </a>
        </div>
      )}
    </div>
  );
}
