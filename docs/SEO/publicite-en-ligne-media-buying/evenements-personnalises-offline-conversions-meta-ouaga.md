---
title: "Comment Configurer des Événements Personnalisés « Visite Showroom » et « Devis Téléphonique » dans Meta"
description: "Trackez les visites physiques dans votre magasin à Ouaga et vos appels commerciaux sur Meta Ads. Guide complet des Conversions Hors Ligne (Offline) par BAROUBA "
keywords: "evenements personnalises offline conversions meta ads burkina"
author: "Monsieur SAKO BAROU BEN OUMAR - BAROUBA GROUP"
date: "2026-11-04"
cluster: "Cluster 2 : Le Tunnel Ultime : Meta Ads vers WhatsApp Business + CAPI Server-Side"
article_number: "033"
---

# Comment Configurer des Événements Personnalisés « Visite Showroom » et « Devis Téléphonique » dans Meta

> **En résumé (Définition clé & Réponse rapide) :**  
> Trackez les visites physiques dans votre magasin à Ouaga et vos appels commerciaux sur Meta Ads. Guide complet des Conversions Hors Ligne (Offline) par BAROUBA GROUP.

---

## Table des Matières

- [Introduction : Le Contexte Économique & les Enjeux Stratégiques à Ouagadougou](#introduction-le-contexte-economique-les-enjeux-strategiques-a-ouagadougou)
- [1. Qu'est-ce qu'une Conversion Hors Ligne (Offline Conversion) ?](#1-qu-est-ce-qu-une-conversion-hors-ligne-offline-conversion)
- [2. Les Deux Événements Personnalisés Clés pour le Marché Burkinabè](#2-les-deux-evenements-personnalises-cles-pour-le-marche-burkinabe)
- [3. Guide Pas à Pas : Configurer Vos Conversions Hors Ligne dans Meta](#3-guide-pas-a-pas-configurer-vos-conversions-hors-ligne-dans-meta)
- [4. Tableau Comparatif : Vision Sans Offline vs Vision Avec Offline](#4-tableau-comparatif-vision-sans-offline-vs-vision-avec-offline)
- [5. Comment BAROUBA GROUP Automatise Vos Conversions Hors Ligne](#5-comment-barouba-group-automatise-vos-conversions-hors-ligne)
- [Conclusion](#conclusion)
- [Questions Fréquentes (FAQ)](#questions-frequentes-faq)
- [Contact & Accompagnement Stratégique](#contact-accompagnement-strategique)

---


## Introduction : Le Contexte Économique & les Enjeux Stratégiques à Ouagadougou

Dans l'économie réelle du Burkina Faso, une réalité saute aux yeux de tout observateur attentif : si le premier contact commercial s'établit très souvent sur Facebook et WhatsApp, **les transactions financières les plus volumineuses se concluent physiquement au comptoir ou au terme d'un appel téléphonique approfondi**.

Qu'il s'agisse d'acheter un salon complet dans un magasin de meubles de Koulouba, de souscrire un contrat de climatisation pour un siège social, d'acheter une parcelle à Saaba ou de commander un camion de matériaux de construction, le client burkinabè a besoin :
1. De se rendre physiquement dans votre showroom ou bureau pour voir la marchandise et jauger le sérieux de l'entreprise.
2. Ou d'échanger longuement par appel vocal direct avec le responsable commercial pour négocier les conditions de paiement.

Pour la majorité des entreprises à Ouagadougou, cette étape physique brise la chaîne de tracking digital.  
Sur le gestionnaire Meta Ads, la campagne affiche 100 messages WhatsApp, mais indique **Zéro vente**. Pourtant, dans votre registre de caisse physique, vous avez encaissé **12 000 000 FCFA** de clients qui vous ont dit : *« C'est sur Facebook que j'ai vu votre publication avant de venir au magasin ! »*.

Pour réconcilier ces deux mondes, Meta dispose d'une technologie d'une puissance colossale : **le Suivi des Conversions Hors Ligne (Offline Conversions / Custom Events)**.

Dans ce guide pratique d'ingénierie publicitaire, **BAROUBA GROUP** vous révèle comment configurer ces événements sur mesure pour prouver la rentabilité exacte de vos annonces et éduquer l'algorithme avec vos encaissements physiques au Burkina Faso.

---

## 1. Qu'est-ce qu'une Conversion Hors Ligne (Offline Conversion) ?

Une conversion hors ligne est la capture d'un acte commercial qui s'est produit dans le monde réel (dans votre boutique, par appel ou par virement bancaire) et sa réconciliation automatique avec les utilisateurs ayant interagi avec vos publicités en ligne :

```
[ LA BOUCLE DE RÉCONCILIATION HORS LIGNE META ]

1. DANS LE MONDE DIGITAL (Facebook Ads)
   M. Ouedraogo voit votre publicité à Ouaga et clique sur le lien WhatsApp.
                 |
                 v
2. DANS LE MONDE PHYSIQUE (Votre Showroom)
   M. Ouedraogo se rend dans votre magasin à Ouaga 2000, finalise l'achat
   d'un groupe électrogène pour 1 200 000 FCFA et laisse son numéro de téléphone.
                 |
                 v
3. LE RAPPROCHEMENT DATA (BAROUBA GROUP)
   Votre caissier saisit la vente dans le fichier caisse hors-ligne :
   Numéro : +226 70 XX XX XX | Montant : 1 200 000 FCFA | Événement : "Visite_Showroom_Achat"
                 |
                 v
4. TRANSMISSION SÉCURISÉE AU GESTIONNAIRE D'ÉVÉNEMENTS META
   Meta croise le numéro de téléphone haché en SHA-256 avec ses données publicitaires.
                 |
                 v
RÉSULTAT SPECTACULAIRE :
Meta attribue la vente de 1 200 000 FCFA à la publicité exacte que M. Ouedraogo a vue !
Le ROAS réel de votre campagne apparaît enfin dans toute sa splendeur !
```

---

## 2. Les Deux Événements Personnalisés Clés pour le Marché Burkinabè

Sur le marché local de Ouagadougou et Bobo-Dioulasso, deux événements spécifiques doivent être implémentés en priorité :

### Événement n°1 : « Visite Showroom » (Store Visit / Physical Lead)
- **Déclencheur :** Le prospect s'est déplacé physiquement dans votre agence, magasin ou showroom à la suite d'un premier échange WhatsApp ou d'une publicité d'invitation locale.
- **Utilité algorithmique :** Indique à Meta quels sont les utilisateurs mobiles burkinabè qui ont la plus forte propension à sortir de chez eux pour se déplacer en point de vente physique.

### Événement n°2 : « Devis Téléphonique Validé » (Phone Quote Closed)
- **Déclencheur :** Le commercial a conclu un accord de principe ou signé un bon de commande au cours d'un appel téléphonique direct avec le décideur.
- **Utilité algorithmique :** Permet d'optimiser les campagnes B2B pour attirer des cadres et patrons joignables par téléphone plutôt que de simples internautes passifs.

---

## 3. Guide Pas à Pas : Configurer Vos Conversions Hors Ligne dans Meta

Pour paramétrer cette synchronisation dans votre Meta Business Manager :

### Étape 1 : Créer un Ensemble d'Événements Hors Ligne (Offline Event Set)
Dans votre Gestionnaire d'Événements Meta (Events Manager), cliquez sur le bouton vert **« Associer des sources de données »** et sélectionnez l'option **« Hors-ligne » (Offline)**. Donnez-lui un nom explicite (ex: *Encaissements Magasin Ouaga 2000*).

### Étape 2 : Associer l'Ensemble à Vos Comptes Publicitaires
Cochez vos comptes publicitaires actifs et activez le commutateur **« Suivi automatique » (Auto-tracking)**. Cela autorise Meta à croiser toutes les futures diffusions d'annonces avec les données de caisse que vous téléverserez.

### Étape 3 : Structurer Votre Fichier Caisse Quotidien
Votre équipe commerciale doit consigner chaque vente physique dans un tableau Excel simple comportant obligatoirement ces colonnes :

```
[ STRUCTURE DU FICHIER DE SYNCHRONISATION OFFLINE ]

phone        | email                     | event_name       | event_time  | value   | currency
+22670112233 | client.ouaga@gmail.com    | Purchase         | 1714829100  | 350000  | XOF
+22676445566 |                           | Visite_Showroom  | 1714832400  | 0       | XOF
+22678990011 | dg.entreprise@fasonet.bf  | Phone_Quote      | 1714835000  | 1200000 | XOF
```

### Étape 4 : Téléverser et Hacher les Données
Chaque vendredi ou fin de mois, le fichier est téléversé dans le gestionnaire d'événements. Meta assure le hachage cryptographique automatique de vos données locales et fait correspondre les profils sous 24 heures.

---

## 4. Tableau Comparatif : Vision Sans Offline vs Vision Avec Offline

Examinons le bilan d'un mois de campagne pour une concession automobile à Ouagadougou investissant **1 000 000 FCFA** par mois sur Facebook :

| Métriques d'Analyse | Sans Tracking Hors Ligne (Aveugle) | Avec Tracking Hors Ligne (BAROUBA GROUP) | Révélation Stratégique |
| :--- | :--- | :--- | :--- |
| **Ventes En Ligne Visibles** | 0 vente (Personne n'achète une voiture en ligne) | 0 vente | Identique |
| **Visites Showroom Trackées** | Inconnues (supposées dues au bouche-à-oreille) | **42 visites physiques attribuées** | **Preuve d'impact direct** |
| **Ventes de Véhicules Réconciliées** | 0 attribuée | **8 véhicules vendus grâce aux pubs** | **Succès éclatant !** |
| **Chiffre d'Affaires Réel Attribué** | 0 FCFA | **68 000 000 FCFA** | **La pub a généré tout le cash** |
| **ROAS Mesuré** | **0,0x (Le DG voulait couper le budget !)** | **68,0x (Le DG décide de tripler le budget !)** | **Survie de la stratégie digitale** |

---

## 5. Comment BAROUBA GROUP Automatise Vos Conversions Hors Ligne

Téléverser des fichiers manuellement chaque semaine peut s'avérer fastidieux pour une entreprise en pleine activité.

**BAROUBA GROUP** met en place des solutions d'automatisation intégrale :
- **Intégration directe de vos logiciels de caisse :** Connexion automatique de votre ERP, CRM ou logiciel de facturation via notre passerelle CAPI pour que chaque ticket de caisse physique soit transmis à Meta sans manipulation humaine.
- **Conformité stricte CIL :** Respect rigoureux de la loi burkinabè sur la protection des données personnelles grâce au hachage local préalable sur vos propres serveurs.
- **Tableaux de bord Looker Studio unifiés :** Restitution de vos données sur un écran unique montrant les clics web, les visites showroom et les millions de FCFA encaissés au comptoir.

---

## Conclusion

Le succès d'une stratégie d'acquisition publicitaire en ligne au Burkina Faso et dans l'espace UEMOA repose sur la rigueur analytique, la pertinence créative et la maîtrise des leviers techniques du Media Buying professionnel. En abandonnant les méthodes approximatives et les dépenses aveugles au profit de campagnes structurées et pilotées par la donnée, votre entreprise s'assure un avantage concurrentiel décisif et une croissance pérenne de sa rentabilité.

**BAROUBA GROUP** accompagne les dirigeants et responsables marketing à Ouagadougou, Bobo-Dioulasso et dans toute la sous-région pour transformer chaque FCFA investi en opportunités commerciales concrètes et en chiffre d'affaires mesurable.

---

## Questions Fréquentes (FAQ)

### Que se passe-t-il si le client refuse de donner son numéro de téléphone au magasin ?
Au Burkina Faso, plus de 90 % des clients communiquent volontiers leur numéro de téléphone pour recevoir leur reçu par SMS, participer à un tirage au sort ou bénéficier de la garantie sur le produit. Il suffit de former vos caissiers à demander poliment le numéro lors de la facturation.

### Combien de temps après avoir vu une publicité un achat hors ligne peut-il être attribué ?
Par défaut, la fenêtre d'attribution de Meta est de **7 jours après le clic** et de **1 jour après l'affichage**. Pour des cycles de vente longs (immobilier, véhicules), nous pouvons paramétrer des fenêtres d'attribution étendues jusqu'à 28 jours.

### Les informations de chiffre d'affaires sont-elles visibles par les concurrents ?
Non, absolument jamais. Vos données de ventes, vos montants en FCFA et vos listes de clients sont strictement confidentiels, chiffrés et réservés à l'optimisation interne de votre propre compte publicitaire.

### Quel est le coût pour mettre en place ce système avec BAROUBA GROUP ?
Cette prestation d'ingénierie fait partie intégrante de nos forfaits d'accompagnement Media Buying pour les entreprises disposant de points de vente physiques ou de forces de vente sédentaires à Ouagadougou et Bobo-Dioulasso.

### Comment mesurer précisément le retour sur investissement (ROAS) de nos campagnes publicitaires à Ouaga ?
Le calcul du ROAS s'effectue en divisant le chiffre d'affaires net directement généré via les commandes WhatsApp ou la boutique en ligne par le montant investi en FCFA dans Meta Ads ou Google Ads. BAROUBA GROUP configure des tableaux de bord en temps réel pour suivre votre coût par acquisition (CPA) exact.

### Pourquoi faire appel à BAROUBA GROUP plutôt que de gérer soi-même ses campagnes publicitaires ?
Gérer des campagnes professionnelles exige une maîtrise avancée du tracking CAPI, du copywriting publicitaire et des stratégies d'enchères dans l'espace UEMOA. BAROUBA GROUP vous évite les erreurs coûteuses, sécurise vos comptes contre les blocages imprévus et optimise chaque FCFA investi pour générer des ventes réelles.

### Balisage Données Structurées Schema.org (FAQPage)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que se passe-t-il si le client refuse de donner son numéro de téléphone au magasin ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Au Burkina Faso, plus de 90 % des clients communiquent volontiers leur numéro de téléphone pour recevoir leur reçu par SMS, participer à un tirage au sort ou bénéficier de la garantie sur le produit. Il suffit de former vos caissiers à demander poliment le numéro lors de la facturation."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps après avoir vu une publicité un achat hors ligne peut-il être attribué ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Par défaut, la fenêtre d'attribution de Meta est de 7 jours après le clic et de 1 jour après l'affichage. Pour des cycles de vente longs (immobilier, véhicules), nous pouvons paramétrer des fenêtres d'attribution étendues jusqu'à 28 jours."
      }
    },
    {
      "@type": "Question",
      "name": "Les informations de chiffre d'affaires sont-elles visibles par les concurrents ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, absolument jamais. Vos données de ventes, vos montants en FCFA et vos listes de clients sont strictement confidentiels, chiffrés et réservés à l'optimisation interne de votre propre compte publicitaire."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le coût pour mettre en place ce système avec BAROUBA GROUP ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cette prestation d'ingénierie fait partie intégrante de nos forfaits d'accompagnement Media Buying pour les entreprises disposant de points de vente physiques ou de forces de vente sédentaires à Ouagadougou et Bobo-Dioulasso."
      }
    },
    {
      "@type": "Question",
      "name": "Comment mesurer précisément le retour sur investissement (ROAS) de nos campagnes publicitaires à Ouaga ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le calcul du ROAS s'effectue en divisant le chiffre d'affaires net directement généré via les commandes WhatsApp ou la boutique en ligne par le montant investi en FCFA dans Meta Ads ou Google Ads. BAROUBA GROUP configure des tableaux de bord en temps réel pour suivre votre coût par acquisition (CPA) exact."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi faire appel à BAROUBA GROUP plutôt que de gérer soi-même ses campagnes publicitaires ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gérer des campagnes professionnelles exige une maîtrise avancée du tracking CAPI, du copywriting publicitaire et des stratégies d'enchères dans l'espace UEMOA. BAROUBA GROUP vous évite les erreurs coûteuses, sécurise vos comptes contre les blocages imprévus et optimise chaque FCFA investi pour générer des ventes réelles."
      }
    }
  ]
}
```

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que se passe-t-il si le client refuse de donner son numéro de téléphone au magasin ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Au Burkina Faso, plus de 90 % des clients communiquent volontiers leur numéro de téléphone pour recevoir leur reçu par SMS, participer à un tirage au sort ou bénéficier de la garantie sur le produit. Il suffit de former vos caissiers à demander poliment le numéro lors de la facturation."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps après avoir vu une publicité un achat hors ligne peut-il être attribué ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Par défaut, la fenêtre d'attribution de Meta est de 7 jours après le clic et de 1 jour après l'affichage. Pour des cycles de vente longs (immobilier, véhicules), nous pouvons paramétrer des fenêtres d'attribution étendues jusqu'à 28 jours."
      }
    },
    {
      "@type": "Question",
      "name": "Les informations de chiffre d'affaires sont-elles visibles par les concurrents ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non, absolument jamais. Vos données de ventes, vos montants en FCFA et vos listes de clients sont strictement confidentiels, chiffrés et réservés à l'optimisation interne de votre propre compte publicitaire."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le coût pour mettre en place ce système avec BAROUBA GROUP ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cette prestation d'ingénierie fait partie intégrante de nos forfaits d'accompagnement Media Buying pour les entreprises disposant de points de vente physiques ou de forces de vente sédentaires à Ouagadougou et Bobo-Dioulasso."
      }
    },
    {
      "@type": "Question",
      "name": "Comment mesurer précisément le retour sur investissement (ROAS) de nos campagnes publicitaires à Ouaga ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le calcul du ROAS s'effectue en divisant le chiffre d'affaires net directement généré via les commandes WhatsApp ou la boutique en ligne par le montant investi en FCFA dans Meta Ads ou Google Ads. BAROUBA GROUP configure des tableaux de bord en temps réel pour suivre votre coût par acquisition (CPA) exact."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi faire appel à BAROUBA GROUP plutôt que de gérer soi-même ses campagnes publicitaires ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gérer des campagnes professionnelles exige une maîtrise avancée du tracking CAPI, du copywriting publicitaire et des stratégies d'enchères dans l'espace UEMOA. BAROUBA GROUP vous évite les erreurs coûteuses, sécurise vos comptes contre les blocages imprévus et optimise chaque FCFA investi pour générer des ventes réelles."
      }
    }
  ]
}
</script>


---

## Contact & Accompagnement Stratégique

Vous souhaitez déployer cette stratégie au sein de votre entreprise au Burkina Faso ou dans l'espace UEMOA ? Les experts de **BAROUBA GROUP** vous accompagnent à chaque étape avec une méthodologie éprouvée et un engagement ferme sur vos résultats commerciaux.

- 🏢 **Cabinet :** BAROUBA GROUP
- 👤 **Direction Générale :** Monsieur SAKO BAROU BEN OUMAR
- 📍 **Siège Social :** Bobo-Dioulasso | **Interventions :** Ouagadougou, Bobo-Dioulasso, tout le Burkina Faso & International
- 📞 **Ligne directe & WhatsApp Pro :** [+226 74 82 66 66](https://wa.me/22674826666?text=Bonjour%20BAROUBA%20GROUP%2C%20je%20souhaite%20un%20accompagnement%20professionnel%20pour%20mon%20entreprise.)
- 📧 **Courriel officiel :** [baroubagroup@gmail.com](mailto:baroubagroup@gmail.com)
- 🌐 **Site web officiel :** [https://www.baroubagroup.com](https://www.baroubagroup.com)
