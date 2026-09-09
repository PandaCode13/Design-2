# Les Merveilles d'Aulnay — Site Vitrine

Site vitrine pour **Les Merveilles d'Aulnay – Aux Délices de la Place**, boulangerie, pâtisserie et confiserie artisanale à Aulnay-sous-Bois.

---

## Démarrage

```bash
npm install
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run lint      # Vérification du code
npm run preview   # Prévisualisation du build
```

---

## Design

### Palette de couleurs

Style **vert forêt & bois** — ambiance artisanale et naturelle. Toutes les couleurs sont définies en variables CSS dans `src/index.css` :

```css
--bordeaux: #264D3A;         /* drapé vert forêt (vert profond)      */
--bordeaux-light: #3A6B52;
--bordeaux-dark: #16301F;
--anthracite: #2E2C28;       /* neutres sombres légèrement teintés  */
--anthracite-light: #3A3732;
--anthracite-dark: #1A1815;
--gold: #C4905F;             /* accent bois / miel                  */
--gold-light: #D6AE82;
--gold-dark: #A06F42;
--cream: #F4F1EA;            /* fond principal chaud                */
--cream-dark: #E8E2D4;
```

Modifier ces valeurs change l'apparence globale du site — les composants utilisent uniquement `var(--nom)`.

### Typographies

```
Titres :    Playfair Display (serif, gras)
Corps :     Cormorant Garamond (serif, regular)
Accents :   Lora (serif, italique pour accents)
```

### Structure visuelle du site

Le fond général alterne entre trois couleurs :

1. **Crème** — sections Histoire, Galerie, Contact
2. **Anthracite** — sections Produits, Avis
3. **Vert forêt** — section Incontournables

Le bois/miel (`--gold`) est utilisé uniquement comme couleur d'accent (hover, bordures, ornements, flèche retour accueil).

### Sections du site

| Section | Description |
|---|---|
| **Header** | Navigation fixe, nom doré + crème, menu adaptatif mobile |
| **Hero** | Plein écran, photo de fond, accroche « Les Merveilles d'Aulnay », badge Boulangerie • Pâtisserie • Confiserie |
| **Notre histoire** | Grid image + texte, signature familiale |
| **Nos produits** | 3 cartes (Boulangerie, Pâtisserie, Confiserie) sur fond anthracite |
| **Nos incontournables** | 4 produits phares sur fond vert forêt |
| **Galerie** | Grid asymétrique avec overlays au survol |
| **Avis clients** | 3 témoignages sur fond anthracite |
| **Nous trouver** | Infos contact + horaires + carte OpenStreetMap |
| **Footer** | Liens de navigation, contact, et **flèche de retour vers l'accueil** |

---

## Photos

Les photos sont gérées par des **liens** définis dans `src/data/site-data.js`. Chaque champ `image` peut pointer vers :

- un fichier local dans `public/images/` → `/images/mon-photo.jpg`
- une URL externe → `https://exemple.com/mon-photo.jpg`

Liens disponibles :

```
heroImage          →  background du Hero
histoireImage      →  photo de la section Notre histoire
produits[i].image  →  photos des 3 cartes métiers
incontournables[i].image →  photos des 4 produits phares
galerie[i].image   →  photos de la galerie
```

**Repli automatique** : le composant `PlaceholderImage` (`src/components/ui/PlaceholderImage.jsx`) affiche la vrai photo si elle se charge, sinon un placeholder sombre avec texte doré. Pas besoin de toucher aux composants pour changer une photo : il suffit de modifier le lien dans `site-data.js`.

Photos attendues dans `public/images/` :

```
hero.jpg            boulangerie.jpg       pain-campagne.jpg     galerie-1.jpg
histoire.jpg        patisserie.jpg        croissant.jpg         galerie-2.jpg
                    confiserie.jpg        tarte-fruits.jpg      galerie-3.jpg
                                          paris-brest.jpg       galerie-4.jpg
                                                                galerie-5.jpg
```

---

## Architecture du projet

### Structure

```
merveilles-facade/
├── index.html                  # Point d'entrée HTML (meta, fonts Google)
├── package.json                # Dépendances et scripts
├── vite.config.js              # Configuration Vite
├── public/
│   ├── favicon.svg             # Favicon avec "M" doré
│   └── images/                 # Photos du site
│
└── src/
    ├── main.jsx                # Montage React (StrictMode + createRoot)
    ├── index.css               # Variables globales (couleurs, fonts) + reset
    ├── App.jsx                 # Orchestrateur (assemble les composants)
    │
    ├── styles/
    │   └── base.css            # .container global (max-width, padding)
    │
    ├── data/
    │   └── site-data.js        # Toutes les données + liens d'images
    │
    └── components/
        ├── ui/                 # Composants réutilisables
        │   ├── Ornament.jsx + .css        # Séparateur doré
        │   ├── SectionTitle.jsx + .css    # Titre + sous-titre de section
        │   └── PlaceholderImage.jsx       # Photo avec repli placeholder
        │
        ├── layout/             # Structure de page
        │   ├── Header.jsx + .css
        │   └── Footer.jsx + .css          # Inclut la flèche retour accueil
        │
        └── sections/           # Sections du site (une section = JSX + CSS)
            ├── Hero.jsx + .css
            ├── Histoire.jsx + .css
            ├── Produits.jsx + .css
            ├── Incontournables.jsx + .css
            ├── Galerie.jsx + .css
            ├── Avis.jsx + .css
            └── Contact.jsx + .css
```

### Principes d'architecture

**Un composant = un fichier JSX + un fichier CSS.** Le style est co-localisé avec la logique. Pas de CSS global pour les composants.

**Séparation données / UI.** Toutes les données statiques (nav, produits, avis, galerie, liens d'images) sont dans `src/data/site-data.js`. Pour modifier un texte, une description ou une photo, on édite uniquement ce fichier.

**App.jsx est un orchestrateur pur.** Il assemble les composants dans l'ordre : Header → sections → Footer.

**Chaque CSS gère son responsive.** Les media queries sont dans le fichier CSS du composant concerné.

### Modifier le contenu

| Besoin | Fichier à modifier |
|---|---|
| Changer un nom, un texte, une description | `src/data/site-data.js` |
| Changer une photo | `src/data/site-data.js` (champ `image`) |
| Modifier les horaires | `src/components/sections/Contact.jsx` |
| Modifier le téléphone / l'adresse | `Contact.jsx` et `Footer.jsx` |
| Modifier les liens de navigation | `src/data/site-data.js` (navLinks) |
| Changer les couleurs | `src/index.css` (variables CSS) |

### Ajouter une section

1. Créer `src/components/sections/NouvelleSection.jsx` + `.css`
2. Importer et placer dans `src/App.jsx` dans le `<main>`
3. Ajouter un lien dans `navLinks` dans `src/data/site-data.js` si nécessaire

---

## Stack technique

- **React 19** — UI library
- **Vite 8** — Build tool, dev server
- **ESLint** — Linting (config dans `eslint.config.js`)
- **CSS vanilla** — Pas de framework CSS, styles custom via variables
- **Google Fonts** — Playfair Display, Cormorant Garamond, Lora
- **OpenStreetMap** — Carte embarquée pour la localisation