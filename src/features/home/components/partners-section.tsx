"use client";

import React from "react";
import { useParams } from "next/navigation";
import { ResponsiveSection } from "@/components/ui/responsive-section";
import { LogoMarquee } from "@/components/ui/logo-marquee";

// Définition du type pour les logos des clients
interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

// Logos clients (exemples)
const clientLogos: ClientLogo[] = [
  {
    id: 1,
    name: "Restaurant A",
    logo: "/images/clients/client1.svg",
    alt: "Logo Restaurant A",
  },
  {
    id: 2,
    name: "Restaurant B",
    logo: "/images/clients/client2.svg",
    alt: "Logo Restaurant B",
  },
  {
    id: 3,
    name: "Restaurant C",
    logo: "/images/clients/client3.svg",
    alt: "Logo Restaurant C",
  },
];

export default function PartnersSection() {
  const params = useParams();
  const locale = params ? (typeof params === 'object' && 'locale' in params ? params.locale as string : "fr") : "fr";
  
  const t = (key: string, options?: { defaultValue?: string }) => {
    return options?.defaultValue || key;
  };

  return (
    <ResponsiveSection
      as="section"
      bgColor="bg-white"
      spacing="lg"
      className="relative"
    >
      <div className="w-full" role="region" aria-label={locale === 'fr' ? 'Nos clients partenaires' : 'Our partner clients'}>
        <LogoMarquee
          logos={clientLogos}
          title={t('hero.clients.title', { defaultValue: locale === "fr" ? "Partenaire de leur succès" : "Partner in their success" })}
          titleClassName="text-sm lg:text-lg"
        />
      </div>
    </ResponsiveSection>
  );
}
