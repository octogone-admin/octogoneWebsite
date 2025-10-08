"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { useScaleIn } from "@/hooks/use-scroll-scale";
import { useTranslation } from "../../../../lib/i18n/client";
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
  
  // État pour stocker la fonction de traduction
  const [t, setT] = useState<any>(() => (key: string, options?: any) => {
    return (options?.defaultValue || key);
  });
  
  // Initialiser les traductions
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const { t: translationFunc } = await useTranslation(locale, "home");
        setT(() => translationFunc);
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    };
    
    loadTranslations();
  }, [locale]);
  
  // Référence pour l'effet de défilement
  const heroRef = useRef<HTMLDivElement>(null);

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
  
  // Ajuster la taille initiale en fonction de la taille de l'écran
  const octogoneScale = useScaleIn({
    initialScale: isMobile ? 0.95 : 1.15,
    finalScale: 0.95,
    scrollRange: 250
  });

  return (
    <ResponsiveSection
      as="section"
      bgColor="bg-white"
      spacing="lg"
      className="flex flex-col justify-between overflow-hidden"
    >
      <div ref={heroRef} className="w-full h-full relative">
        {/* Fond décoratif */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-marine-50 rounded-bl-[100px] opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold-100 rounded-tr-[70px] opacity-60" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-3 xs:gap-6 lg:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image avec fond bleu clair - En haut sur mobile */}
            <div className="flex justify-center items-center h-full mt-0 mb-2 xs:mb-4 lg:mb-8 order-first lg:order-last">
              <div className="relative w-full max-w-[260px] xs:max-w-[320px] md:max-w-[380px] lg:max-w-[480px] xl:max-w-[580px] h-[260px] xs:h-[320px] md:h-[380px] lg:h-[480px] xl:h-[580px] flex justify-center items-center">
                {/* Octogone bleu de fond avec animation de scale au scroll */}
                <div 
                  ref={heroRef}
                  className="absolute w-[260px] xs:w-[340px] md:w-[380px] lg:w-[490px] xl:w-[590px] h-[260px] xs:h-[340px] md:h-[380px] lg:h-[490px] xl:h-[590px] bg-[#dbeafe] transition-transform duration-300 ease-out"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    zIndex: 2,
                    transformOrigin: "center center",
                    transform: `scale(${octogoneScale})`
                  }}
                />
                
                {/* Image principale */}
                <Image
                  src="/images/serious_octogone_users.png?v=2"
                  alt="Utilisateurs professionnels d'Octogone"
                  width={500}
                  height={500}
                  priority
                  className="relative z-[5] w-[190px] xs:w-[260px] h-[190px] xs:h-[260px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[460px] xl:h-[460px]"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Contenu textuel - En bas sur mobile */}
            <div className="flex flex-col gap-2 xs:gap-3 lg:gap-4 lg:gap-6 text-center lg:text-left pt-0 order-last lg:order-first">
              {/* Titre principal - maintenant le slogan */}
              <h1 className="text-3xl xs:text-4xl lg:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wide mb-2 xs:mb-3 lg:mb-4">
                {locale === "fr" ? (
                  <>Opérer, analyser, prédire</>
                ) : (
                  <>Operate, analyze, predict</>
                )}
              </h1>

              {/* Sous-titre - maintenant l'explication */}
              <div className="text-center lg:text-left">
                <p className="text-lg xs:text-xl lg:text-2xl xl:text-3xl font-semibold text-marine-600 tracking-wide">
                  {locale === "fr" ? (
                    <>La plateforme qui révolutionne la <span className="text-gold-500">gestion</span> de votre restaurant</>
                  ) : (
                    <>The platform that revolutionizes your <span className="text-gold-500">restaurant</span> management</>
                  )}
                </p>
              </div>

              {/* Description */}
              <p className="mt-0.5 xs:mt-1 lg:mt-2 text-xs xs:text-sm lg:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto lg:mx-0">
                {locale === "fr" ? 
                  "Maîtrisez vos inventaires et food cost, transformez vos données en insights stratégiques et laissez Cortex vous guider vers une rentabilité optimale." : 
                  "Master your inventory and food cost, transform your data into strategic insights, and let Cortex guide you to optimal profitability."}
              </p>

              {/* Boutons d'action */}
              <div className="mt-2 xs:mt-4 lg:mt-6 flex flex-row gap-2 xs:gap-3 lg:gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="default"
                  className="btn-gold text-sm lg:text-base font-medium w-full sm:w-auto py-1.5 lg:py-2 px-3 lg:px-4"
                >
                  {locale === "fr" ? "Voir la plateforme en action" : "See the platform in action"}
                  <ArrowRight className="ml-2 h-4 w-4 hidden lg:inline" />
                </Button>

                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center rounded-md px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base font-medium text-marine-700 hover:text-marine-900 transition-colors w-full sm:w-auto"
                >
                  {locale === "fr" ? "Démo personnalisée" : "Custom demo"}
                  <ArrowRight className="ml-2 h-4 w-4 hidden lg:inline" />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Carrousel de logos clients en bas du Hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-auto pt-16 xs:pt-20 lg:pt-24 xl:pt-32">
          <div className="w-full">
            <LogoMarquee
              logos={clientLogos}
              title={locale === "fr" ? "Partenaire de leur succès" : "Partner in their success"}
              titleClassName="text-sm lg:text-lg"
            />
          </div>
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default Hero;
