"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { BODY, HOOK, STAR } from "@/components/Logo";

const KEY = "fripes-merveilles-intro";
const at = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

/**
 * Ouverture (1,2 s, une fois par session), tout en CSS (globals.css) :
 * fond crème, un cintre se dessine au trait prune, une petite étoile scintille au bout du crochet,
 * « FRIPES MERVEILLES » apparaît, puis fondu sur le hero.
 * Ignorée si l'utilisateur préfère réduire les animations (script en tête du layout).
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center text-ink">
      <svg viewBox="0 0 56 44" className="h-20 w-auto overflow-visible" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <g transform="translate(4 4)" stroke="var(--color-ink)" strokeWidth="1.5">
          <path className="intro-draw" pathLength={1} d={HOOK} style={at(0.04)} />
          <path className="intro-draw" pathLength={1} d={BODY} style={at(0.16)} />
        </g>
        <path className="intro-star" d={STAR} transform="translate(39 6)" fill="var(--color-mustard)" />
      </svg>
      <p className="intro-fade mt-6 ps-[0.14em] font-[family-name:var(--font-fraunces)] text-[1.6rem] leading-none font-medium tracking-[0.14em] sm:text-[2rem]" style={at(0.6)} translate="no" aria-hidden="true">
        FRIPES MERVEILLES
      </p>
      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="nav-link absolute right-4 bottom-4 min-h-11 px-4 text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
