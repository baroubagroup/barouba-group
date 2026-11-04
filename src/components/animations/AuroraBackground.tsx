'use client';

import React from 'react';
import styles from './AuroraBackground.module.css';

interface AuroraBackgroundProps {
  children: React.ReactNode;
}

export default function AuroraBackground({ children }: AuroraBackgroundProps) {
  return (
    <div className={styles.auroraContainer}>
      <div className={styles.auroraGlow}>
        <div className={styles.auroraBlob1}></div>
        <div className={styles.auroraBlob2}></div>
        <div className={styles.auroraBlob3}></div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
