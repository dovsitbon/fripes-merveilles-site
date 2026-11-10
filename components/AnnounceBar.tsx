"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers";
import { CloseIcon, SparkleIcon } from "@/components/icons";
import { activeAnnouncement, parisNow, type Annonce } from "@/lib/shop";
import { arrivalDate, isFreshArrival } from "@/lib/catalogue";
import { href, type PageId } from "@/lib/routes";

const KEY = "fripes-merveilles-annonce";

/** Bandeau d'infos pratiques qu'on peut fermer : fermeture datée (annonces.json), sinon « Nouvel arrivage » (arrivages.json), sinon les horaires. */
export function AnnounceBar() {
  const { lang, d } = useLocale();
  const [a, setA] = useState<Annonce | null>(null);

  useEffect(() => {
    const today = parisNow().iso;
    const next = activeAnnouncement(today, isFreshArrival(today) ? arrivalDate : null);
    let closed = false;
    try {
      closed = localStorage.getItem(KEY) === next.id;
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage, lisible seulement après hydratation
    setA(closed ? null : next);
  }, []);

  if (!a) return null;

  const close = () => {
    try {
      localStorage.setItem(KEY, a.id);
    } catch {}
    setA(null);
  };

  const to = href(lang, a.page as PageId | "home", a.hash ?? "") + (a.query ?? "");

  return (
    <div className="fade-in relative bg-ink text-paper">
      <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-12 py-2.5 text-center text-[0.8125rem] leading-snug">
        <SparkleIcon className="hidden size-3.5 shrink-0 text-mustard sm:block" />
        <span>
          {a.text[lang]}{" "}
          <Link href={to} className="link-line ms-1 whitespace-nowrap">
            {a.link[lang]}
          </Link>
        </span>
      </p>
      <button type="button" onClick={close} aria-label={d.announce.close} className="absolute end-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center opacity-80 hover:opacity-100">
        <CloseIcon />
      </button>
    </div>
  );
}
