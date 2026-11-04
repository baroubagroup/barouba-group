'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './login.module.css';

const VALID_PASSWORDS = ['barouba2024', 'barouba2026', 'Barouba2026', 'Barouba2024'];

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (VALID_PASSWORDS.includes(password.trim())) {
        localStorage.setItem('admin_auth', 'true');
        router.push('/admin/dashboard');
      } else {
        setError('Mot de passe incorrect');
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <Image src="/logo-or.svg" alt="BAROUBA GROUP" width={48} height={48} style={{ borderRadius: '50%' }} />
          <span className={styles.logoText}>BAROUBA GROUP</span>
        </div>
        <h1 className={styles.title}>Espace Admin</h1>
        <p className={styles.subtitle}>Connectez-vous pour accéder au tableau de bord</p>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="••••••••••••"
              className={styles.input}
              autoFocus
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? 'Connexion...' : 'Se connecter →'}
          </button>
        </form>
        <p className={styles.hint}>
          <a href="/" className={styles.backLink}>← Retour au site</a>
        </p>
      </div>
    </div>
  );
}
