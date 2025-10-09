"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { allSectors } from "@/data/sectors-data";

// Les données sont maintenant importées depuis /src/data/sectors-data.ts
// Plus besoin de les définir ici !

/* SUPPRIMÉ - Données maintenant dans /src/data/sectors-data.ts */

export default function SectorDetailPage() {
  const params = useParams();
  const locale = params?.locale as string || "fr";
  const sectorId = params?.sectorId as string;

  // Trouver le secteur correspondant
  const sector = allSectors.find(s => s.id === sectorId);

  // Si le secteur n'existe pas, afficher une page 404
  if (!sector) {
    return (
      <ResponsiveSection spacing="xl" className="text-center">
        <h1 className="text-4xl font-bold text-marine-900 mb-4">
          {locale === "fr" ? "Secteur non trouvé" : "Sector not found"}
        </h1>
        <p className="text-lg text-marine-700">
          {locale === "fr" 
            ? "Le secteur demandé n'existe pas ou a été supprimé." 
            : "The requested sector does not exist or has been removed."}
        </p>
      </ResponsiveSection>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section du secteur avec image */}
      <ResponsiveSection 
        spacing="xl" 
        className="relative overflow-hidden"
      >
        {/* Image de fond */}
        {sector.image && (
          <div className="absolute inset-0 z-0">
            <Image
              src={sector.image}
              alt={locale === "fr" ? sector.titleFr : sector.titleEn}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        )}

        <div className="relative z-10 text-center">
          {/* Badge du secteur */}
          <div 
            className="inline-block px-6 py-2 rounded-full text-white font-semibold mb-6"
            style={{
              background: `linear-gradient(to right, ${sector.gradient.replace('from-', '').replace(' to-', ', ')})`.replace('marine-', '#0073ff').replace('gold-', '#dcb26b')
            }}
          >
            {locale === "fr" ? "Secteur" : "Sector"}
          </div>

          {/* Titre du secteur */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {locale === "fr" ? sector.titleFr : sector.titleEn}
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
            {locale === "fr" ? sector.descriptionFr : sector.descriptionEn}
          </p>

          {/* Description détaillée */}
          <div className="max-w-4xl mx-auto text-left p-8 rounded-2xl" style={{ backgroundColor: 'rgba(186, 223, 246, 0.3)' }}>
            <p className="text-lg text-white leading-relaxed drop-shadow">
              {locale === "fr" 
                ? `Octogone s'adapte parfaitement aux besoins spécifiques du secteur ${sector.titleFr.toLowerCase()}. Notre plateforme offre des fonctionnalités sur mesure pour optimiser vos opérations, analyser vos performances et prédire vos besoins futurs.`
                : `Octogone perfectly adapts to the specific needs of the ${sector.titleEn.toLowerCase()} sector. Our platform offers tailored features to optimize your operations, analyze your performance, and predict your future needs.`
              }
            </p>
          </div>
        </div>
      </ResponsiveSection>

      {/* Section des fonctionnalités spécifiques */}
      <ResponsiveSection spacing="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-marine-900 mb-4">
            {locale === "fr" 
              ? `Solutions pour ${sector.titleFr.toLowerCase()}` 
              : `Solutions for ${sector.titleEn.toLowerCase()}`}
          </h2>
          <p className="text-lg text-marine-700 max-w-3xl mx-auto">
            {locale === "fr" 
              ? "Découvrez comment Octogone transforme votre gestion quotidienne"
              : "Discover how Octogone transforms your daily management"}
          </p>
        </div>

        {/* Grille des fonctionnalités (exemple) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              titleFr: "Gestion des inventaires",
              titleEn: "Inventory Management",
              descFr: "Suivi en temps réel adapté à votre secteur",
              descEn: "Real-time tracking adapted to your sector"
            },
            {
              titleFr: "Analyse des coûts",
              titleEn: "Cost Analysis", 
              descFr: "Optimisation du food cost spécifique",
              descEn: "Specific food cost optimization"
            },
            {
              titleFr: "Prédictions IA",
              titleEn: "AI Predictions",
              descFr: "Cortex anticipe vos besoins sectoriels",
              descEn: "Cortex anticipates your sector needs"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-marine-900 mb-3">
                {locale === "fr" ? feature.titleFr : feature.titleEn}
              </h3>
              <p className="text-marine-700">
                {locale === "fr" ? feature.descFr : feature.descEn}
              </p>
            </div>
          ))}
        </div>
      </ResponsiveSection>
    </main>
  );
}
