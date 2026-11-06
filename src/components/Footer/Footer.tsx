import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/lib/data';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const servicesLinks = [
    { href: '/services/communication-digitale-community-management' as const, label: 'Communication Digitale & CM', badge: 'Gestion de pages' },
    { href: '/services/developpement-web-plateformes-nextjs' as const, label: 'Développement Web & Next.js 16' },
    { href: '/services/acquisition-publicite-meta-tiktok-ads' as const, label: 'Acquisition & Publicité (Meta / TikTok)' },
    { href: '/services/tunnels-de-vente-whatsapp' as const, label: 'Tunnels de Vente & Vente WhatsApp' },
    { href: '/services/agents-ia-automatisation-metier' as const, label: 'Agents IA & Automatisation 24/7' },
    { href: '/services/ecommerce-expansion-sous-regionale' as const, label: 'E-Commerce & Expansion Sous-Régionale' },
    { href: '/services/portails-institutionnels-systemes-critiques' as const, label: 'Portails & Systèmes Métier Sur-Mesure' },
  ];

  const formationsLinks = [
    { href: '/formations/community-management-reseaux-sociaux' as const, label: 'Community Management & Réseaux Sociaux' },
    { href: '/formations/media-buying-publicite-meta-tiktok' as const, label: 'Marketing Digital & Media Buying' },
    { href: '/formations/ecommerce-vente-en-ligne-afrique' as const, label: 'E-Commerce & Vente en Ligne' },
    { href: '/formations/intelligence-artificielle-creation-visuelle' as const, label: 'IA & Création Visuelle Publicitaire' },
    { href: '/formations/tunnels-de-vente-conversion' as const, label: 'Tunnels de Vente & Psychologie CRO' },
    { href: '/formations/accompagnement-metiers-du-numerique' as const, label: 'Accompagnement & Coaching Sur-Mesure' },
    { href: '/formations' as const, label: 'Tous les Métiers du Numérique' },
  ];

  const navigationLinks = [
    { href: '/a-propos' as const, label: 'À Propos de l’Agence' },
    { href: '/territoires' as const, label: 'Territoires & Villes d’Intervention' },
    { href: '/portfolio' as const, label: 'Nos Réalisations & Études de Cas' },
    { href: '/blog' as const, label: 'Blog Stratégique & Guides SEO' },
    { href: '/solutions' as const, label: 'Solutions Entreprises' },
    { href: '/boutique' as const, label: 'Boutique & Outils' },
    { href: '/cgv' as const, label: 'Conditions Générales de Vente (CGV)' },
    { href: '/politique-de-confidentialite' as const, label: 'Politique de Confidentialité (CIL)' },
    { href: '/contact' as const, label: 'Contact & Devis Sous 24h' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Top African Geometric Ribbon */}
      <div className={styles.topRibbon} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Brand & Regional Presence */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo-principal.svg" 
              alt="BAROUBA INTERNATIONAL GROUP" 
              width={190} 
              height={52} 
              style={{ objectFit: 'contain', maxHeight: '52px', width: 'auto' }}
            />
          </Link>
          <p className={styles.desc}>
            Agence Digitale de Référence & Pôle IA d’Élite. Nous pilotons votre communication digitale (Community Management, gestion de pages, publicité Meta/TikTok), développons des écosystèmes web haute conversion Next.js 16 et formons vos équipes à tous les métiers du numérique.
          </p>

          <div className={styles.locationBlock}>
            <div className={styles.locationItem}>
              <span className={styles.locationDot}>📍</span>
              <span><strong>Siège Social :</strong> Bobo-Dioulasso, Burkina Faso</span>
            </div>
            <div className={styles.locationItem}>
              <span className={styles.locationDot}>🏢</span>
              <span><strong>Bureaux & Déploiements :</strong> Ouagadougou & Bobo-Dioulasso</span>
            </div>
            <div className={styles.locationItem}>
              <span className={styles.locationDot}>🌍</span>
              <span><strong>Zone d'Intervention :</strong> Partout au Burkina Faso • Espace UEMOA & International</span>
            </div>
          </div>

          <div className={styles.social}>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BAROUBA GROUP, je souhaite des informations sur vos services ou formations.")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink} 
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className={styles.col}>
          <div className={styles.colHeader}>
            <h3 className={styles.colTitle}>Services Stratégiques</h3>
          </div>
          <ul className={styles.linkList}>
            {servicesLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href as any} className={styles.footerLink}>
                  <span>{link.label}</span>
                  {link.badge && <span className={styles.linkBadge}>{link.badge}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Formations & Accompagnement */}
        <div className={styles.col}>
          <span className={styles.colPill}>Nous formons & nous accompagnons</span>
          <div className={styles.colHeader}>
            <h3 className={styles.colTitle}>Métiers du Numérique</h3>
          </div>
          <ul className={styles.linkList}>
            {formationsLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href as any} className={styles.footerLink}>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: WhatsApp Fast-Track & Navigation */}
        <div className={styles.col}>
          <div className={styles.whatsappCard}>
            <div className={styles.whatsappCardTitle}>Cadrage Projet & Devis Express</div>
            <p className={styles.whatsappCardText}>
              Besoin d’un plan d'action pour votre communication, votre site web ou la formation de vos équipes ?
            </p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour BAROUBA GROUP, je souhaite échanger directement avec un conseiller sur mon projet.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappDirectBtn}
            >
              <WhatsAppIcon />
              <span>Échanger sur WhatsApp</span>
            </a>
          </div>

          <div className={styles.colHeader}>
            <h3 className={styles.colTitle}>Ressources & Accès</h3>
          </div>
          <ul className={styles.linkList}>
            {navigationLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href as any} className={styles.footerLink}>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>
            © {year} BAROUBA INTERNATIONAL GROUP SARL. Société à Responsabilité Limitée — Siège Social à Bobo-Dioulasso, Burkina Faso.
          </p>
          <div className={styles.legalLinksBottom}>
            <Link href="/cgv" className={styles.legalLink}>
              Conditions Générales de Vente (CGV)
            </Link>
            <span className={styles.taglineDiamond}>◆</span>
            <span>Rigueur technologique &amp; ancrage africain contemporain.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}
