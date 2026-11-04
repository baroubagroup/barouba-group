'use client';

import React, { useRef } from 'react';
import styles from './MarqueeRow.module.css';

interface MarqueeRowProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export default function MarqueeRow({ children, direction = 'left', speed = 30, className = '' }: MarqueeRowProps) {
  return (
    <div className={`${styles.marqueeWrapper} ${className}`} style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}>
      <div className={`${styles.marqueeTrack} ${direction === 'right' ? styles.reverse : ''}`}>
        <div className={styles.marqueeContent}>{children}</div>
        <div className={styles.marqueeContent} aria-hidden="true">{children}</div>
        <div className={styles.marqueeContent} aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
