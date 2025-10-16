"use client";

import { useEffect } from 'react';
// TODO: Créer le fichier ai-seo-generator.ts
// import { useDynamicSEO, TestimonialData, FeatureData, SectorData } from '@/lib/seo/ai-seo-generator';

interface TestimonialData {
  id: string;
  name: string;
  content: string;
}

interface FeatureData {
  id: string;
  title: string;
  description: string;
}

interface SectorData {
  id: string;
  name: string;
}

interface DynamicSEOProps {
  testimonials: TestimonialData[];
  features: FeatureData[];
  sectors: SectorData[];
  locale: string;
}

/**
 * Composant SEO IA Dynamique
 * Injecte automatiquement les données structurées et métadonnées
 * TODO: Implémenter la logique SEO dynamique
 */
export function DynamicSEO({ testimonials, features, sectors, locale }: DynamicSEOProps) {
  // const { schemas, metadata, jsonLd } = useDynamicSEO(testimonials, features, sectors, locale);

  useEffect(() => {
    // TODO: Implémenter l'injection SEO dynamique quand ai-seo-generator sera créé
    console.log('DynamicSEO loaded with:', { 
      testimonials: testimonials.length, 
      features: features.length, 
      sectors: sectors.length, 
      locale 
    });
    
    /* 
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
    */
  }, [testimonials, features, sectors, locale]);

  return null; // Ce composant n'affiche rien, il injecte juste le SEO
}

/**
 * Met à jour les balises meta dynamiquement
 */
function _updateMetaTags(metadata: Record<string, unknown>) {
  // Mettre à jour la description
  if (metadata.description && typeof metadata.description === 'string') {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metadata.description);
  }

  // Mettre à jour les keywords
  if (metadata.keywords && Array.isArray(metadata.keywords)) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', metadata.keywords.join(', '));
  }

  // Mettre à jour Open Graph
  if (metadata.description && typeof metadata.description === 'string') {
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', metadata.description);
  }
}
