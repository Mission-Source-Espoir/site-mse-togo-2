# MISSION SOURCE D'ESPOIR (MSE) — site web v5

Cette archive contient les fichiers du site à déposer **à la racine** du dépôt GitHub :
`Mission-Source-Espoir/site-mse-togo-2`.

## Changement principal
- `fondateurs-famille.jpg` a été remplacée par la dernière photo de famille fournie.
- `index.html` appelle déjà cette image avec le chemin `fondateurs-famille.jpg`.
- Le reste du site (styles, scripts, galerie de terrain, langues et parcours de dons) est conservé.

## Corriger / mettre à jour le dépôt GitHub existant
1. Ouvrir https://github.com/Mission-Source-Espoir/site-mse-togo-2
2. Cliquer sur **Add file → Upload files**.
3. Décompresser cette archive sur votre ordinateur.
4. Glisser-déposer **tous les fichiers** directement dans la zone d'envoi, sans créer de sous-dossier `mse-site-v5`.
5. GitHub doit proposer le remplacement des fichiers existants. Vérifier surtout `fondateurs-famille.jpg`. Téléverser aussi `index.html`, `styles.css`, `script.js`, `terrain-visite.jpg` et `README.md` afin que les versions soient cohérentes.
6. En bas, cliquer sur **Commit changes** pour enregistrer sur la branche `main`.
7. Aller dans **Actions** et attendre que `pages build and deployment` affiche une coche verte.

## Structure attendue à la racine
- `index.html`
- `styles.css`
- `script.js`
- `fondateurs-famille.jpg`
- `terrain-visite.jpg`
- `README.md`

Les dossiers et fichiers historiques qui ne sont pas appelés par `index.html` (par exemple une ancienne copie `famille-ayivon.jpg`, `README.txt` ou un dossier `assets`) peuvent rester en place. Ils ne sont pas nécessaires au site actuel ; ne les supprimez pas si vous n'êtes pas certain qu'aucune autre page ne les utilise.

## Vérifier le site publié
Ouvrir l'adresse GitHub Pages affichée dans le dépôt sous **Settings → Pages**. Le dépôt public et les exécutions vertes d'Actions sont de bons signes, mais vérifiez également le rendu final dans le navigateur.

## Paiements
Le formulaire prépare les informations et ouvre WhatsApp. Il ne réalise pas lui-même de débit ni de confirmation bancaire. Les paiements par carte et cryptomonnaie restent à connecter auprès de prestataires compatibles. Ne mettez jamais de clés API secrètes dans le dépôt public.
