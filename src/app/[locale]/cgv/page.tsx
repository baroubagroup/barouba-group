import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { ShieldCheck, FileText, ArrowRight, Bookmark, Scale, Building2, Phone } from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './cgv.module.css';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV) | BAROUBA GROUP',
  description: 'Cadre contractuel, garanties de livraison, propriété intellectuelle et engagements de service de BAROUBA GROUP SARL.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/cgv',
  },
};

const ARTICLES = [
  {
    id: 'article-1',
    num: 'Article 01',
    title: 'Identification de la Société & Cadre Juridique',
    content: (
      <>
        <p>
          Les présentes Conditions Générales de Vente (ci-après désignées les <strong>« CGV »</strong>) régissent l’ensemble des relations contractuelles entre la société <strong>BAROUBA INTERNATIONAL GROUP SARL</strong>, Société à Responsabilité Limitée de droit burkinabè, régie par l’Acte Uniforme de l’OHADA relatif au droit des sociétés commerciales et du GIE, ayant son siège social à <strong>Bobo-Dioulasso, Burkina Faso</strong> (ci-après désignée <strong>« BAROUBA GROUP SARL »</strong> ou le <strong>« Prestataire »</strong>), et toute personne physique ou morale, publique ou privée, contractant avec elle (ci-après désignée le <strong>« Client »</strong>).
        </p>
        <p>
          Toute commande de prestation de services, signature de devis, bon de commande ou convention de partenariat implique l’adhésion pleine, entière et sans réserve du Client aux présentes CGV, à l’exclusion de tout autre document émanant du Client, sauf dérogation expresse et écrite convenue entre les parties.
        </p>
        <div className={styles.highlightBox}>
          <strong>Raison Sociale :</strong> BAROUBA INTERNATIONAL GROUP SARL • <strong>Siège Social :</strong> Bobo-Dioulasso, Burkina Faso • <strong>Droit Applicable :</strong> Droit commercial burkinabè &amp; Traité OHADA.
        </div>
      </>
    ),
  },
  {
    id: 'article-2',
    num: 'Article 02',
    title: 'Objet & Périmètre d’Intervention',
    content: (
      <>
        <p>
          BAROUBA GROUP SARL intervient en qualité d’agence conseil d’ingénierie numérique et technologique. Les prestations couvertes par les présentes CGV comprennent notamment :
        </p>
        <ul>
          <li><strong>Ingénierie Web &amp; Logicielle :</strong> Conception, architecture et développement de sites vitrines, plateformes e-commerce, applications web haute performance Next.js et portails institutionnels.</li>
          <li><strong>Communication Digitale &amp; Social Selling :</strong> Stratégie de marque, Community Management, création audiovisuelle (Reels/TikTok), modération 7j/7 et tunnels de vente WhatsApp.</li>
          <li><strong>Acquisition &amp; Media Buying :</strong> Gestion stratégique et optimisation de campagnes publicitaires sur les régies Meta Ads (Facebook/Instagram), TikTok Ads, Google Ads et réseaux d’influence.</li>
          <li><strong>Intelligence Artificielle &amp; Automatisation :</strong> Déploiement d’agents IA conversationnels, automatisation des workflows métier (N8N, Make) et intégration CRM.</li>
          <li><strong>Formations Professionnelles :</strong> Cycles de renforcement de capacités et masterclasses pour les entreprises, cadres et professionnels du secteur numérique.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-3',
    num: 'Article 03',
    title: 'Devis, Bon de Commande & Formation du Contrat',
    content: (
      <>
        <p>
          Chaque projet fait l’objet d’un <strong>Devis Stratégique</strong> ou d’un <strong>Bon de Commande</strong> préalable établi par BAROUBA GROUP SARL, détaillant le périmètre fonctionnel, les livrables attendus, le calendrier prévisionnel et les modalités financières.
        </p>
        <p>
          La durée de validité des devis émis par le Prestataire est de <strong>trente (30) jours calendaires</strong> à compter de leur date d’émission. Passé ce délai, les tarifs et disponibilités d’équipe mentionnés sont susceptibles d’être réajustés.
        </p>
        <p>
          Le contrat est valablement formé dès réception par BAROUBA GROUP SARL du devis revêtu de la mention manuscrite <em>« Bon pour accord »</em>, de la date, de la signature du représentant légal du Client, du cachet de l’entreprise (le cas échéant), ou d’une validation électronique certifiée, accompagnée du règlement de l’acompte contractuel exigible.
        </p>
      </>
    ),
  },
  {
    id: 'article-4',
    num: 'Article 04',
    title: 'Tarifs, Devises & Conditions de Règlement',
    content: (
      <>
        <p>
          Les prix des prestations sont fixés sur mesure en fonction de l’envergure technique du projet et sont libellés en <strong>Francs CFA (XOF)</strong>. Pour les clients résidant hors de la zone UEMOA ou de la diaspora, les règlements peuvent être effectués en Euros (€) ou en Dollars américains ($) au cours légal de change en vigueur.
        </p>
        <p>
          Sauf stipulations particulières mentionnées sur le devis, les conditions de règlement standard sont échelonnées comme suit :
        </p>
        <ul>
          <li><strong>Projets de Développement Web &amp; Systèmes Logiciels :</strong>
            <ul>
              <li>50% d’acompte à la signature du bon de commande pour le lancement des travaux et la réservation des ingénieurs.</li>
              <li>30% d’échéance intermédiaire lors de la présentation de la version de recette (pré-production).</li>
              <li>20% de solde à la livraison définitive et à la mise en ligne opérationnelle sur le domaine du Client.</li>
            </ul>
          </li>
          <li><strong>Prestations Récurrentes (Community Management, Maintenance, Media Buying) :</strong>
            Facturation mensuelle payable d’avance, au plus tard le 5 de chaque mois de prestation entamé.
          </li>
          <li><strong>Formations Professionnelles :</strong>
            Règlement intégral exigible avant le début effectif de la session de formation.
          </li>
        </ul>
        <div className={styles.highlightBox}>
          <strong>Moyens de Paiement Autorisés :</strong> Virement bancaire sur le compte de BAROUBA GROUP SARL (Banque de la place à Ouagadougou), chèque de banque certifié, ou solutions Mobile Money marchandes officielles (Orange Money, Moov Money, Coris Money). Chaque paiement fait l’objet d’une quittance ou d’une facture normalisée conforme à la réglementation fiscale burkinabè.
        </div>
      </>
    ),
  },
  {
    id: 'article-5',
    num: 'Article 05',
    title: 'Délais d’Exécution & Collaboration Active du Client',
    content: (
      <>
        <p>
          Les délais de livraison communiqués par BAROUBA GROUP SARL sont donnés à titre indicatif et dépendent étroitement de la collaboration diligente du Client.
        </p>
        <p>
          Pour garantir le respect du planning, le Client s’engage expressément à :
        </p>
        <ul>
          <li>Désigner un interlocuteur unique habilité à prendre des décisions et à valider les étapes clés du projet.</li>
          <li>Fournir dans un délai maximum de <strong>sept (7) jours ouvrés</strong> l’ensemble des éléments nécessaires à la réalisation de la mission (chartes graphiques, textes officiels, visuels, accès aux comptes administrateurs, noms de domaine, fiches produits).</li>
          <li>Valider ou formuler ses remarques écrites sur les maquettes et livrables intermédiaires dans un délai maximum de <strong>cinq (5) jours ouvrés</strong> suivant leur notification.</li>
        </ul>
        <p>
          Tout retard imputable au Client dans la transmission des éléments requis ou dans la validation des jalons suspend automatiquement les délais contractuels d’une durée équivalente.
        </p>
      </>
    ),
  },
  {
    id: 'article-6',
    num: 'Article 06',
    title: 'Recette des Livrables & Garantie de Parfait Achèvement',
    content: (
      <>
        <p>
          À l’issue de la phase de développement ou de production, le Prestataire notifie au Client la livraison de la version de recette. Le Client dispose alors d’un délai de <strong>quinze (15) jours ouvrés</strong> pour procéder aux vérifications de conformité avec le cahier des charges validé.
        </p>
        <p>
          En l’absence de réserves écrites et motivées émises durant ce délai, la recette est réputée acquise de plein droit et sans réserve.
        </p>
        <p>
          <strong>Garantie Contractuelle :</strong> BAROUBA GROUP SARL accorde une garantie de <strong>trente (30) jours calendaires</strong> à compter de la recette définitive pour corriger gratuitement toute anomalie bloquante ou non-conformité technique liée au code développé par ses soins. Cette garantie ne couvre pas les altérations résultant d’une fausse manipulation du Client, d’une intrusion tierce non autorisée ou de mises à jour incompatibles appliquées par des tiers.
        </p>
      </>
    ),
  },
  {
    id: 'article-7',
    num: 'Article 07',
    title: 'Propriété Intellectuelle & Cession des Droits',
    content: (
      <>
        <p>
          Tous les éléments originaux créés spécifiquement pour le Client (maquettes graphiques exclusives, code source sur mesure, textes éditoriaux de campagne, vidéos montées) deviennent la propriété patrimoniale exclusive du Client <strong>sous la condition suspensive formelle du paiement intégral et effectif de toutes les factures dues</strong>.
        </p>
        <p>
          Jusqu’au règlement complet du prix convenu, BAROUBA GROUP SARL demeure le propriétaire exclusif de l’intégralité des réalisations, codes et créations produits.
        </p>
        <p>
          BAROUBA GROUP SARL conserve en toutes circonstances la propriété pleine et entière de ses méthodologies propriétaires, frameworks logiciels génériques réutilisables, composants d’infrastructure sous licence libre ou interne, et du savoir-faire développé en amont ou en dehors du contrat.
        </p>
        <p>
          Sauf avis contraire expressément notifié par écrit par le Client, BAROUBA GROUP SARL se réserve le droit de citer la réalisation à titre de référence commerciale dans son portfolio et ses supports promotionnels professionnels.
        </p>
      </>
    ),
  },
  {
    id: 'article-8',
    num: 'Article 08',
    title: 'Responsabilités & Clauses de Non-Responsabilité Tiers',
    content: (
      <>
        <p>
          BAROUBA GROUP SARL est soumise à une <strong>obligation de moyens renforcée</strong> dans le cadre de ses prestations de conseil stratégique, de marketing digital, de gestion de réseaux sociaux et d’achat publicitaire. Le Prestataire déploie l’état de l’art technique et méthodologique, mais ne saurait garantir un chiffre d’affaires précis ni des volumes de vente garantis, qui dépendent de facteurs extérieurs propres au marché et à l’offre du Client.
        </p>
        <p>
          BAROUBA GROUP SARL ne saurait en aucun cas être tenue responsable des désagréments suivants :
        </p>
        <ul>
          <li>Défaillances, blocages de comptes, suspensions arbitraires ou modifications d’algorithmes imputables aux régies tierces internationales (Meta / Facebook, Google, TikTok, LinkedIn, Apple, WhatsApp).</li>
          <li>Perturbations ou interruptions de service des opérateurs télécoms et fournisseurs d’accès internet locaux au Burkina Faso ou dans la sous-région.</li>
          <li>Pannes, indisponibilités serveur ou cyberattaques affectant les prestataires d’hébergement tiers sélectionnés par le Client.</li>
          <li>Contenus, images ou textes fournis par le Client qui enfreindraient les droits d’auteur ou la législation locale en vigueur.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'article-9',
    num: 'Article 09',
    title: 'Confidentialité & Secret Professionnel',
    content: (
      <>
        <p>
          Chacune des parties s’engage à conserver la plus stricte confidentialité sur toutes les informations stratégiques, financières, commerciales, technologiques et opérationnelles portées à sa connaissance dans le cadre de l’exécution du contrat.
        </p>
        <p>
          Cette obligation de secret demeure en vigueur pendant toute la durée du contrat et pour une période de <strong>trois (3) années</strong> suivant son expiration, quelle qu’en soit la cause. Les collaborateurs et sous-traitants éventuels de BAROUBA GROUP SARL sont soumis aux mêmes exigences de discrétion.
        </p>
      </>
    ),
  },
  {
    id: 'article-10',
    num: 'Article 10',
    title: 'Protection des Données Personnelles (Conformité CIL)',
    content: (
      <>
        <p>
          Dans le cadre de l’exploitation des plateformes web et des tunnels de vente, les parties s’engagent à respecter les dispositions de la <strong>loi n°001-2021/AN portant protection des personnes à l’égard du traitement des données à caractère personnel au Burkina Faso</strong>, sous l’autorité de la Commission de l’Informatique et des Libertés (CIL).
        </p>
        <p>
          Lorsque BAROUBA GROUP SARL intervient comme sous-traitant au sens de la réglementation sur les données, elle s’engage à ne traiter les données à caractère personnel que sur les instructions documentées du Client et à mettre en œuvre les mesures techniques et organisationnelles appropriées pour préserver la sécurité et la confidentialité desdites données.
        </p>
      </>
    ),
  },
  {
    id: 'article-11',
    num: 'Article 11',
    title: 'Force Majeure & Suspension d’Exécution',
    content: (
      <>
        <p>
          Aucune des parties ne pourra être tenue pour responsable d’un retard ou d’un manquement à ses obligations si celui-ci résulte d’un cas de <strong>Force Majeure</strong> au sens de la jurisprudence burkinabè et de l’Acte Uniforme OHADA.
        </p>
        <p>
          Sont expressément considérés comme cas de force majeure : les catastrophes naturelles, les incendies, les conflits armés, les actes terroristes, les émeutes, les pandémies entraînant des restrictions administratives, ainsi que les coupures nationales prolongées d’électricité ou de télécommunications indépendantes de la volonté des parties.
        </p>
        <p>
          La survenance d’un tel événement suspend les obligations contractuelles pendant sa durée. Si l’événement se poursuit au-delà de <strong>soixante (60) jours</strong>, le contrat pourra être résilié sans indemnité par l’une ou l’autre des parties.
        </p>
      </>
    ),
  },
  {
    id: 'article-12',
    num: 'Article 12',
    title: 'Résiliation, Droit Applicable & Juridiction Compétente',
    content: (
      <>
        <p>
          En cas de manquement grave par l’une des parties à l’une quelconque de ses obligations contractuelles, non réparé dans un délai de <strong>quinze (15) jours</strong> suivant une mise en demeure écrite notifiée par lettre recommandée ou exploit d’huissier, le contrat pourra être résilié de plein droit aux torts de la partie défaillante, sans préjudice des dommages et intérêts pouvant être réclamés.
        </p>
        <p>
          Les présentes CGV sont soumises exclusivement au <strong>Droit Burkinabè</strong> et aux dispositions du <strong>Traité relatif à l’Harmonisation du Droit des Affaires en Afrique (OHADA)</strong>.
        </p>
        <p>
          En cas de différend ou de contestation relatif à la validité, l’interprétation ou l’exécution du contrat, les parties s’engagent à rechercher prioritairement un <strong>règlement amiable</strong> dans un délai de trente (30) jours. 
        </p>
        <p>
          À défaut d’accord amiable à l’issue de ce délai, tout litige sera soumis à la <strong>compétence exclusive du Tribunal de Commerce de Ouagadougou (Burkina Faso)</strong>, y compris en cas de référé, de pluralité de défendeurs ou d’appel en garantie.
        </p>
      </>
    ),
  },
];

export default function CGVPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <Scale size={14} className={styles.badgeDiamond} />
            <span>CADRE LÉGAL &amp; CONTRACTUEL OFFICIEL</span>
          </div>

          <h1 className={styles.title}>
            Conditions Générales de Vente <span className="text-gold-gradient">(CGV)</span>
          </h1>

          <p className={styles.subtitle}>
            Règles contractuelles, modalités d’intervention, conditions de règlement et garanties applicables à l’ensemble des prestations numériques, technologiques et de formation dispensées par la société BAROUBA INTERNATIONAL GROUP SARL.
          </p>

          <div className={styles.legalNoticeBox}>
            <div className={styles.legalNoticeItem}>
              <Building2 size={16} className={styles.legalDot} />
              <span><strong>Forme :</strong> Société à Responsabilité Limitée (SARL)</span>
            </div>
            <div className={styles.legalNoticeItem}>
              <span className={styles.legalDot}>📍</span>
              <span><strong>Siège Social :</strong> Bobo-Dioulasso, Burkina Faso</span>
            </div>
            <div className={styles.legalNoticeItem}>
              <Scale size={16} className={styles.legalDot} />
              <span><strong>Juridiction :</strong> Droit Burkinabè &amp; OHADA</span>
            </div>
            <div className={styles.legalNoticeItem}>
              <span className={styles.legalDot}>📅</span>
              <span><strong>Dernière mise à jour :</strong> Janvier 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* African Geometric Ribbon Frieze */}
      <AfricanPatternRibbon label="TRANSPARENCE CONTRACTUELLE & SÉCURITÉ JURIDIQUE OHADA" />

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.layoutGrid}>
            {/* Sidebar Table of Contents */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarTitle}>
                <Bookmark size={15} />
                <span>Sommaire des Articles</span>
              </div>
              <nav aria-label="Table des matières des CGV">
                <ul className={styles.tocList}>
                  {ARTICLES.map((art) => (
                    <li key={art.id}>
                      <a href={`#${art.id}`} className={styles.tocLink}>
                        <strong>{art.num} :</strong> {art.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Articles List */}
            <main className={styles.articlesArea}>
              {ARTICLES.map((art) => (
                <article key={art.id} id={art.id} className={styles.articleCard}>
                  <header className={styles.articleHeader}>
                    <span className={styles.articleNumber}>{art.num}</span>
                    <h2 className={styles.articleTitle}>{art.title}</h2>
                  </header>
                  <div className={styles.articleBody}>{art.content}</div>
                </article>
              ))}

              {/* Direct Support & Legal Advice Box */}
              <div className={styles.contactBanner}>
                <div className={styles.contactInfo}>
                  <h3>Une question relative à nos conditions contractuelles ?</h3>
                  <p>
                    Notre direction juridique et commerciale est à votre disposition pour tout échange préalable ou aménagement de convention cadre.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BAROUBA GROUP SARL, j'ai une question concernant vos Conditions Générales de Vente (CGV).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactBtn}
                >
                  <WhatsAppIcon size={18} />
                  <span>Contacter la Direction</span>
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
