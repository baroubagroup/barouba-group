import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { 
  GraduationCap, 
  Clock, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';
import { mockFormations, WHATSAPP_NUMBER } from '@/lib/data';
import styles from './formations.module.css';

export const metadata: Metadata = {
  title: 'Formations Professionnelles Métiers du Web & IA | BAROUBA GROUP',
  description: 'Formations certifiantes au Burkina Faso : IA générative, Community Management, Next.js et Tunnels WhatsApp avec accompagnement direct.',
  alternates: {
    canonical: 'https://www.baroubagroup.com/formations',
  },
};

const formationsSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOccupationalProgram',
  '@id': 'https://www.baroubagroup.com/formations#program',
  name: 'Académie Professionnelle & Mentorat BAROUBA GROUP',
  description: 'Programme complet de formations et mentorat aux métiers du numérique en Afrique de l\'Ouest.',
  provider: {
    '@type': 'Organization',
    name: 'BAROUBA GROUP',
    url: 'https://www.baroubagroup.com',
  },
  educationalCredentialAwarded: 'Certificat d\'Aptitude Professionnelle BAROUBA GROUP',
  programType: 'Professional Training',
};

export default async function FormationsPage() {
  return (
    <div className={styles.page}>
      {/* Schema.org Educational Program */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formationsSchema) }}
      />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.badge}>
            <span className={styles.badgeDiamond}>◆</span>
            <span>ACADÉMIE PROFESSIONNELLE & MENTORAT BAROUBA GROUP</span>
          </div>
          <h1 className={styles.pageTitle}>
            Nous formons & nous accompagnons à <span className="text-gold-gradient">tous les métiers du numérique</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Marketing Digital, E-Commerce, Community Management (Gestion de Pages), Intelligence Artificielle et Développement Web. Nous refusons la théorie abstraite : chaque apprenant et chaque équipe bénéficie d'un suivi sur-mesure orienté résultats financiers concrets.
          </p>
        </div>
      </section>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="TRANSMISSION & MAÎTRISE PRATIQUE 2026" />

      {/* Pedagogical Explainer: How AI works simply (No jargon) */}
      <section className={styles.aiExplainerSection}>
        <div className="container">
          <div className={styles.explainerCard}>
            <div className={styles.explainerHeader}>
              <div className={styles.explainerBadge}>PÉDAGOGIE CLAIRE & SANS DÉTOUR</div>
              <h2 className={styles.explainerTitle}>Comment l'IA fonctionne-t-elle réellement ?</h2>
              <p className={styles.explainerIntro}>
                Pas besoin d’être mathématicien ou ingénieur pour comprendre l’IA. Voici comment elle arrive à reconnaître et générer des images, expliqué avec des analogies simples du quotidien.
              </p>
            </div>

            <div className={styles.analogyGrid}>
              <div className={styles.analogyCard}>
                <div className={styles.analogyNum}>01</div>
                <h3 className={styles.analogyHeading}>L'Analogie du Grand Peintre</h3>
                <p className={styles.analogyText}>
                  Imaginez un artiste qui aurait observé des millions de toiles et de photos tout au long de sa vie. Il sait exactement comment la lumière se pose sur un visage, à quoi ressemble le reflet de l’eau ou la texture d’un tissu traditionnel. L'IA a appris de la même manière : en observant des milliards d’exemples pour en comprendre les règles naturelles.
                </p>
              </div>

              <div className={styles.analogyCard}>
                <div className={styles.analogyNum}>02</div>
                <h3 className={styles.analogyHeading}>Comment elle Reconnaît une Image</h3>
                <p className={styles.analogyText}>
                  Quand vous montrez une photo à l’IA, elle ne lit pas des mots : elle repère des indices. Comme un détective qui remarque une forme de yeux, une courbure de nez ou des nuances de couleurs, l'IA combine ces détails en une fraction de seconde pour comprendre instantanément ce qui est représenté.
                </p>
              </div>

              <div className={styles.analogyCard}>
                <div className={styles.analogyNum}>03</div>
                <h3 className={styles.analogyHeading}>Comment elle Génère de Zéro</h3>
                <p className={styles.analogyText}>
                  Pour créer une image, l'IA commence par un brouillard complet de pixels aléatoires (comme une télévision sans signal). Puis, guidée par vos instructions simples, elle affine ce brouillard couche par couche, sculptant la matière pour révéler une image nette, lumineuse et réaliste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className={styles.formationsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.subBadge}>CURRICULUM CERTIFIÉ</div>
            <h2 className={styles.sectionTitle}>Nos Formations Opérationnelles</h2>
            <p className={styles.sectionDesc}>
              Chaque formation est conçue pour déboucher sur un livrable concret et mesurable dès les premières heures de cours.
            </p>
          </div>

          <div className={styles.grid}>
            {mockFormations.map((course) => {
              const waMsg = course.whatsappMessage || `Bonjour BAROUBA GROUP, je souhaite des informations sur la formation : ${course.title}.`;
              return (
                <div key={course._id} className={styles.formationCard}>
                  <div className={styles.cardTopRow}>
                    <span className={styles.levelBadge}>{course.level}</span>
                    <div className={styles.durationWrap}>
                      <Clock size={13} />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <h3 className={styles.fTitle}>{course.title}</h3>
                  <div className={styles.fTagline}>{course.tagline}</div>
                  <p className={styles.fDesc}>{course.shortDescription}</p>

                    <div className={styles.modulesList}>
                      {course.curriculum.map((mod, i) => (
                        <div key={i} className={styles.moduleRow}>
                          <span className={styles.moduleDiamond}>◆</span>
                          <span>{mod.title}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.cardPricingRow}>
                      <div className={styles.pricingBlock}>
                        <span className={styles.priceLabel}>Tarif de formation</span>
                        <span className={styles.priceValue}>{course.price}</span>
                      </div>
                    </div>

                    <div className={styles.cardActionsGroup}>
                      <Link
                        href={`/formations/${course.slug.current}` as any}
                        className={styles.viewCourseBtn}
                      >
                        <span>Voir le programme complet</span>
                        <ArrowRight size={16} />
                      </Link>

                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappEnrollBtn}
                      >
                        <MessageSquare size={16} />
                        <span>S’inscrire via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Section */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustIconWrap}>
                <ShieldCheck size={28} />
              </div>
              <h3 className={styles.trustHeading}>Garantie Pratique 100%</h3>
              <p className={styles.trustText}>
                Si vous appliquez la méthode et n'obtenez pas de résultat mesurable, nos formateurs interviennent personnellement sur votre cas.
              </p>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustIconWrap}>
                <Users size={28} />
              </div>
              <h3 className={styles.trustHeading}>Support Direct WhatsApp</h3>
              <p className={styles.trustText}>
                Posez vos questions techniques à nos experts en direct sans passer par des forums déserts ou des formulaires impersonnels.
              </p>
            </div>

            <div className={styles.trustCard}>
              <div className={styles.trustIconWrap}>
                <Award size={28} />
              </div>
              <h3 className={styles.trustHeading}>Attestation Barouba Group</h3>
              <p className={styles.trustText}>
                Un certificat professionnel attestant de vos compétences opérationnelles et de vos livrables validés par notre équipe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
