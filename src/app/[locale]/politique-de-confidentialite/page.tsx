import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { ShieldCheck, Lock, FileText, ArrowRight, Bookmark, Scale, Building2, Phone, Eye, CheckCircle2 } from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from '../cgv/cgv.module.css';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité & Protection des Données (CIL) — BAROUBA GROUP',
  description:
    'Politique de confidentialité et de protection des données personnelles de BAROUBA GROUP SARL au Burkina Faso. Conformité stricte à la loi N° 001-2021/AN, aux normes de la Commission de l’Informatique et des Libertés (CIL) et aux standards internationaux RGPD.',
  keywords: [
    'politique de confidentialité barouba group',
    'protection des données personnelles burkina faso',
    'conformité cil ouagadougou',
    'commission informatique libertés burkina',
    'mentions légales barouba group sarl',
  ],
  alternates: {
    canonical: 'https://www.baroubagroup.com/fr/politique-de-confidentialite',
  },
};

const SECTIONS = [
  {
    id: 'section-1',
    num: 'Article 01',
    title: 'Identité du Responsable de Traitement & Cadre Légal',
    content: (
      <>
        <p>
          La présente Politique de Confidentialité s’applique à l’ensemble des données à caractère personnel collectées et traitées par la société <strong>BAROUBA INTERNATIONAL GROUP SARL</strong>, Société à Responsabilité Limitée de droit burkinabè, immatriculée au Registre du Commerce et du Crédit Mobilier (RCCM) et ayant son siège social à <strong>Bobo-Dioulasso, Burkina Faso</strong> (ci-après <strong>« BAROUBA GROUP »</strong> ou le <strong>« Responsable de Traitement »</strong>).
        </p>
        <p>
          BAROUBA GROUP s’engage formellement à respecter la législation burkinabè en vigueur, notamment la <strong>Loi N° 001-2021/AN du 30 mars 2021</strong> portant protection des personnes à l’égard du traitement des données à caractère personnel au Burkina Faso, sous le contrôle de la <strong>Commission de l’Informatique et des Libertés (CIL)</strong>, ainsi que les standards internationaux de référence (Règlement Général sur la Protection des Données - RGPD pour nos clients de la diaspora et internationaux).
        </p>
        <div className={styles.highlightBox}>
          <strong>Responsable de Traitement :</strong> BAROUBA INTERNATIONAL GROUP SARL • <strong>Directeur Général :</strong> Monsieur SAKO BAROU BEN OUMAR • <strong>Siège :</strong> Bobo-Dioulasso, Burkina Faso • <strong>Email Délégué à la Protection :</strong> contact@baroubagroup.com.
        </div>
      </>
    ),
  },
  {
    id: 'section-2',
    num: 'Article 02',
    title: 'Données Collectées & Modalités de Recueil',
    content: (
      <>
        <p>
          Dans le cadre de ses activités d’ingénierie logicielle, de communication digitale, de publicité en ligne et de formation professionnelle, BAROUBA GROUP collecte uniquement les données strictement nécessaires aux finalités poursuivies (principe de minimisation) :
        </p>
        <ul>
          <li><strong>Données d’identification :</strong> Nom, prénom, dénomination sociale, numéro de téléphone (WhatsApp), adresse email professionnelle, ville et pays de résidence.</li>
          <li><strong>Données relatives aux demandes de devis :</strong> Nature du projet (création de site web, application, publicité, formation), budget estimé en FCFA, cahier des charges et délais souhaités.</li>
          <li><strong>Données de facturation :</strong> Coordonnées de facturation, numéro IFU, reçus de transaction Mobile Money (Orange Money, Moov Money, Wave) ou virements bancaires.</li>
          <li><strong>Données de formation :</strong> Niveau d’études, objectifs d’apprentissage, assiduité aux cours et évaluations pédagogiques de l’Academy.</li>
          <li><strong>Données techniques de navigation :</strong> Adresse IP anonymisée, métadonnées de connexion, type de navigateur et pages consultées à des fins exclusives de sécurité et d’optimisation technique.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'section-3',
    num: 'Article 03',
    title: 'Finalités des Traitements & Bases Légales',
    content: (
      <>
        <p>
          Chaque traitement de données à caractère personnel réalisé par BAROUBA GROUP repose sur une base juridique claire et légitime :
        </p>
        <ul>
          <li><strong>Exécution d’un contrat ou de mesures précontractuelles :</strong> Traitement des demandes de devis, cadrage technique, exécution des prestations d’ingénierie web, animation des campagnes publicitaires et gestion des inscriptions aux formations.</li>
          <li><strong>Obligations légales et fiscales :</strong> Tenue de la comptabilité selon le droit OHADA, émission de factures conformes aux exigences de la Direction Générale des Impôts (DGI) du Burkina Faso.</li>
          <li><strong>Consentement explicite :</strong> Réception de newsletters d’informations technologiques, inscription aux webinaires ou sollicitations commerciales ciblées.</li>
          <li><strong>Intérêt légitime :</strong> Prévention des fraudes aux paiements Mobile Money, sécurité de nos infrastructures logicielles et amélioration continue de l’expérience utilisateur.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'section-4',
    num: 'Article 04',
    title: 'Durée de Conservation des Données',
    content: (
      <>
        <p>
          BAROUBA GROUP applique des durées de conservation strictes et proportionnées :
        </p>
        <ul>
          <li><strong>Données de prospection commerciale :</strong> Conservées pendant un délai maximal de trois (3) ans à compter du dernier contact émanant du prospect.</li>
          <li><strong>Données clients et conventions de formation :</strong> Conservées pendant toute la durée de la relation contractuelle, puis archivées pendant cinq (5) ans à des fins probatoires.</li>
          <li><strong>Pièces comptables et factures :</strong> Conservées pendant dix (10) ans conformément aux dispositions de l’Acte Uniforme OHADA portant organisation et harmonisation des comptabilités des entreprises.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'section-5',
    num: 'Article 05',
    title: 'Sécurité, Chiffrement & Souveraineté des Données',
    content: (
      <>
        <p>
          La sécurité et l’intégrité des données sont au cœur des engagements d’ingénierie de BAROUBA GROUP. Nous mettons en œuvre des mesures techniques et organisationnelles de pointe :
        </p>
        <ul>
          <li>Chiffrement SSL/TLS de bout en bout de l’ensemble des flux web sur notre portail.</li>
          <li>Cloisonnement étanche des bases de données et accès restreint selon le principe du moindre privilège.</li>
          <li>Hébergement des flux d’automatisation critiques sur des serveurs privés virtuels (VPS) dédiés avec sauvegardes automatiques redondantes.</li>
          <li>Interdiction formelle et absolue de toute revente, cession ou location des données personnelles de nos clients et apprenants à des tiers.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'section-6',
    num: 'Article 06',
    title: 'Vos Droits & Modalités d’Exercice auprès de BAROUBA GROUP',
    content: (
      <>
        <p>
          Conformément aux dispositions de la <strong>Loi N° 001-2021/AN</strong> et aux normes CIL, tout utilisateur et client dispose des droits suivants sur ses données personnelles :
        </p>
        <ul>
          <li><strong>Droit d’accès et d’information :</strong> Vous avez le droit d’obtenir confirmation que vos données sont traitées et d’en recevoir copie complète.</li>
          <li><strong>Droit de rectification :</strong> Vous pouvez demander la mise à jour ou la correction de toute donnée inexacte ou incomplète.</li>
          <li><strong>Droit à l’effacement (Droit à l’oubli) :</strong> Vous pouvez exiger la suppression de vos données, sous réserve de nos obligations légales de conservation comptable et fiscale.</li>
          <li><strong>Droit d’opposition et de retrait du consentement :</strong> Vous pouvez vous opposer à tout moment à l’utilisation de vos coordonnées à des fins de prospection commerciale.</li>
        </ul>
        <p>
          Pour exercer l’un de ces droits, il vous suffit de nous adresser une demande écrite accompagnée d’une pièce d’identité valide :
        </p>
        <ul>
          <li><strong>Par Email :</strong> <a href="mailto:contact@baroubagroup.com">contact@baroubagroup.com</a></li>
          <li><strong>Par WhatsApp / Courrier :</strong> Direction Générale BAROUBA GROUP, Bobo-Dioulasso, Burkina Faso (+226 74 82 66 66).</li>
        </ul>
        <p>
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation officielle auprès de l’autorité nationale de contrôle : la <strong>Commission de l’Informatique et des Libertés (CIL)</strong> du Burkina Faso (Ouagadougou).
        </p>
      </>
    ),
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <div className={styles.page}>
      <AfricanPatternRibbon label="CONFORMITÉ LÉGALE CIL & SOUVERAINETÉ DES DONNÉES PERSONNELLES" />

      {/* Hero Header */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.badge}>
            <ShieldCheck size={16} /> Conformité Légale CIL &amp; Normes Internationales
          </div>
          <h1 className={styles.title}>
            Politique de Confidentialité &amp; Protection des Données Personnelles
          </h1>
          <p className={styles.subtitle}>
            Engagement officiel de <strong>BAROUBA INTERNATIONAL GROUP SARL</strong> pour la sécurité, la souveraineté et le respect strict des droits numériques de nos clients, apprenants et partenaires au Burkina Faso et à l’international.
          </p>

          <div className={styles.metaStrip}>
            <div className={styles.metaItem}>
              <Building2 size={16} />
              <span><strong>Siège :</strong> Bobo-Dioulasso, Burkina Faso</span>
            </div>
            <div className={styles.metaItem}>
              <Scale size={16} />
              <span><strong>Cadre :</strong> Loi N° 001-2021/AN &amp; Normes CIL</span>
            </div>
            <div className={styles.metaItem}>
              <Lock size={16} />
              <span><strong>Sécurité :</strong> Chiffrement TLS &amp; Souveraineté</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <section className={styles.bodySection}>
        <div className="container">
          <div className={styles.layout}>
            {/* Sidebar Navigation */}
            <aside className={styles.sidebar}>
              <div className={styles.tocCard}>
                <div className={styles.tocHeader}>
                  <Bookmark size={18} />
                  <span>Sommaire des Articles</span>
                </div>
                <nav className={styles.tocNav}>
                  {SECTIONS.map((sec) => (
                    <a key={sec.id} href={`#${sec.id}`} className={styles.tocLink}>
                      <span className={styles.tocNum}>{sec.num}</span>
                      <span className={styles.tocTitle}>{sec.title}</span>
                    </a>
                  ))}
                </nav>

                <div className={styles.tocCta}>
                  <p>Une question sur vos données personnelles ?</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(
                      'Bonjour BAROUBA GROUP, j’ai une question concernant la protection de mes données personnelles.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm"
                  >
                    <Phone size={14} /> Contact DPO WhatsApp
                  </a>
                </div>
              </div>
            </aside>

            {/* Articles List */}
            <main className={styles.mainContent}>
              <div className={styles.preamble}>
                <h2>Préambule &amp; Déclaration de Principe</h2>
                <p>
                  À l’ère de l’intelligence artificielle, de l’automatisation des processus et de l’hyper-connectivité commerciale, la protection des données privées n’est pas une simple formalité administrative : c’est un pilier fondamental de la confiance entre une entreprise d’ingénierie technologique et ses partenaires.
                </p>
                <p>
                  <strong>BAROUBA GROUP SARL</strong> place la souveraineté des données, l’éthique algorithmique et la transparence contractuelle au cœur de chacune de ses solutions numériques développées à Ouagadougou, Bobo-Dioulasso et dans la sous-région sahélienne.
                </p>
              </div>

              {SECTIONS.map((sec) => (
                <article key={sec.id} id={sec.id} className={styles.articleCard}>
                  <div className={styles.articleHeader}>
                    <span className={styles.articleBadge}>{sec.num}</span>
                    <h2 className={styles.articleHeading}>{sec.title}</h2>
                  </div>
                  <div className={styles.articleBody}>{sec.content}</div>
                </article>
              ))}

              {/* Bottom Card */}
              <div className={styles.acceptanceBox}>
                <div className={styles.acceptanceIcon}>
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3>Transparence &amp; Responsabilité Numérique</h3>
                  <p>
                    En naviguant sur ce portail et en utilisant les services de BAROUBA GROUP, vous bénéficiez d’une protection légale intégrale garantie par les instances réglementaires burkinabè et internationales.
                  </p>
                  <div className={styles.acceptanceActions}>
                    <Link href="/devis" className="btn btn--primary">
                      Demander un Devis Sécurisé <ArrowRight size={16} />
                    </Link>
                    <Link href="/cgv" className="btn btn--secondary">
                      Consulter les CGV
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
