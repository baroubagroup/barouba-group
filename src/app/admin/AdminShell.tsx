'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './adminShell.module.css';

const navItems = [
  { href: '/admin/dashboard', icon: '📊', label: 'Dashboard & Analytics' },
  { href: '/admin/devis', icon: '💼', label: 'Demandes de Devis' },
  { href: '/admin/inscriptions', icon: '📋', label: 'Inscriptions' },
  { href: '/admin/messages', icon: '💬', label: 'Messages' },
  { href: '/admin/blog', icon: '📝', label: 'Blog' },
  { href: '/admin/formations', icon: '🎓', label: 'Formations' },
  { href: '/admin/boutique', icon: '🛒', label: 'Boutique' },
  { href: '/admin/portfolio', icon: '🏆', label: 'Réalisations' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = localStorage.getItem('admin_auth');
      if (!auth) router.push('/admin/login');
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem('admin_auth');
    router.push('/admin/login');
  };

  return (
    <div className={styles.shell}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <Image src="/logo-or.svg" alt="BAROUBA GROUP" width={36} height={36} style={{ borderRadius: '50%', flexShrink: 0 }} />
          <div>
            <div className={styles.brandName}>BAROUBA GROUP</div>
            <div className={styles.brandRole}>Administration</div>
          </div>
        </div>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <a href="/" target="_blank" className={styles.sideLink}>🌐 Voir le site</a>
          <button onClick={logout} className={styles.logoutBtn}>🚪 Déconnexion</button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      {/* Main */}
      <main className={styles.main}>
        <header className={styles.topbar}>
          <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
          <div className={styles.topbarTitle}>
            {navItems.find((n) => n.href === pathname)?.label || 'Admin'}
          </div>
          <div className={styles.topbarRight}>
            <span className={styles.adminBadge}>👤 Admin</span>
          </div>
        </header>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}
