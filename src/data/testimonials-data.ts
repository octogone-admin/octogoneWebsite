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
