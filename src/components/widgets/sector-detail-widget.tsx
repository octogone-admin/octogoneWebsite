"use client";

import React from "react";
import Image from "next/image";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { OctogoneButton } from "@/components/ui/octogone-button";
import { TargetSector } from "@/data/sectors-data";
import { getSectorContent, getSectorContentV2 } from "@/data/sector-content";
import { 
  Package, 
  BarChart3, 
  Calculator, 
  FileText, 
  Users, 
  Thermometer,
  DollarSign,
  TrendingUp,
  Clock,
  Target,
  ArrowRight
} from "lucide-react";

interface SectorDetailWidgetProps {
  sector: TargetSector;
  locale: string;
  isRestaurantStyle?: boolean;
}

// Modules disponibles avec leurs données
const availableModules = {
  products: {
    icon: Package,
    titleFr: "Base de données produits",
    titleEn: "Product database",
    descFr: "Centralisez vos produits et coûts pour une transparence totale et une traçabilité exacte.",
    descEn: "Centralize your products and costs for total transparency and exact traceability."
  },
  inventory: {
    icon: BarChart3,
    titleFr: "Inventaires intelligents",
    titleEn: "Smart inventory",
    descFr: "Suivez vos stocks en temps réel pour réduire les pertes et optimiser votre planification.",
    descEn: "Track your inventory in real-time to reduce waste and optimize your planning."
  },
  recipes: {
    icon: Calculator,
    titleFr: "Calculs de recettes",
    titleEn: "Recipe calculations",
    descFr: "Calculez automatiquement vos coûts matière et standardisez vos recettes pour maîtriser votre FoodCost.",
    descEn: "Automatically calculate your material costs and standardize your recipes to master your FoodCost."
  },
  invoicing: {
    icon: FileText,
    titleFr: "Facturation automatisée",
    titleEn: "Automated invoicing",
    descFr: "Gérez et automatisez vos factures pour économiser un temps administratif précieux.",
    descEn: "Manage and automate your invoices to save valuable administrative time."
  },
  analytics: {
    icon: TrendingUp,
    titleFr: "Analyses & Dashboard",
    titleEn: "Analytics & Dashboard",
    descFr: "Comparez vos performances avec des indicateurs clés pour des décisions basées sur la donnée.",
    descEn: "Compare your performance with key indicators for data-driven decisions."
  },
  hr: {
    icon: Users,
    titleFr: "Ressources humaines",
    titleEn: "Human resources",
    descFr: "Gérez vos dossiers employés et la conformité de manière simple et centralisée.",
    descEn: "Manage your employee files and compliance in a simple and centralized way."
  },
  temperature: {
    icon: Thermometer,
    titleFr: "Thermomètres connectés",
    titleEn: "Connected thermometers",
    descFr: "Surveillez les températures pour garantir la sécurité alimentaire et prévenir les pertes.",
    descEn: "Monitor temperatures to ensure food safety and prevent losses."
  },
  tips: {
    icon: DollarSign,
    titleFr: "Gestion des pourboires",
    titleEn: "Tips management",
    descFr: "Automatisez la gestion des conventions de pourboires avec précision et conformité légale.",
    descEn: "Automate tip management with precision and legal compliance."
  }
};

// Logique de sélection des modules selon le secteur
const getRelevantModules = (sectorId: string, isRestaurantStyle: boolean = false) => {
  const baseModules = ['products', 'inventory', 'recipes', 'analytics'];
  
  const sectorSpecificModules: Record<string, string[]> = {
    // Types d'entreprises
    'chains-groups': ['products', 'inventory', 'recipes', 'analytics', 'hr', 'invoicing'],
    'independent-restaurants': ['products', 'inventory', 'recipes', 'analytics', 'temperature'],
    'caterers': ['products', 'recipes', 'inventory', 'analytics', 'invoicing'],
    'brewers-distillers': ['products', 'recipes', 'inventory', 'analytics', 'temperature'],
    'purchasing-groups': ['products', 'inventory', 'analytics', 'invoicing'],
    'retail-commerce': ['products', 'inventory', 'recipes', 'analytics', 'invoicing'],
    
    // Styles de restaurants
    'gastronomic': ['products', 'recipes', 'inventory', 'analytics', 'temperature', 'tips'],
    'bistro-brasserie': ['products', 'recipes', 'inventory', 'analytics'],
    'fast-food': ['products', 'inventory', 'recipes', 'analytics', 'hr'],
    'casse-croute': ['products', 'inventory', 'recipes', 'analytics'],
    'family-restaurant': ['products', 'inventory', 'recipes', 'analytics'],
    'cafe': ['products', 'inventory', 'recipes', 'analytics'],
    'pub-microbrewery': ['products', 'recipes', 'inventory', 'analytics', 'temperature'],
    'catering-corporate': ['products', 'recipes', 'inventory', 'analytics', 'invoicing'],
    'tourism-industrial': ['products', 'inventory', 'recipes', 'analytics', 'hr', 'temperature']
  };
  
  return sectorSpecificModules[sectorId] || baseModules;
};

export default function SectorDetailWidget({ sector, locale, isRestaurantStyle = false }: SectorDetailWidgetProps) {
  const relevantModules = getRelevantModules(sector.id, isRestaurantStyle);
  
  // Récupérer le contenu personnalisé pour ce secteur (nouveau format en priorité)
  const sectorContentV2 = getSectorContentV2(sector.id, isRestaurantStyle);
  const sectorContent = getSectorContent(sector.id, isRestaurantStyle);
  
  // Contenu par défaut si pas de contenu spécifique
  const defaultContent = {
    introResultats: {
      fr: "Des résultats mesurables dès les premières semaines d'utilisation d'Octogone.",
      en: "Measurable results from the first weeks of using Octogone."
    },
    metriques: [
      { fr: "–25% de gaspillage alimentaire", en: "–25% food waste" },
      { fr: "+10% de marge brute moyenne", en: "+10% average gross margin" },
      { fr: "+15h de gestion économisées/semaine", en: "+15h management saved/week" },
      { fr: "Précision des coûts >98%", en: "Cost accuracy >98%" }
    ],
    sousTexteSolutions: {
      fr: "Découvrez les modules Octogone spécialement sélectionnés pour optimiser vos opérations.",
      en: "Discover the Octogone modules specially selected to optimize your operations."
    },
    texteDemo: {
      fr: "Voyez comment Octogone transforme concrètement la gestion de votre établissement au quotidien.",
      en: "See how Octogone concretely transforms the daily management of your establishment."
    },
    ctaTexte: {
      fr: "Rejoignez les entreprises qui ont choisi Octogone pour transformer leur gestion et maximiser leur rentabilité.",
      en: "Join the companies that have chosen Octogone to transform their management and maximize their profitability."
    }
  };
  
  // Utiliser le nouveau format V2 si disponible, sinon l'ancien
  const contentV2 = sectorContentV2;
  const content = sectorContent || defaultContent;
  
  // Debug: Forcer l'utilisation du nouveau format pour tous les secteurs
  console.log('Sector ID:', sector.id, 'isRestaurantStyle:', isRestaurantStyle, 'contentV2:', !!contentV2);

  return (
    <div className="space-y-16">
      {/* 1. Résultats mesurables */}
      <ResponsiveSection spacing="lg" className="bg-marine-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-marine-900 mb-4">
            {locale === "fr" ? "Des résultats clairs et immédiats" : "Clear and immediate results"}
          </h2>
          <p className="text-lg text-marine-700 max-w-3xl mx-auto">
            {locale === "fr" ? 
              (contentV2?.introResultats.fr || content.introResultats.fr) : 
              (contentV2?.introResultats.en || content.introResultats.en)
            }
          </p>
        </div>

        {/* Métriques chiffrées en évidence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {(contentV2?.metriques || content.metriques).map((metric, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg border-2" style={{ borderColor: '#E5E5E5' }}>
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-gold-600" />
              </div>
              <p className="text-xl font-bold text-marine-900 mb-2">
                {typeof metric === 'string' ? metric : (locale === "fr" ? metric.fr : metric.en)}
              </p>
            </div>
          ))}
        </div>

        {/* {IMAGE_METRICS_PLACEHOLDER} */}
        <div className="bg-marine-900 rounded-2xl p-8 text-center border-2" style={{ borderColor: '#E5E5E5' }}>
          <div className="text-white">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <p className="text-sm font-medium opacity-90">
              {locale === "fr" ? "Graphique des performances en temps réel" : "Real-time performance chart"}
            </p>
          </div>
        </div>
      </ResponsiveSection>

      {/* 2. Outils qui font la différence */}
      <ResponsiveSection spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-marine-900 mb-4">
            {locale === "fr" ? "Les outils qui transforment votre gestion" : "The tools that transform your management"}
          </h2>
          <p className="text-lg text-marine-700 max-w-3xl mx-auto">
            {locale === "fr" ? 
              (contentV2?.sousTexteSolutions.fr || content.sousTexteSolutions.fr) : 
              (contentV2?.sousTexteSolutions.en || content.sousTexteSolutions.en)
            }
          </p>
        </div>

        {/* Affichage des modules - Nouveau format V2 avec blocs alternés */}
        {true ? (
          /* Nouveau format : blocs de fonctionnalités alternés gauche/droite */
          <div className="space-y-16">
            {relevantModules.slice(0, 4).map((moduleKey, index) => {
              const module = availableModules[moduleKey as keyof typeof availableModules];
              if (!module) return null;
              
              const isEven = index % 2 === 0;
              const IconComponent = module.icon;
              
              return (
                <div key={moduleKey} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Image/Mockup */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-gradient-to-br from-marine-100 to-gold-100 rounded-2xl p-8 aspect-video flex items-center justify-center border-2" style={{ borderColor: '#E5E5E5' }}>
                      <div className="text-center text-marine-600">
                        <IconComponent className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-sm font-medium">
                          {locale === "fr" ? `Interface ${module.titleFr}` : `${module.titleEn} Interface`}
                        </p>
                        <p className="text-xs mt-1 opacity-70">(placeholder)</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="mb-6">
                      <h3 className="text-3xl lg:text-4xl font-bold text-marine-900 mb-2">
                        {locale === "fr" ? module.titleFr : module.titleEn}
                      </h3>
                      <p className="text-marine-600 text-lg">
                        {locale === "fr" ? "Module Octogone" : "Octogone Module"}
                      </p>
                    </div>
                    
                    <p className="text-marine-700 mb-6 text-lg leading-relaxed">
                      {locale === "fr" ? module.descFr : module.descEn}
                    </p>
                    
                    {/* Points de bénéfices */}
                    <ul className="space-y-3 mb-6">
                      {(locale === "fr" ? [
                        "Suivi en temps réel des données",
                        "Automatisation des processus",
                        "Analyses prédictives avancées"
                      ] : [
                        "Real-time data tracking",
                        "Process automation",
                        "Advanced predictive analytics"
                      ]).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-marine-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <OctogoneButton
                      href={`/${locale}/demo`}
                      variant="secondary"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {locale === "fr" ? "Voir en détail" : "See details"}
                    </OctogoneButton>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Ancien format : modules détaillés */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {relevantModules.slice(0, 6).map((moduleKey) => {
              const module = availableModules[moduleKey as keyof typeof availableModules];
              if (!module) return null;
              
              const IconComponent = module.icon;
              
              return (
                <div key={moduleKey} className="bg-white rounded-xl p-6 shadow-lg border-2" style={{ borderColor: '#E5E5E5' }}>
                  {/* {IMAGE_MODULE_PLACEHOLDER} */}
                  <div className="w-12 h-12 bg-marine-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-marine-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-marine-900 mb-3">
                    {locale === "fr" ? module.titleFr : module.titleEn}
                  </h3>
                  <p className="text-marine-700">
                    {locale === "fr" ? module.descFr : module.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </ResponsiveSection>

      {/* 3. Octogone en action */}
      <ResponsiveSection spacing="lg" className="bg-gold-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-marine-900 mb-6">
            {locale === "fr" ? "Découvrez Octogone en action" : "See Octogone in action"}
          </h2>
          
          <p className="text-lg text-marine-700 mb-8">
            {locale === "fr" ? 
              (contentV2?.texteDemo.fr || content.texteDemo.fr) : 
              (contentV2?.texteDemo.en || content.texteDemo.en)
            }
          </p>

          {/* Nouveau format featureShowcase si disponible */}
          {contentV2?.visuel ? (
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: '#E5E5E5' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-marine-100 to-gold-100 rounded-xl flex items-center justify-center">
                  <div className="text-center text-marine-600">
                    <BarChart3 className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {contentV2.visuel.imagePlaceholder}
                    </p>
                  </div>
                </div>
                
                {/* Contenu featureShowcase */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-marine-900 mb-2">
                    {locale === "fr" ? contentV2.visuel.title.fr : contentV2.visuel.title.en}
                  </h3>
                  <p className="text-marine-600 mb-4">
                    {locale === "fr" ? contentV2.visuel.subtitle.fr : contentV2.visuel.subtitle.en}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {(locale === "fr" ? contentV2.visuel.points.fr : contentV2.visuel.points.en).map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-marine-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <OctogoneButton
                    href={`/${locale}/demo`}
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {locale === "fr" ? contentV2.visuel.cta.fr : contentV2.visuel.cta.en}
                  </OctogoneButton>
                </div>
              </div>
              
              {contentV2.caption && (
                <p className="text-center text-marine-600 mt-6 italic">
                  {locale === "fr" ? contentV2.caption.fr : contentV2.caption.en}
                </p>
              )}
            </div>
          ) : (
            /* Format ancien si pas de nouveau contenu */
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2" style={{ borderColor: '#E5E5E5' }}>
              <div className="aspect-video bg-gradient-to-br from-marine-100 to-gold-100 rounded-xl flex items-center justify-center">
                <div className="text-center text-marine-600">
                  <BarChart3 className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-semibold">
                    {locale === "fr" ? "Animation du dashboard en action" : "Dashboard animation in action"}
                  </p>
                  <p className="text-sm mt-2 opacity-80">
                    {locale === "fr" 
                      ? "Performance d'un établissement en temps réel"
                      : "Real-time establishment performance"
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </ResponsiveSection>

      {/* 4. Appel à l'action */}
      <ResponsiveSection spacing="lg" className="bg-marine-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {locale === "fr" ? "Passez à la performance mesurable" : "Move to measurable performance"}
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            {locale === "fr" ? 
              (contentV2?.ctaTexte.fr || content.ctaTexte.fr) : 
              (contentV2?.ctaTexte.en || content.ctaTexte.en)
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <OctogoneButton
              href={`/${locale}/demo`}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {locale === "fr" ? "Voir la plateforme en action" : "See the platform in action"}
            </OctogoneButton>
            
            <OctogoneButton
              href={`/${locale}/contact`}
              variant="secondary"
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

          {/* {IMAGE_CTA_PLACEHOLDER} */}
          <div className="bg-white/10 rounded-xl p-6 border-2" style={{ borderColor: 'rgba(229, 229, 229, 0.3)' }}>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <Package className="w-8 h-8" />
              <span className="text-2xl">→</span>
              <Calculator className="w-8 h-8" />
              <span className="text-2xl">→</span>
              <BarChart3 className="w-8 h-8" />
            </div>
            <p className="text-sm mt-4 opacity-80">
              {locale === "fr" 
                ? "Flux : Inventaire → Recette → Analyse des résultats"
                : "Flow: Inventory → Recipe → Results Analysis"
              }
            </p>
          </div>
        </div>
      </ResponsiveSection>
    </div>
  );
}
