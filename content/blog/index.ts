/**
 * Index pour le contenu blog
 * Facilite l'accès aux articles depuis le code
 */

// Cette approche permet d'importer facilement les articles depuis le code
// tout en gardant la flexibilité du Markdown

export const BLOG_CONTENT_PATH = '/content/blog/';

// Articles disponibles (mis à jour automatiquement)
export const AVAILABLE_POSTS = [
  'exemple-premier-article'
];

// Fonction utilitaire pour vérifier si un article existe
export function postExists(slug: string): boolean {
  return AVAILABLE_POSTS.includes(slug);
}
