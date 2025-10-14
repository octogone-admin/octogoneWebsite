/**
 * Wrapper pour la page d'accueil
 * Permet d'intégrer des Server Components dans une page Client
 */

import Hero from "@/features/home/components/hero";
import PartnersSection from "@/features/home/components/partners-section";
import CortexIntro from "@/features/cortex/components/cortex-intro";
import TargetSectors from "@/features/secteurs/components/target-sectors";
import HowItWorks from "@/features/secteurs/components/how-it-works";
import SuppliersSection from "@/features/home/components/suppliers-section";
import RecentBlogPosts from "@/features/home/components/recent-blog-posts";

interface HomeWrapperProps {
  locale: string;
}

export default function HomeWrapper({ locale }: HomeWrapperProps) {
  const typedLocale = locale as 'fr' | 'en';

  return (
    <div className="relative">
      {/* Hero */}
      <Hero locale={typedLocale} />

      {/* Section Partenaires */}
      <PartnersSection />

      {/* Section Cortex - IA d'Octogone */}
      <CortexIntro locale={typedLocale} />

      {/* Secteurs cibles */}
      <TargetSectors locale={typedLocale} />

      {/* Comment ça marche */}
      <HowItWorks locale={typedLocale} />

      {/* Section Fournisseurs */}
      <SuppliersSection locale={typedLocale} />

      {/* Articles récents du blog */}
      <RecentBlogPosts locale={typedLocale} />
    </div>
  );
}
