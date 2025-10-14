# 📦 Installation des Dépendances Blog

Pour que le blog fonctionne correctement, vous devez installer les dépendances suivantes :

## 🔧 Commandes à Exécuter

```bash
# Dépendances principales
npm install gray-matter remark remark-html remark-gfm rehype-highlight rehype-slug rehype-autolink-headings

# Dépendances de développement
npm install -D @types/gray-matter
```

## 📋 Dépendances Installées

- **gray-matter** : Parse les métadonnées frontmatter des fichiers Markdown
- **remark** : Processeur Markdown
- **remark-html** : Convertit Markdown en HTML
- **remark-gfm** : Support GitHub Flavored Markdown
- **rehype-highlight** : Coloration syntaxique du code
- **rehype-slug** : Génère des IDs pour les titres
- **rehype-autolink-headings** : Liens automatiques sur les titres

## ✅ Après Installation

Une fois les dépendances installées, le blog devrait fonctionner correctement :

- ✅ Section blog sur la page d'accueil
- ✅ Page liste des articles (`/blog`)
- ✅ Pages articles individuels (`/blog/[slug]`)
- ✅ Analytics HubSpot + GA4 intégrés

## 🗑️ Suppression

Vous pouvez supprimer ce fichier après avoir installé les dépendances.
