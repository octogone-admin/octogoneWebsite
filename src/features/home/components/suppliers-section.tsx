"use client";

import React from "react";
import { motion } from "framer-motion";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { LogoCard } from "@/components/widgets/logo-card";
import { useParams } from "next/navigation";
import { useScaleOut } from "@/hooks/use-features-scale";

/**
 * Composant SuppliersSection - Section mettant l'emphase sur la connexion avec les fournisseurs partenaires
 */
const SuppliersSection = () => {
  // Récupérer la locale actuelle des paramètres d'URL
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";
  
  // Utiliser le hook spécifique pour l'animation de l'octogone avec effet d'agrandissement
  const octogoneScale = useScaleOut({
    initialScale: 0.9,
    finalScale: 1.05,
    scrollRange: 300 // Plage courte pour une animation réactive
  });

  // Animation pour les éléments qui apparaissent au défilement
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ResponsiveSection 
      bgColor="bg-marine-50" 
      spacing="xxxl"
      className="overflow-visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center text-center lg:text-left">
        {/* Colonne de gauche - Grille de logos fournisseurs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUpVariants}
          className="relative order-1 flex justify-center"
        >
          <div className="w-full max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'Borderon', logo: '/images/suppliers/borderon.png' },
                { name: 'Norref', logo: '/images/suppliers/norref.png' },
                { name: 'Gordon', logo: '/images/suppliers/gordon.png' },
                { name: 'Hector Larivée', logo: '/images/suppliers/hector-larivee.png' },
                { name: 'Sysco', logo: '/images/suppliers/sysco.png' },
                { name: 'SAQ', logo: '/images/suppliers/saq.png' },
                { name: 'Viandex', logo: '/images/suppliers/viandex.png' },
                { name: 'Boucherie St-Laurent', logo: '/images/suppliers/boucherie-st-laurent.png' },
                { name: 'Passion Gourmet', logo: '/images/suppliers/passion-gourmet.png' },
                { name: 'Filo Solutions', logo: '/images/suppliers/filo.png' },
                { name: 'Canabec', logo: '/images/suppliers/canabec.png' },
                { name: 'Fruits et Légumes', logo: '/images/suppliers/fruits-legumes.png' },
                { name: 'K. Boucherie', logo: '/images/suppliers/k-boucherie.png' },
                { name: 'Tout Frêt', logo: '/images/suppliers/tout-fret.png' }
              ].map((supplier, index) => (
                <LogoCard
                  key={supplier.name}
                  name={supplier.name}
                  logo={supplier.logo}
                  index={index}
                  delay={0.05}
                />
              ))}
            </div>
            <p className="text-center mt-6 text-base font-medium" style={{ color: 'var(--on-primary-container)' }}>
              {locale === "fr" 
                ? "Et plusieurs autres fournisseurs partenaires"
                : "And several other partner suppliers"}
            </p>
          </div>
        </motion.div>
        
        {/* Colonne de droite - Texte et bullet points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeInUpVariants}
          className="flex flex-col order-2"
        >
          {/* Titre principal */}
          <h2 className="text-base xs:text-lg lg:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight mb-6 mx-auto lg:mx-0 max-w-3xl" style={{ color: 'var(--on-surface)' }}>
            {locale === "fr" ? "Vos fournisseurs. Leurs produits. Automatiquement dans Octogone." : "Your suppliers. Their products. Automatically in Octogone."}
          </h2>
          
          {/* Paragraphe principal */}
          <div className="space-y-4 mb-8 mx-auto lg:mx-0 max-w-2xl">
            <p className="text-xs xs:text-sm lg:text-base lg:text-lg xl:text-xl" style={{ color: 'var(--on-surface)' }}>
              {locale === "fr" 
                ? "Vos clients travaillent déjà avec des fournisseurs de confiance. Octogone se connecte directement à eux pour synchroniser catalogues, prix et factures en temps réel." 
                : "Your clients already work with trusted suppliers. Octogone connects directly to them to synchronize catalogs, prices and invoices in real-time."}
            </p>
            <p className="text-xs xs:text-sm lg:text-base lg:text-lg xl:text-xl" style={{ color: 'var(--on-surface)' }}>
              {locale === "fr" 
                ? "Zéro saisie manuelle. Zéro erreur. Zéro friction. Juste des données fiables, toujours à jour." 
                : "Zero manual entry. Zero errors. Zero friction. Just reliable data, always up-to-date."}
            </p>
          </div>
          
          {/* Points clés */}
          <ul className="space-y-4 mb-8 mx-auto lg:mx-0 max-w-2xl">
            {(locale === "fr" ? [
              "Catalogues produits synchronisés automatiquement",
              "Factures traitées par IA et intégrées sans intervention",
              "Prix et disponibilités mis à jour en temps réel",
              "Relations commerciales existantes préservées",
              "Commandes précises, sans erreur de saisie"
            ] : [
              "Product catalogs synchronized automatically",
              "Invoices processed by AI and integrated without intervention",
              "Prices and availability updated in real-time",
              "Existing business relationships preserved",
              "Accurate orders, without entry errors"
            ]).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gold-500 mr-2 flex-shrink-0">✓</span>
                <span className="text-xs xs:text-sm lg:text-base" style={{ color: 'var(--on-surface)' }}>{item}</span>
              </li>
            ))}
          </ul>
          
          {/* Accroche finale */}
          <p className="text-sm xs:text-base lg:text-lg lg:text-xl font-medium mx-auto lg:mx-0 max-w-2xl" style={{ color: 'var(--on-surface)' }}>
            {locale === "fr" 
              ? "Vos fournisseurs deviennent une extension naturelle de votre système." 
              : "Your suppliers become a natural extension of your system."}
          </p>
        </motion.div>
      </div>
    </ResponsiveSection>
  );
};

export default SuppliersSection;
