"use client";

import React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { Brain, Sparkles, MessageSquare, TrendingUp, Clock, Zap } from "lucide-react";
import OctogoneButton from "@/components/ui/octogone-button";
import { getConceptById } from "@/data/features/features-content";
import { ConceptSEO } from "@/components/seo/concept-seo";
import AnimatedChat from "@/features/cortex/components/animated-chat";
import Image from "next/image";
import Head from "next/head";

export default function CortexPage() {
  const params = useParams();
  const locale = params.locale as string;
  const isEnglish = locale === "en";
  
  const concept = getConceptById('cortex');
  if (!concept) return null;

  // SEO data
  const title = isEnglish ? concept.heroTitleEn : concept.heroTitleFr;
  const description = isEnglish ? concept.heroDescriptionEn : concept.heroDescriptionFr;
  const keywords = isEnglish 
    ? 'restaurant AI assistant, artificial intelligence, Cortex AI, natural questions, instant answers, data optimization, restaurant chatbot'
    : 'assistant IA restaurant, intelligence artificielle, Cortex AI, questions naturelles, réponses instantanées, optimisation données, chatbot restaurant';
  const url = `https://octogone.app/${locale}/cortex`;
  const imageUrl = concept.heroImage.startsWith('http') ? concept.heroImage : `https://octogone.app${concept.heroImage}`;

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
    <>
      {/* SEO Head Metadata */}
      <Head>
        <title>{`${title} | Octogone`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Octogone" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${title} | Octogone`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={isEnglish ? concept.nameEn : concept.nameFr} />
        <meta property="og:site_name" content="Octogone" />
        <meta property="og:locale" content={locale === 'fr' ? 'fr_CA' : 'en_CA'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Octogone`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:creator" content="@OctogoneApp" />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="fr-CA" href={`https://octogone.app/fr/cortex`} />
        <link rel="alternate" hrefLang="en-CA" href={`https://octogone.app/en/cortex`} />
        <link rel="alternate" hrefLang="x-default" href={`https://octogone.app/fr/cortex`} />
      </Head>
      
      {/* SEO Schemas JSON-LD */}
      <ConceptSEO concept={concept} locale={locale} />
      
      <main className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <ResponsiveSection
        as="section"
        spacing="xl"
        className="relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #BADFF6 0%, #E2CDED 100%)'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: concept.pastelColor
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="/cortex.svg" 
                alt="Cortex" 
                width={20} 
                height={20}
                className="w-5 h-5"
                style={{ filter: 'brightness(0) saturate(100%)', color: 'var(--on-secondary-container)' }}
              />
              <span className="text-sm font-semibold" style={{ color: 'var(--on-secondary-container)' }}>
                {locale === 'fr' ? concept.nameFr : concept.nameEn}
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" 
              style={{ color: 'var(--on-secondary-container)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {locale === 'fr' ? concept.heroTitleFr : concept.heroTitleEn}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8" 
              style={{ color: 'var(--on-secondary-container)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {locale === 'fr' ? concept.heroDescriptionFr : concept.heroDescriptionEn}
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <OctogoneButton
                href={concept.ctaLink || `/${locale}/demo`}
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                {locale === 'fr' ? (concept.ctaLabelFr || "Voir la plateforme en action") : (concept.ctaLabelEn || "See the platform in action")}
              </OctogoneButton>
              
              <OctogoneButton
                href={`/${locale}/contact`}
                variant="secondary"
                size="lg"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                {isEnglish ? "Contact us" : "Nous contacter"}
              </OctogoneButton>
            </motion.div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <div 
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              style={{ 
                backgroundColor: 'var(--surface-variant)'
              }}
            >
              <iframe
                src={concept.heroImage}
                className="w-full h-full object-cover"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                title={locale === 'fr' ? concept.nameFr : concept.nameEn}
              />
            </div>
          </div>
        </div>
      </ResponsiveSection>

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

      </main>
    </>
  );
}
