'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  Play, 
} from 'lucide-react';
import Hero3DBackground from './Hero3DBackground';
import Hero3DInteractiveGlobe from './Hero3DInteractiveGlobe';
import styles from './HeroShowcase.module.css';

export default function HeroShowcase() {
  return (
    <section className={styles.heroWrap}>
      {/* 01 // 3D WebGL Background: Golden Stardust Particles & Perspective Cyber-Grid */}
      <Hero3DBackground />

      {/* Ambient African-Tech Radiant Lighting & Bogolan Watermark */}
      <div className={styles.ambientCanvas} aria-hidden="true">
        <div className={styles.glowTop} />
        <div className={styles.glowSide} />
        {/* Authentic Bogolan Sacred Diamond Pattern Watermark */}
        <div className={styles.afroBogolanWatermark}>
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25">
              <rect x="200" y="20" width="254.5" height="254.5" transform="rotate(45 200 20)" />
              <rect x="200" y="60" width="198" height="198" transform="rotate(45 200 60)" strokeDasharray="6 6" />
              <rect x="200" y="100" width="141.4" height="141.4" transform="rotate(45 200 100)" />
              <circle cx="200" cy="200" r="30" />
              <circle cx="200" cy="200" r="10" fill="currentColor" fillOpacity="0.2" />
              <line x1="20" y1="200" x2="140" y2="200" strokeWidth="2" />
              <line x1="260" y1="200" x2="380" y2="200" strokeWidth="2" />
              <line x1="200" y1="20" x2="200" y2="140" strokeWidth="2" />
              <line x1="200" y1="260" x2="200" y2="380" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Authentic Human & Strategic Proposition */}
          <div className={styles.textCol}>
            {/* Brand Heritage Badge */}
            <div className={styles.badgeWrap}>
              <div className={styles.brandIconMini}>
                <Image 
                  src="/logo-or.svg" 
                  alt="Emblème Officiel BAROUBA" 
                  width={20} 
                  height={20} 
                  style={{ width: 'auto', height: '20px' }}
                  className={styles.emblemMini} 
                />
              </div>
              <span className={styles.badgeText}>BAROUBA • GROUPE TECHNOLOGIQUE & CABINET D'ÉLITE</span>
            </div>

            <h1 className={styles.mainHeading}>
              Communication Digitale, Plateformes Web, IA & Formations : <span className="text-gold-gradient">L'Écosystème Global</span> qui accélère votre croissance.
            </h1>

            <p className={styles.description}>
              <strong>BAROUBA</strong> (officiellement BAROUBA GROUP) est le partenaire technologique n°1 au Burkina Faso : de la gestion quotidienne de vos réseaux sociaux au développement d’applications Next.js 16 de pointe, en passant par le Media Buying rentable et la formation certifiante de vos équipes.
            </p>

            {/* Value Highlights with Authentic Geometry */}
            <div className={styles.chipsRow}>
              <div className={styles.chip}>
                <span className={styles.chipDiamond}>◆</span>
                <span>Communication &amp; Gestion de pages 7j/7</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipDiamond}>◆</span>
                <span>Plateformes Web Next.js 16 (&lt; 0.8s)</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipDiamond}>◆</span>
                <span>Publicités Meta &amp; TikTok rentables</span>
              </div>
              <div className={styles.chip}>
                <span className={styles.chipDiamond}>◆</span>
                <span>Nous formons &amp; nous accompagnons</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className={styles.ctaRow}>
              <a href="#solutions" className={styles.primaryBtn}>
                <span>Découvrir nos solutions</span>
                <div className={styles.arrowIcon}>
                  <ArrowUpRight size={18} />
                </div>
              </a>

              <a href="#etudes-de-cas" className={styles.secondaryBtn}>
                <Play size={15} className={styles.playIcon} />
                <span>Voir nos réalisations</span>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className={styles.trustBar}>
              <div className={styles.trustItem}>
                <span className={styles.trustVal}>2 000+</span>
                <span className={styles.trustLabel}>Clients & Partenaires</span>
              </div>
              <div className={styles.trustSeparator} />
              <div className={styles.trustItem}>
                <span className={styles.trustVal}>100+</span>
                <span className={styles.trustLabel}>Plateformes Déployées</span>
              </div>
              <div className={styles.trustSeparator} />
              <div className={styles.trustItem}>
                <span className={styles.trustVal}>98.5%</span>
                <span className={styles.trustLabel}>Satisfaction Vérifiée</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Afro-Tech Cyber Globe & Quantum Core */}
          <div className={styles.visualCol}>
            <Hero3DInteractiveGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
