'use client';
import { useState } from 'react';
import AdminShell from '../AdminShell';
import { demoFormations, Formation } from '../adminData';
import styles from './formations.module.css';

export default function FormationsAdminPage() {
  const [formations, setFormations] = useState<Formation[]>(demoFormations);
  const [editing, setEditing] = useState<Formation | null>(null);
  const [editForm, setEditForm] = useState<Formation | null>(null);

  const startEdit = (f: Formation) => {
    setEditing(f);
    setEditForm({ ...f });
  };

  const saveEdit = () => {
    if (!editForm) return;
    setFormations(prev => prev.map(f => f.id === editForm.id ? editForm : f));
    setEditing(null);
    setEditForm(null);
  };

  const toggleAvailable = (id: string) => {
    setFormations(prev => prev.map(f => f.id === id ? { ...f, isAvailable: !f.isAvailable } : f));
  };

  return (
    <AdminShell>
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>🎓 Gestion des Formations</h1>
            <p className={styles.subtitle}>{formations.length} formation(s) configurée(s)</p>
          </div>
          <button className={styles.addBtn} onClick={() => {
            const newF: Formation = { id: `f${Date.now()}`, title: 'Nouvelle Formation Pro', category: 'Métiers du Numérique', price: '150 000 FCFA', duration: '4 semaines', level: 'Tous niveaux', isAvailable: true };
            setFormations(prev => [newF, ...prev]);
            startEdit(newF);
          }}>
            + Ajouter une formation
          </button>
        </div>

        <div className={styles.grid}>
          {formations.map(f => (
            <div key={f.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardCategory}>{f.category}</div>
                <div className={`${styles.availableBadge} ${f.isAvailable ? styles.available : styles.unavailable}`}>
                  {f.isAvailable ? '✅ Active' : '🔴 Inactive'}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <div className={styles.cardMeta}>
                <span>💰 {f.price}</span>
                <span>⏱ {f.duration}</span>
                <span>📊 {f.level}</span>
              </div>
              <div className={styles.cardActions}>
                <button onClick={() => startEdit(f)} className={styles.editBtn}>✏️ Modifier</button>
                <button onClick={() => toggleAvailable(f.id)} className={`${styles.toggleBtn} ${f.isAvailable ? styles.deactivate : styles.activate}`}>
                  {f.isAvailable ? 'Désactiver' : 'Activer'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit modal */}
        {editing && editForm && (
          <div className={styles.modalOverlay} onClick={() => setEditing(null)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>✏️ Modifier la formation</h2>
                <button className={styles.closeBtn} onClick={() => setEditing(null)}>✕</button>
              </div>
              <div className={styles.form}>
                {([
                  { label: 'Titre', key: 'title', type: 'text' },
                  { label: 'Catégorie', key: 'category', type: 'text' },
                  { label: 'Prix', key: 'price', type: 'text' },
                  { label: 'Durée', key: 'duration', type: 'text' },
                  { label: 'Niveau', key: 'level', type: 'text' },
                ] as const).map(({ label, key, type }) => (
                  <div key={key} className={styles.field}>
                    <label className={styles.label}>{label}</label>
                    <input
                      type={type}
                      value={String(editForm[key])}
                      onChange={e => setEditForm({ ...editForm, [key]: e.target.value })}
                      className={styles.input}
                    />
                  </div>
                ))}
                <div className={styles.field}>
                  <label className={styles.label}>Disponible</label>
                  <div className={styles.toggle}>
                    <input type="checkbox" id="avail" checked={editForm.isAvailable} onChange={e => setEditForm({ ...editForm, isAvailable: e.target.checked })} />
                    <label htmlFor="avail" className={styles.toggleLabel}>
                      {editForm.isAvailable ? '✅ Formation active' : '🔴 Formation inactive'}
                    </label>
                  </div>
                </div>
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
