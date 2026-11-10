import site from "@/data/site.json";

/** Lien WhatsApp vers la boutique, avec un message pré-rempli. */
export const waLink = (text?: string) => `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const isPhone = (v: string) => /^[+\d][\d\s\-().]{7,19}$/.test(v.trim());

/** Récapitulatif lisible : un titre en gras, puis des lignes « Libellé : valeur » (vides ignorées), par blocs. */
export function recap(title: string, blocks: [string, string][][], colon: string) {
  return [`*${title}*`, ...blocks.map((b) => b.filter(([, v]) => v.trim()).map(([k, v]) => `${k}${colon} ${v.trim()}`).join("\n"))].filter(Boolean).join("\n\n");
}
