"use client";

import { motion } from "framer-motion";
import Hero from "@/features/home/components/hero";
import PartnersSection from "@/features/home/components/partners-section";
import CortexIntro from "@/features/cortex/components/cortex-intro";
import TargetSectors from "@/features/secteurs/components/target-sectors";
import HowItWorks from "@/features/secteurs/components/how-it-works";
import SuppliersSection from "@/features/home/components/suppliers-section";
// Ces imports ont été nettoyés car ils ne sont plus utilisés
// import {
//   ArrowRight,
//   PieChart,
//   DollarSign,
//   ClipboardCheck,
//   BarChart2,
//   Clock,
//   Users,
//   TrendingUp,
//   ChevronDown,
// } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import * as React from "react";
import { useCalculator } from "@/contexts/calculator-context";

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  // Utiliser React.use pour accéder aux paramètres de route
  const { locale } = React.use(params);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasBanner, setHasBanner] = useState(true);
  const { expandCalculator } = useCalculator();

  // Détecter la présence de la bannière
  useEffect(() => {
    const checkBannerVisibility = () => {
      const bannerElement = document.querySelector(".announcement-banner");
      const isVisible =
        bannerElement &&
        window.getComputedStyle(bannerElement).display !== "none";
      setHasBanner(!!isVisible);
    };

    // Vérifier initialement
    checkBannerVisibility();

    // Observer les changements dans le DOM
    const observer = new MutationObserver(checkBannerVisibility);
    observer.observe(document.body, { childList: true, subtree: true });

    // Nettoyage
    return () => observer.disconnect();
  }, []);

  // Fonction commentée car non utilisée actuellement, mais conservée pour une utilisation future
  // const scrollToSection = () => {
  //   sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // Calculer l'offset en fonction de la présence de la bannière
  const offsetMargin = hasBanner ? -120 : -160; // -120px si bannière, -160px sinon (remonte quand pas de bannière)

  return (
    <>
      {/* Hero section avec centrage ajusté pour la barre de navigation */}
      <div className="w-full">
        <Hero />
      </div>

      {/* Section Partenaires */}
      <PartnersSection />

      {/* Section Cortex - IA d'Octogone */}
      <CortexIntro locale={locale} />

      {/* Conteneur pour les autres sections qui viendront après le hero */}
      <div ref={sectionRef}>
        {/* Section Target Sectors - Qui fait confiance à Octogone */}
        <TargetSectors />
        
        {/* Section Comment ça marche */}
        <HowItWorks onOpenCalculator={expandCalculator} />
        
        {/* Section 1 - Connexion avec les fournisseurs */}
        <SuppliersSection />

      </div>
    </>
  );
}


