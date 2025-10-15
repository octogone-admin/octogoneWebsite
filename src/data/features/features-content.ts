/**
 * Données des 4 concepts fondamentaux d'Octogone
 * SOURCE DE VÉRITÉ - Utilisée par toutes les pages et composants
 */

export interface FeatureItem {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  icon?: string;
}

export interface ConceptFeature {
  id: 'operate' | 'automate' | 'analyze' | 'predict';
  
  // Identité du concept
  nameFr: string;
  nameEn: string;
  
  // Couleurs du thème (couleur pastel du hero)
  pastelColor: string; // Hex pour le hero background
  
  // Hero section
  heroTitleFr: string;
  heroTitleEn: string;
  heroDescriptionFr: string;
  heroDescriptionEn: string;
  heroImage: string;
  
  // Section principale
  sectionTitleFr: string;
  sectionTitleEn: string;
  sectionDescriptionFr: string;
  sectionDescriptionEn: string;
  
  // Liste des fonctionnalités
  features: FeatureItem[];
}

// Données des 4 concepts
export const concepts: ConceptFeature[] = [
  {
    id: 'operate',
    nameFr: 'Opérer',
    nameEn: 'Operate',
    pastelColor: '#B8E0D2', // Vert menthe pastel
    
    heroTitleFr: 'Gérez vos opérations avec efficacité',
    heroTitleEn: 'Manage your operations efficiently',
    heroDescriptionFr: 'Optimisez vos inventaires, réduisez le gaspillage et gagnez du temps avec nos outils de gestion opérationnelle.',
    heroDescriptionEn: 'Optimize your inventory, reduce waste, and save time with our operational management tools.',
    heroImage: '/operate.jpg',
    
    sectionTitleFr: 'Fonctionnalités clés',
    sectionTitleEn: 'Key Features',
    sectionDescriptionFr: 'Découvrez comment Octogone vous aide à opérer plus efficacement',
    sectionDescriptionEn: 'Discover how Octogone helps you operate more efficiently',
    
    features: [
      {
        titleFr: 'Gestion des inventaires',
        titleEn: 'Inventory Management',
        descriptionFr: 'Suivez vos stocks en temps réel et optimisez vos commandes',
        descriptionEn: 'Track your inventory in real-time and optimize your orders',
        icon: 'Package'
      },
      {
        titleFr: 'Optimisation des coûts',
        titleEn: 'Cost Optimization',
        descriptionFr: 'Réduisez le gaspillage et maximisez votre rentabilité',
        descriptionEn: 'Reduce waste and maximize your profitability',
        icon: 'TrendingUp'
      },
      {
        titleFr: 'Gain de temps',
        titleEn: 'Time Savings',
        descriptionFr: 'Automatisez les tâches répétitives et concentrez-vous sur l\'essentiel',
        descriptionEn: 'Automate repetitive tasks and focus on what matters',
        icon: 'Clock'
      }
    ]
  },
  {
    id: 'automate',
    nameFr: 'Automatiser',
    nameEn: 'Automate',
    pastelColor: '#B4D4FF', // Bleu ciel pastel
    
    heroTitleFr: 'Automatisez pour gagner en efficacité',
    heroTitleEn: 'Automate for greater efficiency',
    heroDescriptionFr: 'Libérez votre équipe des tâches répétitives et concentrez-vous sur ce qui compte vraiment.',
    heroDescriptionEn: 'Free your team from repetitive tasks and focus on what really matters.',
    heroImage: '/resto.jpg',
    
    sectionTitleFr: 'Automatisation intelligente',
    sectionTitleEn: 'Smart Automation',
    sectionDescriptionFr: 'Des processus automatisés qui vous font gagner du temps',
    sectionDescriptionEn: 'Automated processes that save you time',
    
    features: [
      {
        titleFr: 'Calculs automatiques',
        titleEn: 'Automatic Calculations',
        descriptionFr: 'Coûts de recettes, food cost et marges calculés automatiquement',
        descriptionEn: 'Recipe costs, food cost and margins calculated automatically',
        icon: 'Calculator'
      },
      {
        titleFr: 'Mises à jour en temps réel',
        titleEn: 'Real-time Updates',
        descriptionFr: 'Les changements de prix se répercutent instantanément partout',
        descriptionEn: 'Price changes instantly reflect everywhere',
        icon: 'RefreshCw'
      },
      {
        titleFr: 'Intégrations POS',
        titleEn: 'POS Integrations',
        descriptionFr: 'Synchronisation automatique avec votre système de caisse',
        descriptionEn: 'Automatic synchronization with your POS system',
        icon: 'Zap'
      }
    ]
  },
  {
    id: 'analyze',
    nameFr: 'Analyser',
    nameEn: 'Analyze',
    pastelColor: '#FFE5B4', // Jaune pastel
    
    heroTitleFr: 'Analysez pour mieux décider',
    heroTitleEn: 'Analyze to make better decisions',
    heroDescriptionFr: 'Transformez vos données en insights actionnables pour optimiser votre performance.',
    heroDescriptionEn: 'Transform your data into actionable insights to optimize your performance.',
    heroImage: '/resto.jpg',
    
    sectionTitleFr: 'Analyses puissantes',
    sectionTitleEn: 'Powerful Analytics',
    sectionDescriptionFr: 'Des rapports détaillés pour comprendre votre performance',
    sectionDescriptionEn: 'Detailed reports to understand your performance',
    
    features: [
      {
        titleFr: 'Rapports détaillés',
        titleEn: 'Detailed Reports',
        descriptionFr: 'Visualisez vos performances avec des rapports complets',
        descriptionEn: 'Visualize your performance with comprehensive reports',
        icon: 'BarChart3'
      },
      {
        titleFr: 'Analyse des écarts',
        titleEn: 'Variance Analysis',
        descriptionFr: 'Identifiez les sources de pertes et optimisez',
        descriptionEn: 'Identify sources of loss and optimize',
        icon: 'TrendingDown'
      },
      {
        titleFr: 'Ingénierie de menu',
        titleEn: 'Menu Engineering',
        descriptionFr: 'Optimisez votre menu pour maximiser la rentabilité',
        descriptionEn: 'Optimize your menu to maximize profitability',
        icon: 'LineChart'
      }
    ]
  },
  {
    id: 'predict',
    nameFr: 'Prédire',
    nameEn: 'Predict',
    pastelColor: '#C8B6FF', // Mauve pastel
    
    heroTitleFr: 'Anticipez avec l\'intelligence artificielle',
    heroTitleEn: 'Anticipate with artificial intelligence',
    heroDescriptionFr: 'L\'IA d\'Octogone analyse vos données pour vous aider à prendre les meilleures décisions.',
    heroDescriptionEn: 'Octogone\'s AI analyzes your data to help you make the best decisions.',
    heroImage: '/predict.jpg',
    
    sectionTitleFr: 'IA prédictive',
    sectionTitleEn: 'Predictive AI',
    sectionDescriptionFr: 'Anticipez les tendances et optimisez vos décisions',
    sectionDescriptionEn: 'Anticipate trends and optimize your decisions',
    
    features: [
      {
        titleFr: 'Prévisions de demande',
        titleEn: 'Demand Forecasting',
        descriptionFr: 'Anticipez les besoins et optimisez vos commandes',
        descriptionEn: 'Anticipate needs and optimize your orders',
        icon: 'TrendingUp'
      },
      {
        titleFr: 'Détection d\'anomalies',
        titleEn: 'Anomaly Detection',
        descriptionFr: 'Identifiez automatiquement les comportements inhabituels',
        descriptionEn: 'Automatically identify unusual behaviors',
        icon: 'AlertTriangle'
      },
      {
        titleFr: 'Recommandations intelligentes',
        titleEn: 'Smart Recommendations',
        descriptionFr: 'Recevez des suggestions basées sur vos données',
        descriptionEn: 'Receive suggestions based on your data',
        icon: 'Brain'
      }
    ]
  }
];

// Fonctions helper
export function getConceptById(id: string): ConceptFeature | undefined {
  return concepts.find(concept => concept.id === id);
}

export function getAllConcepts(): ConceptFeature[] {
  return concepts;
}
