'use client';

import { useEffect, useRef } from 'react';
import styles from './ParticleCanvas.module.css';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    // Create particles
    const PARTICLE_COUNT = 120;
    type Particle = {
      x: number; y: number; z: number;
      vx: number; vy: number;
      radius: number; opacity: number;
      color: string;
    };

    const colors = ['rgba(245,166,35,', 'rgba(255,200,50,', 'rgba(230,120,20,', 'rgba(255,220,80,'];
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    function drawConnections(p1: Particle, p2: Particle) {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const alpha = (1 - dist / 120) * 0.15;
        ctx!.beginPath();
        ctx!.moveTo(p1.x, p1.y);
        ctx!.lineTo(p2.x, p2.y);
        ctx!.strokeStyle = `rgba(245,166,35,${alpha})`;
        ctx!.lineWidth = 0.5;
        ctx!.stroke();
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p, i) => {
        // Mouse repulsion / attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx -= (dx / dist) * 0.03;
          p.vy -= (dy / dist) * 0.03;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap around
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          drawConnections(p, particles[j]);
        }

        // Draw particle
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `${p.color}${p.opacity})`;
        ctx!.fill();

        // Glow effect
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        const gradient = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, `${p.color}${p.opacity * 0.5})`);
        gradient.addColorStop(1, `${p.color}0)`);
        ctx!.fillStyle = gradient;
        ctx!.fill();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
