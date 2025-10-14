/**
 * Server Wrapper pour BlogHomeSection
 * Récupère les données côté serveur et les passe au composant client
 */

import 'server-only';

import { getAllBlogPostsServer } from '@/lib/blog/server-actions';
import { BlogHomeSection } from './blog-home-section';

interface BlogHomeSectionServerProps {
  locale: 'fr' | 'en';
}

export const BlogHomeSectionServer: React.FC<BlogHomeSectionServerProps> = async ({ locale }) => {
  // Récupérer les 3 articles les plus récents côté serveur
  const recentPosts = await getAllBlogPostsServer({ 
    locale, 
    publishedOnly: true,
    limit: 3 
  });

  // Passer les données au composant client
  return <BlogHomeSection locale={locale} posts={recentPosts} />;
};
