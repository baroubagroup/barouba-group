'use client';

import { useState } from 'react';
import { 
  Sparkles, 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import styles from './AuthorityFAQ.module.css';
import { WHATSAPP_NUMBER } from '@/lib/data';

const FAQS = [
  {
    question: 'Pourquoi choisir BAROUBA GROUP plutôt qu’une agence classique ou un freelance ?',
    answer: 'Nous éliminons les lenteurs bureaucratiques des agences traditionnelles (qui facturent 6 mois de réunions) tout en offrant une rigueur d’ingénierie que les freelances isolés ne peuvent garantir. Avec nous, vous avez un lead technique senior dédié, un code Next.js 16 propriétaire ultra-rapide (< 0.8s), une intégration IA concrète connectée à votre business, et un contrat avec engagements fermes.'
  },
  {
    question: 'Quels sont vos délais réels de réalisation et comment éviter les retards ?',
    answer: 'Nos projets sont livrés en 2 à 4 semaines en moyenne. Nous fonctionnons par sprints agiles avec un jalon clair chaque semaine : vous testez l’avancement en temps réel sur un lien de prévisualisation privé. Les dates de livraison sont contractuelles et inscrites noir sur blanc.'
  },
  {
    question: 'Suis-je réellement propriétaire à 100% du code et des accès ?',
    answer: 'Absolument. Dès le règlement du solde de la prestation, nous vous transférons l’intégralité des droits de propriété intellectuelle : dépôt GitHub privé avec le code source complet, maquettes Figma éditables, accès d’administration et clés API. Aucun abonnement logiciel captif ne vous est imposé : vous êtes totalement libre et indépendant.'
  },
  {
    question: 'Et si le premier rendu graphique ne correspond pas à mes attentes ?',
    answer: 'Notre processus en 4 étapes élimine ce risque à la racine. Lors de la phase de design, nous itérons sur les maquettes interactives jusqu’à ce que le résultat vous plaise à 100%. Aucun développement de code ne démarre sans votre accord formel écrit sur le prototype.'
  },
  {
    question: 'Comment se déroule la collaboration au quotidien ? Dois-je être calé en informatique ?',
    answer: 'Non, aucune compétence technique n’est requise de votre côté. Nous traduisons vos objectifs commerciaux en code performant. Nous créons un canal direct (groupe WhatsApp VIP ou Slack dédié) avec votre responsable technique attitré pour des échanges fluides et directs sans intermédiaire.'
  },
  {
    question: 'Quels sont vos modes de paiement et modalités de règlement ?',
    answer: 'Nos règlements sont échelonnés par étapes de sécurité : 40% d’acompte au lancement pour bloquer votre sprint, 30% à la validation du prototype interactif, et le solde de 30% uniquement à la livraison finale après recette complète. Nous acceptons les virements bancaires internationaux (EUR, USD, DZD, XOF) ainsi que les cartes bancaires.'
  }
];

export default function AuthorityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <HelpCircle size={14} className={styles.badgeIcon} />
            <span>TRANSPARENCE TOTALE</span>
          </div>

          <h2 className={styles.title}>
            Questions fréquentes & <span className="text-gold-gradient">réponses sans détour</span>
          </h2>
          <p className={styles.subtitle}>
            Tout ce que vous devez savoir avant d’engager votre projet en toute sérénité.
          </p>
        </div>

        {/* Accordion List */}
        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className={styles.faqQuestionBtn}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={`${styles.chevronBox} ${isOpen ? styles.chevronRotated : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.faqAnswerBox}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className={styles.contactCardPrompt}>
          <div className={styles.promptLeft}>
            <div className={styles.promptIconBox}>
              <MessageSquare size={22} />
            </div>
            <div>
              <div className={styles.promptHeading}>Vous avez une question spécifique à votre secteur ?</div>
              <div className={styles.promptSub}>Posez-la directement à notre équipe technique. Réponse sous 15 minutes.</div>
            </div>
          </div>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BAROUBA GROUP, j'ai une question sur mes besoins digitaux.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.promptBtn}
          >
            <span>Poser ma question sur WhatsApp</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
