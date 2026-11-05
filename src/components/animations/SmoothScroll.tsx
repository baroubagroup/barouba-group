'use client';

import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Only enable Lenis on desktop screens with fine pointer (mouse/trackpad)
    // On mobile touch devices, native momentum scrolling is 60-120fps responsive and zero-lag
    if (typeof window === 'undefined') return;
    const isTouchOrMobile = window.innerWidth < 1024 || window.matchMedia('(pointer: coarse)').matches;
    if (isTouchOrMobile) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Sync GSAP ScrollTrigger with Lenis for perfect coordination
    (async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } catch {
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
    })();

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
