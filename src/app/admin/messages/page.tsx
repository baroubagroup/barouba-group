'use client';
import { useState } from 'react';
import AdminShell from '../AdminShell';
import { demoMessages, Message } from '../adminData';
import styles from './messages.module.css';

const statusColors: Record<string, { bg: string; color: string }> = {
  nouveau: { bg: 'rgba(74,222,128,0.1)', color: '#4ade80' },
  lu: { bg: 'rgba(255,255,255,0.05)', color: '#aaa' },
  repondu: { bg: 'rgba(96,165,250,0.1)', color: '#60a5fa' },
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(demoMessages);
  const [selected, setSelected] = useState<Message | null>(null);
  const [filter, setFilter] = useState('tous');

  const filtered = filter === 'tous' ? messages : messages.filter(m => m.status === filter);

  const selectMsg = (msg: Message) => {
    setSelected(msg);
    if (msg.status === 'nouveau') {
      setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, status: 'lu' } : m));
    }
  };

  const updateStatus = (id: string, status: Message['status']) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status } : m));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null);
  };

  return (
    <AdminShell>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>💬 Messages de Contact</h1>
          <p className={styles.subtitle}>{messages.filter(m => m.status === 'nouveau').length} message(s) non lu(s)</p>
        </div>

        <div className={styles.filters}>
          {['tous', 'nouveau', 'lu', 'repondu'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
            >
              {f === 'tous' ? `📬 Tous (${messages.length})` : f === 'nouveau' ? `🆕 Nouveau (${messages.filter(m => m.status === f).length})` : f === 'lu' ? `👁 Lu (${messages.filter(m => m.status === f).length})` : `✅ Répondu (${messages.filter(m => m.status === f).length})`}
            </button>
          ))}
        </div>

        <div className={styles.layout}>
          {/* List */}
          <div className={styles.msgList}>
            {filtered.map(msg => (
              <div
                key={msg.id}
                onClick={() => selectMsg(msg)}
                className={`${styles.msgItem} ${selected?.id === msg.id ? styles.active : ''} ${msg.status === 'nouveau' ? styles.unread : ''}`}
              >
                <div className={styles.msgAvatar} style={{ background: msg.status === 'nouveau' ? 'rgba(74,222,128,0.15)' : 'rgba(255,255,255,0.05)', color: msg.status === 'nouveau' ? '#4ade80' : '#aaa' }}>
                  {msg.name.charAt(0)}
                </div>
                <div className={styles.msgPreview}>
                  <div className={styles.msgSender}>{msg.name}</div>
                  <div className={styles.msgSubject}>{msg.subject}</div>
                  <div className={styles.msgExcerpt}>{msg.message.substring(0, 60)}...</div>
                </div>
                <div className={styles.msgMeta}>
                  <div className={styles.msgDate}>{new Date(msg.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}</div>
                  {msg.status === 'nouveau' && <div className={styles.dot} />}
                </div>
              </div>
            ))}
            {filtered.length === 0 && <div className={styles.empty}>Aucun message</div>}
          </div>

          {/* Message detail */}
          {selected ? (
            <div className={styles.msgDetail}>
              <div className={styles.detailHeader}>
                <div>
                  <h2 className={styles.detailSubject}>{selected.subject}</h2>
                  <div className={styles.detailMeta}>
                    <span>De : <strong>{selected.name}</strong></span>
                    <span>•</span>
                    <a href={`mailto:${selected.email}`} className={styles.metaLink}>{selected.email}</a>
                    {selected.phone && <><span>•</span><span>{selected.phone}</span></>}
                    {selected.city && <><span>•</span><span>📍 {selected.city}</span></>}
                    <span>•</span>
                    <span>{new Date(selected.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
                <span className={styles.badge} style={{ background: statusColors[selected.status].bg, color: statusColors[selected.status].color }}>
                  {selected.status === 'nouveau' ? '🆕 Nouveau' : selected.status === 'repondu' ? '✅ Répondu' : '👁 Lu'}
                </span>
              </div>
              <div className={styles.msgBody}>{selected.message}</div>
              <div className={styles.detailFooter}>
                <div className={styles.footerBtns}>
                  <a href={`mailto:${selected.email}?subject=Re: ${selected.subject}`} onClick={() => updateStatus(selected.id, 'repondu')} className={styles.replyBtn}>
                    📧 Répondre par email
                  </a>
                  {selected.phone && (
                    <a href={`https://wa.me/${selected.phone.replace(/\s/g, '')}`} target="_blank" className={styles.waBtn}>
                      💬 WhatsApp
                    </a>
                  )}
                </div>
                <div className={styles.statusBtns}>
                  {(['nouveau', 'lu', 'repondu'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      className={`${styles.statusBtn} ${selected.status === s ? styles.statusBtnActive : ''}`}
                    >
                      {s === 'nouveau' ? '🆕' : s === 'lu' ? '👁' : '✅'} {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.placeholder}>
              <div className={styles.placeholderIcon}>💬</div>
              <div className={styles.placeholderText}>Sélectionnez un message pour le lire</div>
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
