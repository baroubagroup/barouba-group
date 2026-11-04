'use client';
import { useState } from 'react';
import AdminShell from '../AdminShell';
import { demoBlog, BlogPost } from '../adminData';
import styles from './blog.module.css';

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>(demoBlog);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [editForm, setEditForm] = useState<BlogPost | null>(null);

  const startEdit = (p: BlogPost) => { setEditing(p); setEditForm({ ...p }); };

  const saveEdit = () => {
    if (!editForm) return;
    setPosts(prev => prev.map(p => p.id === editForm.id ? editForm : p));
    setEditing(null); setEditForm(null);
  };

  const toggleStatus = (id: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, status: p.status === 'publie' ? 'brouillon' : 'publie' } : p));
  };

  const deletePost = (id: string) => {
    if (confirm('Supprimer cet article ?')) setPosts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <AdminShell>
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>📝 Gestion du Blog</h1>
            <p className={styles.subtitle}>{posts.filter(p => p.status === 'publie').length} article(s) publié(s) · {posts.filter(p => p.status === 'brouillon').length} brouillon(s)</p>
          </div>
          <button className={styles.addBtn} onClick={() => {
            const newP: BlogPost = { id: `b${Date.now()}`, title: 'Nouvel Article', excerpt: 'Description courte...', category: 'Catégorie', date: new Date().toISOString().split('T')[0], status: 'brouillon', readTime: 5 };
            setPosts(prev => [newP, ...prev]);
            startEdit(newP);
          }}>+ Nouvel article</button>
        </div>

        <div className={styles.table}>
          <div className={styles.thead}>
            <div className={styles.thTitle}>Titre</div>
            <div className={styles.thMeta}>Catégorie</div>
            <div className={styles.thMeta}>Date</div>
            <div className={styles.thMeta}>Statut</div>
            <div className={styles.thActions}>Actions</div>
          </div>
          {posts.map(p => (
            <div key={p.id} className={styles.row}>
              <div className={styles.cellTitle}>
                <div className={styles.postTitle}>{p.title}</div>
                <div className={styles.postExcerpt}>{p.excerpt}</div>
              </div>
              <div className={styles.cellMeta}><span className={styles.catBadge}>{p.category}</span></div>
              <div className={styles.cellMeta}>{new Date(p.date).toLocaleDateString('fr-FR')}</div>
              <div className={styles.cellMeta}>
                <span className={styles.statusBadge} style={{ background: p.status === 'publie' ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.05)', color: p.status === 'publie' ? '#4ade80' : '#aaa' }}>
                  {p.status === 'publie' ? '✅ Publié' : '📝 Brouillon'}
                </span>
              </div>
              <div className={styles.cellActions}>
                <button onClick={() => startEdit(p)} className={styles.iconBtn} title="Modifier">✏️</button>
                <button onClick={() => toggleStatus(p.id)} className={styles.iconBtn} title="Changer statut">{p.status === 'publie' ? '🔴' : '✅'}</button>
                <button onClick={() => deletePost(p.id)} className={styles.iconBtn} title="Supprimer">🗑️</button>
              </div>
            </div>
          ))}
        </div>

        {editing && editForm && (
          <div className={styles.modalOverlay} onClick={() => setEditing(null)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>✏️ Modifier l'article</h2>
                <button className={styles.closeBtn} onClick={() => setEditing(null)}>✕</button>
              </div>
              <div className={styles.form}>
                <div className={styles.field}><label className={styles.label}>Titre</label><input className={styles.input} value={editForm.title} onChange={e => setEditForm({ ...editForm, title: e.target.value })} /></div>
                <div className={styles.field}><label className={styles.label}>Extrait</label><textarea className={styles.textarea} value={editForm.excerpt} onChange={e => setEditForm({ ...editForm, excerpt: e.target.value })} rows={3} /></div>
                <div className={styles.field}><label className={styles.label}>Catégorie</label><input className={styles.input} value={editForm.category} onChange={e => setEditForm({ ...editForm, category: e.target.value })} /></div>
                <div className={styles.field}><label className={styles.label}>Temps de lecture (min)</label><input type="number" className={styles.input} value={editForm.readTime} onChange={e => setEditForm({ ...editForm, readTime: parseInt(e.target.value) })} /></div>
                <div className={styles.field}><label className={styles.label}>Statut</label>
                  <select className={styles.input} value={editForm.status} onChange={e => setEditForm({ ...editForm, status: e.target.value as 'publie' | 'brouillon' })}>
                    <option value="brouillon">📝 Brouillon</option>
                    <option value="publie">✅ Publié</option>
                  </select>
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
