"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { ResponsiveSection } from '@/components/ui/responsive-section';
import { Monitor, ArrowRight, Database, BarChart3, TrendingUp, Settings } from 'lucide-react';

interface Step {
  id: number;
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
  icon: React.ReactNode;
  color: string;
}

const HowItWorks = () => {
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: Step[] = [
    {
      id: 1,
      titleFr: "Votre POS actuel",
      titleEn: "Your current POS",
      descFr: "Continuez à utiliser votre système de point de vente habituel",
      descEn: "Keep using your existing point of sale system",
      icon: <Monitor className="w-8 h-8" />,
      color: "#1e40af" // Bleu
    },
    {
      id: 2,
      titleFr: "Connexion automatique",
      titleEn: "Automatic connection",
      descFr: "Octogone se connecte à votre POS et récupère vos données en temps réel",
      descEn: "Octogone connects to your POS and retrieves your data in real-time",
      icon: <Database className="w-8 h-8" />,
      color: "#dcb26b" // Doré
    },
    {
      id: 3,
      titleFr: "Analyse intelligente",
      titleEn: "Smart analysis",
      descFr: "Nos algorithmes analysent vos ventes, inventaires et coûts automatiquement",
      descEn: "Our algorithms analyze your sales, inventory and costs automatically",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "#059669" // Vert
    },
    {
      id: 4,
      titleFr: "Optimisation continue",
      titleEn: "Continuous optimization",
      descFr: "Recevez des recommandations pour maximiser vos profits et réduire le gaspillage",
      descEn: "Get recommendations to maximize profits and reduce waste",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "#dc2626" // Rouge
    }
  ];

  return (
    <ResponsiveSection
      as="section"
      spacing="xxl"
      className="relative bg-gradient-to-br from-marine-50 to-white overflow-hidden"
    >
      {/* Fond décoratif */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gold-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-marine-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marine-900 mb-6">
            {locale === "fr" ? "Comment ça marche ?" : "How does it work?"}
          </h2>
          <p className="text-xl text-marine-700 max-w-3xl mx-auto leading-relaxed">
            {locale === "fr" 
              ? "Octogone se connecte à votre POS pour faire tout ce que votre système actuel ne fait pas. Simple, automatique, puissant."
              : "Octogone connects to your POS to do everything your current system doesn't. Simple, automatic, powerful."
            }
          </p>
        </div>

        {/* Diagramme interactif */}
        <div className="max-w-6xl mx-auto">
          {/* Version desktop - Flux horizontal */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Étape */}
                  <div 
                    className={`flex flex-col items-center cursor-pointer transition-all duration-500 ${
                      activeStep === step.id ? 'scale-110' : 'scale-100 opacity-70'
                    }`}
                    onMouseEnter={() => setActiveStep(step.id)}
                  >
                    {/* Icône */}
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg transition-all duration-500"
                      style={{ 
                        backgroundColor: activeStep === step.id ? step.color : '#f3f4f6',
                        color: activeStep === step.id ? 'white' : step.color
                      }}
                    >
                      {step.icon}
                    </div>
                    
                    {/* Numéro */}
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-3 transition-all duration-500"
                      style={{ 
                        backgroundColor: activeStep === step.id ? step.color : '#e5e7eb',
                        color: activeStep === step.id ? 'white' : '#6b7280'
                      }}
                    >
                      {step.id}
                    </div>
                    
                    {/* Titre */}
                    <h3 className="text-lg font-semibold text-marine-900 text-center mb-2">
                      {locale === "fr" ? step.titleFr : step.titleEn}
                    </h3>
                  </div>

                  {/* Flèche de connexion */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 flex items-center justify-center mx-4">
                      <ArrowRight 
                        className="w-8 h-8 transition-all duration-500"
                        style={{ 
                          color: activeStep >= step.id ? step.color : '#d1d5db'
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Version mobile - Flux vertical */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-start space-x-4">
                {/* Icône et ligne */}
                <div className="flex flex-col items-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: step.color, color: 'white' }}
                  >
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className="w-1 h-16 mt-4"
                      style={{ backgroundColor: '#e5e7eb' }}
                    />
                  )}
                </div>
                
                {/* Contenu */}
                <div className="flex-1 pt-2">
                  <div 
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mb-2"
                    style={{ backgroundColor: step.color, color: 'white' }}
                  >
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold text-marine-900 mb-2">
                    {locale === "fr" ? step.titleFr : step.titleEn}
                  </h3>
                  <p className="text-marine-700">
                    {locale === "fr" ? step.descFr : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Description de l'étape active (desktop uniquement) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 transition-all duration-500">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-marine-900 mb-4">
                  {locale === "fr" ? steps[activeStep - 1]?.titleFr : steps[activeStep - 1]?.titleEn}
                </h3>
                <p className="text-lg text-marine-700 leading-relaxed max-w-2xl mx-auto">
                  {locale === "fr" ? steps[activeStep - 1]?.descFr : steps[activeStep - 1]?.descEn}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Avantages clés */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-marine-900 mb-2">
              {locale === "fr" ? "Aucune disruption" : "No disruption"}
            </h4>
            <p className="text-sm text-marine-700">
              {locale === "fr" 
                ? "Gardez votre POS actuel, on s'occupe du reste"
                : "Keep your current POS, we handle the rest"
              }
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-marine-900 mb-2">
              {locale === "fr" ? "Temps réel" : "Real-time"}
            </h4>
            <p className="text-sm text-marine-700">
              {locale === "fr" 
                ? "Données synchronisées automatiquement 24/7"
                : "Data synchronized automatically 24/7"
              }
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-gold-600" />
            </div>
            <h4 className="font-semibold text-marine-900 mb-2">
              {locale === "fr" ? "ROI immédiat" : "Immediate ROI"}
            </h4>
            <p className="text-sm text-marine-700">
              {locale === "fr" 
                ? "Résultats visibles dès la première semaine"
                : "Visible results from the first week"
              }
            </p>
          </div>
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default HowItWorks;
