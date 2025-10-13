"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { Sparkles, Brain, Zap, MessageSquare, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";
import OctogoneButton from "@/components/ui/octogone-button";

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

  const useCases = [
    {
      questionFr: "Cortex, quelles sont mes ventes cette semaine ?",
      questionEn: "Cortex, what are my sales this week?",
      answerFr: `Sur la base des données du tableau de bord, voici l'analyse des ventes de la dernière semaine :

📊 PERFORMANCES DE LA DERNIÈRE SEMAINE :
- Nombre de commandes : 230
- Chiffre d'affaires total : 6,994.50 $
- Moyenne quotidienne : environ 999 $ par jour

💡 ANALYSE :
- Cela représente environ 26% des ventes mensuelles (26,692.50 $) réalisées en une seule semaine
- La dernière journée a été particulièrement forte avec 45 commandes et 1,315.50 $ de revenus
- Le panier moyen de la semaine est d'environ 30.40 $ par commande

📈 POINTS POSITIFS :
- Bon volume de commandes (environ 33 commandes/jour)
- Panier moyen satisfaisant
- La dernière journée montre une tendance à la hausse

🎯 RECOMMANDATIONS :
1. Capitaliser sur les plats les plus vendus (Carpaccio, Escargots, Salade César)
2. Maintenir le niveau de service élevé reflété par les bonnes notes des desserts
3. Analyser les facteurs de succès de la dernière journée pour les reproduire

Souhaitez-vous une analyse plus détaillée d'un aspect particulier de ces performances ?`,
      answerEn: `Based on dashboard data, here's the analysis of last week's sales:

📊 LAST WEEK'S PERFORMANCE:
- Number of orders: 230
- Total revenue: $6,994.50
- Daily average: approximately $999 per day

💡 ANALYSIS:
- This represents about 26% of monthly sales ($26,692.50) achieved in a single week
- The last day was particularly strong with 45 orders and $1,315.50 in revenue
- Average basket for the week is approximately $30.40 per order

📈 POSITIVE POINTS:
- Good order volume (approximately 33 orders/day)
- Satisfactory average basket
- The last day shows an upward trend

🎯 RECOMMENDATIONS:
1. Capitalize on best-selling dishes (Carpaccio, Escargots, Caesar Salad)
2. Maintain the high level of service reflected by good dessert ratings
3. Analyze success factors from the last day to reproduce them

Would you like a more detailed analysis of a particular aspect of these performances?`
    },
    {
      questionFr: "Quel est mon meilleur vendeur ?",
      questionEn: "What's my best seller?",
      answerFr: "Votre burger signature est votre meilleur vendeur avec 234 unités vendues cette semaine.",
      answerEn: "Your signature burger is your best seller with 234 units sold this week."
    },
    {
      questionFr: "Combien de pommes en inventaire ?",
      questionEn: "How many apples in inventory?",
      answerFr: "Vous avez 15 kg de pommes en stock. Attention, vous êtes sous le seuil minimum de 20 kg.",
      answerEn: "You have 15 kg of apples in stock. Warning, you are below the minimum threshold of 20 kg."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ResponsiveSection
        as="section"
        bgColor=""
        spacing="xl"
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #BADFF6 0%, #E2CDED 100%)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div style={{ filter: 'brightness(0) saturate(100%)' }}>
                <Image
                  src="/cortex.svg"
                  alt="Cortex"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ color: 'var(--on-secondary-container)' }}
                />
              </div>
              <span className="text-sm font-semibold" style={{ color: 'var(--on-secondary-container)' }}>
                {isEnglish ? 'AI-Powered Assistant' : 'Assistant IA'}
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
          </div>

          {/* Vidéo Cortex */}
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
        </div>
      </ResponsiveSection>

      {/* Capabilities Section */}
      <ResponsiveSection
        as="section"
        bgColor=""
        spacing="xxl"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--on-background)' }}>
            {isEnglish ? 'What Cortex Can Do' : 'Ce que Cortex peut faire'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--on-surface-variant)' }}>
            {isEnglish
              ? 'Cortex is your intelligent assistant that helps you make better decisions faster'
              : 'Cortex est votre assistant intelligent qui vous aide à prendre de meilleures décisions plus rapidement'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-8 transition-all duration-300"
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
              </div>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--on-background)' }}>
            {isEnglish ? 'Cortex in Action' : 'Cortex en action'}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--on-surface-variant)' }}>
            {isEnglish
              ? 'See how Cortex answers your everyday questions'
              : 'Voyez comment Cortex répond à vos questions quotidiennes'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 space-y-4"
              style={{ backgroundColor: 'var(--surface)' }}
            >
              {/* Question */}
              <div className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--primary-container)' }}
                >
                  <MessageSquare className="w-5 h-5" style={{ color: 'var(--on-primary-container)' }} />
                </div>
                <div className="flex-1">
                  <p className="font-medium" style={{ color: 'var(--on-surface)' }}>
                    {isEnglish ? useCase.questionEn : useCase.questionFr}
                  </p>
                </div>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-3 ml-13">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #BADFF6 0%, #E2CDED 100%)' }}
                >
                  <div style={{ filter: 'brightness(0) saturate(100%)' }}>
                    <Image
                      src="/cortex.svg"
                      alt="Cortex"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                      style={{ color: 'var(--on-secondary-container)' }}
                    />
                  </div>
                </div>
                <div 
                  className="flex-1 rounded-xl p-4"
                  style={{ backgroundColor: 'var(--secondary-container)' }}
                >
                  <p style={{ color: 'var(--on-secondary-container)', whiteSpace: 'pre-line' }}>
                    {isEnglish ? useCase.answerEn : useCase.answerFr}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
