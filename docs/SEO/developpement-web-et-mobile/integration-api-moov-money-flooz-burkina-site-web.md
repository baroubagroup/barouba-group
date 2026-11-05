---
title: "Intégration Moov Money (Flooz) sur Site Web : Étapes Officielles et Code de Branchement"
description: "Comment intégrer la passerelle Moov Money (Flooz) de Moov Africa Burkina sur votre site web ? Guide d'API, push USSD, contrat marchand et code en FCFA."
keywords: "integrer api moov money burkina site web"
author: "Monsieur SAKO BAROU BEN OUMAR - BAROUBA GROUP"
date: "2026-04-01"
cluster: "Cluster 3 : E-commerce & Paiement Mobile Money au Burkina"
article_number: "032"
---

# Intégration Moov Money (Flooz) sur Site Web : Étapes Officielles et Code de Branchement

> **En résumé (Définition clé & Réponse rapide) :**  
> Comment intégrer la passerelle Moov Money (Flooz) de Moov Africa Burkina sur votre site web ? Guide d'API, push USSD, contrat marchand et code en FCFA.

---

## Table des Matières

- [Introduction : Le Contexte Économique & les Enjeux Stratégiques à Ouagadougou](#introduction-le-contexte-economique-les-enjeux-strategiques-a-ouagadougou)
- [1. La Démarche Administrative auprès de Moov Africa Burkina](#1-la-demarche-administrative-aupres-de-moov-africa-burkina)
- [2. Le Mécanisme du Push USSD Moov Money : Une Ergonomie 1-Clic](#2-le-mecanisme-du-push-ussd-moov-money-une-ergonomie-1-clic)
- [3. Implémentation du Code : Exemple de Déclenchement en Node.js](#3-implementation-du-code-exemple-de-declenchement-en-node-js)
- [4. Gestion Sécurisée du Callback et Réconciliation Financière](#4-gestion-securisee-du-callback-et-reconciliation-financiere)
- [5. Pourquoi Combiner Orange Money et Moov Money sur Votre Site ?](#5-pourquoi-combiner-orange-money-et-moov-money-sur-votre-site)
- [Intégrez Moov Money sans Tracas Technique](#integrez-moov-money-sans-tracas-technique)
- [Les Fondations Techniques de l'Ingénierie Web & Mobile selon BAROUBA GROUP](#les-fondations-techniques-de-l-ingenierie-web-mobile-selon-barouba-group)
- [Conclusion](#conclusion)
- [Questions Fréquentes (FAQ)](#questions-frequentes-faq)
- [Contact & Accompagnement Stratégique](#contact-accompagnement-strategique)

---


## Introduction : Le Contexte Économique & les Enjeux Stratégiques à Ouagadougou

Aux côtés d'Orange Money, **Moov Money** (historiquement connu sous l'appellation commerciale Flooz chez Moov Africa Burkina) représente une part colossale des transactions financières du pays. Avec une couverture historique et puissante dans les provinces de l'Ouest (Bobo-Dioulasso, Banfora, Koudougou, Dédougou) ainsi qu'auprès des commerçants de Ouagadougou, **ignorer Moov Money sur un site e-commerce revient à fermer sa porte à plus de 35 % des acheteurs burkinabè**.

L'intégration de la passerelle Moov Money offre un avantage ergonomique majeur : le système de **Push USSD direct**. Contrairement aux solutions nécessitant la génération préalable d'un code OTP, Moov Money peut faire retentir directement une invite sécurisée sur l'écran du téléphone du client : *« Souhaitez-vous payer 15 000 FCFA à BAROUBA SHOP ? Entrez votre code PIN pour valider »*.

Comment souscrire au service auprès de Moov Africa Burkina ? Comment brancher l'API sur son site web ou sa boutique en ligne ? Et comment gérer les callbacks pour automatiser la livraison ?

Voici le guide technique exhaustif élaboré par **BAROUBA GROUP**.

---

## 1. La Démarche Administrative auprès de Moov Africa Burkina

Pour encaisser des fonds via Moov Money, votre entreprise doit signer une convention de compte marchand auprès de la direction commerciale de Moov Africa Burkina (Agence Siège de Ouagadougou ou Direction Régionale de Bobo-Dioulasso).

### Constitution du Dossier Légal :
- Registre du Commerce et du Crédit Mobilier (**RCCM**),
- Attestation d'Identifiant Fiscal Unique (**IFU** en cours de validité),
- Pièce d'identité légale du gérant ou administrateur,
- Relevé d'Identité Bancaire (RIB) pour le reversement périodique automatique des fonds collectés,
- Formulaire d'ouverture de compte de collecte marchand web.

Dès l'approbation du dossier, le pôle technique de Moov Africa vous délivre vos accès :
- **Merchant ID (Identifiant Marchand)**,
- Clé secrète de cryptage (**Secret Key / API Token**),
- URL du point de terminaison de l'API (Endpoint SOAP/REST) et accès Sandbox.

---

## 2. Le Mécanisme du Push USSD Moov Money : Une Ergonomie 1-Clic

Le flux utilisateur de Moov Money est particulièrement apprécié des acheteurs sur mobile :

```
[Client sur votre Site Web]           [Serveur E-Commerce (BAROUBA)]           [Passerelle Moov Money BF]
             |                                     |                                       |
             |--- 1. Saisit son numéro Moov BF --->|                                       |
             |                                     |--- 2. Requête API Push Payment ---

>|
             |                                     |                                       |
[Smartphone du Client]                             |                                       |
       |                                           |                                       |
       |<---

- 3. Notification PUSH USSD instantanée sur l'écran ---

-|
       |                  ("Payer 25 000 FCFA ? Entrez code secret Moov")                  |
       |                                           |                                       |
       |--- 4. Tape son code PIN secret ---

->|                                       |
       |                                           |                                       |
       |                                           |<-- 5. Webhook Transaction Callback ---|
       |                                           |    (Statut: COMPLETED, ID, Montant)   |
       |                                           |--- 6. Déclenchement de la commande ---|
       |<-- 7. Écran de confirmation de commande --|
```

Ce parcours élimine les erreurs de manipulation : le client n'a pas besoin de quitter son navigateur pour aller taper un code USSD complexe sur son clavier d'appel. La demande s'affiche toute seule sur son écran.

---

## 3. Implémentation du Code : Exemple de Déclenchement en Node.js

Voici comment se structure l'appel pour déclencher une demande de paiement Moov Money sur le smartphone d'un client au Burkina :

```javascript
// Déclenchement d'un Push Payment Moov Africa Burkina
export async function initiateMoovMoneyPayment(orderId, amount, customerPhone) {
  const payload = {
    merchant_id: process.env.MOOV_MERCHANT_ID,
    reference: `CMD-${orderId}`,
    amount: amount, // Montant en FCFA
    currency: "XOF",
    phone: customerPhone, // Format: 226XXXXXXXX
    description: `Paiement Commande ${orderId}`,
    callback_url: "https://votre-boutique.bf/api/webhooks/moov-money"
  };

  const response = await fetch("https://api.moovmoney.bf/v2/payment/push", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MOOV_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  
  if (result.status === "PENDING") {
    return { success: true, message: "Invite de paiement envoyée sur le mobile du client." };
  } else {
    throw new Error(result.error_message || "Échec de l'initialisation Moov Money.");
  }
}
```

---

## 4. Gestion Sécurisée du Callback et Réconciliation Financière

Lorsque le client valide son code secret sur son smartphone, les serveurs de Moov Africa envoient immédiatement un payload JSON vers votre endpoint de callback :

```javascript
// Route Webhook Moov Money (Next.js App Router)
export async function POST(request) {
  const body = await request.json();

  // 1. Vérification de la signature cryptographique Moov
  const isSignatureValid = verifyMoovSignature(request.headers, body);
  if (!isSignatureValid) {
    return new Response("Invalid Signature", { status: 401 });
  }

  // 2. Traitement du paiement réussi
  if (body.status === "SUCCESS") {
    const orderId = body.reference.replace("CMD-", "");
    const paidAmount = body.amount;

    await markOrderAsPaid(orderId, paidAmount, body.transaction_id);
    await sendWhatsAppNotificationToDeliveryTeam(orderId); // Alerte coursier Ouaga/Bobo
  }

  return new Response(JSON.stringify({ status: "ACK" }), { status: 200 });
}
```

---

## 5. Pourquoi Combiner Orange Money et Moov Money sur Votre Site ?

Proposer les deux opérateurs nationaux majeurs apporte des bénéfices commerciaux immédiats :
- **Zéro Frustration Client :** L'acheteur paie avec la carte SIM sur laquelle il a du solde disponible aujourd'hui.
- **Taux d'Abandon Réduit de 40 % :** Les études menées par nos équipes à Ouaga démontrent qu'un site proposant Orange + Moov convertit 40 % de commandes supplémentaires par rapport à un site mono-opérateur.
- **Couverture Provinciale Maximale :** Moov Africa bénéficie d'une fidélité extrême dans la région des Hauts-Bassins (Bobo-Dioulasso) et de la Boucle du Mouhoun.

---

## Intégrez Moov Money sans Tracas Technique

Vous souhaitez activer Moov Money sur votre site web existant ou concevoir une nouvelle boutique en ligne optimisée ?

**BAROUBA GROUP s'occupe de l'intégralité du déploiement technique et de la sécurisation de vos encaissements.**

- 📲 **Contactez nos ingénieurs API sur WhatsApp :** Diagnostic technique immédiat et raccordement de votre passerelle sous 5 jours.
- 💼 **Facturation normalisée & Sécurité garantie :** Zéro faille de sécurité, validation des paiements en temps réel.

---

## Les Fondations Techniques de l'Ingénierie Web & Mobile selon BAROUBA GROUP

Pour garantir à nos clients burkinabè des actifs digitaux pérennes, ultra-rapides et hautement sécurisés, notre cabinet d'ingénierie applique des standards technologiques internationaux rigoureux :

### 1. La Supériorité de l'Architecture Jamstack et Next.js face aux CMS Monolithiques
Trop d'entreprises à Ouagadougou et Bobo-Dioulasso souffrent de sites internet sous WordPress ou PHP obsolète, lourds à charger et vulnérables aux piratages récurrents. BAROUBA GROUP privilégie les architectures modernes basées sur **Next.js (React)** et **Node.js** :
- **Vitesse de Chargement Exceptionnelle :** Le pré-rendu statique (SSG) et l'optimisation automatique des images permettent d'afficher vos pages en moins d'une seconde sur smartphone, même avec une couverture réseau 3G fluctuante.
- **Sécurité Impénétrable :** En découplant complètement le front-end visible par les visiteurs de la base de données via des API REST/GraphQL protégées, la surface d'attaque est réduite à néant, éliminant tout risque d'injection SQL ou d'infection par malware.
- **Score SEO Technique Optimal :** Nos architectures obtiennent systématiquement des scores supérieurs à 90/100 sur Google PageSpeed et Lighthouse, garantissant un référencement naturel dominant sur vos mots-clés stratégiques.

### 2. Le Développement Mobile Hybride Haute Performance avec Google Flutter
Pour les projets d'applications mobiles d'entreprise (commerce, livraison, services aux usagers), nous déployons le framework **Google Flutter** :
- **Un Seul Code Source pour iOS et Android :** Réduction drastique des délais et des coûts de maintenance par rapport au développement natif double.
- **Fluidité Visuelle Native à 60 FPS :** Interface utilisateur réactive avec animations fluides respectant les composants graphiques Material Design et Cupertino.
- **Architecture Offline-First :** Synchronisation locale des données permettant à vos collaborateurs ou clients d'utiliser l'application même lors de coupures momentanées de connexion Internet.

### 3. La Sécurisation des Paiements et la Conformité aux Normes Financières UEMOA
L'encaissement digital est au cœur du modèle économique sahélien. Nous implémentons des protocoles d'encaissement inviolables :
- **Gestion Idempotente des Webhooks :** Prévention totale des doubles débits et des fausses confirmations lors des paiements Orange Money, Moov Money et Wave.
- **Authentification Sécurisée par SMS OTP :** Protection des comptes utilisateurs par code de confirmation à usage unique pour toutes les transactions sensibles.
- **Conformité Stricte avec la CIL :** Respect rigoureux des obligations légales du Burkina Faso concernant la confidentialité et le stockage des données bancaires et personnelles.

### 4. Le Protocole de Déploiement Continu et d'Assurance Qualité
Chaque application web ou mobile développée par BAROUBA GROUP suit un cycle d'assurance qualité exhaustif :
- **Environnement de Pré-production (Staging) :** Vous testez et validez chaque fonctionnalité sur un serveur miroir sécurisé avant toute ouverture au public.
- **Tests Automatisés et Audits de Charge :** Simulation de connexions simultanées massives pour vérifier la stabilité de votre infrastructure lors de vos pics de trafic ou campagnes publicitaires.
- **Sauvegardes et Monitoring 24h/24 :** Systèmes d'alerte automatisés détectant toute anomalie de service avec intervention immédiate de nos équipes d'astreinte.

---

## Conclusion

Investir dans une infrastructure web ou mobile sur-mesure au Burkina Faso représente un levier stratégique majeur pour asseoir la crédibilité de votre marque, fidéliser vos clients et automatiser vos encaissements en FCFA. En choisissant des technologies modernes, sécurisées et adaptées aux contraintes de connectivité locales, votre entreprise s'assure un avantage compétitif durable face à la concurrence.

**BAROUBA GROUP** met son pôle d'ingénieurs logiciels, de concepteurs UI/UX et d'experts en cybersécurité au service de vos ambitions numériques. De la rédaction du cahier des charges jusqu'à la mise en production et la maintenance évolutive, nous bâtissons les fondations technologiques de votre succès à Ouagadougou, Bobo-Dioulasso et dans tout l'espace UEMOA.

---

## Questions Fréquentes (FAQ)

### Comment fonctionne le paiement par Moov Money sur un site web au Burkina ?
Le client saisit son numéro de téléphone Moov Africa sur la boutique en ligne. Il reçoit instantanément une notification Push USSD sur l'écran de son mobile lui demandant de saisir son code PIN secret pour autoriser le prélèvement.

### Quelles sont les pièces nécessaires pour ouvrir un compte marchand Moov Money ?
Il faut fournir une copie du registre de commerce (RCCM), le numéro IFU, la pièce d'identité du dirigeant et un relevé d'identité bancaire (RIB) de l'entreprise pour les reversements.

### Quel est le délai moyen de livraison d'un projet web ou mobile par BAROUBA GROUP à Ouaga ?
Le calendrier type s'étend de 2 à 3 semaines pour un site vitrine professionnel haute performance, et de 4 à 8 semaines pour une plateforme e-commerce avancée ou une application mobile Flutter sur-mesure.

### Comment assurez-vous la compatibilité avec les connexions Internet lentes au Burkina ?
Nous concevons nos architectures avec Next.js et des technologies de rendu statique optimisées, complétées par la mise en cache locale (Service Workers). Les pages s'affichent instantanément même sur les réseaux mobiles 3G instables.

### Comment s'effectue l'intégration des passerelles Orange Money, Wave et Moov Money ?
BAROUBA GROUP connecte directement les APIs officielles sécurisées des opérateurs télécoms et agrégateurs régionaux avec gestion des webhooks d'encaissement et confirmation instantanée par SMS aux clients.

### L'entreprise est-elle propriétaire du code source et de la base de données ?
Oui, contractuellement. À la livraison finale du projet et après règlement, BAROUBA GROUP transfère l'intégralité des droits de propriété intellectuelle, des dépôts Git et des accès serveurs à votre entreprise.

### Balisage Données Structurées Schema.org (FAQPage)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment fonctionne le paiement par Moov Money sur un site web au Burkina ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le client saisit son numéro de téléphone Moov Africa sur la boutique en ligne. Il reçoit instantanément une notification Push USSD sur l'écran de son mobile lui demandant de saisir son code PIN secret pour autoriser le prélèvement."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les pièces nécessaires pour ouvrir un compte marchand Moov Money ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il faut fournir une copie du registre de commerce (RCCM), le numéro IFU, la pièce d'identité du dirigeant et un relevé d'identité bancaire (RIB) de l'entreprise pour les reversements."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le délai moyen de livraison d'un projet web ou mobile par BAROUBA GROUP à Ouaga ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le calendrier type s'étend de 2 à 3 semaines pour un site vitrine professionnel haute performance, et de 4 à 8 semaines pour une plateforme e-commerce avancée ou une application mobile Flutter sur-mesure."
      }
    },
    {
      "@type": "Question",
      "name": "Comment assurez-vous la compatibilité avec les connexions Internet lentes au Burkina ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous concevons nos architectures avec Next.js et des technologies de rendu statique optimisées, complétées par la mise en cache locale (Service Workers). Les pages s'affichent instantanément même sur les réseaux mobiles 3G instables."
      }
    },
    {
      "@type": "Question",
      "name": "Comment s'effectue l'intégration des passerelles Orange Money, Wave et Moov Money ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BAROUBA GROUP connecte directement les APIs officielles sécurisées des opérateurs télécoms et agrégateurs régionaux avec gestion des webhooks d'encaissement et confirmation instantanée par SMS aux clients."
      }
    },
    {
      "@type": "Question",
      "name": "L'entreprise est-elle propriétaire du code source et de la base de données ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, contractuellement. À la livraison finale du projet et après règlement, BAROUBA GROUP transfère l'intégralité des droits de propriété intellectuelle, des dépôts Git et des accès serveurs à votre entreprise."
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
      "name": "Comment fonctionne le paiement par Moov Money sur un site web au Burkina ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le client saisit son numéro de téléphone Moov Africa sur la boutique en ligne. Il reçoit instantanément une notification Push USSD sur l'écran de son mobile lui demandant de saisir son code PIN secret pour autoriser le prélèvement."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les pièces nécessaires pour ouvrir un compte marchand Moov Money ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il faut fournir une copie du registre de commerce (RCCM), le numéro IFU, la pièce d'identité du dirigeant et un relevé d'identité bancaire (RIB) de l'entreprise pour les reversements."
      }
    },
    {
      "@type": "Question",
      "name": "Quel est le délai moyen de livraison d'un projet web ou mobile par BAROUBA GROUP à Ouaga ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le calendrier type s'étend de 2 à 3 semaines pour un site vitrine professionnel haute performance, et de 4 à 8 semaines pour une plateforme e-commerce avancée ou une application mobile Flutter sur-mesure."
      }
    },
    {
      "@type": "Question",
      "name": "Comment assurez-vous la compatibilité avec les connexions Internet lentes au Burkina ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous concevons nos architectures avec Next.js et des technologies de rendu statique optimisées, complétées par la mise en cache locale (Service Workers). Les pages s'affichent instantanément même sur les réseaux mobiles 3G instables."
      }
    },
    {
      "@type": "Question",
      "name": "Comment s'effectue l'intégration des passerelles Orange Money, Wave et Moov Money ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BAROUBA GROUP connecte directement les APIs officielles sécurisées des opérateurs télécoms et agrégateurs régionaux avec gestion des webhooks d'encaissement et confirmation instantanée par SMS aux clients."
      }
    },
    {
      "@type": "Question",
      "name": "L'entreprise est-elle propriétaire du code source et de la base de données ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, contractuellement. À la livraison finale du projet et après règlement, BAROUBA GROUP transfère l'intégralité des droits de propriété intellectuelle, des dépôts Git et des accès serveurs à votre entreprise."
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
