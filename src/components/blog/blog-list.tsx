"use client";

import React, { useState } from 'react';
import { BlogPost } from '@/lib/blog/types';
import { BlogCard } from './blog-card';
import { getCategoryInfo } from '@/lib/blog/client-utils';
import blogConfig from '@/data/blog/blog-config.json';

interface BlogListProps {
  posts: BlogPost[];
  locale: 'fr' | 'en';
  showFilters?: boolean;
  showSearch?: boolean;
}

export const BlogList: React.FC<BlogListProps> = ({
  posts,
  locale,
  showFilters = false,
  showSearch = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrer les articles
  const filteredPosts = posts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Filtres et recherche */}
      {(showFilters || showSearch) && (
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Recherche */}
          {showSearch && (
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder={locale === 'fr' ? 'Rechercher un article...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none"
                style={{ 
                  borderColor: 'var(--outline)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--on-surface)',
                  '--tw-ring-color': 'var(--primary)'
                } as React.CSSProperties}
              />
            </div>
          )}

          {/* Filtres catégories */}
          {showFilters && (
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCategory(null)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#dcb26b',
                  color: 'var(--on-secondary-container)',
                  opacity: !selectedCategory ? 1 : 0.6
                }}
              >
                {locale === 'fr' ? 'Tous' : 'All'}
              </button>
              {blogConfig.categories.map((category) => {
                const categoryInfo = getCategoryInfo(category.id, locale);
                const isSelected = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
                    style={{
                      backgroundColor: categoryInfo.color,
                      color: 'var(--on-secondary-container)',
                      opacity: isSelected ? 1 : 0.6
                    }}
                  >
                    {categoryInfo.name}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Grille d'articles */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              locale={locale}
              showExcerpt={true}
              showAuthor={true}
              showReadingTime={true}
              showCategory={true}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            {locale === 'fr' 
              ? 'Aucun article trouvé.' 
              : 'No articles found.'}
          </p>
        </div>
      )}
    </div>
  );
};
