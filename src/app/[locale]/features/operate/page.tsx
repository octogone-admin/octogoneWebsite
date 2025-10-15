"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { Play } from "lucide-react";
import Image from "next/image";
import FeatureDetailWidget from "@/components/widgets/feature-detail-widget";
import { getConceptById } from "@/data/features/features-content";
import { ConceptSEO } from "@/components/seo/concept-seo";

export default function OperatePage() {
  const params = useParams();
  const locale = params.locale as string;
  
  const concept = getConceptById('operate');
  if (!concept) return null;

  return (
    <>
      {/* SEO Schemas JSON-LD */}
      <ConceptSEO concept={concept} locale={locale} />
      
      <main className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section - Header unique conservé */}
      <ResponsiveSection
        as="section"
        spacing="xl"
        className="relative overflow-hidden"
        style={{ 
          background: `linear-gradient(to bottom right, ${concept.pastelColor}, var(--background))`
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: concept.pastelColor
              }}
            >
              <Play className="w-5 h-5" style={{ color: '#002236' }} />
              <span className="text-sm font-semibold" style={{ color: '#002236' }}>
                {locale === 'fr' ? concept.nameFr : concept.nameEn}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--on-secondary-container)' }}>
              {locale === 'fr' ? concept.heroTitleFr : concept.heroTitleEn}
            </h1>
            
            <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--on-secondary-container)' }}>
              {locale === 'fr' ? concept.heroDescriptionFr : concept.heroDescriptionEn}
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={concept.heroImage}
              alt={locale === 'fr' ? concept.nameFr : concept.nameEn}
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </ResponsiveSection>

      {/* Features Section - Widget réutilisable */}
      <div style={{ backgroundColor: 'var(--background)' }}>
        <ResponsiveSection
          as="section"
          spacing="xxl"
          bgColor=""
        >
          <FeatureDetailWidget concept={concept} locale={locale} />
        </ResponsiveSection>
      </div>
      </main>
    </>
  );
}
