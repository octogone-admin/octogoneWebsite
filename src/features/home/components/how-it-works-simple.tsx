"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { ResponsiveSection } from '@/components/ui/responsive-section';

const HowItWorks = () => {
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";

  return (
    <div className="px-4 sm:px-8 py-4 sm:py-8" style={{ backgroundColor: 'var(--background)' }}>
    <ResponsiveSection
      as="section"
      spacing="xxl"
      className="rounded-2xl"
      style={{ backgroundColor: 'var(--secondary-container)' }}
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--on-surface)' }}>
          {locale === "fr" ? "Comment ça marche ?" : "How does it work?"}
        </h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
          {locale === "fr" 
            ? "Octogone se connecte à votre POS pour faire tout ce que votre système actuel ne fait pas."
            : "Octogone connects to your POS to do everything your current system doesn't."
          }
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{ backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)' }}>
              1
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--on-surface)' }}>
              {locale === "fr" ? "Votre POS actuel" : "Your current POS"}
            </h3>
            <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
              {locale === "fr" 
                ? "Continuez à utiliser votre système habituel"
                : "Keep using your existing system"
              }
            </p>
          </div>

          <div className="text-center p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{ backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)' }}>
              2
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--on-surface)' }}>
              {locale === "fr" ? "Connexion automatique" : "Automatic connection"}
            </h3>
            <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
              {locale === "fr" 
                ? "Octogone récupère vos données en temps réel"
                : "Octogone retrieves your data in real-time"
              }
            </p>
          </div>

          <div className="text-center p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{ backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)' }}>
              3
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--on-surface)' }}>
              {locale === "fr" ? "Analyse intelligente" : "Smart analysis"}
            </h3>
            <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
              {locale === "fr" 
                ? "Analyse automatique de vos ventes et coûts"
                : "Automatic analysis of your sales and costs"
              }
            </p>
          </div>

          <div className="text-center p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--surface)' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{ backgroundColor: 'var(--secondary-container)', color: 'var(--on-secondary-container)' }}>
              4
            </div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--on-surface)' }}>
              {locale === "fr" ? "Optimisation continue" : "Continuous optimization"}
            </h3>
            <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
              {locale === "fr" 
                ? "Recommandations pour maximiser vos profits"
                : "Recommendations to maximize your profits"
              }
            </p>
          </div>
        </div>
      </div>
    </ResponsiveSection>
    </div>
  );
};

export default HowItWorks;
