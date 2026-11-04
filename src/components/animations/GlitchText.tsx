'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './GlitchText.module.css';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function GlitchText({ text, className = '', as: Tag = 'h2' }: GlitchTextProps) {
  return (
    <Tag
      className={`${styles.glitch} ${className}`}
      data-text={text}
      aria-label={text}
    >
      {text}
    </Tag>
  );
}
