'use client';

import { useEffect, useRef } from 'react';

interface UseGsapScrollTriggerProps {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  once?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

/**
 * Hook to initialize GSAP with ScrollTrigger.
 * Returns refs for the scroll trigger.
 */
export function useGsapScrollReveal(
  elements: React.RefObject<HTMLElement | null>[],
  options?: { stagger?: number; y?: number; duration?: number; delay?: number; start?: string }
) {
  useEffect(() => {
    let gsapInstance: any;
    let ScrollTriggerPlugin: any;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;
      ScrollTriggerPlugin = ScrollTrigger;

      const validEls = elements.map(r => r.current).filter(Boolean);
      if (validEls.length === 0) return;

      gsap.fromTo(validEls, 
        { y: options?.y ?? 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options?.duration ?? 1,
          delay: options?.delay ?? 0,
          stagger: options?.stagger ?? 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: validEls[0],
            start: options?.start ?? 'top 85%',
            once: true,
          },
        }
      );
    })();

    return () => {
      ScrollTriggerPlugin?.getAll().forEach((t: any) => t.kill());
    };
  }, []);
}

/**
 * Hook to animate text character by character with GSAP.
 */
export function useGsapTextReveal(
  ref: React.RefObject<HTMLElement | null>,
  options?: { delay?: number; stagger?: number }
) {
  useEffect(() => {
    if (!ref.current) return;
    let ctx: any;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const { SplitText } = await import('gsap/SplitText');
      gsap.registerPlugin(ScrollTrigger, SplitText);

      const el = ref.current;
      if (!el) return;

      ctx = gsap.context(() => {
        const split = new SplitText(el, { type: 'words,chars' });
        gsap.fromTo(split.chars,
          { y: '110%', opacity: 0, rotateX: -90 },
          {
            y: '0%',
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            delay: options?.delay ?? 0.3,
            stagger: options?.stagger ?? 0.02,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
          }
        );
      }, el);
    })();

    return () => ctx?.revert();
  }, []);
}

/**
 * Hook for magnetic mouse effect on an element.
 */
export function useMagneticEffect(ref: React.RefObject<HTMLElement | null>, strength: number = 0.4) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const onMouseLeave = () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    };

    const onMouseEnter = () => {
      el.style.transition = 'transform 0.1s linear';
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseenter', onMouseEnter);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);
}

/**
 * Hook for 3D tilt effect on card elements.
 */
export function use3DTilt(ref: React.RefObject<HTMLElement | null>, maxTilt: number = 15) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * -maxTilt;
      const rotateY = (x - 0.5) * maxTilt;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const onMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);
}
