/**
 * Utilitaires de calcul ROI
 * 
 * Toutes les formules de calcul sont centralisées ici.
 */

import { 
  AVAILABLE_MODULES, 
  PRICING_TIERS, 
  LOCATION_RANGES,
  CALCULATION_CONFIG,
  INVENTORY_SAVINGS
} from '../config/calculator-config';

export interface ROIResult {
  // Coûts
  monthlySubscriptionCost: number;
  yearlySubscriptionCost: number;
  implementationCost: number;
  totalFirstYearCost: number;
  
  // Gains
  monthlyMoneySavings: number;
  yearlyMoneySavings: number;
  monthlyTimeSavings: number; // En heures
  yearlyTimeSavings: number; // En heures
  timeSavingsValue: number; // Valeur monétaire du temps économisé
  
  // ROI
  totalYearlySavings: number;
  netYearlySavings: number; // Gains - Coûts
  roiPercentage: number;
  paybackPeriodMonths: number; // Nombre de mois pour rentabiliser
  
  // Détails
  numberOfLocations: number;
  selectedModules: string[];
  efficiencyMultiplier: number;
}

/**
 * Calcule le coût mensuel par établissement selon la tranche
 */
export function getPricePerLocation(numberOfLocations: number): number {
  const tier = PRICING_TIERS.find(
    t => numberOfLocations >= t.minLocations && 
         (t.maxLocations === null || numberOfLocations <= t.maxLocations)
  );
  
  return tier?.pricePerLocationPerMonth || PRICING_TIERS[0].pricePerLocationPerMonth;
}

/**
 * Obtient le multiplicateur d'efficacité selon le nombre d'établissements
 */
export function getEfficiencyMultiplier(numberOfLocations: number): number {
  const range = LOCATION_RANGES.find(
    r => numberOfLocations >= r.min && 
         (r.max === null || numberOfLocations <= r.max)
  );
  
  return range?.efficiencyMultiplier || 1.0;
}

/**
 * Calcule le ROI complet
 */
export function calculateROI(
  numberOfLocations: number,
  selectedModuleIds: string[],
  hourlyCost: number = CALCULATION_CONFIG.defaultHourlyCost,
  inventoriesPerMonth: number = INVENTORY_SAVINGS.defaultInventoriesPerMonth,
  employeesPerInventory: number = INVENTORY_SAVINGS.defaultEmployeesPerInventory
): ROIResult {
  // Validation
  if (numberOfLocations < 1) numberOfLocations = 1;
  if (selectedModuleIds.length === 0) {
    // Retour avec valeurs nulles si aucun module sélectionné
    return {
      monthlySubscriptionCost: 0,
      yearlySubscriptionCost: 0,
      implementationCost: 0,
      totalFirstYearCost: 0,
      monthlyMoneySavings: 0,
      yearlyMoneySavings: 0,
      monthlyTimeSavings: 0,
      yearlyTimeSavings: 0,
      timeSavingsValue: 0,
      totalYearlySavings: 0,
      netYearlySavings: 0,
      roiPercentage: 0,
      paybackPeriodMonths: 0,
      numberOfLocations,
      selectedModules: [],
      efficiencyMultiplier: 1
    };
  }
  
  // Récupération des modules sélectionnés
  const selectedModules = AVAILABLE_MODULES.filter(m => 
    selectedModuleIds.includes(m.id)
  );
  
  // Multiplicateur d'efficacité
  const efficiencyMultiplier = getEfficiencyMultiplier(numberOfLocations);
  
  // === CALCUL DES COÛTS ===
  const pricePerLocation = getPricePerLocation(numberOfLocations);
  const monthlySubscriptionCost = pricePerLocation * numberOfLocations;
  const yearlySubscriptionCost = monthlySubscriptionCost * 12;
  const implementationCost = CALCULATION_CONFIG.integrationFeePerLocation * numberOfLocations;
  const totalFirstYearCost = yearlySubscriptionCost + implementationCost;
  
  // === CALCUL DES GAINS MONÉTAIRES ===
  let monthlyMoneySavingsPerLocation = 0;
  selectedModules.forEach(module => {
    monthlyMoneySavingsPerLocation += module.monthlySavingsPerLocation;
  });
  
  // Application du multiplicateur d'efficacité et du facteur conservateur
  const monthlyMoneySavings = 
    monthlyMoneySavingsPerLocation * 
    numberOfLocations * 
    efficiencyMultiplier * 
    CALCULATION_CONFIG.conservativeFactor;
  
  const yearlyMoneySavings = monthlyMoneySavings * 12;
  
  // === CALCUL DES GAINS DE TEMPS ===
  let timesSavedPerWeekPerLocation = 0;
  selectedModules.forEach(module => {
    timesSavedPerWeekPerLocation += module.timesSavedPerWeekPerLocation;
  });
  
  const monthlyTimeSavings = 
    timesSavedPerWeekPerLocation * 
    CALCULATION_CONFIG.weeksPerMonth * 
    numberOfLocations * 
    efficiencyMultiplier * 
    CALCULATION_CONFIG.conservativeFactor;
  
  const yearlyTimeSavings = monthlyTimeSavings * 12;
  
  // Valeur monétaire du temps économisé
  const timeSavingsValue = yearlyTimeSavings * hourlyCost;
  
  // === CALCUL DU ROI ===
  const totalYearlySavings = yearlyMoneySavings + timeSavingsValue;
  const netYearlySavings = totalYearlySavings - totalFirstYearCost;
  const roiPercentage = totalFirstYearCost > 0 
    ? (netYearlySavings / totalFirstYearCost) * 100 
    : 0;
  
  // Période de retour sur investissement
  const paybackPeriodMonths = monthlyMoneySavings + (monthlyTimeSavings * hourlyCost) > 0
    ? totalFirstYearCost / (monthlyMoneySavings + (monthlyTimeSavings * hourlyCost))
    : 0;
  
  return {
    monthlySubscriptionCost,
    yearlySubscriptionCost,
    implementationCost,
    totalFirstYearCost,
    monthlyMoneySavings,
    yearlyMoneySavings,
    monthlyTimeSavings,
    yearlyTimeSavings,
    timeSavingsValue,
    totalYearlySavings,
    netYearlySavings,
    roiPercentage,
    paybackPeriodMonths,
    numberOfLocations,
    selectedModules: selectedModuleIds,
    efficiencyMultiplier
  };
}

/**
 * Formate un nombre en devise
 */
export function formatCurrency(amount: number, locale: string = 'fr'): string {
  // Utiliser le format anglais (virgule pour milliers, point pour décimales)
  const formatted = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true
  }).format(amount);
  
  // Format obtenu : $3,469.18 → On veut : 3,469.18$
  return formatted.replace('$', '').trim() + '$';
}

/**
 * Formate un nombre d'heures
 */
export function formatHours(hours: number, locale: string = 'fr'): string {
  const rounded = Math.round(hours);
  return locale === 'fr' 
    ? `${rounded} h` 
    : `${rounded} hrs`;
}
