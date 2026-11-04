import styles from './AfricanPatternRibbon.module.css';

interface AfricanPatternRibbonProps {
  label?: string;
}

export default function AfricanPatternRibbon({ label }: AfricanPatternRibbonProps) {
  return (
    <div className={styles.ribbonWrapper} aria-hidden="true">
      <div className={styles.friezeLine} />
      <div className={styles.centerMotif}>
        {/* Authentic Bogolan / Kuba geometric medallion */}
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.motifSvg}>
          <rect x="21" y="2" width="26.87" height="26.87" transform="rotate(45 21 2)" stroke="currentColor" strokeWidth="1.5" />
          <rect x="21" y="8" width="18.38" height="18.38" transform="rotate(45 21 8)" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="21" cy="21" r="4" fill="currentColor" />
          <path d="M4 21 H14 M28 21 H38 M21 4 V14 M21 28 V38" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {label && <span className={styles.ribbonLabel}>{label}</span>}
      </div>
      <div className={styles.friezeLine} />
    </div>
  );
}
