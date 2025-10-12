/**
 * Configuration du calculateur ROI Octogone
 * 
 * Ce fichier contient toutes les données de calcul pour le ROI.
 * Modifiez ces valeurs pour ajuster les estimations.
 */

// ============================================
// CONFIGURATION DES MODULES
// ============================================

export interface Module {
  id: string;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn: string;
  // Gains estimés par établissement par mois
  monthlySavingsPerLocation: number; // En dollars
  timesSavedPerWeekPerLocation: number; // En heures
  // Icône (nom de l'icône Lucide)
  icon: string;
}

export const AVAILABLE_MODULES: Module[] = [
  {
    id: 'inventory',
    nameFr: 'Inventaire',
    nameEn: 'Inventory',
    descriptionFr: 'Éliminez la double saisie et les erreurs de calcul',
    descriptionEn: 'Eliminate double entry and calculation errors',
    // Gains basés sur étude "Prise d'inventaire en restauration" :
    // - Élimination double saisie (papier → Excel) : ~3h/semaine économisées
    // - Réduction erreurs de calcul et ratures : ~500$/mois en pertes évitées
    // - Meilleure coordination multi-zones : ~2h/semaine économisées
    // - Gestion produits partiels automatique : ~3h/semaine + 200$/mois
    // - Réduction gaspillage grâce à précision : ~500$/mois
    // Total : 1200$/mois + 8h/semaine
    monthlySavingsPerLocation: 1200,
    timesSavedPerWeekPerLocation: 8,
    icon: 'Warehouse'
  },
  {
    id: 'foodcost',
    nameFr: 'Foodcost',
    nameEn: 'Foodcost',
    descriptionFr: 'Standardisation des recettes et Food Cost en temps réel',
    descriptionEn: 'Recipe standardization and real-time Food Cost',
    // Gains basés sur :
    // - Standardisation recettes : réduction gaspillage ~600$/mois
    // - Food Cost en temps réel : meilleure marge ~400$/mois
    // - Automatisation calculs : ~4h/semaine
    monthlySavingsPerLocation: 1000,
    timesSavedPerWeekPerLocation: 4,
    icon: 'ChefHat'
  },
  {
    id: 'thermometer',
    nameFr: 'Thermomètre',
    nameEn: 'Thermometer',
    descriptionFr: 'Surveillance active en temps réel et alertes personnalisées',
    descriptionEn: 'Active real-time monitoring and personalized alerts',
    // Gains basés sur :
    // - Réduction pertes alimentaires (alertes précoces) : ~400$/mois
    // - Conformité HACCP automatisée : ~2h/semaine
    // - Prévention incidents sanitaires : ~300$/mois
    monthlySavingsPerLocation: 700,
    timesSavedPerWeekPerLocation: 2,
    icon: 'Thermometer'
  },
  {
    id: 'tips',
    nameFr: 'Pourboire',
    nameEn: 'Tips',
    descriptionFr: 'Répartition automatique et gestion des exceptions',
    descriptionEn: 'Automatic distribution and exception management',
    // Gains basés sur :
    // - Élimination calculs manuels : ~3h/semaine
    // - Réduction erreurs de répartition : ~200$/mois
    // - Conformité légale automatique : ~100$/mois
    monthlySavingsPerLocation: 300,
    timesSavedPerWeekPerLocation: 3,
    icon: 'DollarSign'
  }
];

// ============================================
// CONFIGURATION DES TRANCHES D'ÉTABLISSEMENTS
// ============================================

export interface LocationRange {
  min: number;
  max: number | null; // null = illimité
  labelFr: string;
  labelEn: string;
  // Multiplicateur d'efficacité (économies d'échelle)
  efficiencyMultiplier: number;
}

export const LOCATION_RANGES: LocationRange[] = [
  {
    min: 1,
    max: 1,
    labelFr: '1 établissement',
    labelEn: '1 location',
    efficiencyMultiplier: 1.0
  },
  {
    min: 2,
    max: 5,
    labelFr: '2-5 établissements',
    labelEn: '2-5 locations',
    efficiencyMultiplier: 1.15 // 15% de gains supplémentaires grâce à la centralisation
  },
  {
    min: 6,
    max: 10,
    labelFr: '6-10 établissements',
    labelEn: '6-10 locations',
    efficiencyMultiplier: 1.25
  },
  {
    min: 11,
    max: 20,
    labelFr: '11-20 établissements',
    labelEn: '11-20 locations',
    efficiencyMultiplier: 1.35
  },
  {
    min: 21,
    max: null,
    labelFr: '21+ établissements',
    labelEn: '21+ locations',
    efficiencyMultiplier: 1.5
  }
];

// ============================================
// CONFIGURATION DES COÛTS
// ============================================

export interface PricingTier {
  minLocations: number;
  maxLocations: number | null;
  pricePerLocationPerMonth: number;
}

// Prix basés sur les forfaits réels Octogone
// Forfait PRO (159$/mois) inclut tous les modules pour 1 établissement
// Prix dégressifs pour plusieurs établissements
export const PRICING_TIERS: PricingTier[] = [
  {
    minLocations: 1,
    maxLocations: 1,
    pricePerLocationPerMonth: 159 // Forfait PRO - Tout inclus
  },
  {
    minLocations: 2,
    maxLocations: 5,
    pricePerLocationPerMonth: 139 // -13% pour 2-5 établissements
  },
  {
    minLocations: 6,
    maxLocations: 10,
    pricePerLocationPerMonth: 119 // -25% pour 6-10 établissements
  },
  {
    minLocations: 11,
    maxLocations: 20,
    pricePerLocationPerMonth: 99 // -38% pour 11-20 établissements
  },
  {
    minLocations: 21,
    maxLocations: null,
    pricePerLocationPerMonth: 89 // -44% pour 21+ établissements
  }
];

// ============================================
// CONFIGURATION DES CALCULS
// ============================================

export const CALCULATION_CONFIG = {
  // Coût horaire moyen d'un employé (incluant charges) - VALEUR PAR DÉFAUT
  defaultHourlyCost: 25, // En dollars
  
  // Nombre de semaines par mois (pour calculs)
  weeksPerMonth: 4.33,
  
  // Période de calcul du ROI (en mois)
  roiPeriodMonths: 12,
  
  // Frais d'intégration (one-time par établissement)
  integrationFeePerLocation: 1500, // Frais d'intégration par succursale
  
  // Facteur de risque/prudence (réduction des estimations)
  conservativeFactor: 0.85 // On affiche 85% des gains estimés pour être prudent
};

// ============================================
// GAINS PAR INVENTAIRE (données précises)
// ============================================

export const INVENTORY_SAVINGS = {
  // Temps économisé PAR inventaire avec Octogone (par personne)
  timeSavedPerInventoryPerPersonHours: 2.5, // Heures économisées par inventaire par personne
  
  // Économies monétaires PAR inventaire
  moneySavedPerInventory: 150, // Réduction erreurs + gaspillage par inventaire
  
  // Fréquence par défaut (inventaires par mois)
  defaultInventoriesPerMonth: 4, // 1 par semaine en moyenne
  
  // Nombre d'employés par défaut pour faire un inventaire
  defaultEmployeesPerInventory: 2 // 2 personnes en moyenne
};
