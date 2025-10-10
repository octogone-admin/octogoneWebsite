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
    isRestaurantStyle: false
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
    isRestaurantStyle: true
  },

  // ===== TÉMOIGNAGES SECTORIELS (pour pages secteurs) =====
  {
    id: "marc-brasseur-secteur",
    nameFr: "Marc Brasseur",
    nameEn: "Marc Brasseur", 
    businessFr: "Brasserie des Monts - Microbrasserie",
    businessEn: "Mountain Brewery - Microbrewery",
    quoteFr: "Le suivi de nos fermentations et coûts de production nous a fait économiser 15% sur chaque lot.",
    quoteEn: "Tracking our fermentations and production costs saved us 15% on each batch.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["brewers-distillers"],
    isRestaurantStyle: false
  },
  {
    id: "pierre-traiteur-secteur",
    nameFr: "Pierre Dubois",
    nameEn: "Pierre Dubois",
    businessFr: "Saveurs & Événements - Traiteur",
    businessEn: "Flavors & Events - Catering", 
    quoteFr: "Octogone nous aide à calculer précisément nos coûts par événement.",
    quoteEn: "Octogone helps us calculate precisely our costs per event.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["caterers"],
    isRestaurantStyle: false
  },
  {
    id: "anne-commerce-secteur",
    nameFr: "Anne Retail",
    nameEn: "Anne Retail",
    businessFr: "Épicerie Fine Anne - Commerce de détail",
    businessEn: "Anne's Fine Grocery - Retail",
    quoteFr: "Plus jamais de ruptures sur nos produits phares.",
    quoteEn: "Never again out of stock on our flagship products.",
    rating: 5,
    image: "/resto.jpg", 
    sectors: ["retail-commerce"],
    isRestaurantStyle: false
  },
  {
    id: "jean-regroupement-secteur",
    nameFr: "Jean Coordinateur",
    nameEn: "Jean Coordinator",
    businessFr: "Alliance Resto Québec - Regroupement d'achats",
    businessEn: "Quebec Restaurant Alliance - Purchasing Group",
    quoteFr: "Octogone nous permet de centraliser les achats de nos 45 membres et de négocier de meilleurs tarifs.",
    quoteEn: "Octogone allows us to centralize purchases for our 45 members and negotiate better rates.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["purchasing-groups"],
    isRestaurantStyle: false
  },
  {
    id: "julie-fastfood-secteur",
    nameFr: "Julie Manager",
    nameEn: "Julie Manager",
    businessFr: "Quick Burger - Restauration rapide",
    businessEn: "Quick Burger - Fast food",
    quoteFr: "Nos temps de service ont diminué de 30 secondes grâce à l'optimisation des stocks.",
    quoteEn: "Our service times decreased by 30 seconds thanks to inventory optimization.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["fast-food"],
    isRestaurantStyle: true
  },
  {
    id: "robert-famille-secteur",
    nameFr: "Robert Propriétaire",
    nameEn: "Robert Owner",
    businessFr: "Chez Robert - Restaurant familial",
    businessEn: "Chez Robert - Family restaurant",
    quoteFr: "Octogone nous aide à maintenir nos portions généreuses tout en contrôlant nos coûts.",
    quoteEn: "Octogone helps us maintain generous portions while controlling costs.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["family-restaurant"],
    isRestaurantStyle: true
  },
  {
    id: "marc-pub-secteur",
    nameFr: "Marc Brasseur",
    nameEn: "Marc Brewer",
    businessFr: "Pub des Monts - Pub & microbrasserie",
    businessEn: "Mountain Pub - Pub & microbrewery",
    quoteFr: "Le suivi de nos bières artisanales et de notre service nous fait économiser 12% par mois.",
    quoteEn: "Tracking our craft beers and service saves us 12% per month.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["pub-microbrewery"],
    isRestaurantStyle: true
  },
  {
    id: "steve-casse-croute-secteur",
    nameFr: "Steve Propriétaire",
    nameEn: "Steve Owner",
    businessFr: "Casse-Croûte Steve - Restauration rapide",
    businessEn: "Steve's Snack Bar - Quick service",
    quoteFr: "Octogone nous aide à maximiser nos marges sur les combos tout en réduisant le gaspillage.",
    quoteEn: "Octogone helps us maximize combo margins while reducing waste.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["casse-croute"],
    isRestaurantStyle: true
  },
  {
    id: "marie-corporate-secteur",
    nameFr: "Marie Responsable",
    nameEn: "Marie Manager",
    businessFr: "Services Alimentaires Corp - Traiteur corporatif",
    businessEn: "Corporate Food Services - Corporate catering",
    quoteFr: "La gestion de nos contrats d'entreprise est maintenant prévisible grâce à Octogone.",
    quoteEn: "Managing our corporate contracts is now predictable thanks to Octogone.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["catering-corporate"],
    isRestaurantStyle: true
  },
  {
    id: "paul-industriel-secteur",
    nameFr: "Paul Gestionnaire",
    nameEn: "Paul Manager",
    businessFr: "Station Mont-Tremblant - Restauration de station de ski",
    businessEn: "Mont-Tremblant Resort - Ski resort catering",
    quoteFr: "Octogone nous permet de gérer nos 8 restaurants de montagne et d'anticiper les pics de fréquentation.",
    quoteEn: "Octogone allows us to manage our 8 mountain restaurants and anticipate visitor peaks.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["tourism-industrial"],
    isRestaurantStyle: true
  },
  {
    id: "marie-mine-secteur",
    nameFr: "Marie Coordinatrice",
    nameEn: "Marie Coordinator",
    businessFr: "Services Alimentaires Miniers - Restauration industrielle",
    businessEn: "Mining Food Services - Industrial catering",
    quoteFr: "La gestion de nos cantines en sites isolés est maintenant centralisée et sans ruptures.",
    quoteEn: "Managing our remote site cafeterias is now centralized and without shortages.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["tourism-industrial"],
    isRestaurantStyle: true
  },
  {
    id: "captain-cruise-secteur",
    nameFr: "Capitaine Dubois",
    nameEn: "Captain Dubois",
    businessFr: "Croisières Saint-Laurent - Restauration maritime",
    businessEn: "St. Lawrence Cruises - Maritime catering",
    quoteFr: "Octogone optimise nos approvisionnements et évite le gaspillage sur nos navires de croisière.",
    quoteEn: "Octogone optimizes our supply chain and prevents waste on our cruise ships.",
    rating: 5,
    image: "/resto.jpg",
    sectors: ["tourism-industrial"],
    isRestaurantStyle: true
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
