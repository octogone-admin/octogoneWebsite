"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { allSectors, targetSectors, restaurantStyles } from "@/data/sectors-data";
import SectorDetailWidget from "@/components/widgets/sector-detail-widget";

export default function SectorDetailPage() {
  const params = useParams();
  const locale = params?.locale as string || "fr";
  const sectorId = params?.sectorId as string;

  // Trouver le secteur correspondant
  const sector = allSectors.find(s => s.id === sectorId);
  
  // Déterminer si c'est un style de restaurant ou un type d'entreprise
  const isRestaurantStyle = restaurantStyles.some(s => s.id === sectorId);

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
            {locale === "fr" 
              ? (isRestaurantStyle ? "Style de restaurant" : "Type d'entreprise")
              : (isRestaurantStyle ? "Restaurant style" : "Business type")
            }
          </div>

          {/* Titre du secteur */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {locale === "fr" ? `Octogone pour ${sector.titleFr}` : `Octogone for ${sector.titleEn}`}
          </h1>
        </div>
      </ResponsiveSection>

      {/* Widget de contenu principal */}
      <SectorDetailWidget 
        sector={sector} 
        locale={locale} 
        isRestaurantStyle={isRestaurantStyle}
      />
    </main>
  );
}
