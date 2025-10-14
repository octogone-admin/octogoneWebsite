import { notFound } from 'next/navigation';
import { getBlogPostBySlugServer, getRelatedPostsServer } from '@/lib/blog/server-actions';
import { generateBlogPostSEO } from '@/lib/blog/blog-utils';
import { BlogContent } from '@/components/blog/blog-content';
import { BlogRelatedPosts } from '@/components/blog/blog-related-posts';
import { ResponsiveSection } from '@/components/ui/responsive-section';

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const typedLocale = locale as 'fr' | 'en';

  // Récupérer l'article
  const post = await getBlogPostBySlugServer(slug);

  // Si l'article n'existe pas ou n'est pas dans la bonne locale
  if (!post || post.locale !== typedLocale || !post.published) {
    notFound();
  }

  // Récupérer les articles liés
  const relatedPosts = await getRelatedPostsServer(slug, 3);

  return (
    <main className="min-h-screen">
      {/* Contenu de l'article */}
      <BlogContent 
        post={post} 
        locale={typedLocale}
      />

      {/* Articles liés */}
      {relatedPosts.length > 0 && (
        <ResponsiveSection 
          bgColor="bg-gray-50" 
          spacing="xl"
        >
          <BlogRelatedPosts 
            posts={relatedPosts}
            currentSlug={slug}
            locale={typedLocale}
          />
        </ResponsiveSection>
      )}
    </main>
  );
}

// Génération statique des pages
export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'fr' | 'en';
  
  // Cette fonction sera appelée au build pour générer toutes les pages
  // Pour l'instant, on retourne un tableau vide - les pages seront générées à la demande
  return [];
}

// Métadonnées SEO dynamiques
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const typedLocale = locale as 'fr' | 'en';
  
  const post = await getBlogPostBySlugServer(slug);
  
  if (!post || post.locale !== typedLocale) {
    return {
      title: 'Article non trouvé',
      description: 'Cet article n\'existe pas ou n\'est plus disponible.'
    };
  }

  return generateBlogPostSEO(post, typedLocale);
}
