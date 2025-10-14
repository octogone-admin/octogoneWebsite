import { getAllBlogPostsServer } from '@/lib/blog/server-actions';
import { generateBlogPageSEO } from '@/lib/blog/blog-utils';
import { BlogList } from '@/components/blog/blog-list';
import { ResponsiveSection } from '@/components/ui/responsive-section';

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const typedLocale = locale as 'fr' | 'en';

  // Récupérer tous les articles pour cette locale
  const posts = await getAllBlogPostsServer({ 
    locale: typedLocale, 
    publishedOnly: true 
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section Blog */}
      <ResponsiveSection 
        bgColor="bg-gradient-to-br from-marine-50 to-gold-50" 
        spacing="xl"
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-marine-900 mb-6">
            {typedLocale === 'fr' 
              ? 'Blog Octogone' 
              : 'Octogone Blog'
            }
          </h1>
          <p className="text-lg md:text-xl text-marine-700 max-w-3xl mx-auto mb-8">
            {typedLocale === 'fr'
              ? 'Conseils d\'experts, actualités et études de cas pour optimiser la gestion de votre restaurant.'
              : 'Expert tips, news and case studies to optimize your restaurant management.'
            }
          </p>
          
          {/* Statistiques */}
          <div className="flex justify-center items-center gap-8 text-sm text-marine-600">
            <div>
              <span className="font-bold text-gold-600">{posts.length}</span>
              {' '}
              {typedLocale === 'fr' ? 'articles' : 'articles'}
            </div>
            <div>
              <span className="font-bold text-gold-600">4</span>
              {' '}
              {typedLocale === 'fr' ? 'catégories' : 'categories'}
            </div>
            <div>
              <span className="font-bold text-gold-600">5 min</span>
              {' '}
              {typedLocale === 'fr' ? 'de lecture moyenne' : 'average read'}
            </div>
          </div>
        </div>
      </ResponsiveSection>

      {/* Liste des articles */}
      <ResponsiveSection spacing="xl">
        <BlogList 
          posts={posts} 
          locale={typedLocale}
          showFilters={true}
          showSearch={true}
        />
      </ResponsiveSection>
    </main>
  );
}

// Métadonnées SEO
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return generateBlogPageSEO(locale as 'fr' | 'en');
}
