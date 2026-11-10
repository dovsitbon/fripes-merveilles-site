# Fripes Merveilles : contenu du site

Tous les textes du site, en français et en anglais, pour relecture avec la boutique. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; prix, arrivages, horaires, annonces, avis et photos dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.

Rien n'a été inventé côté chiffres : **aucun prix n'est renseigné** (affiché « Prix en boutique ») tant que la boutique ne les a pas donnés. La note Google (4.8/5, 76 avis) est celle relevée le 2026-11-10. **Aucun avis n'est cité** : le site reprend seulement les thèmes qui reviennent (la boutique, les prix, le choix, l'accueil, les bijoux, les petits trésors) ; les vrais avis iront dans `data/avis.json`, avec l'accord de leurs auteurs.

Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).

## Titre du hero : 3 propositions

1. **Seconde main, premier coup de cœur** *(Second hand, love at first sight)* ← en ligne
2. Des trésors à chaque visite *(Treasures on every visit)*
3. La friperie des belles trouvailles *(The thrift shop of lovely finds)*

## Prix par famille (`data/prix.json`)

### Femme

| Famille | Prix « à partir de » | Prix haut |
|---|---|---|
| **Hauts, tee-shirts, chemisiers**<br>*Tops, T-shirts, blouses* | à remplir | à remplir |
| **Pulls et gilets**<br>*Jumpers and cardigans* | à remplir | à remplir |
| **Robes et jupes**<br>*Dresses and skirts* | à remplir | à remplir |
| **Pantalons et jeans**<br>*Trousers and jeans* | à remplir | à remplir |
| **Vestes et manteaux**<br>*Jackets and coats* | à remplir | à remplir |

### Homme

| Famille | Prix « à partir de » | Prix haut |
|---|---|---|
| **Tee-shirts et chemises**<br>*T-shirts and shirts* | à remplir | à remplir |
| **Pulls et sweats**<br>*Jumpers and sweatshirts* | à remplir | à remplir |
| **Pantalons et jeans**<br>*Trousers and jeans* | à remplir | à remplir |
| **Vestes et manteaux**<br>*Jackets and coats* | à remplir | à remplir |

### Bijoux

| Famille | Prix « à partir de » | Prix haut |
|---|---|---|
| **Boucles d'oreilles**<br>*Earrings* | à remplir | à remplir |
| **Colliers et sautoirs**<br>*Necklaces* | à remplir | à remplir |
| **Bagues et bracelets**<br>*Rings and bracelets* | à remplir | à remplir |
| **Broches, montres, petits trésors**<br>*Brooches, watches, little treasures* | à remplir | à remplir |

### Sacs et accessoires

| Famille | Prix « à partir de » | Prix haut |
|---|---|---|
| **Sacs à main**<br>*Handbags* | à remplir | à remplir |
| **Foulards, ceintures, chapeaux**<br>*Scarves, belts, hats* | à remplir | à remplir |
| **Chaussures**<br>*Shoes* | à remplir | à remplir |

### Vintage

| Famille | Prix « à partir de » | Prix haut |
|---|---|---|
| **Pièces vintage choisies**<br>*Hand-picked vintage pieces* | à remplir | à remplir |

Seuil « petits prix » : 10 € (à valider).

## Arrivages (`data/arrivages.json`)

Arrivage du 2026-11-05. Les pièces ci-dessous sont **des exemples de présentation** (demo) à remplacer par les vraies pièces, avec photo et prix.

| Réf. | Pièce | Catégorie | Taille | Prix | Statut |
|---|---|---|---|---|---|
| A-001 | Manteau long en laine / *Long wool coat* | Femme | M | à remplir | dispo · exemple |
| A-002 | Robe fleurie années 70 / *1970s floral dress* | Vintage | 38 | à remplir | dispo · exemple |
| A-003 | Veste en jean délavée / *Washed denim jacket* | Homme | L | à remplir | dispo · exemple |
| B-014 | Bague à pierre verte / *Green stone ring* | Bijoux | Unique | à remplir | dispo · exemple |
| S-007 | Sac en cuir bordeaux / *Burgundy leather bag* | Sacs et accessoires | Unique | à remplir | reserve · exemple |
| A-004 | Pull en grosse maille / *Chunky knit jumper* | Femme | S | à remplir | dispo · exemple |
| A-005 | Chemise en flanelle à carreaux / *Checked flannel shirt* | Homme | M | à remplir | dispo · exemple |
| B-015 | Boucles d'oreilles dorées / *Gold-tone earrings* | Bijoux | Unique | à remplir | dispo · exemple |

## Horaires (`data/horaires.json`)

- lundi : fermé
- mardi : fermé
- mercredi : 10:00 – 19:00
- jeudi : 10:00 – 19:00
- vendredi : 10:00 – 19:00
- samedi : 10:00 – 19:00
- dimanche : fermé

Fermetures exceptionnelles : Noël (2026-12-25), Jour de l'an (2027-01-01).

## Bandeau d'annonces (`data/annonces.json`)

- **Par défaut** : La boutique vous accueille du mercredi au samedi, de 10 h à 19 h. *(The shop is open Wednesday to Saturday, 10am to 7pm.)*
- **Arrivage de moins de 7 jours** : Nouvel arrivage cette semaine : de nouvelles pièces vous attendent en boutique. *(New arrivals this week: fresh pieces are waiting for you in the shop.)*
- **2026-12-20 → 2026-12-25** : Fermé le vendredi 25 décembre. D'ici là, la boutique déborde d'idées cadeaux de seconde main. *(Closed on Friday 25 December. Until then, the shop is full of second-hand gift ideas.)* — lien « Horaires »
- **2026-12-28 → 2027-01-01** : Fermé le vendredi 1er janvier. Belle année, pleine de trouvailles. *(Closed on Friday 1 January. Here's to a year full of good finds.)* — lien « Horaires »

## Textes du site

Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation de l'atelier.

### meta

| Clé | Français | English | |
|---|---|---|---|
| `meta.title` | Friperie et vintage à Amiens, Henriville | Fripes Merveilles | Thrift and vintage shop in Amiens, Henriville | Fripes Merveilles | |
| `meta.description` | Fripes Merveilles, friperie du quartier Henriville à Amiens : vêtements femme et homme, bijoux, sacs et accessoires de seconde main, vintage et petits prix. Arrivages chaque semaine, réservation par WhatsApp. | Fripes Merveilles, a thrift shop in the Henriville area of Amiens: second-hand women's and men's clothing, jewellery, bags and accessories, vintage and bargains. New arrivals every week, reserve on WhatsApp. | |
| `meta.ogAlt` | Fripes Merveilles, friperie et vintage à Amiens | Fripes Merveilles, thrift and vintage shop in Amiens | |

### nav

| Clé | Français | English | |
|---|---|---|---|
| `nav.skip` | Aller au contenu | Skip to content | |
| `nav.home` | Fripes Merveilles, accueil | Fripes Merveilles, home | |
| `nav.menu` | Menu | Menu | |
| `nav.close` | Fermer le menu | Close menu | |
| `nav.lang` | Langue | Language | |
| `nav.arrivages` | Arrivages | New in | |
| `nav.vetements` | Vêtements | Clothing | |
| `nav.bijoux` | Bijoux | Jewellery | |
| `nav.depot` | Dépôt-vente | Consignment | |
| `nav.infos` | Infos | Visit | |
| `nav.prix` | Prix | Prices | |
| `nav.reserver` | Réserver une pièce | Reserve a piece | |
| `nav.call` | Appeler | Call | |
| `nav.whatsapp` | WhatsApp | WhatsApp | |
| `nav.facebook` | Fripes Merveilles sur Facebook | Fripes Merveilles on Facebook | |

### intro

| Clé | Français | English | |
|---|---|---|---|
| `intro.skip` | Passer | Skip | |

### announce

| Clé | Français | English | |
|---|---|---|---|
| `announce.close` | Fermer l'annonce | Close announcement | |

### status

| Clé | Français | English | |
|---|---|---|---|
| `status.open` | Ouvert maintenant | Open now | |
| `status.until` | jusqu'à {time} | until {time} | |
| `status.closed` | Fermé | Closed | |
| `status.reopens` | réouverture {day} à {time} | opens {day} at {time} | |
| `status.today` | aujourd'hui | today | |
| `status.tomorrow` | demain | tomorrow | |

### rating

| Clé | Français | English | |
|---|---|---|---|
| `rating.label` | {value}/5 sur Google | {value}/5 on Google | |
| `rating.count` | {count} avis | {count} reviews | |
| `rating.asOf` | Note relevée en {date} | Rating as of {date} | |

### hero

| Clé | Français | English | |
|---|---|---|---|
| `hero.eyebrow` | Friperie · Seconde main · Henriville, Amiens | Thrift shop · Second hand · Henriville, Amiens | |
| `hero.title` | Seconde main, *premier coup de cœur* | Second hand, *love at first sight* | |
| `hero.lead` | Des vêtements, des bijoux et des petits trésors choisis un à un, qui n'attendent qu'une seconde vie. On entre pour jeter un œil, on ressort avec une trouvaille. | Clothes, jewellery and little treasures picked one by one, each waiting for a second life. You come in for a look, you leave with a find. | |
| `hero.arrivages` | Voir les arrivages | See what's new | |
| `hero.venir` | Venir à la boutique | Visit the shop | |
| `hero.slot` | Photo de la boutique à venir | Shop photo coming soon | |
| `hero.slides` | Photos de la boutique | Photos of the shop | |
| `hero.slide` | Photo {n} sur {total} | Photo {n} of {total} | |

### tiles

| Clé | Français | English | |
|---|---|---|---|
| `tiles.eyebrow` | Les univers | Browse | |
| `tiles.title` | Par où commencer la chine ? | Where shall we start digging? | |
| `tiles.from` | À partir de {price} | From {price} | |
| `tiles.inShop` | Prix en boutique | Prices in store | |
| `tiles.items.femme.title` | Femme | Women | |
| `tiles.items.femme.text` | Robes, mailles, manteaux et jeans, dans toutes les tailles. | Dresses, knitwear, coats and jeans, in every size. | |
| `tiles.items.homme.title` | Homme | Men | |
| `tiles.items.homme.text` | Chemises, vestes, pulls et denim qui ont du vécu. | Shirts, jackets, jumpers and denim with a past. | |
| `tiles.items.bijoux.title` | Bijoux | Jewellery | |
| `tiles.items.bijoux.text` | Bagues, boucles, colliers et broches d'hier et d'aujourd'hui. | Rings, earrings, necklaces and brooches, old and new. | |
| `tiles.items.sacs.title` | Sacs et accessoires | Bags and accessories | |
| `tiles.items.sacs.text` | Sacs, foulards, ceintures et chapeaux pour finir la tenue. | Bags, scarves, belts and hats to finish the look. | |
| `tiles.items.vintage.title` | Vintage | Vintage | |
| `tiles.items.vintage.text` | Les pièces d'une autre époque, mises de côté pour vous. | Pieces from another era, set aside for you. | |
| `tiles.items.petits-prix.title` | Petits prix | Bargains | |
| `tiles.items.petits-prix.text` | Les bonnes affaires qui font plaisir sans y penser. | Good deals that make you smile without a second thought. | |

### services

| Clé | Français | English | |
|---|---|---|---|
| `services.label` | Ce que la boutique vous propose | What the shop offers | |
| `services.items.0.title` | Des arrivages chaque semaine | New in every week | |
| `services.items.0.text` | Le portant change souvent : repassez, il y a toujours du nouveau. | The rails change often: come back, there's always something new. | |
| `services.items.1.title` | Des petits prix | Gentle prices | |
| `services.items.1.text` | La seconde main, c'est bien habillé sans se ruiner. | Second hand means dressing well without breaking the bank. | |
| `services.items.2.title` | Réservation par WhatsApp | Reserve on WhatsApp | |
| `services.items.2.text` | Une pièce vous plaît ? Un message, et on vous la met de côté. | Like a piece? Send a message and we'll put it aside for you. | |
| `services.items.3.title` | Dépôt-vente | Consignment | **à valider (dépôt-vente)** |
| `services.items.3.text` | Des vêtements qui dorment dans vos placards ? Parlons-en (à confirmer). | Clothes asleep in your wardrobe? Let's talk (to be confirmed). | **à valider (dépôt-vente)** |

### arrivals

| Clé | Français | English | |
|---|---|---|---|
| `arrivals.eyebrow` | Arrivages | New in | |
| `arrivals.title` | Les pièces du moment | Pieces of the moment | |
| `arrivals.lead` | Chaque pièce est unique : quand elle part, elle ne revient pas. Réservez-la sur WhatsApp, on la garde de côté pour vous. | Every piece is one of a kind: once it's gone, it's gone. Reserve it on WhatsApp and we'll keep it aside for you. | |
| `arrivals.dated` | Arrivage du {date} | Arrivals of {date} | |
| `arrivals.demo` | Exemples de présentation : les vraies pièces et leurs photos arrivent très vite. | Layout examples: the real pieces and their photos are coming very soon. | |
| `arrivals.all` | Voir tous les arrivages | See all new arrivals | |
| `arrivals.reserve` | Réserver sur WhatsApp | Reserve on WhatsApp | |
| `arrivals.reserveForm` | Réserver cette pièce | Reserve this piece | |
| `arrivals.status.dispo` | Disponible | Available | |
| `arrivals.status.reserve` | Réservée | Reserved | |
| `arrivals.status.vendu` | Partie | Gone | |
| `arrivals.size` | Taille | Size | |
| `arrivals.unique` | Taille unique | One size | |
| `arrivals.inShop` | Prix en boutique | Price in store | |
| `arrivals.from` | dès {price} | from {price} | |
| `arrivals.ref` | Réf. | Ref. | |
| `arrivals.colors` | Couleurs | Colours | |
| `arrivals.photoSoon` | Photo à venir | Photo coming soon | |
| `arrivals.categories.femme` | Femme | Women | |
| `arrivals.categories.homme` | Homme | Men | |
| `arrivals.categories.bijoux` | Bijoux | Jewellery | |
| `arrivals.categories.sacs` | Sacs et accessoires | Bags and accessories | |
| `arrivals.categories.vintage` | Vintage | Vintage | |
| `arrivals.filters.title` | Filtrer | Filter | |
| `arrivals.filters.category` | Catégorie | Category | |
| `arrivals.filters.size` | Taille | Size | |
| `arrivals.filters.price` | Prix | Price | |
| `arrivals.filters.all` | Tout | All | |
| `arrivals.filters.reset` | Tout effacer | Clear all | |
| `arrivals.filters.results` | {n} pièce(s) | {n} piece(s) | |
| `arrivals.filters.none` | Aucune pièce ne correspond pour le moment. Les arrivages changent chaque semaine : élargissez votre recherche ou écrivez-nous ce que vous cherchez. | Nothing matches right now. The rails change every week: widen your search or tell us what you're looking for. | |
| `arrivals.filters.ask` | Demander sur WhatsApp | Ask on WhatsApp | |
| `arrivals.filters.prices.all` | Tous les prix | All prices | |
| `arrivals.filters.prices.petits` | Jusqu'à {n} € | Up to €{n} | |
| `arrivals.filters.prices.mid` | De {a} à {b} € | €{a} to €{b} | |
| `arrivals.filters.prices.high` | Plus de {n} € | Over €{n} | |

### blocks

| Clé | Français | English | |
|---|---|---|---|
| `blocks.esprit.eyebrow` | La boutique | The shop | **à valider (histoire de la boutique)** |
| `blocks.esprit.title` | Un cabinet de curiosités où l'on chine | A cabinet of curiosities made for rummaging | **à valider (histoire de la boutique)** |
| `blocks.esprit.text` | Ici, on prend le temps de fouiller. Les portants changent au fil des arrivages, les bijoux brillent dans leurs vitrines et chaque visite réserve sa surprise. L'accueil est simple et chaleureux : on vous conseille si vous le souhaitez, on vous laisse rêver sinon. | Here, you take your time. The rails change with every delivery, the jewellery glints in its cases and every visit holds a surprise. The welcome is simple and warm: advice if you want it, room to dream if you don't. | **à valider (histoire de la boutique)** |
| `blocks.esprit.cta` | Venir à la boutique | Visit the shop | **à valider (histoire de la boutique)** |
| `blocks.bijoux.eyebrow` | Bijoux et accessoires | Jewellery and accessories | |
| `blocks.bijoux.title` | Les petits trésors qui changent tout | The little treasures that change everything | |
| `blocks.bijoux.text` | Une bague ancienne, une broche oubliée, un sac qui a déjà voyagé : ce sont souvent les détails qui font la tenue. Ils sont choisis avec soin et ne restent jamais longtemps. | An old ring, a forgotten brooch, a bag that has already travelled: it's often the details that make the outfit. They're chosen with care and never stay long. | |
| `blocks.bijoux.cta` | Voir les bijoux | See the jewellery | |
| `blocks.depot.eyebrow` | Dépôt-vente | Consignment | **à valider (dépôt-vente)** |
| `blocks.depot.title` | Vos belles pièces méritent une seconde histoire | Your favourite pieces deserve a second story | **à valider (dépôt-vente)** |
| `blocks.depot.text` | Vous avez des vêtements, des sacs ou des bijoux en bon état que vous ne portez plus ? Présentez-les nous en quelques photos : la boutique vous dira ce qu'elle peut en faire. Formule de dépôt-vente à confirmer avec la boutique. | Have clothes, bags or jewellery in good condition that you no longer wear? Show us a few photos and the shop will tell you what it can do. Consignment terms to be confirmed with the shop. | **à valider (dépôt-vente)** |
| `blocks.depot.cta` | Proposer des vêtements | Offer your clothes | **à valider (dépôt-vente)** |

### reviews

| Clé | Français | English | |
|---|---|---|---|
| `reviews.eyebrow` | Ils en parlent | What people say | |
| `reviews.title` | Ce qui revient le plus dans les avis | What comes up most in the reviews | |
| `reviews.themes.0` | La boutique | The shop | |
| `reviews.themes.1` | Les prix | The prices | |
| `reviews.themes.2` | Le choix | The choice | |
| `reviews.themes.3` | L'accueil sympathique | The friendly welcome | |
| `reviews.themes.4` | Les bijoux | The jewellery | |
| `reviews.themes.5` | Les petits trésors | The little treasures | |
| `reviews.cta` | Lire les avis sur Google | Read the reviews on Google | |

### infos

| Clé | Français | English | |
|---|---|---|---|
| `infos.eyebrow` | Infos pratiques | Practical info | |
| `infos.title` | Venir à la boutique | Visit the shop | |
| `infos.address` | Adresse | Address | |
| `infos.route` | Itinéraire | Directions | |
| `infos.phone` | Téléphone | Phone | |
| `infos.whatsapp` | Écrire sur WhatsApp | Message on WhatsApp | |
| `infos.hours` | Horaires | Opening hours | |
| `infos.access` | Accès et stationnement | Getting here and parking | |
| `infos.accessText` | Dans le quartier Henriville, au sud du centre-ville, à une quinzaine de minutes à pied de la gare d'Amiens. Stationnement dans les rues alentour. | In the Henriville area, south of the city centre, about fifteen minutes' walk from Amiens station. Street parking nearby. | **à valider (accès, stationnement)** |
| `infos.mapTitle` | Plan d'accès à Fripes Merveilles, 151 rue Gaulthier de Rumilly à Amiens | Map to Fripes Merveilles, 151 rue Gaulthier de Rumilly, Amiens | |
| `infos.closedDay` | Fermé | Closed | |
| `infos.closures` | Fermetures exceptionnelles | Exceptional closures | |

### faq

| Clé | Français | English | |
|---|---|---|---|
| `faq.eyebrow` | Questions fréquentes | Questions | |
| `faq.title` | Avant de passer | Before you drop by | |
| `faq.items.0.q` | Quels sont vos horaires ? | What are your opening hours? | **à valider (horaires)** |
| `faq.items.0.a` | La boutique est ouverte du mercredi au samedi, de 10 h à 19 h. Les fermetures exceptionnelles sont annoncées en haut du site. | The shop is open Wednesday to Saturday, 10am to 7pm. Exceptional closures are announced at the top of the site. | **à valider (horaires)** |
| `faq.items.1.q` | Quand arrivent les nouvelles pièces ? | When do new pieces arrive? | **à valider (jours d'arrivage)** |
| `faq.items.1.a` | Il y a de nouveaux arrivages chaque semaine. Les pièces du moment sont visibles sur la page Arrivages, et le bandeau du site vous prévient quand un arrivage vient d'avoir lieu. | There are new arrivals every week. The pieces of the moment are on the New in page, and the banner at the top tells you when a delivery has just come in. | **à valider (jours d'arrivage)** |
| `faq.items.2.q` | Comment réserver une pièce ? | How do I reserve a piece? | **à valider (durée de mise de côté)** |
| `faq.items.2.a` | Cliquez sur « Réserver sur WhatsApp » sous la pièce, ou remplissez le formulaire de réservation : un message tout prêt part vers la boutique. La pièce est gardée de côté quelques jours, le temps de passer la chercher. | Tap “Reserve on WhatsApp” under the piece, or fill in the reservation form: a ready-made message goes to the shop. The piece is kept aside for a few days, so you have time to come and collect it. | **à valider (durée de mise de côté)** |
| `faq.items.3.q` | Quels moyens de paiement acceptez-vous ? | Which payment methods do you accept? | **à valider (moyens de paiement)** |
| `faq.items.3.a` | Les espèces et la carte bancaire. En cas de doute, un message sur WhatsApp suffit pour vérifier. | Cash and card. If in doubt, a quick WhatsApp message will tell you. | **à valider (moyens de paiement)** |
| `faq.items.4.q` | Faites-vous du dépôt-vente ? | Do you take clothes on consignment? | **à valider (dépôt-vente)** |
| `faq.items.4.a` | C'est à l'étude. Présentez-nous vos vêtements par le formulaire Dépôt-vente, photos à l'appui : la boutique vous répond directement sur WhatsApp. | It's being considered. Tell us about your clothes through the Consignment form, with photos: the shop replies directly on WhatsApp. | **à valider (dépôt-vente)** |
| `faq.items.5.q` | Où se garer ? | Where can I park? | **à valider (stationnement)** |
| `faq.items.5.a` | La boutique est au 151 rue Gaulthier de Rumilly, dans le quartier Henriville. On se gare dans les rues voisines, et la gare d'Amiens est à une quinzaine de minutes à pied. | The shop is at 151 rue Gaulthier de Rumilly, in the Henriville area. Park in the nearby streets; Amiens station is about fifteen minutes away on foot. | **à valider (stationnement)** |

### footer

| Clé | Français | English | |
|---|---|---|---|
| `footer.tagline` | Friperie, bijoux et accessoires de seconde main, dans le quartier Henriville à Amiens. | Second-hand clothing, jewellery and accessories in the Henriville area of Amiens. | |
| `footer.contact` | Contact | Contact | |
| `footer.pages` | Le site | Site | |
| `footer.days` | Du mercredi au samedi<br>10 h – 19 h | Wednesday to Saturday<br>10am – 7pm | **à valider (horaires)** |
| `footer.closed` | Fermé du dimanche au mardi | Closed Sunday to Tuesday | |
| `footer.rights` | Fripes Merveilles, Amiens | Fripes Merveilles, Amiens | |
| `footer.legal` | Mentions légales | Legal notice | |

### reserve

| Clé | Français | English | |
|---|---|---|---|
| `reserve.eyebrow` | Réservation | Reservation | |
| `reserve.title` | Réserver une pièce | Reserve a piece | |
| `reserve.lead` | Dites-nous quelle pièce vous fait envie : le message part sur WhatsApp et la boutique vous la met de côté. | Tell us which piece caught your eye: the message goes out on WhatsApp and the shop puts it aside for you. | |
| `reserve.chosen` | Pièce choisie | Chosen piece | |
| `reserve.change` | Changer | Change | |
| `reserve.fields.piece` | Pièce souhaitée | Piece you'd like | |
| `reserve.fields.piecePh` | Ex. la robe fleurie vue en vitrine, la bague réf. B-014… | E.g. the floral dress in the window, ring ref. B-014… | |
| `reserve.fields.size` | Taille | Size | |
| `reserve.fields.sizePh` | Ex. M, 38, taille unique | E.g. M, 38, one size | |
| `reserve.fields.name` | Votre nom | Your name | |
| `reserve.fields.phone` | Votre téléphone | Your phone number | |
| `reserve.fields.message` | Un mot pour la boutique | A note for the shop | |
| `reserve.fields.messagePh` | Le jour où vous pensez passer, une question sur la pièce… | When you plan to drop by, a question about the piece… | |
| `reserve.fields.optional` | facultatif | optional | |
| `reserve.errors.piece` | Indiquez la pièce qui vous intéresse. | Tell us which piece you're interested in. | |
| `reserve.errors.name` | Indiquez votre nom. | Please enter your name. | |
| `reserve.errors.phone` | Indiquez un numéro de téléphone valide. | Please enter a valid phone number. | |
| `reserve.submit` | Envoyer sur WhatsApp | Send on WhatsApp | |
| `reserve.note` | WhatsApp s'ouvre avec votre message tout prêt : il ne reste qu'à l'envoyer. Aucun paiement en ligne. | WhatsApp opens with your message ready: all you have to do is send it. No online payment. | |
| `reserve.sent` | WhatsApp s'est ouvert dans un nouvel onglet. Si rien ne s'est passé, utilisez le bouton ci-dessous ou appelez la boutique. | WhatsApp opened in a new tab. If nothing happened, use the button below or call the shop. | |
| `reserve.again` | Ouvrir WhatsApp | Open WhatsApp | |
| `reserve.preferCall` | Vous préférez appeler ? | Rather call? | |
| `reserve.recapTitle` | Réservation d'une pièce, Fripes Merveilles | Piece reservation, Fripes Merveilles | |
| `reserve.recap.piece` | Pièce | Piece | |
| `reserve.recap.ref` | Référence | Reference | |
| `reserve.recap.size` | Taille | Size | |
| `reserve.recap.name` | Nom | Name | |
| `reserve.recap.phone` | Téléphone | Phone | |
| `reserve.recap.message` | Message | Message | |
| `reserve.recap.from` | Envoyé depuis le site | Sent from the website | |

### depot

| Clé | Français | English | |
|---|---|---|---|
| `depot.eyebrow` | Dépôt-vente | Consignment | **à valider (dépôt-vente ou rachat)** |
| `depot.title` | Proposer des vêtements | Offer your clothes | **à valider (dépôt-vente ou rachat)** |
| `depot.lead` | Présentez-nous ce que vous aimeriez confier à la boutique. Le dépôt-vente est à confirmer avec la boutique : elle vous répond directement sur WhatsApp. | Tell us what you'd like to leave with the shop. Consignment is to be confirmed with the shop, which replies directly on WhatsApp. | **à valider (dépôt-vente ou rachat)** |
| `depot.steps.0.title` | Vous décrivez | You describe | **à valider (dépôt-vente ou rachat)** |
| `depot.steps.0.text` | Le type de pièces et la quantité, en quelques clics. | The kind of pieces and how many, in a few clicks. | **à valider (dépôt-vente ou rachat)** |
| `depot.steps.1.title` | Vous envoyez des photos | You send photos | **à valider (dépôt-vente ou rachat)** |
| `depot.steps.1.text` | Directement dans la conversation WhatsApp qui s'ouvre. | Right in the WhatsApp chat that opens. | **à valider (dépôt-vente ou rachat)** |
| `depot.steps.2.title` | La boutique vous répond | The shop replies | **à valider (dépôt-vente ou rachat)** |
| `depot.steps.2.text` | Ce qu'elle peut prendre, et comment on s'organise. | What it can take, and how to arrange it. | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.types` | Type de vêtements | Kind of clothing | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.typeList.femme` | Femme | Women | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.typeList.homme` | Homme | Men | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.typeList.enfant` | Enfant | Children | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.typeList.bijoux` | Bijoux | Jewellery | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.typeList.sacs` | Sacs et accessoires | Bags and accessories | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.typeList.chaussures` | Chaussures | Shoes | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.typeList.vintage` | Vintage | Vintage | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.quantity` | Quantité | How many | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.quantityList.few` | Quelques pièces (1 à 5) | A few pieces (1 to 5) | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.quantityList.some` | Un petit sac (5 à 15) | A small bag (5 to 15) | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.quantityList.lot` | Un lot (plus de 15) | A batch (over 15) | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.photos` | Photos | Photos | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.photosList.yes` | J'envoie mes photos dans WhatsApp | I'll send my photos on WhatsApp | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.photosList.later` | Je les enverrai plus tard | I'll send them later | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.photosHint` | WhatsApp ne permet pas de joindre des photos depuis un site : vous les ajouterez dans la conversation, juste après votre message. | WhatsApp doesn't let a website attach photos: you'll add them in the chat, right after your message. | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.name` | Votre nom | Your name | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.phone` | Votre téléphone | Your phone number | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.message` | Précisions | Details | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.messagePh` | Marques, état, tailles, période vintage… | Brands, condition, sizes, vintage era… | **à valider (dépôt-vente ou rachat)** |
| `depot.fields.optional` | facultatif | optional | **à valider (dépôt-vente ou rachat)** |
| `depot.errors.types` | Choisissez au moins un type de pièces. | Pick at least one kind of piece. | **à valider (dépôt-vente ou rachat)** |
| `depot.errors.quantity` | Indiquez la quantité. | Tell us how many. | **à valider (dépôt-vente ou rachat)** |
| `depot.errors.name` | Indiquez votre nom. | Please enter your name. | **à valider (dépôt-vente ou rachat)** |
| `depot.errors.phone` | Indiquez un numéro de téléphone valide. | Please enter a valid phone number. | **à valider (dépôt-vente ou rachat)** |
| `depot.submit` | Envoyer sur WhatsApp | Send on WhatsApp | **à valider (dépôt-vente ou rachat)** |
| `depot.recapTitle` | Proposition de dépôt-vente, Fripes Merveilles | Consignment proposal, Fripes Merveilles | **à valider (dépôt-vente ou rachat)** |
| `depot.recap.types` | Type de vêtements | Kind of clothing | **à valider (dépôt-vente ou rachat)** |
| `depot.recap.quantity` | Quantité | How many | **à valider (dépôt-vente ou rachat)** |
| `depot.recap.photos` | Photos | Photos | **à valider (dépôt-vente ou rachat)** |
| `depot.recap.name` | Nom | Name | **à valider (dépôt-vente ou rachat)** |
| `depot.recap.phone` | Téléphone | Phone | **à valider (dépôt-vente ou rachat)** |
| `depot.recap.message` | Précisions | Details | **à valider (dépôt-vente ou rachat)** |
| `depot.recap.from` | Envoyé depuis le site | Sent from the website | **à valider (dépôt-vente ou rachat)** |

### prices

| Clé | Français | English | |
|---|---|---|---|
| `prices.eyebrow` | Prix | Prices | |
| `prices.title` | Des prix doux, pièce par pièce | Gentle prices, piece by piece | |
| `prices.lead` | En friperie, chaque pièce a son prix, selon sa matière, sa marque et son état. Voici les repères par famille : le prix exact est sur l'étiquette. | In a thrift shop every piece has its own price, depending on fabric, label and condition. Here are the guide prices by family: the exact price is on the tag. | |
| `prices.head.family` | Famille | Family | |
| `prices.head.price` | Prix | Price | |
| `prices.inShop` | Prix en boutique | Price in store | |
| `prices.from` | à partir de {price} | from {price} | |
| `prices.range` | {from} – {to} | {from} – {to} | |
| `prices.note` | Prix indicatifs, susceptibles de varier selon les arrivages. | Guide prices, which may vary with each delivery. | |
| `prices.petits` | Le coin des petits prix : des pièces à {n} € ou moins, à dénicher en boutique. | The bargain corner: pieces at €{n} or less, waiting to be found in store. | |

### pages

| Clé | Français | English | |
|---|---|---|---|
| `pages.arrivages.metaTitle` | Arrivages et pièces du moment | Fripes Merveilles, friperie à Amiens | New in and pieces of the moment | Fripes Merveilles, thrift shop in Amiens | |
| `pages.arrivages.metaDescription` | Les dernières pièces arrivées chez Fripes Merveilles à Amiens : vêtements femme et homme, bijoux, sacs, vintage. Filtrez par catégorie, taille et prix, réservez sur WhatsApp. | The latest pieces at Fripes Merveilles in Amiens: women's and men's clothing, jewellery, bags, vintage. Filter by category, size and price, reserve on WhatsApp. | |
| `pages.arrivages.eyebrow` | Arrivages | New in | |
| `pages.arrivages.title` | Les pièces du moment | Pieces of the moment | |
| `pages.arrivages.lead` | Filtrez par catégorie, taille ou prix. Une pièce vous plaît ? Réservez-la sur WhatsApp, elle vous attend en boutique. | Filter by category, size or price. Like a piece? Reserve it on WhatsApp and it'll wait for you in the shop. | |
| `pages.prix.metaTitle` | Prix de la friperie | Fripes Merveilles, Amiens | Thrift shop prices | Fripes Merveilles, Amiens | |
| `pages.prix.metaDescription` | Les prix de Fripes Merveilles à Amiens, famille par famille : vêtements femme et homme, bijoux, sacs et accessoires, vintage. Prix doux, petits prix en boutique. | Prices at Fripes Merveilles in Amiens, family by family: women's and men's clothing, jewellery, bags and accessories, vintage. Gentle prices, bargains in store. | |
| `pages.reserver.metaTitle` | Réserver une pièce | Fripes Merveilles, Amiens | Reserve a piece | Fripes Merveilles, Amiens | |
| `pages.reserver.metaDescription` | Réservez une pièce de la friperie Fripes Merveilles à Amiens : un message WhatsApp tout prêt, la pièce est mise de côté pour vous. | Reserve a piece at Fripes Merveilles thrift shop in Amiens: a ready-made WhatsApp message, and the piece is put aside for you. | |
| `pages.depot.metaTitle` | Dépôt-vente de vêtements à Amiens | Fripes Merveilles | Clothing consignment in Amiens | Fripes Merveilles | |
| `pages.depot.metaDescription` | Proposez vos vêtements, sacs et bijoux à Fripes Merveilles, friperie du quartier Henriville à Amiens : décrivez vos pièces et envoyez vos photos sur WhatsApp. | Offer your clothes, bags and jewellery to Fripes Merveilles, a thrift shop in the Henriville area of Amiens: describe your pieces and send photos on WhatsApp. | |
| `pages.friperie.metaTitle` | Friperie à Amiens, quartier Henriville | Fripes Merveilles | Thrift shop in Amiens, Henriville | Fripes Merveilles | |
| `pages.friperie.metaDescription` | Une friperie à Amiens pour chiner vêtements femme et homme, vintage et seconde main à petits prix. Arrivages chaque semaine, 151 rue Gaulthier de Rumilly. | A thrift shop in Amiens for women's and men's clothing, vintage and second hand at gentle prices. New in every week, 151 rue Gaulthier de Rumilly. | |
| `pages.friperie.eyebrow` | Friperie à Amiens | Thrift shop in Amiens | |
| `pages.friperie.title` | Une friperie à Amiens, côté Henriville | A thrift shop in Amiens, in Henriville | |
| `pages.friperie.intro` | Fripes Merveilles, c'est la friperie du quartier Henriville : des vêtements de seconde main pour femme et homme, du vintage, des bijoux et des accessoires, avec de nouvelles pièces chaque semaine. | Fripes Merveilles is the Henriville neighbourhood thrift shop: second-hand clothing for women and men, vintage, jewellery and accessories, with new pieces every week. | |
| `pages.friperie.cta` | Voir les arrivages | See what's new | |
| `pages.friperie.listTitle` | Ce que l'on trouve en boutique | What you'll find in store | |
| `pages.friperie.list.0.title` | Vêtements femme | Women's clothing | |
| `pages.friperie.list.0.text` | Robes, jupes, mailles, chemisiers, jeans, vestes et manteaux, du XS aux grandes tailles selon les arrivages. | Dresses, skirts, knitwear, blouses, jeans, jackets and coats, from XS to larger sizes depending on deliveries. | |
| `pages.friperie.list.1.title` | Vêtements homme | Men's clothing | |
| `pages.friperie.list.1.text` | Chemises, pulls, sweats, denim et vestes, des basiques aux pièces de caractère. | Shirts, jumpers, sweatshirts, denim and jackets, from basics to pieces with character. | |
| `pages.friperie.list.2.title` | Vintage | Vintage | |
| `pages.friperie.list.2.text` | Des pièces d'autres décennies, choisies pour leur coupe, leur matière ou leur histoire. | Pieces from other decades, chosen for their cut, fabric or story. | |
| `pages.friperie.list.3.title` | Petits prix | Bargains | |
| `pages.friperie.list.3.text` | Un coin de bonnes affaires pour s'habiller bien sans se ruiner. | A corner of good deals to dress well without breaking the bank. | |
| `pages.friperie.whyTitle` | Pourquoi chiner en seconde main | Why shop second hand | |
| `pages.friperie.why.0.title` | Des pièces uniques | One-of-a-kind pieces | |
| `pages.friperie.why.0.text` | Personne ne portera la même chose que vous : chaque vêtement est un exemplaire. | Nobody will wear the same thing as you: every garment is a single copy. | |
| `pages.friperie.why.1.title` | Un geste pour la planète | Kinder to the planet | |
| `pages.friperie.why.1.text` | Donner une seconde vie à un vêtement, c'est autant de tissu qui ne se fabrique pas. | Giving clothing a second life means less new fabric being made. | |
| `pages.friperie.why.2.title` | Des matières qui durent | Fabrics that last | |
| `pages.friperie.why.2.text` | Laine, coton épais, cuir : la seconde main recèle souvent de belles qualités. | Wool, heavy cotton, leather: second hand often hides great quality. | |
| `pages.bijoux.metaTitle` | Bijoux vintage à Amiens | Fripes Merveilles, Henriville | Vintage jewellery in Amiens | Fripes Merveilles, Henriville | |
| `pages.bijoux.metaDescription` | Bijoux vintage et de seconde main à Amiens : bagues, boucles d'oreilles, colliers, broches, montres. Des petits trésors à dénicher chez Fripes Merveilles, quartier Henriville. | Vintage and second-hand jewellery in Amiens: rings, earrings, necklaces, brooches, watches. Little treasures to find at Fripes Merveilles, Henriville. | |
| `pages.bijoux.eyebrow` | Bijoux vintage à Amiens | Vintage jewellery in Amiens | |
| `pages.bijoux.title` | Bijoux vintage et petits trésors, à Amiens | Vintage jewellery and little treasures, in Amiens | |
| `pages.bijoux.intro` | Les bijoux sont l'une des fiertés de Fripes Merveilles : bagues, boucles, colliers et broches de seconde main, choisis pour leur charme. Ils partent vite : passez souvent, ou réservez sur WhatsApp. | Jewellery is one of Fripes Merveilles' prides: second-hand rings, earrings, necklaces and brooches, chosen for their charm. They go fast: drop by often, or reserve on WhatsApp. | |
| `pages.bijoux.cta` | Voir les bijoux du moment | See this week's jewellery | |
| `pages.bijoux.listTitle` | Dans les vitrines | In the display cases | |
| `pages.bijoux.list.0.title` | Bagues | Rings | |
| `pages.bijoux.list.0.text` | Pierres de couleur, chevalières, anneaux fins : il y en a pour chaque main. | Coloured stones, signet rings, fine bands: there's one for every hand. | |
| `pages.bijoux.list.1.title` | Boucles d'oreilles | Earrings | |
| `pages.bijoux.list.1.text` | Créoles, pendantes, clips d'époque, pour toutes les envies. | Hoops, drops and vintage clip-ons, whatever your mood. | |
| `pages.bijoux.list.2.title` | Colliers et sautoirs | Necklaces | |
| `pages.bijoux.list.2.text` | Chaînes, perles et pendentifs qui réveillent une tenue simple. | Chains, beads and pendants to lift a simple outfit. | |
| `pages.bijoux.list.3.title` | Broches et montres | Brooches and watches | |
| `pages.bijoux.list.3.text` | Les petits objets d'hier, à porter ou à offrir. | Little objects from the past, to wear or to give. | |
| `pages.bijoux.whyTitle` | Offrir un bijou de seconde main | Giving second-hand jewellery | |
| `pages.bijoux.why.0.title` | Un cadeau qui a une histoire | A gift with a story | |
| `pages.bijoux.why.0.text` | Un bijou ancien raconte quelque chose : c'est ce qui le rend précieux. | An old piece of jewellery has something to tell: that's what makes it precious. | |
| `pages.bijoux.why.1.title` | Un prix doux | A gentle price | |
| `pages.bijoux.why.1.text` | La seconde main permet d'offrir du beau sans compter chaque euro. | Second hand lets you give something beautiful without counting every euro. | |
| `pages.bijoux.why.2.title` | Mis de côté pour vous | Put aside for you | |
| `pages.bijoux.why.2.text` | Repéré sur le site ? Un message WhatsApp et il vous attend en boutique. | Spotted it on the site? One WhatsApp message and it waits for you in the shop. | |

### legal

| Clé | Français | English | |
|---|---|---|---|
| `legal.metaTitle` | Mentions légales | Fripes Merveilles | Legal notice | Fripes Merveilles | |
| `legal.title` | Mentions légales | Legal notice | |
| `legal.editor` | Éditeur | Publisher | |
| `legal.editorText` | {company}, friperie, 151 rue Gaulthier de Rumilly, 80000 Amiens. Téléphone : 06 13 03 30 42. | {company}, thrift shop, 151 rue Gaulthier de Rumilly, 80000 Amiens, France. Phone: +33 6 13 03 30 42. | |
| `legal.siret` | SIRET : {siret}. | SIRET: {siret}. | |
| `legal.siretMissing` | SIRET : à compléter. | SIRET: to be completed. | |
| `legal.director` | Responsable de la publication : {director}. | Publication director: {director}. | |
| `legal.host` | Hébergement | Hosting | |
| `legal.data` | Données personnelles | Personal data | |
| `legal.dataText` | Le site ne collecte aucune donnée : les formulaires préparent un message WhatsApp que vous envoyez vous-même, depuis votre téléphone ou votre ordinateur. Rien n'est enregistré sur le site. | The site collects no data: the forms prepare a WhatsApp message that you send yourself, from your phone or computer. Nothing is stored on the site. | |
| `legal.photos` | Photos | Photos | |
| `legal.photosText` | Photos de la boutique et des pièces : Fripes Merveilles. Le site n'utilise aucune image de banque d'images. | Photos of the shop and pieces: Fripes Merveilles. The site uses no stock images. | |
| `legal.cookies` | Cookies | Cookies | |
| `legal.cookiesText` | Aucun cookie publicitaire ni de mesure d'audience. Le site retient seulement votre choix de langue et la fermeture du bandeau d'annonces, sur votre appareil. | No advertising or analytics cookies. The site only remembers your language choice and whether you closed the announcement banner, on your device. | |
