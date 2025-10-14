/**
 * Server Actions pour le Blog
 * 
 * Fonctions côté serveur pour accéder aux fichiers Markdown
 */

import 'server-only';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogMetadata } from './types';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'content', 'blog');

/**
 * Server Action : Obtient tous les slugs des articles de blog
 */
export async function getAllBlogSlugsServer(): Promise<string[]> {
  if (!fs.existsSync(BLOG_CONTENT_PATH)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_CONTENT_PATH);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

/**
 * Server Action : Obtient un article de blog par son slug
 */
export async function getBlogPostBySlugServer(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_CONTENT_PATH, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Validation des métadonnées requises
    if (!data.title || !data.date || !data.locale || data.published === false) {
      return null;
    }

    // Calcul du temps de lecture et nombre de mots
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // 200 mots par minute

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author || 'equipe-octogone',
      category: data.category || 'conseils',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      image: data.image || '/images/blog/default.jpg',
      locale: data.locale,
      published: data.published !== false,
      content,
      readingTime,
      wordCount,
      seo: {
        title: data.seo?.title || data.title,
        description: data.seo?.description || data.excerpt || '',
        keywords: data.seo?.keywords || data.tags || []
      },
      relatedPosts: data.relatedPosts || []
    };
  } catch (error) {
    console.error(`Erreur lors de la lecture de l'article ${slug}:`, error);
    return null;
  }
}

/**
 * Server Action : Obtient tous les articles de blog avec filtres
 */
export async function getAllBlogPostsServer(options: {
  locale?: 'fr' | 'en';
  category?: string;
  tag?: string;
  limit?: number;
  offset?: number;
  publishedOnly?: boolean;
} = {}): Promise<BlogPost[]> {
  const {
    locale,
    category,
    tag,
    limit,
    offset = 0,
    publishedOnly = true
  } = options;

  const slugs = await getAllBlogSlugsServer();
  let posts: BlogPost[] = [];

  for (const slug of slugs) {
    const post = await getBlogPostBySlugServer(slug);
    if (post) {
      posts.push(post);
    }
  }

  // Filtres
  posts = posts.filter(post => {
    if (publishedOnly && !post.published) return false;
    if (locale && post.locale !== locale) return false;
    if (category && post.category !== category) return false;
    if (tag && !post.tags.includes(tag)) return false;
    return true;
  });

  // Tri par date (plus récent en premier)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Pagination
  if (limit) {
    posts = posts.slice(offset, offset + limit);
  }

  return posts;
}

/**
 * Server Action : Obtient les articles liés
 */
export async function getRelatedPostsServer(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
  const currentPost = await getBlogPostBySlugServer(currentSlug);
  if (!currentPost) return [];

  // Si des articles liés sont spécifiés manuellement
  if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
    const relatedPosts: BlogPost[] = [];
    for (const slug of currentPost.relatedPosts) {
      const post = await getBlogPostBySlugServer(slug);
      if (post && post.published) {
        relatedPosts.push(post);
      }
    }
    return relatedPosts.slice(0, limit);
  }

  // Sinon, trouver des articles similaires par catégorie et tags
  const allPosts = await getAllBlogPostsServer({
    locale: currentPost.locale,
    publishedOnly: true
  });

  const filteredPosts = allPosts.filter(post => post.slug !== currentSlug);

  // Score de similarité
  const scoredPosts = filteredPosts.map(post => {
    let score = 0;
    
    // Même catégorie = +3 points
    if (post.category === currentPost.category) score += 3;
    
    // Tags communs = +1 point par tag
    const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    score += commonTags.length;
    
    return { post, score };
  });

  // Trier par score et retourner les meilleurs
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
}
