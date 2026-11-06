'use client';

import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  X, 
  BookOpen, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import styles from './TerritoryDossierModal.module.css';

interface TerritoryDossierModalProps {
  cityName: string;
  countryName: string;
  region: string;
  population?: string;
  historyAndGeo: string;
  economicDossier: string;
  digitalChallenges: string;
  localAnchors: string[];
}

export default function TerritoryDossierModal({
  cityName,
  countryName,
  region,
  population,
  historyAndGeo,
  economicDossier,
  digitalChallenges,
  localAnchors,
}: TerritoryDossierModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={styles.triggerBtn}
      >
        <BookOpen size={16} />
        <span>Lire la fiche territoriale complète de {cityName}</span>
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} role="dialog" aria-modal="true">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <div>
                <span className={styles.badge}>Dossier Territorial Officiel</span>
                <h3 className={styles.title}>
                  {cityName} — <span className={styles.goldText}>{countryName}</span>
                </h3>
                <p className={styles.subtitle}>
                  Région : <strong>{region}</strong> {population ? `• Bassin : ${population}` : ''}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={styles.closeBtn}
                aria-label="Fermer la fiche"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.body}>
              {/* 01. Histoire & Situation */}
              <div className={styles.section}>
                <div className={styles.sectionTitleRow}>
                  <MapPin size={18} className={styles.iconGold} />
                  <h4>Histoire & Situation Géographique</h4>
                </div>
                <p className={styles.text}>{historyAndGeo}</p>
              </div>

              {/* 02. Profil Économique Détaillé */}
              <div className={styles.section}>
                <div className={styles.sectionTitleRow}>
                  <TrendingUp size={18} className={styles.iconGold} />
                  <h4>Économie, Filières Maîtresses & Pôles de Commerce</h4>
                </div>
                <p className={styles.text}>{economicDossier}</p>
              </div>

              {/* 03. Enjeux Numériques */}
              <div className={styles.section}>
                <div className={styles.sectionTitleRow}>
                  <AlertTriangle size={18} className={styles.iconOrange} />
                  <h4>Enjeux Numériques & Besoins de Croissance</h4>
                </div>
                <p className={styles.text}>{digitalChallenges}</p>
              </div>

              {/* 04. Quartiers & Pôles */}
              <div className={styles.section}>
                <div className={styles.sectionTitleRow}>
                  <Building2 size={18} className={styles.iconGold} />
                  <h4>Grands Quartiers & Carrefours d&apos;Affaires</h4>
                </div>
                <div className={styles.anchorsWrap}>
                  {localAnchors.map((anchor, i) => (
                    <span key={i} className={styles.anchorPill}>
                      {anchor}
                    </span>
                  ))}
                </div>
              </div>

              {/* 05. Engagement BAROUBA GROUP */}
              <div className={styles.reassuranceBox}>
                <ShieldCheck size={24} className={styles.iconGreen} />
                <div>
                  <h5 className={styles.reassuranceTitle}>Engagement Opérationnel BAROUBA GROUP</h5>
                  <p className={styles.reassuranceDesc}>
                    Que vous soyez une institution, une PME ou un grand distributeur à {cityName}, 
                    BAROUBA GROUP garantit un accompagnement direct, des contrats SARL officiels et un déploiement 
                    technologique de niveau international sous 10 à 21 jours ouvrés.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.footer}>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={styles.closeActionBtn}
              >
                Fermer la fiche
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
