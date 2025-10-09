"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { Rocket, Package, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";

export default function OperatePage() {
  const params = useParams();
  const locale = params.locale as string;

  const features = [
    {
      icon: Package,
      titleFr: "Gestion des inventaires",
      titleEn: "Inventory Management",
      descFr: "Suivez vos stocks en temps réel et optimisez vos commandes",
      descEn: "Track your inventory in real-time and optimize your orders"
    },
    {
      icon: TrendingUp,
      titleFr: "Optimisation des coûts",
      titleEn: "Cost Optimization",
      descFr: "Réduisez le gaspillage et maximisez votre rentabilité",
      descEn: "Reduce waste and maximize your profitability"
    },
    {
      icon: Clock,
      titleFr: "Gain de temps",
      titleEn: "Time Savings",
      descFr: "Automatisez les tâches répétitives et concentrez-vous sur l'essentiel",
      descEn: "Automate repetitive tasks and focus on what matters"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ResponsiveSection
        as="section"
        bgColor="bg-gradient-to-br from-[#B8E0D2] to-white"
        spacing="xl"
        className="relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-marine-600" />
              <span className="text-sm font-semibold text-marine-600">
                {locale === 'fr' ? 'Opérer' : 'Operate'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-marine-900 mb-6">
              {locale === 'fr' 
                ? 'Gérez vos opérations avec efficacité' 
                : 'Manage your operations efficiently'}
            </h1>
            
            <p className="text-lg md:text-xl text-marine-700 mb-8">
              {locale === 'fr'
                ? 'Optimisez vos inventaires, réduisez le gaspillage et gagnez du temps avec nos outils de gestion opérationnelle.'
                : 'Optimize your inventory, reduce waste, and save time with our operational management tools.'}
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/operate.jpg"
              alt="Operate"
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
              ? 'Découvrez comment Octogone vous aide à opérer plus efficacement'
              : 'Discover how Octogone helps you operate more efficiently'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-marine-100 rounded-2xl p-8 hover:border-marine-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#B8E0D2] rounded-xl flex items-center justify-center mb-6">
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
