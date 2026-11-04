const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/SEO/automatisation-et-agents-ia';
const files = fs.readdirSync(dir).filter(f => /^\d{3}-.*\.md$/.test(f)).sort();

// Domain-specific additional FAQ questions and answers by cluster
const clusterFaqAdditions = {
  1: [ // Fondations No-code, n8n, Make, CIL
    {
      q: "Quelles sont les compétences informatiques minimales requises pour gérer ces automatisations en interne ?",
      a: "Aucune compétence en programmation n'est requise pour vos équipes au quotidien. Grâce aux interfaces no-code modernes déployées par BAROUBA GROUP et à nos formations pratiques, vos gestionnaires apprennent à suivre les tableaux de bord et exécuter les routines courantes en moins de 48 heures."
    },
    {
      q: "Est-il possible d'interconnecter des logiciels anciens ou spécifiques développés en local ?",
      a: "Oui. Dès lors que votre logiciel existant dispose d'une base de données accessible (MySQL, PostgreSQL, SQL Server) ou d'une possibilité d'export automatique de fichiers CSV/Excel, nous pouvons concevoir des passerelles d'automatisation sur-mesure pour synchroniser vos flux sans remplacer vos outils actuels."
    },
    {
      q: "Comment BAROUBA GROUP garantit-il la conformité avec la Commission de l'Informatique et des Libertés (CIL) ?",
      a: "Tous nos flux d'automatisation respectent rigoureusement la loi N°001-2021/AN du Burkina Faso. Nous mettons en œuvre le chiffrement des données au repos et en transit, l'anonymisation préalable des données personnelles et fournissons la documentation technique nécessaire pour vos déclarations réglementaires auprès de la CIL."
    }
  ],
  2: [ // Chatbots WhatsApp IA
    {
      q: "Un client peut-il envoyer une photo ou un fichier PDF à l'agent IA WhatsApp ?",
      a: "Oui, parfaitement. Grâce aux capacités multimodales de nos agents IA connectés à la WhatsApp Business Cloud API, vos clients peuvent transmettre la photo d'un produit, un devis concurrent ou un bordereau de livraison. L'agent analyse le document par vision artificielle et formule une réponse contextuelle instantanée."
    },
    {
      q: "Comment l'agent IA gère-t-il les clients qui s'expriment en mooré ou en dioula par note vocale ?",
      a: "Nos architectures intègrent des modèles de transcription vocale Whisper couplés à des instructions d'IA adaptées au contexte linguistique burkinabè. L'agent comprend les requêtes audio formulées avec des expressions locales courantes et peut répondre soit par texte clair, soit par message vocal audio synthétisé."
    },
    {
      q: "Combien de conversations simultanées l'agent IA WhatsApp peut-il gérer lors d'un pic de promotions ?",
      a: "L'infrastructure cloud officielle Meta WhatsApp API n'a aucune limite humaine : votre agent conversationnel peut dialoguer simultanément avec plus de 1 000 clients à la même seconde sans aucun ralentissement ni message d'attente, garantissant zéro vente perdue pendant vos campagnes publicitaires à Ouagadougou."
    }
  ],
  3: [ // Encaissements & Mobile Money
    {
      q: "Que faire en cas d'indisponibilité temporaire du réseau Orange Money ou Wave ?",
      a: "Nos architectures intègrent une file d'attente résiliente (Dead-Letter Queue). Si l'API d'un opérateur télécom subit une coupure temporaire, la transaction est conservée en mémoire sécurisée et le système effectue des tentatives automatiques cadencées jusqu'au rétablissement complet du service, sans aucune perte de données."
    },
    {
      q: "La vérification automatique fonctionne-t-elle pour les paiements effectués dans d'autres pays de l'UEMOA ?",
      a: "Oui. Que votre client vous règle depuis Abidjan, Dakar, Lomé ou Cotonou via Wave ou Orange Money sous-régional, nos connecteurs vérifient les références de transactions internationales en FCFA avec la même vitesse et la même rigueur cryptographique qu'à Ouagadougou."
    },
    {
      q: "Quel est l'impact de l'automatisation sur les commissions bancaires et frais Mobile Money ?",
      a: "En automatisant les rapprochements et en centralisant vos encaissements sur des comptes marchands officiels, vous éliminez les pénalités de retards, supprimez les frais liés aux erreurs de double encaissement et optimisez vos seuils de transfert vers vos comptes bancaires d'entreprise."
    }
  ],
  4: [ // CRM, Devis Instantanés, Ventes
    {
      q: "Combien de temps faut-il pour intégrer notre catalogue de 500 références dans le système de devis automatique ?",
      a: "L'intégration s'effectue généralement en 3 à 5 jours ouvrés à partir de vos fichiers Excel ou fiches produits existants. Nos scripts normalisent vos descriptions, vos variantes techniques et vos prix en FCFA pour les rendre immédiatement exploitables par l'agent de génération de devis."
    },
    {
      q: "Les devis générés automatiquement sont-ils juridiquement valables au Burkina Faso ?",
      a: "Absolument. Les devis édités au format PDF intègrent l'ensemble des mentions légales obligatoires (IFU, RCCM, division fiscale de rattachement DGI, coordonnées complètes, conditions générales de vente et validité dans le temps), avec la possibilité d'ajouter une signature numérique certifiée."
    },
    {
      q: "Peut-on attribuer automatiquement les leads qualifiés à des commerciaux spécifiques selon les quartiers de Ouaga ?",
      a: "Oui. Nos workflows n8n appliquent des règles de routage géographique et sectoriel : les demandes issues de Ouaga 2000 et Koulouba peuvent être orientées vers un commercial grands comptes, tandis que les demandes de Saaba ou Tampouy sont affectées aux équipes de proximité correspondantes."
    }
  ],
  5: [ // Service Client, SAV, Réclamations
    {
      q: "Comment l'agent IA réagit-il face à un client particulièrement agressif ou mécontent sur WhatsApp ?",
      a: "Nos modèles intègrent une analyse sémantique du sentiment en temps réel. Dès qu'un vocabulaire de colère ou d'exaspération est détecté, l'IA adopte un ton hautement diplomatique et déclenche immédiatement une alerte prioritaire pour transférer la conversation en direct au responsable du service client à Ouagadougou."
    },
    {
      q: "Peut-on centraliser sur le même écran les messages WhatsApp, Facebook Messenger et Instagram Direct ?",
      a: "Oui. Grâce à notre panneau de contrôle unifié omnicanal, l'ensemble des messages provenant de vos différentes pages et numéros convergent dans une boîte de réception unique, permettant à vos téléconseillers de répondre d'un seul endroit sans jongler entre plusieurs applications."
    },
    {
      q: "Comment mesurer le taux de satisfaction client (CSAT) après chaque résolution automatique ?",
      a: "À l'issue de chaque échange ou livraison, l'agent IA envoie automatiquement un micro-sondage sur WhatsApp (ex: note de 1 à 5 étoiles par simple clic). Les réponses alimentent en temps réel votre tableau de bord de direction générale pour suivre la qualité de service au jour le jour."
    }
  ],
  6: [ // Logistique, Stocks, Livraisons
    {
      q: "Comment le système gère-t-il les adresses imprécises ou les repères visuels habituels à Ouagadougou ?",
      a: "L'agent conversationnel demande systématiquement au client de partager sa position GPS WhatsApp en direct. Si le client préfère décrire un repère visuel (ex: *« À 200 mètres de la pharmacie de Saaba »*), l'IA extrait ces indications et les transmet directement sur le smartphone du livreur avec l'itinéraire cartographique optimisé."
    },
    {
      q: "Que se passe-t-il si un client refuse son colis au moment de la livraison au portail ?",
      a: "Le livreur clique sur le bouton « Livraison refusée » sur son interface WhatsApp dédiée en indiquant le motif (changement d'avis, absence, colis endommagé). Le système réintègre immédiatement l'article dans l'inventaire théorique et génère une alerte commerciale pour tenter un rattrapage bienveillant par téléphone."
    },
    {
      q: "L'automatisation logistique permet-elle de réduire la consommation de carburant de nos coursiers ?",
      a: "Absolument. En regroupant intelligemment les colis par zones géographiques (ex: lot groupé pour Gounghin et Pissy) et en éliminant les allers-retours inutiles dus à des clients absents grâce aux confirmations préalables sur WhatsApp, nos clients constatent une baisse moyenne de 25 à 35 % de leurs frais de carburant mensuels."
    }
  ],
  7: [ // Pré-comptabilité, Facturation DGI, Recouvrement
    {
      q: "L'archivage numérique de nos pièces comptables est-il accepté lors d'un contrôle fiscal de la DGI au Burkina ?",
      a: "Oui. Conformément aux dispositions de l'OHADA et du livre des procédures fiscales du Burkina Faso, l'archivage numérique horodaté et inaltérable des factures et quittances est pleinement recevable dès lors qu'il garantit la lisibilité et la traçabilité des pièces originales."
    },
    {
      q: "Comment le système calcule-t-il la marge nette réelle en tenant compte des frais de transport et de douane ?",
      a: "Nos algorithmes ventilent automatiquement les coûts logistiques globaux, droits de douane portuaires et frais d'approche sur chaque unité de produit vendue, permettant à la direction générale de connaître sa rentabilité nette au franc CFA près sur chaque facture émise."
    },
    {
      q: "Quel est le délai moyen d'encaissement des factures après mise en place des relances automatisées ?",
      a: "Dans la majorité des PME ouagalaises accompagnées par BAROUBA GROUP, le délai moyen de paiement (DSO) passe de 45 ou 60 jours à moins de 18 jours ouvrés, grâce aux relances WhatsApp graduées et diplomatiques envoyées 5 jours avant, le jour J et 3 jours après l'échéance."
    }
  ],
  8: [ // Agents IA Métiers
    {
      q: "Combien de temps faut-il pour calibrer un agent IA spécialisé dans notre secteur d'activité particulier ?",
      a: "Grâce à notre bibliothèque de modèles pré-paramétrés pour les métiers burkinabè (BTP, immobilier, santé, éducation, négociation), un agent sectoriel sur-mesure est généralement configuré, testé et déployé en 2 à 3 semaines par les ingénieurs de BAROUBA GROUP."
    },
    {
      q: "L'agent IA métier peut-il générer des contrats types personnalisés prêts à imprimer ?",
      a: "Oui. L'agent collecte les informations auprès de l'utilisateur (nom, CNIB, objet, montants en FCFA), applique le modèle juridique validé par votre direction et génère instantanément un document Word ou PDF formatté aux normes professionnelles."
    },
    {
      q: "Comment assurer la discrétion des dossiers pour les professions réglementées (avocats, médecins, notaires) ?",
      a: "Nous appliquons un cloisonnement cryptographique de niveau bancaire : les données sensibles sont traitées sur des serveurs privés dédiés, sans aucune fuite vers des modèles d'IA publics, et protégées par une politique stricte de droits d'accès par rôle (RBAC)."
    }
  ],
  9: [ // RAG, Mémoire d'Entreprise, SOP
    {
      q: "Nos collaborateurs sur le terrain peuvent-ils interroger la base de procédures sans ordinateur de bureau ?",
      a: "Oui, c'est l'un des plus grands atouts de notre architecture : toute la mémoire d'entreprise est interrogeable directement dans une conversation WhatsApp privée et sécurisée sur smartphone, par message texte ou note vocale audio."
    },
    {
      q: "Que se passe-t-il lorsqu'une procédure interne ou une grille de prix change en cours d'année ?",
      a: "Il suffit à votre responsable désigné de modifier la feuille de calcul ou de téléverser le nouveau document PDF sur l'espace d'administration : notre pipeline n8n met à jour l'index vectoriel en moins de 60 secondes sans nécessiter l'intervention d'un informaticien."
    },
    {
      q: "Comment garantir que l'IA ne divulgue pas des informations de direction aux stagiaires ou ouvriers ?",
      a: "Grâce au modèle RBAC (Role-Based Access Control) couplé à notre moteur vectoriel, chaque utilisateur n'accède qu'aux documents correspondant à son niveau d'habilitation hiérarchique. L'IA ne peut même pas mentionner l'existence d'un document confidentiel à un collaborateur non accrédité."
    }
  ],
  10: [ // ROI, Économie, Partenariat
    {
      q: "Quel est le délai moyen constaté pour récupérer l'intégralité du capital investi dans un projet BAROUBA GROUP ?",
      a: "Sur l'ensemble de nos déploiements récents au Burkina Faso, le délai d'amortissement moyen (Payback) s'établit entre 60 et 95 jours ouvrés, grâce aux économies salariales directes, à la fin des erreurs de caisse et aux ventes additionnelles conclues par nos agents conversationnels."
    },
    {
      q: "Proposez-vous des facilités de paiement échelonnées pour accompagner la trésorerie des PME ?",
      a: "Oui. Nos prestations sont structurées en forfaits transparents avec un règlement échelonné par jalons d'avancement (acompte, pré-production, mise en service définitive), permettant à nos clients d'autofinancer les étapes ultérieures grâce aux premiers gains de productivité générés."
    },
    {
      q: "Quelle garantie contractuelle de disponibilité offrez-vous après la mise en production ?",
      a: "Nos contrats d'infogérance et de maintenance proactive incluent un engagement de niveau de service (SLA) rigoureux avec prise en charge sous 15 minutes des incidents critiques et une surveillance continue 24/7 de vos serveurs et flux d'automatisation."
    }
  ]
};

function generateCleanConclusion(num, title, slug) {
  // Bespoke synthesis tailored directly to the article topic
  const cleanTitle = title.replace(/^#\s*/, '').trim();
  
  let p1 = "";
  let p2 = "";

  if (num <= 10) {
    p1 = `L'adoption méthodique de l'automatisation no-code et la structuration des flux numériques ne relèvent plus d'une option facultative pour les PME burkinabè : c'est le levier central qui sépare les organisations condamnées à subir l'épuisement de leurs équipes de celles qui bâtissent une croissance saine, rentable et pérenne. En éliminant les tâches manuelles chronophages et en sanctuarisant la conformité aux exigences de la CIL, vous protégez vos marges et sécurisez votre avenir sur le marché national.`;
    p2 = `En tant que pionnier de l'ingénierie no-code et de l'intégration n8n en Afrique de l'Ouest, **BAROUBA GROUP** met son expertise éprouvée au service de votre transformation numérique. Nos consultants et développeurs conçoivent des architectures logicielles fiables, souveraines et parfaitement adaptées aux réalités économiques et technologiques de Ouagadougou et de l'espace UEMOA.`;
  } else if (num <= 20) {
    p1 = `Le déploiement d'un agent d'intelligence artificielle sur la WhatsApp Business Cloud API transforme en profondeur votre capacité commerciale : là où une équipe humaine est bridée par les horaires d'ouverture et la fatigue, votre infrastructure conversationnelle accueille, qualifie et sert vos prospects 24 heures sur 24 avec une politesse constante et une rigueur irréprochable. Vous ne laissez plus aucune vente s'évaporer la nuit ou pendant les week-ends.`;
    p2 = `**BAROUBA GROUP** conçoit et déploie des écosystèmes WhatsApp IA clé en main, sécurisés et respectueux des politiques strictes de Meta pour garantir zéro interruption et zéro risque de bannissement. Nous vous accompagnons pour transformer votre numéro WhatsApp d'entreprise en une véritable force de vente automatisée au service de votre chiffre d'affaires.`;
  } else if (num <= 30) {
    p1 = `Dans un environnement économique où le paiement mobile est devenu la norme universelle, la sécurisation et l'automatisation des encaissements Mobile Money (Wave, Orange Money, Moov) constituent l'armure indispensable de votre trésorerie. Mettre fin aux fraudes par fausses captures d'écran et synchroniser vos caisses en temps réel avec votre comptabilité vous offre une sérénité financière absolue et une visibilité limpide sur chaque franc CFA encaissé.`;
    p2 = `Spécialiste des passerelles d'encaissement et de la réconciliation automatisée au Sahel, **BAROUBA GROUP** intègre des protocoles de vérification cryptographique infalsifiables directement au cœur de vos logiciels de vente. Nous vous aidons à bâtir une infrastructure financière robuste qui accélère vos flux de trésorerie sans aucune faille de sécurité.`;
  } else if (num <= 40) {
    p1 = `L'accélération de votre cycle de vente repose sur l'élimination systématique des frictions entre le premier contact du prospect et la signature du contrat. En automatisant l'émission de devis chiffrés en 30 secondes, le suivi des relances et la mise à jour de vos outils CRM, vous offrez à vos clients une expérience d'une fluidité exemplaire qui surclasse instantanément la lenteur de vos concurrents traditionnels.`;
    p2 = `**BAROUBA GROUP** accompagne les directions commerciales et gérants d'entreprises burkinabè dans la refonte complète de leurs tunnels d'acquisition et de closing. Nous connectons vos campagnes publicitaires à des workflows de vente intelligents qui décuplent le taux de conversion de vos équipes et maximisent le retour sur chaque franc CFA investi.`;
  } else if (num <= 50) {
    p1 = `Un service client réactif, disponible à toute heure et capable de résoudre les réclamations sans délai est aujourd'hui le premier vecteur de fidélisation et de réputation pour une marque au Burkina Faso. L'intelligence artificielle ne remplace pas l'empathie humaine, elle lui prépare le terrain en absorbant l'ensemble des questions répétitives pour permettre à vos collaborateurs de se concentrer sur les dossiers à fort enjeu relationnel.`;
    p2 = `Grâce aux solutions omnicanales et aux agents d'assistance développés par **BAROUBA GROUP**, votre entreprise unifie ses communications WhatsApp, Messenger et Instagram dans un dispositif fluide et mesurable. Nous vous aidons à instaurer un standard de qualité de service d'exception qui transforme chaque interaction en opportunité de fidélisation durable.`;
  } else if (num <= 60) {
    p1 = `La maîtrise de la chaîne logistique, de la gestion des stocks à la livraison au portail du client, est le socle invisible de la rentabilité commerciale à Ouagadougou et dans l'UEMOA. Automatiser les tournées de coursiers, tracer les colis en temps réel et sécuriser les encaissements à la livraison élimine les pertes sèches et garantit une expérience d'achat d'une fiabilité irréprochable.`;
    p2 = `**BAROUBA GROUP** conçoit des architectures logicielles sur-mesure connectant vos entrepôts, vos flottes de livraison et vos canaux de vente sur smartphone. Nous vous accompagnons pour rationaliser vos coûts opérationnels de transport et faire de votre réactivité logistique un atout concurrentiel majeur.`;
  } else if (num <= 70) {
    p1 = `La pré-comptabilité automatisée, la conformité rigoureuse avec les factures normalisées de la DGI et la gestion proactive du recouvrement de créances sont les garants de la santé financière d'une entreprise prospère. En supprimant les saisies manuelles fastidieuses et les erreurs de TVA, vous préservez vos liquidités et assurez une parfaite sérénité face aux contrôles fiscaux.`;
    p2 = `Cabinet de référence en ingénierie de données et automatisation financière, **BAROUBA GROUP** met en place des pipelines d'extraction OCR, de synchronisation ERP et d'archivage numérique sécurisé. Nous offrons à vos directeurs administratifs et financiers des outils modernes pour piloter la rentabilité nette avec une précision chirurgicale.`;
  } else if (num <= 80) {
    p1 = `L'intégration d'agents d'intelligence artificielle configurés sur-mesure pour les spécificités de votre corps de métier (immobilier, BTP, santé, éducation, services juridiques ou maintenance) permet de décupler la productivité de vos experts sans alourdir votre masse salariale. Vous standardisez vos pratiques d'excellence et offrez à vos usagers des prestations d'une rapidité et d'une rigueur incomparables.`;
    p2 = `**BAROUBA GROUP** développe et entraîne des agents IA spécialisés qui s'intègrent nativement à vos flux de travail existants sur WhatsApp et le web. Nous vous accompagnons dans la formalisation de vos règles de gestion pour concevoir des copilotes métier qui valorisent le savoir-faire de vos équipes au quotidien.`;
  } else if (num <= 90) {
    p1 = `La sanctuarisation du savoir-faire d'entreprise à travers une mémoire souveraine RAG et des procédures numériques vivantes met définitivement votre organisation à l'abri des pertes de compétences et du turn-over. Vos collaborateurs, du nouvel arrivant au cadre dirigeant, accèdent instantanément à la bonne information vérifiée, éliminant les erreurs et accélérant chaque prise de décision stratégique.`;
    p2 = `Pionnier des architectures de recherche vectorielle et de mémoire d'entreprise souveraine au Burkina Faso, **BAROUBA GROUP** déploie des systèmes RAG sécurisés et étanches garantissant le zéro hallucination et le cloisonnement strict des accès. Nous vous aidons à transformer votre patrimoine documentaire en un actif technologique à très forte valeur ajoutée.`;
  } else {
    p1 = `L'automatisation intelligente des processus métier et le déploiement d'agents IA ne représentent pas un coût technologique accessoire, mais le programme d'investissement le plus rentable et le plus protecteur pour une entreprise burkinabè moderne. En mesurant avec rigueur le retour sur investissement et en conduisant le changement avec bienveillance, vous bâtissez une organisation agile, respectée et prête à dominer son secteur dans l'espace UEMOA.`;
    p2 = `**BAROUBA GROUP**, cabinet leader en ingénierie de l'automatisation et déploiement d'IA en Afrique de l'Ouest, est le partenaire stratégique des dirigeants qui refusent l'immobilisme. Nous mettons nos équipes d'ingénieurs basées localement à votre service pour concevoir, déployer et maintenir vos infrastructures technologiques avec un engagement d'excellence absolu.`;
  }

  return {
    heading: `## Conclusion : Réussir Votre Transformation Technologique avec Lucidité`,
    body: `${p1}\n\n${p2}`
  };
}

let updatedCount = 0;

for (const f of files) {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  const num = parseInt(f.slice(0, 3), 10);
  const clusterNum = Math.ceil(num / 10);

  // 1. Clean Title and ensure proper H1 format
  const titleMatch = content.match(/^#\s+(.*)$/m);
  const title = titleMatch ? titleMatch[1].trim() : f;

  // 2. Identify sections
  // We want to split out:
  // - Top header & snippet
  // - TOC
  // - Main body sections
  // - Conclusion
  // - Author/Contact block
  // - FAQ
  // - JSON-LD

  // Let's inspect where FAQ is
  const faqSplit = content.split(/## (?:Foire Aux Questions|Questions Fréquentes)(?: \(FAQ\))?/i);
  let beforeFaq = faqSplit[0];
  let faqAndAfter = faqSplit[1] || '';

  // Extract JSON-LD script if present
  let jsonScript = '';
  const scriptMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (scriptMatch) {
    jsonScript = scriptMatch[1].trim();
  }

  // In beforeFaq, let's locate the Conclusion heading
  // It could be ## Conclusion...
  const conclIdx = beforeFaq.search(/## Conclusion[^\n]*/i);
  let mainBody = beforeFaq;
  let oldConclusion = '';
  if (conclIdx !== -1) {
    mainBody = beforeFaq.substring(0, conclIdx).trim();
    oldConclusion = beforeFaq.substring(conclIdx).trim();
  }

  // Clean conclusion
  const cleanConcl = generateCleanConclusion(num, title, f);
  
  // Custom contact block (author and contacts)
  const contactBlock = `### Contact & Accompagnement Stratégique
- **Auteur & Directeur de publication :** Monsieur SAKO BAROU BEN OUMAR - BAROUBA GROUP
- **Téléphone / WhatsApp direct :** [+226 74 82 66 66](https://wa.me/22674826666?text=Bonjour%20BAROUBA%20GROUP,%20je%20souhaite%20un%20accompagnement%20strat%C3%A9gique%20pour%20mon%20entreprise)
- **Email professionnel :** baroubagroup@gmail.com
- **Site web officiel :** [https://www.baroubagroup.com](https://www.baroubagroup.com)
- **Siège social :** Ouagadougou, Burkina Faso`;

  // Parse existing FAQ questions from faqAndAfter
  // Look for ### questions
  const existingFaqs = [];
  const faqOnly = faqAndAfter.split(/<script/i)[0];
  const qBlocks = faqOnly.split(/### /).filter(b => b.trim().length > 0);
  
  for (const qb of qBlocks) {
    const lines = qb.trim().split('\n');
    const qName = lines[0].trim();
    const qAns = lines.slice(1).join('\n').trim();
    if (qName && qAns) {
      existingFaqs.push({ q: qName, a: qAns });
    }
  }

  // Ensure we have between 5 and 7 questions
  const additions = clusterFaqAdditions[clusterNum] || clusterFaqAdditions[1];
  let addIdx = 0;
  while (existingFaqs.length < 6 && addIdx < additions.length) {
    // Check if not already added
    const candidate = additions[addIdx];
    if (!existingFaqs.some(e => e.q.toLowerCase().includes(candidate.q.toLowerCase().slice(0, 20)))) {
      existingFaqs.push(candidate);
    }
    addIdx++;
  }

  // Rebuild Markdown FAQ
  let newFaqMd = `## Questions Fréquentes (FAQ)\n\n`;
  for (const item of existingFaqs) {
    newFaqMd += `### ${item.q}\n${item.a}\n\n`;
  }

  // Rebuild JSON-LD schema with ALL questions
  const jsonQuestions = existingFaqs.map(item => ({
    "@type": "Question",
    "name": item.q.replace(/[*_#]/g, '').trim(),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a.replace(/[*_#]/g, '').replace(/\n+/g, ' ').trim()
    }
  }));

  const newJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": jsonQuestions
  }, null, 2);

  // Clean TOC in mainBody
  // Let's find TOC and ensure each link is cleanly formatted
  // Also ensure conclusion link points to #conclusion and faq to #questions-frequentes-faq
  let cleanedMainBody = mainBody;
  const tocStart = cleanedMainBody.indexOf('## Table des Matières');
  if (tocStart !== -1) {
    const tocEnd = cleanedMainBody.indexOf('---', tocStart);
    if (tocEnd !== -1) {
      let tocText = cleanedMainBody.substring(tocStart, tocEnd);
      // Clean up lines
      const tocLines = tocText.split('\n')
        .map(l => l.trim())
        .filter(l => l.startsWith('- ['));
      
      // Filter out old conclusion / faq lines from TOC
      const cleanTocLines = tocLines.filter(l => !l.toLowerCase().includes('conclusion') && !l.toLowerCase().includes('faq') && !l.toLowerCase().includes('questions'));
      
      // Append standard clean conclusion & FAQ anchors
      cleanTocLines.push(`- [Conclusion](#conclusion)`);
      cleanTocLines.push(`- [Questions Fréquentes (FAQ)](#questions-frequentes-faq)`);

      const formattedToc = `## Table des Matières\n\n` + cleanTocLines.join('\n') + `\n\n`;
      cleanedMainBody = cleanedMainBody.substring(0, tocStart) + formattedToc + cleanedMainBody.substring(tocEnd);
    }
  }

  // Assemble full article
  const finalContent = `${cleanedMainBody.trim()}

---

## Conclusion

${cleanConcl.body}

${contactBlock}

---

${newFaqMd.trim()}

<script type="application/ld+json">
${newJsonLd}
</script>
`;

  fs.writeFileSync(filePath, finalContent, 'utf8');
  updatedCount++;
}

console.log(`Successfully upgraded ${updatedCount} articles!`);
