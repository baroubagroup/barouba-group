'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  Code2, 
  Search, 
  TrendingUp, 
  Cpu, 
  MapPin, 
  ShieldCheck, 
  Briefcase,
  ChevronRight
} from 'lucide-react';
import PersonalCanvas3D from './PersonalCanvas3D';
import styles from './PersonalHero.module.css';

export default function PersonalHero() {
  return (
    <section className={styles.heroSection}>
      {/* 3D WebGL Background: Golden Stardust & Sacred Geometry */}
      <PersonalCanvas3D />

      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Left Column: Identity, Proposition & Value */}
          <div className={styles.contentCol}>
            {/* Status Pill */}
            <div className={styles.statusBadge}>
              <span className={styles.livePulse} />
              <span className={styles.liveDot} />
              <span className={styles.statusText}>CABINET EXÉCUTIF • DISPONIBILITÉ SÉLECTIVE</span>
            </div>

            {/* Sovereign Name */}
            <h1 className={styles.nameHeading}>
              <span className={styles.nameHighlight}>SAKO BAROU</span> BEN OUMAR
            </h1>

            {/* Triad Subtitle: 3 Key Hats */}
            <div className={styles.triadSubtitle}>
              <span>Stratège d'Affaires</span>
              <span className={styles.triadDot}>◆</span>
              <span>Consultant Exécutif</span>
              <span className={styles.triadDot}>◆</span>
              <span>Formateur & Mentor</span>
            </div>

            {/* Executive Bio Lead */}
            <p className={styles.bioLead}>
              Fondateur de <strong>BAROUBA INTERNATIONAL GROUP</strong>. J’accompagne les chefs d’entreprise, comités de direction et bâtisseurs d'Afrique de l'Ouest dans la <strong>structuration stratégique de leur croissance</strong>, le déploiement d’architectures technologiques souveraines (Web & Mobile Next.js, SEO Local, Media Buying) et l'automatisation par agents IA.
            </p>

            {/* Key Execution Pillars */}
            <div className={styles.pillarChips}>
              <div className={styles.chipItem}>
                <Code2 size={15} className={styles.chipIcon} />
                <span>Web & Apps Mobiles</span>
              </div>
              <div className={styles.chipItem}>
                <Search size={15} className={styles.chipIcon} />
                <span>SEO & Référencement Local</span>
              </div>
              <div className={styles.chipItem}>
                <TrendingUp size={15} className={styles.chipIcon} />
                <span>Marketing & Acquisition</span>
              </div>
              <div className={styles.chipItem}>
                <Cpu size={15} className={styles.chipIcon} />
                <span>Workflows & Agents IA</span>
              </div>
            </div>

            {/* CTAs */}
            <div className={styles.ctaGroup}>
              <a href="#cadrage" className={styles.primaryCta}>
                <span>Solliciter un Cadrage Stratégique</span>
                <ArrowUpRight size={18} />
              </a>

              <a href="#portfolio" className={styles.secondaryCta}>
                <Briefcase size={16} />
                <span>Consulter les Réalisations</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className={styles.trustBar}>
              <div className={styles.trustStat}>
                <div className={styles.trustNumber}>Burkina Faso</div>
                <div className={styles.trustLabel}>Bobo-Dioulasso & Ouaga</div>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustStat}>
                <div className={styles.trustNumber}>100% Cédé</div>
                <div className={styles.trustLabel}>Propriété intellectuelle</div>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustStat}>
                <div className={styles.trustNumber}>Direct VIP</div>
                <div className={styles.trustLabel}>Sans intermédiaire</div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Portrait Frame */}
          <div className={styles.portraitCol}>
            <div className={styles.portraitCard}>
              {/* Monogram Seal */}
              <div className={styles.monogramSeal}>
                <span>SBBO</span>
              </div>

              <div className={styles.portraitInner}>
                <Image
                  src="/images/sako-barou-ben-oumar.webp"
                  alt="Monsieur SAKO BAROU BEN OUMAR - Stratège, Consultant, Formateur"
                  fill
                  priority
                  className={styles.portraitImg}
                  sizes="(max-width: 768px) 320px, (max-width: 1200px) 400px, 440px"
                />

                {/* Glass Badge Overlay */}
                <div className={styles.portraitOverlay}>
                  <div className={styles.overlayRole}>Fondateur & Stratège Principal</div>
                  <div className={styles.overlayTitle}>M. Sako Barou Ben Oumar</div>
                  <div className={styles.overlayLocation}>
                    <MapPin size={12} color="var(--color-gold)" />
                    <span>Bobo-Dioulasso • Ouagadougou • UEMOA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
