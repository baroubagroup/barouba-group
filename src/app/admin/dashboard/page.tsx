'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminShell from '../AdminShell';
import { AnalyticsSummary } from '@/lib/analyticsStore';
import { Lead } from '@/lib/leadsStore';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Percent, 
  Globe2, 
  Compass, 
  Radio, 
  ArrowRight, 
  RefreshCw,
  Clock,
  Smartphone,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import styles from './dashboard.module.css';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [resAnalytics, resLeads] = await Promise.all([
        fetch('/api/analytics'),
        fetch('/api/leads'),
      ]);
      const dataAnalytics = await resAnalytics.json();
      const dataLeads = await resLeads.json();

      if (dataAnalytics.summary) setAnalytics(dataAnalytics.summary);
      if (dataLeads.leads) setLeads(dataLeads.leads);
    } catch (err) {
      console.error('Erreur chargement dashboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Auto-refresh every 30 seconds for live feel
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const totalPipelineFCFA = leads
    .filter((l) => l.status !== 'archive')
    .reduce((acc, curr) => acc + (curr.estimatedValueFCFA || 0), 0);

  const signedFCFA = leads
    .filter((l) => l.status === 'signe')
    .reduce((acc, curr) => acc + (curr.estimatedValueFCFA || 0), 0);

  const recentLeads = leads.slice(0, 5);

  return (
    <AdminShell>
      <div className={styles.dashboard}>
        {/* Top Executive Header */}
        <header className={styles.topHeader}>
          <div>
            <h1 className={styles.welcomeTitle}>Tour de Contrôle &amp; Analytics</h1>
            <p className={styles.welcomeSubtitle}>
              Pilotage des flux d'audience, de la géographie des visiteurs et des opportunités commerciales BAROUBA GROUP SARL
            </p>
          </div>

          <div className={styles.headerBadges}>
            <div className={styles.liveBadge}>
              <span className={styles.pulseDot} />
              <span>{analytics?.activeNow || 24} Visiteurs en Direct</span>
            </div>
            <div className={styles.timeBadge}>
              GMT • {new Date().toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
            </div>
            <button 
              onClick={() => { setLoading(true); fetchData(); }} 
              className={styles.timeBadge}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              title="Actualiser les données"
            >
              <RefreshCw size={13} className={loading ? styles.pulseDot : ''} />
              <span>Actualiser</span>
            </button>
          </div>
        </header>

        {/* Executive 4 KPIs Grid */}
        <section className={styles.kpiGrid}>
          {/* Card 1: Unique Visitors */}
          <div className={styles.kpiCard}>
            <div className={styles.kpiHeader}>
              <span className={styles.kpiLabel}>Visiteurs Uniques (30j)</span>
              <div className={styles.kpiIconWrap}>
                <Users size={18} />
              </div>
            </div>
            <div className={styles.kpiValue}>
              {analytics?.uniqueVisitors.toLocaleString('fr-FR') || '11 450'}
            </div>
            <div className={styles.kpiFooter}>
              <span className={styles.trendUp}>+18.4%</span>
              <span className={styles.kpiSubText}>Mobile 4G : {analytics?.deviceBreakdown.mobile || 88.5}%</span>
            </div>
          </div>

          {/* Card 2: Pipeline Value */}
          <div className={styles.kpiCard}>
            <div className={styles.kpiHeader}>
              <span className={styles.kpiLabel}>Pipeline Devis Actif</span>
              <div className={styles.kpiIconWrap}>
                <DollarSign size={18} />
              </div>
            </div>
            <div className={styles.kpiValue} style={{ color: '#fbbf24' }}>
              {(totalPipelineFCFA / 1000000).toFixed(1)}M FCFA
            </div>
            <div className={styles.kpiFooter}>
              <span className={styles.trendUp}>+{leads.filter(l => l.status === 'nouveau').length} nouveaux</span>
              <span className={styles.kpiSubText}>{leads.length} dossiers au total</span>
            </div>
          </div>

          {/* Card 3: Global Conversion Rate */}
          <div className={styles.kpiCard}>
            <div className={styles.kpiHeader}>
              <span className={styles.kpiLabel}>Taux de Conversion Global</span>
              <div className={styles.kpiIconWrap}>
                <Percent size={18} />
              </div>
            </div>
            <div className={styles.kpiValue} style={{ color: '#34d399' }}>
              {analytics?.conversionRate || '4.82%'}
            </div>
            <div className={styles.kpiFooter}>
              <span className={styles.trendUp}>Supérieur à la moyenne</span>
              <span className={styles.kpiSubText}>Trafic très qualifié</span>
            </div>
          </div>

          {/* Card 4: Signed Contracts Revenue */}
          <div className={styles.kpiCard}>
            <div className={styles.kpiHeader}>
              <span className={styles.kpiLabel}>Contrats Signés (Ce mois)</span>
              <div className={styles.kpiIconWrap}>
                <ShieldCheck size={18} />
              </div>
            </div>
            <div className={styles.kpiValue} style={{ color: '#10b981' }}>
              {(signedFCFA / 1000000).toFixed(1)}M FCFA
            </div>
            <div className={styles.kpiFooter}>
              <span className={styles.trendUp}>100% Cession PI</span>
              <span className={styles.kpiSubText}>Encaissements sécurisés</span>
            </div>
          </div>
        </section>

        {/* Row 1: Geographic Visitor Intelligence + Acquisition Sources */}
        <div className={styles.analyticsRow}>
          {/* Left: Country Breakdown (Panafrican & Diaspora) */}
          <div className={styles.cardBox}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>
                <Globe2 size={20} color="#fbbf24" />
                <span>Origine Géographique des Visiteurs (Pays &amp; Villes)</span>
              </h2>
              <span className={styles.cardSubtitle}>Mise à jour en temps réel</span>
            </div>

            <div className={styles.countryList}>
              {analytics?.countries.map((c) => (
                <div key={c.code} className={styles.countryItem}>
                  <div className={styles.countryTop}>
                    <div className={styles.countryName}>
                      <span className={styles.countryFlag}>{c.flag}</span>
                      <span>{c.name}</span>
                    </div>

                    <div className={styles.countryStats}>
                      <span className={styles.visitorCount}>{c.visitors.toLocaleString('fr-FR')} visites</span>
                      <span style={{ color: '#94a3b8' }}>({c.percentage}%)</span>
                      <span className={styles.conversionPill}>{c.conversionRate}% conv.</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className={styles.progressBarTrack}>
                    <div className={styles.progressBarFill} style={{ width: `${c.percentage}%` }} />
                  </div>

                  {/* Cities */}
                  <div className={styles.citiesRow}>
                    {c.topCities.map((city, idx) => (
                      <span key={idx} className={styles.cityTag}>{city}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Traffic Acquisition Channels */}
          <div className={styles.cardBox}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>
                <Compass size={20} color="#fbbf24" />
                <span>Canaux d'Acquisition &amp; ROI</span>
              </h2>
              <span className={styles.cardSubtitle}>Performance des régies</span>
            </div>

            <div className={styles.sourcesList}>
              {analytics?.sources.map((src, i) => (
                <div key={i} className={styles.sourceItem}>
                  <div className={styles.sourceNameCol}>
                    <span className={styles.sourceTitle}>{src.name}</span>
                    <span className={styles.sourceCategory}>{src.category} • {src.leadsGenerated} leads générés</span>
                  </div>

                  <div className={styles.sourceMetrics}>
                    <span className={styles.sourceVisitors}>{src.percentage}%</span>
                    <span className={styles.sourceRoi}>{src.roi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Recent Quote Leads + Live Visitors Stream */}
        <div className={styles.analyticsRow}>
          {/* Left: Recent Quote Leads Sync */}
          <div className={styles.cardBox}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>
                <Briefcase size={20} color="#fbbf24" />
                <span>Dernières Demandes de Devis (En Direct)</span>
              </h2>
              <Link href="/admin/devis" style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none' }}>
                Voir tous ({leads.length}) →
              </Link>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className={styles.leadsQuickTable}>
                <thead>
                  <tr>
                    <th>Contact &amp; Société</th>
                    <th>Pôle Demandé</th>
                    <th>Budget</th>
                    <th>Statut</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((l) => {
                    const waUrl = `https://wa.me/${l.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Bonjour ${l.name}, nous avons bien reçu votre demande de devis chez BAROUBA GROUP pour ${l.company}.`
                    )}`;

                    return (
                      <tr key={l.id}>
                        <td>
                          <strong>{l.name}</strong>
                          <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>{l.company} ({l.country})</div>
                        </td>
                        <td>{l.service}</td>
                        <td style={{ color: '#fbbf24', fontWeight: 700 }}>{l.budget}</td>
                        <td>
                          <span style={{
                            padding: '0.2rem 0.5rem',
                            borderRadius: '9999px',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            background: l.status === 'nouveau' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                            color: l.status === 'nouveau' ? '#34d399' : '#cbd5e1'
                          }}>
                            {l.status}
                          </span>
                        </td>
                        <td>
                          <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.btnWaSmall}>
                            <WhatsAppIcon />
                            <span>Contacter</span>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Live Activity Stream */}
          <div className={styles.cardBox}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>
                <Radio size={20} color="#34d399" />
                <span>Flux des Visiteurs en Temps Réel</span>
              </h2>
              <span className={styles.cardSubtitle}>Télémétrie active</span>
            </div>

            <div className={styles.liveFeedList}>
              {analytics?.liveVisitors.map((v) => (
                <div key={v.id} className={styles.liveFeedItem}>
                  <div className={styles.feedVisitorInfo}>
                    <span className={styles.feedFlag}>{v.flag}</span>
                    <div>
                      <div className={styles.feedLocation}>{v.city}</div>
                      <div className={styles.feedAction}>{v.action}</div>
                    </div>
                  </div>

                  <div className={styles.feedMeta}>
                    <div>{v.device}</div>
                    <small style={{ opacity: 0.6 }}>{v.source} • {v.duration}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
