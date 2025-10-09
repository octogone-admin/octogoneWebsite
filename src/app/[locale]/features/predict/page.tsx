"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { Brain, Sparkles, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function PredictPage() {
  const params = useParams();
  const locale = params.locale as string;

  const features = [
    {
      icon: Sparkles,
      titleFr: "IA prédictive",
      titleEn: "Predictive AI",
      descFr: "Anticipez vos besoins avec l'intelligence artificielle",
      descEn: "Anticipate your needs with artificial intelligence"
    },
    {
      icon: Target,
      titleFr: "Recommandations personnalisées",
      titleEn: "Personalized Recommendations",
      descFr: "Recevez des conseils adaptés à votre établissement",
      descEn: "Receive advice tailored to your establishment"
    },
    {
      icon: Lightbulb,
      titleFr: "Insights stratégiques",
      titleEn: "Strategic Insights",
      descFr: "Prenez des décisions éclairées grâce à Cortex",
      descEn: "Make informed decisions with Cortex"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ResponsiveSection
        as="section"
        bgColor="bg-gradient-to-br from-[#C8B6FF] to-white"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5 text-marine-600" />
              <span className="text-sm font-semibold text-marine-600">
                {locale === 'fr' ? 'Prédire' : 'Predict'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marine-900 mb-6">
              {locale === 'fr' 
                ? 'Anticipez avec l\'IA' 
                : 'Anticipate with AI'}
            </h1>
            
            <p className="text-lg md:text-xl text-marine-700 mb-8">
              {locale === 'fr'
                ? 'Laissez Cortex, notre agent IA, vous guider vers une rentabilité optimale avec des prédictions et recommandations intelligentes.'
                : 'Let Cortex, our AI agent, guide you to optimal profitability with intelligent predictions and recommendations.'}
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/predict.jpg"
              alt="Predict"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </ResponsiveSection>

      {/* Features Section */}
      <ResponsiveSection
        as="section"
        bgColor="bg-white"
        spacing="xxl"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-marine-900 mb-4">
            {locale === 'fr' ? 'Fonctionnalités clés' : 'Key Features'}
          </h2>
          <p className="text-lg text-marine-600 max-w-2xl mx-auto">
            {locale === 'fr'
              ? 'Découvrez comment Cortex anticipe vos besoins'
              : 'Discover how Cortex anticipates your needs'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-marine-100 rounded-2xl p-8 hover:border-marine-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#C8B6FF] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-marine-700" />
              </div>
              
              <h3 className="text-xl font-bold text-marine-900 mb-3">
                {locale === 'fr' ? feature.titleFr : feature.titleEn}
              </h3>
              
              <p className="text-marine-600">
                {locale === 'fr' ? feature.descFr : feature.descEn}
              </p>
            </div>
          ))}
        </div>
      </ResponsiveSection>
    </main>
  );
}
