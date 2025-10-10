// Types pour les témoignages
export interface Testimonial {
  id: string;
  nameFr: string;
  nameEn: string;
  businessFr: string;
  businessEn: string;
  quoteFr: string;
  quoteEn: string;
  rating: number;
  image?: string;
  // Nouveaux champs pour associer aux secteurs
  sectors: string[]; // IDs des secteurs associés
  isRestaurantStyle: boolean; // true pour styles de restaurants, false pour types d'entreprises
}

// Données des témoignages - SOURCE UNIQUE DE VÉRITÉ
export const testimonials: Testimonial[] = [
  {
    id: "mario-rossi",
    nameFr: "Mario Rossi",
    nameEn: "Mario Rossi",
    businessFr: "Restaurant Mario - Cuisine italienne",
    businessEn: "Restaurant Mario - Italian Cuisine",
    quoteFr: "Octogone a transformé notre gestion. Nous avons réduit nos coûts de 25% en 6 mois grâce à Cortex qui anticipe parfaitement nos besoins.",
    quoteEn: "Octogone transformed our management. We reduced our costs by 25% in 6 months thanks to Cortex perfectly anticipating our needs.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["independent-restaurants", "gastronomic"],
    isRestaurantStyle: true
  },
  {
    id: "laurent-dubois",
    nameFr: "Laurent Dubois",
    nameEn: "Laurent Dubois",
    businessFr: "Bistro Laurent - Bistro français",
    businessEn: "Bistro Laurent - French Bistro",
    quoteFr: "L'automatisation des inventaires nous fait gagner 3h par jour. L'interface est intuitive et l'équipe s'est adaptée en une semaine.",
    quoteEn: "Inventory automation saves us 3 hours per day. The interface is intuitive and the team adapted in one week.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["bistro-brasserie", "independent-restaurants"],
    isRestaurantStyle: true
  },
  {
    id: "yuki-tanaka",
    nameFr: "Yuki Tanaka",
    nameEn: "Yuki Tanaka",
    businessFr: "Sushi Zen - Restaurant japonais",
    businessEn: "Sushi Zen - Japanese Restaurant",
    quoteFr: "Les prédictions de Cortex sont impressionnantes. Nous n'avons plus de ruptures de stock et nos marges ont augmenté de 18%.",
    quoteEn: "Cortex's predictions are impressive. We no longer have stock shortages and our margins increased by 18%.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["gastronomic", "independent-restaurants"],
    isRestaurantStyle: true
  },
  {
    id: "sophie-martin",
    nameFr: "Sophie Martin",
    nameEn: "Sophie Martin",
    businessFr: "Café Central - Chaîne de 12 établissements",
    businessEn: "Café Central - Chain of 12 locations",
    quoteFr: "La vue d'ensemble sur nos 12 cafés est un game-changer. Octogone nous permet de piloter efficacement notre croissance.",
    quoteEn: "The overview of our 12 cafes is a game-changer. Octogone allows us to efficiently manage our growth.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["chains-groups", "cafe"],
    isRestaurantStyle: false
  },
  {
    id: "pierre-traiteur",
    nameFr: "Pierre Dubois",
    nameEn: "Pierre Dubois",
    businessFr: "Saveurs & Événements - Traiteur",
    businessEn: "Flavors & Events - Catering",
    quoteFr: "Octogone nous aide à calculer précisément nos coûts par événement. Nos marges sont maintenant prévisibles et nos clients satisfaits.",
    quoteEn: "Octogone helps us calculate precisely our costs per event. Our margins are now predictable and our clients satisfied.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["caterers", "catering-corporate"],
    isRestaurantStyle: false
  },
  {
    id: "marc-brasseur",
    nameFr: "Marc Brasseur",
    nameEn: "Marc Brasseur",
    businessFr: "Brasserie des Monts - Microbrasserie",
    businessEn: "Mountain Brewery - Microbrewery",
    quoteFr: "Le suivi de nos fermentations et coûts de production nous a fait économiser 15% sur chaque lot. Un outil indispensable.",
    quoteEn: "Tracking our fermentations and production costs saved us 15% on each batch. An indispensable tool.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["brewers-distillers", "pub-microbrewery"],
    isRestaurantStyle: true
  },
  {
    id: "julie-fastfood",
    nameFr: "Julie Moreau",
    nameEn: "Julie Moreau",
    businessFr: "Quick Burger - Restauration rapide",
    businessEn: "Quick Burger - Fast food",
    quoteFr: "Nos temps de service ont diminué de 30 secondes et nos stocks sont toujours optimaux. L'équipe adore la simplicité.",
    quoteEn: "Our service times decreased by 30 seconds and our inventory is always optimal. The team loves the simplicity.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["fast-food", "casse-croute"],
    isRestaurantStyle: true
  },
  {
    id: "robert-famille",
    nameFr: "Robert Famille",
    nameEn: "Robert Famille",
    businessFr: "Chez Robert - Restaurant familial",
    businessEn: "Chez Robert - Family restaurant",
    quoteFr: "Octogone nous aide à maintenir nos portions généreuses tout en contrôlant nos coûts. Parfait pour notre style familial.",
    quoteEn: "Octogone helps us maintain our generous portions while controlling costs. Perfect for our family style.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["family-restaurant", "tourism-industrial"],
    isRestaurantStyle: true
  },
  {
    id: "anne-commerce",
    nameFr: "Anne Retail",
    nameEn: "Anne Retail",
    businessFr: "Épicerie Fine Anne - Commerce de détail",
    businessEn: "Anne's Fine Grocery - Retail",
    quoteFr: "Plus jamais de ruptures sur nos produits phares. Le réassort automatique nous fait gagner un temps précieux.",
    quoteEn: "Never again out of stock on our flagship products. Automatic restocking saves us precious time.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["retail-commerce", "purchasing-groups"],
    isRestaurantStyle: false
  }
];

// Fonction pour récupérer un témoignage associé à un secteur
export function getTestimonialForSector(sectorId: string, isRestaurantStyle: boolean): Testimonial | null {
  const matchingTestimonials = testimonials.filter(testimonial => 
    testimonial.sectors.includes(sectorId) && 
    testimonial.isRestaurantStyle === isRestaurantStyle
  );
  
  // Retourner le premier témoignage trouvé, ou null si aucun
  return matchingTestimonials.length > 0 ? matchingTestimonials[0] : null;
}

// Fonction pour récupérer tous les témoignages
export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

// Fonction pour récupérer un témoignage par ID
export function getTestimonialById(id: string): Testimonial | null {
  return testimonials.find(testimonial => testimonial.id === id) || null;
}
