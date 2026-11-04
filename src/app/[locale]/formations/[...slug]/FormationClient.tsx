'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Star, 
  Clock, 
  BarChart, 
  Monitor, 
  CheckCircle2, 
  Rocket, 
  PlayCircle, 
  ChevronDown, 
  ChevronUp, 
  X,
  MessageSquare,
  ShieldCheck,
  Award,
  Users,
  ArrowLeft,
  Sparkles,
  Check
} from 'lucide-react';
import styles from './formation.module.css';
import { Link } from '@/i18n/navigation';
import AfricanPatternRibbon from '@/components/v2/AfricanPatternRibbon';

import { WHATSAPP_NUMBER } from '@/lib/data';

export default function FormationClient({ formation }: { formation: any }) {
  const [showModal, setShowModal] = useState(false);
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });

  const curriculum = formation.curriculum && formation.curriculum.length > 0
    ? formation.curriculum
    : [
        {
          title: "Module 0 : Fondations & Déconstruction des Mythes",
          lessons: [
            "Bienvenue dans l'Académie Barouba : posture et objectifs",
            "Comprendre les principes fondamentaux sans jargon inutile",
            "Mise en place de l'environnement de travail opérationnel"
          ]
        },
        {
          title: "Module 1 : Application Pratique Immédiate",
          lessons: [
            "Exercices dirigés sur cas réels d'entreprises",
            "Méthode pas-à-pas pour obtenir un premier résultat convaincant",
            "Corrections des erreurs fréquentes"
          ]
        },
        {
          title: "Module 2 : Optimisation & Livrable Professionnel",
          lessons: [
            "Finalisation de votre projet concret",
            "Revue personnalisée avec l'instructeur Barouba",
            "Validation des compétences et certification"
          ]
        }
      ];

  const handleEnrollClick = () => setShowModal(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour BAROUBA GROUP, je m'appelle ${formData.name}. Je souhaite m'inscrire à la formation "${formation.title}". Mon email: ${formData.email}, WhatsApp: ${formData.whatsapp}`;
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
    setShowModal(false);
  };

  const isIACourse = formation.slug?.current?.includes('intelligence-artificielle') || formation.title?.toLowerCase().includes('intelligence artificielle');

  return (
    <div className={styles.page}>
      {/* Top Header */}
      <header className={styles.header}>
        <div className={styles.headerGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.headerInner}>
            <Link href="/formations" className={styles.backLink}>
              <ArrowLeft size={16} />
              <span>Retour à toutes les formations</span>
            </Link>

            <div className={styles.badgeRow}>
              <span className={styles.categoryBadge}>{formation.category || 'Formation Pratique'}</span>
              <span className={styles.levelBadge}>{formation.level || 'Accessible à tous'}</span>
              <div className={styles.durationPill}>
                <Clock size={14} />
                <span>{formation.duration || '15 Heures'}</span>
              </div>
            </div>

            <h1 className={styles.title}>{formation.title}</h1>
            <p className={styles.tagline}>{formation.tagline}</p>

            <div className={styles.metaRow}>
              <div className={styles.ratingBadge}>
                <Star fill="currentColor" size={16} className={styles.starIcon} />
                <span className={styles.ratingScore}>4.9/5.0</span>
                <span className={styles.ratingNote}>(Avis vérifiés de professionnels)</span>
              </div>
              <div className={styles.formatItem}>
                <Monitor size={15} />
                <span>{formation.format || 'Ateliers en ligne & Suivi'}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* African Motif Frieze */}
      <AfricanPatternRibbon label="EXCELLENCE ACADÉMIQUE & CAS PRATIQUES RÉELS" />

      {/* Main Body Grid */}
      <main className={styles.mainSection}>
        <div className="container">
          <div className={styles.layoutGrid}>
            
            {/* Left Column: Course Details */}
            <div className={styles.courseDetails}>
              
              {/* Overview */}
              <section className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>Présentation de la Formation</h2>
                <p className={styles.leadText}>
                  {formation.shortDescription}
                </p>
              </section>

              {/* Special Analogies Section for AI Course */}
              {isIACourse && (
                <section className={styles.methodologyBlock}>
                  <div className={styles.methodologyHeader}>
                    <div className={styles.methodologyBadge}>MÉTHODE PÉDAGOGIQUE BAROUBA</div>
                    <h3 className={styles.methodologyTitle}>Comment nous expliquons l'IA sans jargon</h3>
                    <p className={styles.methodologyIntro}>
                      Loin des équations incompréhensibles et des promesses trompeuses, voici la réalité concrète sur le fonctionnement de l’IA, illustrée par des analogies du quotidien.
                    </p>
                  </div>

                  <div className={styles.analogyCardsList}>
                    <div className={styles.analogyItem}>
                      <div className={styles.analogyNumber}>01</div>
                      <div className={styles.analogyBody}>
                        <h4 className={styles.analogyTitle}>L’Analogie du Grand Peintre</h4>
                        <p className={styles.analogyDesc}>
                          L'IA a passé des années à observer des millions de photographies et d'œuvres d’art. Elle a assimilé comment la lumière réagit sur différentes matières, comment se compose une silhouette ou comment rendre une texture de tissu. Elle ne « vole » pas de morceaux d'images : elle applique ces règles apprises pour peindre une création originale.
                        </p>
                      </div>
                    </div>

                    <div className={styles.analogyItem}>
                      <div className={styles.analogyNumber}>02</div>
                      <div className={styles.analogyBody}>
                        <h4 className={styles.analogyTitle}>Comment elle Reconnaît les Images</h4>
                        <p className={styles.analogyDesc}>
                          Pour l'IA, une image n'est pas un mot magique : c'est un ensemble d'indices visuels. Tel un détective chevronné, elle repère les contours, les dégradés et les micro-détails pour identifier avec certitude un visage, un objet ou une ambiance émotionnelle.
                        </p>
                      </div>
                    </div>

                    <div className={styles.analogyItem}>
                      <div className={styles.analogyNumber}>03</div>
                      <div className={styles.analogyBody}>
                        <h4 className={styles.analogyTitle}>Comment elle Génère de Zéro</h4>
                        <p className={styles.analogyDesc}>
                          Au départ de chaque création, il n'y a qu'un nuage de points aléatoires (du bruit numérique, comme un écran de télé sans signal). Pas à pas, guidée par vos consignes, l'IA sculpte ce nuage, élimine le bruit parasite et fait apparaître une image nette et éclatante.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* Detailed Curriculum */}
              <section className={styles.contentBlock}>
                <div className={styles.curriculumHeaderRow}>
                  <div>
                    <h2 className={styles.blockTitle}>Curriculum Détaillé & Modules</h2>
                    <p className={styles.blockSubtitle}>
                      {curriculum.length} modules complets conçus pour progresser de la théorie essentielle jusqu'au livrable final.
                    </p>
                  </div>
                </div>

                <div className={styles.curriculumAccordion}>
                  {curriculum.map((mod: any, idx: number) => {
                    const isOpen = openModule === idx;
                    return (
                      <div key={idx} className={`${styles.accordionCard} ${isOpen ? styles.cardOpen : ''}`}>
                        <button 
                          className={styles.accordionHeaderBtn}
                          onClick={() => setOpenModule(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                        >
                          <div className={styles.moduleMetaCol}>
                            <span className={styles.moduleIndex}>MODULE {idx}</span>
                            <span className={styles.moduleCardTitle}>{mod.title}</span>
                          </div>
                          <div className={styles.chevronWrap}>
                            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className={styles.accordionBody}
                            >
                              <div className={styles.lessonsList}>
                                {mod.lessons?.map((lesson: string, lIdx: number) => (
                                  <div key={lIdx} className={styles.lessonRow}>
                                    <span className={styles.lessonBullet}>◆</span>
                                    <span className={styles.lessonText}>{lesson}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Tangible Outcomes */}
              <section className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>Ce que vous saurez faire concrètement</h2>
                <div className={styles.outcomesGrid}>
                  <div className={styles.outcomeCard}>
                    <div className={styles.outcomeCheck}>
                      <Check size={18} />
                    </div>
                    <div>
                      <h4 className={styles.outcomeHeading}>Autonomie Complète</h4>
                      <p className={styles.outcomeDesc}>
                        Vous ne dépendez plus d'outils magiques ou de prestataires externes pour produire des visuels et supports de vente d'exception.
                      </p>
                    </div>
                  </div>

                  <div className={styles.outcomeCard}>
                    <div className={styles.outcomeCheck}>
                      <Check size={18} />
                    </div>
                    <div>
                      <h4 className={styles.outcomeHeading}>Gain de Temps x10</h4>
                      <p className={styles.outcomeDesc}>
                        Des processus qui demandaient des journées entières de travail sont désormais exécutés avec précision en quelques minutes.
                      </p>
                    </div>
                  </div>

                  <div className={styles.outcomeCard}>
                    <div className={styles.outcomeCheck}>
                      <Check size={18} />
                    </div>
                    <div>
                      <h4 className={styles.outcomeHeading}>Livrables Prêts à Vendre</h4>
                      <p className={styles.outcomeDesc}>
                        Chaque exercice débouche sur un support directement exploitable pour vos campagnes, vos réseaux ou vos clients.
                      </p>
                    </div>
                  </div>

                  <div className={styles.outcomeCard}>
                    <div className={styles.outcomeCheck}>
                      <Check size={18} />
                    </div>
                    <div>
                      <h4 className={styles.outcomeHeading}>Certification Professionnelle</h4>
                      <p className={styles.outcomeDesc}>
                        Une attestation délivrée par BAROUBA GROUP attestant de votre maîtrise opérationnelle des compétences enseignées.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Target Audience */}
              <section className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>À qui s'adresse cette formation ?</h2>
                <div className={styles.audienceList}>
                  <div className={styles.audienceRow}>
                    <span className={styles.audienceDiamond}>◆</span>
                    <span><strong>Entrepreneurs & E-commerçants :</strong> Pour concevoir leurs visuels publicitaires, affiches et pages de vente sans budget graphisme démesuré.</span>
                  </div>
                  <div className={styles.audienceRow}>
                    <span className={styles.audienceDiamond}>◆</span>
                    <span><strong>Responsables Marketing & Communication :</strong> Pour accélérer la production de contenus et tester rapidement de nouveaux concepts visuels.</span>
                  </div>
                  <div className={styles.audienceRow}>
                    <span className={styles.audienceDiamond}>◆</span>
                    <span><strong>Créateurs & Graphistes :</strong> Pour intégrer l'intelligence artificielle comme multiplicateur de créativité plutôt que de la subir.</span>
                  </div>
                  <div className={styles.audienceRow}>
                    <span className={styles.audienceDiamond}>◆</span>
                    <span><strong>Équipes d'entreprises :</strong> Pour moderniser leurs méthodes de travail et acquérir une autonomie digitale durable.</span>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Column: Sticky Sidebar Card */}
            <aside className={styles.sidebarCol}>
              <div className={styles.stickyCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.sessionStatus}>
                    <span className={styles.pulseDot} />
                    <span>SESSIONS 2026 — PLACES LIMITÉES</span>
                  </div>
                  <div className={styles.priceContainer}>
                    <span className={styles.priceLabel}>Investissement</span>
                    <div className={styles.priceValue}>{formation.price}</div>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <button 
                    onClick={handleEnrollClick}
                    className={styles.primaryEnrollBtn}
                  >
                    <Rocket size={18} />
                    <span>Rejoindre la formation</span>
                  </button>

                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formation.whatsappMessage || `Bonjour BAROUBA GROUP, je souhaite en savoir plus sur la formation : ${formation.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryWaBtn}
                  >
                    <MessageSquare size={17} />
                    <span>Poser une question sur WhatsApp</span>
                  </a>

                  <div className={styles.inclusionsSection}>
                    <h4 className={styles.inclusionsTitle}>Ce qui est inclus dans votre inscription :</h4>
                    <ul className={styles.inclusionsList}>
                      <li className={styles.inclusionItem}>
                        <CheckCircle2 size={16} className={styles.inclusionIcon} />
                        <span>{formation.duration || '15 Heures'} d'ateliers pratiques et interactifs</span>
                      </li>
                      <li className={styles.inclusionItem}>
                        <CheckCircle2 size={16} className={styles.inclusionIcon} />
                        <span>Fichiers modèles, prompts testés et maquettes offertes</span>
                      </li>
                      <li className={styles.inclusionItem}>
                        <CheckCircle2 size={16} className={styles.inclusionIcon} />
                        <span>Support technique direct WhatsApp avec le formateur</span>
                      </li>
                      <li className={styles.inclusionItem}>
                        <CheckCircle2 size={16} className={styles.inclusionIcon} />
                        <span>Attestation officielle de fin de formation Barouba Group</span>
                      </li>
                      <li className={styles.inclusionItem}>
                        <CheckCircle2 size={16} className={styles.inclusionIcon} />
                        <span>Accès à vie aux futures mises à jour du cursus</span>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.instructorProfile}>
                    <div className={styles.instructorAvatar}>
                      <Image 
                        src="/logo-or.svg" 
                        alt="Barouba Group Academy" 
                        width={24} 
                        height={24} 
                        style={{ width: 'auto', height: '24px' }}
                      />
                    </div>
                    <div>
                      <div className={styles.instructorName}>Académie BAROUBA GROUP</div>
                      <div className={styles.instructorRole}>Formateurs certifiés & Praticiens du digital</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* Mobile Sticky CTA Bar */}
      <div className={styles.mobileBottomBar}>
        <div className={styles.mobilePriceCol}>
          <span className={styles.mobilePriceLabel}>Tarif</span>
          <span className={styles.mobilePriceValue}>{formation.price}</span>
        </div>
        <button onClick={handleEnrollClick} className={styles.mobileEnrollBtn}>
          <span>S’inscrire</span>
        </button>
      </div>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {showModal && (
          <div className={styles.modalOverlay}>
            <motion.div 
              className={styles.modalCard}
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className={styles.modalHeader}>
                <div>
                  <div className={styles.modalPre}>INSCRIPTION ACADÉMIE</div>
                  <h3 className={styles.modalTitle}>{formation.title}</h3>
                </div>
                <button 
                  className={styles.closeBtn} 
                  onClick={() => setShowModal(false)}
                  aria-label="Fermer la boîte de dialogue"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className={styles.modalForm}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Nom et Prénom</label>
                  <input 
                    type="text" 
                    required 
                    className={styles.formInput} 
                    placeholder="Ex: Moussa Traoré"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Adresse Email</label>
                  <input 
                    type="email" 
                    required 
                    className={styles.formInput} 
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel}>Numéro WhatsApp (avec indicatif)</label>
                  <input 
                    type="tel" 
                    required 
                    className={styles.formInput} 
                    placeholder="+225... / +221... / +33..."
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>

                <div className={styles.modalPriceSummary}>
                  <span>Montant de la formation :</span>
                  <strong>{formation.price}</strong>
                </div>

                <button type="submit" className={styles.modalSubmitBtn}>
                  <Rocket size={18} />
                  <span>Confirmer & Échanger sur WhatsApp</span>
                </button>

                <p className={styles.modalSecurityNote}>
                  <ShieldCheck size={14} />
                  <span>Vos coordonnées restent strictement confidentielles. Échange direct avec notre équipe.</span>
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
