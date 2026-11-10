"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers";
import { fill } from "@/lib/i18n";
import type { Img } from "@/lib/media";
import { HangerIcon, SparkleIcon } from "@/components/icons";

/**
 * Fond du hero : carrousel de 5 photos au plus (fondu lent, points de navigation), ou, tant qu'aucune photo n'est là,
 * une vitrine dessinée : aplat prune, arche de vitrine au trait, cintre et étoiles. Jamais de fausse photo.
 */
export function HeroCarousel({ slides }: { slides: (Img & { alt: string })[] }) {
  const { d } = useLocale();
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (slides.length < 2 || reduce) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length, reduce, i]);

  if (!slides.length)
    return (
      <div className="slot tone-prune absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Arche de vitrine, au trait */}
        <svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMid meet" className="absolute inset-y-[8%] end-[4%] h-[84%] w-auto text-paper/25 max-lg:hidden" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M30 520V200C30 96 106 20 200 20s170 76 170 180v320" />
          <path d="M52 520V204c0-90 66-160 148-160s148 70 148 160v316" strokeDasharray="2 6" />
          <path d="M70 190h260" />
        </svg>
        <HangerIcon className="absolute end-[calc(4%+6.5rem)] top-[30%] size-48 text-paper/45 max-lg:start-1/2 max-lg:-translate-x-1/2 max-lg:end-auto max-lg:top-[6%] max-lg:size-24 lg:end-[calc(4%+8rem)] xl:size-56" strokeWidth={0.9} />
        <SparkleIcon className="absolute end-[calc(4%+5rem)] top-[24%] size-7 text-mustard max-lg:hidden" strokeWidth={1} />
        <SparkleIcon className="absolute end-[calc(4%+20rem)] top-[62%] size-4 text-rose max-lg:hidden" strokeWidth={1} />
        <span className="absolute end-[calc(4%+2rem)] bottom-8 text-[0.6875rem] tracking-[0.24em] text-paper/60 uppercase max-lg:hidden">{d.hero.slot}</span>
      </div>
    );

  const s = slides[i];
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink" role="region" aria-roledescription="carousel" aria-label={d.hero.slides}>
      <AnimatePresence initial={false}>
        <motion.div key={s.src} className="absolute inset-0" initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 1.4, ease: [0.22, 0.61, 0.36, 1] }}>
          <Image src={s.src} width={s.width} height={s.height} alt={s.alt} sizes="100vw" priority={i === 0} quality={80} className="size-full object-cover" />
        </motion.div>
      </AnimatePresence>
      {/* Voile prune en bas, pour la lisibilité du titre */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(58_34_48/0.78),rgb(58_34_48/0.15)_60%,transparent)]" />
      {slides.length > 1 && (
        <div className="absolute end-5 bottom-6 z-10 flex gap-1 sm:end-8 lg:end-10">
          {slides.map((x, n) => (
            <button key={x.src} type="button" onClick={() => setI(n)} aria-label={fill(d.hero.slide, { n: n + 1, total: slides.length })} aria-current={n === i} className="grid size-8 place-items-center">
              <span className={`block h-px transition-all duration-500 ${n === i ? "w-6 bg-paper" : "w-3 bg-paper/50"}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
