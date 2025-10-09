"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { BarChart3, DollarSign, PieChart, TrendingDown } from "lucide-react";
import Image from "next/image";

export default function AnalyzePage() {
  const params = useParams();
  const locale = params.locale as string;

  const features = [
    {
      icon: DollarSign,
      titleFr: "Food Cost précis",
      titleEn: "Accurate Food Cost",
      descFr: "Calculez votre food cost en temps réel avec précision",
      descEn: "Calculate your food cost in real-time with precision"
    },
    {
      icon: PieChart,
      titleFr: "Analyses détaillées",
      titleEn: "Detailed Analytics",
      descFr: "Visualisez vos données avec des rapports complets",
      descEn: "Visualize your data with comprehensive reports"
    },
    {
      icon: TrendingDown,
      titleFr: "Optimisation des coûts",
      titleEn: "Cost Optimization",
      descFr: "Identifiez les opportunités d'économies",
      descEn: "Identify savings opportunities"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ResponsiveSection
        as="section"
        bgColor="bg-gradient-to-br from-[#FFE5B4] to-white"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-5 h-5 text-marine-600" />
              <span className="text-sm font-semibold text-marine-600">
                {locale === 'fr' ? 'Analyser' : 'Analyze'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marine-900 mb-6">
              {locale === 'fr' 
                ? 'Analysez vos performances' 
                : 'Analyze your performance'}
            </h1>
            
            <p className="text-lg md:text-xl text-marine-700 mb-8">
              {locale === 'fr'
                ? 'Maîtrisez votre food cost et optimisez vos marges avec des analyses détaillées et des insights actionnables.'
                : 'Master your food cost and optimize your margins with detailed analytics and actionable insights.'}
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/resto.jpg"
              alt="Analyze"
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
              ? 'Découvrez comment Octogone vous aide à analyser vos données'
              : 'Discover how Octogone helps you analyze your data'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-marine-100 rounded-2xl p-8 hover:border-marine-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#FFE5B4] rounded-xl flex items-center justify-center mb-6">
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
