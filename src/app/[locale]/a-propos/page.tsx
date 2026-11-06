import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { 
  ShieldCheck, 
  Building2, 
  MapPin, 
  Code2, 
  Cpu, 
  TrendingUp, 
  GraduationCap, 
  Lock, 
  Server, 
  ArrowRight, 
  FileCheck2, 
  UserCheck2, 
  Clock, 
  Sparkles,
  PhoneCall,
  Mail,
  Share2
} from 'lucide-react';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'À Propos de BAROUBA GROUP : Direction, Vision & Pôles',
  description: 'Fondé par Monsieur SAKO BAROU BEN OUMAR à Bobo-Dioulasso, BAROUBA GROUP propulse la transformation digitale des entreprises en Afrique.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/a-propos',
  },
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const TRUST_PILLARS = [
  {
    num: 'Pilier 01',
    title: 'Cadre Juridique OHADA & Sécurité Contractuelle',
    desc: 'Chaque collaboration fait l’objet d’un contrat commercial formel, d’un cahier des charges précis et d’un engagement de stricte confidentialité (NDA). Vos intérêts sont protégés par le droit des affaires OHADA.',
    icon: <FileCheck2 size={24} />
  },
  {
    num: 'Pilier 02',
    title: 'Cession Totale de Propriété Intellectuelle (100% à Vous)',
    desc: 'Nous rejetons le verrouillage propriétaire. Dès règlement de la mission, vous devenez l’unique propriétaire du code source, des accès dépôts Git, des bases de données et des créatifs publicitaires, sans redevance cachée.',
    icon: <Lock size={24} />
  },
  {
    num: 'Pilier 03',
    title: 'SLA Écrit & Vitesse Garanti (< 1,2s sur Mobile)',
    desc: 'Nos engagements techniques sont chiffrés : un score de performance Google PageSpeed supérieur à 90, un temps de chargement inférieur à 1,2 seconde sur réseau 4G local et une disponibilité serveur de 99,9%.',
    icon: <Clock size={24} />
  },
  {
    num: 'Pilier 04',
    title: 'Interlocuteur Unique Senior & Gouvernance Dédiée',
    desc: 'Vous n’êtes jamais renvoyé vers des intermédiaires inexpérimentés. Un directeur de projet senior dédié assure le pilotage de votre dossier avec des points de situation hebdomadaires et une ligne WhatsApp directe.',
    icon: <UserCheck2 size={24} />
  },
  {
    num: 'Pilier 05',
    title: 'Transfert de Compétences & Autonomie Opérationnelle',
    desc: 'Nous n’organisons pas votre dépendance. Chaque livraison s’accompagne de manuels d’utilisation et de sessions de formation pour rendre vos équipes parfaitement autonomes au quotidien.',
    icon: <GraduationCap size={24} />
  },
  {
    num: 'Pilier 06',
    title: 'Ancrage Sahélien & Rayonnement Panafricain',
    desc: 'Implantés au Burkina Faso (siège social à Bobo-Dioulasso et présence à Ouagadougou), nous comprenons intimement les habitudes de consommation, les contraintes de connectivité et les canaux de paiement (Mobile Money, WhatsApp) de l’espace UEMOA.',
    icon: <MapPin size={24} />
  }
];

const OPERATIONAL_POLES = [
  {
    tag: 'Pôle 01',
    title: 'Ingénierie Web & Plateformes Next.js 16',
    desc: 'Développement d’architectures web sur-mesure ultra-rapides, de tunnels e-commerce à forte conversion et de portails métiers sécurisés sans les lourdeurs des CMS obsolètes.',
  },
  {
    tag: 'Pôle 02',
    title: 'Intelligence Artificielle & Automatisation Métier',
    desc: 'Déploiement d’agents IA conversationnels connectés à l’API officielle WhatsApp Cloud, synchronisation de CRM et workflows automatisés éliminant les tâches répétitives.',
  },
  {
    tag: 'Pôle 03',
    title: 'Communication Digitale & Community Management',
    desc: 'Stratégie de marque institutionnelle, création de contenus percutants, animation active de communautés et modération proactive pour transformer l’attention en commandes concrètes.',
  },
  {
    tag: 'Pôle 04',
    title: 'Acquisition Publicitaire & Media Buying (CAPI)',
    desc: 'Pilotage de campagnes rentables sur Meta Ads, TikTok Ads et Google Ads avec suivi de conversion côté serveur (CAPI) pour contourner les bloqueurs et maximiser le retour sur investissement.',
  },
  {
    tag: 'Pôle 05',
    title: 'Académie & Formation Professionnelle d’Élite',
    desc: 'Programmes de montée en compétences pour dirigeants, cadres et professionnels du numérique : marketing digital de performance, IA générative appliquée et gestion de communautés.',
  },
  {
    tag: 'Pôle 06',
    title: 'Infogérance, Maintenance Cloud & Cybersécurité',
    desc: 'Surveillance proactive 24h/24, sauvegardes quotidiennes externalisées, pare-feu applicatif et astreinte technique d’urgence pour garantir la continuité totale de vos opérations.',
  }
];

export default async function AboutPage() {
  const whatsappBriefingUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BAROUBA GROUP SARL, je souhaite planifier un entretien stratégique de cadrage avec la direction.")}`;

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badgePill}>
            <Sparkles size={14} />
            <span>SOCIÉTÉ À RESPONSABILITÉ LIMITÉE (SARL) — SIÈGE SOCIAL À BOBO-DIOULASSO, BURKINA FASO</span>
          </div>

          <h1 className={styles.pageTitle}>
            L’Exigence Technologique au Service de la <span className="text-gold-gradient">Croissance Africaine & Internationale</span>
          </h1>

          <p className={styles.pageSubtitle}>
            BAROUBA GROUP SARL est un cabinet d’ingénierie logicielle, d’intelligence artificielle opérationnelle et d’accélération digitale. Nous concevons les outils numériques critiques des entreprises et institutions qui refusent les compromis sur la performance, la sécurité et la rentabilité commerciale.
          </p>

          {/* Credentials Bar */}
          <div className={styles.credentialsBar}>
            <div className={styles.credentialItem}>
              <Building2 size={24} className={styles.credentialIcon} />
              <div>
                <div className={styles.credentialTitle}>Société SARL Agréée</div>
                <div className={styles.credentialDesc}>Droit commercial OHADA & fiscalité en règle</div>
              </div>
            </div>

            <div className={styles.credentialItem}>
              <MapPin size={24} className={styles.credentialIcon} />
              <div>
                <div className={styles.credentialTitle}>Siège à Bobo-Dioulasso</div>
                <div className={styles.credentialDesc}>Bureaux à Bobo & Ouaga, couverture nationale et internationale</div>
              </div>
            </div>

            <div className={styles.credentialItem}>
              <ShieldCheck size={24} className={styles.credentialIcon} />
              <div>
                <div className={styles.credentialTitle}>100% Propriété Cédée</div>
                <div className={styles.credentialDesc}>Code source et accès intégraux remis au client</div>
              </div>
            </div>

            <div className={styles.credentialItem}>
              <Code2 size={24} className={styles.credentialIcon} />
              <div>
                <div className={styles.credentialTitle}>Standards Next.js 16</div>
                <div className={styles.credentialDesc}>Chargement &lt; 1,2s garanti sur réseau 4G</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* African Motif Ribbon */}
      <AfricanPatternRibbon label="NOTRE MANIFESTE FONDATEUR & NOS ENGAGEMENTS CONTRACTUELS" />

      {/* Manifesto Section */}
      <section className={styles.manifestoSection}>
        <div className="container">
          <div className={styles.manifestoCard}>
            <span className={styles.manifestoTag}>Manifeste Fondateur</span>
            <h2 className={styles.manifestoHeading}>
              Le Choix Délibéré de la Rigueur contre l’Amateurisme Digital
            </h2>

            <div className={styles.manifestoContent}>
              <div>
                <p className={styles.manifestoParagraph}>
                  Dans notre écosystème en plein essor, trop d’entrepreneurs et de directions générales ont été échaudés par des prestataires improvisés : sites web WordPress lourds qui mettent 9 secondes à charger sur smartphone, budgets publicitaires gaspillés dans des campagnes sans suivi de conversion, ou pseudo-stratégies de communication résumées à poster des images sans aucun objectif commercial.
                </p>
                <div className={styles.manifestoHighlightBox}>
                  « Nous refusons de livrer des plateformes gadgets qui flattent l’ego mais ne génèrent aucune commande. Pour nous, chaque ligne de code et chaque visuel doivent servir un objectif économique mesurable. »
                </div>
              </div>

              <div>
                <p className={styles.manifestoParagraph}>
                  Chez <strong>BAROUBA GROUP SARL</strong>, nous avons pris le contre-pied absolu de ces pratiques. Nous appliquons les standards d’ingénierie logicielle les plus rigoureux au monde (architectures Next.js 16 pré-compilées, typage strict TypeScript, intelligence artificielle connectée aux bases de données) tout en restant profondément ancrés dans les réalités de paiement, de connectivité et de culture de l’Afrique de l’Ouest.
                </p>
                <p className={styles.manifestoParagraph} style={{ marginTop: '1.25rem' }}>
                  Que vous lanciez une nouvelle marque e-commerce, digitalisiez les processus d’une institution ou formiez vos collaborateurs aux métiers du futur, vous trouvez en BAROUBA GROUP un partenaire juridique solide, transparent et engagé par contrat sur vos résultats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars Section */}
      <section className={styles.pillarsSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionTagGold}>Garanties Contractuelles</span>
            <h2 className={styles.sectionHeading}>Les 6 Piliers d’Inébranlable Confiance des Décideurs</h2>
            <p className={styles.sectionSub}>
              Ces principes ne sont pas des slogans publicitaires : ce sont des clauses opérationnelles intégrées à chacune de nos conventions de prestation.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.num} className={styles.pillarCard}>
                <span className={styles.pillarNumber}>{pillar.num}</span>
                <div className={styles.pillarIconWrapper}>{pillar.icon}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Poles Section */}
      <section className={styles.polesSection}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.sectionTagGold}>Organisation & Compétences</span>
            <h2 className={styles.sectionHeading}>Nos 6 Pôles d’Excellence Opérationnelle</h2>
            <p className={styles.sectionSub}>
              Une synergie de compétences transversales pour couvrir l’intégralité de votre chaîne de valeur numérique, de la conception logicielle à la conversion commerciale.
            </p>
          </div>

          <div className={styles.polesGrid}>
            {OPERATIONAL_POLES.map((pole) => (
              <div key={pole.tag} className={styles.poleCard}>
                <span className={styles.poleTag}>{pole.tag}</span>
                <h3 className={styles.poleTitle}>{pole.title}</h3>
                <p className={styles.poleDesc}>{pole.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>120+</div>
              <div className={styles.statLabel}>Plateformes & Outils Déployés</div>
              <div className={styles.statSub}>Sans interruption de service</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>3.8M+</div>
              <div className={styles.statLabel}>Utilisateurs & Prospects Touchés</div>
              <div className={styles.statSub}>À travers nos tunnels & campagnes</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>98.7%</div>
              <div className={styles.statLabel}>Taux de Renouvellement</div>
              <div className={styles.statSub}>Fidélité de nos clients entreprises</div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>&lt; 1.2s</div>
              <div className={styles.statLabel}>Temps Moyen de Chargement</div>
              <div className={styles.statSub}>Mesuré sur réseau mobile 4G local</div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Contact & Meeting Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactCard}>
            <div className={styles.contactGrid}>
              <div>
                <span className={styles.manifestoTag}>Échange Institutionnel</span>
                <h2 className={styles.contactTitle}>
                  Échangeons autour de vos enjeux de croissance
                </h2>
                <p className={styles.contactDesc}>
                  Que vous soyez dirigeant d’entreprise, responsable des systèmes d’information ou porteur d’un projet digital d’envergure, nous vous recevons à nos bureaux de Bobo-Dioulasso et Ouagadougou ou organisons une séance de travail confidentielle en visioconférence.
                </p>

                <div className={styles.contactMetaList}>
                  <div className={styles.contactMetaItem}>
                    <MapPin size={18} className={styles.contactMetaIcon} />
                    <span><strong>Siège Social :</strong> Bobo-Dioulasso, Burkina Faso | <strong>Bureaux :</strong> Bobo &amp; Ouaga (Interventions partout au Burkina &amp; International)</span>
                  </div>
                  <div className={styles.contactMetaItem}>
                    <Building2 size={18} className={styles.contactMetaIcon} />
                    <span><strong>Forme Juridique :</strong> Société à Responsabilité Limitée (SARL)</span>
                  </div>
                  <div className={styles.contactMetaItem}>
                    <PhoneCall size={18} className={styles.contactMetaIcon} />
                    <span><strong>Ligne WhatsApp Officielle :</strong> Échange direct et confidentiel avec la direction</span>
                  </div>
                  <div className={styles.contactMetaItem}>
                    <Mail size={18} className={styles.contactMetaIcon} />
                    <span><strong>Courriel Officiel :</strong> baroubagroup@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className={styles.contactActions}>
                <a
                  href={whatsappBriefingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimaryWhatsapp}
                >
                  <WhatsAppIcon />
                  <span>Planifier un cadrage sur WhatsApp</span>
                </a>

                <Link href="/contact" className={styles.btnSecondaryDevis}>
                  <span>Demander un devis formel</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
