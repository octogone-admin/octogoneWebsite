# Exemples de Génération - Pages Détail Octogone

## 🎯 Utilisation du Prompt Claude

### Commande type :
```
sectorId = "fast-food"
```

### Résultat attendu :
- **KPIs FR** : ["Temps service -20 à -40 s", "Exactitude commande ≥ 90 %", "> 98 % de précision des coûts", "+15 h/sem économisées"]
- **Modules** : ["products","inventories","recipes","analytics","hr"]

---

## 📋 Exemple A - Fast-Food

### Input :
```
sectorId = "fast-food"
```

### KPIs générés :
- **2 KPIs sectoriels** : "Temps service -20 à -40 s", "Exactitude commande ≥ 90 %"
- **2 KPIs socle** : "> 98 % de précision des coûts", "+15 h/sem économisées"

### Modules sélectionnés :
`["products","inventories","recipes","analytics","hr"]` (5 modules)

---

## 📋 Exemple B - Café

### Input :
```
sectorId = "cafe"
```

### KPIs générés :
- **2 KPIs sectoriels** : "Gaspillage lait -10 à -25 %", "Ticket moyen +5 à +7 %"
- **2 KPIs socle** : "> 98 % de précision des coûts", "+15 h/sem économisées"

### Modules sélectionnés :
`["products","inventories","recipes","analytics"]` (4 modules)

---

## 🔄 Règles de Variation

### KPIs (4 par secteur) :
1. **2 KPIs socle** (choisis parmi COMMON_FR/EN)
2. **2 KPIs sectoriels** (spécifiques au sectorId)

### Modules (3-6 par secteur) :
- **Types d'entreprises** → focus gestion/centralisation
- **Styles de restaurants** → focus exécution/constance

### Anti-répétition :
- Chaque secteur a ses KPIs uniques
- Variation naturelle des gains affichés
- Modules pertinents selon le contexte

---

## 🎨 Format de Sortie

Le JSON généré respecte strictement l'interface `SectorContent` :
- 4 blocs obligatoires
- Bilingue FR/EN
- Placeholders visuels
- Ton professionnel orienté résultats
