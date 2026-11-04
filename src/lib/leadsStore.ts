import fs from 'fs';
import path from 'path';

export interface Lead {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  maturity: string;
  details: string;
  source: 'Formulaire Devis' | 'Page Contact' | 'Assistant IA' | 'WhatsApp Direct';
  country: string;
  city?: string;
  status: 'nouveau' | 'en_cours' | 'devis_envoye' | 'signe' | 'archive';
  estimatedValueFCFA: number;
  createdAt: string;
  internalNotes?: string;
}

const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-01',
    name: 'Mamadou Ouédraogo',
    company: 'Sahel Agro Industries SARL',
    phone: '+226 70 23 45 67',
    email: 'm.ouedraogo@sahelagro.bf',
    service: 'Conception Web Next.js 16 & E-Commerce',
    budget: '1 500 000 — 2 500 000 FCFA',
    maturity: 'Accélération d’un business actif',
    details: 'Mise en place d’un tunnel e-commerce ultra-rapide pour nos produits transformés avec encaissement Orange Money & Moov Money et commande WhatsApp.',
    source: 'Formulaire Devis',
    country: 'Burkina Faso',
    city: 'Ouagadougou',
    status: 'nouveau',
    estimatedValueFCFA: 1850000,
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 min ago
    internalNotes: 'Contact senior très qualifié. Préparer démonstration du tunnel 1-clic.',
  },
  {
    id: 'lead-02',
    name: 'Aminata Diallo',
    company: 'Cabinet d’Audit & Conseil West Africa',
    phone: '+225 07 89 12 34 56',
    email: 'adiallo@audit-wa.ci',
    service: 'Agents IA & Automatisation Métier',
    budget: '2 000 000 — 4 500 000 FCFA',
    maturity: 'Refonte / Modernisation des processus',
    details: 'Assistant IA connecté à notre base documentaire juridique OHADA pour accélérer les recherches de nos collaborateurs et répondre aux clients.',
    source: 'Formulaire Devis',
    country: 'Côte d’Ivoire',
    city: 'Abidjan',
    status: 'en_cours',
    estimatedValueFCFA: 3200000,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5h ago
    internalNotes: 'Réunion de cadrage technique planifiée pour vendredi 11h.',
  },
  {
    id: 'lead-03',
    name: 'Dr. Idrissa Sawadogo',
    company: 'Polyclinique Internationale du Faso',
    phone: '+226 76 11 22 33',
    email: 'direction@polyclinique-faso.bf',
    service: 'Stratégie de Marque & Community Management VIP',
    budget: '750 000 — 1 500 000 FCFA',
    maturity: 'Accélération de la visibilité',
    details: 'Refonte complète de l’image de marque institutionnelle et gestion éditoriale des réseaux sociaux pour valoriser nos nouveaux pôles de chirurgie.',
    source: 'Page Contact',
    country: 'Burkina Faso',
    city: 'Ouagadougou',
    status: 'devis_envoye',
    estimatedValueFCFA: 1200000,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(), // 1 day ago
    internalNotes: 'Devis pro-forma N° 2026-084 transmis à la direction générale.',
  },
  {
    id: 'lead-04',
    name: 'Cheick Tidiane Traoré',
    company: 'Mali Transit & Supply Chain',
    phone: '+223 66 55 44 33',
    email: 'ctraore@malitransit.ml',
    service: 'Conception Plateforme Web & Tracking Suivi',
    budget: '2 500 000 — 5 000 000 FCFA',
    maturity: 'Lancement d’une nouvelle activité',
    details: 'Portail web client permettant aux importateurs de suivre en temps réel la position de leurs conteneurs depuis le port d’Abidjan vers Bamako.',
    source: 'Formulaire Devis',
    country: 'Mali',
    city: 'Bamako',
    status: 'signe',
    estimatedValueFCFA: 3800000,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    internalNotes: 'Contrat OHADA signé. Acompte de 50% perçu. Sprint 1 démarré.',
  },
  {
    id: 'lead-05',
    name: 'Fatoumata Bamba',
    company: 'Aura Cosmétiques Naturels',
    phone: '+226 78 99 88 77',
    email: 'contact@auracosmetics.bf',
    service: 'Publicité Meta & TikTok Ads (Tracking CAPI)',
    budget: '500 000 — 1 000 000 FCFA',
    maturity: 'Accélération e-commerce',
    details: 'Campagnes publicitaires vidéo pour notre gamme de soins au beurre de karité bio avec tracking serveur anti-bloqueurs et ventes WhatsApp.',
    source: 'Assistant IA',
    country: 'Burkina Faso',
    city: 'Bobo-Dioulasso',
    status: 'nouveau',
    estimatedValueFCFA: 850000,
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 min ago
    internalNotes: 'Vient de terminer une session avec Barouba AI Advisor.',
  }
];

// Persistent storage path in project directory
const DATA_DIR = path.join(process.cwd(), '.data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

let memoryLeads: Lead[] = [...INITIAL_LEADS];

function loadFromDisk(): Lead[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(LEADS_FILE)) {
      const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryLeads = parsed;
        return parsed;
      }
    }
    // Write initial
    fs.writeFileSync(LEADS_FILE, JSON.stringify(INITIAL_LEADS, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error reading leads from disk:', err);
  }
  return memoryLeads;
}

function saveToDisk(leads: Lead[]): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving leads to disk:', err);
  }
}

export function getAllLeads(): Lead[] {
  return loadFromDisk();
}

export function createLead(data: Omit<Lead, 'id' | 'createdAt' | 'status' | 'estimatedValueFCFA'> & { estimatedValueFCFA?: number }): Lead {
  const leads = loadFromDisk();
  const newLead: Lead = {
    ...data,
    id: `lead-${Date.now()}`,
    status: 'nouveau',
    estimatedValueFCFA: data.estimatedValueFCFA || 750000,
    createdAt: new Date().toISOString(),
  };

  leads.unshift(newLead);
  memoryLeads = leads;
  saveToDisk(leads);
  return newLead;
}

export function updateLead(id: string, updates: Partial<Lead>): Lead | null {
  const leads = loadFromDisk();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return null;

  leads[index] = { ...leads[index], ...updates };
  memoryLeads = leads;
  saveToDisk(leads);
  return leads[index];
}

export function deleteLead(id: string): boolean {
  const leads = loadFromDisk();
  const filtered = leads.filter((l) => l.id !== id);
  if (filtered.length === leads.length) return false;

  memoryLeads = filtered;
  saveToDisk(filtered);
  return true;
}
