// Génère CONTENU.md : tous les textes du site en français et en anglais, les tarifs et délais,
// pour relecture et validation par l'atelier.   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const json = async (p) => JSON.parse(await readFile(path.join(ROOT, p), "utf8"));
const fr = await json("locales/fr.json");
const en = await json("locales/en.json");
const prix = await json("data/prix.json");
const arrivages = await json("data/arrivages.json");
const annonces = await json("data/annonces.json");
const horaires = await json("data/horaires.json");
const site = await json("data/site.json");

const out = [];
const w = (s = "") => out.push(s);
const strip = (s) => s.replace(/<br>/g, " ").replace(/<\/?em>/g, "*");

w("# Fripes Merveilles : contenu du site");
w();
w("Tous les textes du site, en français et en anglais, pour relecture avec la boutique. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; prix, arrivages, horaires, annonces, avis et photos dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.");
w();
w(`Rien n'a été inventé côté chiffres : **aucun prix n'est renseigné** (affiché « Prix en boutique ») tant que la boutique ne les a pas donnés. La note Google (${site.rating.value}/5, ${site.rating.count} avis) est celle relevée le ${site.rating.asOf}. **Aucun avis n'est cité** : le site reprend seulement les thèmes qui reviennent (la boutique, les prix, le choix, l'accueil, les bijoux, les petits trésors) ; les vrais avis iront dans \`data/avis.json\`, avec l'accord de leurs auteurs.`);
w();
w("Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).");
w();
w("## Titre du hero : 3 propositions");
w();
w("1. **Seconde main, premier coup de cœur** *(Second hand, love at first sight)* ← en ligne");
w("2. Des trésors à chaque visite *(Treasures on every visit)*");
w("3. La friperie des belles trouvailles *(The thrift shop of lovely finds)*");
w();
w("## Prix par famille (`data/prix.json`)");
w();
const cats = { femme: "Femme", homme: "Homme", bijoux: "Bijoux", sacs: "Sacs et accessoires", vintage: "Vintage" };
for (const c of prix.categories) {
  w(`### ${cats[c.id]}`);
  w();
  w("| Famille | Prix « à partir de » | Prix haut |");
  w("|---|---|---|");
  for (const s of c.items) w(`| **${s.name.fr}**<br>*${s.name.en}* | ${s.from == null ? "à remplir" : `${s.from} €`} | ${s.to == null ? "à remplir" : `${s.to} €`} |`);
  w();
}
w(`Seuil « petits prix » : ${arrivages.petitsPrix} € (à valider).`);
w();
w("## Arrivages (`data/arrivages.json`)");
w();
w(`Arrivage du ${arrivages.date}. Les pièces ci-dessous sont **des exemples de présentation** (demo) à remplacer par les vraies pièces, avec photo et prix.`);
w();
w("| Réf. | Pièce | Catégorie | Taille | Prix | Statut |");
w("|---|---|---|---|---|---|");
for (const p of arrivages.items) w(`| ${p.ref} | ${p.name.fr} / *${p.name.en}* | ${cats[p.category]} | ${p.size} | ${p.price == null ? "à remplir" : `${p.priceFrom ? "dès " : ""}${p.price} €`} | ${p.status}${p.demo ? " · exemple" : ""} |`);
w();

w("## Horaires (`data/horaires.json`)");
w();
const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
for (const d of [1, 2, 3, 4, 5, 6, 0]) {
  const r = horaires.week[String(d)];
  w(`- ${days[d]} : ${r ? r.map(([a, b]) => `${a} – ${b}`).join(", ") : "fermé"}`);
}
w();
w(`Fermetures exceptionnelles : ${horaires.closures.map((c) => `${c.label.fr} (${c.from === c.to ? c.from : `${c.from} → ${c.to}`})`).join(", ")}.`);
w();

w("## Bandeau d'annonces (`data/annonces.json`)");
w();
w(`- **Par défaut** : ${annonces.default.text.fr} *(${annonces.default.text.en})*`);
w(`- **Arrivage de moins de 7 jours** : ${annonces.arrivage.text.fr} *(${annonces.arrivage.text.en})*`);
for (const a of annonces.items) w(`- **${a.from} → ${a.to}** : ${a.text.fr} *(${a.text.en})* — lien « ${a.link.fr} »`);
w();

w("## Textes du site");
w();
w("Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation de l'atelier.");
w();
const flags = {
  "faq.items.0": "à valider (horaires)",
  "faq.items.1": "à valider (jours d'arrivage)",
  "faq.items.2": "à valider (durée de mise de côté)",
  "faq.items.3": "à valider (moyens de paiement)",
  "faq.items.4": "à valider (dépôt-vente)",
  "faq.items.5": "à valider (stationnement)",
  "services.items.3": "à valider (dépôt-vente)",
  "blocks.depot": "à valider (dépôt-vente)",
  "depot": "à valider (dépôt-vente ou rachat)",
  "blocks.esprit": "à valider (histoire de la boutique)",
  "infos.accessText": "à valider (accès, stationnement)",
  "footer.days": "à valider (horaires)",
};
const flagOf = (key) => Object.entries(flags).find(([k]) => key === k || key.startsWith(`${k}.`))?.[1];

const SKIP = new Set(["alt", "days"]);
function walk(a, b, key = "") {
  if (typeof a === "string") {
    const f = flagOf(key);
    w(`| \`${key}\` | ${strip(a).replace(/\n/g, "<br>")} | ${strip(b ?? "").replace(/\n/g, "<br>")} |${f ? ` **${f}** |` : " |"}`);
    return;
  }
  if (Array.isArray(a)) return a.forEach((x, i) => walk(x, b?.[i], `${key}.${i}`));
  for (const k of Object.keys(a)) walk(a[k], b?.[k], key ? `${key}.${k}` : k);
}
for (const section of Object.keys(fr)) {
  if (SKIP.has(section)) continue;
  w(`### ${section}`);
  w();
  w("| Clé | Français | English | |");
  w("|---|---|---|---|");
  walk(fr[section], en[section], section);
  w();
}

await writeFile(path.join(ROOT, "CONTENU.md"), out.join("\n"));
console.log("CONTENU.md écrit");
