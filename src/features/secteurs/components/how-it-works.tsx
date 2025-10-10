"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ResponsiveSection } from '@/components/ui/responsive-section';
import { Heart, MonitorSpeaker, Settings, TrendingUp, ArrowRight, Headphones, CreditCard, Phone } from 'lucide-react';
import { OctogoneButton } from '@/components/ui/octogone-button';

const HowItWorks = () => {
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      icon: Heart,
      titleFr: "Choisissez votre forfait",
      titleEn: "Choose your plan",
      descFr: "Sélectionnez le forfait qui correspond à vos besoins et à la taille de votre entreprise",
      descEn: "Select the plan that fits your needs and business size",
      link: `/${locale}/forfaits`
    },
    {
      id: 2,
      icon: MonitorSpeaker,
      titleFr: "On se connecte à votre POS",
      titleEn: "We connect to your POS",
      descFr: "Notre équipe technique établit la connexion entre Octogone et votre système de point de vente.",
      descEn: "Our technical team establishes the connection between Octogone and your point of sale system.",
      link: `/${locale}/integration`
    },
    {
      id: 3,
      icon: Settings,
      titleFr: "On configure votre compte",
      titleEn: "We configure your account",
      descFr: "Création de votre catalogue de produits et configuration personnalisée selon vos besoins.",
      descEn: "Creation of your product catalog and personalized configuration according to your needs.",
      link: `/${locale}/configuration`
    },
    {
      id: 4,
      icon: TrendingUp,
      titleFr: "Boostez vos performances",
      titleEn: "Boost your performance",
      descFr: "Profitez de tous les outils Octogone pour optimiser vos opérations et maximiser vos profits.",
      descEn: "Take advantage of all Octogone tools to optimize your operations and maximize your profits.",
      link: `/${locale}/fonctionnalites`
    }
  ];

  return (
    <ResponsiveSection
      as="section"
      spacing="xxl"
      className="bg-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-marine-900 mb-6">
          {locale === "fr" ? "Comment ça marche ?" : "How does it work?"}
        </h2>
        <p className="text-xl text-marine-700 max-w-3xl mx-auto leading-relaxed">
          {locale === "fr" 
            ? "Un processus simple en 4 étapes pour transformer la gestion de vos restaurants"
            : "A simple 4-step process to transform your restaurant management"
          }
        </p>
      </div>

      {/* 4 étapes en cartes */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Numéro en badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20"
                   style={{ backgroundColor: '#dcb26b' }}>
                {step.id}
              </div>
              
              {/* Carte principale */}
              <div className="relative h-96 rounded-xl shadow-lg bg-white border-2"
                   style={{ borderColor: '#E5E5E5' }}>
                
                {/* Contenu de la carte */}
                <div className="relative z-10 p-8 text-center h-full flex flex-col">
                  {/* Icône - position fixe */}
                  <div className="flex justify-center mt-4 mb-6">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: '#BADFF6' }}>
                      <step.icon className="w-10 h-10 text-marine-900" />
                    </div>
                  </div>
                  
                  {/* Titre - hauteur fixe */}
                  <div className="h-16 flex items-center justify-center mb-4">
                    <h3 className="text-xl font-bold text-marine-900 text-center leading-tight">
                      {locale === "fr" ? step.titleFr : step.titleEn}
                    </h3>
                  </div>
                  
                  {/* Description - avec flex-1 pour occuper l'espace restant */}
                  <div className="flex-1 flex items-start justify-center">
                    <p className="text-marine-700 leading-relaxed text-center px-2">
                      {locale === "fr" ? step.descFr : step.descEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service de conciergerie */}
      <div className="mt-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-8 border-2 flex items-center space-x-8 shadow-lg" 
             style={{ borderColor: '#E5E5E5' }}>
          
          {/* Icône à gauche */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0"
               style={{ backgroundColor: '#BADFF6' }}>
            <Headphones className="w-12 h-12 text-marine-900" />
          </div>
          
          {/* Contenu */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-marine-900 mb-4">
              {locale === "fr" ? "Service de conciergerie disponible" : "Concierge service available"}
            </h3>
            
            <p className="text-lg text-marine-700 leading-relaxed">
              {locale === "fr" 
                ? "Besoin d'un accompagnement personnalisé ? Notre service de conciergerie avec banque de temps dédiée est disponible sur demande. Contactez-nous pour en savoir plus."
                : "Need personalized support? Our concierge service with dedicated time bank is available on request. Contact us to learn more."
              }
            </p>
          </div>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
        <OctogoneButton
          href={`/${locale}/forfaits`}
          variant="primary"
          size="lg"
          icon={<Heart className="w-5 h-5" />}
        >
          {locale === "fr" ? "Voir nos forfaits" : "See our plans"}
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
    </ResponsiveSection>
  );
};

export default HowItWorks;
