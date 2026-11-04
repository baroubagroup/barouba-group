const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/DELL/Desktop/SITE WEB BAROUBA GROUP/SEO/automatisation-et-agents-ia';
const files = fs.readdirSync(dir).filter(f => /^\d{3}-.*\.md$/.test(f)).sort();

const clusterFaqAdditions = {
  1: [
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
  2: [
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
  3: [
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
  4: [
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
  5: [
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
  6: [
    {
      q: "Comment le système gère-t-il les adresses imprécises ou les repères visuels habituels à Ouagadougou ?",
      a: "L'agent conversationnel demande systématiquement au client de partager sa position GPS WhatsApp en direct. Si le client préfère décrire un repère visuel (ex: à 200 mètres de la pharmacie de Saaba), l'IA extrait ces indications et les transmet directement sur le smartphone du livreur avec l'itinéraire cartographique optimisé."
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
  7: [
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
  8: [
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
  9: [
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
  10: [
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

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getConclusionSynthesis(num, title) {
  const t = title.toLowerCase();
  
  if (t.includes('onboarding') || t.includes('formation') || t.includes('salari')) {
    return {
      p1: `La réussite de l'accueil et de la montée en compétences d'un collaborateur ne peut plus reposer sur l'improvisation ou l'abandon informel. En confiant la transmission des savoirs fondamentaux, des règles de sécurité et des procédures d'entreprise à un agent IA tuteur sur WhatsApp, vous transformez une période d'essai incertaine en un parcours d'autonomie rapide, valorisant et mesurable. Vos équipes anciennes sont libérées des interruptions permanentes, tandis que vos nouvelles recrues délivrent leur plein potentiel productif en quelques jours seulement à Ouagadougou.`,
      p2: `**BAROUBA GROUP** conçoit et déploie des parcours d'onboarding intelligents et des tuteurs IA sur-mesure pour les PME et institutions burkinabè. Nos experts en ingénierie cognitive vous accompagnent pour structurer vos connaissances internes et bâtir un dispositif pédagogique moderne qui fidélise durablement vos talents.`
    };
  }
  
  if (t.includes('ocr') || t.includes('recu') || t.includes('facture') || t.includes('comptab') || t.includes('tva')) {
    return {
      p1: `La pré-comptabilité automatisée et la capture instantanée des reçus éliminent définitivement la hantise des pièces justificatives perdues et des clôtures fiscales tardives. En automatisant l'extraction de données par vision artificielle et la réconciliation SYSCOHADA, votre direction financière gagne une visibilité limpide sur ses charges réelles et sécurise chaque déclaration auprès de la Direction Générale des Impôts (DGI) du Burkina Faso.`,
      p2: `Cabinet de référence en automatisation de processus administratifs et financiers, **BAROUBA GROUP** déploie des architectures d'OCR et de réconciliation comptable robustes, conformes aux exigences de la CIL. Nous aidons les entreprises burkinabè à sanctuariser leur trésorerie et à fiabiliser leurs états de gestion au franc CFA près.`
    };
  }

  if (t.includes('mobile money') || t.includes('wave') || t.includes('orange money') || t.includes('caisse') || t.includes('paiement') || t.includes('encaissement')) {
    return {
      p1: `Dans un écosystème commercial où le paiement mobile représente l'immense majorité des transactions quotidiennes, sécuriser et automatiser ses encaissements Wave, Orange Money et Moov est un impératif de survie. Éliminer les fraudes par fausses captures d'écran et synchroniser vos caisses physiques et numériques en temps réel vous garantit une étanchéité financière absolue et la fin des litiges de comptoir.`,
      p2: `Spécialiste reconnu des passerelles de paiement et de l'interconnexion no-code au Sahel, **BAROUBA GROUP** intègre des verrous cryptographiques et des connecteurs automatisés au cœur de vos points de vente. Nous vous accompagnons pour accélérer vos encaissements et fluidifier l'expérience d'achat de vos clients dans tout le Burkina Faso.`
    };
  }

  if (t.includes('whatsapp') || t.includes('chatbot') || t.includes('conversationnel') || t.includes('lead') || t.includes('devis')) {
    return {
      p1: `Le commerce moderne à Ouagadougou et dans l'UEMOA se gagne sur le terrain de la réactivité conversationnelle. Déployer un agent d'intelligence artificielle sur la WhatsApp Business Cloud API permet à votre PME d'accueillir, de qualifier et d'éditer des devis chiffrés 24h/24 sans aucun délai d'attente. Vous captez les intentions d'achat au moment précis où le prospect est le plus motivé, transformant votre présence WhatsApp en un puissant moteur de vente continue.`,
      p2: `**BAROUBA GROUP** conçoit et déploie des agents conversationnels WhatsApp sur-mesure, entraînés sur vos catalogues produits et vos grilles tarifaires en FCFA. Nos ingénieurs vous garantissent une architecture officielle stable, respectueuse des normes Meta et immédiatement rentable pour votre entreprise.`
    };
  }

  if (t.includes('logistique') || t.includes('livraison') || t.includes('stock') || t.includes('colis') || t.includes('entrepot')) {
    return {
      p1: `La maîtrise des flux logistiques, du réapprovisionnement des dépôts jusqu'à la livraison finale au portail, constitue l'avantage concurrentiel décisif dans les grandes villes burkinabè. L'automatisation du dispatching, du suivi GPS des coursiers et de la confirmation préalable sur WhatsApp élimine les courses à vide, réduit les frais de carburant et garantit une satisfaction client irréprochable.`,
      p2: `Grâce aux solutions d'orchestration logistique développées par **BAROUBA GROUP**, vos équipes connectent en temps réel leurs entrepôts, leurs livreurs à moto et leurs clients finaux. Nous vous accompagnons pour rationaliser vos tournées et optimiser chaque kilomètre parcouru à Ouagadougou et Bobo-Dioulasso.`
    };
  }

  if (t.includes('rag') || t.includes('connaissance') || t.includes('memoire') || t.includes('sop') || t.includes('checklist') || t.includes('procedure')) {
    return {
      p1: `Centraliser et sanctuariser le capital intellectuel de votre entreprise dans une base de connaissances IA souveraine protège définitivement votre organisation contre la fuite des cerveaux et l'amnésie opérationnelle. Vos collaborateurs de terrain et cadres accèdent en quelques secondes à la procédure officielle exacte sur leur smartphone, assurant une conformité rigoureuse et une qualité de service constante.`,
      p2: `Pionnier des technologies RAG et de l'intelligence artificielle souveraine au Burkina Faso, **BAROUBA GROUP** conçoit des mémoires d'entreprise privées et sécurisées, conformes aux exigences de la CIL. Nous transformons vos documents administratifs et techniques en un copilote décisionnel performant au service de votre croissance.`
    };
  }

  if (t.includes('roi') || t.includes('cout') || t.includes('heures perdues') || t.includes('tarif') || t.includes('changement') || t.includes('feuille de route')) {
    return {
      p1: `L'automatisation intelligente des processus métier s'évalue avant tout par sa rentabilité économique directe : chaque heure de travail manuel répétitif éliminée est une ressource précieuse réinjectée dans la conquête commerciale et la relation client. En adoptant une méthode progressive, chiffrée en FCFA et menée dans le respect de l'adhésion des équipes, vous préparez votre entreprise à surclasser durablement la concurrence dans l'espace UEMOA.`,
      p2: `Cabinet conseil et intégrateur technologique de référence en Afrique de l'Ouest, **BAROUBA GROUP** s'engage à vos côtés avec des forfaits clairs et des obligations de résultats mesurables. Nous construisons pour vous des écosystèmes d'automatisation rentabilisés en quelques mois seulement.`
    };
  }

  // Generic fallback for others (Cluster 1, specific business niches)
  return {
    p1: `La modernisation de vos méthodes de travail et l'interconnexion automatisée de vos outils quotidiens sont les fondations indispensables de toute entreprise burkinabè visant l'excellence opérationnelle. En supprimant les doubles saisies, en fiabilisant les échanges de données et en sécurisant vos flux informatiques, vous offrez à votre organisation la vélocité nécessaire pour saisir chaque opportunité de marché.`,
    p2: `**BAROUBA GROUP** met son expertise d'ingénierie no-code, d'automatisation n8n et d'agents IA au service de vos ambitions. Nos équipes basées à Ouagadougou conçoivent des solutions sur-mesure, robustes et conformes aux réalités du terrain ouest-africain.`
  };
}

let cleanedCount = 0;

for (const f of files) {
  const filePath = path.join(dir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  const num = parseInt(f.slice(0, 3), 10);
  const clusterNum = Math.ceil(num / 10);

  // Split into raw sections starting with ##
  const rawSections = content.split(/\n(?=##\s+)/);

  // Section 0: Title & Snippet
  const sec0 = rawSections[0].trim();
  const titleMatch = sec0.match(/^#\s+(.*)$/m);
  const title = titleMatch ? titleMatch[1].trim() : f;

  // Extract core content sections
  // Must NOT be Table des Matières, Conclusion, or Questions Fréquentes / Foire Aux Questions
  const coreSections = rawSections.slice(1).filter(s => {
    const heading = s.split('\n')[0].trim();
    if (/^##\s+Table des Matières/i.test(heading)) return false;
    if (/^##\s+Conclusion/i.test(heading)) return false;
    if (/^##\s+(?:Questions Fréquentes|Foire Aux Questions)/i.test(heading)) return false;
    return true;
  });

  // Extract all FAQs from the document
  const extractedFaqs = [];
  // Find all ### questions
  const qMatches = content.split(/\n(?=###\s+)/);
  for (const block of qMatches) {
    if (!block.startsWith('###')) continue;
    const lines = block.trim().split('\n');
    const qRaw = lines[0].replace(/^###\s+/, '').trim();
    
    // Ignore non-FAQ headings
    if (qRaw.includes('Contactez') || qRaw.includes('Propos') || qRaw.includes('Contact &')) continue;
    if (!qRaw.includes('?') && qRaw.length < 15) continue;

    // Clean answer
    let ans = lines.slice(1).join('\n').trim();
    // remove any trailing ## or --- or <script
    ans = ans.split(/\n##\s+/)[0].split(/\n---/)[0].split(/<script/)[0].trim();
    
    // remove any stray conclusion text if present in answer
    const badConclIdx = ans.indexOf('Conclusion & Appel');
    if (badConclIdx !== -1) {
      ans = ans.substring(0, badConclIdx).trim();
    }
    const badConclIdx2 = ans.indexOf('## Conclusion');
    if (badConclIdx2 !== -1) {
      ans = ans.substring(0, badConclIdx2).trim();
    }

    if (qRaw && ans.length > 20) {
      // deduplicate
      if (!extractedFaqs.some(e => e.q.toLowerCase().slice(0, 25) === qRaw.toLowerCase().slice(0, 25))) {
        extractedFaqs.push({ q: qRaw, a: ans });
      }
    }
  }

  // Ensure between 5 and 7 questions
  const additions = clusterFaqAdditions[clusterNum] || clusterFaqAdditions[1];
  let addIdx = 0;
  while (extractedFaqs.length < 6 && addIdx < additions.length) {
    const candidate = additions[addIdx];
    if (!extractedFaqs.some(e => e.q.toLowerCase().includes(candidate.q.toLowerCase().slice(0, 20)))) {
      extractedFaqs.push(candidate);
    }
    addIdx++;
  }

  // Cap at 7 max if there are more
  const finalFaqs = extractedFaqs.slice(0, 7);

  // Generate clean bespoke conclusion
  const synth = getConclusionSynthesis(num, title);

  const contactBlock = `### Contact & Accompagnement Stratégique
- **Auteur & Directeur de publication :** Monsieur SAKO BAROU BEN OUMAR - BAROUBA GROUP
- **Téléphone / WhatsApp direct :** [+226 74 82 66 66](https://wa.me/22674826666?text=Bonjour%20BAROUBA%20GROUP,%20je%20souhaite%20un%20accompagnement%20strat%C3%A9gique%20pour%20mon%20entreprise)
- **Email professionnel :** baroubagroup@gmail.com
- **Site web officiel :** [https://www.baroubagroup.com](https://www.baroubagroup.com)
- **Siège social :** Ouagadougou, Burkina Faso`;

  // Build clean Table of Contents from coreSections
  const tocLinks = coreSections.map(s => {
    const headingLine = s.split('\n')[0].replace(/^##\s+/, '').trim();
    const anchor = slugify(headingLine);
    return `- [${headingLine}](#${anchor})`;
  });
  tocLinks.push(`- [Conclusion](#conclusion)`);
  tocLinks.push(`- [Questions Fréquentes (FAQ)](#questions-frequentes-faq)`);

  const tocMd = `## Table des Matières\n\n${tocLinks.join('\n')}`;

  // Build clean FAQ section
  let faqMd = `## Questions Fréquentes (FAQ)\n\n`;
  for (const item of finalFaqs) {
    faqMd += `### ${item.q}\n${item.a}\n\n`;
  }

  // Build clean Schema.org JSON-LD
  const jsonQuestions = finalFaqs.map(item => ({
    "@type": "Question",
    "name": item.q.replace(/[*_#]/g, '').trim(),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a.replace(/[*_#]/g, '').replace(/\n+/g, ' ').trim()
    }
  }));

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": jsonQuestions
  }, null, 2);

  // Clean coreSections: ensure each starts with ## and is cleanly trimmed
  const cleanedCoreBody = coreSections.map(s => s.trim()).join('\n\n');

  // Assemble full article
  const rebuiltArticle = `${sec0}

---

${tocMd}

---

${cleanedCoreBody}

---

## Conclusion

${synth.p1}

${synth.p2}

${contactBlock}

---

${faqMd.trim()}

<script type="application/ld+json">
${jsonLd}
</script>
`;

  fs.writeFileSync(filePath, rebuiltArticle, 'utf8');
  cleanedCount++;
}

console.log(`Rebuilt and standardized all ${cleanedCount} articles successfully!`);
