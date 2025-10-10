"use client";

import React from "react";
import Image from "next/image";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { OctogoneButton } from "@/components/ui/octogone-button";
import { TargetSector } from "@/data/sectors-data";
import { getSectorContent } from "@/data/sector-content";
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
  
  // Récupérer le contenu personnalisé pour ce secteur
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
  
  const content = sectorContent || defaultContent;

  return (
    <div className="space-y-16">
      {/* 1. Résultats mesurables */}
      <ResponsiveSection spacing="lg" className="bg-marine-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-marine-900 mb-4">
            {locale === "fr" ? "Des résultats clairs et immédiats" : "Clear and immediate results"}
          </h2>
          <p className="text-lg text-marine-700 max-w-3xl mx-auto">
            {locale === "fr" ? content.introResultats.fr : content.introResultats.en}
          </p>
        </div>

        {/* Métriques chiffrées en évidence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {content.metriques.map((metric, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg border-2" style={{ borderColor: '#E5E5E5' }}>
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-gold-600" />
              </div>
              <p className="text-xl font-bold text-marine-900 mb-2">
                {locale === "fr" ? metric.fr : metric.en}
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
            {locale === "fr" ? content.sousTexteSolutions.fr : content.sousTexteSolutions.en}
          </p>
        </div>

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

        {/* {IMAGE_MOCKUP_PLACEHOLDER} */}
        <div className="bg-gradient-to-r from-marine-900 to-marine-700 rounded-2xl p-8 text-center">
          <div className="text-white">
            <BarChart3 className="w-20 h-20 mx-auto mb-4 opacity-80" />
            <p className="text-sm font-medium opacity-90">
              {locale === "fr" ? "Capture combinant plusieurs modules Octogone" : "Screenshot combining multiple Octogone modules"}
            </p>
          </div>
        </div>
      </ResponsiveSection>

      {/* 3. Octogone en action */}
      <ResponsiveSection spacing="lg" className="bg-gold-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-marine-900 mb-6">
            {locale === "fr" ? "Découvrez Octogone en action" : "Discover Octogone in action"}
          </h2>
          
          <p className="text-lg text-marine-700 mb-8">
            {locale === "fr" ? content.texteDemo.fr : content.texteDemo.en}
          </p>

          {/* {IMAGE_APP_PLACEHOLDER} */}
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
        </div>
      </ResponsiveSection>

      {/* 4. Appel à l'action */}
      <ResponsiveSection spacing="lg" className="bg-marine-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {locale === "fr" ? "Passez à la performance mesurable" : "Move to measurable performance"}
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            {locale === "fr" ? content.ctaTexte.fr : content.ctaTexte.en}
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
