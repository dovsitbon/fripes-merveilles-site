import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import site from "@/data/site.json";
import avis from "@/data/avis.json";
import { fill, getDict, isLocale, type Dict, type Locale } from "@/lib/i18n";
import { heroSlides, img, slot, tileSlot } from "@/lib/media";
import { href } from "@/lib/routes";
import { arrivalDate, fromPrice, hasDemo, pieces, type TileId } from "@/lib/catalogue";
import { money } from "@/lib/shop";
import { intlLocale } from "@/lib/locales";
import { faqJsonLd } from "@/lib/jsonld";
import { alt, Faq, InfosBlock, Rating, SectionHead, Slot, type Tone } from "@/components/Blocks";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PieceCard } from "@/components/PieceCard";
import { OpenStatus } from "@/components/OpenStatus";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, BagIcon, ChatIcon, DressIcon, HangerIcon, MirrorIcon, RailIcon, RingIcon, ShirtIcon, SparkleIcon, TagIcon, Thread } from "@/components/icons";

const TILES: { id: TileId; tone: Tone; icon: ReactNode; query: string }[] = [
  { id: "femme", tone: "rose", icon: <DressIcon className="size-16 sm:size-20" />, query: "?cat=femme" },
  { id: "homme", tone: "sage", icon: <ShirtIcon className="size-16 sm:size-20" />, query: "?cat=homme" },
  { id: "bijoux", tone: "mustard", icon: <RingIcon className="size-16 sm:size-20" />, query: "?cat=bijoux" },
  { id: "sacs", tone: "prune", icon: <BagIcon className="size-16 sm:size-20" />, query: "?cat=sacs" },
  { id: "vintage", tone: "cream", icon: <MirrorIcon className="size-16 sm:size-20" />, query: "?cat=vintage" },
  { id: "petits-prix", tone: "rose", icon: <TagIcon className="size-16 sm:size-20" />, query: "?prix=petits" },
];

function Hero({ lang, d }: { lang: Locale; d: Dict }) {
  const h = d.hero;
  const slides = heroSlides.map((src) => ({ ...img(src), alt: alt(d, src) }));
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col justify-end overflow-hidden text-paper lg:min-h-[calc(100svh-6rem)]">
      <HeroCarousel slides={slides} />
      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pt-[17svh] pb-10 sm:px-8 lg:px-10 lg:pt-32 lg:pb-20">
        <p className="eyebrow rise !text-mustard">{h.eyebrow}</p>
        <h1 id="hero-title" className="display rise mt-5 max-w-[13ch] text-[clamp(2.9rem,7vw,6.2rem)] [animation-delay:0.1s] [&_em]:!text-rose" dangerouslySetInnerHTML={{ __html: h.title }} />
        <p className="rise mt-5 max-w-lg text-[1rem] leading-[1.7] sm:mt-6 sm:text-[1.0625rem] sm:leading-[1.8] text-paper/85 [animation-delay:0.2s]">{h.lead}</p>
        <div className="rise mt-7 flex flex-wrap gap-3 sm:mt-9 [animation-delay:0.3s]">
          <Link href={href(lang, "arrivages")} className="btn-solid on-dark">
            {h.arrivages}
          </Link>
          <Link href={href(lang, "home", "infos")} className="btn-line on-dark text-paper">
            {h.venir}
          </Link>
        </div>
        <div className="rise mt-8 flex flex-col gap-2 text-[0.875rem] text-paper/85 [animation-delay:0.4s] sm:flex-row sm:flex-wrap sm:gap-x-6">
          <Rating lang={lang} d={d} className="hover:text-paper" />
          <OpenStatus />
        </div>
      </div>
    </section>
  );
}

/** Tuiles de catégories : grandes capitales sur la photo (ou sur un aplat dessiné tant qu'elle manque). */
function Tiles({ lang, d }: { lang: Locale; d: Dict }) {
  const t = d.tiles;
  return (
    <section id="univers" aria-labelledby="tiles-title" className="mx-auto max-w-[90rem] px-5 pt-20 pb-20 sm:px-8 lg:px-10 lg:pt-28">
      <SectionHead eyebrow={t.eyebrow} title={t.title} id="tiles-title" />
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {TILES.map((tile, i) => {
          const it = t.items[tile.id];
          const p = fromPrice(tile.id);
          const photo = tileSlot(tile.id);
          return (
            <Reveal as="li" key={tile.id} delay={(i % 3) * 0.06}>
              <Link href={`${href(lang, "arrivages")}${tile.query}`} className="group block">
                <div className="relative">
                  <Slot src={photo} d={d} tone={tile.tone} sizes="(min-width:1024px) 30vw, 48vw" className="shine aspect-[4/5] sm:aspect-[5/6]" icon={<span className="opacity-80 transition-transform duration-700 group-hover:-translate-y-1">{tile.icon}</span>} />
                  {photo && <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(58_34_48/0.55),transparent_55%)]" aria-hidden="true" />}
                  <h3 className={`absolute inset-x-0 bottom-5 px-3 text-center font-[family-name:var(--font-fraunces)] text-[1.05rem] font-medium tracking-[0.18em] uppercase sm:bottom-7 sm:text-[1.45rem] ${photo || tile.tone === "prune" ? "text-paper" : "text-ink"}`}>{it.title}</h3>
                </div>
                <p className="mt-3 hidden text-[0.9375rem] leading-relaxed text-muted sm:block">{it.text}</p>
                <p className="mt-2 flex items-center justify-between gap-2 text-[0.8125rem] tracking-[0.06em] text-rose-deep tabular-nums">
                  {p != null ? fill(t.from, { price: money(p, lang) }) : t.inShop}
                  <ArrowIcon className="size-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1 rtl:rotate-180" />
                </p>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Services({ lang, d }: { lang: Locale; d: Dict }) {
  const icons = [<RailIcon key="r" className="size-11" />, <TagIcon key="t" className="size-11" />, <ChatIcon key="c" className="size-11" />, <HangerIcon key="h" className="size-11" />];
  const links = [href(lang, "arrivages"), href(lang, "prix"), href(lang, "reserver"), href(lang, "depot")];
  return (
    <section aria-label={d.services.label} className="border-y border-line bg-cream-soft">
      <ul className="mx-auto grid max-w-[90rem] grid-cols-2 lg:grid-cols-4">
        {d.services.items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={i * 0.06} className={`${i % 2 ? "border-s border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-s" : ""}`}>
            <Link href={links[i]} className="group block h-full px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
              <span className="block text-rose-deep transition-transform duration-500 group-hover:-translate-y-0.5">{icons[i]}</span>
              <span className="display mt-5 block text-[1.3rem] sm:text-[1.5rem]">{it.title}</span>
              <span className="mt-2 block text-[0.875rem] leading-relaxed text-muted">{it.text}</span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Arrivals({ lang, d }: { lang: Locale; d: Dict }) {
  const a = d.arrivals;
  const list = pieces.filter((p) => p.status !== "vendu").slice(0, 4);
  return (
    <section id="arrivages" aria-labelledby="arrivals-title" className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow={`${a.eyebrow} · ${fill(a.dated, { date: new Intl.DateTimeFormat(intlLocale[lang], { day: "numeric", month: "long", timeZone: "UTC" }).format(new Date(arrivalDate)) })}`} title={a.title} lead={a.lead} id="arrivals-title" />
        <Link href={href(lang, "arrivages")} className="link-line shrink-0 text-[0.9375rem]">
          {a.all}
        </Link>
      </div>
      {hasDemo && (
        <p className="mt-8 inline-flex items-center gap-2 border border-dashed border-rose px-4 py-2 text-[0.875rem] text-muted">
          <SparkleIcon className="size-3.5 text-rose-deep" /> {a.demo}
        </p>
      )}
      <ul className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 0.06}>
            <PieceCard p={p} lang={lang} d={d} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/** Blocs alternés : photo + texte court + un seul bouton. */
function Feature({ id, eyebrow, title, text, cta, to, media, flip = false }: { id: string; eyebrow: string; title: string; text: string; cta: string; to: string; media: ReactNode; flip?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-24">
        <Reveal className={flip ? "md:order-2" : ""}>{media}</Reveal>
        <Reveal delay={0.1} className="max-w-xl">
          <p className="eyebrow">{eyebrow}</p>
          <Thread className="mt-4 h-2.5 w-16 text-rose" />
          <h2 id={`${id}-title`} className="display mt-5 text-[clamp(2rem,3.8vw,3rem)]">
            {title}
          </h2>
          <p className="lead mt-5">{text}</p>
          <Link href={to} className="btn-line mt-8 text-ink">
            {cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Features({ lang, d }: { lang: Locale; d: Dict }) {
  const b = d.blocks;
  const box = "aspect-[4/5] md:aspect-[5/6]";
  return (
    <div className="py-6 lg:py-10">
      <Feature id="esprit" {...b.esprit} to={href(lang, "home", "infos")} media={<Slot src={slot("esprit") ?? slot("facade")} d={d} tone="sage" sizes="(min-width:768px) 45vw, 100vw" className={box} icon={<HangerIcon className="size-24" strokeWidth={1} />} label="Henriville · Amiens" />} />
      <Feature id="bijoux" {...b.bijoux} to={href(lang, "bijoux")} flip media={<Slot src={slot("bijoux")} d={d} tone="mustard" sizes="(min-width:768px) 45vw, 100vw" className={box} icon={<RingIcon className="size-24" strokeWidth={1} />} label={d.nav.bijoux} />} />
      <Feature id="depot" {...b.depot} to={href(lang, "depot")} media={<Slot src={slot("depot")} d={d} tone="rose" sizes="(min-width:768px) 45vw, 100vw" className={box} icon={<RailIcon className="size-24" strokeWidth={1} />} label={d.nav.depot} />} />
    </div>
  );
}

function Reviews({ lang, d }: { lang: Locale; d: Dict }) {
  const r = d.reviews;
  const value = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 }).format(site.rating.value);
  const items = avis.items as { author: string; date: string; text: Record<Locale, string> }[];
  return (
    <section aria-labelledby="reviews-title" className="bg-ink text-paper">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-24">
          <div className="flex items-end gap-5">
            <p className="display text-[clamp(5rem,10vw,7.5rem)] leading-[0.8]">{value}</p>
            <div className="pb-1">
              <p className="eyebrow !text-mustard">{r.eyebrow}</p>
              <Rating lang={lang} d={d} className="mt-2 text-[0.875rem] text-paper/80 hover:text-paper" />
            </div>
          </div>
          <div>
            <h2 id="reviews-title" className="display text-[clamp(1.8rem,3.4vw,2.4rem)]">
              {r.title}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[1.0625rem]">
              {r.themes.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <SparkleIcon className="size-3.5 text-mustard" />
                  {t}
                </li>
              ))}
            </ul>
            <a href={site.maps} target="_blank" rel="noopener" className="link-line mt-7 inline-block text-[0.9375rem]">
              {r.cta}
            </a>
          </div>
        </Reveal>
        {/* À REMPLIR avec de vrais avis clients (data/avis.json), repris de Google avec leur accord : aucun avis inventé. */}
        <div hidden dangerouslySetInnerHTML={{ __html: "<!-- À REMPLIR avec de vrais avis clients (data/avis.json) -->" }} />
        {items.length > 0 && (
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {items.map((it) => (
              <li key={it.author + it.date} className="border border-paper/15 p-7">
                <blockquote className="display text-[1.25rem] leading-snug">« {it.text[lang]} »</blockquote>
                <p className="mt-4 text-[0.875rem] text-paper/70">{it.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(d.faq.items)) }} />
      <Hero lang={lang} d={d} />
      <Tiles lang={lang} d={d} />
      <Services lang={lang} d={d} />
      <Arrivals lang={lang} d={d} />
      <Features lang={lang} d={d} />
      <Reviews lang={lang} d={d} />
      <InfosBlock lang={lang} d={d} />
      <Faq d={d} className="border-t border-line" />
    </>
  );
}
