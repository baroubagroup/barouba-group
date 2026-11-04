'use client';
import { useState } from 'react';
import AdminShell from '../AdminShell';
import { demoProduits, Produit } from '../adminData';
import styles from './boutique.module.css';

export default function BoutiqueAdminPage() {
  const [produits, setProduits] = useState<Produit[]>(demoProduits);
  const [editing, setEditing] = useState<Produit | null>(null);
  const [editForm, setEditForm] = useState<Produit | null>(null);

  const startEdit = (p: Produit) => { setEditing(p); setEditForm({ ...p }); };
  const saveEdit = () => {
    if (!editForm) return;
    setProduits(prev => prev.map(p => p.id === editForm.id ? editForm : p));
    setEditing(null); setEditForm(null);
  };
  const deleteProduit = (id: string) => {
    if (confirm('Supprimer ce produit ?')) setProduits(prev => prev.filter(p => p.id !== id));
  };

  return (
    <AdminShell>
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>🛒 Gestion de la Boutique</h1>
            <p className={styles.subtitle}>{produits.length} produit(s) · {produits.filter(p => p.isFeatured).length} en vedette</p>
          </div>
          <button className={styles.addBtn} onClick={() => {
            const newP: Produit = { id: `p${Date.now()}`, title: 'Nouveau Produit Digital', description: 'Description détaillée du livrable...', price: '50 000 FCFA', category: 'Outil IA', isFeatured: false };
            setProduits(prev => [newP, ...prev]);
            startEdit(newP);
          }}>+ Ajouter</button>
        </div>

        <div className={styles.grid}>
          {produits.map(p => (
            <div key={p.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.catBadge}>{p.category}</span>
                {p.isFeatured && <span className={styles.featuredBadge}>⭐ Vedette</span>}
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.cardPrice}>{p.price}</div>
              <div className={styles.cardActions}>
                <button onClick={() => startEdit(p)} className={styles.editBtn}>✏️ Modifier</button>
                <button onClick={() => deleteProduit(p.id)} className={styles.deleteBtn}>🗑️</button>
              </div>
            </div>
          ))}
        </div>

        {editing && editForm && (
          <div className={styles.modalOverlay} onClick={() => setEditing(null)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>✏️ Modifier le produit</h2>
                <button className={styles.closeBtn} onClick={() => setEditing(null)}>✕</button>
              </div>
              <div className={styles.form}>
                {([{ label: 'Titre', key: 'title' }, { label: 'Prix', key: 'price' }, { label: 'Catégorie', key: 'category' }] as const).map(({ label, key }) => (
                  <div key={key} className={styles.field}><label className={styles.label}>{label}</label><input className={styles.input} value={String(editForm[key])} onChange={e => setEditForm({ ...editForm, [key]: e.target.value })} /></div>
                ))}
                <div className={styles.field}><label className={styles.label}>Description</label><textarea className={styles.textarea} value={editForm.description} onChange={e => setEditForm({ ...editForm, description: e.target.value })} rows={3} /></div>
                <div className={styles.toggle}>
                  <input type="checkbox" id="feat" checked={editForm.isFeatured} onChange={e => setEditForm({ ...editForm, isFeatured: e.target.checked })} />
                  <label htmlFor="feat">⭐ Mettre en vedette</label>
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
