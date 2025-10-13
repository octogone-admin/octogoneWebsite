"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { Sparkles, Brain, Zap, MessageSquare, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";
import OctogoneButton from "@/components/ui/octogone-button";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedChat from "@/features/cortex/components/animated-chat";

export default function CortexPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isEnglish = locale === "en";

  const capabilities = [
    {
      icon: MessageSquare,
      titleFr: "Conversation naturelle",
      titleEn: "Natural Conversation",
      descFr: "Posez vos questions en langage naturel, Cortex comprend et répond instantanément",
      descEn: "Ask questions in natural language, Cortex understands and responds instantly"
    },
    {
      icon: Brain,
      titleFr: "Analyse intelligente",
      titleEn: "Intelligent Analysis",
      descFr: "Cortex analyse vos données en temps réel pour vous donner des insights actionnables",
      descEn: "Cortex analyzes your data in real-time to give you actionable insights"
    },
    {
      icon: TrendingUp,
      titleFr: "Prédictions précises",
      titleEn: "Accurate Predictions",
      descFr: "Anticipez vos ventes, vos stocks et optimisez vos décisions d'achat",
      descEn: "Anticipate your sales, inventory and optimize your purchasing decisions"
    },
    {
      icon: Zap,
      titleFr: "Réponses instantanées",
      titleEn: "Instant Responses",
      descFr: "Obtenez des réponses en quelques secondes, pas besoin de chercher dans des rapports",
      descEn: "Get answers in seconds, no need to search through reports"
    },
    {
      icon: Clock,
      titleFr: "Disponible 24/7",
      titleEn: "Available 24/7",
      descFr: "Cortex est toujours là pour vous aider, jour et nuit",
      descEn: "Cortex is always there to help you, day and night"
    },
    {
      icon: Sparkles,
      titleFr: "Apprentissage continu",
      titleEn: "Continuous Learning",
      descFr: "Plus vous utilisez Cortex, plus il comprend votre établissement",
      descEn: "The more you use Cortex, the better it understands your establishment"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12" style={{ backgroundColor: 'var(--background)' }}>
        <motion.div 
          className="rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #BADFF6 0%, #E2CDED 100%)' }}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            scale: { duration: 0.6 }
          }}
        >
          <ResponsiveSection
            as="section"
            bgColor=""
            spacing="xl"
            className="relative"
          >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#BADFF6] to-[#E2CDED] px-4 py-2 rounded-full mb-6 border-2 border-white shadow-lg">
              <span className="text-sm font-semibold" style={{ color: 'var(--on-secondary-container)' }}>
                {isEnglish ? 'Beta Version' : 'Version Bêta'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--on-secondary-container)' }}>
              {isEnglish 
                ? 'Meet Cortex' 
                : 'Voici Cortex'}
            </h1>
            
            <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--on-secondary-container)' }}>
              {isEnglish
                ? 'Your AI assistant that transforms data into decisions. Ask questions, get instant answers, and optimize your restaurant operations effortlessly.'
                : 'Votre assistant IA qui transforme vos données en décisions. Posez des questions, obtenez des réponses instantanées et optimisez vos opérations sans effort.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <OctogoneButton
                href={`/${locale}/demo`}
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                {isEnglish ? "See the platform in action" : "Voir la plateforme en action"}
              </OctogoneButton>
              
              <OctogoneButton
                href={`/${locale}/contact`}
                variant="secondary"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                {isEnglish ? "Contact us" : "Nous contacter"}
              </OctogoneButton>
            </div>
          </motion.div>

          {/* Vidéo Cortex */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ 
              aspectRatio: '16/9',
              backgroundColor: 'var(--surface-variant)'
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1126878170?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=1&controls=0&background=1"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              title="Cortex Demo"
            />
          </div>
          </motion.div>
        </div>
          </ResponsiveSection>
        </motion.div>
      </div>

      {/* Capabilities Section */}
      <ResponsiveSection
        as="section"
        bgColor=""
        spacing="xxl"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--on-background)' }}>
            {isEnglish ? 'What Cortex Can Do' : 'Ce que Cortex peut faire'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--on-surface-variant)' }}>
            {isEnglish
              ? 'Cortex is your intelligent assistant that helps you make better decisions faster'
              : 'Cortex est votre assistant intelligent qui vous aide à prendre de meilleures décisions plus rapidement'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                className="relative rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Bordure en dégradé Cortex avec halo */}
                <div 
                  className="absolute inset-0 rounded-2xl p-[2px]"
                  style={{
                    background: 'linear-gradient(135deg, #BADFF6 0%, #E2CDED 100%)',
                    boxShadow: '0 0 10px rgba(186, 223, 246, 0.2), 0 0 20px rgba(226, 205, 237, 0.15)'
                  }}
                >
                  <div 
                    className="w-full h-full rounded-2xl"
                    style={{ backgroundColor: 'var(--background)' }}
                  />
                </div>

                {/* Contenu */}
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: 'linear-gradient(135deg, #BADFF6 0%, #E2CDED 100%)' }}
                  >
                    <Icon className="w-7 h-7" style={{ color: 'var(--on-secondary-container)' }} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--on-surface)' }}>
                    {isEnglish ? capability.titleEn : capability.titleFr}
                  </h3>
                  
                  <p style={{ color: 'var(--on-surface-variant)' }}>
                    {isEnglish ? capability.descEn : capability.descFr}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ResponsiveSection>

      {/* Use Cases Section */}
      <ResponsiveSection
        as="section"
        bgColor=""
        spacing="xxl"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#BADFF6] to-[#E2CDED] px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold" style={{ color: 'var(--on-secondary-container)' }}>
              {isEnglish ? 'Beta Version' : 'Version Bêta'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--on-background)' }}>
            {isEnglish ? 'The Future of Cortex' : 'L\'avenir de Cortex'}
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--on-surface-variant)' }}>
            {isEnglish
              ? 'Discover where Cortex is heading. These advanced capabilities represent our vision for the ultimate AI assistant. Some features are already live, others are coming soon.'
              : 'Découvrez vers où se dirige Cortex. Ces capacités avancées représentent notre vision de l\'assistant IA ultime. Certaines fonctionnalités sont déjà disponibles, d\'autres arrivent bientôt.'}
          </p>
        </motion.div>

        <AnimatedChat locale={locale} />
      </ResponsiveSection>

      {/* CTA Section */}
      <ResponsiveSection
        as="section"
        bgColor=""
        spacing="xl"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--on-background)' }}>
            {isEnglish 
              ? 'Ready to add Cortex to your platform?' 
              : 'Prêt à ajouter Cortex à votre plateforme ?'}
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--on-surface-variant)' }}>
            {isEnglish
              ? 'Contact our team to discover how Cortex can transform your restaurant operations'
              : 'Contactez notre équipe pour découvrir comment Cortex peut transformer vos opérations'}
          </p>
          <OctogoneButton
            href={`/${locale}/contact`}
            variant="primary"
            size="lg"
            icon={<Sparkles className="w-5 h-5" />}
          >
            {isEnglish ? "Contact us" : "Nous contacter"}
          </OctogoneButton>
        </div>
      </ResponsiveSection>
    </main>
  );
}
