# DTVerse UI

DTVerse UI est une bibliothèque moderne de composants React, animations
et utilitaires conçue pour construire des applications professionnelles,
des dashboards SaaS, des landing pages et des interfaces complexes.

Elle utilise une stack moderne :

-   React 18+ / 19+
-   TypeScript
-   Tailwind CSS v4
-   Framer Motion
-   Turborepo
-   PNPM workspaces
-   Storybook
-   Changesets (versioning et publication)
-   Compatible Next.js, Vite, React

------------------------------------------------------------------------

# Packages

DTVerse UI est composé de plusieurs packages.

## @dtverse/ui

Composants UI prêts pour production.

Exemples :

-   Button
-   Input
-   Card
-   AuthCard
-   PricingTable
-   EmptyState
-   Switch
-   Checkbox
-   Label

Installation :

    pnpm add @dtverse/ui

------------------------------------------------------------------------

## @dtverse/motion

Presets d'animations Framer Motion prêts à utiliser.

Exemples :

-   fadeIn
-   slideUp
-   slideDown
-   scaleIn
-   staggerContainer

Installation :

    pnpm add @dtverse/motion framer-motion

------------------------------------------------------------------------

## @dtverse/utils

Utilitaires modernes.

Exemples :

-   cn (fusion intelligente des classes Tailwind)
-   helpers TypeScript

Installation :

    pnpm add @dtverse/utils

------------------------------------------------------------------------

# Installation complète

    pnpm add @dtverse/ui @dtverse/motion @dtverse/utils framer-motion

------------------------------------------------------------------------

# Configuration Tailwind

Dans votre fichier globals.css :

    @import "@dtverse/ui/theme.css";

------------------------------------------------------------------------

# Exemple d'utilisation

    "use client";

    import { Button } from "@dtverse/ui";
    import { motion } from "framer-motion";
    import { fadeIn } from "@dtverse/motion";

    export default function Page() {
      return (
        <motion.div {...fadeIn}>
          <Button>DTVerse UI</Button>
        </motion.div>
      );
    }

------------------------------------------------------------------------

# Développement local

Cloner le repo :

    git clone https://github.com/dt-verse/dt-verse-ui.git
    cd dt-verse-ui

Installer :

    pnpm install

Build :

    pnpm build

Dev :

    pnpm dev

------------------------------------------------------------------------

# Storybook

Lancer Storybook :

    pnpm --filter storybook dev

Accéder :

    http://localhost:6006

------------------------------------------------------------------------

# Versioning

Créer une nouvelle version :

    pnpm changeset

------------------------------------------------------------------------

# Publication

Publier manuellement :

    pnpm release

Ou automatiquement via GitHub Actions.

------------------------------------------------------------------------

# Structure du projet

    apps/
      storybook/
      test-app/

    packages/
      ui/
      motion/
      utils/

------------------------------------------------------------------------

# Stack technique

-   React
-   TypeScript
-   Tailwind CSS v4
-   Framer Motion
-   Turborepo
-   PNPM
-   Storybook
-   Changesets
-   GitHub Actions

------------------------------------------------------------------------

# Objectif

Créer la meilleure bibliothèque UI moderne pour :

-   SaaS
-   dashboards
-   landing pages
-   applications complexes

------------------------------------------------------------------------

# Organisation

DTVerse

https://github.com/dt-verse
