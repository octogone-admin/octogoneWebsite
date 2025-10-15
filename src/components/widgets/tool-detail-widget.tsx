"use client";

import React from "react";
import { Check, Play, Zap, LineChart, Brain } from "lucide-react";
import { Tool } from "@/data/tools/tools-content";

interface ToolDetailWidgetProps {
  tool: Tool;
  locale: string;
}

// Configuration des concepts avec leurs couleurs et icônes
const conceptConfig = {
  operate: {
    icon: Play,
    color: '#B8E0D2', // Vert menthe pastel
    textColor: '#002236',
    labelFr: 'OPÉRER',
    labelEn: 'OPERATE'
  },
  automate: {
    icon: Zap,
    color: '#B4D4FF', // Bleu ciel pastel
    textColor: '#002236',
    labelFr: 'AUTOMATISER',
    labelEn: 'AUTOMATE'
  },
  analyze: {
    icon: LineChart,
    color: '#FFE5B4', // Jaune pastel
    textColor: '#002236',
    labelFr: 'ANALYSER',
    labelEn: 'ANALYZE'
  },
  predict: {
    icon: Brain,
    color: '#C8B6FF', // Mauve pastel
    textColor: '#002236',
    labelFr: 'PRÉDIRE',
    labelEn: 'PREDICT'
  }
};

export default function ToolDetailWidget({ tool, locale }: ToolDetailWidgetProps) {
  const isEnglish = locale === 'en';

  // Si pas de sections configurées, afficher toutes les features de manière simple
  if (!tool.sections || tool.sections.length === 0) {
    return (
      <div className="space-y-24">
        {tool.features.map((feature, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image placeholder */}
              <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                <div className="bg-gradient-to-br from-marine-100 to-gold-100 rounded-2xl p-8 aspect-video flex items-center justify-center border-2" style={{ borderColor: '#E5E5E5' }}>
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-sm font-medium text-marine-600">
                      {isEnglish ? feature.titleEn : feature.titleFr}
                    </p>
                    <p className="text-xs mt-1 opacity-70 text-marine-500">(placeholder)</p>
                  </div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
                  {isEnglish ? feature.titleEn : feature.titleFr}
                </h3>
                <p className="text-base mb-6" style={{ color: 'var(--on-surface-variant)' }}>
                  {isEnglish ? feature.descriptionEn : feature.descriptionFr}
                </p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                      <span className="text-base" style={{ color: 'var(--on-surface)' }}>
                        {isEnglish ? benefit.en : benefit.fr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Layout avec sections et concepts
  return (
    <div className="space-y-24">
      {tool.sections.map((section, sectionIndex) => {
        const concept = section.concept ? conceptConfig[section.concept] : null;
        const ConceptIcon = concept?.icon;
        
        return (
          <React.Fragment key={sectionIndex}>
            {/* Séparateur avec concept (sauf pour la première section) */}
            {sectionIndex > 0 && concept && (
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2" style={{ borderColor: 'var(--outline)' }}></div>
                </div>
                <div className="relative flex justify-center">
                  <div 
                    className="flex items-center gap-3 px-6 py-3 rounded-full" 
                    style={{ backgroundColor: concept.color }}
                  >
                    {ConceptIcon && <ConceptIcon className="w-5 h-5" style={{ color: concept.textColor }} />}
                    <span className="text-sm font-bold" style={{ color: concept.textColor }}>
                      {isEnglish ? concept.labelEn : concept.labelFr}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Section de features */}
            <div>
              {/* Première feature avec grande image si c'est la première section */}
              {sectionIndex === 0 && section.features.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  <div className="bg-gradient-to-br from-marine-100 to-gold-100 rounded-2xl p-8 aspect-video flex items-center justify-center border-2" style={{ borderColor: '#E5E5E5' }}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-sm font-medium text-marine-600">
                        {isEnglish 
                          ? tool.features[section.features[0]].titleEn 
                          : tool.features[section.features[0]].titleFr
                        }
                      </p>
                      <p className="text-xs mt-1 opacity-70 text-marine-500">(placeholder)</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
                      {isEnglish 
                        ? tool.features[section.features[0]].titleEn 
                        : tool.features[section.features[0]].titleFr
                      }
                    </h3>
                    <p className="text-base mb-6" style={{ color: 'var(--on-surface-variant)' }}>
                      {isEnglish 
                        ? tool.features[section.features[0]].descriptionEn 
                        : tool.features[section.features[0]].descriptionFr
                      }
                    </p>
                    <div className="space-y-3">
                      {tool.features[section.features[0]].benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                          <span className="text-base" style={{ color: 'var(--on-surface)' }}>
                            {isEnglish ? benefit.en : benefit.fr}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Autres features de la section */}
              {section.features.length > 1 && (
                <>
                  {/* Image panoramique pour la section 2 (automatiser) */}
                  {sectionIndex === 1 && (
                    <div className="bg-gradient-to-br from-marine-100 to-gold-100 rounded-2xl p-8 aspect-[21/9] flex items-center justify-center border-2 mb-16" style={{ borderColor: '#E5E5E5' }}>
                      <div className="text-center">
                        <div className="text-6xl mb-4">📊</div>
                        <p className="text-sm font-medium text-marine-600">
                          {isEnglish ? "Real-time dashboard" : "Tableau de bord temps réel"}
                        </p>
                        <p className="text-xs mt-1 opacity-70 text-marine-500">(placeholder)</p>
                      </div>
                    </div>
                  )}

                  {/* Grille de features */}
                  <div className={`grid grid-cols-1 ${section.features.length > 2 ? 'md:grid-cols-2' : 'lg:grid-cols-2'} gap-12`}>
                    {section.features.slice(sectionIndex === 0 ? 1 : 0).map((featureIndex) => {
                      const feature = tool.features[featureIndex];
                      if (!feature) return null;

                      // Pour la section 3 (analyser), afficher avec images
                      if (sectionIndex === 2) {
                        return (
                          <div key={featureIndex}>
                            <div className="bg-gradient-to-br from-marine-100 to-gold-100 rounded-2xl p-8 aspect-video flex items-center justify-center border-2 mb-6" style={{ borderColor: '#E5E5E5' }}>
                              <div className="text-center">
                                <div className="text-5xl mb-2">{featureIndex === 4 ? '📚' : '📈'}</div>
                                <p className="text-sm font-medium text-marine-600">
                                  {isEnglish ? feature.titleEn : feature.titleFr}
                                </p>
                                <p className="text-xs mt-1 opacity-70 text-marine-500">(placeholder)</p>
                              </div>
                            </div>
                            <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
                              {isEnglish ? feature.titleEn : feature.titleFr}
                            </h4>
                            <p className="text-base mb-6" style={{ color: 'var(--on-surface-variant)' }}>
                              {isEnglish ? feature.descriptionEn : feature.descriptionFr}
                            </p>
                            <div className="space-y-3">
                              {feature.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                                  <span className="text-base" style={{ color: 'var(--on-surface)' }}>
                                    {isEnglish ? benefit.en : benefit.fr}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      // Pour les autres sections, texte seulement
                      return (
                        <div key={featureIndex}>
                          <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
                            {isEnglish ? feature.titleEn : feature.titleFr}
                          </h4>
                          <p className="text-base mb-6" style={{ color: 'var(--on-surface-variant)' }}>
                            {isEnglish ? feature.descriptionEn : feature.descriptionFr}
                          </p>
                          <div className="space-y-3">
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                                <span className="text-base" style={{ color: 'var(--on-surface)' }}>
                                  {isEnglish ? benefit.en : benefit.fr}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
