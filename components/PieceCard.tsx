import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import sizes from "@/data/media-sizes.json";
import { fill, type Dict, type Locale } from "@/lib/i18n";
import { money } from "@/lib/shop";
import { href } from "@/lib/routes";
import type { CategoryId, Piece } from "@/lib/catalogue";
import type { Tone } from "@/components/Blocks";
import { BagIcon, DressIcon, MirrorIcon, RingIcon, ShirtIcon } from "@/components/icons";

export const CAT_ICON: Record<CategoryId, (c: string) => ReactNode> = {
  femme: (c) => <DressIcon className={c} />,
  homme: (c) => <ShirtIcon className={c} />,
  bijoux: (c) => <RingIcon className={c} />,
  sacs: (c) => <BagIcon className={c} />,
  vintage: (c) => <MirrorIcon className={c} />,
};
export const CAT_TONE: Record<CategoryId, Tone> = { femme: "rose", homme: "sage", bijoux: "mustard", sacs: "cream", vintage: "rose" };

export function priceLabel(p: Piece, lang: Locale, d: Dict) {
  if (p.price == null) return d.arrivals.inShop;
  return p.priceFrom ? fill(d.arrivals.from, { price: money(p.price, lang) }) : money(p.price, lang);
}

/**
 * Carte d'une pièce (inspirée des cartes produits à pastilles) : photo ou emplacement dessiné,
 * étiquette de prix, catégorie et taille, pastilles de couleur, bouton de réservation (formulaire pré-rempli → WhatsApp).
 */
export function PieceCard({ p, lang, d, priority = false }: { p: Piece; lang: Locale; d: Dict; priority?: boolean }) {
  const a = d.arrivals;
  const gone = p.status === "vendu";
  const size = p.size === "Unique" ? a.unique : `${a.size} ${p.size}`;
  const photo = p.photo ? (sizes as Record<string, number[]>)[p.photo] : null;
  return (
    <article className={`group flex h-full flex-col ${gone ? "opacity-60" : ""}`}>
      <div className="relative">
        {p.photo && photo ? (
          <div className="shine aspect-[4/5] overflow-hidden bg-cream-deep">
            <Image src={p.photo} width={photo[0]} height={photo[1]} alt={`${p.name[lang]}, ${a.categories[p.category].toLowerCase()}`} sizes="(min-width:1024px) 23vw, (min-width:640px) 45vw, 92vw" priority={priority} quality={80} className="size-full object-cover" />
          </div>
        ) : (
          <div className={`slot tone-${CAT_TONE[p.category]} grid aspect-[4/5] place-items-center`} aria-hidden="true">
            <div className="flex flex-col items-center gap-3 opacity-90">
              {CAT_ICON[p.category]("size-16 sm:size-20")}
              <span className="text-[0.6875rem] tracking-[0.22em] uppercase opacity-75">{a.photoSoon}</span>
            </div>
          </div>
        )}
        <span className="price-tag absolute start-3 bottom-3 tabular-nums">{priceLabel(p, lang, d)}</span>
        {p.status !== "dispo" && <span className="absolute end-3 top-3 bg-ink px-2.5 py-1 text-[0.6875rem] tracking-[0.16em] text-paper uppercase">{a.status[p.status]}</span>}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-[0.75rem] tracking-[0.14em] text-muted uppercase">
        <span>
          {a.categories[p.category]} · {size}
        </span>
        <span className="flex items-center gap-1.5" aria-label={a.colors}>
          {p.colors.map((c) => (
            <span key={c} className="swatch" style={{ backgroundColor: c }} />
          ))}
        </span>
      </div>
      <h3 className="display mt-2 flex-1 text-[1.35rem]">{p.name[lang]}</h3>
      <p className="mt-1 text-[0.8125rem] text-muted">
        {a.ref} {p.ref}
      </p>
      {!gone && (
        <Link href={`${href(lang, "reserver")}?piece=${p.id}`} className="btn-line mt-4 !min-h-11 !px-4 text-ink" aria-label={`${a.reserve} : ${p.name[lang]}`}>
          {a.reserve}
        </Link>
      )}
    </article>
  );
}
