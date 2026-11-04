'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
  delayBeforeType?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBeforeDelete = 2000,
  delayBeforeType = 500,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!words || words.length === 0) return;

    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Supression en cours
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      // Ecriture en cours
      if (currentText.length === currentWord.length) {
        timer = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.8 }}
          transition={{ duration: 0.1 }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{
          display: 'inline-block',
          width: '3px',
          height: '1.1em',
          backgroundColor: 'currentColor',
          marginLeft: '4px',
        }}
      />
    </span>
  );
}
