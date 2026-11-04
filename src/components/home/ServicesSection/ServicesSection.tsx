'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Share2,
  Bot, 
  TrendingUp, 
  Code2, 
  Target, 
  Filter, 
  GraduationCap, 
  ShoppingBag, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import SpotlightCard from '@/components/animations/SpotlightCard';
import styles from './ServicesSection.module.css';

const SERVICES = [
  {
    key: 'comm',
    slug: 'communication-digitale',
    title: 'Communication Digitale & Community Management',
    tagline: 'Pilotez votre image & faites grandir vos pages',
    desc: 'Gestion complète de vos pages réseaux sociaux (Facebook, Instagram, TikTok, LinkedIn) : création de visuels et vidéos percutants, animation active, modération et relation client 7j/7.',
    icon: Share2,
    accent: '#F5A623',
    featured: true,
    badge: 'Gestion de Pages'
  },
  {
    key: 'automation',
    slug: 'automatisation-agents-ia',
    title: 'Automatisation & Agents IA',
    tagline: 'Gagnez 20h+ par semaine par collaborateur',
    desc: "Déploiement d'agents autonomes, assistants conversationnels intelligents et synchronisation de workflows complexes (LLM, API, Make).",
    icon: Bot,
    accent: '#F5A623',
    featured: false,
    badge: 'Fleuron IA'
  },
  {
    key: 'dev',
    slug: 'developpement-sur-mesure',
    title: 'Développement Web & SaaS Next.js 16',
    tagline: 'Architecture moderne & réactivité absolue',
    desc: "Applications sur mesure, sites vitrines d'exception et plateformes cloud conçues avec Next.js 16, TypeScript et paiements locaux.",
    icon: Code2,
    accent: '#FFD700',
    featured: false,
    badge: 'Full Stack'
  },
  {
    key: 'ads',
    slug: 'publicite-digitale',
    title: 'Acquisition & Publicité 360°',
    tagline: 'Maximisez votre retour sur investissement publicitaire',
    desc: 'Stratégies Meta Ads, TikTok Ads et Google Ads avec créatifs haute performance pour générer des flux de prospects qualifiés.',
    icon: TrendingUp,
    accent: '#E67814',
    featured: false,
    badge: 'ROI Scalable'
  },
  {
    key: 'funnels',
    slug: 'tunnels-de-vente',
    title: 'Tunnels de Vente Haute Conversion',
    tagline: 'Transformez chaque clic en client fidèle',
    desc: 'Conception de funnels de conversion optimisés psychologiquement : copywriting percutant, upsells et tracking millimétré.',
    icon: Filter,
    accent: '#F5A623',
    featured: false,
    badge: 'Conversion'
  },
  {
    key: 'formation',
    slug: 'formation-accompagnement',
    title: 'Formations & Accompagnement (Tous Métiers du Web)',
    tagline: 'Nous formons et nous accompagnons vos équipes',
    desc: 'Programmes certifiants et coaching pratique : Marketing Digital, E-commerce, Community Management, IA et développement web avec suivi personnalisé.',
    icon: GraduationCap,
    accent: '#FFD700',
    featured: false,
    badge: 'Nous Accompagnons'
  },
  {
    key: 'marketing',
    slug: 'marketing-digital',
    title: 'Stratégie Marketing & Branding',
    tagline: 'Positionnez votre marque en référence incontournable',
    desc: 'Audit de marché, positionnement premium, création de contenu autoritaire et stratégie omnicanale pour dominer votre secteur.',
    icon: Target,
    accent: '#FFB834',
    featured: false,
    badge: 'Stratégie'
  },
  {
    key: 'ecommerce',
    slug: 'e-commerce',
    title: 'Écosystème E-Commerce Global',
    tagline: 'Boutiques scalables & expérience sans friction',
    desc: 'Création, optimisation et gestion de marques e-commerce internationales avec logistique et paiements sécurisés.',
    icon: ShoppingBag,
    accent: '#E67814',
    featured: false,
    badge: 'International'
  },
];

export default function ServicesSection() {
  const t = useTranslations('services');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.section} id="services" ref={ref}>
      {/* Ambient background glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={14} className={styles.badgeSparkle} />
            <span>SOLUTIONS & EXPERTISE SUR MESURE</span>
          </motion.div>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            L'Ingénierie Digitale Conçue pour <span className={styles.goldText}>Surclasser la Concurrence</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Chaque solution que nous concevons allie esthétique de pointe, architecture technique 
            robuste et retour sur investissement calculé.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className={styles.bentoGrid}>
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                className={`${styles.cardWrapper} ${service.featured ? styles.cardFeatured : ''}`}
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className={styles.card} spotlightColor={`${service.accent}25`}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconContainer} style={{ borderColor: `${service.accent}30` }}>
                        <Icon size={24} style={{ color: service.accent }} />
                      </div>
                      <span className={styles.tagBadge} style={{ color: service.accent, borderColor: `${service.accent}35` }}>
                        {service.badge}
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <div className={styles.cardTagline}>{service.tagline}</div>
                      <p className={styles.cardDesc}>{service.desc}</p>
                    </div>

                    <div className={styles.cardFooter}>
                      <Link href={`/services/${service.slug}` as any} className={styles.serviceLink}>
                        <span>En savoir plus</span>
                        <div className={styles.linkArrow}>
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
      </div>
    </section>
  );
}
