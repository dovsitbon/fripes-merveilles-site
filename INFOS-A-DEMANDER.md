# Infos à demander à la boutique

À récupérer de vive voix ou par message, puis à reporter dans les fichiers indiqués.

1. **Son prénom et l'histoire de la boutique** : depuis quand, pourquoi la seconde main, ce qui la rend unique. → `locales/*.json` (`blocks.esprit`), et une section « La boutique » si elle le souhaite.
2. **Le nom exact** : « Fripes Merveilles » ou « Fripes **et** Merveilles » (nom de la page Facebook et d'OpenStreetMap) ? → `data/site.json`, logo.
3. **Les catégories et les fourchettes de prix** : prix « à partir de » et prix haut par famille, seuil des « petits prix » (10 € par défaut). → `data/prix.json`, `data/arrivages.json` (`petitsPrix`).
4. **Les jours d'arrivage** : un jour fixe ? Annonce sur Facebook ? → FAQ, bandeau.
5. **Le dépôt-vente ou le rachat** : le propose-t-elle ? À quelles conditions (commission, durée, état, saisons) ? Sinon, faut-il retirer la page Dépôt-vente ? → `locales/*.json` (`depot`, `blocks.depot`, `services`).
6. **Les horaires exacts** (mercredi au samedi 10 h – 19 h à confirmer) et les congés. → `data/horaires.json`, `data/annonces.json`.
7. **La réservation** : combien de jours une pièce reste de côté ? → FAQ.
8. **Les moyens de paiement** (espèces, carte, sans contact, minimum CB ?). → FAQ.
9. **L'email** de la boutique. → `data/site.json`.
10. **Des photos de la boutique et des pièces** (voir `assets/A-PHOTOGRAPHIER.md`).
11. **Le logo**, s'il en existe un (enseigne, étiquettes, sacs). Sinon, valider le logo provisoire (cintre et étoile).
12. **SIRET**, raison sociale et nom du responsable. → `data/site.json` (`legal`), page Mentions légales.
13. **Accord pour reprendre 3 ou 4 avis Google** sur le site (avec le prénom des auteurs). → `data/avis.json`.
14. **Accès et stationnement** : précisions utiles (bus, parking proche). → `locales/*.json` (`infos.accessText`, FAQ).
