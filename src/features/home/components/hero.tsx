"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Rocket, Settings, BarChart3, Brain } from "lucide-react";
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

  // Calculer la hauteur du header dynamiquement
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector('header') as HTMLElement;
      const banner = document.querySelector('.announcement-banner') as HTMLElement;
      let totalHeight = 0;
      
      if (header) {
        totalHeight += header.offsetHeight;
      }
      if (banner && window.getComputedStyle(banner).display !== 'none') {
        totalHeight += banner.offsetHeight;
      }
      
      setHeaderHeight(totalHeight);
    };

    calculateHeaderHeight();
    window.addEventListener('resize', calculateHeaderHeight);
    
    // Observer pour détecter les changements de la bannière
    const observer = new MutationObserver(calculateHeaderHeight);
    const banner = document.querySelector('.announcement-banner');
    if (banner) {
      observer.observe(banner, { attributes: true, attributeFilter: ['style', 'class'] });
    }

    return () => {
      window.removeEventListener('resize', calculateHeaderHeight);
      observer.disconnect();
    };
  }, []);

  // État pour l'animation séquentielle et le hover
  const [activeOctogone, setActiveOctogone] = useState<number | null>(0); // Démarre avec Opérer (id: 0)
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
      currentIndex = (currentIndex + 1) % sequence.length;
      setActiveOctogone(sequence[currentIndex]);
      setRotationDegrees(prev => prev + 45); // Ajoute 45° à chaque fois
    }, 5000); // Change tous les 5 secondes

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
      LucideIcon: Rocket,
      color: "text-marine-500",
      pastelColor: "#B8E0D2", // Vert menthe pastel
      position: "top-left",
      media: "https://video-previews.elements.envatousercontent.com/files/4d84a701-5c1b-47d2-bcee-fe25efab5926/video_preview_h264.mp4",
      mediaType: "video",
      link: "/features/operate"
    },
    {
      id: 1,
      titleFr: "Automatiser",
      titleEn: "Automate",
      descFr: "Recettes et processus automatisés",
      descEn: "Automated recipes and processes",
      LucideIcon: Settings,
      color: "text-gold-500",
      pastelColor: "#B4D4FF", // Bleu ciel pastel
      position: "top-right",
      media: "https://video-previews.elements.envatousercontent.com/files/a7d69e9a-192d-41bb-ae64-ebf5b295cfeb/video_preview_h264.mp4",
      mediaType: "video",
      link: "/features/automate"
    },
    {
      id: 2,
      titleFr: "Analyser",
      titleEn: "Analyze",
      descFr: "Food cost et optimisation",
      descEn: "Food cost and optimization",
      LucideIcon: BarChart3,
      color: "text-marine-500",
      pastelColor: "#FFE5B4", // Jaune pastel
      position: "bottom-right",
      media: "https://video-previews.elements.envatousercontent.com/7e71a914-f289-4e20-9519-bc1721bece49/watermarked_preview/watermarked_preview.mp4",
      mediaType: "video",
      link: "/features/analyze"
    },
    {
      id: 3,
      titleFr: "Prédire",
      titleEn: "Predict",
      descFr: "IA qui anticipe vos besoins",
      descEn: "AI that anticipates your needs",
      LucideIcon: Brain,
      color: "text-gold-500",
      pastelColor: "#C8B6FF", // Mauve du dégradé Cortex
      position: "bottom-left",
      media: "https://video-previews.elements.envatousercontent.com/e341f344-626e-40a6-ab21-24c2140998d1/watermarked_preview/watermarked_preview.mp4",
      mediaType: "video",
      link: "/features/predict"
    }
  ];

  return (
    <section 
      className="relative bg-white overflow-hidden flex items-center"
      aria-labelledby="hero-title"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full">
        {/* Fond décoratif */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-marine-50 rounded-bl-[100px] opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold-100 rounded-tr-[70px] opacity-60" />
        </div>

        <div className="relative z-10 w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Octogones interconnectés - Masqué sur mobile */}
            <div className="hidden lg:flex justify-center items-center h-full mt-0 pt-0 mb-2 xs:mb-4 lg:mb-8 order-first lg:order-last">
              <div className="relative w-full max-w-[220px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[580px] h-[220px] xs:h-[280px] sm:h-[340px] md:h-[400px] lg:h-[480px] xl:h-[580px] flex justify-center items-center overflow-visible">
                
                {/* Lignes de connexion - Derrière tout (4 lignes pour 4 octogones) */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  {/* Coins */}
                  <line 
                    x1="50%" y1="50%" x2="10%" y2="10%" 
                    stroke={activeOctogone === 0 ? octogones[0].pastelColor : "#000000"} 
                    strokeWidth="4" 
                    strokeDasharray="1,8"
                    strokeLinecap="round"
                    style={{ transition: 'stroke 0.5s linear' }}
                  />
                  <line 
                    x1="50%" y1="50%" x2="90%" y2="10%" 
                    stroke={activeOctogone === 1 ? octogones[1].pastelColor : "#000000"} 
                    strokeWidth="4" 
                    strokeDasharray="1,8"
                    strokeLinecap="round"
                    style={{ transition: 'stroke 0.5s linear' }}
                  />
                  <line 
                    x1="50%" y1="50%" x2="10%" y2="90%" 
                    stroke={activeOctogone === 3 ? octogones[3].pastelColor : "#000000"} 
                    strokeWidth="4" 
                    strokeDasharray="1,8"
                    strokeLinecap="round"
                    style={{ transition: 'stroke 0.5s linear' }}
                  />
                  <line 
                    x1="50%" y1="50%" x2="90%" y2="90%" 
                    stroke={activeOctogone === 2 ? octogones[2].pastelColor : "#000000"} 
                    strokeWidth="4" 
                    strokeDasharray="1,8"
                    strokeLinecap="round"
                    style={{ transition: 'stroke 0.5s linear' }}
                  />
                </svg>

                {/* Octogone central principal */}
                <div 
                  ref={octogoneRef}
                  className="absolute w-[140px] xs:w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px] xl:w-[380px] h-[140px] xs:h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px]"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    zIndex: 5,
                    transformOrigin: "center center",
                    transform: `scale(${octogoneScale}) rotate(${rotationDegrees}deg)`,
                    transition: 'transform 0.5s ease-out',
                    backgroundColor: '#ffffff',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transform: `rotate(-${rotationDegrees}deg)`,
                    transition: 'transform 0.5s ease-out'
                  }}>
                    {activeOctogone !== null && octogones[activeOctogone].mediaType === 'video' ? (
                      <>
                        <video
                          key={activeOctogone}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{
                            animation: 'fadeIn 0.5s ease-out'
                          }}
                          poster={activeOctogone === 0 ? '/operate.jpg' : activeOctogone === 3 ? '/predict.jpg' : '/resto.jpg'}
                        >
                          <source src={octogones[activeOctogone].media} type="video/mp4" />
                          {/* Fallback image si la vidéo ne charge pas */}
                          <Image
                            src={activeOctogone === 0 ? '/operate.jpg' : activeOctogone === 3 ? '/predict.jpg' : '/resto.jpg'}
                            alt="Restaurant"
                            fill
                            className="object-cover"
                          />
                        </video>
                      </>
                    ) : (
                      <Image
                        key={activeOctogone !== null ? activeOctogone : 0}
                        src={activeOctogone !== null ? octogones[activeOctogone].media : octogones[0].media}
                        alt="Restaurant"
                        fill
                        className="object-cover"
                        style={{
                          animation: 'fadeIn 0.5s ease-out'
                        }}
                        priority
                        sizes="(max-width: 768px) 220px, (max-width: 1024px) 320px, 380px"
                      />
                    )}
                  </div>
                  <style jsx>{`
                    @keyframes fadeIn {
                      from {
                        opacity: 0;
                      }
                      to {
                        opacity: 1;
                      }
                    }
                  `}</style>
                </div>

                {/* Octogones satellites avec interaction */}
                {octogones.map((oct, index) => {
                  const isActive = activeOctogone === oct.id || hoveredOctogone === oct.id;
                  const positionClasses = {
                    'top-left': '-top-4 -left-4 xs:-top-6 xs:-left-6 sm:-top-8 sm:-left-8',
                    'top-right': '-top-4 -right-4 xs:-top-6 xs:-right-6 sm:-top-8 sm:-right-8',
                    'bottom-left': '-bottom-4 -left-4 xs:-bottom-6 xs:-left-6 sm:-bottom-8 sm:-left-8',
                    'bottom-right': '-bottom-4 -right-4 xs:-bottom-6 xs:-right-6 sm:-bottom-8 sm:-right-8'
                  };

                  return (
                    <Link 
                      key={oct.id}
                      href={`/${locale}${oct.link}`}
                      className={`absolute ${positionClasses[oct.position as keyof typeof positionClasses]} w-[60px] xs:w-[80px] sm:w-[100px] md:w-[130px] lg:w-[160px] h-[60px] xs:h-[80px] sm:h-[100px] md:h-[130px] lg:h-[160px] shadow-lg flex flex-col items-center justify-center cursor-pointer`}
                      style={{
                        clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                        zIndex: 3,
                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                        boxShadow: isActive ? '0 10px 30px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
                        backgroundColor: isActive ? oct.pastelColor : '#ffffff',
                        transition: 'all 0.5s linear'
                      }}
                      onMouseEnter={() => setHoveredOctogone(oct.id)}
                      onMouseLeave={() => setHoveredOctogone(null)}
                    >
                      <oct.LucideIcon 
                        className={`w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 ${oct.color}`}
                        style={{ transition: 'all 0.5s linear' }}
                      />
                      <span className="text-[7px] xs:text-[8px] sm:text-[9px] lg:text-xs font-semibold text-marine-900 mt-0.5 xs:mt-1 text-center px-0.5 xs:px-1">
                        {locale === 'fr' ? oct.titleFr : oct.titleEn}
                      </span>
                    </Link>
                  );
                })}

              </div>
            </div>

            {/* Contenu textuel - En bas sur mobile */}
            <div className="flex flex-col space-y-2 sm:space-y-3 lg:space-y-4 text-center lg:text-left order-last lg:order-first">
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
                    <>La plateforme qui optimise <span className="text-gold-500">vraiment</span> la gestion de vos restaurants</>
                  ) : (
                    <>The platform that <span className="text-gold-500">truly</span> optimizes your restaurants management</>
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
                    ? "Gérez tous vos établissements depuis une seule plateforme. Maîtrisez vos inventaires et food cost, et laissez Cortex, notre agent IA, vous guider vers une rentabilité optimale." 
                    : "Manage all your locations from one platform. Master your inventory and food cost, and let Cortex, our AI agent, guide you to optimal profitability."
                })}
              </p>

              {/* Boutons d'action */}
              <div className="mt-2 xs:mt-4 lg:mt-6 flex justify-center lg:justify-start" role="group" aria-label={locale === 'fr' ? 'Actions principales' : 'Main actions'}>
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
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
