'use client';
import { useState } from 'react';
import AdminShell from '../AdminShell';
import { demoInscriptions, Inscription } from '../adminData';
import styles from './inscriptions.module.css';

const statusColors: Record<string, { bg: string; color: string }> = {
  nouveau: { bg: 'rgba(74,222,128,0.1)', color: '#4ade80' },
  contacte: { bg: 'rgba(245,166,35,0.1)', color: '#F5A623' },
  inscrit: { bg: 'rgba(96,165,250,0.1)', color: '#60a5fa' },
  annule: { bg: 'rgba(248,113,113,0.1)', color: '#f87171' },
};

const statusLabels: Record<string, string> = {
  nouveau: '🆕 Nouveau',
  contacte: '📞 Contacté',
  inscrit: '✅ Inscrit',
  annule: '❌ Annulé',
};

export default function InscriptionsPage() {
  const [inscriptions, setInscriptions] = useState<Inscription[]>(demoInscriptions);
  const [filter, setFilter] = useState('tous');
  const [selected, setSelected] = useState<Inscription | null>(null);

  const filtered = filter === 'tous' ? inscriptions : inscriptions.filter(i => i.status === filter);

  const updateStatus = (id: string, status: Inscription['status']) => {
    setInscriptions(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
  };

  return (
    <AdminShell>
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>📋 Inscriptions aux Formations</h1>
            <p className={styles.subtitle}>{inscriptions.length} inscription(s) au total</p>
          </div>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {['tous', 'nouveau', 'contacte', 'inscrit', 'annule'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
            >
              {f === 'tous' ? '📋 Tous' : statusLabels[f]} ({f === 'tous' ? inscriptions.length : inscriptions.filter(i => i.status === f).length})
            </button>
          ))}
        </div>

        <div className={styles.layout}>
          {/* Table */}
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Candidat</th>
                  <th>Formation</th>
                  <th>Date</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(ins => (
                  <tr key={ins.id} className={`${styles.row} ${selected?.id === ins.id ? styles.rowSelected : ''}`} onClick={() => setSelected(ins)}>
                    <td>
                      <div className={styles.candidate}>
                        <div className={styles.avatar}>{ins.name.charAt(0)}</div>
                        <div>
                          <div className={styles.candidateName}>{ins.name}</div>
                          <div className={styles.candidateEmail}>{ins.email} {ins.city ? `• 📍 ${ins.city}` : ''}</div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.formation}>{ins.formation}</td>
                    <td className={styles.date}>{new Date(ins.date).toLocaleDateString('fr-FR')}</td>
                    <td>
                      <span className={styles.badge} style={{ background: statusColors[ins.status].bg, color: statusColors[ins.status].color }}>
                        {statusLabels[ins.status]}
                      </span>
                    </td>
                    <td>
                      <div className={styles.actions}>
                        <a href={`https://wa.me/${ins.phone?.replace(/\s/g, '')}`} target="_blank" className={styles.actionBtn} title="WhatsApp">
                          💬
                        </a>
                        <a href={`mailto:${ins.email}`} className={styles.actionBtn} title="Email">
                          📧
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className={styles.empty}>Aucune inscription dans cette catégorie</div>
            )}
          </div>

          {/* Detail panel */}
          {selected && (
            <div className={styles.detail}>
              <div className={styles.detailHeader}>
                <div className={styles.detailAvatar}>{selected.name.charAt(0)}</div>
                <div>
                  <div className={styles.detailName}>{selected.name}</div>
                  <span className={styles.badge} style={{ background: statusColors[selected.status].bg, color: statusColors[selected.status].color }}>
                    {statusLabels[selected.status]}
                  </span>
                </div>
                <button onClick={() => setSelected(null)} className={styles.closeBtn}>✕</button>
              </div>
              <div className={styles.detailBody}>
                <div className={styles.detailRow}><span>📧 Email</span><a href={`mailto:${selected.email}`} className={styles.detailLink}>{selected.email}</a></div>
                <div className={styles.detailRow}><span>📱 Téléphone</span><span>{selected.phone}</span></div>
                <div className={styles.detailRow}><span>🎓 Formation</span><span>{selected.formation}</span></div>
                <div className={styles.detailRow}><span>📅 Date</span><span>{new Date(selected.date).toLocaleDateString('fr-FR')}</span></div>
              </div>
              <div className={styles.detailActions}>
                <div className={styles.detailActionsTitle}>Changer le statut :</div>
                <div className={styles.statusBtns}>
                  {(['nouveau', 'contacte', 'inscrit', 'annule'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      className={`${styles.statusBtn} ${selected.status === s ? styles.statusBtnActive : ''}`}
                      style={selected.status === s ? { background: statusColors[s].bg, color: statusColors[s].color, borderColor: statusColors[s].color } : {}}
                    >
                      {statusLabels[s]}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.detailContacts}>
                <a href={`https://wa.me/${selected.phone?.replace(/\s/g, '')}`} target="_blank" className={styles.contactBtn} style={{ background: 'rgba(37,211,102,0.1)', color: '#25d366', borderColor: '#25d366' }}>
                  💬 WhatsApp
                </a>
                <a href={`mailto:${selected.email}`} className={styles.contactBtn} style={{ background: 'rgba(96,165,250,0.1)', color: '#60a5fa', borderColor: '#60a5fa' }}>
                  📧 Envoyer un email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
