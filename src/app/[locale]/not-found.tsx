import { Link } from '@/i18n/navigation';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid} />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page Introuvable</h1>
        <p className={styles.desc}>
          Désolé, la page que vous cherchez n&#39;existe pas ou a été déplacée.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn--primary btn--lg">
            Retour à l&#39;Accueil
          </Link>
          <Link href="/contact" className="btn btn--secondary btn--lg">
            Nous Contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
