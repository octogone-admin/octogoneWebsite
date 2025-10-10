"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { ResponsiveSection } from '@/components/ui/responsive-section';

const HowItWorks = () => {
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";

  return (
    <ResponsiveSection
      as="section"
      spacing="xxl"
      className="bg-marine-50"
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marine-900 mb-6">
          {locale === "fr" ? "Comment ça marche ?" : "How does it work?"}
        </h2>
        <p className="text-xl text-marine-700 max-w-3xl mx-auto leading-relaxed">
          {locale === "fr" 
            ? "Octogone se connecte à votre POS pour faire tout ce que votre système actuel ne fait pas."
            : "Octogone connects to your POS to do everything your current system doesn't."
          }
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-marine-900 mb-2">
              {locale === "fr" ? "Votre POS actuel" : "Your current POS"}
            </h3>
            <p className="text-sm text-marine-700">
              {locale === "fr" 
                ? "Continuez à utiliser votre système habituel"
                : "Keep using your existing system"
              }
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-marine-900 mb-2">
              {locale === "fr" ? "Connexion automatique" : "Automatic connection"}
            </h3>
            <p className="text-sm text-marine-700">
              {locale === "fr" 
                ? "Octogone récupère vos données en temps réel"
                : "Octogone retrieves your data in real-time"
              }
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-marine-900 mb-2">
              {locale === "fr" ? "Analyse intelligente" : "Smart analysis"}
            </h3>
            <p className="text-sm text-marine-700">
              {locale === "fr" 
                ? "Analyse automatique de vos ventes et coûts"
                : "Automatic analysis of your sales and costs"
              }
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              4
            </div>
            <h3 className="font-semibold text-marine-900 mb-2">
              {locale === "fr" ? "Optimisation continue" : "Continuous optimization"}
            </h3>
            <p className="text-sm text-marine-700">
              {locale === "fr" 
                ? "Recommandations pour maximiser vos profits"
                : "Recommendations to maximize your profits"
              }
            </p>
          </div>
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default HowItWorks;
