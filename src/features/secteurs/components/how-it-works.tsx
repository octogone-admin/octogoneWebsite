"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ResponsiveSection } from '@/components/ui/responsive-section';
import { Heart, MonitorSpeaker, Settings, TrendingUp, ArrowRight, Headphones, CreditCard, Phone, Clock } from 'lucide-react';
import { OctogoneButton } from '@/components/ui/octogone-button';
import { motion } from 'framer-motion';

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
      descFr: "Configuration de vos établissements, création de votre catalogue de produits et connexion à vos fournisseurs.",
      descEn: "Configuration of your locations, creation of your product catalog and connection to your suppliers.",
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
      style={{ backgroundColor: 'var(--background)' }}
    >
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--on-surface)' }}>
          {locale === "fr" ? "Comment ça marche ?" : "How does it work?"}
        </h2>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
          {locale === "fr" 
            ? "Un processus simple en 4 étapes pour transformer la gestion de vos restaurants"
            : "A simple 4-step process to transform your restaurant management"
          }
        </p>
      </motion.div>

      {/* 4 étapes en cartes */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Numéro en badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20"
                   style={{ backgroundColor: 'var(--primary-container)', color: 'var(--on-primary-container)' }}>
                {step.id}
              </div>
              
              {/* Carte principale */}
              <div className="relative h-96 rounded-xl shadow-lg border-2"
                   style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--outline)' }}>
                
                {/* Contenu de la carte */}
                <div className="relative z-10 p-8 text-center h-full flex flex-col">
                  {/* Icône - position fixe */}
                  <div className="flex justify-center mt-4 mb-6">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: 'var(--secondary-container)' }}>
                      <step.icon className="w-10 h-10" style={{ color: 'var(--on-secondary-container)' }} />
                    </div>
                  </div>
                  
                  {/* Titre - hauteur fixe */}
                  <div className="h-16 flex items-center justify-center mb-4">
                    <h3 className="text-xl font-bold text-center leading-tight" style={{ color: 'var(--on-surface)' }}>
                      {locale === "fr" ? step.titleFr : step.titleEn}
                    </h3>
                  </div>
                  
                  {/* Description - avec flex-1 pour occuper l'espace restant */}
                  <div className="flex-1 flex items-start justify-center">
                    <p className="leading-relaxed text-center px-2" style={{ color: 'var(--on-surface-variant)' }}>
                      {locale === "fr" ? step.descFr : step.descEn}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service de conciergerie */}
      <motion.div 
        className="mt-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="rounded-2xl p-8 border-2 flex items-center space-x-8 shadow-lg" 
             style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--outline)' }}>
          
          {/* Icône à gauche */}
          <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0"
               style={{ backgroundColor: 'var(--secondary-container)' }}>
            <Headphones className="w-12 h-12" style={{ color: 'var(--on-secondary-container)' }} />
          </div>
          
          {/* Contenu */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
              {locale === "fr" ? "Service de conciergerie disponible" : "Concierge service available"}
            </h3>
            
            <p className="text-lg leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
              {locale === "fr" 
                ? "Besoin d'un accompagnement personnalisé ? Notre service de conciergerie avec banque de temps dédiée est disponible sur demande. Contactez-nous pour en savoir plus."
                : "Need personalized support? Our concierge service with dedicated time bank is available on request. Contact us to learn more."
              }
            </p>
          </div>
        </div>
      </motion.div>

      {/* Logos des POS compatibles */}
      <motion.div 
        className="mt-16 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--on-surface)' }}>
          {locale === "fr" ? "Compatible avec les principaux systèmes POS" : "Compatible with major POS systems"}
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {[
            { name: 'Maitre\'D', logo: '/images/pos/maitred.png' },
            { name: 'Veloce', logo: '/images/pos/veloce.png' },
            { name: 'Cluster', logo: '/images/pos/cluster.png' },
            { name: 'Lightspeed', logo: '/images/pos/lightspeed.png' },
            { name: 'Best', logo: '/images/pos/best.png' },
            { name: 'Oracle', logo: '/images/pos/oracle.png' }
          ].map((pos, index) => (
            <motion.div
              key={pos.name}
              className="flex items-center justify-center p-6 rounded-xl border-2 bg-white shadow-md hover:shadow-lg transition-all duration-300"
              style={{ borderColor: 'var(--outline)', minHeight: '100px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                {/* Logo POS */}
                <div className="w-20 h-20 mx-auto mb-2 relative">
                  <Image
                    src={pos.logo}
                    alt={pos.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-semibold" style={{ color: 'var(--on-primary-container)' }}>
                  {pos.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gestionnaires d'horaire compatibles */}
      <motion.div 
        className="mt-16 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--on-surface)' }}>
          {locale === "fr" ? "Intégration avec vos gestionnaires d'horaire" : "Integration with your scheduling systems"}
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {[
            { name: 'Evolia', logo: '/images/punch/evolia.png' },
            { name: 'Agendrix', logo: '/images/punch/agendrix.png' },
            { name: 'Emprez', logo: '/images/punch/emprez.png' }
          ].map((scheduler, index) => (
            <motion.div
              key={scheduler.name}
              className="flex items-center justify-center p-6 rounded-xl border-2 bg-white shadow-md hover:shadow-lg transition-all duration-300"
              style={{ borderColor: 'var(--outline)', minHeight: '100px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                {/* Logo gestionnaire d'horaire */}
                <div className="w-20 h-20 mx-auto mb-2 relative">
                  <Image
                    src={scheduler.logo}
                    alt={scheduler.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-semibold" style={{ color: 'var(--on-primary-container)' }}>
                  {scheduler.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Message d'intégration personnalisée */}
      <motion.div
        className="mt-12 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="text-lg leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
          {locale === "fr" 
            ? "Votre système POS ou gestionnaire d'horaire n'est pas dans la liste ? Contactez-nous pour discuter d'une intégration personnalisée et synchroniser automatiquement vos données avec Octogone."
            : "Your POS or scheduling system not listed? Contact us to discuss a custom integration and automatically sync your data with Octogone."
          }
        </p>
      </motion.div>

      {/* Boutons d'action */}
      <motion.div 
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
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
      </motion.div>
    </ResponsiveSection>
  );
};

export default HowItWorks;
