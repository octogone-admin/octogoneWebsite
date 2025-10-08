"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";

// Types pour les secteurs (même structure que dans target-sectors.tsx)
interface TargetSector {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  gradient: string;
  hoverGradient: string;
}

// Données des secteurs (importées depuis target-sectors.tsx pour cohérence)
const allSectors: TargetSector[] = [
  // Types d'entreprises
  {
    id: "restaurants",
    titleFr: "Restaurants",
    titleEn: "Restaurants",
    descriptionFr: "Indépendants & franchisés",
    descriptionEn: "Independent & franchised",
    image: "",
    gradient: "from-marine-400 to-marine-600",
    hoverGradient: "from-marine-500 to-marine-700"
  },
  {
    id: "chains",
    titleFr: "Chaînes",
    titleEn: "Chains",
    descriptionFr: "Multi-établissements",
    descriptionEn: "Multi-location",
    image: "",
    gradient: "from-gold-400 to-gold-600",
    hoverGradient: "from-gold-500 to-gold-700"
  },
  {
    id: "hotels",
    titleFr: "Hôtels",
    titleEn: "Hotels",
    descriptionFr: "Restauration hôtelière",
    descriptionEn: "Hotel dining",
    image: "",
    gradient: "from-marine-500 to-marine-700",
    hoverGradient: "from-marine-600 to-marine-800"
  },
  {
    id: "catering",
    titleFr: "Traiteurs",
    titleEn: "Caterers",
    descriptionFr: "Événementiel & corporate",
    descriptionEn: "Events & corporate",
    image: "",
    gradient: "from-gold-500 to-gold-700",
    hoverGradient: "from-gold-600 to-gold-800"
  },
  {
    id: "rpa",
    titleFr: "RPA",
    titleEn: "Senior Living",
    descriptionFr: "Résidences pour aînés",
    descriptionEn: "Senior residences",
    image: "",
    gradient: "from-marine-600 to-marine-800",
    hoverGradient: "from-marine-700 to-marine-900"
  },
  {
    id: "retail",
    titleFr: "Commerce",
    titleEn: "Retail",
    descriptionFr: "Alimentaire & détail",
    descriptionEn: "Food & retail",
    image: "",
    gradient: "from-gold-600 to-gold-800",
    hoverGradient: "from-gold-700 to-gold-900"
  },
  // Styles de restaurants
  {
    id: "fine-dining",
    titleFr: "Gastronomique",
    titleEn: "Fine Dining",
    descriptionFr: "Haute gastronomie",
    descriptionEn: "High-end cuisine",
    image: "",
    gradient: "from-marine-400 to-marine-600",
    hoverGradient: "from-marine-500 to-marine-700"
  },
  {
    id: "casual",
    titleFr: "Décontracté",
    titleEn: "Casual Dining",
    descriptionFr: "Ambiance détendue",
    descriptionEn: "Relaxed atmosphere",
    image: "",
    gradient: "from-gold-400 to-gold-600",
    hoverGradient: "from-gold-500 to-gold-700"
  },
  {
    id: "fast-casual",
    titleFr: "Rapide Premium",
    titleEn: "Fast-Casual",
    descriptionFr: "Service rapide, qualité",
    descriptionEn: "Quick service, quality",
    image: "",
    gradient: "from-marine-500 to-marine-700",
    hoverGradient: "from-marine-600 to-marine-800"
  },
  {
    id: "qsr",
    titleFr: "Restauration Rapide",
    titleEn: "Quick Service",
    descriptionFr: "Service ultra-rapide",
    descriptionEn: "Ultra-fast service",
    image: "",
    gradient: "from-gold-500 to-gold-700",
    hoverGradient: "from-gold-600 to-gold-800"
  },
  {
    id: "food-truck",
    titleFr: "Camion Restaurant",
    titleEn: "Food Truck",
    descriptionFr: "Mobile & flexible",
    descriptionEn: "Mobile & flexible",
    image: "",
    gradient: "from-marine-600 to-marine-800",
    hoverGradient: "from-marine-700 to-marine-900"
  },
  {
    id: "buffet",
    titleFr: "Buffet",
    titleEn: "Buffet",
    descriptionFr: "Service libre-service",
    descriptionEn: "Self-service dining",
    image: "",
    gradient: "from-gold-600 to-gold-800",
    hoverGradient: "from-gold-700 to-gold-900"
  }
];

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
      {/* Hero Section du secteur */}
      <ResponsiveSection 
        spacing="xl" 
        className="relative overflow-hidden"
        style={{ backgroundColor: '#e5f1ff' }}
      >
        <div className="text-center">
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
          <h1 className="text-4xl lg:text-6xl font-bold text-marine-900 mb-6">
            {locale === "fr" ? sector.titleFr : sector.titleEn}
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-marine-700 max-w-3xl mx-auto mb-8">
            {locale === "fr" ? sector.descriptionFr : sector.descriptionEn}
          </p>

          {/* Description détaillée */}
          <div className="max-w-4xl mx-auto text-left">
            <p className="text-lg text-marine-600 leading-relaxed">
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
