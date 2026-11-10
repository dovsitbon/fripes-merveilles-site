import Link from "next/link";
import site from "@/data/site.json";
import type { Dict, Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { waLink } from "@/lib/whatsapp";
import { Logo } from "@/components/Logo";
import { FacebookIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  const f = d.footer;
  const links = [
    { label: d.nav.arrivages, to: href(lang, "arrivages") },
    { label: d.nav.reserver, to: href(lang, "reserver") },
    { label: d.nav.prix, to: href(lang, "prix") },
    { label: d.nav.depot, to: href(lang, "depot") },
    { label: d.pages.friperie.eyebrow, to: href(lang, "friperie") },
    { label: d.pages.bijoux.eyebrow, to: href(lang, "bijoux") },
  ];
  return (
    <footer className="bg-night pb-28 text-paper/85 lg:pb-0">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10 lg:py-20">
        <div>
          <Logo className="h-[4.6rem] w-auto text-paper" title="Fripes Merveilles, friperie à Amiens" />
          <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-paper/70">{f.tagline}</p>
        </div>
        <div>
          <p className="eyebrow !text-mustard">{f.contact}</p>
          <address className="mt-4 text-[0.9375rem] leading-relaxed not-italic">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            <a href={`tel:${site.tel}`} className="mt-3 inline-flex items-center gap-2 hover:text-paper">
              <PhoneIcon /> {site.phone}
            </a>
            <br />
            <a href={waLink()} target="_blank" rel="noopener" className="mt-1 inline-flex items-center gap-2 hover:text-paper">
              <WhatsAppIcon /> {d.nav.whatsapp}
            </a>
          </address>
        </div>
        <div>
          <p className="eyebrow !text-mustard">{d.infos.hours}</p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed whitespace-pre-line">{f.days}</p>
          <p className="mt-1 text-[0.9375rem] text-paper/60">{f.closed}</p>
        </div>
        <div>
          <p className="eyebrow !text-mustard">{f.pages}</p>
          <ul className="mt-4 space-y-2 text-[0.9375rem]">
            {links.map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 border-t border-paper/15 px-5 py-6 text-[0.8125rem] text-paper/65 sm:px-8 lg:px-10">
        <p>
          © {new Date().getFullYear()} {f.rights}
        </p>
        <div className="flex items-center gap-6">
          <a href={site.facebook} target="_blank" rel="noopener" aria-label={d.nav.facebook} className="inline-flex items-center gap-2 hover:text-paper">
            <FacebookIcon /> Facebook
          </a>
          <Link href={href(lang, "legal")} className="hover:text-paper">
            {f.legal}
          </Link>
        </div>
      </div>
    </footer>
  );
}
