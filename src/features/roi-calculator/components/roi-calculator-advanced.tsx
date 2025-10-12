"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ResponsiveSection } from '@/components/ui/responsive-section';
import { OctogoneButton } from '@/components/ui/octogone-button';
import { 
  Warehouse, 
  ChefHat, 
  Thermometer,
  DollarSign,
  TrendingUp,
  Clock,
  Check,
  Info
} from 'lucide-react';
import { AVAILABLE_MODULES, LOCATION_RANGES, CALCULATION_CONFIG, INVENTORY_SAVINGS } from '../config/calculator-config';
import { calculateROI, formatCurrency, formatHours } from '../utils/roi-calculations';

// Map des icônes (seulement les 4 forfaits réels)
const ICON_MAP: Record<string, any> = {
  Warehouse,    // Inventaire
  ChefHat,      // Foodcost
  Thermometer,  // Thermomètre
  DollarSign    // Pourboire
};

interface ROICalculatorAdvancedProps {
  onSavingsCalculated?: (savings: number) => void;
}

export default function ROICalculatorAdvanced({ onSavingsCalculated }: ROICalculatorAdvancedProps) {
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";
  
  // État
  const [numberOfLocations, setNumberOfLocations] = useState(1);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [hourlyCost, setHourlyCost] = useState(CALCULATION_CONFIG.defaultHourlyCost);
  const [inventoriesPerMonth, setInventoriesPerMonth] = useState(INVENTORY_SAVINGS.defaultInventoriesPerMonth);
  const [employeesPerInventory, setEmployeesPerInventory] = useState(INVENTORY_SAVINGS.defaultEmployeesPerInventory);
  const [roiResult, setRoiResult] = useState(calculateROI(1, [], CALCULATION_CONFIG.defaultHourlyCost, INVENTORY_SAVINGS.defaultInventoriesPerMonth));
  
  // Recalculer le ROI quand les paramètres changent
  useEffect(() => {
    const result = calculateROI(numberOfLocations, selectedModules, hourlyCost, inventoriesPerMonth, employeesPerInventory);
    setRoiResult(result);
    
    // Notifier le parent si callback fourni
    if (onSavingsCalculated && selectedModules.length > 0) {
      onSavingsCalculated(result.netYearlySavings);
    }
  }, [numberOfLocations, selectedModules, hourlyCost, inventoriesPerMonth, employeesPerInventory, onSavingsCalculated]);
  
  // Toggle module
  const toggleModule = (moduleId: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };
  
  // Vérifier si le module Inventaire est sélectionné
  const isInventorySelected = selectedModules.includes('inventory');
  
  return (
    <div className="px-4 sm:px-8 py-4 sm:py-8" style={{ backgroundColor: 'var(--background)' }}>
      <ResponsiveSection
        as="section"
        spacing="xxl"
        className="rounded-2xl"
        style={{ backgroundColor: 'var(--secondary-container)' }}
      >
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--on-secondary-container)' }}>
            {locale === "fr" ? "Calculez votre retour sur investissement" : "Calculate your return on investment"}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--on-surface-variant)' }}>
            {locale === "fr" 
              ? "Découvrez combien vous pourriez économiser avec Octogone"
              : "Discover how much you could save with Octogone"
            }
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne gauche - Configuration */}
          <div className="space-y-6">
            {/* Nombre d'établissements */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: 'var(--surface)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
                {locale === "fr" ? "Nombre d'établissements" : "Number of locations"}
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {LOCATION_RANGES.map((range) => (
                  <button
                    key={`${range.min}-${range.max}`}
                    onClick={() => setNumberOfLocations(range.min)}
                    className="p-4 rounded-lg border-2 transition-all duration-200 text-left"
                    style={{
                      backgroundColor: numberOfLocations >= range.min && (range.max === null || numberOfLocations <= range.max)
                        ? 'var(--primary-container)'
                        : 'transparent',
                      borderColor: numberOfLocations >= range.min && (range.max === null || numberOfLocations <= range.max)
                        ? 'var(--primary-container)'
                        : 'var(--outline)',
                      color: 'var(--on-surface)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        {locale === "fr" ? range.labelFr : range.labelEn}
                      </span>
                      {numberOfLocations >= range.min && (range.max === null || numberOfLocations <= range.max) && (
                        <Check className="w-5 h-5" style={{ color: 'var(--on-primary-container)' }} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Paramètres personnalisés */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: 'var(--surface)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
                {locale === "fr" ? "Vos paramètres" : "Your parameters"}
              </h3>
              
              <div className="space-y-4">
                {/* Coût horaire */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--on-surface)' }}>
                    {locale === "fr" ? "Coût horaire moyen d'un employé (avec charges)" : "Average hourly cost per employee (with benefits)"}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="15"
                      max="50"
                      value={hourlyCost}
                      onChange={(e) => setHourlyCost(Number(e.target.value))}
                      className="flex-1 px-4 py-2 rounded-lg border-2"
                      style={{
                        backgroundColor: 'var(--surface-variant)',
                        borderColor: 'var(--outline)',
                        color: 'var(--on-surface)'
                      }}
                    />
                    <span className="text-sm font-medium" style={{ color: 'var(--on-surface)' }}>$/h</span>
                  </div>
                </div>

                {/* Inventaires par mois (seulement si module Inventaire sélectionné) */}
                {isInventorySelected && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--on-surface)' }}>
                        {locale === "fr" ? "Nombre d'inventaires par mois" : "Number of inventories per month"}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          max="30"
                          value={inventoriesPerMonth}
                          onChange={(e) => setInventoriesPerMonth(Number(e.target.value))}
                          className="flex-1 px-4 py-2 rounded-lg border-2"
                          style={{
                            backgroundColor: 'var(--surface-variant)',
                            borderColor: 'var(--outline)',
                            color: 'var(--on-surface)'
                          }}
                        />
                        <span className="text-sm font-medium" style={{ color: 'var(--on-surface)' }}>
                          {locale === "fr" ? "/mois" : "/month"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--on-surface)' }}>
                        {locale === "fr" ? "Nombre d'employés par inventaire" : "Number of employees per inventory"}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={employeesPerInventory}
                          onChange={(e) => setEmployeesPerInventory(Number(e.target.value))}
                          className="flex-1 px-4 py-2 rounded-lg border-2"
                          style={{
                            backgroundColor: 'var(--surface-variant)',
                            borderColor: 'var(--outline)',
                            color: 'var(--on-surface)'
                          }}
                        />
                        <span className="text-sm font-medium" style={{ color: 'var(--on-surface)' }}>
                          {locale === "fr" ? "personnes" : "people"}
                        </span>
                      </div>
                      <div className="mt-2 flex items-start gap-2">
                        <Info className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--on-surface-variant)' }} />
                        <p className="text-xs" style={{ color: 'var(--on-surface-variant)' }}>
                          {locale === "fr" 
                            ? `Économies par inventaire par personne : ${formatHours(INVENTORY_SAVINGS.timeSavedPerInventoryPerPersonHours, locale)} + ${formatCurrency(INVENTORY_SAVINGS.moneySavedPerInventory / employeesPerInventory, locale)}`
                            : `Savings per inventory per person: ${formatHours(INVENTORY_SAVINGS.timeSavedPerInventoryPerPersonHours, locale)} + ${formatCurrency(INVENTORY_SAVINGS.moneySavedPerInventory / employeesPerInventory, locale)}`
                          }
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Sélection des modules */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: 'var(--surface)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
                {locale === "fr" ? "Modules à utiliser" : "Modules to use"}
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {AVAILABLE_MODULES.map((module) => {
                  const Icon = ICON_MAP[module.icon];
                  const isSelected = selectedModules.includes(module.id);
                  
                  return (
                    <button
                      key={module.id}
                      onClick={() => toggleModule(module.id)}
                      className="p-4 rounded-lg border-2 transition-all duration-200 text-left"
                      style={{
                        backgroundColor: isSelected ? 'var(--primary-container)' : 'transparent',
                        borderColor: isSelected ? 'var(--primary-container)' : 'var(--outline)'
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                             style={{ backgroundColor: 'var(--secondary-container)' }}>
                          {Icon && <Icon className="w-5 h-5" style={{ color: 'var(--on-secondary-container)' }} />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold" style={{ color: 'var(--on-surface)' }}>
                              {locale === "fr" ? module.nameFr : module.nameEn}
                            </span>
                            {isSelected && (
                              <Check className="w-5 h-5" style={{ color: 'var(--on-primary-container)' }} />
                            )}
                          </div>
                          <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
                            {locale === "fr" ? module.descriptionFr : module.descriptionEn}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Colonne droite - Résultats */}
          <div className="space-y-6">
            {/* Résumé des gains */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: 'var(--surface)' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--on-surface)' }}>
                {locale === "fr" ? "Vos gains estimés (1ère année)" : "Your estimated savings (1st year)"}
              </h3>
              
              {selectedModules.length === 0 ? (
                <p className="text-center py-8" style={{ color: 'var(--on-surface-variant)' }}>
                  {locale === "fr" 
                    ? "Sélectionnez des modules pour voir vos gains estimés"
                    : "Select modules to see your estimated savings"
                  }
                </p>
              ) : (
                <div className="space-y-4">
                  {/* Gains monétaires */}
                  <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--surface-variant)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: 'var(--primary-container)' }}>
                      <DollarSign className="w-6 h-6" style={{ color: 'var(--on-primary-container)' }} />
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: 'var(--on-surface-variant)' }}>
                        {locale === "fr" ? "Économies monétaires" : "Money savings"}
                      </p>
                      <p className="text-2xl font-bold" style={{ color: 'var(--on-surface)' }}>
                        {formatCurrency(roiResult.yearlyMoneySavings, locale)}
                      </p>
                    </div>
                  </div>

                  {/* Gains de temps */}
                  <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--surface-variant)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: 'var(--primary-container)' }}>
                      <Clock className="w-6 h-6" style={{ color: 'var(--on-primary-container)' }} />
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: 'var(--on-surface-variant)' }}>
                        {locale === "fr" ? "Temps économisé" : "Time saved"}
                      </p>
                      <p className="text-2xl font-bold" style={{ color: 'var(--on-surface)' }}>
                        {formatHours(roiResult.yearlyTimeSavings, locale)}
                      </p>
                      <p className="text-sm mt-1" style={{ color: 'var(--on-surface-variant)' }}>
                        {locale === "fr" ? "Valeur : " : "Value: "}
                        {formatCurrency(roiResult.timeSavingsValue, locale)}
                      </p>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--primary-container)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: 'var(--surface)' }}>
                      <TrendingUp className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: 'var(--on-primary-container)' }}>
                        {locale === "fr" ? "Retour sur investissement" : "Return on investment"}
                      </p>
                      <p className="text-3xl font-bold" style={{ color: 'var(--on-primary-container)' }}>
                        {Math.round(roiResult.roiPercentage)}%
                      </p>
                      <p className="text-sm mt-1" style={{ color: 'var(--on-primary-container)' }}>
                        {locale === "fr" ? "Rentabilisé en " : "Payback in "}
                        {Math.ceil(roiResult.paybackPeriodMonths)}
                        {locale === "fr" ? " mois" : " months"}
                      </p>
                    </div>
                  </div>

                  {/* Détails des coûts */}
                  <div className="pt-4 border-t" style={{ borderColor: 'var(--outline)' }}>
                    <p className="text-sm mb-2" style={{ color: 'var(--on-surface-variant)' }}>
                      {locale === "fr" ? "Coût mensuel : " : "Monthly cost: "}
                      <span className="font-semibold" style={{ color: 'var(--on-surface)' }}>
                        {formatCurrency(roiResult.monthlySubscriptionCost, locale)}
                      </span>
                    </p>
                    <p className="text-sm mb-3" style={{ color: 'var(--on-surface-variant)' }}>
                      {locale === "fr" ? "Gains nets annuels : " : "Net annual savings: "}
                      <span className="font-semibold" style={{ color: 'var(--on-surface)' }}>
                        {formatCurrency(roiResult.netYearlySavings, locale)}
                      </span>
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: 'var(--surface-variant)' }}>
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--on-surface-variant)' }} />
                      <p className="text-xs" style={{ color: 'var(--on-surface-variant)' }}>
                        {locale === "fr" 
                          ? "Les frais de démarrage sont inclus dans ce calcul. Contactez-nous pour connaître les détails."
                          : "Setup fees are included in this calculation. Contact us for details."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            {selectedModules.length > 0 && (
              <div className="text-center">
                <OctogoneButton
                  href={`/${locale}/contact`}
                  variant="primary"
                  size="lg"
                >
                  {locale === "fr" ? "Discuter de mon projet" : "Discuss my project"}
                </OctogoneButton>
              </div>
            )}
          </div>
        </div>
      </ResponsiveSection>
    </div>
  );
}
