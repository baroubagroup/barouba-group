'use client';
import { useState } from 'react';
import AdminShell from '../AdminShell';
import { demoProjets, Projet } from '../adminData';
import styles from './portfolio.module.css';

export default function PortfolioAdminPage() {
  const [projets, setProjets] = useState<Projet[]>(demoProjets);
  const [editing, setEditing] = useState<Projet | null>(null);
  const [editForm, setEditForm] = useState<Projet | null>(null);
  const [techInput, setTechInput] = useState('');

  const startEdit = (p: Projet) => { setEditing(p); setEditForm({ ...p }); setTechInput(p.technologies.join(', ')); };
  const saveEdit = () => {
    if (!editForm) return;
    const techs = techInput.split(',').map(t => t.trim()).filter(Boolean);
    setProjets(prev => prev.map(p => p.id === editForm.id ? { ...editForm, technologies: techs } : p));
    setEditing(null); setEditForm(null);
  };
  const deleteProjet = (id: string) => {
    if (confirm('Supprimer cette réalisation ?')) setProjets(prev => prev.filter(p => p.id !== id));
  };

  const categoryColors: Record<string, string> = { 'Site Web': '#60a5fa', 'Application': '#a78bfa', 'Funnel': '#F5A623', 'Design': '#34d399' };

  return (
    <AdminShell>
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>🏆 Gestion du Portfolio</h1>
            <p className={styles.subtitle}>{projets.length} réalisation(s)</p>
          </div>
          <button className={styles.addBtn} onClick={() => {
            const newP: Projet = { id: `pr${Date.now()}`, title: 'Nouvelle Réalisation', description: 'Description du projet...', category: 'Site Web', technologies: [] };
            setProjets(prev => [newP, ...prev]);
            startEdit(newP);
          }}>+ Ajouter</button>
        </div>

        <div className={styles.grid}>
          {projets.map(p => (
            <div key={p.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.catBadge} style={{ background: `${categoryColors[p.category] || '#F5A623'}18`, color: categoryColors[p.category] || '#F5A623' }}>
                  {p.category}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.techs}>
                {p.technologies.map(t => (
                  <span key={t} className={styles.tech}>{t}</span>
                ))}
              </div>
              <div className={styles.cardActions}>
                <button onClick={() => startEdit(p)} className={styles.editBtn}>✏️ Modifier</button>
                <button onClick={() => deleteProjet(p.id)} className={styles.deleteBtn}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        {editing && editForm && (
          <div className={styles.modalOverlay} onClick={() => setEditing(null)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>✏️ Modifier la réalisation</h2>
                <button className={styles.closeBtn} onClick={() => setEditing(null)}>✕</button>
              </div>
              <div className={styles.form}>
                <div className={styles.field}><label className={styles.label}>Titre</label><input className={styles.input} value={editForm.title} onChange={e => setEditForm({ ...editForm, title: e.target.value })} /></div>
                <div className={styles.field}><label className={styles.label}>Description</label><textarea className={styles.textarea} value={editForm.description} onChange={e => setEditForm({ ...editForm, description: e.target.value })} rows={3} /></div>
                <div className={styles.field}><label className={styles.label}>Catégorie</label>
                  <select className={styles.input} value={editForm.category} onChange={e => setEditForm({ ...editForm, category: e.target.value })}>
                    {['Site Web', 'Application', 'Funnel', 'Design', 'Autre'].map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className={styles.field}><label className={styles.label}>Technologies (séparées par des virgules)</label><input className={styles.input} value={techInput} onChange={e => setTechInput(e.target.value)} placeholder="React, Next.js, TypeScript..." /></div>
                <div className={styles.formActions}>
                  <button onClick={() => setEditing(null)} className={styles.cancelBtn}>Annuler</button>
                  <button onClick={saveEdit} className={styles.saveBtn}>💾 Enregistrer</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
