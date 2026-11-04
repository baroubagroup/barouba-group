'use client';

import React, { useRef, useEffect } from 'react';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = '', strength = 0.4, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      inner.style.transform = `translate(${x * strength * 0.4}px, ${y * strength * 0.4}px)`;
    };

    const onMouseLeave = () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      inner.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      el.style.transform = 'translate(0, 0)';
      inner.style.transform = 'translate(0, 0)';
    };

    const onMouseEnter = () => {
      el.style.transition = 'transform 0.1s linear';
      inner.style.transition = 'transform 0.1s linear';
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseenter', onMouseEnter);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`${styles.wrapper} ${className}`} onClick={onClick}>
      <div ref={innerRef} className={styles.inner}>
        {children}
      </div>
    </div>
  );
}
