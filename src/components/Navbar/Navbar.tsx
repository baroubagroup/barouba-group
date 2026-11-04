'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/' as const, label: t('home') },
    { href: '/services' as const, label: t('services') },
    { href: '/formations' as const, label: t('formations') },
    { href: '/solutions' as const, label: t('solutions', { fallback: 'Solutions' }) },
    { href: '/portfolio' as const, label: t('portfolio') },
    { href: '/blog' as const, label: t('blog') },
    { href: '/boutique' as const, label: t('shop') },
    { href: '/a-propos' as const, label: t('about') },
  ];

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`.trim()}>
      <div className={`container ${styles.inner}`}>
        {/* Brand Logo & Identity */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrap}>
            <Image 
              src="/logo-or.svg" 
              alt="BAROUBA GROUP" 
              width={42} 
              height={42} 
              priority 
              style={{ width: 'auto', height: '40px' }} className={styles.logoImg} 
            />
            <div className={styles.brandMeta}>
              <span className={styles.brandTitle}>BAROUBA GROUP</span>
              <span className={styles.brandBadge}>AFRO-TECH & EXPANSION DIGITALE</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Floating Island */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href as any}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`.trim()}
              >
                <span>{link.label}</span>
                {isActive && <div className={styles.activeIndicator} />}
              </Link>
            );
          })}
        </nav>

        {/* Quick Actions (Theme + Lang + CTA) */}
        <div className={styles.actions}>
          {/* Working Theme Switcher (Dark / Light) */}
          <ThemeToggle />

          {/* Primary Action: Devis en Ligne */}
          <Link href="/devis" className={styles.studioCta}>
            <span>Demander un devis</span>
            <div className={styles.ctaArrowBox}>
              <ArrowUpRight size={15} />
            </div>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileOpen : ''}`.trim()}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className={`${styles.mobileLink} ${pathname === link.href ? styles.activeMobile : ''}`}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={18} className={styles.mobileLinkArrow} />
            </Link>
          ))}
          <div className={styles.mobileBottomAction}>
            <Link href="/devis" className={styles.mobileCtaBtn}>
              <span>Demander un Devis en Ligne</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
