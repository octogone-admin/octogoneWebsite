import Hero from "@/features/home/components/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Découvrez Octogone, la solution complète de gestion pour restaurants. Inventaire en temps réel, gestion des coûts, recettes standardisées et bien plus.",
  openGraph: {
    title: "Octogone - Gestion intelligente pour restaurants",
    description: "Découvrez Octogone, la solution complète de gestion pour restaurants.",
  },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {/* Autres sections à ajouter ici */}
    </main>
  );
}
