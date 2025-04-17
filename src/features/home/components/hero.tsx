"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
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

// Constantes pour les hauteurs (en pixels) - commentées car non utilisées actuellement
// const BANNER_HEIGHT = 40; // --banner-height dans globals.css
// const NAVBAR_HEIGHT = 80; // h-20 dans le composant Navigation

/**
 * Composant Hero - Section principale de la page d'accueil
 *
 * Ce composant implémente des optimisations responsives pour tous les écrans :
 * - xs (376px) : Version très compacte pour les petits téléphones
 * - sm (640px) : Version compacte pour les grands téléphones
 * - md (768px) : Version tablette avec dashboard simplifié
 * - lg (1024px) : Version desktop avec animations complètes
 * - xl (1280px) : Version grand écran avec espacements généreux
 */
const Hero = () => {
  // Récupérer la locale actuelle des paramètres d'URL
  const params = useParams();
  // Utiliser React.use() pour déballer la promesse des paramètres
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";
  
  // État pour stocker la fonction de traduction
  const [t, setT] = useState<any>(() => (key: string, options?: any) => {
    // Fonction par défaut qui retourne la valeur par défaut ou la clé
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

  // État pour la bannière (variable non utilisée mais setter conservé)
  const [, setHasBanner] = useState(true);

  // État pour les hauteurs des barres du graphique
  const [barHeights, setBarHeights] = useState({
    bar1: 60,
    bar2: 75,
    bar3: 45,
    bar4: 85,
    bar5: 65,
    bar6: 70,
    bar7: 55,
  });
  
  // Utiliser le hook personnalisé pour l'animation de l'octogone
  // Détecter si on est sur mobile pour ajuster la taille initiale
  const [isMobile, setIsMobile] = useState(false);
  
  // Vérifier la taille de l'écran au chargement et lors du redimensionnement
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    // Vérifier au chargement
    checkScreenSize();
    
    // Ajouter l'écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkScreenSize);
    
    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Ajuster la taille initiale en fonction de la taille de l'écran
  const octogoneScale = useScaleIn({
    initialScale: isMobile ? 0.95 : 1.15,
    finalScale: 0.95,
    scrollRange: 250 // Plage plus courte pour une animation plus réactive
  });

  // État pour le type de graphique et son titre
  const [graphIndex, setGraphIndex] = useState(0);

  // Définition des différents graphiques et leurs titres avec les types les plus adaptés
  const graphs = locale === "fr" ? [
    { title: "Ventes", type: "bar" }, // Diagramme à barres pour comparer les ventes par jour
    { title: "Achats", type: "horizontal" }, // Barres horizontales pour comparer les catégories d'achats
    { title: "Coûts Alimentaires", type: "pie" }, // Camembert pour visualiser la répartition des coûts alimentaires
    { title: "Coûts de Main-d'œuvre", type: "horizontal" }, // Barres horizontales pour comparer les coûts par département
    { title: "Frais Fixes", type: "pie" }, // Camembert pour montrer la composition des frais fixes
    { title: "Ingénierie des Menus", type: "matrix" }, // Matrice spéciale pour l'ingénierie des menus (Étoiles, Produits Populaires, etc.)
    { title: "Achalandage", type: "line" }, // Graphique en ligne pour montrer l'évolution dans le temps
    { title: "Facture Moyenne", type: "bar" }, // Diagramme à barres pour comparer par jour
    { title: "Transferts", type: "line" }, // Graphique en ligne pour montrer les tendances sur plusieurs mois
    { title: "Surveillance des Prix", type: "line" }, // Graphique en ligne pour suivre les hausses et baisses de prix des produits
  ] : [
    { title: "Sales", type: "bar" }, // Bar chart to compare daily sales
    { title: "Purchases", type: "horizontal" }, // Horizontal bars to compare purchase categories
    { title: "Food Costs", type: "pie" }, // Pie chart to visualize food cost distribution
    { title: "Labor Costs", type: "horizontal" }, // Horizontal bars to compare costs by department
    { title: "Fixed Expenses", type: "pie" }, // Pie chart to show fixed expenses composition
    { title: "Menu Engineering", type: "matrix" }, // Special matrix for menu engineering (Stars, Popular Items, etc.)
    { title: "Customer Traffic", type: "line" }, // Line chart to show evolution over time
    { title: "Average Check", type: "bar" }, // Bar chart to compare by day
    { title: "Transfers", type: "line" }, // Line chart to show trends over multiple months
    { title: "Price Monitoring", type: "line" }, // Line chart to track product price increases and decreases
  ];

  useEffect(() => {
    // Fonction pour vérifier la visibilité de la bannière
    const checkBannerVisibility = () => {
      const bannerElement = document.querySelector(".announcement-banner");
      const isVisible =
        bannerElement &&
        window.getComputedStyle(bannerElement).display !== "none";
      setHasBanner(!!isVisible);
    };

    // Vérifier initialement
    checkBannerVisibility();

    // Observer les changements dans le DOM
    const observer = new MutationObserver(checkBannerVisibility);
    observer.observe(document.body, { childList: true, subtree: true });

    // Nettoyage
    return () => observer.disconnect();
  }, []);

  // Effet pour mettre à jour les hauteurs des barres et changer le type de graphique toutes les 5 secondes
  useEffect(() => {
    const updateDashboard = () => {
      // Mettre à jour les hauteurs des barres
      setBarHeights({
        bar1: 55 + Math.floor(Math.random() * 15),
        bar2: 70 + Math.floor(Math.random() * 10),
        bar3: 42 + Math.floor(Math.random() * 8),
        bar4: 82 + Math.floor(Math.random() * 8),
        bar5: 62 + Math.floor(Math.random() * 10),
        bar6: 67 + Math.floor(Math.random() * 8),
        bar7: 52 + Math.floor(Math.random() * 8),
      });

      // Changer le type de graphique
      setGraphIndex((prevIndex) => (prevIndex + 1) % graphs.length);
    };

    // Mettre à jour immédiatement pour éviter le délai initial
    updateDashboard();

    // Configurer l'intervalle pour les mises à jour périodiques
    const interval = setInterval(updateDashboard, 5000);

    // Nettoyage à la démontage du composant
    return () => clearInterval(interval);
  }, [graphs.length]); // Dépendance ajoutée pour respecter la règle exhaustive-deps
  
  // Le hook useScrollScale gère maintenant l'animation au défilement

  // Calcul de la hauteur totale à soustraire (commenté car non utilisé actuellement)
  // const totalOffset = hasBanner ? NAVBAR_HEIGHT + BANNER_HEIGHT : NAVBAR_HEIGHT;

  // Utilisation du composant LogoMarquee réutilisable pour le carrousel de logos

  // Effet client-side uniquement pour éviter les erreurs SSR avec les animations
  // Variables commentées car non utilisées actuellement
  // const [isClient, setIsClient] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Détection du client et de la taille de l'écran (commenté car non utilisé actuellement)
    // setIsClient(true);
    // setWindowWidth(window.innerWidth);

    // Gestion du redimensionnement pour les animations responsives (commenté car non utilisé actuellement)
    // const handleResize = () => {
    //   setWindowWidth(window.innerWidth);
    // };

    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
    
    // Nettoyage vide pour maintenir l'effet
    return () => {};
  }, []);

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
            {/* Image avec fond bleu clair et éléments flottants - En haut sur mobile */}
            <div className="flex justify-center items-center h-full mt-0 mb-2 xs:mb-4 lg:mb-8 order-first lg:order-last">
              <div className="relative w-full max-w-[260px] xs:max-w-[320px] md:max-w-[380px] lg:max-w-[480px] xl:max-w-[580px] h-[260px] xs:h-[320px] md:h-[380px] lg:h-[480px] xl:h-[580px] flex justify-center items-center">
                {/* Octogone bleu de fond avec animation directe */}
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
                
                {/* Version simplifiée du dashboard pour mobile uniquement */}
                <div
                  className="absolute z-[3] overflow-hidden rounded-lg shadow-md block md:hidden w-[140px] xs:w-[190px] h-[140px] xs:h-[190px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #003049 0%, #00456A 100%)",
                    padding: "10px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Titre simplifié */}
                  <div
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "normal",
                      marginBottom: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "17px",
                    }}
                  >
                    <span style={{ color: "white", fontWeight: "400" }}>
                      Dashboard
                    </span>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <div
                        style={{
                          width: "6.5px",
                          height: "6.5px",
                          borderRadius: "50%",
                          backgroundColor: "#3b82f6",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "6.5px",
                          height: "6.5px",
                          borderRadius: "50%",
                          backgroundColor: "#10b981",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Contenu simplifié - barres statiques */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      height: "135px",
                      padding: "0 7px",
                    }}
                  >
                    <div
                      style={{
                        width: "19px",
                        height: "60%",
                        background: "linear-gradient(to top, #3b82f6, #60a5fa)",
                        borderRadius: "3px 3px 0 0",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "19px",
                        height: "75%",
                        background: "linear-gradient(to top, #10b981, #34d399)",
                        borderRadius: "3px 3px 0 0",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "19px",
                        height: "45%",
                        background: "linear-gradient(to top, #f59e0b, #fbbf24)",
                        borderRadius: "3px 3px 0 0",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "19px",
                        height: "85%",
                        background: "linear-gradient(to top, #3b82f6, #60a5fa)",
                        borderRadius: "3px 3px 0 0",
                      }}
                    ></div>
                    <div
                      style={{
                        width: "19px",
                        height: "65%",
                        background: "linear-gradient(to top, #10b981, #34d399)",
                        borderRadius: "3px 3px 0 0",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Dashboard avec barres verticales animées en arrière-plan - version complète pour tablette/desktop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute z-[3] overflow-hidden rounded-xl shadow-lg hidden md:block md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #003049 0%, #00456A 100%)" /* Couleur Marine du thème */,
                    padding: "15px",
                    top: "80px",
                  }}
                >
                  {/* Titre du dashboard */}
                  <div
                    style={{
                      color: "white" /* Titre en blanc */,
                      fontSize: "16px",
                      fontWeight: "normal",
                      marginBottom: "25px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "20px" /* Hauteur fixe pour stabiliser */,
                    }}
                  >
                    <span style={{ color: "white", fontWeight: "400" }}>
                      {graphs[graphIndex].title}
                    </span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#3b82f6",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#10b981",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#f59e0b",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Conteneur du graphique avec AnimatePresence pour les transitions */}
                  <div
                    style={{
                      height: "200px",
                      padding: "0 10px",
                      position: "relative",
                      minHeight: "200px" /* Hauteur minimale fixe */,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow:
                        "hidden" /* Pour masquer les éléments pendant la transition */,
                    }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {/* Graphique de type barres verticales - Adapté pour Ventes, Facture Moyenne */}
                      {graphs[graphIndex].type === "bar" && (
                        <motion.div
                          key={`bar-chart-${graphIndex}`}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -100 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            height: "200px",
                            width: "100%",
                          }}
                        >
                          {/* Barre 1 */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${barHeights.bar1}%` }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                              width: "30px",
                              background:
                                "linear-gradient(to top, #3b82f6, #60a5fa)",
                              borderRadius: "4px 4px 0 0",
                              position: "relative",
                            }}
                          >
                            <motion.div
                              animate={{ height: ["0%", "100%", "0%"] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                background:
                                  "linear-gradient(to top, rgba(255, 255, 255, 0.3), transparent)",
                                borderRadius: "4px 4px 0 0",
                              }}
                            />
                          </motion.div>

                          {/* Barre 2 */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${barHeights.bar2}%` }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                              width: "30px",
                              background:
                                "linear-gradient(to top, #10b981, #34d399)",
                              borderRadius: "4px 4px 0 0",
                              position: "relative",
                            }}
                          >
                            <motion.div
                              animate={{ height: ["0%", "100%", "0%"] }}
                              transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                background:
                                  "linear-gradient(to top, rgba(255, 255, 255, 0.3), transparent)",
                                borderRadius: "4px 4px 0 0",
                              }}
                            />
                          </motion.div>

                          {/* Barre 3 */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${barHeights.bar3}%` }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                              width: "30px",
                              background:
                                "linear-gradient(to top, #f59e0b, #fbbf24)",
                              borderRadius: "4px 4px 0 0",
                              position: "relative",
                            }}
                          >
                            <motion.div
                              animate={{ height: ["0%", "100%", "0%"] }}
                              transition={{
                                duration: 3.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                background:
                                  "linear-gradient(to top, rgba(255, 255, 255, 0.3), transparent)",
                                borderRadius: "4px 4px 0 0",
                              }}
                            />
                          </motion.div>

                          {/* Barre 4 */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${barHeights.bar4}%` }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                              width: "30px",
                              background:
                                "linear-gradient(to top, #8b5cf6, #a78bfa)",
                              borderRadius: "4px 4px 0 0",
                              position: "relative",
                            }}
                          >
                            <motion.div
                              animate={{ height: ["0%", "100%", "0%"] }}
                              transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                background:
                                  "linear-gradient(to top, rgba(255, 255, 255, 0.3), transparent)",
                                borderRadius: "4px 4px 0 0",
                              }}
                            />
                          </motion.div>

                          {/* Barre 5 */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${barHeights.bar5}%` }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                              width: "30px",
                              background:
                                "linear-gradient(to top, #ef4444, #f87171)",
                              borderRadius: "4px 4px 0 0",
                              position: "relative",
                            }}
                          >
                            <motion.div
                              animate={{ height: ["0%", "100%", "0%"] }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                background:
                                  "linear-gradient(to top, rgba(255, 255, 255, 0.3), transparent)",
                                borderRadius: "4px 4px 0 0",
                              }}
                            />
                          </motion.div>

                          {/* Barre 6 */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${barHeights.bar6}%` }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                              width: "30px",
                              background:
                                "linear-gradient(to top, #0ea5e9, #38bdf8)",
                              borderRadius: "4px 4px 0 0",
                              position: "relative",
                            }}
                          >
                            <motion.div
                              animate={{ height: ["0%", "100%", "0%"] }}
                              transition={{
                                duration: 2.7,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                background:
                                  "linear-gradient(to top, rgba(255, 255, 255, 0.3), transparent)",
                                borderRadius: "4px 4px 0 0",
                              }}
                            />
                          </motion.div>

                          {/* Barre 7 */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${barHeights.bar7}%` }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                              width: "30px",
                              background:
                                "linear-gradient(to top, #14b8a6, #2dd4bf)",
                              borderRadius: "4px 4px 0 0",
                              position: "relative",
                            }}
                          >
                            <motion.div
                              animate={{ height: ["0%", "100%", "0%"] }}
                              transition={{
                                duration: 3.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                background:
                                  "linear-gradient(to top, rgba(255, 255, 255, 0.3), transparent)",
                                borderRadius: "4px 4px 0 0",
                              }}
                            />
                          </motion.div>
                        </motion.div>
                      )}

                      {/* Graphique de type camembert - Adapté pour Coûts Alimentaires, Frais Fixes */}
                      {graphs[graphIndex].type === "pie" && (
                        <motion.div
                          key={`pie-chart-${graphIndex}`}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "200px",
                            width: "100%",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              position: "relative",
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            <motion.div
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              style={{
                                position: "relative",
                                width: "180px",
                                height: "180px",
                                borderRadius: "50%",
                                background:
                                  "conic-gradient(#3b82f6 0% 15%, #10b981 15% 40%, #f59e0b 40% 55%, #8b5cf6 55% 80%, #ef4444 80% 100%)",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  borderRadius: "50%",
                                  background:
                                    "linear-gradient(135deg, #003049 0%, #00456A 100%)",
                                  boxShadow:
                                    "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
                                }}
                              ></motion.div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}

                      {/* Graphique de type barres horizontales - Adapté pour Achats, Coûts de Main-d'Œuvre */}
                      {graphs[graphIndex].type === "horizontal" && (
                        <motion.div
                          key={`horizontal-chart-${graphIndex}`}
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "200px",
                            width: "100%",
                          }}
                        >
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <div
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{
                                  width: `${30 + Math.floor(Math.random() * 50)}%`,
                                  opacity: 1,
                                }}
                                transition={{
                                  duration: 1.2,
                                  delay: i * 0.15,
                                  ease: "easeOut",
                                }}
                                style={{
                                  height: "20px",
                                  background:
                                    i === 0
                                      ? "linear-gradient(to right, #3b82f6, #60a5fa)"
                                      : i === 1
                                        ? "linear-gradient(to right, #10b981, #34d399)"
                                        : i === 2
                                          ? "linear-gradient(to right, #f59e0b, #fbbf24)"
                                          : i === 3
                                            ? "linear-gradient(to right, #8b5cf6, #a78bfa)"
                                            : "linear-gradient(to right, #ef4444, #f87171)",
                                  borderRadius: "4px",
                                }}
                              ></motion.div>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {/* Graphique de type ligne - Adapté pour Achalandage, Transferts, Surveillance des Prix */}
                      {graphs[graphIndex].type === "line" && (
                        <motion.div
                          key={`line-chart-${graphIndex}`}
                          initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 50 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            position: "relative",
                            height: "200px",
                            width: "100%",
                          }}
                        >
                          <svg
                            width="100%"
                            height="180"
                            viewBox="0 0 280 180"
                            style={{ overflow: "visible" }}
                          >
                            <motion.path
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 1.5, ease: "easeInOut" }}
                              d="M0,150 C20,100 40,120 70,80 C100,40 130,90 160,60 C190,30 220,70 250,50 C280,30 300,60 320,40"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                            <motion.path
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{
                                duration: 1.5,
                                delay: 0.3,
                                ease: "easeInOut",
                              }}
                              d="M0,170 C30,150 60,160 90,140 C120,120 150,130 180,110 C210,90 240,100 270,80 C300,60 330,70 360,50"
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />

                            {/* Ligne spécifique pour Surveillance des Prix */}
                            {graphIndex === 9 && (
                              <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                  duration: 1.5,
                                  delay: 0.6,
                                  ease: "easeInOut",
                                }}
                                d="M0,120 C30,140 60,110 90,130 C120,150 150,90 180,70 C210,50 240,90 270,110 C300,130 330,100 360,80"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                                strokeLinecap="round"
                              />
                            )}
                            {/* Points pour tous les graphiques en ligne sauf Surveillance des Prix */}
                            {graphIndex !== 9 &&
                              [0, 40, 80, 120, 160, 200, 240].map((x, i) => (
                                <motion.circle
                                  key={i}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: 1.5 + i * 0.1,
                                    ease: "backOut",
                                  }}
                                  cx={x}
                                  cy={80 + Math.floor(Math.random() * 40)}
                                  r="4"
                                  fill="#f59e0b"
                                />
                              ))}

                            {/* Points et chiffres supprimés */}
                          </svg>
                        </motion.div>
                      )}

                      {/* Graphique de type matrice - Spécifique pour Ingénierie des Menus */}
                      {graphs[graphIndex].type === "matrix" && (
                        <motion.div
                          key={`matrix-chart-${graphIndex}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            position: "relative",
                            height: "200px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gridTemplateRows: "1fr 1fr",
                              gap: "8px",
                              width: "90%",
                              height: "90%",
                            }}
                          >
                            {/* Stars - Haut à droite */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                              style={{
                                gridColumn: "2 / 3",
                                gridRow: "1 / 2",
                                background:
                                  "linear-gradient(135deg, #3b82f6, #60a5fa)",
                                borderRadius: "6px",
                                padding: "8px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                              }}
                            >
                              <div
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                              >
                                92
                              </div>
                            </motion.div>

                            {/* Plow Horses - Haut à gauche */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5, duration: 0.5 }}
                              style={{
                                gridColumn: "1 / 2",
                                gridRow: "1 / 2",
                                background:
                                  "linear-gradient(135deg, #10b981, #34d399)",
                                borderRadius: "6px",
                                padding: "8px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                              }}
                            >
                              <div
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                              >
                                78
                              </div>
                            </motion.div>

                            {/* Puzzles - Bas à droite */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.7, duration: 0.5 }}
                              style={{
                                gridColumn: "2 / 3",
                                gridRow: "2 / 3",
                                background:
                                  "linear-gradient(135deg, #f59e0b, #fbbf24)",
                                borderRadius: "6px",
                                padding: "8px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                              }}
                            >
                              <div
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                              >
                                65
                              </div>
                            </motion.div>

                            {/* Dogs - Bas à gauche */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.9, duration: 0.5 }}
                              style={{
                                gridColumn: "1 / 2",
                                gridRow: "2 / 3",
                                background:
                                  "linear-gradient(135deg, #ef4444, #f87171)",
                                borderRadius: "6px",
                                padding: "8px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                              }}
                            >
                              <div
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                              >
                                41
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Légende en bas */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "15px",
                      padding: "0 10px",
                    }}
                  >
                    {/* Ventes */}
                    {graphIndex === 0 &&
                      ["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                        <div
                          key={i}
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "12px",
                            width: "30px",
                            textAlign: "center",
                          }}
                        >
                          {day}
                        </div>
                      ))}

                    {/* Achats */}
                    {graphIndex === 1 &&
                      [
                        "Viande",
                        "Poisson",
                        "Légumes",
                        "Fruits",
                        "Boissons",
                        "Autres",
                        "",
                      ].map((item, i) => (
                        <div
                          key={i}
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "11px",
                            width: "30px",
                            textAlign: "center",
                          }}
                        >
                          {item}
                        </div>
                      ))}

                    {/* Coûts Alimentaires supprimés */}

                    {/* Coûts de Main-d'Œuvre */}
                    {graphIndex === 3 &&
                      [
                        "Cuisine",
                        "Service",
                        "Bar",
                        "Gestion",
                        "Entretien",
                        "Autres",
                        "",
                      ].map((staff, i) => (
                        <div
                          key={i}
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "11px",
                            width: "30px",
                            textAlign: "center",
                          }}
                        >
                          {staff}
                        </div>
                      ))}

                    {/* Frais Fixes supprimés */}

                    {/* Ingénierie des Menus */}
                    {graphIndex === 5 &&
                      [
                        "Étoiles",
                        "Produits Populaires",
                        "Énigmes",
                        "Poids Morts",
                        "",
                        "",
                        "",
                      ].map((category, i) => (
                        <div
                          key={i}
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "11px",
                            width: "30px",
                            textAlign: "center",
                          }}
                        >
                          {category}
                        </div>
                      ))}

                    {/* Achalandage supprimé */}

                    {/* Facture Moyenne supprimée */}

                    {/* Transferts supprimés */}

                    {/* Surveillance des Prix supprimée */}
                  </div>
                </motion.div>

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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-2 xs:gap-3 lg:gap-4 lg:gap-6 text-center lg:text-left pt-0 order-last lg:order-first"
            >
              {/* Texte secteur */}
              <p className="text-sm xs:text-base lg:text-lg lg:text-xl mb-0.5 xs:mb-1 lg:mb-2 text-center lg:text-left">
                {locale === "fr" ? "Plateforme de gestion pour les restaurants" : "Management platform for restaurants"}
              </p>

              {/* Titre principal */}
              <h1 className="text-xl xs:text-2xl lg:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                {locale === "fr" ? (
                  <>L&apos;ultime solution pour les professionnels de la <span className="text-gold-500">restauration</span></>
                ) : (
                  <>The ultimate solution for <span className="text-gold-500">restaurant</span> professionals</>
                )}
              </h1>

              {/* Description */}
              <p className="mt-0.5 xs:mt-1 lg:mt-2 text-xs xs:text-sm lg:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto lg:mx-0">
                {locale === "fr" ? 
                  "Optimisez la gestion quotidienne de vos restaurants, suivez vos métriques et améliorez vos performances du fournisseur jusqu'à la table." : 
                  "Optimize your restaurant's daily operations, track your metrics, and improve performance from supplier to table."}
              </p>

              {/* Boutons d'action */}
              <div className="mt-2 xs:mt-4 lg:mt-6 flex flex-row gap-2 xs:gap-3 lg:gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="default"
                  className="btn-gold text-sm lg:text-base font-medium w-full sm:w-auto py-1.5 lg:py-2 px-3 lg:px-4"
                >
                  {locale === "fr" ? "En savoir plus" : "Learn more"}
                  <ArrowRight className="ml-2 h-4 w-4 hidden lg:inline" />
                </Button>

                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center rounded-md px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base font-medium text-marine-700 hover:text-marine-900 transition-colors w-full sm:w-auto"
                >
                  {locale === "fr" ? "Parler à un expert" : "Talk to an expert"}
                  <ArrowRight className="ml-2 h-4 w-4 hidden lg:inline" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Carrousel de logos clients en bas du Hero */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-auto pt-2 xs:pt-3 lg:pt-8 pb-2 xs:pb-3 lg:pb-4">
          <LogoMarquee
            logos={clientLogos}
            title={locale === "fr" ? "Partenaire de leur succès" : "Partner in their success"}
            titleClassName="text-sm lg:text-lg"
          />
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default Hero;
