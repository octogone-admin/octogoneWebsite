"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from './blog-card';
import { BlogPost } from '@/lib/blog/types';

interface BlogCardClientProps {
  post: BlogPost;
  locale: 'fr' | 'en';
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showReadingTime?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  className?: string;
  animationDelay?: number;
}

export const BlogCardClient: React.FC<BlogCardClientProps> = ({
  animationDelay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: animationDelay }}
    >
      <BlogCard {...props} />
    </motion.div>
  );
};
