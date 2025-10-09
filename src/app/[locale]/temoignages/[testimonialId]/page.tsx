"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";

// Types pour les témoignages (même structure que dans target-sectors.tsx)
interface Testimonial {
  id: string;
  nameFr: string;
  nameEn: string;
  businessFr: string;
  businessEn: string;
  quoteFr: string;
  quoteEn: string;
  rating: number;
  fullStoryFr?: string;
  fullStoryEn?: string;
  resultsFr?: string[];
  resultsEn?: string[];
}

// Données complètes des témoignages
const allTestimonials: Testimonial[] = [
  {
    id: "mario-rossi",
    nameFr: "Mario Rossi",
    nameEn: "Mario Rossi",
    businessFr: "Restaurant Mario - Cuisine italienne",
    businessEn: "Restaurant Mario - Italian Cuisine",
    quoteFr: "Octogone a transformé notre gestion. Nous avons réduit nos coûts de 25% en 6 mois grâce à Cortex qui anticipe parfaitement nos besoins.",
    quoteEn: "Octogone transformed our management. We reduced our costs by 25% in 6 months thanks to Cortex perfectly anticipating our needs.",
    rating: 5,
    fullStoryFr: "Propriétaire du Restaurant Mario depuis 15 ans, j'ai toujours eu du mal à gérer efficacement mes stocks et à prévoir mes commandes. Avec Octogone et son IA Cortex, tout a changé. L'automatisation des inventaires nous fait gagner un temps précieux, et les prédictions sont d'une précision remarquable. Nous n'avons plus de ruptures de stock sur nos ingrédients phares comme les tomates San Marzano ou la mozzarella di bufala.",
    fullStoryEn: "Owner of Restaurant Mario for 15 years, I always struggled to efficiently manage my inventory and forecast my orders. With Octogone and its AI Cortex, everything changed. Inventory automation saves us precious time, and the predictions are remarkably accurate. We no longer have stock shortages on our flagship ingredients like San Marzano tomatoes or mozzarella di bufala.",
    resultsFr: [
      "25% de réduction des coûts alimentaires",
      "3h économisées par jour sur la gestion",
      "0 rupture de stock depuis 6 mois",
      "Augmentation de 15% de la satisfaction client"
    ],
    resultsEn: [
      "25% reduction in food costs",
      "3 hours saved per day on management",
      "0 stock shortages in 6 months",
      "15% increase in customer satisfaction"
    ]
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
    fullStoryFr: "En tant que chef-propriétaire d'un bistro traditionnel parisien, je cherchais une solution moderne sans perdre l'âme de mon établissement. Octogone a su s'adapter à nos spécificités : produits frais quotidiens, menu changeant selon les saisons, et gestion des vins. L'équipe a adopté l'outil très rapidement grâce à son interface intuitive.",
    fullStoryEn: "As chef-owner of a traditional Parisian bistro, I was looking for a modern solution without losing the soul of my establishment. Octogone adapted to our specificities: daily fresh products, seasonal menu changes, and wine management. The team adopted the tool very quickly thanks to its intuitive interface.",
    resultsFr: [
      "3h économisées quotidiennement",
      "Réduction de 30% du gaspillage alimentaire",
      "Meilleure rotation des vins",
      "Formation de l'équipe en 1 semaine"
    ],
    resultsEn: [
      "3 hours saved daily",
      "30% reduction in food waste",
      "Better wine rotation",
      "Team training in 1 week"
    ]
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
    fullStoryFr: "La cuisine japonaise exige une fraîcheur absolue et une précision millimétrique. Cortex comprend parfaitement nos contraintes : commandes de poisson quotidiennes, gestion des produits ultra-frais, et anticipation des pics de fréquentation. Les algorithmes s'adaptent même aux variations saisonnières de nos clients.",
    fullStoryEn: "Japanese cuisine demands absolute freshness and millimetric precision. Cortex perfectly understands our constraints: daily fish orders, ultra-fresh product management, and anticipating traffic peaks. The algorithms even adapt to seasonal variations in our clientele.",
    resultsFr: [
      "18% d'augmentation des marges",
      "0 rupture de stock sur les produits frais",
      "Optimisation des commandes de poisson",
      "Réduction de 40% des pertes"
    ],
    resultsEn: [
      "18% increase in margins",
      "0 stock shortages on fresh products",
      "Optimized fish orders",
      "40% reduction in losses"
    ]
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
    fullStoryFr: "Gérer une chaîne de 12 cafés était un défi constant : harmoniser les stocks, optimiser les achats groupés, et maintenir la qualité partout. Octogone centralise tout en respectant les spécificités de chaque point de vente. Le tableau de bord unifié nous donne une vision claire de notre performance globale.",
    fullStoryEn: "Managing a chain of 12 cafes was a constant challenge: harmonizing inventory, optimizing group purchases, and maintaining quality everywhere. Octogone centralizes everything while respecting the specificities of each point of sale. The unified dashboard gives us a clear vision of our overall performance.",
    resultsFr: [
      "Vision unifiée sur 12 établissements",
      "20% d'économies sur les achats groupés",
      "Standardisation des processus",
      "Pilotage de la croissance facilité"
    ],
    resultsEn: [
      "Unified vision across 12 locations",
      "20% savings on group purchases",
      "Process standardization",
      "Facilitated growth management"
    ]
  }
];

export default function TestimonialDetailPage() {
  const params = useParams();
  const locale = params?.locale as string || "fr";
  const testimonialId = params?.testimonialId as string;

  // Trouver le témoignage correspondant
  const testimonial = allTestimonials.find(t => t.id === testimonialId);

  // Si le témoignage n'existe pas, afficher une page 404
  if (!testimonial) {
    return (
      <ResponsiveSection spacing="xl" className="text-center">
        <h1 className="text-4xl font-bold text-marine-900 mb-4">
          {locale === "fr" ? "Témoignage non trouvé" : "Testimonial not found"}
        </h1>
        <p className="text-lg text-marine-700">
          {locale === "fr" 
            ? "Le témoignage demandé n'existe pas ou a été supprimé." 
            : "The requested testimonial does not exist or has been removed."}
        </p>
      </ResponsiveSection>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section du témoignage */}
      <ResponsiveSection 
        spacing="xl" 
        className="relative overflow-hidden"
        style={{ backgroundColor: '#e5f1ff' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge témoignage */}
          <div className="inline-block bg-gold-500 text-white px-4 py-2 rounded-full font-semibold mb-6">
            {locale === "fr" ? "Témoignage Client" : "Customer Testimonial"}
          </div>

          {/* Citation principale */}
          <div className="text-6xl text-gold-400 mb-4">"</div>
          <blockquote className="text-2xl lg:text-3xl text-marine-800 font-medium leading-relaxed mb-8">
            {locale === "fr" ? testimonial.quoteFr : testimonial.quoteEn}
          </blockquote>

          {/* Étoiles */}
          <div className="flex justify-center mb-8">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-gold-500 mx-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Nom et entreprise */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-marine-900 mb-3">
              {locale === "fr" ? testimonial.nameFr : testimonial.nameEn}
            </h1>
            <p className="text-xl text-marine-600">
              {locale === "fr" ? testimonial.businessFr : testimonial.businessEn}
            </p>
          </div>
        </div>
      </ResponsiveSection>

      {/* Histoire complète */}
      <ResponsiveSection spacing="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-marine-900 mb-6 text-center">
            {locale === "fr" ? "L'histoire complète" : "The full story"}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {locale === "fr" ? testimonial.fullStoryFr : testimonial.fullStoryEn}
            </p>
          </div>
        </div>
      </ResponsiveSection>

      {/* Résultats obtenus */}
      <ResponsiveSection spacing="xl" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-marine-900 mb-8 text-center">
            {locale === "fr" ? "Résultats obtenus" : "Results achieved"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(locale === "fr" ? testimonial.resultsFr : testimonial.resultsEn)?.map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gold-500 rounded-full mr-4"></div>
                  <p className="text-lg font-medium text-marine-800">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveSection>

      {/* Call to action */}
      <ResponsiveSection spacing="xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-marine-900 mb-6">
            {locale === "fr" ? "Prêt à transformer votre restaurant ?" : "Ready to transform your restaurant?"}
          </h2>
          <p className="text-lg text-marine-700 mb-8 max-w-2xl mx-auto">
            {locale === "fr" 
              ? "Rejoignez des centaines de restaurateurs qui font confiance à Octogone pour optimiser leur gestion."
              : "Join hundreds of restaurateurs who trust Octogone to optimize their management."}
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-marine-600 to-marine-700 text-white font-semibold rounded-lg hover:from-marine-700 hover:to-marine-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {locale === "fr" ? "Demander une démo" : "Request a demo"}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </ResponsiveSection>
    </main>
  );
}
