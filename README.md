# octogoneWebsite
Site web Octogone

## 📋 Pages Détail - Système de Contenu Personnalisé

### 🎯 Mission
Système de pages détail dynamiques et personnalisées pour chaque type d'entreprise et style de restaurant desservis par Octogone, mettant en avant des gains mesurables, un ton professionnel et un contenu bilingue (FR/EN).

### 📊 Étendue du système
**15 secteurs intégrés :**
- **6 Types d'entreprises :** chains-groups, independent-restaurants, caterers, brewers-distillers, purchasing-groups, retail-commerce
- **9 Styles de restaurants :** gastronomic, bistro-brasserie, fast-food, casse-croute, family-restaurant, cafe, pub-microbrewery, catering-corporate, tourism-industrial

### 🏗️ Architecture technique
- `/src/data/sector-content.ts` → Source centralisée de contenu JSON
- `/src/components/widgets/sector-detail-widget.tsx` → Widget réutilisable (SectorDetailWidget)
- `/src/app/[locale]/secteurs/[sectorId]/page.tsx` → Page dynamique (FR/EN)

### 📐 Structure (4 blocs par page)
1. **Résultats mesurables** (4 métriques + intro)
2. **Outils différenciants** (3–6 modules selon secteur)
3. **Octogone en action** (cas concret + animation placeholder)
4. **Appel à l'action** (CTA + boutons standardisés)

### 🧩 Modules intelligents
**8 modules disponibles :** products, inventories, recipes, invoicing, analytics, hr, thermometers, tips

**Logique dynamique :**
- Types d'entreprises → gestion, rentabilité, centralisation
- Styles de restaurants → exécution, constance, précision opérationnelle

### 📈 Métriques standardisées
- –25% de gaspillage
- +10% de marge brute
- +15h/sem économisées
- >98% de précision des coûts

### 🧭 Règles éditoriales
- **Ton :** professionnel, orienté résultats et données
- **Langage :** international (aucune référence géographique)
- **Terminologie :** Opérer, Automatiser, Analyser, Prédire
- **Bilingue :** FR/EN systématique

### ⚙️ Performance
- Navigation automatique depuis target-sectors → `/[locale]/secteurs/{sectorId}`
- Chargement léger (+15 KB seulement)
- Contenu par défaut si sectorId non reconnu
- Extensible via le même prompt Claude

### ✅ État : 100% fonctionnel et opérationnel
