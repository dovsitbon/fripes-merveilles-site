// Affichette A5 imprimable (PDF) avec QR code vers le site, à poser en vitrine ou près de la caisse.
//   npm run affichette   →   public/affichette-fripes-merveilles-a5.pdf
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const url = `${site.url}/fr/arrivages`;

const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const CREAM = hex("#F8F1E6");
const PRUNE = hex("#4A2C3A");
const ROSE = hex("#D59C9A");
const ROSE_DEEP = hex("#9A4E57");
const MUSTARD = hex("#D9A441");
const MUTED = hex("#6B5560");

const pdf = await PDFDocument.create();
pdf.setTitle("Fripes Merveilles : affichette A5");
pdf.setAuthor("Fripes Merveilles");
const W = 419.53;
const H = 595.28;
const page = pdf.addPage([W, H]);
const serif = await pdf.embedFont(StandardFonts.TimesRoman);
const serifI = await pdf.embedFont(StandardFonts.TimesRomanItalic);
const sans = await pdf.embedFont(StandardFonts.Helvetica);

page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });

// Bandeau prune avec le cintre au trait et l'étoile moutarde
const bandH = 200;
page.drawRectangle({ x: 0, y: H - bandH, width: W, height: bandH, color: PRUNE });
page.drawRectangle({ x: 12, y: H - bandH + 12, width: W - 24, height: bandH - 24, borderColor: CREAM, borderOpacity: 0.35, borderWidth: 0.6, borderDashArray: [3, 4] });
const s = 2.4;
const ox = W / 2 - 24 * s;
const oy = H - 34;
for (const d of ["M24 17.5v-2.2c2.6-.3 4.3-2.2 4.3-4.6A4.3 4.3 0 0 0 24 6.4a4.3 4.3 0 0 0-4.2 3.3", "M24 17.5 5.6 32.3c-1.5 1.2-.7 3.6 1.2 3.6h34.4c1.9 0 2.7-2.4 1.2-3.6L24 17.5Z"])
  page.drawSvgPath(d, { x: ox, y: oy, scale: s, borderColor: CREAM, borderWidth: 1.3 });
page.drawSvgPath("M0-5c.4 3.4 1.6 4.6 5 5-3.4.4-4.6 1.6-5 5-.4-3.4-1.6-4.6-5-5 3.4-.4 4.6-1.6 5-5Z", { x: W / 2 + 26, y: H - 44, scale: 2.2, color: MUSTARD });

const center = (text, font, size, y, color = PRUNE, spacing = 0) => {
  const width = font.widthOfTextAtSize(text, size) + spacing * (text.length - 1);
  let x = (W - width) / 2;
  if (!spacing) return page.drawText(text, { x, y, size, font, color });
  for (const ch of text) {
    page.drawText(ch, { x, y, size, font, color });
    x += font.widthOfTextAtSize(ch, size) + spacing;
  }
};

center("FRIPES MERVEILLES", serif, 24, H - 150, CREAM, 3);
center("FRIPERIE · VINTAGE · BIJOUX · AMIENS", sans, 7.5, H - 172, ROSE, 2);

let y = H - bandH - 48;
center("Seconde main, premier coup de cœur", serifI, 22, y, ROSE_DEEP);
y -= 20;
center("Des arrivages chaque semaine : découvrez les pièces du moment", serif, 11.5, y, MUTED);
y -= 15;
center("et réservez-les sur WhatsApp.", serif, 11.5, y, MUTED);

const qrPng = await QRCode.toBuffer(url, { margin: 0, width: 600, color: { dark: "#4A2C3A", light: "#F8F1E6" }, errorCorrectionLevel: "M" });
const qr = await pdf.embedPng(qrPng);
const qrS = 104;
y -= 24 + qrS;
page.drawImage(qr, { x: (W - qrS) / 2, y, width: qrS, height: qrS });
y -= 16;
center("Scannez pour voir les arrivages", sans, 8.5, y, PRUNE);
y -= 12;
center(url.replace(/^https?:\/\//, ""), sans, 8, y, ROSE_DEEP);

y -= 20;
let x = 70;
for (; x < W - 70; x += 7) page.drawLine({ start: { x, y }, end: { x: Math.min(x + 3.5, W - 70), y }, thickness: 0.8, color: ROSE });
y -= 18;
center(`${site.address.street}, ${site.address.postalCode} ${site.address.city} (Henriville)`, sans, 8.5, y);
y -= 13;
center(`Du mercredi au samedi, 10 h – 19 h  ·  ${site.phone} (appel et WhatsApp)`, sans, 8.5, y);
y -= 13;
center(`${String(site.rating.value).replace(".", ",")}/5 sur Google (${site.rating.count} avis)  ·  facebook.com/FripesEtMerveilles`, sans, 8, y, MUTED);

await writeFile(path.join(ROOT, "public/affichette-fripes-merveilles-a5.pdf"), await pdf.save());
console.log("affichette prête :", url);
