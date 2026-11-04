'use client';

import React from 'react';
import styles from './BentoGrid.module.css';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`${styles.bentoGrid} ${className}`}>
      {children}
    </div>
  );
}

interface BentoItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  header: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

export function BentoGridItem({ title, description, header, icon, className = '' }: BentoItemProps) {
  return (
    <div className={`${styles.bentoItem} ${className}`}>
      <div className={styles.bentoHeaderWrap}>{header}</div>
      <div className={styles.bentoContentWrap}>
        <div className={styles.bentoIcon}>{icon}</div>
        <div className={styles.bentoTitle}>{title}</div>
        <div className={styles.bentoDesc}>{description}</div>
      </div>
    </div>
  );
}
