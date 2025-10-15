/**
 * Données des outils/fonctionnalités Octogone
 * Structure similaire à sectors-data.ts pour cohérence
 */

export interface ToolFeature {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  benefits: Array<{
    fr: string;
    en: string;
  }>;
}

export interface Tool {
  id: string;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn: string;
  heroImage: string;
  
  // Configuration du header
  headerCategoryFr?: string;
  headerCategoryEn?: string;
  headerTitleFr?: string;
  headerTitleEn?: string;
  headerDescriptionFr?: string;
  headerDescriptionEn?: string;
  
  // Configuration des sections et concepts
  sections?: Array<{
    concept?: 'operate' | 'automate' | 'analyze' | 'predict';
    features: number[]; // Index des features à afficher dans cette section
  }>;
  
  features: ToolFeature[];
}

// Données des outils
export const tools: Tool[] = [
  {
    id: 'inventaire',
    nameFr: 'Inventaire',
    nameEn: 'Inventory',
    descriptionFr: 'Numérisez vos inventaires et suivez vos stocks en temps réel',
    descriptionEn: 'Digitize your inventory and track your stock in real-time',
    heroImage: '/images/tools/inventaire-hero.jpg',
    
    // Header personnalisé
    headerCategoryFr: 'Inventaire & Inventaire en temps réel',
    headerCategoryEn: 'Inventory & Real-Time Inventory',
    headerTitleFr: 'Des inventaires faciles, rapides et précis',
    headerTitleEn: 'Inventory made simple, fast, and accurate',
    headerDescriptionFr: 'Collaborez en temps réel, suivez automatiquement et obtenez une visibilité complète',
    headerDescriptionEn: 'Collaborate in real-time, track automatically, and gain complete visibility',
    
    // Configuration des sections avec concepts
    sections: [
      {
        concept: 'operate',
        features: [0, 3, 5] // Saisie collaborative, Unités de mesure, Emplacements
      },
      {
        concept: 'automate',
        features: [1, 2] // Inventaire théorique, Analyse des écarts
      },
      {
        concept: 'analyze',
        features: [4, 6] // Catalogue, Rapports
      }
    ],
    
    features: [
      {
        titleFr: 'Saisie d\'inventaire collaborative et simultanée',
        titleEn: 'Collaborative and Simultaneous Inventory Entry',
        descriptionFr: 'Transformez votre prise d\'inventaire en permettant à plusieurs membres de votre équipe de saisir les quantités simultanément. Fini les heures interminables avec une seule personne qui fait le tour du restaurant. Divisez les zones, saisissez en parallèle et synchronisez automatiquement toutes les données en temps réel. Cette approche collaborative réduit drastiquement le temps nécessaire pour compléter un inventaire complet.',
        descriptionEn: 'Transform your inventory taking by allowing multiple team members to enter quantities simultaneously. No more endless hours with one person going around the restaurant. Divide zones, enter data in parallel and automatically sync all data in real-time. This collaborative approach drastically reduces the time needed to complete a full inventory.',
        image: '/images/tools/inventaire-mobile.jpg',
        benefits: [
          { fr: 'Saisie simultanée par plusieurs utilisateurs', en: 'Simultaneous entry by multiple users' },
          { fr: 'Synchronisation automatique en temps réel', en: 'Automatic real-time synchronization' },
          { fr: 'Réduction significative du temps d\'inventaire', en: 'Significant inventory time reduction' }
        ]
      },
      {
        titleFr: 'Inventaire théorique en temps réel',
        titleEn: 'Real-time Theoretical Inventory',
        descriptionFr: 'Connaissez à tout moment votre inventaire théorique grâce à l\'intégration avec votre système POS. Chaque vente déduit automatiquement les ingrédients utilisés de votre stock théorique. Plus besoin d\'attendre la fin du mois pour savoir où vous en êtes. Cette visibilité en temps réel vous permet de prendre des décisions éclairées sur vos commandes et d\'anticiper les ruptures de stock.',
        descriptionEn: 'Know your theoretical inventory at any time through integration with your POS system. Each sale automatically deducts the ingredients used from your theoretical stock. No need to wait until the end of the month to know where you stand. This real-time visibility allows you to make informed decisions about your orders and anticipate stock-outs.',
        image: '/images/tools/inventaire-temps-reel.jpg',
        benefits: [
          { fr: 'Inventaire théorique calculé automatiquement', en: 'Theoretical inventory calculated automatically' },
          { fr: 'Déduction automatique à chaque vente', en: 'Automatic deduction with each sale' },
          { fr: 'Visibilité continue de vos stocks', en: 'Continuous stock visibility' }
        ]
      },
      {
        titleFr: 'Analyse des écarts et optimisation',
        titleEn: 'Variance Analysis and Optimization',
        descriptionFr: 'Comparez votre inventaire physique avec votre inventaire théorique pour identifier précisément vos écarts. Détectez rapidement le gaspillage, les erreurs de portions, le vol ou les problèmes de recettes. Les rapports détaillés vous montrent où se situent vos pertes et vous aident à mettre en place des actions correctives. Cette analyse vous permet de réduire vos coûts alimentaires de 2 à 5% en moyenne.',
        descriptionEn: 'Compare your physical inventory with your theoretical inventory to precisely identify your variances. Quickly detect waste, portion errors, theft or recipe issues. Detailed reports show you where your losses are and help you implement corrective actions. This analysis allows you to reduce your food costs by 2 to 5% on average.',
        image: '/images/tools/inventaire-ecarts.jpg',
        benefits: [
          { fr: 'Comparaison physique vs théorique', en: 'Physical vs theoretical comparison' },
          { fr: 'Identification des sources de pertes', en: 'Loss source identification' },
          { fr: 'Réduction des coûts alimentaires de 2-5%', en: '2-5% food cost reduction' }
        ]
      },
      {
        titleFr: 'Flexibilité des unités de mesure',
        titleEn: 'Unit of Measure Flexibility',
        descriptionFr: 'Prenez vos inventaires avec n\'importe quelle unité de mesure. Toutes les équivalences possibles sont gérées directement dans la fiche produit : comptez en caisses, en unités, en kilogrammes ou en litres selon ce qui est le plus pratique sur le terrain. Chaque fiche produit contient toutes les conversions nécessaires, permettant au système de convertir automatiquement vers l\'unité de base pour des calculs précis. Cette flexibilité accélère considérablement la prise d\'inventaire et élimine les erreurs de conversion.',
        descriptionEn: 'Take your inventories with any unit of measure. All possible equivalences are managed directly in the product sheet: count in cases, units, kilograms or liters depending on what\'s most practical in the field. Each product sheet contains all necessary conversions, allowing the system to automatically convert to the base unit for accurate calculations. This flexibility significantly speeds up inventory taking and eliminates conversion errors.',
        image: '/images/tools/inventaire-unites.jpg',
        benefits: [
          { fr: 'Saisie avec n\'importe quelle unité de mesure', en: 'Entry with any unit of measure' },
          { fr: 'Toutes les équivalences dans la fiche produit', en: 'All equivalences in the product sheet' },
          { fr: 'Conversions automatiques pour calculs précis', en: 'Automatic conversions for accurate calculations' }
        ]
      },
      {
        titleFr: 'Catalogue de produits centralisé et personnalisé',
        titleEn: 'Centralized and Customized Product Catalog',
        descriptionFr: 'Nous importons tous les produits de vos fournisseurs directement dans votre propre catalogue de produits. Chaque produit est enregistré dans une fiche complète avec toutes ses informations : formats, codes produits, prix, et surtout toutes les unités de mesure possibles avec leurs conversions. Ce catalogue centralisé est partagé entre l\'inventaire et les recettes, garantissant une cohérence parfaite dans toute votre gestion.',
        descriptionEn: 'We import all products from your suppliers directly into your own product catalog. Each product is recorded in a complete sheet with all its information: formats, product codes, prices, and especially all possible units of measure with their conversions. This centralized catalog is shared between inventory and recipes, ensuring perfect consistency throughout your management.',
        image: '/images/tools/inventaire-catalogue.jpg',
        benefits: [
          { fr: 'Import automatique depuis vos fournisseurs', en: 'Automatic import from your suppliers' },
          { fr: 'Catalogue personnalisé à votre entreprise', en: 'Catalog customized to your business' },
          { fr: 'Partagé entre inventaire et recettes', en: 'Shared between inventory and recipes' }
        ]
      },
      {
        titleFr: 'Gestion des emplacements personnalisés',
        titleEn: 'Custom Location Management',
        descriptionFr: 'Créez des listes personnalisées d\'emplacements avec des positions spécifiques pour organiser votre prise d\'inventaire. Définissez vos zones (cuisine, bar, réserve) et les positions exactes de chaque produit. Cette organisation facilite grandement la prise d\'inventaire en guidant vos équipes dans un ordre logique et en réduisant les oublis.',
        descriptionEn: 'Create custom location lists with specific positions to organize your inventory taking. Define your zones (kitchen, bar, storage) and the exact positions of each product. This organization greatly facilitates inventory taking by guiding your teams in a logical order and reducing oversights.',
        image: '/images/tools/inventaire-emplacements.jpg',
        benefits: [
          { fr: 'Listes d\'emplacements personnalisées', en: 'Custom location lists' },
          { fr: 'Positions définies pour chaque produit', en: 'Defined positions for each product' },
          { fr: 'Organisation logique de la prise d\'inventaire', en: 'Logical inventory taking organization' }
        ]
      },
      {
        titleFr: 'Rapports détaillés et comparaisons',
        titleEn: 'Detailed Reports and Comparisons',
        descriptionFr: 'Générez des rapports détaillés sur vos inventaires avec toutes les informations dont vous avez besoin : valeur totale, écarts, mouvements de stock, historique complet. Comparez vos inventaires entre différentes périodes pour identifier les tendances et les variations.',
        descriptionEn: 'Generate detailed reports on your inventories with all the information you need: total value, variances, stock movements, complete history. Compare your inventories across different periods to identify trends and variations.',
        image: '/images/tools/inventaire-rapports.jpg',
        benefits: [
          { fr: 'Rapports détaillés complets', en: 'Complete detailed reports' },
          { fr: 'Comparaison entre périodes', en: 'Period-to-period comparison' },
          { fr: 'Historique et analyses', en: 'History and analytics' }
        ]
      }
    ]
  },
  {
    id: 'food-cost',
    nameFr: 'Recettes & Food Cost',
    nameEn: 'Recipes & Food Cost',
    descriptionFr: 'Standardisez vos recettes et maîtrisez votre rentabilité en temps réel',
    descriptionEn: 'Standardize your recipes and master your profitability in real-time',
    heroImage: '/images/tools/foodcost-hero.jpg',
    features: [] // À compléter
  },
  {
    id: 'iot',
    nameFr: 'IoT - Thermomètres',
    nameEn: 'IoT - Thermometers',
    descriptionFr: 'Surveillance active en temps réel et alertes personnalisées',
    descriptionEn: 'Active real-time monitoring and personalized alerts',
    heroImage: '/images/tools/iot-hero.jpg',
    features: [] // À compléter
  },
  {
    id: 'ressources-humaines',
    nameFr: 'Ressources Humaines',
    nameEn: 'Human Resources',
    descriptionFr: 'Automatisez la gestion des pourboires et centralisez vos fiches employés',
    descriptionEn: 'Automate tip management and centralize employee records',
    heroImage: '/images/tools/rh-hero.jpg',
    features: [] // À compléter
  }
];

// Fonction helper pour récupérer un outil par ID
export function getToolById(toolId: string): Tool | undefined {
  return tools.find(tool => tool.id === toolId);
}

// Fonction helper pour récupérer tous les outils
export function getAllTools(): Tool[] {
  return tools;
}

// Fonction helper pour la navigation
export function getNextTool(currentId: string): Tool | undefined {
  const currentIndex = tools.findIndex(t => t.id === currentId);
  if (currentIndex === -1) return undefined;
  return tools[(currentIndex + 1) % tools.length];
}

export function getPreviousTool(currentId: string): Tool | undefined {
  const currentIndex = tools.findIndex(t => t.id === currentId);
  if (currentIndex === -1) return undefined;
  return tools[(currentIndex - 1 + tools.length) % tools.length];
}
