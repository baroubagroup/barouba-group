'use client';

import { useState, useEffect } from 'react';
import AdminShell from '../AdminShell';
import { Lead } from '@/lib/leadsStore';
import { 
  Briefcase, 
  Search, 
  Download, 
  Phone, 
  Eye, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Building2,
  X,
  FileText
} from 'lucide-react';
import styles from './devis.module.css';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  nouveau: { label: 'Nouveau', color: '#34d399' },
  en_cours: { label: 'En étude', color: '#60a5fa' },
  devis_envoye: { label: 'Devis envoyé', color: '#fbbf24' },
  signe: { label: 'Contrat signé', color: '#10b981' },
  archive: { label: 'Archivé', color: '#64748b' },
};

export default function DevisAdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error('Erreur chargement leads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: Lead['status']) => {
    try {
      await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
      );
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead((prev) => prev ? { ...prev, status: newStatus } : null);
      }
    } catch (err) {
      console.error('Erreur mise à jour statut lead:', err);
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Nom', 'Entreprise', 'Telephone', 'Email', 'Service', 'Budget', 'Pays', 'Statut', 'Date'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.company}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.service}"`,
      `"${l.budget}"`,
      `"${l.country}"`,
      `"${l.status}"`,
      `"${l.createdAt}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads_barouba_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = leads.filter((lead) => {
    const matchesFilter = filter === 'all' || lead.status === filter;
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm) ||
      lead.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPipelineFCFA = leads
    .filter((l) => l.status !== 'archive')
    .reduce((acc, curr) => acc + (curr.estimatedValueFCFA || 0), 0);

  const newCount = leads.filter((l) => l.status === 'nouveau').length;
  const inProgressCount = leads.filter((l) => l.status === 'en_cours' || l.status === 'devis_envoye').length;
  const signedCount = leads.filter((l) => l.status === 'signe').length;

  return (
    <AdminShell>
      <div className={styles.page}>
        {/* Header */}
        <header className={styles.header}>
          <div>
            <div className={styles.titleRow}>
              <Briefcase size={28} color="#fbbf24" />
              <h1 className={styles.title}>Demandes de Devis &amp; Cadrages</h1>
            </div>
            <p className={styles.subtitle}>
              Pipeline commercial synchronisé en temps réel depuis le configurateur en ligne
            </p>
          </div>

          <div className={styles.headerActions}>
            <button onClick={handleExportCSV} className={styles.btnExport}>
              <Download size={16} />
              <span>Exporter CSV</span>
            </button>
          </div>
        </header>

        {/* Executive Stats Cards */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div>
              <div className={styles.statNum}>{leads.length}</div>
              <div className={styles.statLabel}>Demandes Totales</div>
            </div>
            <div className={styles.statIconWrap}>
              <FileText size={20} />
            </div>
          </div>

          <div className={styles.statCard}>
            <div>
              <div className={styles.statNum} style={{ color: '#34d399' }}>{newCount}</div>
              <div className={styles.statLabel}>Nouvelles (À Traiter)</div>
            </div>
            <div className={styles.statIconWrap}>
              <Clock size={20} />
            </div>
          </div>

          <div className={styles.statCard}>
            <div>
              <div className={styles.statNum} style={{ color: '#60a5fa' }}>{inProgressCount}</div>
              <div className={styles.statLabel}>En Étude / Devis Transmis</div>
            </div>
            <div className={styles.statIconWrap}>
              <CheckCircle2 size={20} />
            </div>
          </div>

          <div className={styles.statCard}>
            <div>
              <div className={styles.statNum} style={{ color: '#fbbf24' }}>
                {(totalPipelineFCFA / 1000000).toFixed(1)}M FCFA
              </div>
              <div className={styles.statLabel}>Valeur Pipeline Estimée</div>
            </div>
            <div className={styles.statIconWrap}>
              <DollarSign size={20} />
            </div>
          </div>
        </div>

        {/* Controls: Search + Tabs */}
        <div className={styles.controlsBar}>
          <div className={styles.filterTabs}>
            {[
              { id: 'all', label: `Tous (${leads.length})` },
              { id: 'nouveau', label: `Nouveaux (${newCount})` },
              { id: 'en_cours', label: 'En cours' },
              { id: 'devis_envoye', label: 'Devis envoyé' },
              { id: 'signe', label: `Signés (${signedCount})` },
              { id: 'archive', label: 'Archivés' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`${styles.tabBtn} ${filter === tab.id ? styles.tabBtnActive : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Rechercher par nom, entreprise, téléphone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        {/* Table of Leads */}
        <div className={styles.tableContainer}>
          <table className={styles.leadsTable}>
            <thead>
              <tr>
                <th>Date &amp; Origine</th>
                <th>Contact &amp; Entreprise</th>
                <th>Pôle Demandé</th>
                <th>Budget Indicatif</th>
                <th>Statut Dossier</th>
                <th>Actions Directes</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => {
                const waUrl = `https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Bonjour ${lead.name}, nous avons bien reçu votre demande de cadrage chez BAROUBA GROUP pour le projet ${lead.company}.`
                )}`;

                return (
                  <tr key={lead.id} className={styles.tableRow}>
                    <td>
                      <div>{new Date(lead.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</div>
                      <small style={{ opacity: 0.6 }}>{lead.country} • {lead.source}</small>
                    </td>

                    <td>
                      <div className={styles.leadContactCell}>
                        <span className={styles.leadName}>{lead.name}</span>
                        <span className={styles.leadCompany}>{lead.company}</span>
                        <a href={`tel:${lead.phone}`} className={styles.phoneLink}>{lead.phone}</a>
                      </div>
                    </td>

                    <td>
                      <span className={styles.serviceBadge}>{lead.service}</span>
                    </td>

                    <td>
                      <span className={styles.budgetVal}>{lead.budget}</span>
                    </td>

                    <td>
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                        className={styles.statusSelect}
                        style={{ borderColor: STATUS_LABELS[lead.status]?.color }}
                      >
                        <option value="nouveau">🆕 Nouveau</option>
                        <option value="en_cours">⏳ En étude</option>
                        <option value="devis_envoye">📄 Devis envoyé</option>
                        <option value="signe">✅ Contrat signé</option>
                        <option value="archive">📦 Archivé</option>
                      </select>
                    </td>

                    <td>
                      <div className={styles.actionsCell}>
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.btnActionWa}
                          title="Ouvrir WhatsApp avec ce client"
                        >
                          <WhatsAppIcon />
                        </a>
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className={styles.btnActionView}
                          title="Voir le dossier complet"
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Modal View Details */}
        {selectedLead && (
          <div className={styles.modalBackdrop} onClick={() => setSelectedLead(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <div>
                  <h3 className={styles.modalTitle}>Dossier Devis : {selectedLead.company}</h3>
                  <small style={{ color: '#94a3b8' }}>ID: {selectedLead.id} • Reçu le {new Date(selectedLead.createdAt).toLocaleString('fr-FR')}</small>
                </div>
                <button onClick={() => setSelectedLead(null)} className={styles.modalCloseBtn}>
                  <X size={20} />
                </button>
              </div>

              <div className={styles.modalGrid}>
                <div className={styles.modalField}>
                  <span className={styles.modalFieldLabel}>Nom du Contact</span>
                  <span className={styles.modalFieldValue}>{selectedLead.name}</span>
                </div>
                <div className={styles.modalField}>
                  <span className={styles.modalFieldLabel}>Entreprise</span>
                  <span className={styles.modalFieldValue}>{selectedLead.company}</span>
                </div>
                <div className={styles.modalField}>
                  <span className={styles.modalFieldLabel}>Téléphone WhatsApp</span>
                  <span className={styles.modalFieldValue}>{selectedLead.phone}</span>
                </div>
                <div className={styles.modalField}>
                  <span className={styles.modalFieldLabel}>Email</span>
                  <span className={styles.modalFieldValue}>{selectedLead.email || 'Non renseigné'}</span>
                </div>
                <div className={styles.modalField}>
                  <span className={styles.modalFieldLabel}>Pôle / Service Demandé</span>
                  <span className={styles.modalFieldValue}>{selectedLead.service}</span>
                </div>
                <div className={styles.modalField}>
                  <span className={styles.modalFieldLabel}>Budget Indicatif</span>
                  <span className={styles.modalFieldValue} style={{ color: '#fbbf24' }}>{selectedLead.budget}</span>
                </div>
                <div className={styles.modalField}>
                  <span className={styles.modalFieldLabel}>Stade du Projet</span>
                  <span className={styles.modalFieldValue}>{selectedLead.maturity}</span>
                </div>
                <div className={styles.modalField}>
                  <span className={styles.modalFieldLabel}>Localisation &amp; Source</span>
                  <span className={styles.modalFieldValue}>{selectedLead.country} • {selectedLead.source}</span>
                </div>

                <div className={styles.modalFieldFull}>
                  <span className={styles.modalFieldLabel}>Détails &amp; Cahier des Charges</span>
                  <div className={styles.modalNotesBox}>
                    {selectedLead.details || 'Aucune précision complémentaire fournie par le client.'}
                  </div>
                </div>

                {selectedLead.internalNotes && (
                  <div className={styles.modalFieldFull}>
                    <span className={styles.modalFieldLabel}>Notes Internes de Cadrage</span>
                    <div className={styles.modalNotesBox} style={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}>
                      {selectedLead.internalNotes}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.modalActions}>
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Bonjour ${selectedLead.name}, je suis le directeur de projet chez BAROUBA GROUP en charge de votre dossier ${selectedLead.company}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnActionWa}
                  style={{ width: 'auto', padding: '0.6rem 1.25rem', gap: '0.5rem', borderRadius: '0.65rem' }}
                >
                  <WhatsAppIcon />
                  <span>Démarrer le cadrage WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
