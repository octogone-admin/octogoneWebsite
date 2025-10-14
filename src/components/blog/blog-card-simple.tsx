"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog/types';
import { formatBlogDate, formatReadingTime, getCategoryInfo, getAuthorInfo, getBlogPostUrl } from '@/lib/blog/client-utils';

interface BlogCardSimpleProps {
  post: BlogPost;
  locale: 'fr' | 'en';
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showReadingTime?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  className?: string;
}

export const BlogCardSimple: React.FC<BlogCardSimpleProps> = ({
  post,
  locale,
  showExcerpt = true,
  showAuthor = true,
  showReadingTime = true,
  showCategory = true,
  showTags = false,
  className = ''
}) => {
  const categoryInfo = getCategoryInfo(post.category, locale);
  const authorInfo = getAuthorInfo(post.author, locale);
  const postUrl = getBlogPostUrl(post.slug, locale);

  return (
    <article className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 ${className}`} style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--outline)' }}>
      <Link href={postUrl} className="block">
        {/* Placeholder sans image */}
        <div className="relative h-48 overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-container)' }}>
          {/* Badge catégorie */}
          {showCategory && (
            <div className="absolute top-4 left-4">
              <span 
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: categoryInfo.color, color: '#FFFFFF' }}
              >
                {categoryInfo.name}
              </span>
            </div>
          )}
          
          {/* Titre dans le placeholder */}
          <div className="px-6 text-center">
            <h3 className="text-xl font-bold line-clamp-3" style={{ color: 'var(--on-secondary-container)' }}>
              {post.title}
            </h3>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6">
          {/* Métadonnées */}
          <div className="flex items-center gap-4 text-sm mb-3" style={{ color: 'var(--on-surface)' }}>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {formatBlogDate(post.date, locale)}
              </time>
            </div>
            
            {showReadingTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{formatReadingTime(post.readingTime, locale)}</span>
              </div>
            )}
          </div>

          {/* Excerpt */}
          {showExcerpt && post.excerpt && (
            <p className="mb-4 line-clamp-3" style={{ color: 'var(--on-surface)' }}>
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {showTags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md"
                  style={{ backgroundColor: 'var(--surface-variant)', color: 'var(--on-surface-variant)' }}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-xs" style={{ color: 'var(--on-surface-variant)' }}>
                  +{post.tags.length - 3} {locale === 'fr' ? 'autres' : 'more'}
                </span>
              )}
            </div>
          )}

          {/* Auteur */}
          {showAuthor && (
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--outline)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-container)' }}>
                <User className="w-4 h-4" style={{ color: 'var(--on-primary-container)' }} />
              </div>
              <div>
                <div className="text-sm font-medium" style={{ color: 'var(--on-surface)' }}>
                  {authorInfo.name}
                </div>
                <div className="text-xs" style={{ color: 'var(--on-surface-variant)' }}>
                  {authorInfo.role}
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};
