'use client';

import React, { useState } from 'react';
import { 
  Send, 
  ShieldCheck, 
  Lock, 
  Clock, 
  MessageSquare, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './ExecutiveAdvisory.module.css';

export default function ExecutiveAdvisory() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [objective, setObjective] = useState('strategie-marche');
  const [details, setDetails] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const objectiveLabels: Record<string, string> = {
      'strategie-marche': 'Stratégie & Modèle Économique',
      'web-mobile': 'Développement Web & Mobile Next.js',
      'seo-local': 'SEO & Référencement Local',
      'acquisition-ads': 'Marketing & Acquisition (Media Buying)',
      'agents-ia': 'Workflows & Agents IA Métier',
      'formation-masterclass': 'Formation & Masterclass d’Équipe'
    };

    const cleanNumber = (WHATSAPP_NUMBER || '+22674826666').replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `*DEMANDE DE CADRAGE STRATÉGIQUE CONFIDENTIEL*\n` +
      `À l'attention de M. SAKO BAROU BEN OUMAR\n\n` +
      `• *Nom / Titre :* ${name || 'Non précisé'}\n` +
      `• *Entreprise / Organisation :* ${company || 'Non précisée'}\n` +
      `• *Pôle concerné :* ${objectiveLabels[objective] || objective}\n` +
      `• *Contexte & Défi :* ${details || 'Échange stratégique préliminaire'}\n\n` +
      `_Envoyé depuis le cabinet personnel (www.baroubagroup.com)_`
    );

    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
  };

  return (
    <section className={styles.section} id="cadrage">
      <div className={styles.container}>
        <div className={styles.boxWrap}>
          {/* Left Column: Guarantees & Philosophy */}
          <div className={styles.leftCol}>
            <div className={styles.eyebrow}>
              <ShieldCheck size={14} />
              <span>Protocole d'Échange Exécutif</span>
            </div>

            <h2 className={styles.heading}>
              Solliciter un Cadrage Stratégique <br />
              <span className={styles.goldText}>avec M. Sako Barou Ben Oumar.</span>
            </h2>

            <p className={styles.desc}>
              Chaque intervention est traitée avec le plus haut niveau d’exigence, d’indépendance et de discrétion professionnelle. Que vous ayez besoin d’un cadrage de croissance, d’une architecture logicielle de pointe ou d’un audit de vos systèmes, échangeons directement sur vos enjeux réels.
            </p>

            <div className={styles.guaranteesGrid}>
              <div className={styles.guaranteeRow}>
                <Lock size={18} className={styles.guaranteeIcon} />
                <span><strong>Stricte Confidentialité (NDA) :</strong> Vos données et modèles économiques sont protégés sous le cadre juridique OHADA.</span>
              </div>
              <div className={styles.guaranteeRow}>
                <Clock size={18} className={styles.guaranteeIcon} />
                <span><strong>Réponse sous 24h ouvrées :</strong> Étude préliminaire de votre demande et proposition d'un créneau d'échange direct.</span>
              </div>
              <div className={styles.guaranteeRow}>
                <CheckCircle2 size={18} className={styles.guaranteeIcon} />
                <span><strong>Zéro Démarche Agressive :</strong> Pas de pression commerciale ni de promesses chimériques : un diagnostic lucide et pragmatique.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Intake Form */}
          <div className={styles.rightCol}>
            <div>
              <h3 className={styles.formTitle}>Briefing Exécutif Préliminaire</h3>
              <p className={styles.formSubtitle}>Transmettez les grandes lignes de votre projet pour un premier cadrage ciblé.</p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Votre Nom & Fonction</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Idrissa Ouédraogo, Directeur Général"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.textInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Entreprise / Structure</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Entreprise B2B / Groupe Commercial"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={styles.textInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Pôle d'Intervention Souhaité</label>
                <select
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  className={styles.selectInput}
                >
                  <option value="strategie-marche">Stratégie & Modèle Économique</option>
                  <option value="web-mobile">Développement Web & Mobile Next.js</option>
                  <option value="seo-local">SEO & Référencement Local Google</option>
                  <option value="acquisition-ads">Marketing Digital & Acquisition (Ads)</option>
                  <option value="agents-ia">Workflows & Agents IA Métier</option>
                  <option value="formation-masterclass">Formation d’Équipe ou Masterclass</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Défis Clés & Objectifs (Optionnel)</label>
                <textarea
                  rows={3}
                  placeholder="Décrivez brièvement le problème que vous souhaitez résoudre ou votre objectif..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={styles.textArea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Transmettre sur la Ligne VIP Directe</span>
                <Send size={16} />
              </button>

              <a
                href={`https://wa.me/${(WHATSAPP_NUMBER || '+22674826666').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directWhatsappLink}
              >
                <MessageSquare size={14} />
                <span>Ou contacter directement au +226 74 82 66 66</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
