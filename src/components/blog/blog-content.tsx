"use client";

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog/types';
import { formatBlogDate, formatReadingTime, getCategoryInfo, getAuthorInfo } from '@/lib/blog/client-utils';
import { ResponsiveSection } from '@/components/ui/responsive-section';
import { Calendar, Clock, User, Tag, ArrowLeft } from 'lucide-react';

interface BlogContentProps {
  post: BlogPost;
  locale: 'fr' | 'en';
}

export const BlogContent: React.FC<BlogContentProps> = ({ post, locale }) => {
  const categoryInfo = getCategoryInfo(post.category, locale);
  const authorInfo = getAuthorInfo(post.author, locale);

  return (
    <>
      {/* Hero de l'article - Style témoignage */}
      <article className="w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-12" style={{ backgroundColor: 'var(--background)' }}>
        <div className="w-full rounded-3xl p-8 lg:p-12 shadow-xl text-center" style={{ backgroundColor: 'var(--secondary-container)' }}>
          {/* Badge catégorie */}
          <div className="inline-block px-4 py-2 rounded-full font-semibold mb-6" style={{ backgroundColor: categoryInfo.color, color: '#FFFFFF' }}>
            {categoryInfo.name}
          </div>

          {/* Titre */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ color: 'var(--on-secondary-container)' }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: 'var(--on-secondary-container)' }}>
              {post.excerpt}
            </p>
          )}

          {/* Métadonnées */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm mb-8" style={{ color: 'var(--on-secondary-container)', opacity: 0.8 }}>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formatBlogDate(post.date, locale)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{formatReadingTime(post.readingTime, locale)}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{authorInfo.name}</span>
            </div>
          </div>

          {/* Navigation - Retour au blog */}
          <div className="flex justify-center">
            <Link 
              href={`/${locale}/blog`}
              className="flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-200"
              style={{ backgroundColor: '#dcb26b' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BADFF6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dcb26b'}
            >
              <ArrowLeft className="w-5 h-5" style={{ color: 'var(--on-surface)' }} />
              <span className="font-medium" style={{ color: 'var(--on-surface)' }}>
                {locale === 'fr' ? 'Retour au blog' : 'Back to blog'}
              </span>
            </Link>
          </div>
        </div>
      </article>

      {/* Contenu de l'article */}
      <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              style={{ color: 'var(--on-background)' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--outline)' }}>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-md transition-colors"
                      style={{ 
                        backgroundColor: 'var(--surface-variant)',
                        color: 'var(--on-surface-variant)'
                      }}
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
