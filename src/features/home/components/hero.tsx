"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { useScaleIn } from "@/hooks/use-scroll-scale";
import { useParams } from "next/navigation";

// Définition du type pour les logos des clients
interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

// Exemples de logos clients
const clientLogos: ClientLogo[] = [
  {
    id: 1,
    name: "Restaurant A",
    logo: "/images/clients/client1.svg",
    alt: "Logo Restaurant A",
  },
  {
    id: 2,
    name: "Restaurant B",
    logo: "/images/clients/client2.svg",
    alt: "Logo Restaurant B",
  },
  {
    id: 3,
    name: "Restaurant C",
    logo: "/images/clients/client3.svg",
    alt: "Logo Restaurant C",
  },
  {
    id: 4,
    name: "Restaurant D",
    logo: "/images/clients/client4.svg",
    alt: "Logo Restaurant D",
  },
  {
    id: 5,
    name: "Restaurant E",
    logo: "/images/clients/client5.svg",
    alt: "Logo Restaurant E",
  },
  {
    id: 6,
    name: "Restaurant F",
    logo: "/images/clients/client6.svg",
    alt: "Logo Restaurant F",
  },
  {
    id: 7,
    name: "Restaurant G",
    logo: "/images/clients/client7.svg",
    alt: "Logo Restaurant G",
  },
  {
    id: 8,
    name: "Restaurant H",
    logo: "/images/clients/client8.svg",
    alt: "Logo Restaurant H",
  },
];

/**
 * Composant Hero - Section principale de la page d'accueil (VERSION SANS ANIMATIONS)
 */
const Hero = () => {
  // Récupérer la locale actuelle des paramètres d'URL
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";
  
  // Fonction de traduction simple (les traductions seront ajoutées plus tard dans les fichiers i18n)
  const t = (key: string, options?: { defaultValue?: string }) => {
    return options?.defaultValue || key;
  };
  
  // Références pour les effets de défilement
  const heroRef = useRef<HTMLDivElement>(null);
  const octogoneRef = useRef<HTMLDivElement>(null);

  // État pour l'animation séquentielle et le hover
  const [activeOctogone, setActiveOctogone] = useState<number | null>(null);
  const [hoveredOctogone, setHoveredOctogone] = useState<number | null>(null);
  const [rotationDegrees, setRotationDegrees] = useState<number>(0);

  // Détecter si on est sur mobile pour ajuster la taille initiale
  const [isMobile, setIsMobile] = useState(false);
  
  // Vérifier la taille de l'écran au chargement et lors du redimensionnement
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Animation séquentielle des octogones au chargement
  useEffect(() => {
    // Séquence horaire : 10h (0) → 13h (1) → 16h (2) → 20h (3)
    // Opérer → Automatiser → Analyser → Prédire
    const sequence = [0, 1, 2, 3];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setActiveOctogone(sequence[currentIndex]);
      setRotationDegrees(prev => prev + 45); // Ajoute 45° à chaque fois
      currentIndex = (currentIndex + 1) % sequence.length;
    }, 3000); // Change tous les 3 secondes

    return () => clearInterval(interval);
  }, []);
  
  // Ajuster la taille initiale en fonction de la taille de l'écran
  const octogoneScale = useScaleIn({
    initialScale: isMobile ? 0.85 : 0.95,
    finalScale: 0.85,
    scrollRange: 250
  });

  // Données des octogones (4 au total - Opérer, Automatiser, Analyser, Prédire)
  const octogones = [
    {
      id: 0,
      titleFr: "Opérer",
      titleEn: "Operate",
      descFr: "Gérez vos inventaires en temps réel",
      descEn: "Manage your inventory in real-time",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      color: "text-marine-500",
      position: "top-left"
    },
    {
      id: 1,
      titleFr: "Automatiser",
      titleEn: "Automate",
      descFr: "Recettes et processus automatisés",
      descEn: "Automated recipes and processes",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      color: "text-gold-500",
      position: "top-right"
    },
    {
      id: 2,
      titleFr: "Analyser",
      titleEn: "Analyze",
      descFr: "Food cost et optimisation",
      descEn: "Food cost and optimization",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      color: "text-marine-500",
      position: "bottom-right"
    },
    {
      id: 3,
      titleFr: "Prédire",
      titleEn: "Predict",
      descFr: "IA qui anticipe vos besoins",
      descEn: "AI that anticipates your needs",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "text-gold-500",
      position: "bottom-left"
    }
  ];

  return (
    <ResponsiveSection
      as="section"
      bgColor="bg-white"
      spacing="lg"
      className="flex flex-col justify-between overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div ref={heroRef} className="w-full h-full relative">
        {/* Fond décoratif */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-marine-50 rounded-bl-[100px] opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold-100 rounded-tr-[70px] opacity-60" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-3 xs:gap-6 lg:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Octogones interconnectés - En haut sur mobile */}
            <div className="flex justify-center items-center h-full mt-0 mb-2 xs:mb-4 lg:mb-8 order-first lg:order-last">
              <div className="relative w-full max-w-[260px] xs:max-w-[320px] md:max-w-[380px] lg:max-w-[480px] xl:max-w-[580px] h-[260px] xs:h-[320px] md:h-[380px] lg:h-[480px] xl:h-[580px] flex justify-center items-center">
                
                {/* Lignes de connexion - Derrière tout (4 lignes pour 4 octogones) */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  {/* Coins */}
                  <line 
                    x1="50%" y1="50%" x2="10%" y2="10%" 
                    stroke={activeOctogone === 0 ? "#BADFF6" : "#000000"} 
                    strokeWidth="3" 
                    strokeDasharray="8,4"
                    style={{ transition: 'stroke 0.5s linear' }}
                  />
                  <line 
                    x1="50%" y1="50%" x2="90%" y2="10%" 
                    stroke={activeOctogone === 1 ? "#BADFF6" : "#000000"} 
                    strokeWidth="3" 
                    strokeDasharray="8,4"
                    style={{ transition: 'stroke 0.5s linear' }}
                  />
                  <line 
                    x1="50%" y1="50%" x2="10%" y2="90%" 
                    stroke={activeOctogone === 2 ? "#BADFF6" : "#000000"} 
                    strokeWidth="3" 
                    strokeDasharray="8,4"
                    style={{ transition: 'stroke 0.5s linear' }}
                  />
                  <line 
                    x1="50%" y1="50%" x2="90%" y2="90%" 
                    stroke={activeOctogone === 3 ? "#BADFF6" : "#000000"} 
                    strokeWidth="3" 
                    strokeDasharray="8,4"
                    style={{ transition: 'stroke 0.5s linear' }}
                  />
                </svg>

                {/* Octogone central principal */}
                <div 
                  ref={octogoneRef}
                  className="absolute w-[180px] xs:w-[220px] md:w-[260px] lg:w-[320px] xl:w-[380px] h-[180px] xs:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] bg-[#dbeafe] flex items-center justify-center"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    zIndex: 5,
                    transformOrigin: "center center",
                    transform: `scale(${octogoneScale}) rotate(${rotationDegrees}deg)`,
                    transition: 'transform 0.5s ease-out'
                  }}
                >
                  <div style={{ 
                    transform: `rotate(-${rotationDegrees}deg)`,
                    transition: 'transform 0.5s ease-out'
                  }}>
                    <Image
                      src="/cortex.svg"
                      alt="Cortex AI"
                      width={120}
                      height={120}
                      className="w-20 h-20 lg:w-28 lg:h-28"
                      style={{ filter: 'brightness(0)' }}
                    />
                  </div>
                </div>

                {/* Octogones satellites avec interaction */}
                {octogones.map((oct, index) => {
                  const isActive = activeOctogone === oct.id || hoveredOctogone === oct.id;
                  const positionClasses = {
                    'top-left': '-top-8 -left-8',
                    'top-right': '-top-8 -right-8',
                    'bottom-left': '-bottom-8 -left-8',
                    'bottom-right': '-bottom-8 -right-8'
                  };

                  return (
                    <div 
                      key={oct.id}
                      className={`absolute ${positionClasses[oct.position as keyof typeof positionClasses]} w-[90px] xs:w-[110px] md:w-[130px] lg:w-[160px] h-[90px] xs:h-[110px] md:h-[130px] lg:h-[160px] shadow-lg flex flex-col items-center justify-center cursor-pointer`}
                      style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                        zIndex: 3,
                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                        boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
                        backgroundColor: isActive ? '#BADFF6' : '#ffffff',
                        transition: 'all 0.5s linear'
                      }}
                      onMouseEnter={() => setHoveredOctogone(oct.id)}
                      onMouseLeave={() => setHoveredOctogone(null)}
                    >
                      <svg className={`w-10 h-10 lg:w-14 lg:h-14 ${oct.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ transition: 'all 0.5s linear' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={oct.icon} />
                      </svg>
                      <span className="text-[8px] xs:text-[9px] lg:text-xs font-semibold text-marine-900 mt-1 text-center px-1">
                        {locale === 'fr' ? oct.titleFr : oct.titleEn}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Contenu textuel - En bas sur mobile */}
            <div className="flex flex-col gap-2 xs:gap-3 lg:gap-4 lg:gap-6 text-center lg:text-left pt-0 order-last lg:order-first">
              {/* Titre principal - maintenant le slogan */}
              <h1 
                id="hero-title"
                className="font-bold tracking-wide mb-2 xs:mb-3 lg:mb-4"
                style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)', lineHeight: '1.1' }}
              >
                {t('hero.title', { defaultValue: locale === 'fr' ? 'Opérer, automatiser, analyser, prédire' : 'Operate, automate, analyze, predict' })}
              </h1>

              {/* Sous-titre - maintenant l'explication */}
              <div className="text-center lg:text-left">
                <p 
                  className="font-semibold text-marine-600 tracking-wide"
                  style={{ fontSize: 'clamp(1.125rem, 3vw, 1.875rem)', lineHeight: '1.3' }}
                >
                  {locale === "fr" ? (
                    <>La plateforme qui automatise la <span className="text-gold-500">gestion</span> de votre restaurant</>
                  ) : (
                    <>The platform that automates your <span className="text-gold-500">restaurant</span> management</>
                  )}
                </p>
              </div>

              {/* Description */}
              <p 
                className="mt-0.5 xs:mt-1 lg:mt-2 max-w-2xl mx-auto lg:mx-0"
                style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}
              >
                {t('hero.description', { 
                  defaultValue: locale === 'fr' 
                    ? "Maîtrisez vos inventaires et food cost, transformez vos données en insights stratégiques et laissez Cortex, notre agent IA, vous guider vers une rentabilité optimale." 
                    : "Master your inventory and food cost, transform your data into strategic insights, and let Cortex, our AI agent, guide you to optimal profitability."
                })}
              </p>

              {/* Boutons d'action */}
              <div className="mt-2 xs:mt-4 lg:mt-6 flex flex-row gap-2 xs:gap-3 lg:gap-4 justify-center lg:justify-start" role="group" aria-label={locale === 'fr' ? 'Actions principales' : 'Main actions'}>
                <Link href={`/${locale}/demo`}>
                  <Button
                    variant="primary"
                    size="default"
                    className="btn-gold text-sm lg:text-base font-medium w-full sm:w-auto py-1.5 lg:py-2 px-3 lg:px-4"
                    aria-label={locale === 'fr' ? 'Voir la plateforme en action' : 'See the platform in action'}
                  >
                    {t('hero.cta.primary', { defaultValue: locale === "fr" ? "Voir la plateforme en action" : "See the platform in action" })}
                    <ArrowRight className="ml-2 h-4 w-4 hidden lg:inline" aria-hidden="true" />
                  </Button>
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center rounded-md px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base font-medium text-marine-700 hover:text-marine-900 transition-colors w-full sm:w-auto"
                  aria-label={locale === 'fr' ? 'Demander une démo personnalisée' : 'Request a custom demo'}
                >
                  {t('hero.cta.secondary', { defaultValue: locale === "fr" ? "Démo personnalisée" : "Custom demo" })}
                  <ArrowRight className="ml-2 h-4 w-4 hidden lg:inline" aria-hidden="true" />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Carrousel de logos clients en bas du Hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-auto pt-16 xs:pt-20 lg:pt-24 xl:pt-32">
          <div className="w-full" role="region" aria-label={locale === 'fr' ? 'Nos clients partenaires' : 'Our partner clients'}>
            <LogoMarquee
              logos={clientLogos}
              title={t('hero.clients.title', { defaultValue: locale === "fr" ? "Partenaire de leur succès" : "Partner in their success" })}
              titleClassName="text-sm lg:text-lg"
            />
          </div>
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default Hero;
