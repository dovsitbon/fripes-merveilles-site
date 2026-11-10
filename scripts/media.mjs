// Prépare les photos de Fripes Merveilles pour le web, et les visuels générés (icône Apple, image de partage).
//   npm run media
// Sources : assets/raw/ (photos récupérées) et assets/<dossier>/ (photos prises sur place : hero, boutique, arrivages, bijoux, facade).
// Copie classée dans assets/<dossier>/, version web dans public/media/<dossier>/ (next/image sert ensuite AVIF/WebP),
// dimensions réelles dans data/media-sizes.json. Pour une nouvelle photo : l'ajouter à PICKS, relancer, puis la
// brancher dans data/photos.json (ou data/arrivages.json pour une pièce).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["raw", "hero", "boutique", "arrivages", "bijoux", "facade"];

// [fichier source (depuis assets/), dossier, nom, recadrage { top, bottom, left, right } en pixels retirés]
const PICKS = [
  // Exemples, à décommenter avec les photos prises sur place :
  // ["hero/vitrine-portants.jpg", "hero", "vitrine-portants", {}],
  // ["boutique/cabine-miroir.jpg", "boutique", "cabine-miroir", {}],
  // ["bijoux/vitrine-bagues.jpg", "bijoux", "vitrine-bagues", {}],
  // ["facade/devanture-rue-gaulthier-de-rumilly.jpg", "facade", "devanture", {}],
  // ["arrivages/robe-fleurie-70s.jpg", "arrivages", "robe-fleurie-70s", {}],
];

const sizes = {};
for (const [src, dir, name, c] of PICKS) {
  const file = path.join(ROOT, "assets", src);
  const meta = await sharp(file).metadata();
  const box = { left: c.left ?? 0, top: c.top ?? 0, width: meta.width - (c.left ?? 0) - (c.right ?? 0), height: meta.height - (c.top ?? 0) - (c.bottom ?? 0) };
  await mkdir(path.join(ROOT, "assets", dir), { recursive: true });
  await mkdir(path.join(ROOT, "public/media", dir), { recursive: true });
  const cropped = sharp(file).rotate().extract(box);
  const keep = path.join(ROOT, "assets", dir, `${name}.jpg`);
  if (!src.startsWith(`${dir}/`) || !existsSync(keep)) await cropped.clone().jpeg({ quality: 92 }).toFile(keep);
  const max = dir === "hero" ? 2200 : 1400;
  const info = await cropped.clone().resize({ width: max, height: max, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(ROOT, "public/media", dir, `${name}.jpg`));
  sizes[`/media/${dir}/${name}.jpg`] = [info.width, info.height];
}
for (const dir of DIRS) await mkdir(path.join(ROOT, "assets", dir), { recursive: true });
await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");

// Icône Apple (180 × 180) depuis le favicon SVG
await sharp(await readFile(path.join(ROOT, "app/icon.svg")), { density: 600 }).resize(180, 180).png().toFile(path.join(ROOT, "app/apple-icon.png"));

// Image de partage 1200 × 630 : tant qu'il n'y a pas de photo, une affiche typographique (prune, cintre, étoile)
const hero = JSON.parse(await readFile(path.join(ROOT, "data/photos.json"), "utf8")).hero[0];
if (hero) {
  await sharp(path.join(ROOT, "public", hero)).resize(1200, 630, { fit: "cover" }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(ROOT, "public/og.jpg"));
} else {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#4A2C3A"/>
  <rect x="24" y="24" width="1152" height="582" fill="none" stroke="#F8F1E6" stroke-opacity=".35" stroke-dasharray="6 8"/>
  <g transform="translate(528 92) scale(3)" fill="none" stroke="#F8F1E6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 17.5v-2.2c2.6-.3 4.3-2.2 4.3-4.6A4.3 4.3 0 0 0 24 6.4a4.3 4.3 0 0 0-4.2 3.3"/>
    <path d="M24 17.5 5.6 32.3c-1.5 1.2-.7 3.6 1.2 3.6h34.4c1.9 0 2.7-2.4 1.2-3.6L24 17.5Z"/>
  </g>
  <path d="M0-5c.4 3.4 1.6 4.6 5 5-3.4.4-4.6 1.6-5 5-.4-3.4-1.6-4.6-5-5 3.4-.4 4.6-1.6 5-5Z" transform="translate(648 104) scale(3.4)" fill="#D9A441"/>
  <text x="600" y="390" text-anchor="middle" fill="#F8F1E6" font-family="Georgia, serif" font-size="78" letter-spacing="8">FRIPES MERVEILLES</text>
  <text x="600" y="450" text-anchor="middle" fill="#D59C9A" font-family="Georgia, serif" font-style="italic" font-size="36">Seconde main, premier coup de cœur</text>
  <text x="600" y="530" text-anchor="middle" fill="#F8F1E6" fill-opacity=".8" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6">FRIPERIE · VINTAGE · BIJOUX · HENRIVILLE, AMIENS</text>
</svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(ROOT, "public/og.jpg"));
}
console.log(`${PICKS.length} photo(s) prête(s), icône et image de partage générées`);
