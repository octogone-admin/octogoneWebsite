// Contenu personnalisé par secteur pour SectorDetailWidget
// Généré selon le prompt stratégique Octogone

export interface SectorContent {
  // Bloc 1: Résultats mesurables
  introResultats: {
    fr: string;
    en: string;
  };
  metriques: Array<{
    fr: string;
    en: string;
  }>;
  
  // Bloc 2: Outils différenciants
  sousTexteSolutions: {
    fr: string;
    en: string;
  };
  
  // Bloc 3: Octogone en action
  texteDemo: {
    fr: string;
    en: string;
  };
  
  // Bloc 4: Appel à l'action
  ctaTexte: {
    fr: string;
    en: string;
  };
}

// Contenu pour les TYPES D'ENTREPRISES
export const businessTypesContent: Record<string, SectorContent> = {
  'chains-groups': {
    introResultats: {
      fr: "Standardisez vos opérations multi-sites, éliminez les pertes invisibles et augmentez vos marges dès les premières semaines.",
      en: "Standardize multi-site operations, eliminate hidden losses, and lift margins within weeks."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Conçus pour la centralisation, la comparabilité entre emplacements et la constance d'exécution.",
      en: "Built for centralization, cross-location comparability, and execution consistency."
    },
    texteDemo: {
      fr: "Comparez la performance de chaque établissement, repérez les écarts de coûts et reproduisez vos meilleures recettes à l'échelle du réseau.",
      en: "Compare each location's performance, spot cost variances, and replicate your best recipes across the network."
    },
    ctaTexte: {
      fr: "Unifiez vos opérations et gagnez en rentabilité dès le premier mois.",
      en: "Unify operations and lift profitability from month one."
    }
  },

  'independent-restaurants': {
    introResultats: {
      fr: "Reprenez le contrôle de vos coûts réels, réduisez le gaspillage et sécurisez vos marges — sans alourdir votre charge opérationnelle.",
      en: "Regain control over true costs, cut waste, and protect margins—without adding operational burden."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Sélectionnés pour la simplicité d'exécution, la précision des recettes et la visibilité immédiate sur vos chiffres.",
      en: "Chosen for execution simplicity, recipe precision, and instant visibility on your numbers."
    },
    texteDemo: {
      fr: "Visualisez vos coûts matière en direct, ajustez vos portions et sécurisez vos stocks — le tout depuis un tableau de bord clair et unifié.",
      en: "Track food cost live, fine-tune portions, and secure stock levels—all from one clear, unified dashboard."
    },
    ctaTexte: {
      fr: "Maîtrisez vos coûts et gagnez du temps — des résultats dès les premières semaines.",
      en: "Control costs and save time—see results within the first weeks."
    }
  },

  'caterers': {
    introResultats: {
      fr: "Réduisez vos pertes, automatisez la planification et maîtrisez vos coûts de production dès les premières semaines.",
      en: "Reduce waste, automate planning, and control production costs within weeks."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour la production planifiée, la précision des portions et le suivi rigoureux des coûts.",
      en: "Designed for planned production, portion precision, and cost control at scale."
    },
    texteDemo: {
      fr: "Planifiez vos événements, gérez vos recettes et vos inventaires, et suivez la rentabilité de chaque commande depuis un seul tableau de bord.",
      en: "Plan events, manage recipes and inventories, and monitor profitability for every order from a single dashboard."
    },
    ctaTexte: {
      fr: "Maîtrisez vos coûts et livrez avec précision — chaque événement devient plus rentable.",
      en: "Control your costs and deliver with precision — every event becomes more profitable."
    }
  },

  'brewers-distillers': {
    introResultats: {
      fr: "Optimisez la production, maîtrisez vos coûts de brassage et suivez vos marges avec précision — du fût à la bouteille.",
      en: "Optimize production, control brewing costs, and track margins accurately — from keg to bottle."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour la traçabilité, la standardisation des recettes et la surveillance de la qualité en continu.",
      en: "Designed for traceability, recipe standardization, and continuous quality monitoring."
    },
    texteDemo: {
      fr: "De la production à la distribution, visualisez vos coûts réels, anticipez vos besoins et optimisez chaque brassin grâce à une plateforme unifiée.",
      en: "From production to distribution, visualize true costs, anticipate needs, and optimize each brew through one unified platform."
    },
    ctaTexte: {
      fr: "Unifiez votre production, vos stocks et vos ventes pour une rentabilité constante et prévisible.",
      en: "Unify production, inventory, and sales for consistent, predictable profitability."
    }
  },

  'purchasing-groups': {
    introResultats: {
      fr: "Mutualisez vos achats, standardisez vos prix et gagnez en pouvoir de négociation tout en réduisant les pertes et la complexité administrative.",
      en: "Pool your purchasing power, standardize pricing, and reduce waste and admin complexity while boosting margins."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute moyenne", en: "+10% average gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour la mutualisation, la transparence des prix et la simplification des flux d'achat entre partenaires.",
      en: "Built for purchasing mutualization, price transparency, and simplified partner workflows."
    },
    texteDemo: {
      fr: "Visualisez les volumes d'achat, détectez les écarts de prix et obtenez une vue consolidée des performances de votre réseau.",
      en: "View purchase volumes, spot pricing gaps, and access a consolidated overview of your network's performance."
    },
    ctaTexte: {
      fr: "Optimisez vos volumes, négociez plus fort et simplifiez la gestion collective dès aujourd'hui.",
      en: "Optimize volumes, negotiate stronger, and simplify collective management today."
    }
  },

  'retail-commerce': {
    introResultats: {
      fr: "Unifiez votre comptoir de vente et votre cuisine : optimisez vos marges, réduisez les pertes et simplifiez votre gestion au quotidien.",
      en: "Unify your counter and kitchen: optimize margins, cut waste, and simplify daily management."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour les commerces hybrides qui combinent vente directe et production alimentaire.",
      en: "Designed for hybrid businesses combining direct retail and in-house food production."
    },
    texteDemo: {
      fr: "Reliez vos ventes, vos inventaires et vos recettes dans un même environnement pour maximiser vos marges et vos décisions.",
      en: "Link your sales, inventory, and recipes in one environment to maximize margins and decision accuracy."
    },
    ctaTexte: {
      fr: "Simplifiez la gestion de votre commerce et augmentez votre rentabilité dès le premier mois.",
      en: "Simplify retail management and boost profitability from the very first month."
    }
  }
};

// Contenu pour les STYLES DE RESTAURANTS
export const restaurantStylesContent: Record<string, SectorContent> = {
  'gastronomic': {
    introResultats: {
      fr: "Affinez votre excellence culinaire avec une précision financière et opérationnelle totale. Maîtrisez vos coûts, vos recettes et vos marges sans compromis sur la qualité.",
      en: "Refine culinary excellence with full operational and financial precision. Control costs, recipes, and margins without compromising quality."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour les établissements d'exception qui exigent la rigueur, la constance et la rentabilité derrière chaque assiette.",
      en: "Built for exceptional establishments demanding rigor, consistency, and profitability behind every plate."
    },
    texteDemo: {
      fr: "Surveillez vos coûts matière, ajustez vos portions et mesurez la rentabilité de chaque plat en temps réel, tout en garantissant l'excellence du service.",
      en: "Track food costs, fine-tune portions, and measure profitability dish by dish, while maintaining impeccable service quality."
    },
    ctaTexte: {
      fr: "Gardez le contrôle sur vos coûts sans sacrifier votre art culinaire — Octogone, le partenaire des grandes tables.",
      en: "Control costs without sacrificing artistry — Octogone, the ally of top restaurants."
    }
  },

  'bistro-brasserie': {
    introResultats: {
      fr: "Simplifiez votre gestion quotidienne et gardez vos marges sous contrôle, tout en préservant la convivialité et la qualité de votre service.",
      en: "Simplify daily management and keep margins under control while maintaining your hospitality and quality of service."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour les établissements à fort volume qui recherchent régularité, rapidité et rentabilité sans complexité.",
      en: "Built for high-volume venues seeking consistency, speed, and profitability without complexity."
    },
    texteDemo: {
      fr: "Suivez vos ventes et coûts en temps réel, ajustez vos menus selon la rentabilité et améliorez la productivité de vos équipes.",
      en: "Monitor sales and costs in real time, adjust menus by profitability, and boost team efficiency."
    },
    ctaTexte: {
      fr: "Optimisez vos menus et vos marges, sans perdre la chaleur de votre service.",
      en: "Optimize menus and margins without losing your service's warmth."
    }
  },

  'fast-food': {
    introResultats: {
      fr: "Gagnez en vitesse, en précision et en rentabilité : réduisez le gaspillage, optimisez vos coûts et automatisez la gestion de vos points de vente.",
      en: "Gain speed, precision, and profitability: cut waste, optimize costs, and automate your multi-location operations."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour la rapidité d'exécution, la précision des données et la gestion simplifiée de plusieurs emplacements.",
      en: "Designed for fast execution, data accuracy, and simplified multi-location management."
    },
    texteDemo: {
      fr: "Suivez les ventes, les inventaires et les coûts en temps réel. Automatisez la planification du personnel et prenez des décisions instantanées.",
      en: "Monitor sales, inventory, and costs in real time. Automate workforce planning and make instant data-driven decisions."
    },
    ctaTexte: {
      fr: "Gérez vos opérations à la seconde près, réduisez vos pertes et augmentez votre marge sans effort.",
      en: "Manage operations by the second, reduce losses, and grow margins effortlessly."
    }
  },

  'casse-croute': {
    introResultats: {
      fr: "Gérez votre casse-croûte avec simplicité et efficacité : maîtrisez vos coûts, réduisez les pertes et augmentez vos profits, même avec de petits volumes.",
      en: "Manage your snack bar with simplicity and efficiency: control costs, cut waste, and boost profits—even with small volumes."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Simplicité, rapidité et rentabilité — tout ce dont un casse-croûte a besoin pour mieux performer sans complexité.",
      en: "Simplicity, speed, and profitability—everything a snack bar needs to perform better without added complexity."
    },
    texteDemo: {
      fr: "Suivez vos ventes et vos stocks automatiquement, contrôlez vos coûts et vos marges, et gérez votre établissement en toute simplicité.",
      en: "Track sales and stock automatically, control costs and margins, and run your business effortlessly."
    },
    ctaTexte: {
      fr: "Gérez mieux, servez plus vite et maximisez vos profits dès aujourd'hui.",
      en: "Manage smarter, serve faster, and maximize profits today."
    }
  },

  'family-restaurant': {
    introResultats: {
      fr: "Offrez une expérience conviviale tout en gardant le contrôle sur vos coûts, vos stocks et vos marges. Simplifiez la gestion sans compromettre la qualité du service.",
      en: "Deliver a welcoming family experience while keeping full control over costs, stocks, and margins. Simplify management without compromising service quality."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Conçus pour les restaurants familiaux qui recherchent stabilité, simplicité et visibilité sur leurs résultats.",
      en: "Built for family restaurants seeking stability, simplicity, and visibility over their results."
    },
    texteDemo: {
      fr: "Suivez les performances de votre restaurant en temps réel, visualisez vos coûts et optimisez vos menus selon la rentabilité.",
      en: "Track your restaurant's performance in real time, visualize costs, and optimize menus by profitability."
    },
    ctaTexte: {
      fr: "Améliorez vos marges sans changer votre ADN : Octogone vous aide à servir mieux et à gérer plus efficacement.",
      en: "Boost margins without changing your DNA — Octogone helps you serve better and manage smarter."
    }
  },

  'cafe': {
    introResultats: {
      fr: "Optimisez vos coûts et votre productivité tout en offrant une expérience client irréprochable. Octogone simplifie la gestion de votre café, du comptoir à la caisse.",
      en: "Optimize costs and productivity while delivering a flawless customer experience. Octogone simplifies café management—from bar to till."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour les cafés qui veulent conjuguer rapidité, constance et rentabilité sans sacrifier l'ambiance.",
      en: "Designed for cafés seeking speed, consistency, and profitability without losing atmosphere."
    },
    texteDemo: {
      fr: "Suivez vos ventes et vos coûts en temps réel, simplifiez vos commandes fournisseurs et réduisez vos pertes alimentaires sans effort.",
      en: "Track sales and costs in real time, simplify supplier orders, and reduce food waste effortlessly."
    },
    ctaTexte: {
      fr: "Simplifiez votre quotidien et augmentez vos marges tout en gardant l'esprit café.",
      en: "Simplify your day-to-day and grow margins while keeping your café's soul intact."
    }
  },

  'pub-microbrewery': {
    introResultats: {
      fr: "Augmentez vos marges et votre efficacité tout en conservant l'ambiance et la qualité qui font la réputation de votre pub ou microbrasserie.",
      en: "Boost margins and efficiency while maintaining the atmosphere and quality your pub or microbrewery is known for."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour les établissements qui conjuguent production et service, où la rentabilité se joue sur chaque litre et chaque assiette.",
      en: "Designed for venues combining production and service, where profitability depends on every pint and plate."
    },
    texteDemo: {
      fr: "Suivez vos coûts de brassage, vos ventes et vos marges sur une seule interface. Automatisez la gestion et concentrez-vous sur l'expérience client.",
      en: "Track brewing costs, sales, and margins in one interface. Automate management and focus on customer experience."
    },
    ctaTexte: {
      fr: "Optimisez la production, le service et les marges — sans perdre votre esprit artisanal.",
      en: "Optimize production, service, and margins—without losing your craft spirit."
    }
  },

  'catering-corporate': {
    introResultats: {
      fr: "Optimisez vos opérations de service alimentaire d'entreprise : anticipez les besoins, réduisez les pertes et améliorez la rentabilité de chaque contrat.",
      en: "Optimize your corporate food service operations: anticipate needs, cut waste, and improve profitability for every contract."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour les traiteurs et services alimentaires à haut volume où la planification, la régularité et le contrôle des coûts sont essentiels.",
      en: "Designed for high-volume catering services where planning, consistency, and cost control are key."
    },
    texteDemo: {
      fr: "Planifiez vos repas, vos livraisons et vos coûts en un seul endroit. Suivez la rentabilité de chaque contrat en temps réel et ajustez vos marges automatiquement.",
      en: "Plan meals, deliveries, and costs in one place. Track profitability per contract in real time and adjust margins automatically."
    },
    ctaTexte: {
      fr: "Digitalisez la gestion de vos contrats et augmentez la rentabilité de chaque service dès aujourd'hui.",
      en: "Digitize contract management and increase the profitability of every service today."
    }
  },

  'tourism-industrial': {
    introResultats: {
      fr: "Simplifiez la gestion de vos services alimentaires en milieux isolés ou à grand volume — réduisez les pertes, améliorez la planification et assurez la constance de vos opérations.",
      en: "Simplify food service management in remote or high-volume environments—reduce waste, improve planning, and ensure consistency across operations."
    },
    metriques: [
      { fr: "–25% de gaspillage", en: "–25% waste" },
      { fr: "+10% de marge brute", en: "+10% gross margin" },
      { fr: "+15h/sem économisées", en: "+15h/week saved" },
      { fr: ">98% de précision des coûts", en: ">98% cost accuracy" }
    ],
    sousTexteSolutions: {
      fr: "Pensés pour les sites touristiques, industriels et éloignés, où chaque décision logistique et chaque repas compte.",
      en: "Built for tourism, industrial, and remote sites where every logistic and meal decision matters."
    },
    texteDemo: {
      fr: "De la planification des menus à la gestion du personnel, Octogone vous donne une vue complète de vos opérations pour maximiser la productivité et la rentabilité sur chaque site.",
      en: "From menu planning to workforce management, Octogone gives you full operational visibility to maximize productivity and profitability across all sites."
    },
    ctaTexte: {
      fr: "Centralisez vos opérations multi-sites et optimisez chaque ressource, du personnel aux ingrédients.",
      en: "Centralize multi-site operations and optimize every resource—from staff to supplies."
    }
  }
};

// Fonction utilitaire pour récupérer le contenu d'un secteur
export function getSectorContent(sectorId: string, isRestaurantStyle: boolean): SectorContent | null {
  if (isRestaurantStyle) {
    return restaurantStylesContent[sectorId] || null;
  } else {
    return businessTypesContent[sectorId] || null;
  }
}
