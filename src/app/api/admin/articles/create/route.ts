import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { validateAdminAuth, validateArticleData, sanitizeString } from '@/lib/admin/security';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'content', 'blog');

export async function POST(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const authResult = validateAdminAuth(request);
    if (!authResult.valid) {
      return NextResponse.json(
        { error: authResult.error },
        { status: 401 }
      );
    }

    const data = await request.json();

    // Valider les données
    const validation = validateArticleData(data);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Données invalides', details: validation.errors },
        { status: 400 }
      );
    }

    // Sanitiser les données
    const sanitizedData = {
      title: sanitizeString(data.title),
      slug: sanitizeString(data.slug),
      category: data.category,
      tags: Array.isArray(data.tags) ? data.tags.map((tag: string) => sanitizeString(tag)) : [],
      excerpt: sanitizeString(data.excerpt),
      content: data.content, // Le contenu Markdown peut contenir du HTML
      image: data.image ? sanitizeString(data.image) : '',
      published: Boolean(data.published)
    };

    // Vérifier que le slug n'existe pas déjà
    const frFilePath = path.join(BLOG_CONTENT_PATH, `${sanitizedData.slug}.fr.md`);
    const enFilePath = path.join(BLOG_CONTENT_PATH, `${sanitizedData.slug}.en.md`);
    
    if (existsSync(frFilePath) || existsSync(enFilePath)) {
      return NextResponse.json(
        { error: 'Un article avec ce slug existe déjà' },
        { status: 409 }
      );
    }

    // Créer le dossier si nécessaire
    if (!existsSync(BLOG_CONTENT_PATH)) {
      await mkdir(BLOG_CONTENT_PATH, { recursive: true });
    }

    // Générer le frontmatter
    const frontmatter = `---
title: "${sanitizedData.title}"
slug: "${sanitizedData.slug}"
date: "${new Date().toISOString().split('T')[0]}"
author: "equipe-octogone"
category: "${sanitizedData.category}"
tags: [${sanitizedData.tags.map((tag: string) => `"${tag}"`).join(', ')}]
excerpt: "${sanitizedData.excerpt}"
image: "${sanitizedData.image || '/images/blog/blog_header.jpg'}"
locale: "fr"
published: ${sanitizedData.published}
seo:
  title: "${sanitizedData.title}"
  description: "${sanitizedData.excerpt}"
  keywords: [${sanitizedData.tags.map((tag: string) => `"${tag}"`).join(', ')}]
---

${sanitizedData.content}`;

    // Créer la version française
    await writeFile(frFilePath, frontmatter, 'utf8');

    // Créer une version anglaise basique (template)
    const enFrontmatter = frontmatter
      .replace('locale: "fr"', 'locale: "en"')
      .replace(sanitizedData.content, `# ${sanitizedData.title}

[English version to be translated]

${sanitizedData.content}`);

    await writeFile(enFilePath, enFrontmatter, 'utf8');

    return NextResponse.json({ 
      success: true, 
      message: 'Article créé avec succès',
      files: [`${sanitizedData.slug}.fr.md`, `${sanitizedData.slug}.en.md`]
    });

  } catch (error) {
    console.error('Erreur lors de la création de l\'article:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de la création' },
      { status: 500 }
    );
  }
}
