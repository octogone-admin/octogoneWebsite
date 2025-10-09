"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ResponsiveSection } from "@/components/ui/responsive-section";

// Types pour les secteurs cibles
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

// Données des secteurs cibles
const targetSectors: TargetSector[] = [
  {
    id: "restaurants",
    titleFr: "Restaurants",
    titleEn: "Restaurants",
    descriptionFr: "Indépendants & franchisés",
    descriptionEn: "Independent & franchised",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    gradient: "from-marine-400 to-marine-600",
    hoverGradient: "from-marine-500 to-marine-700"
  },
  {
    id: "chains",
    titleFr: "Chaînes",
    titleEn: "Chains",
    descriptionFr: "Multi-établissements",
    descriptionEn: "Multi-location",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    gradient: "from-gold-400 to-gold-600",
    hoverGradient: "from-gold-500 to-gold-700"
  },
  {
    id: "hotels",
    titleFr: "Hôtels",
    titleEn: "Hotels",
    descriptionFr: "Restauration hôtelière",
    descriptionEn: "Hotel dining",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    gradient: "from-marine-500 to-marine-700",
    hoverGradient: "from-marine-600 to-marine-800"
  },
  {
    id: "catering",
    titleFr: "Traiteurs",
    titleEn: "Caterers",
    descriptionFr: "Événementiel & corporate",
    descriptionEn: "Events & corporate",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
    gradient: "from-gold-500 to-gold-700",
    hoverGradient: "from-gold-600 to-gold-800"
  },
  {
    id: "rpa",
    titleFr: "RPA",
    titleEn: "Senior Living",
    descriptionFr: "Résidences pour aînés",
    descriptionEn: "Senior residences",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    gradient: "from-marine-600 to-marine-800",
    hoverGradient: "from-marine-700 to-marine-900"
  },
  {
    id: "retail",
    titleFr: "Commerce",
    titleEn: "Retail",
    descriptionFr: "Alimentaire & détail",
    descriptionEn: "Food & retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    gradient: "from-yellow-600 to-yellow-800",
    hoverGradient: "from-yellow-700 to-yellow-900"
  }
];

// Données des styles de restaurants
const restaurantStyles: TargetSector[] = [
  {
    id: "fine-dining",
    titleFr: "Gastronomique",
    titleEn: "Fine Dining",
    descriptionFr: "Haute gastronomie",
    descriptionEn: "High-end cuisine",
    image: "",
    gradient: "from-blue-400 to-blue-600",
    hoverGradient: "from-blue-500 to-blue-700"
  },
  {
    id: "casual",
    titleFr: "Décontracté",
    titleEn: "Casual Dining",
    descriptionFr: "Ambiance détendue",
    descriptionEn: "Relaxed atmosphere",
    image: "",
    gradient: "from-yellow-400 to-yellow-600",
    hoverGradient: "from-yellow-500 to-yellow-700"
  },
  {
    id: "fast-casual",
    titleFr: "Rapide Premium",
    titleEn: "Fast-Casual",
    descriptionFr: "Service rapide, qualité",
    descriptionEn: "Quick service, quality",
    image: "",
    gradient: "from-blue-500 to-blue-700",
    hoverGradient: "from-blue-600 to-blue-800"
  },
  {
    id: "qsr",
    titleFr: "Restauration Rapide",
    titleEn: "Quick Service",
    descriptionFr: "Service ultra-rapide",
    descriptionEn: "Ultra-fast service",
    image: "",
    gradient: "from-yellow-500 to-yellow-700",
    hoverGradient: "from-yellow-600 to-yellow-800"
  },
  {
    id: "food-truck",
    titleFr: "Camion Restaurant",
    titleEn: "Food Truck",
    descriptionFr: "Mobile & flexible",
    descriptionEn: "Mobile & flexible",
    image: "",
    gradient: "from-blue-600 to-blue-800",
    hoverGradient: "from-blue-700 to-blue-900"
  },
  {
    id: "buffet",
    titleFr: "Buffet",
    titleEn: "Buffet",
    descriptionFr: "Service libre-service",
    descriptionEn: "Self-service dining",
    image: "",
    gradient: "from-yellow-600 to-yellow-800",
    hoverGradient: "from-yellow-700 to-yellow-900"
  }
];

// Données des témoignages clients
interface Testimonial {
  id: string;
  nameFr: string;
  nameEn: string;
  businessFr: string;
  businessEn: string;
  quoteFr: string;
  quoteEn: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "mario-rossi",
    nameFr: "Mario Rossi",
    nameEn: "Mario Rossi",
    businessFr: "Restaurant Mario - Cuisine italienne",
    businessEn: "Restaurant Mario - Italian Cuisine",
    quoteFr: "Octogone a transformé notre gestion. Nous avons réduit nos coûts de 25% en 6 mois grâce à Cortex qui anticipe parfaitement nos besoins.",
    quoteEn: "Octogone transformed our management. We reduced our costs by 25% in 6 months thanks to Cortex perfectly anticipating our needs.",
    rating: 5
  },
  {
    id: "laurent-dubois",
    nameFr: "Laurent Dubois",
    nameEn: "Laurent Dubois",
    businessFr: "Bistro Laurent - Bistro français",
    businessEn: "Bistro Laurent - French Bistro",
    quoteFr: "L'automatisation des inventaires nous fait gagner 3h par jour. L'interface est intuitive et l'équipe s'est adaptée en une semaine.",
    quoteEn: "Inventory automation saves us 3 hours per day. The interface is intuitive and the team adapted in one week.",
    rating: 5
  },
  {
    id: "yuki-tanaka",
    nameFr: "Yuki Tanaka",
    nameEn: "Yuki Tanaka",
    businessFr: "Sushi Zen - Restaurant japonais",
    businessEn: "Sushi Zen - Japanese Restaurant",
    quoteFr: "Les prédictions de Cortex sont impressionnantes. Nous n'avons plus de ruptures de stock et nos marges ont augmenté de 18%.",
    quoteEn: "Cortex's predictions are impressive. We no longer have stock shortages and our margins increased by 18%.",
    rating: 5
  },
  {
    id: "sophie-martin",
    nameFr: "Sophie Martin",
    nameEn: "Sophie Martin",
    businessFr: "Café Central - Chaîne de 12 établissements",
    businessEn: "Café Central - Chain of 12 locations",
    quoteFr: "La vue d'ensemble sur nos 12 cafés est un game-changer. Octogone nous permet de piloter efficacement notre croissance.",
    quoteEn: "The overview of our 12 cafes is a game-changer. Octogone allows us to efficiently manage our growth.",
    rating: 5
  }
];

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

  return (
    <ResponsiveSection
      as="section"
      spacing="xxl"
      className="relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at top left, #e5f1ff 0%, #ddeeff 25%, #e5f1ff 50%, #d5ebff 75%, #e5f1ff 100%)'
      }}
    >
      {/* Fond décoratif avec octogones en filigrane */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-marine-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gold-500 rounded-full blur-3xl"></div>
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
                backgroundColor: activeTab === 'business' ? '#dcb26b' : 'transparent',
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
                backgroundColor: activeTab === 'styles' ? '#dcb26b' : 'transparent',
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
                backgroundColor: activeTab === 'testimonials' ? '#dcb26b' : 'transparent',
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

        {/* Affichage conditionnel : Grille ou Carrousel */}
        {activeTab === 'testimonials' ? (
          /* Carrousel de cartes de témoignages */
          <div className="relative">
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
                      <div className="bg-white rounded-2xl p-8 lg:p-12 relative transform transition-all duration-700 ease-out group-hover:scale-102">
                        {/* Badge "Témoignage" */}
                        <div className="absolute top-6 right-6">
                          <div className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentTestimonial ? 'bg-gold-500' : 'bg-gray-300'
                  }`}
                  style={{
                    backgroundColor: index === currentTestimonial ? '#dcb26b' : '#d1d5db'
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grille des secteurs */
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
                  {/* Contenu de la carte */}
                  <div className="text-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                      {locale === "fr" ? sector.titleFr : sector.titleEn}
                    </h3>
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
        )}

      </div>
    </ResponsiveSection>
  );
};

export default TargetSectors;
