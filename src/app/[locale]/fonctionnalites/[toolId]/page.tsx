"use client";

import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import OctogoneButton from "@/components/ui/octogone-button";

// Données des outils
const toolsData = {
  inventaire: {
    nameFr: "Inventaire",
    nameEn: "Inventory",
    descriptionFr: "Gérez vos stocks en temps réel avec précision et simplicité",
    descriptionEn: "Manage your inventory in real-time with precision and simplicity",
    heroImage: "/images/tools/inventaire-hero.jpg",
    features: [
      {
        titleFr: "Prise d'inventaire mobile",
        titleEn: "Mobile Inventory Taking",
        descriptionFr: "Effectuez vos inventaires directement depuis votre téléphone ou tablette. Scannez les codes-barres, ajustez les quantités et synchronisez en temps réel.",
        descriptionEn: "Perform your inventories directly from your phone or tablet. Scan barcodes, adjust quantities and sync in real-time.",
        image: "/images/tools/inventaire-mobile.jpg",
        benefits: [
          { fr: "Gain de temps de 50% sur la prise d'inventaire", en: "50% time savings on inventory taking" },
          { fr: "Élimination des erreurs de double saisie", en: "Elimination of double entry errors" },
          { fr: "Synchronisation instantanée avec votre système", en: "Instant sync with your system" },
        ]
      },
      {
        titleFr: "Gestion des produits partiels",
        titleEn: "Partial Product Management",
        descriptionFr: "Suivez précisément vos produits entamés avec notre système de gestion des partiels. Réduisez le gaspillage et améliorez la précision de vos coûts.",
        descriptionEn: "Track your opened products precisely with our partial management system. Reduce waste and improve cost accuracy.",
        image: "/images/tools/inventaire-partiels.jpg",
        benefits: [
          { fr: "Suivi précis des produits entamés", en: "Precise tracking of opened products" },
          { fr: "Réduction du gaspillage jusqu'à 25%", en: "Waste reduction up to 25%" },
          { fr: "Calculs de coûts plus précis", en: "More accurate cost calculations" },
        ]
      },
      {
        titleFr: "Rapports et analyses",
        titleEn: "Reports and Analytics",
        descriptionFr: "Accédez à des rapports détaillés sur vos stocks, variations et tendances. Prenez des décisions éclairées basées sur des données réelles.",
        descriptionEn: "Access detailed reports on your inventory, variations and trends. Make informed decisions based on real data.",
        image: "/images/tools/inventaire-rapports.jpg",
        benefits: [
          { fr: "Historique complet de vos inventaires", en: "Complete inventory history" },
          { fr: "Détection automatique des anomalies", en: "Automatic anomaly detection" },
          { fr: "Prévisions de commandes intelligentes", en: "Smart order forecasting" },
        ]
      },
    ]
  },
  "food-cost": {
    nameFr: "Food Cost",
    nameEn: "Food Cost",
    descriptionFr: "Maîtrisez vos coûts et optimisez vos marges automatiquement",
    descriptionEn: "Master your costs and optimize your margins automatically",
    heroImage: "/images/tools/foodcost-hero.jpg",
    features: [
      {
        titleFr: "Fiches techniques automatisées",
        titleEn: "Automated Recipe Cards",
        descriptionFr: "Créez et gérez vos fiches techniques avec calcul automatique des coûts. Chaque modification de prix se répercute instantanément sur tous vos plats.",
        descriptionEn: "Create and manage your recipe cards with automatic cost calculation. Every price change instantly reflects on all your dishes.",
        image: "/images/tools/foodcost-fiches.jpg",
        benefits: [
          { fr: "Calcul automatique du coût par portion", en: "Automatic cost per portion calculation" },
          { fr: "Mise à jour en temps réel des prix", en: "Real-time price updates" },
          { fr: "Gestion des variations saisonnières", en: "Seasonal variation management" },
        ]
      },
      {
        titleFr: "Analyse de rentabilité",
        titleEn: "Profitability Analysis",
        descriptionFr: "Identifiez vos plats les plus et moins rentables. Optimisez votre menu en fonction de vos marges réelles.",
        descriptionEn: "Identify your most and least profitable dishes. Optimize your menu based on your actual margins.",
        image: "/images/tools/foodcost-analyse.jpg",
        benefits: [
          { fr: "Visualisation claire de vos marges", en: "Clear margin visualization" },
          { fr: "Recommandations d'optimisation", en: "Optimization recommendations" },
          { fr: "Suivi des tendances de rentabilité", en: "Profitability trend tracking" },
        ]
      },
      {
        titleFr: "Food Cost en temps réel",
        titleEn: "Real-time Food Cost",
        descriptionFr: "Suivez votre food cost en temps réel grâce à la connexion avec votre POS. Réagissez rapidement aux variations.",
        descriptionEn: "Track your food cost in real-time through POS connection. React quickly to variations.",
        image: "/images/tools/foodcost-realtime.jpg",
        benefits: [
          { fr: "Alertes automatiques en cas de dérive", en: "Automatic alerts on cost drift" },
          { fr: "Tableau de bord en temps réel", en: "Real-time dashboard" },
          { fr: "Comparaison théorique vs réel", en: "Theoretical vs actual comparison" },
        ]
      },
    ]
  },
  iot: {
    nameFr: "IoT",
    nameEn: "IoT",
    descriptionFr: "Surveillez vos équipements et températures à distance",
    descriptionEn: "Monitor your equipment and temperatures remotely",
    heroImage: "/images/tools/iot-hero.jpg",
    features: [
      {
        titleFr: "Surveillance des températures",
        titleEn: "Temperature Monitoring",
        descriptionFr: "Surveillez en continu les températures de vos équipements frigorifiques. Recevez des alertes instantanées en cas d'anomalie.",
        descriptionEn: "Continuously monitor temperatures of your refrigeration equipment. Receive instant alerts on anomalies.",
        image: "/images/tools/iot-temperature.jpg",
        benefits: [
          { fr: "Conformité HACCP automatique", en: "Automatic HACCP compliance" },
          { fr: "Alertes instantanées 24/7", en: "24/7 instant alerts" },
          { fr: "Historique complet des températures", en: "Complete temperature history" },
        ]
      },
      {
        titleFr: "Gestion des équipements",
        titleEn: "Equipment Management",
        descriptionFr: "Suivez l'état de vos équipements et planifiez la maintenance préventive. Évitez les pannes coûteuses.",
        descriptionEn: "Track your equipment status and plan preventive maintenance. Avoid costly breakdowns.",
        image: "/images/tools/iot-equipements.jpg",
        benefits: [
          { fr: "Maintenance préventive planifiée", en: "Scheduled preventive maintenance" },
          { fr: "Réduction des pannes imprévues", en: "Reduced unexpected breakdowns" },
          { fr: "Optimisation de la durée de vie", en: "Lifespan optimization" },
        ]
      },
      {
        titleFr: "Rapports de conformité",
        titleEn: "Compliance Reports",
        descriptionFr: "Générez automatiquement vos rapports de conformité pour les inspections. Toutes vos données sont archivées et accessibles.",
        descriptionEn: "Automatically generate compliance reports for inspections. All your data is archived and accessible.",
        image: "/images/tools/iot-rapports.jpg",
        benefits: [
          { fr: "Rapports automatiques prêts à l'emploi", en: "Ready-to-use automatic reports" },
          { fr: "Archivage sécurisé des données", en: "Secure data archiving" },
          { fr: "Export facile pour les inspections", en: "Easy export for inspections" },
        ]
      },
    ]
  },
  "ressources-humaines": {
    nameFr: "Ressources Humaines",
    nameEn: "Human Resources",
    descriptionFr: "Simplifiez la gestion de vos équipes et des pourboires",
    descriptionEn: "Simplify team and tip management",
    heroImage: "/images/tools/rh-hero.jpg",
    features: [
      {
        titleFr: "Gestion des pourboires",
        titleEn: "Tip Management",
        descriptionFr: "Automatisez la répartition des pourboires selon vos règles. Gagnez du temps et éliminez les erreurs de calcul.",
        descriptionEn: "Automate tip distribution according to your rules. Save time and eliminate calculation errors.",
        image: "/images/tools/rh-pourboires.jpg",
        benefits: [
          { fr: "Répartition automatique et équitable", en: "Automatic and fair distribution" },
          { fr: "Conformité légale garantie", en: "Guaranteed legal compliance" },
          { fr: "Gain de 3h par semaine minimum", en: "Minimum 3h saved per week" },
        ]
      },
      {
        titleFr: "Gestion des employés",
        titleEn: "Employee Management",
        descriptionFr: "Centralisez les informations de vos employés, leurs rôles et leurs accès. Simplifiez la gestion administrative.",
        descriptionEn: "Centralize employee information, roles and access. Simplify administrative management.",
        image: "/images/tools/rh-employes.jpg",
        benefits: [
          { fr: "Base de données centralisée", en: "Centralized database" },
          { fr: "Gestion des rôles et permissions", en: "Role and permission management" },
          { fr: "Historique complet des activités", en: "Complete activity history" },
        ]
      },
      {
        titleFr: "Rapports RH",
        titleEn: "HR Reports",
        descriptionFr: "Accédez à des rapports détaillés sur vos équipes, les heures travaillées et les pourboires distribués.",
        descriptionEn: "Access detailed reports on your teams, hours worked and tips distributed.",
        image: "/images/tools/rh-rapports.jpg",
        benefits: [
          { fr: "Rapports détaillés par employé", en: "Detailed reports per employee" },
          { fr: "Export pour la paie", en: "Export for payroll" },
          { fr: "Suivi des performances", en: "Performance tracking" },
        ]
      },
    ]
  },
};

export default function ToolPage({
  params,
}: {
  params: Promise<{ locale: string; toolId: string }>;
}) {
  const { locale, toolId } = React.use(params);
  
  // Vérifier si l'outil existe
  const tool = toolsData[toolId as keyof typeof toolsData];
  if (!tool) {
    notFound();
  }

  const isEnglish = locale === "en";
  const toolName = isEnglish ? tool.nameEn : tool.nameFr;
  const description = isEnglish ? tool.descriptionEn : tool.descriptionFr;

  // Liste des outils pour la navigation
  const allTools = [
    { id: 'inventaire', nameFr: 'Inventaire', nameEn: 'Inventory' },
    { id: 'food-cost', nameFr: 'Food Cost', nameEn: 'Food Cost' },
    { id: 'iot', nameFr: 'IoT', nameEn: 'IoT' },
    { id: 'ressources-humaines', nameFr: 'Ressources Humaines', nameEn: 'Human Resources' },
  ];

  // Navigation précédent/suivant (en boucle)
  const currentIndex = allTools.findIndex(t => t.id === toolId);
  const previousTool = currentIndex > 0 ? allTools[currentIndex - 1] : allTools[allTools.length - 1];
  const nextTool = currentIndex < allTools.length - 1 ? allTools[currentIndex + 1] : allTools[0];

  return (
    <main className="flex min-h-screen flex-col" style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <ResponsiveSection 
        spacing="xl" 
        className="relative overflow-hidden"
      >
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#002236] via-[#003d5c] to-[#005a82]" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(220, 178, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(186, 223, 246, 0.3) 0%, transparent 50%)'
            }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center">
          {/* Texte Outil */}
          <p className="text-white text-lg font-semibold mb-4 opacity-90">
            {isEnglish ? "Tool" : "Outil"}
          </p>

          {/* Titre */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {toolName}
          </h1>

          {/* Navigation inter-outils */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Bouton Précédent */}
            <Link 
              href={`/${locale}/fonctionnalites/${previousTool.id}`}
              className="flex items-center gap-3 px-6 py-3 w-64 rounded-lg transition-all duration-200"
              style={{ backgroundColor: '#dcb26b' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BADFF6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dcb26b'}
            >
              <ChevronLeft className="w-6 h-6 text-marine-700" />
              <div className="text-center min-w-0 flex-1">
                <div className="text-sm font-medium text-marine-900 overflow-hidden text-ellipsis whitespace-nowrap">
                  {isEnglish ? previousTool.nameEn : previousTool.nameFr}
                </div>
              </div>
            </Link>

            {/* Bouton Suivant */}
            <Link 
              href={`/${locale}/fonctionnalites/${nextTool.id}`}
              className="flex items-center gap-3 px-6 py-3 w-64 rounded-lg transition-all duration-200"
              style={{ backgroundColor: '#dcb26b' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BADFF6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dcb26b'}
            >
              <div className="text-center min-w-0 flex-1">
                <div className="text-sm font-medium text-marine-900 overflow-hidden text-ellipsis whitespace-nowrap">
                  {isEnglish ? nextTool.nameEn : nextTool.nameFr}
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-marine-700" />
            </Link>
          </div>
        </div>
      </ResponsiveSection>

      {/* Features Section */}
      <ResponsiveSection spacing="xxl" bgColor="">
        <div className="space-y-24">
          {tool.features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const title = isEnglish ? feature.titleEn : feature.titleFr;
            const desc = isEnglish ? feature.descriptionEn : feature.descriptionFr;
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
                      style={{ backgroundColor: 'var(--surface-variant)' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">📊</div>
                        <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
                          {isEnglish ? "Feature illustration" : "Illustration de la fonctionnalité"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--on-background)' }}>
                    {title}
                  </h2>
                  <p className="text-lg mb-8" style={{ color: 'var(--on-surface-variant)' }}>
                    {desc}
                  </p>
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--secondary)' }} />
                        <span className="text-base" style={{ color: 'var(--on-surface)' }}>
                          {isEnglish ? benefit.en : benefit.fr}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ResponsiveSection>

      {/* CTA Section */}
      <ResponsiveSection spacing="xxl" bgColor="">
        <div className="text-center rounded-2xl p-12" style={{ backgroundColor: 'var(--surface)', border: '2px solid var(--outline)' }}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--on-surface)' }}>
            {isEnglish 
              ? `Ready to optimize your ${tool.nameEn.toLowerCase()}?`
              : `Prêt à optimiser votre ${tool.nameFr.toLowerCase()} ?`
            }
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--on-surface-variant)' }}>
            {isEnglish
              ? "Book a demo to see how Octogone can transform your restaurant management."
              : "Réservez une démo pour voir comment Octogone peut transformer la gestion de votre restaurant."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OctogoneButton
              href={`/${locale}/contact`}
              variant="primary"
              size="lg"
            >
              {isEnglish ? "Book a demo" : "Réserver une démo"}
            </OctogoneButton>
            <OctogoneButton
              href={`/${locale}/forfaits`}
              variant="secondary"
              size="lg"
            >
              {isEnglish ? "See pricing" : "Voir les tarifs"}
            </OctogoneButton>
          </div>
        </div>
      </ResponsiveSection>
    </main>
  );
}
