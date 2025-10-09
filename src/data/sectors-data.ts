// Types pour les secteurs cibles
export interface TargetSector {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  gradient: string;
  hoverGradient: string;
}

// Données des secteurs cibles - SOURCE UNIQUE DE VÉRITÉ
export const targetSectors: TargetSector[] = [
  {
    id: "restaurants",
    titleFr: "Restaurants",
    titleEn: "Restaurants",
    descriptionFr: "Indépendants & franchisés",
    descriptionEn: "Independent & franchised",
    image: "/resto.jpg",
    gradient: "from-marine-400 to-marine-600",
    hoverGradient: "from-marine-500 to-marine-700"
  },
  {
    id: "chains",
    titleFr: "Chaînes",
    titleEn: "Chains",
    descriptionFr: "Multi-établissements",
    descriptionEn: "Multi-location",
    image: "/resto.jpg",
    gradient: "from-gold-400 to-gold-600",
    hoverGradient: "from-gold-500 to-gold-700"
  },
  {
    id: "hotels",
    titleFr: "Hôtels",
    titleEn: "Hotels",
    descriptionFr: "Restauration hôtelière",
    descriptionEn: "Hotel dining",
    image: "/resto.jpg",
    gradient: "from-marine-500 to-marine-700",
    hoverGradient: "from-marine-600 to-marine-800"
  },
  {
    id: "catering",
    titleFr: "Traiteurs",
    titleEn: "Caterers",
    descriptionFr: "Événementiel & corporate",
    descriptionEn: "Events & corporate",
    image: "/resto.jpg",
    gradient: "from-gold-500 to-gold-700",
    hoverGradient: "from-gold-600 to-gold-800"
  },
  {
    id: "rpa",
    titleFr: "RPA",
    titleEn: "Senior Living",
    descriptionFr: "Résidences pour aînés",
    descriptionEn: "Senior residences",
    image: "/resto.jpg",
    gradient: "from-marine-600 to-marine-800",
    hoverGradient: "from-marine-700 to-marine-900"
  },
  {
    id: "retail",
    titleFr: "Commerce",
    titleEn: "Retail",
    descriptionFr: "Alimentaire & détail",
    descriptionEn: "Food & retail",
    image: "/resto.jpg",
    gradient: "from-yellow-600 to-yellow-800",
    hoverGradient: "from-yellow-700 to-yellow-900"
  }
];

// Données des styles de restaurants
export const restaurantStyles: TargetSector[] = [
  {
    id: "fine-dining",
    titleFr: "Gastronomique",
    titleEn: "Fine Dining",
    descriptionFr: "Haute gastronomie",
    descriptionEn: "High-end cuisine",
    image: "/resto.jpg",
    gradient: "from-blue-400 to-blue-600",
    hoverGradient: "from-blue-500 to-blue-700"
  },
  {
    id: "casual",
    titleFr: "Décontracté",
    titleEn: "Casual Dining",
    descriptionFr: "Ambiance détendue",
    descriptionEn: "Relaxed atmosphere",
    image: "/resto.jpg",
    gradient: "from-yellow-400 to-yellow-600",
    hoverGradient: "from-yellow-500 to-yellow-700"
  },
  {
    id: "fast-casual",
    titleFr: "Rapide Premium",
    titleEn: "Fast-Casual",
    descriptionFr: "Service rapide, qualité",
    descriptionEn: "Quick service, quality",
    image: "/resto.jpg",
    gradient: "from-blue-500 to-blue-700",
    hoverGradient: "from-blue-600 to-blue-800"
  },
  {
    id: "qsr",
    titleFr: "Restauration Rapide",
    titleEn: "Quick Service",
    descriptionFr: "Service ultra-rapide",
    descriptionEn: "Ultra-fast service",
    image: "/resto.jpg",
    gradient: "from-yellow-500 to-yellow-700",
    hoverGradient: "from-yellow-600 to-yellow-800"
  },
  {
    id: "food-truck",
    titleFr: "Camion Restaurant",
    titleEn: "Food Truck",
    descriptionFr: "Mobile & flexible",
    descriptionEn: "Mobile & flexible",
    image: "/resto.jpg",
    gradient: "from-blue-600 to-blue-800",
    hoverGradient: "from-blue-700 to-blue-900"
  },
  {
    id: "buffet",
    titleFr: "Buffet",
    titleEn: "Buffet",
    descriptionFr: "Service libre-service",
    descriptionEn: "Self-service dining",
    image: "/resto.jpg",
    gradient: "from-yellow-600 to-yellow-800",
    hoverGradient: "from-yellow-700 to-yellow-900"
  }
];

// Tous les secteurs combinés
export const allSectors = [...targetSectors, ...restaurantStyles];
