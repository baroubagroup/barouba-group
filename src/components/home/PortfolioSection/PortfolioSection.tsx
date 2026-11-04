'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Globe
} from 'lucide-react';
import SpotlightCard from '@/components/animations/SpotlightCard';
import styles from './PortfolioSection.module.css';

const SHOWCASE_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Plateforme E-Commerce Haute Performance & Tunnels IA',
    client: 'Marque D2C Internationale',
    category: 'Architecture Web & Scale',
    results: '+240% de conversion • <0.8s temps de chargement',
    description: 'Refonte complète de l’écosystème de vente en ligne avec panier dynamique, upsells algorithmiques et synchronisation multidevise.',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind', 'Stripe', 'Supabase'],
    featured: true,
    accent: '#FFD700',
    typeIcon: Globe
  },
  {
    id: 'proj-2',
    title: 'Système SaaS de Gestion & Agents IA Autonomes',
    client: 'PME Logistique & Distribution',
    category: 'SaaS & Automatisation',
    results: '85% des opérations automatisées • 15h gagnées/semaine',
    description: 'Déploiement d’une suite logicielle sur mesure avec agents IA traitant commandes, facturation et dispatching en temps réel.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Redis'],
    featured: false,
    accent: '#F5A623',
    typeIcon: Cpu
  },
  {
    id: 'proj-3',
    title: 'Tunnel d’Acquisition & Masterclass Digitale',
    client: 'Cabinet de Conseil & Formation',
    category: 'Funnel & Acquisition 360°',
    results: 'ROAS x4.2 • 3 500+ inscrits qualifiés',
    description: 'Campagne de scaling publicitaire Meta & TikTok Ads articulée avec un tunnel interactif à très haute conversion.',
    technologies: ['Meta Ads', 'TikTok Pixel', 'Webhooks', 'Analytics V4'],
    featured: false,
    accent: '#E67814',
    typeIcon: TrendingUp
  }
];

export default function PortfolioSection() {
  const t = useTranslations('portfolio_section');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section className={styles.section} ref={sectionRef} id="portfolio">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={14} className={styles.badgeSparkle} />
            <span>RÉALISATIONS & ÉTUDES DE CAS</span>
          </motion.div>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Des Projets Conçus pour <span className={styles.goldText}>Générer des Résultats Tangibles</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Découvrez un aperçu des infrastructures web, systèmes intelligents et tunnels 
            d'acquisition déployés pour nos clients partenaires.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className={styles.grid}>
          {SHOWCASE_PROJECTS.map((project, index) => {
            const TypeIcon = project.typeIcon;
            return (
              <motion.div
                key={project.id}
                className={`${styles.cardWrapper} ${project.featured ? styles.featured : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className={styles.card} spotlightColor={`${project.accent}20`}>
                  <div className={styles.cardContent}>
                    {/* Top Meta */}
                    <div className={styles.cardTop}>
                      <div className={styles.categoryPill} style={{ borderColor: `${project.accent}35`, color: project.accent }}>
                        <TypeIcon size={14} />
                        <span>{project.category}</span>
                      </div>
                      <span className={styles.clientLabel}>{project.client}</span>
                    </div>

                    {/* Main title & desc */}
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>

                    {/* Verified Metrics Bar */}
                    <div className={styles.metricsBox}>
                      <CheckCircle2 size={16} className={styles.checkIcon} />
                      <span className={styles.resultsText}>{project.results}</span>
                    </div>

                    {/* Tech Stacks */}
                    <div className={styles.techStack}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action link */}
                    <div className={styles.cardFooter}>
                      <Link href="/portfolio" className={styles.viewLink}>
                        <span>Étude de cas détaillée</span>
                        <div className={styles.arrowWrap}>
                          <ArrowUpRight size={16} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action footer */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/portfolio" className={styles.seeMoreBtn}>
            <span>Découvrir l'ensemble de nos réalisations</span>
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
