'use client';

import { useState } from 'react';
import { Sparkles, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './QuoteCalculator.module.css';

const SERVICES_OPTIONS = [
  { id: 'web', icon: '🌐', label: 'Conception Web & Next.js' },
  { id: 'cm', icon: '📱', label: 'Community Management & Social Selling' },
  { id: 'ads', icon: '🎯', label: 'Publicité Meta & TikTok Ads' },
  { id: 'whatsapp', icon: '💬', label: 'Tunnel de Vente WhatsApp' },
  { id: 'ia', icon: '⚡', label: 'Agents IA & Automatisation Métier' },
  { id: 'formations', icon: '🎓', label: 'Formations Métiers du Numérique' },
];

const MATURITY_OPTIONS = [
  'Lancement d’une nouvelle activité',
  'Refonte / Reprise en main d’un existant',
  'Accélération d’un business actif',
];

const BUDGET_OPTIONS = [
  'Moins de 350 000 FCFA',
  '350 000 à 750 000 FCFA',
  '750 000 à 2 000 000 FCFA',
  'Plus de 2 000 000 FCFA (Grand Compte)',
  'À cadrer avec le consultant',
];

export default function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState('web');
  const [maturity, setMaturity] = useState(MATURITY_OPTIONS[0]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  const selectedServiceLabel = SERVICES_OPTIONS.find((s) => s.id === selectedService)?.label || 'Projet digital';
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<any>(null);

  const generateWhatsAppMessage = () => {
    return `Bonjour BAROUBA GROUP,\n\nJe viens de configurer une demande de devis sur votre site web :\n• Service concerné : ${selectedServiceLabel}\n• Stade du projet : ${maturity}\n• Budget indicatif : ${budget}\n• Entreprise : ${company || 'Non renseigné'}\n• Nom du contact : ${name || 'Non renseigné'}\n• Numéro WhatsApp : ${phone || 'Non renseigné'}\n• Email : ${email || 'Non renseigné'}\n• Précisions : ${details || 'À échanger de vive voix'}\n\nMerci de m'indiquer la disponibilité d'un consultant pour ce cadrage.`;
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Post to live API store
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company,
          phone,
          email,
          service: selectedServiceLabel,
          budget,
          maturity,
          details,
          source: 'Formulaire Devis',
          country: 'Burkina Faso',
          estimatedValueFCFA: budget.includes('2 000 000') ? 2500000 : budget.includes('750 000') ? 1200000 : 550000,
        }),
      });

      const data = await res.json();
      if (data.lead) {
        setSubmittedLead(data.lead);
      }
    } catch (err) {
      console.error('Erreur enregistrement devis:', err);
    } finally {
      setIsSubmitting(false);
      // 2. Open WhatsApp in new tab with the prepared message
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generateWhatsAppMessage())}`;
      window.open(waUrl, '_blank');
    }
  };

  return (
    <div className={styles.wrapper} id="devis">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.header}>
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>DEVIS &amp; CADRAGE STRATÉGIQUE EN LIGNE</span>
        </div>
        <h2 className={styles.title}>
          Configurez votre projet &amp; recevez votre <span className="text-gold-gradient">plan d'action sous 24h</span>
        </h2>
        <p className={styles.desc}>
          Remplissez ce formulaire en 60 secondes pour orienter nos ingénieurs et recevoir une proposition 100% sur mesure adaptée à votre budget et à vos ambitions.
        </p>
      </div>

      <form onSubmit={handleQuoteSubmit} className={styles.formGrid}>
        {/* Étape 1 : Choix du Pôle */}
        <div className={styles.stepSection}>
          <div className={styles.stepTitleRow}>
            <span className={styles.stepNum}>1</span>
            <label className={styles.stepLabel}>Quel pôle d'expertise souhaitez-vous mobiliser ?</label>
          </div>
          <div className={styles.optionsGrid}>
            {SERVICES_OPTIONS.map((srv) => {
              const isSelected = selectedService === srv.id;
              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`${styles.optionCard} ${isSelected ? styles.optionSelected : ''}`}
                  role="button"
                  tabIndex={0}
                >
                  <span className={styles.optionIcon}>{srv.icon}</span>
                  <span className={styles.optionText}>{srv.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Étape 2 : Stade du Projet */}
        <div className={styles.stepSection}>
          <div className={styles.stepTitleRow}>
            <span className={styles.stepNum}>2</span>
            <label className={styles.stepLabel}>Quel est le stade d'avancement de votre projet ?</label>
          </div>
          <div className={styles.pillsGrid}>
            {MATURITY_OPTIONS.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => setMaturity(opt)}
                className={`${styles.pillBtn} ${maturity === opt ? styles.pillSelected : ''}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Étape 3 : Budget Indicatif en FCFA */}
        <div className={styles.stepSection}>
          <div className={styles.stepTitleRow}>
            <span className={styles.stepNum}>3</span>
            <label className={styles.stepLabel}>Quel est votre ordre de grandeur budgétaire estimé ?</label>
          </div>
          <div className={styles.pillsGrid}>
            {BUDGET_OPTIONS.map((b) => (
              <button
                type="button"
                key={b}
                onClick={() => setBudget(b)}
                className={`${styles.pillBtn} ${budget === b ? styles.pillSelected : ''}`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Étape 4 : Coordonnées de Contact */}
        <div className={styles.stepSection}>
          <div className={styles.stepTitleRow}>
            <span className={styles.stepNum}>4</span>
            <label className={styles.stepLabel}>Vos coordonnées professionnelles</label>
          </div>

          <div className={styles.inputsGrid}>
            <div className={styles.inputField}>
              <label className={styles.fieldLabel}>Nom complet *</label>
              <input
                type="text"
                required
                placeholder="Ex: Idrissa Ouédraogo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.textInput}
              />
            </div>

            <div className={styles.inputField}>
              <label className={styles.fieldLabel}>Entreprise / Marque *</label>
              <input
                type="text"
                required
                placeholder="Ex: Faso Prestige SARL"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className={styles.textInput}
              />
            </div>

            <div className={styles.inputField}>
              <label className={styles.fieldLabel}>Numéro WhatsApp actif *</label>
              <input
                type="tel"
                required
                placeholder="+226 70 XX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.textInput}
              />
            </div>

            <div className={styles.inputField}>
              <label className={styles.fieldLabel}>Courriel Professionnel</label>
              <input
                type="email"
                placeholder="direction@entreprise.bf"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.textInput}
              />
            </div>

            <div className={styles.inputFieldFull}>
              <label className={styles.fieldLabel}>Description synthétique de votre besoin (optionnel)</label>
              <textarea
                placeholder="Décrivez en quelques mots vos objectifs, votre secteur d'activité ou vos contraintes de calendrier..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className={styles.textArea}
              />
            </div>
          </div>
        </div>

        {/* Submit Bar */}
        <div className={styles.submitRow}>
          <div className={styles.reassuranceText}>
            <Lock size={16} className={styles.lockIcon} />
            <span>Données confidentielles • Réponse garantie sous 24h ouvrées</span>
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submitWaBtn}>
            <WhatsAppIcon size={20} />
            <span>{isSubmitting ? 'Enregistrement en cours...' : 'Valider ma demande de devis sur WhatsApp'}</span>
          </button>
        </div>

        {submittedLead && (
          <div style={{
            marginTop: '1.5rem',
            padding: '1.25rem',
            borderRadius: '1rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#34d399',
            fontSize: '0.95rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <CheckCircle2 size={24} style={{ flexShrink: 0 }} />
            <div>
              <strong>Dossier {submittedLead.id} synchronisé avec succès !</strong> Nos ingénieurs examinent votre demande. La conversation WhatsApp s'est ouverte pour finaliser votre échange.
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
