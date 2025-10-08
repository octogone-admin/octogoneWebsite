import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Octogone',
    default: 'Octogone - Gestion intelligente pour restaurants',
  },
  description: 'Solution complète de gestion pour restaurants : inventaire en temps réel, gestion des coûts, recettes standardisées et bien plus.',
  keywords: ['restaurant', 'gestion', 'inventaire', 'POS', 'food cost', 'recettes', 'facturation'],
  authors: [{ name: 'Octogone' }],
  creator: 'Octogone',
  publisher: 'Octogone',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://octogone.ca'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-CA': '/fr',
      'en-CA': '/en',
    },
  },
  openGraph: {
    title: 'Octogone - Gestion intelligente pour restaurants',
    description: 'Solution complète de gestion pour restaurants : inventaire en temps réel, gestion des coûts, recettes standardisées.',
    url: 'https://octogone.ca',
    siteName: 'Octogone',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Octogone - Gestion intelligente pour restaurants',
      },
    ],
    locale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Octogone - Gestion intelligente pour restaurants',
    description: 'Solution complète de gestion pour restaurants',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#002236" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
