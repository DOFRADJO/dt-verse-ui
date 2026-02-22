# DTVerse UI

DTVerse UI est un système moderne de composants React conçu pour créer
des dashboards, landing pages et applications complexes avec un design
professionnel, moderne et scalable.

Le projet est construit avec Tailwind CSS v4, Framer Motion, TypeScript
et une architecture monorepo basée sur pnpm et Turborepo.

DTVerse UI a pour objectif de fournir :

-   des composants UI modernes et élégants
-   des presets d'animations
-   des utilitaires réutilisables
-   des blocks business prêts à l'emploi
-   une base open source extensible

------------------------------------------------------------------------

# Fonctionnalités

-   Design moderne et professionnel
-   Support natif de Tailwind CSS v4
-   Animations avec Framer Motion
-   TypeScript complet
-   Architecture monorepo scalable
-   Documentation avec Storybook
-   Versioning automatique avec Changesets
-   Publication automatique sur npm
-   Compatible Next.js, React et Vite

------------------------------------------------------------------------

# Packages

Le monorepo contient les packages suivants :

## @dtverse/ui

Contient les composants UI.

Exemples :

-   Button
-   AuthCard
-   PricingTable
-   Input
-   Dialog
-   et bien plus

------------------------------------------------------------------------

## @dtverse/utils

Contient les utilitaires.

Exemples :

-   fusion de className
-   helpers généraux
-   utilitaires partagés

------------------------------------------------------------------------

## @dtverse/motion

Contient les presets d'animations.

Exemples :

-   fadeIn
-   slideUp
-   stagger

------------------------------------------------------------------------

# Applications

## apps/test-app

Application Next.js utilisée pour tester les composants.

## apps/storybook

Storybook utilisé pour documenter et visualiser les composants.

------------------------------------------------------------------------

# Structure du projet

dtverse-ui/

apps/ storybook/ test-app/

packages/ ui/ utils/ motion/

.github/ workflows/

turbo.json package.json

------------------------------------------------------------------------

# Prérequis

Node.js 20 recommandé

pnpm requis

Activer pnpm :

corepack enable

corepack prepare pnpm@latest --activate

Vérifier :

pnpm -v

------------------------------------------------------------------------

# Installation

Cloner le repository :

git clone https://github.com/VOTRE_USERNAME/dtverse-ui.git

cd dtverse-ui

Installer les dépendances :

pnpm install

------------------------------------------------------------------------

# Build

Construire tous les packages :

pnpm build

------------------------------------------------------------------------

# Développement

Lancer l'application de test :

pnpm dev --filter ./apps/test-app

Ouvrir :

http://localhost:3000

------------------------------------------------------------------------

Lancer Storybook :

pnpm dev --filter ./apps/storybook

Ouvrir :

http://localhost:6006

------------------------------------------------------------------------

# Utilisation

Installer les packages :

pnpm add @dtverse/ui @dtverse/motion @dtverse/utils

Exemple :

import { Button } from "@dtverse/ui"

function App() { return ( `<Button>`{=html} Mon bouton
`</Button>`{=html} ) }

------------------------------------------------------------------------

Exemple animation :

import { motion } from "framer-motion" import { fadeIn } from
"@dtverse/motion"

function App() { return ( \<motion.div {...fadeIn()}\> Bonjour
\</motion.div\> ) }

------------------------------------------------------------------------

# Theme

Importer le theme :

@import "@dtverse/ui/theme.css"; @import "tailwindcss";

Mode sombre supporté via :

```{=html}
<html class="dark">
```

------------------------------------------------------------------------

# Scripts disponibles

pnpm dev

pnpm build

pnpm lint

pnpm test

pnpm changeset

pnpm version-packages

pnpm release

------------------------------------------------------------------------

# Publication

DTVerse UI utilise Changesets.

Créer un changeset :

pnpm changeset

Commit et push.

GitHub Actions publiera automatiquement.

------------------------------------------------------------------------

# CI/CD

CI vérifie :

-   installation
-   build
-   lint
-   test

Release publie sur npm automatiquement.

------------------------------------------------------------------------

# Secrets requis

Ajouter dans GitHub Secrets :

NPM_TOKEN

Avec permissions :

Read and Write

------------------------------------------------------------------------

# Roadmap

Composants :

Button Input Textarea Dialog Toast Table

Blocks :

Auth Pricing Dashboard Settings

------------------------------------------------------------------------

# Contribution

Fork

Créer branche

Commit

Push

Pull Request

------------------------------------------------------------------------

# License

MIT

------------------------------------------------------------------------

# Vision

DTVerse UI vise à devenir un écosystème complet pour créer des
applications modernes avec :

-   UI moderne
-   animations
-   blocks business
-   architecture scalable

Projet open source avec extensions futures premium.
