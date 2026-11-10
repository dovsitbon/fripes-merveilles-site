import site from "@/data/site.json";
import horaires from "@/data/horaires.json";
import { getDict, type Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { pieces, priceCategories } from "@/lib/catalogue";
import { heroSlides, slot } from "@/lib/media";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const BUSINESS_ID = `${site.url}/#boutique`;

/**
 * Schema.org : ClothingStore, précisé « seconde main » (additionalType : friperie / magasin d'occasion),
 * avec adresse, géolocalisation, horaires, téléphone, note Google datée et familles de produits.
 */
export function businessJsonLd(lang: Locale) {
  const d = getDict(lang);
  const week = horaires.week as unknown as Record<string, [string, string][] | null>;
  const hours = Object.entries(week).flatMap(([day, ranges]) => (ranges ?? []).map(([opens, closes]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: DAYS[Number(day)], opens, closes })));
  const closures = horaires.closures.map((c) => ({ "@type": "OpeningHoursSpecification", validFrom: c.from, validThrough: c.to, opens: "00:00", closes: "00:00" }));
  const images = [`${site.url}/og.jpg`, ...[...heroSlides, slot("facade"), slot("esprit")].filter(Boolean).map((p) => `${site.url}${p}`)];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ClothingStore",
        additionalType: "http://www.productontology.org/id/Second-hand_shop",
        "@id": BUSINESS_ID,
        name: site.name,
        alternateName: "Fripes et Merveilles",
        description: d.meta.description,
        url: `${site.url}/${lang}`,
        image: images,
        logo: `${site.url}/logo.svg`,
        telephone: site.phoneIntl,
        priceRange: "€",
        currenciesAccepted: "EUR",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          postalCode: site.address.postalCode,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        hasMap: site.maps,
        openingHoursSpecification: hours,
        specialOpeningHoursSpecification: closures,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.value,
          reviewCount: site.rating.count,
          bestRating: 5,
          worstRating: 1,
          description: `Google, ${site.rating.asOf}`,
          dateModified: site.rating.asOf,
        },
        areaServed: [{ "@type": "City", name: "Amiens" }, { "@type": "Place", name: "Henriville, Amiens" }],
        keywords: lang === "fr" ? "friperie Amiens, vintage Amiens, seconde main Amiens, bijoux vintage Amiens, friperie Henriville" : "thrift shop Amiens, vintage Amiens, second hand Amiens, vintage jewellery Amiens",
        knowsAbout: priceCategories.map((c) => d.arrivals.categories[c.id]),
        sameAs: [site.facebook],
        potentialAction: { "@type": "ReserveAction", target: `${site.url}${href(lang, "reserver")}`, name: d.nav.reserver },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: d.prices.title,
          url: `${site.url}${href(lang, "prix")}`,
          itemListElement: priceCategories.map((c) => ({
            "@type": "OfferCatalog",
            name: d.arrivals.categories[c.id],
            itemListElement: c.items.map((s) => ({
              "@type": "Offer",
              itemCondition: "https://schema.org/UsedCondition",
              itemOffered: { "@type": "Product", name: s.name[lang] },
              ...(s.from != null ? { priceSpecification: { "@type": "PriceSpecification", minPrice: s.from, ...(s.to != null ? { maxPrice: s.to } : {}), priceCurrency: "EUR" } } : {}),
            })),
          })),
        },
      },
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: ["fr", "en"], publisher: { "@id": BUSINESS_ID } },
    ],
  };
}

/** Pièces du moment (page Arrivages) : liste de produits d'occasion ; les exemples (demo) ne sont pas déclarés. */
export function itemListJsonLd(lang: Locale) {
  const real = pieces.filter((p) => !p.demo && p.status !== "vendu");
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: real.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name[lang],
        sku: p.ref,
        ...(p.photo ? { image: `${site.url}${p.photo}` } : {}),
        offers: {
          "@type": "Offer",
          itemCondition: "https://schema.org/UsedCondition",
          availability: p.status === "dispo" ? "https://schema.org/InStoreOnly" : "https://schema.org/LimitedAvailability",
          priceCurrency: "EUR",
          ...(p.price != null ? { price: p.price } : {}),
          seller: { "@id": BUSINESS_ID },
        },
      },
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbJsonLd(lang: Locale, name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/${lang}` },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}
