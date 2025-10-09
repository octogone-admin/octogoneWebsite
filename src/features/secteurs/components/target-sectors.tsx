"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { OctogoneButton } from "@/components/ui/octogone-button";
import Image from "next/image";
import { targetSectors, restaurantStyles, type TargetSector } from "@/data/sectors-data";
import { testimonials, type Testimonial } from "@/data/testimonials-data";
/**
 * Fonction pour obtenir l'icône SVG de chaque secteur
 */
const getSectorIcon = (sectorId: string) => {
  const iconProps = "w-24 h-24 lg:w-32 lg:h-32";
  
  switch (sectorId) {
    case "restaurants":
      return (
        <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-5.51-5.51z"/>
        </svg>
      );
    case "chains":
      return (
        <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
      );
    case "hotels":
      return (
        <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
        </svg>
      );
    case "catering":
      return (
        <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 17h20v2H2zm1.15-4.05L4 11l.85 1.95L6.8 13l-1.95.85L4 15.8l-.85-1.95L1.2 13l1.95-.85zm2.2-6.9L6.5 4l1.15 2.05L9.7 6.5l-2.05 1.15L6.5 9.7l-1.15-2.05L3.3 6.5l2.05-1.15zm7.65 6.9L14 11l1 2.05L17.05 13L15 13.95L14 16l-1-2.05L10.95 13L13 12.05z"/>
        </svg>
      );
    case "rpa":
      return (
        <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      );
    case "retail":
      return (
        <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      );
    default:
      return (
        <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      );
  }
};

/**
 * Section des secteurs cibles d'Octogone
 */
const TargetSectors = () => {
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'business' | 'styles' | 'testimonials'>('business');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotation du carrousel de témoignages (simple boucle)
  React.useEffect(() => {
    if (activeTab === 'testimonials') {
      const interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      }, 5000); // Change toutes les 5 secondes

      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Données à afficher selon l'onglet actif (seulement pour les cartes)
  const currentData = activeTab === 'business' ? targetSectors : restaurantStyles;

  // Couleurs de fond selon le toggle actif
  const getBackgroundStyle = () => {
    switch (activeTab) {
      case 'business':
        return { background: 'radial-gradient(ellipse at top left, #B8E0D2 0%, #A5D6CC 25%, #B8E0D2 50%, #9BCCC4 75%, #B8E0D2 100%)' }; // Vert pastel
      case 'styles':
        return { background: 'radial-gradient(ellipse at top left, #B4D4FF 0%, #A1C7FF 25%, #B4D4FF 50%, #8EBAFF 75%, #B4D4FF 100%)' }; // Bleu pastel
      case 'testimonials':
        return { background: 'radial-gradient(ellipse at top left, #BADFF6 0%, #A7D6F3 25%, #BADFF6 50%, #94CDF0 75%, #BADFF6 100%)' }; // Secondary color (bleu Cortex)
      default:
        return { background: 'radial-gradient(ellipse at top left, #e5f1ff 0%, #ddeeff 25%, #e5f1ff 50%, #d5ebff 75%, #e5f1ff 100%)' };
    }
  };

  // Couleur du bouton selon le toggle actif
  const getButtonColor = () => {
    switch (activeTab) {
      case 'business':
        return '#B8E0D2'; // Vert pastel
      case 'styles':
        return '#B4D4FF'; // Bleu pastel
      case 'testimonials':
        return '#BADFF6'; // Secondary color (bleu Cortex)
      default:
        return '#e5f1ff';
    }
  };

  return (
    <ResponsiveSection
      as="section"
      spacing="xxl"
      className="relative overflow-hidden transition-all duration-500 ease-out"
      style={getBackgroundStyle()}
    >
      {/* Fond décoratif avec octogones en filigrane */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-marine-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-500 rounded-full blur-3xl"></div>
      </div>

      {/* Logo en arrière-plan */}
      <div className="absolute -bottom-[500px] -right-[500px] w-[1400px] h-[1400px] opacity-20">
        <Image
          src="/logo_octogone.svg"
          alt="Octogone Logo"
          width={1400}
          height={1400}
          className="object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div className="relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marine-900 mb-8">
            {locale === "fr" ? "Connecté à votre modèle d'affaires" : "Connected to your business model"}
          </h2>

          {/* Toggle Switch */}
          <div className="inline-flex gap-2">
            <button
              onClick={() => setActiveTab('business')}
              className="px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 cursor-pointer hover:bg-opacity-80"
              style={{
                backgroundColor: activeTab === 'business' ? '#f3f4f6' : 'transparent',
                color: activeTab === 'business' ? 'black' : 'black'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'business') {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'business') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {locale === "fr" ? "Types d'entreprises" : "Business Types"}
            </button>
            <button
              onClick={() => setActiveTab('styles')}
              className="px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 cursor-pointer hover:bg-opacity-80"
              style={{
                backgroundColor: activeTab === 'styles' ? '#f3f4f6' : 'transparent',
                color: activeTab === 'styles' ? 'black' : 'black'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'styles') {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'styles') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {locale === "fr" ? "Styles de restaurants" : "Restaurant Styles"}
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className="px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 cursor-pointer hover:bg-opacity-80"
              style={{
                backgroundColor: activeTab === 'testimonials' ? '#f3f4f6' : 'transparent',
                color: activeTab === 'testimonials' ? 'black' : 'black'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'testimonials') {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'testimonials') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {locale === "fr" ? "Témoignages" : "Testimonials"}
            </button>
          </div>
        </div>

        {/* Conteneur avec hauteur fixe basée sur la section témoignages */}
        <div className="relative min-h-[650px] lg:min-h-[770px]">
          {/* Affichage conditionnel : Grille ou Carrousel */}
          {activeTab === 'testimonials' ? (
            /* Carrousel de cartes de témoignages */
            <div className="relative h-full flex flex-col justify-center">
            {/* Contrôle gauche */}
            <button
              onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-lg cursor-pointer"
            >
              <svg className="w-6 h-6 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Contrôle droit */}
            <button
              onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-lg cursor-pointer"
            >
              <svg className="w-6 h-6 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Conteneur du carrousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-800 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Link
                      href={`/${locale}/temoignages/${testimonial.id}`}
                      className="block max-w-4xl mx-auto group cursor-pointer"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden relative transform transition-all duration-700 ease-out group-hover:scale-102">
                        {/* Image de fond */}
                        {testimonial.image && (
                          <div className="relative h-48 lg:h-64 w-full">
                            <Image
                              src={testimonial.image}
                              alt={locale === "fr" ? testimonial.businessFr : testimonial.businessEn}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 896px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
                          </div>
                        )}

                        <div className="p-8 lg:p-12">
                          {/* Badge "Témoignage" */}
                          <div className="absolute top-6 right-6 z-10">
                            <div className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                              {locale === "fr" ? "Témoignage" : "Testimonial"}
                            </div>
                          </div>

                          {/* Citation */}
                          <div className="text-center mb-8">
                          <div className="text-6xl text-gold-400 mb-4">"</div>
                          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 line-clamp-3">
                            {locale === "fr" ? testimonial.quoteFr : testimonial.quoteEn}
                          </p>
                          
                          {/* Étoiles */}
                          <div className="flex justify-center mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-6 h-6 text-gold-500 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>

                          {/* Nom et entreprise */}
                          <div>
                            <h4 className="text-xl font-bold text-marine-900 mb-2">
                              {locale === "fr" ? testimonial.nameFr : testimonial.nameEn}
                            </h4>
                            <p className="text-marine-600">
                              {locale === "fr" ? testimonial.businessFr : testimonial.businessEn}
                            </p>
                          </div>
                        </div>

                          {/* Indicateur "Lire plus" */}
                          <div className="text-center">
                            <div className="inline-flex items-center text-marine-600 group-hover:text-marine-800 transition-colors duration-500">
                              <span className="text-sm font-medium">
                                {locale === "fr" ? "Lire le témoignage complet" : "Read full testimonial"}
                              </span>
                              <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicateurs centrés */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className="w-3 h-3 rounded-full transition-colors cursor-pointer"
                  style={{
                    backgroundColor: index === currentTestimonial ? '#000000' : '#ffffff'
                  }}
                />
              ))}
            </div>
          </div>
          ) : (
            /* Grille des secteurs */
            <div className="h-full flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentData.map((sector) => (
              <Link
                key={sector.id}
                href={`/${locale}/secteurs/${sector.id}`}
                className={`
                  relative group cursor-pointer transform transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-2 block
                  ${hoveredSector === sector.id ? 'z-10' : 'z-0'}
                `}
                onMouseEnter={() => setHoveredSector(sector.id)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                {/* Carte principale */}
                <div className="relative h-48 lg:h-56 rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 ease-out group-hover:shadow-xl flex flex-col justify-end p-6">
                  {/* Image de fond */}
                  {sector.image && (
                    <Image
                      src={sector.image}
                      alt={locale === "fr" ? sector.titleFr : sector.titleEn}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Contenu de la carte - État normal */}
                  <div className="relative z-10 text-center transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-y-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      {locale === "fr" ? sector.titleFr : sector.titleEn}
                    </h3>
                    <p className="text-white/90 text-sm mt-1">
                      {locale === "fr" ? sector.descriptionFr : sector.descriptionEn}
                    </p>
                  </div>

                  {/* Contenu de la carte - État hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-center">
                      <div 
                        className="rounded-md px-6 py-3 shadow-lg transform-gpu" 
                        style={{ 
                          backgroundColor: getButtonColor(),
                          backfaceVisibility: 'hidden',
                          WebkitFontSmoothing: 'antialiased',
                          MozOsxFontSmoothing: 'grayscale'
                        }}
                      >
                        <span className="text-black font-semibold text-sm antialiased">
                          {locale === "fr" ? "En savoir plus" : "Learn more"}
                        </span>
                        <svg className="inline-block ml-2 w-5 h-5 text-black transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Indicateur de sélection */}
                <div 
                  className={`
                    absolute -bottom-2 left-1/2 transform -translate-x-1/2
                    w-8 h-1 rounded-full shadow-lg transition-all duration-300
                    ${hoveredSector === sector.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                  `}
                  style={{ backgroundColor: '#dcb26b' }}
                ></div>
              </Link>
            ))}
              </div>
              
              {/* Paragraphe d'encouragement pour Types et Styles */}
              <div className="mt-12 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-marine-900 mb-6">
                  {locale === "fr" ? "Est-ce qu'Octogone s'adresse à mon entreprise ?" : "Is Octogone right for my business?"}
                </h3>
                <p className="text-marine-700 text-lg leading-relaxed">
                  {locale === "fr" ? (
                    <>
                      Octogone s'adapte à tous les types d'établissements et de modèles d'affaires. 
                      Si vous pensez que notre solution pourrait vous être utile, 
                      <span className="font-semibold text-marine-900"> n'hésitez pas à contacter notre service à la clientèle</span> 
                      {" "}pour discuter de vos besoins spécifiques.
                    </>
                  ) : (
                    <>
                      Octogone adapts to all types of establishments and business models. 
                      If you think our solution could be useful to you, 
                      <span className="font-semibold text-marine-900"> don't hesitate to contact our customer service</span> 
                      {" "}to discuss your specific needs.
                    </>
                  )}
                </p>
                
                {/* Bouton Nous contacter */}
                <div className="mt-8">
                  <OctogoneButton
                    href={`/${locale}/contact`}
                    variant="primary"
                    size="lg"
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    }
                  >
                    {locale === "fr" ? "Nous contacter" : "Contact us"}
                  </OctogoneButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default TargetSectors;
