# MISSION SOURCE D'ESPOIR (MSE) — site web v4

Site statique responsive pour GitHub Pages.

## Modifications de cette version
- Ajout de la photo de terrain fournie dans le ZIP WhatsApp (`terrain-visite.jpg`) dans la galerie.
- Les autres photos de galerie sont des illustrations externes, clairement signalées comme telles.
- Ajout d'un sélecteur de langues : français, anglais, espagnol, portugais, chinois simplifié et coréen.
- Traduction automatique via Google Translate. La traduction nécessite une connexion Internet et le service tiers peut afficher des traductions imparfaites. Le choix « Autres langues » ouvre une langue supplémentaire disponible via le service.
- Ajout d'un parcours interactif de préparation de don : montant, devise, projet, moyen de paiement, puis transmission des détails par WhatsApp.
- Flooz et Mixx affichent les numéros communiqués ; le virement affiche les coordonnées Ecobank sans IBAN.
- L'IBAN n'est pas publié.

## Important : paiements
Le site ne peut pas, à lui seul, débiter un compte Mobile Money ou une carte, ni confirmer automatiquement qu'un transfert est arrivé.
- Flooz / Mixx : le donateur effectue le transfert depuis son application vers le numéro affiché ; il peut ensuite envoyer les détails via WhatsApp.
- Virement : le donateur effectue le virement auprès de sa banque.
- Carte bancaire : non activée. Pour automatiser l'encaissement, MSE doit ouvrir/faire valider un compte marchand chez un prestataire de paiement compatible avec le Togo et fournir les identifiants/API requis. Les secrets ne doivent jamais être placés dans le code public GitHub.
- Cryptomonnaie : non activée tant que MSE n'a pas confirmé l'adresse officielle du portefeuille et le réseau accepté.
Le site ne prétend pas qu'une transaction a été reçue.

## Publier sur GitHub Pages
1. Créer un dépôt GitHub public, par exemple `mission-source-espoir`.
2. Décompresser l'archive et téléverser **tout le contenu** du dossier `mse-site-v4` à la racine du dépôt (notamment `index.html`, `styles.css`, `script.js`, `fondateurs-famille.jpg` et `terrain-visite.jpg`).
3. Ouvrir **Settings → Pages**.
4. Sous **Build and deployment**, choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
5. Attendre le déploiement GitHub Pages et ouvrir l'URL fournie par GitHub.

## Avant publication
- Vérifier que la mission souhaite publier les coordonnées de compte Ecobank fournies.
- Vérifier les droits et autorisations des photos externes et les remplacer idéalement par des photos authentiques de MSE.
- Les traductions automatiques sont fournies par un service tiers et ne sont pas des traductions humaines certifiées.
