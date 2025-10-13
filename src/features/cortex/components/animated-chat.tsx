"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { conversations, TIMING, type Message } from "../data/conversations";

interface AnimatedChatProps {
  locale: string;
}

export default function AnimatedChat({ locale }: AnimatedChatProps) {
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);

  const isEnglish = locale === 'en';
  const currentConversations = conversations[isEnglish ? 'en' : 'fr'];
  const currentConversation = currentConversations[currentConversationIndex];

  useEffect(() => {
    if (!isPlaying) return;

    // Reset les messages visibles
    setVisibleMessages([]);

    // Afficher les messages avec leurs délais
    const timeouts: NodeJS.Timeout[] = [];
    
    currentConversation.messages.forEach((message, index) => {
      const timeout = setTimeout(() => {
        setVisibleMessages(prev => [...prev, message]);
      }, message.delay);
      timeouts.push(timeout);
    });

    // Calculer le temps total de la conversation
    const lastMessage = currentConversation.messages[currentConversation.messages.length - 1];
    const totalTime = lastMessage.delay + TIMING.messageDisplay + TIMING.conversationPause;

    // Passer à la conversation suivante
    const nextTimeout = setTimeout(() => {
      setCurrentConversationIndex((prev) => 
        (prev + 1) % currentConversations.length
      );
    }, totalTime);
    timeouts.push(nextTimeout);

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [currentConversationIndex, isPlaying, currentConversations, currentConversation]);

  // Calculer la hauteur nécessaire pour la conversation la plus longue
  // Chaque message fait environ 120px (bulle + avatar + espacement)
  const maxMessages = Math.max(...currentConversations.map(conv => conv.messages.length));
  const estimatedHeight = maxMessages * 120 + 100; // +100px de marge

  return (
    <div className="max-w-4xl mx-auto space-y-4" style={{ minHeight: `${estimatedHeight}px` }}>
      <AnimatePresence mode="wait">
        <div key={currentConversation.id}>
          {visibleMessages.map((message, index) => (
          <motion.div
            key={`conv-${currentConversation.id}-msg-${index}`}
            initial={{ opacity: 0, x: message.type === 'user' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} items-start gap-3`}
          >
            {message.type === 'cortex' && (
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #BADFF6 0%, #E2CDED 100%)' }}
              >
                <div style={{ filter: 'brightness(0) saturate(100%)' }}>
                  <Image
                    src="/cortex.svg"
                    alt="Cortex"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    style={{ color: 'var(--on-secondary-container)' }}
                  />
                </div>
              </div>
            )}

            <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'} gap-1 max-w-[80%]`}>
              <div 
                className="rounded-2xl px-4 py-3"
                style={{ 
                  backgroundColor: message.type === 'user' ? 'var(--purple_cortex)' : 'var(--secondary-container)',
                  color: message.type === 'user' ? 'var(--on-purple_cortex)' : 'var(--on-secondary-container)'
                }}
              >
                <p className="text-sm whitespace-pre-line">
                  {message.text}
                </p>
              </div>
              <span className="text-xs px-2" style={{ color: 'var(--on-surface-variant)' }}>
                11:05
              </span>
            </div>

            {message.type === 'user' && (
              <Image
                src="/avatar.jpg"
                alt="User"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
            )}
          </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}
