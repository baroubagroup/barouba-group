import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { sanityClient, getProjectBySlug } from '@/lib/sanity';
import PageBuilderRenderer from '@/components/PageBuilder/PageBuilderRenderer';
import FadeIn from '@/components/animations/FadeIn';
import styles from './project.module.css';

interface ProjectPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = await getProjectBySlug(slug, locale);
  if (!project) return {};
  return {
    title: `${project.title} | Portfolio BAROUBA GROUP`,
    alternates: {
      canonical: `https://www.baroubagroup.com/portfolio/${project.slug}`,
    },
    description: project.description,
  };
}

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const project = await getProjectBySlug(slug, locale);

  if (!project) notFound();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <Link href="/portfolio" className={styles.backLink}>
            ← Retour au Portfolio
          </Link>
          
          <div className={styles.heroContent}>
            <FadeIn direction="up" delay={0.1}>
              <div className={styles.metaRow}>
                <span className="badge badge--accent">{project.domain}</span>
                {project.client && <span className={styles.client}>Client : {project.client}</span>}
                {project.completedAt && <span className={styles.date}>{new Date(project.completedAt).getFullYear()}</span>}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className={styles.title}>{project.title}</h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p className={styles.description}>{project.description}</p>
            </FadeIn>

            {project.link && (
              <FadeIn direction="up" delay={0.4}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg" style={{ marginTop: '2rem' }}>
                  Voir le projet en direct 🚀
                </a>
              </FadeIn>
            )}
          </div>
        </div>
      </div>

      {/* Image Showcase */}
      {project.mainImage && (
        <div className={`container ${styles.imageContainer}`}>
          <FadeIn delay={0.5}>
            <div className={styles.imageWrapper}>
              <Image src={project.mainImage} alt={project.title} fill className={styles.mainImage} />
            </div>
          </FadeIn>
        </div>
      )}

      {/* Project Details (Technologies & Results) */}
      <div className={`section ${styles.detailsSection}`}>
        <div className="container">
          <div className={styles.detailsGrid}>
            {project.technologies && project.technologies.length > 0 && (
              <div className={styles.techBox}>
                <h2 className={styles.boxTitle}>Technologies Utilisées</h2>
                <div className={styles.techList}>
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {project.results && (
              <div className={styles.resultsBox}>
                <h2 className={styles.boxTitle}>Résultats Obtenus</h2>
                <p className={styles.resultsText}>{project.results}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Page Builder Content (if any) */}
      {project.pageBuilder && project.pageBuilder.length > 0 && (
        <div className={styles.pageBuilderSection}>
          <PageBuilderRenderer blocks={project.pageBuilder} />
        </div>
      )}

      {/* Bottom CTA */}
      <div className={`section--sm ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Vous avez un projet similaire ?</h2>
            <p className={styles.ctaDesc}>Discutons de vos objectifs et voyons comment nous pouvons vous aider à les atteindre.</p>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Démarrer Mon Projet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
