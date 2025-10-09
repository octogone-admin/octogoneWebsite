"use client";

import { useEffect } from 'react';
import { useDynamicSEO, TestimonialData, FeatureData, SectorData } from '@/lib/seo/ai-seo-generator';

interface DynamicSEOProps {
  testimonials: TestimonialData[];
  features: FeatureData[];
  sectors: SectorData[];
  locale: string;
}

/**
 * Composant SEO IA Dynamique
 * Injecte automatiquement les données structurées et métadonnées
 */
export function DynamicSEO({ testimonials, features, sectors, locale }: DynamicSEOProps) {
  const { schemas, metadata, jsonLd } = useDynamicSEO(testimonials, features, sectors, locale);

  useEffect(() => {
    // Injecter le JSON-LD dans le head
    const existingScript = document.querySelector('#dynamic-seo-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'dynamic-seo-jsonld';
    script.type = 'application/ld+json';
    script.textContent = jsonLd;
    document.head.appendChild(script);

    // Mettre à jour les métadonnées dynamiques
    updateMetaTags(metadata);

    return () => {
      const scriptToRemove = document.querySelector('#dynamic-seo-jsonld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [jsonLd, metadata]);

  return null; // Ce composant n'affiche rien, il injecte juste le SEO
}

/**
 * Met à jour les balises meta dynamiquement
 */
function updateMetaTags(metadata: any) {
  // Mettre à jour la description
  if (metadata.description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metadata.description);
  }

  // Mettre à jour les keywords
  if (metadata.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', metadata.keywords.join(', '));
  }

  // Mettre à jour Open Graph
  if (metadata.description) {
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', metadata.description);
  }
}
