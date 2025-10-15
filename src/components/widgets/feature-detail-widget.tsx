"use client";

import React from "react";
import { ConceptFeature } from "@/data/features/features-content";
import { Package, TrendingUp, Clock, Calculator, RefreshCw, Zap, BarChart3, TrendingDown, LineChart, AlertTriangle, Brain } from "lucide-react";

interface FeatureDetailWidgetProps {
  concept: ConceptFeature;
  locale: string;
}

// Map des icônes
const iconMap: Record<string, React.ComponentType<any>> = {
  Package,
  TrendingUp,
  Clock,
  Calculator,
  RefreshCw,
  Zap,
  BarChart3,
  TrendingDown,
  LineChart,
  AlertTriangle,
  Brain
};

export default function FeatureDetailWidget({ concept, locale }: FeatureDetailWidgetProps) {
  const isEnglish = locale === 'en';

  return (
    <div>
      {/* Features Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--on-background)' }}>
          {isEnglish ? concept.sectionTitleEn : concept.sectionTitleFr}
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--on-surface-variant)' }}>
          {isEnglish ? concept.sectionDescriptionEn : concept.sectionDescriptionFr}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {concept.features.map((feature, index) => {
          const IconComponent = feature.icon ? iconMap[feature.icon] : Package;
          
          return (
            <div
              key={index}
              className="rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: 'var(--surface)',
                border: '2px solid var(--outline)'
              }}
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: concept.pastelColor }}
              >
                {IconComponent && <IconComponent className="w-8 h-8" style={{ color: 'var(--on-surface)' }} />}
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--on-surface)' }}>
                {isEnglish ? feature.titleEn : feature.titleFr}
              </h3>
              
              <p style={{ color: 'var(--on-surface-variant)' }}>
                {isEnglish ? feature.descriptionEn : feature.descriptionFr}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
