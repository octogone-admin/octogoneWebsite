"use client";

import React from "react";
import Image from "next/image";
import { ConceptFeature } from "@/data/features/features-content";
import { OctogoneButton } from "@/components/ui/octogone-button";

interface FeatureDetailWidgetProps {
  concept: ConceptFeature;
  locale: string;
}

export default function FeatureDetailWidget({ concept, locale }: FeatureDetailWidgetProps) {
  const isEnglish = locale === 'en';
  const content = isEnglish ? concept.contentEn : concept.contentFr;

  // Diviser le contenu en paragraphes
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg" style={{ color: 'var(--on-surface)' }}>
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="text-lg leading-relaxed mb-6"
            style={{ color: 'var(--on-surface-variant)' }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      
      {/* CTA optionnel */}
      {concept.ctaLink && concept.ctaLabelFr && concept.ctaLabelEn && (
        <>
          {/* Séparateur */}
          <div className="my-12 flex items-center gap-4">
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--outline)' }}></div>
            <div className="text-sm font-semibold" style={{ color: 'var(--on-surface-variant)' }}>
              {isEnglish ? 'Discover Octogone\'s new AI' : 'Découvrez le nouvel IA d\'Octogone'}
            </div>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--outline)' }}></div>
          </div>
          
          {/* Description */}
          <p className="text-center text-base mb-6 max-w-2xl mx-auto" style={{ color: 'var(--on-surface-variant)' }}>
            {isEnglish 
              ? 'Cortex is our AI agent, available in beta. Explore how artificial intelligence can help you make better decisions.'
              : 'Cortex est notre agent IA, disponible en version bêta. Explorez comment l\'intelligence artificielle peut vous aider à prendre de meilleures décisions.'
            }
          </p>
          
          {/* Bouton */}
          <div className="text-center">
            <OctogoneButton
              href={`/${locale}${concept.ctaLink}`}
              variant="cortex"
              size="lg"
              icon={
                <Image 
                  src="/cortex.svg" 
                  alt="Cortex" 
                  width={20} 
                  height={20}
                  className="inline-block"
                  style={{ 
                    filter: 'brightness(0) saturate(100%) invert(8%) sepia(15%) saturate(3207%) hue-rotate(167deg) brightness(96%) contrast(101%)'
                  }}
                />
              }
            >
              {isEnglish ? concept.ctaLabelEn : concept.ctaLabelFr}
            </OctogoneButton>
          </div>
        </>
      )}
    </div>
  );
}
