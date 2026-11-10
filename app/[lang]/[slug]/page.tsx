import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import { fill, getDict, isLocale, locales, type Dict, type Locale } from "@/lib/i18n";
import { href, PAGES, pageOf, type PageId } from "@/lib/routes";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { ogLocale } from "@/lib/locales";
import { money } from "@/lib/shop";
import { hasDemo, petitsPrix, pieces, priceCategories, type PriceLine } from "@/lib/catalogue";
import { slot } from "@/lib/media";
import { Faq, InfosBlock, PhoneLink, Rating, ReserveCta, Slot, WhatsAppLink } from "@/components/Blocks";
import { ArrivalsBrowser } from "@/components/ArrivalsBrowser";
import { DepotForm, ReserveForm } from "@/components/Forms";
import { PieceCard } from "@/components/PieceCard";
import { Reveal } from "@/components/Reveal";
import { OpenStatus } from "@/components/OpenStatus";
import { DressIcon, RingIcon, SparkleIcon, Thread } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => Object.values(PAGES).map((s) => ({ lang, slug: s[lang] })));
}

function metaOf(id: PageId, d: Dict) {
  if (id === "legal") return { title: d.legal.metaTitle, description: d.meta.description };
  const p = d.pages[id];
  return { title: p.metaTitle, description: p.metaDescription };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const id = pageOf(lang, slug);
  if (!id) return {};
  const d = getDict(lang);
  const m = metaOf(id, d);
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: href(lang, id),
      languages: { ...Object.fromEntries(locales.map((l) => [l, href(l, id)])), "x-default": href("fr", id) },
    },
    openGraph: { type: "website", url: href(lang, id), siteName: site.name, title: m.title, description: m.description, locale: ogLocale[lang], images: [{ url: "/og.jpg", width: 1200, height: 630, alt: d.meta.ogAlt }] },
    robots: id === "legal" ? { index: false, follow: true } : undefined,
  };
}

function Head({ eyebrow, title, lead, children, h1 = true }: { eyebrow: string; title: string; lead: string; children?: ReactNode; h1?: boolean }) {
  const H = h1 ? "h1" : "h2";
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <Thread className="mt-4 h-2.5 w-16 text-rose" />
      <H className="display mt-5 text-[clamp(2.6rem,6vw,4.4rem)]">{title}</H>
      <p className="lead mt-5 max-w-2xl">{lead}</p>
      {children}
    </div>
  );
}

function ArrivagesPage({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.pages.arrivages;
  return (
    <section className="mx-auto max-w-[90rem] px-5 pt-10 pb-20 sm:px-8 lg:px-10 lg:pt-16 lg:pb-28">
      <Head eyebrow={p.eyebrow} title={p.title} lead={p.lead}>
        <div className="mt-6 flex flex-col gap-2 text-[0.875rem] text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
          <Rating lang={lang} d={d} className="hover:text-ink" />
          <OpenStatus />
        </div>
      </Head>
      {hasDemo && (
        <p className="mt-8 inline-flex items-center gap-2 border border-dashed border-rose px-4 py-2 text-[0.875rem] text-muted">
          <SparkleIcon className="size-3.5 text-rose-deep" /> {d.arrivals.demo}
        </p>
      )}
      <div className="mt-10">
        <ArrivalsBrowser />
      </div>
    </section>
  );
}

const priceText = (s: PriceLine, lang: Locale, d: Dict) => {
  const t = d.prices;
  if (s.from == null) return <span className="text-muted">{t.inShop}</span>;
  if (s.to != null && s.to !== s.from) return fill(t.range, { from: money(s.from, lang), to: money(s.to, lang) });
  return fill(t.from, { price: money(s.from, lang) });
};

function PrixPage({ lang, d }: { lang: Locale; d: Dict }) {
  const t = d.prices;
  return (
    <section className="mx-auto grid max-w-[90rem] gap-12 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:px-10 lg:pt-16 lg:pb-28">
      <div className="lg:sticky lg:top-32 lg:h-fit">
        <Head eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <p className="mt-6 border-s-2 border-mustard ps-4 text-[0.9375rem]">{fill(t.petits, { n: petitsPrix })}</p>
        <div className="mt-8">
          <ReserveCta lang={lang} d={d} />
        </div>
        <Rating lang={lang} d={d} className="mt-6 text-[0.875rem] text-muted hover:text-ink" />
      </div>
      <div className="space-y-14">
        {priceCategories.map((c) => (
          <Reveal key={c.id}>
            <table className="w-full border-collapse">
              <caption className="text-start">
                <span className="flex items-baseline justify-between gap-4 border-b border-ink/80 pb-3">
                  <span className="display text-[1.75rem] sm:text-[1.9rem]">{d.arrivals.categories[c.id]}</span>
                  <Link href={`${href(lang, "arrivages")}?cat=${c.id}`} className="link-line shrink-0 text-[0.8125rem] text-rose-deep">
                    {d.arrivals.all}
                  </Link>
                </span>
              </caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">{t.head.family}</th>
                  <th scope="col">{t.head.price}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {c.items.map((s) => (
                  <tr key={s.id}>
                    <th scope="row" className="py-3.5 pe-4 text-start text-[1rem] font-light">
                      {s.name[lang]}
                    </th>
                    <td className="py-3.5 text-end text-[0.9375rem] whitespace-nowrap tabular-nums">{priceText(s, lang, d)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        ))}
        <p className="text-[0.8125rem] text-muted">{t.note}</p>
      </div>
    </section>
  );
}

function Aside({ lang, d }: { lang: Locale; d: Dict }) {
  return (
    <aside className="h-fit space-y-6 lg:sticky lg:top-32">
      <div className="slot tone-cream p-7">
        <p className="display text-[1.6rem]">{d.reserve.preferCall}</p>
        <PhoneLink className="mt-4 inline-flex items-center gap-2 text-[1.125rem]" />
        <div className="mt-3 text-[0.875rem] text-muted">
          <OpenStatus />
        </div>
        <WhatsAppLink label={d.infos.whatsapp} className="link-line mt-4 inline-flex items-center gap-2 text-[0.9375rem]" />
      </div>
      <div className="space-y-2 px-1 text-[0.875rem] text-muted">
        <Rating lang={lang} d={d} className="hover:text-ink" />
        <p>
          {site.address.street}, {site.address.postalCode} {site.address.city}
        </p>
        <p className="whitespace-pre-line">{d.footer.days}</p>
      </div>
    </aside>
  );
}

function ReserverPage({ lang, d }: { lang: Locale; d: Dict }) {
  const r = d.reserve;
  return (
    <section className="mx-auto grid max-w-[90rem] gap-12 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:px-10 lg:pt-16 lg:pb-28">
      <div className="max-w-3xl">
        <Head eyebrow={r.eyebrow} title={r.title} lead={r.lead} />
        <div className="mt-12">
          <ReserveForm />
        </div>
      </div>
      <Aside lang={lang} d={d} />
    </section>
  );
}

function DepotPage({ lang, d }: { lang: Locale; d: Dict }) {
  const t = d.depot;
  return (
    <section className="mx-auto grid max-w-[90rem] gap-12 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:px-10 lg:pt-16 lg:pb-28">
      <div className="max-w-3xl">
        <Head eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <ol className="mt-10 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
          {t.steps.map((s, i) => (
            <li key={s.title}>
              <span className="display text-[2.2rem] leading-none text-rose-deep">{i + 1}</span>
              <h2 className="mt-3 text-[1.0625rem] font-normal">{s.title}</h2>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <DepotForm />
        </div>
      </div>
      <Aside lang={lang} d={d} />
    </section>
  );
}

type SeoPage = Dict["pages"]["friperie"] | Dict["pages"]["bijoux"];

/** Pages SEO locales (Friperie à Amiens, Bijoux vintage à Amiens) : hero, ce qu'on trouve, pièces du moment, pourquoi, infos, FAQ. */
function SeoLanding({ lang, d, p, media, filter, query }: { lang: Locale; d: Dict; p: SeoPage; media: ReactNode; filter: (c: string) => boolean; query: string }) {
  const list = pieces.filter((x) => x.status !== "vendu" && filter(x.category)).slice(0, 4);
  return (
    <>
      <section className="mx-auto grid max-w-[90rem] items-center gap-10 px-5 pt-10 pb-16 sm:px-8 md:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-10 lg:pt-16 lg:pb-24">
        <Head eyebrow={p.eyebrow} title={p.title} lead={p.intro}>
          <div className="mt-9">
            <ReserveCta lang={lang} d={d} label={p.cta} to={`${href(lang, "arrivages")}${query}`} />
          </div>
          <div className="mt-6 flex flex-col gap-2 text-[0.875rem] text-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
            <Rating lang={lang} d={d} className="hover:text-ink" />
            <OpenStatus />
          </div>
        </Head>
        {media}
      </section>
      <section className="border-y border-line bg-cream-soft">
        <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{p.listTitle}</h2>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {p.list.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06}>
                <SparkleIcon className="size-4 text-rose-deep" />
                <h3 className="display mt-4 text-[1.5rem]">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      {list.length > 0 && (
        <section className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{d.arrivals.title}</h2>
            <Link href={`${href(lang, "arrivages")}${query}`} className="link-line text-[0.9375rem]">
              {d.arrivals.all}
            </Link>
          </div>
          <ul className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((x) => (
              <li key={x.id}>
                <PieceCard p={x} lang={lang} d={d} />
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{p.whyTitle}</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {p.why.map((s) => (
              <li key={s.title} className="border-t border-paper/20 pt-6">
                <h3 className="display text-[1.45rem]">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-paper/75">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <InfosBlock lang={lang} d={d} />
      <Faq d={d} className="border-t border-line" />
    </>
  );
}

function Legal({ d }: { d: Dict }) {
  const l = d.legal;
  const g = site.legal;
  const editor = [fill(l.editorText, { company: g.company ?? site.name }), g.siret ? fill(l.siret, { siret: g.siret }) : l.siretMissing, g.director ? fill(l.director, { director: g.director }) : ""].filter(Boolean).join(" ");
  const rows: [string, string][] = [
    [l.editor, editor],
    [l.host, g.host],
    [l.data, l.dataText],
    [l.photos, l.photosText],
    [l.cookies, l.cookiesText],
  ];
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <h1 className="display text-[clamp(2.4rem,5vw,3.6rem)]">{l.title}</h1>
      <dl className="mt-10 space-y-8">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="eyebrow">{k}</dt>
            <dd className="mt-2 leading-relaxed text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default async function Page({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const id = pageOf(lang, slug);
  if (!id) notFound();
  const d = getDict(lang);
  const m = metaOf(id, d);
  const crumbs = breadcrumbJsonLd(lang, m.title.split(" | ")[0], href(lang, id));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {id === "arrivages" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd(lang)) }} />}
      {id === "arrivages" && <ArrivagesPage lang={lang} d={d} />}
      {id === "prix" && <PrixPage lang={lang} d={d} />}
      {id === "reserver" && <ReserverPage lang={lang} d={d} />}
      {id === "depot" && <DepotPage lang={lang} d={d} />}
      {id === "friperie" && (
        <SeoLanding
          lang={lang}
          d={d}
          p={d.pages.friperie}
          filter={(c) => c !== "bijoux"}
          query=""
          media={<Slot src={slot("friperie") ?? slot("facade")} d={d} tone="rose" priority sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/5]" icon={<DressIcon className="size-24" strokeWidth={1} />} label="Henriville · Amiens" />}
        />
      )}
      {id === "bijoux" && (
        <SeoLanding
          lang={lang}
          d={d}
          p={d.pages.bijoux}
          filter={(c) => c === "bijoux" || c === "sacs"}
          query="?cat=bijoux"
          media={<Slot src={slot("bijoux")} d={d} tone="mustard" priority sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/5]" icon={<RingIcon className="size-24" strokeWidth={1} />} label={d.nav.bijoux} />}
        />
      )}
      {id === "legal" && <Legal d={d} />}
    </>
  );
}
