"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initHubSpot, trackPageView, trackScrollDepth, trackTimeOnPage } from '@/lib/analytics/hubspot';

/**
 * Provider Analytics
 * 
 * Gère automatiquement :
 * - Initialisation de HubSpot
 * - Tracking des pages vues
 * - Tracking du scroll depth
 * - Tracking du temps passé sur la page
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Initialiser HubSpot au montage
  useEffect(() => {
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    if (portalId) {
      initHubSpot(portalId);
    } else if (process.env.NODE_ENV === 'development') {
      console.warn('[Analytics] HubSpot Portal ID not configured');
    }
  }, []);
  
  // Tracker les changements de page
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);
  
  // Tracker le scroll depth
  useEffect(() => {
    let scrollDepths = [25, 50, 75, 100];
    let trackedDepths = new Set<number>();
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);
      
      scrollDepths.forEach(depth => {
        if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackScrollDepth(depth);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
  
  // Tracker le temps passé sur la page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5 && pathname) { // Seulement si plus de 5 secondes
        trackTimeOnPage(timeSpent, pathname);
      }
    };
  }, [pathname]);
  
  return <>{children}</>;
}
