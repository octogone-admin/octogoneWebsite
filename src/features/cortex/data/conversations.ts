// Types pour les documents générés
export type GeneratedDocument = {
  id: string; // Ex: "BC-2024-1234"
  type: 'purchase_order' | 'production_order' | 'report'; // Type de document
  name: string; // Nom affiché
  icon?: string; // Format du fichier: 'pdf', 'excel', 'csv', 'image', etc.
};

// Types pour les messages
export type Message = {
  type: 'user' | 'cortex';
  text: string;
  delay: number; // délai avant d'apparaître (en ms)
  document?: GeneratedDocument; // Document généré (optionnel)
};

export type Conversation = {
  id: number;
  messages: Message[];
};

// Configuration des conversations par langue
export const conversations: Record<string, Conversation[]> = {
  fr: [
    {
      id: 1,
      messages: [
        { type: 'user', text: 'Cortex, comment vont mes ventes cette semaine ?', delay: 0 },
        { type: 'cortex', text: 'Très bonne semaine Vincent 👏\n\nChiffre d\'affaires : 6 994,50 $ • 230 commandes\nMoyenne/jour : 999 $\nProgression : +26 % vs. objectif mensuel\n\n📈 Pic vendredi : 45 commandes pour 1 315 $', delay: 1500 },
        { type: 'user', text: 'Quels sont mes meilleurs vendeurs ?', delay: 5000 },
        { type: 'cortex', text: 'Top 3 cette semaine :\n\n🥇 Carpaccio de bœuf — 89 portions • Marge 75 % • 1 245 $\n🥈 Escargots à l\'ail — 67 portions • Marge 82 % • 892 $\n🥉 Salade César — 78 portions • Marge 68 % • 780 $\n\n📊 Le Carpaccio fait +23 % par rapport à la semaine dernière.', delay: 6200 },
        { type: 'user', text: 'Parfait, merci Cortex !', delay: 10500 },
        { type: 'cortex', text: 'Avec plaisir Vincent 😄 Vos chiffres parlent d\'eux-mêmes.', delay: 11200 }
      ]
    },
    {
      id: 2,
      messages: [
        { type: 'user', text: 'Montre-moi mes recettes avec du bœuf', delay: 0 },
        { type: 'cortex', text: '8 recettes trouvées avec bœuf 🥩\n\n**Plats principaux :**\n• Bavette à l\'échalote (marge 68 %)\n• Tartare de bœuf (marge 72 %)\n• Burger signature (marge 65 %)\n• Bœuf bourguignon (marge 58 %)\n\n**Entrées :**\n• Carpaccio de bœuf (marge 75 %) ⭐\n• Salade de bœuf thaï (marge 70 %)\n• Tacos de bœuf (marge 62 %)\n• Pho au bœuf (marge 55 %)', delay: 1200 },
        { type: 'user', text: 'Quel est le food cost du Carpaccio ?', delay: 5500 },
        { type: 'cortex', text: 'Carpaccio de bœuf 🧾\n\n💰 Prix vente : 18,50 $\n📊 Coût : 4,65 $\n📈 Food cost : 25,1 %\n💵 Marge : 13,85 $ (75 %)\n\nDétail ingrédients :\n• Bavette AAA 150 g (3,80 $)\n• Roquette 30 g (0,35 $)\n• Parmesan 20 g (0,40 $)\n• Autres (0,10 $)', delay: 6500 },
        { type: 'user', text: 'Excellent, merci !', delay: 11000 },
        { type: 'cortex', text: 'Toujours un plaisir Vincent 😎 Votre Carpaccio reste une valeur sûre.', delay: 11600 }
      ]
    },
    {
      id: 3,
      messages: [
        { type: 'user', text: 'J\'ai assez de bœuf pour le week-end ?', delay: 0 },
        { type: 'cortex', text: '🔔 Alerte stock\n\nStock actuel : 12 kg de bavette\nConsommation prévue : 89 portions de Carpaccio + autres plats\n➡️ Risque de rupture samedi soir\n\n💡 Recommandation : Commander 18 kg avant vendredi midi.', delay: 1000 },
        { type: 'user', text: 'Génère un bon de commande', delay: 5200 },
        { 
          type: 'cortex', 
          text: '✅ Bon de commande créé\n\n📋 BC-2024-1234\n🥩 Bavette AAA : 18 kg\n💰 Estimé : 342 $\n🚚 Fournisseur : Viandes Premium\n\nPrêt à être envoyé ou téléchargé.', 
          delay: 6400,
          document: {
            id: 'BC-2024-1234',
            type: 'purchase_order',
            name: 'Bon de commande BC-2024-1234',
            icon: 'pdf'
          }
        },
        { type: 'user', text: 'Parfait, merci !', delay: 10800 },
        { type: 'cortex', text: 'Toujours là pour éviter les ruptures 😉', delay: 11400 }
      ]
    },
    {
      id: 4,
      messages: [
        { type: 'user', text: 'Qu\'est-ce qu\'on prépare demain ?', delay: 0 },
        { type: 'cortex', text: 'Demain au menu Vincent 📋\n\n🍝 Service du midi : 45 couverts prévus\n• Sauce bolognaise : besoin de 12 L\n• Pizzas : besoin de 8 kg de pâte\n\n💡 Je peux créer un bon de production si vous voulez.', delay: 1500 },
        { type: 'user', text: 'Oui, génère le bon de production', delay: 5500 },
        { 
          type: 'cortex', 
          text: '✅ Bon de production créé\n\n📋 BP-2024-0856\n📅 Préparation : aujourd\'hui\n\n🍝 Sauce bolognaise (12 L)\n• Bœuf haché : 6 kg\n• Tomates concassées : 8 L\n• Oignons : 1,2 kg\n• Carottes : 800 g\n• Vin rouge : 600 ml\n\n🍕 Pâte à pizza (8 kg)\n• Farine 00 : 5,2 kg\n• Eau : 3,2 L\n• Levure : 80 g\n• Huile d\'olive : 240 ml\n\nTout est prêt pour la cuisine.', 
          delay: 6700,
          document: {
            id: 'BP-2024-0856',
            type: 'production_order',
            name: 'Bon de production BP-2024-0856',
            icon: 'excel'
          }
        },
        { type: 'user', text: 'Parfait, envoie-le !', delay: 11500 },
        { type: 'cortex', text: '✅ Envoyé en cuisine. Production planifiée 👨‍🍳', delay: 12200 }
      ]
    },
    {
      id: 5,
      messages: [
        { type: 'user', text: 'Cortex, tout est correct avec les températures ?', delay: 0 },
        { type: 'cortex', text: 'Vérification en cours... 🌡️\n\n✅ Tout est conforme.\n\n❄️ Chambre froide : 2,1 °C (cible 0–4 °C)\n🧊 Congélateur : −19,8 °C (cible −18 à −22 °C)\n🍖 Vitrine viandes : 3,2 °C (cible 0–4 °C)\n🥗 Vitrine salades : 4,8 °C ⚠️ proche limite\n\nDernier relevé : il y a 5 min.', delay: 1400 },
        { type: 'user', text: 'Génère le rapport pour l\'inspection', delay: 6000 },
        { 
          type: 'cortex', 
          text: '✅ Rapport généré\n\n📋 RT-2024-1013\n📅 Période : 7 derniers jours\n🌡️ 168 relevés automatiques\n✅ Conformité : 99,4 %\n⚠️ 1 alerte mineure (vitrine salades)\n📊 Graphiques inclus\n📝 Conforme MAPAQ\n\nPrêt à télécharger ou imprimer.', 
          delay: 7300,
          document: {
            id: 'RT-2024-1013',
            type: 'report',
            name: 'Rapport de température RT-2024-1013',
            icon: 'pdf'
          }
        },
        { type: 'user', text: 'Impeccable, merci Cortex', delay: 12000 },
        { type: 'cortex', text: 'Avec plaisir Vincent 😌 Je veille 24/7 sur vos frigos.', delay: 12700 }
      ]
    }
  ],
  en: [
    {
      id: 1,
      messages: [
        { type: 'user', text: 'Cortex, how are my sales this week?', delay: 0 },
        { type: 'cortex', text: 'Strong week overall Vincent 💪\n\nRevenue: $6,994.50 • 230 orders\nDaily average: $999\nProgress: +26% toward monthly goal\n\n📈 Friday peak: 45 orders for $1,315', delay: 1500 },
        { type: 'user', text: 'What are my best sellers?', delay: 5000 },
        { type: 'cortex', text: 'Top 3 this week:\n\n🥇 Beef Carpaccio — 89 portions • 75% margin • $1,245\n🥈 Garlic Escargots — 67 portions • 82% margin • $892\n🥉 Caesar Salad — 78 portions • 68% margin • $780\n\n📊 Carpaccio up 23% vs last week.', delay: 6200 },
        { type: 'user', text: 'Perfect, thanks Cortex!', delay: 10500 },
        { type: 'cortex', text: 'Always glad to report good news 😄', delay: 11200 }
      ]
    },
    {
      id: 2,
      messages: [
        { type: 'user', text: 'Show me my recipes with beef', delay: 0 },
        { type: 'cortex', text: '8 beef recipes found 🥩\n\n**Main dishes:**\n• Bavette with shallots (margin 68%)\n• Beef tartare (margin 72%)\n• Signature burger (margin 65%)\n• Beef bourguignon (margin 58%)\n\n**Starters:**\n• Beef carpaccio (margin 75%) ⭐\n• Thai beef salad (margin 70%)\n• Beef tacos (margin 62%)\n• Beef pho (margin 55%)', delay: 1200 },
        { type: 'user', text: 'What\'s the food cost of the Carpaccio?', delay: 5500 },
        { type: 'cortex', text: 'Beef Carpaccio 🧾\n\n💰 Sale price: $18.50\n📊 Cost: $4.65\n📈 Food cost: 25.1%\n💵 Margin: $13.85 (75%)\n\nIngredients:\n• AAA bavette 150 g ($3.80)\n• Arugula 30 g ($0.35)\n• Parmesan 20 g ($0.40)\n• Other ($0.10)', delay: 6500 },
        { type: 'user', text: 'Excellent, thanks!', delay: 11000 },
        { type: 'cortex', text: 'Glad to help Vincent 😎 Carpaccio remains your top performer.', delay: 11600 }
      ]
    },
    {
      id: 3,
      messages: [
        { type: 'user', text: 'Do I have enough beef for the weekend?', delay: 0 },
        { type: 'cortex', text: '⚠️ Stock alert\n\nCurrent stock: 12 kg bavette\nExpected use: 89 Carpaccio portions + other dishes\n➡️ Risk: shortage by Saturday night\n\n💡 Suggestion: Order 18 kg before Friday noon.', delay: 1000 },
        { type: 'user', text: 'Generate a purchase order', delay: 5200 },
        { 
          type: 'cortex', 
          text: '✅ Purchase order ready\n\n📋 PO-2024-1234\n🥩 AAA Bavette: 18 kg\n💰 Estimated: $342\n🚚 Supplier: Premium Meats\n\nYou can send or download it directly.', 
          delay: 6400,
          document: {
            id: 'PO-2024-1234',
            type: 'purchase_order',
            name: 'Purchase Order PO-2024-1234',
            icon: 'pdf'
          }
        },
        { type: 'user', text: 'Perfect, thank you!', delay: 10800 },
        { type: 'cortex', text: 'Anytime 😉 Keeping your inventory steady.', delay: 11400 }
      ]
    },
    {
      id: 4,
      messages: [
        { type: 'user', text: 'What are we preparing tomorrow?', delay: 0 },
        { type: 'cortex', text: 'Tomorrow\'s menu Vincent 📋\n\n🍝 Lunch service: 45 covers expected\n• Bolognese sauce: need 12 L\n• Pizzas: need 8 kg dough\n\n💡 I can create a production order if you want.', delay: 1500 },
        { type: 'user', text: 'Yes, generate the production order', delay: 5500 },
        { 
          type: 'cortex', 
          text: '✅ Production order created\n\n📋 PO-2024-0856\n📅 Prep: Today\n\n🍝 Bolognese sauce (12 L)\n• Ground beef 6 kg\n• Crushed tomatoes 8 L\n• Onions 1.2 kg\n• Carrots 800 g\n• Red wine 600 ml\n\n🍕 Pizza dough (8 kg)\n• 00 Flour 5.2 kg\n• Water 3.2 L\n• Yeast 80 g\n• Olive oil 240 ml\n\nOrder ready for the kitchen.', 
          delay: 6700,
          document: {
            id: 'PO-2024-0856',
            type: 'production_order',
            name: 'Production Order PO-2024-0856',
            icon: 'excel'
          }
        },
        { type: 'user', text: 'Perfect, send it!', delay: 11500 },
        { type: 'cortex', text: '✅ Sent to kitchen. Production scheduled 👨‍🍳', delay: 12200 }
      ]
    },
    {
      id: 5,
      messages: [
        { type: 'user', text: 'Cortex, are all temperatures OK?', delay: 0 },
        { type: 'cortex', text: 'Running checks... 🌡️\n\n✅ All systems stable\n\n❄️ Cold room: 35.8°F (target 32–39°F)\n🧊 Freezer: −3.6°F (target 0 to −8°F)\n🍖 Meat display: 37.8°F (target 32–39°F)\n🥗 Salad display: 40.6°F ⚠️ near limit\n\nLast reading: 5 min ago', delay: 1400 },
        { type: 'user', text: 'Generate inspection report', delay: 6000 },
        { 
          type: 'cortex', 
          text: '✅ Temperature report ready\n\n📋 TR-2024-1013\n📅 Period: Last 7 days\n🌡️ 168 automatic readings\n✅ Compliance: 99.4%\n⚠️ 1 minor alert (salad display)\n📊 Charts included\n📝 FDA compliant\n\nReady to download or print.', 
          delay: 7300,
          document: {
            id: 'TR-2024-1013',
            type: 'report',
            name: 'Temperature Report TR-2024-1013',
            icon: 'pdf'
          }
        },
        { type: 'user', text: 'Perfect, thanks Cortex', delay: 12000 },
        { type: 'cortex', text: 'My pleasure Vincent 😌 Monitoring 24/7 so you don\'t have to.', delay: 12700 }
      ]
    }
  ]
};

// Configuration des timings
export const TIMING = {
  conversationPause: 3000, // Pause entre les conversations (3s)
  messageDisplay: 4000, // Temps d'affichage d'un message complet (4s)
};
