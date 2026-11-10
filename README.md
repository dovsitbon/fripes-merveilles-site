# Fripes Merveilles

Site vitrine de la friperie Fripes Merveilles, 151 rue Gaulthier de Rumilly, Amiens (Henriville). Next.js 16, Tailwind 4, Motion (Framer Motion), français et anglais.

- `npm run dev` : serveur local
- `npm run media` : prépare les photos (`assets/` → `public/media/`), l'icône Apple et l'image de partage
- `npm run contenu` : régénère `CONTENU.md`
- `npm run affichette` : régénère l'affichette A5 (`public/affichette-fripes-merveilles-a5.pdf`)

Mises à jour courantes, sans toucher au code :
- arrivages et pièces du moment : `data/arrivages.json`
- annonces et fermetures : `data/annonces.json`, `data/horaires.json`
- prix : `data/prix.json` ; avis : `data/avis.json` ; photos : `data/photos.json`
- textes : `locales/fr.json`, `locales/en.json`

Réservations et dépôt-vente : les formulaires ouvrent WhatsApp avec un récapitulatif (aucune donnée stockée).
