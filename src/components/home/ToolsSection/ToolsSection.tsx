'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { 
  CreditCard, 
  GraduationCap, 
  Bot, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SpotlightCard from '@/components/animations/SpotlightCard';
import styles from './ToolsSection.module.css';

const SOLUTIONS_DATA = [
  {
    id: 'billing',
    title: 'Infrastructures Fintech & Paiements Sécurisés',
    tagline: 'Facturation automatisée & checkout sans friction',
    desc: 'Systèmes de paiement multi-devises, abonnements récurrents et tunnels conformes avec intégration Stripe et passerelles bancaires.',
    icon: CreditCard,
    accent: '#FFD700',
    techs: ['Next.js 16', 'Stripe API', 'Webhooks', 'Supabase Auth'],
    badge: 'Fintech'
  },
  {
    id: 'elearning',
    title: 'Plateformes LMS & Espaces Membres E-Learning',
    tagline: 'Expérience d’apprentissage type Udemy sur mesure',
    desc: 'Portails de cours vidéo haute définition, quiz interactifs, certificats automatisés et gestion fine des droits d’accès.',
    icon: GraduationCap,
    accent: '#F5A623',
    techs: ['React 19', 'PostgreSQL', 'CDN Vidéo', 'Prisma'],
    badge: 'EdTech'
  },
  {
    id: 'chatbot',
    title: 'Agents Conversationnels & Assistants Métier IA',
    tagline: 'Support client & qualification automatisés 24h/24',
    desc: 'Intégration d’agents intelligents formés sur votre documentation d’entreprise pour convertir vos visiteurs et soulager vos équipes.',
    icon: Bot,
    accent: '#E67814',
    techs: ['OpenAI GPT-4o', 'LangChain', 'Vector DB', 'Python API'],
    badge: 'IA Métier'
  }
];

export default function ToolsSection() {
  const t = useTranslations('tools_section');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section className={styles.section} id="tools" ref={sectionRef}>
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
            <span>ARCHITECTURES PRÊTES AU DÉPLOIEMENT</span>
          </motion.div>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Des Briques Technologiques <span className={styles.goldText}>Éprouvées & Scalables</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Pour accélérer le déploiement de vos projets sans réinventer la roue, nous combinons des 
            fondations logicielles de pointe hautement personnalisables.
          </motion.p>
        </div>

        {/* 3 Columns Grid */}
        <div className={styles.grid}>
          {SOLUTIONS_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className={styles.cardWrapper}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className={styles.card} spotlightColor={`${item.accent}20`}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardHeader}>
                      <div className={styles.iconBox} style={{ borderColor: `${item.accent}30` }}>
                        <Icon size={24} style={{ color: item.accent }} />
                      </div>
                      <span className={styles.tagBadge} style={{ color: item.accent, borderColor: `${item.accent}35` }}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <div className={styles.cardTagline}>{item.tagline}</div>
                    <p className={styles.cardDesc}>{item.desc}</p>

                    <div className={styles.techList}>
                      {item.techs.map((t) => (
                        <span key={t} className={styles.techPill}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={styles.cardFooter}>
                      <Link href="/solutions" className={styles.ctaLink}>
                        <span>Explorer la solution</span>
                        <div className={styles.arrowIcon}>
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
