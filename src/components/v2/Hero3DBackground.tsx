'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 5, 28);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- 1. GOLDEN STARDUST / PARTICLES (450 particles) ---
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const alphas = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      scales[i] = Math.random() * 2 + 1;
      alphas[i] = Math.random() * 0.7 + 0.3;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom circle texture for soft glowing golden dots
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 215, 0, 1)');
      grad.addColorStop(0.3, 'rgba(245, 166, 35, 0.85)');
      grad.addColorStop(0.7, 'rgba(217, 119, 6, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 1.35,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xFFD700,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- 2. 3D CYBER-GRID IN PERSPECTIVE (Luminous Gold in Dark & Bronze in Light) ---
    // Start with bright gold center line and radiant amber grid lines
    const gridDivisions = 40;
    const gridHelper = new THREE.GridHelper(120, gridDivisions, 0xFFD700, 0xF5A623);
    gridHelper.position.y = -14;
    gridHelper.position.z = -10;
    gridHelper.rotation.x = 0.08;

    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach((mat) => {
        mat.transparent = true;
        mat.opacity = 0.58;
      });
    } else {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.58;
    }
    scene.add(gridHelper);

    // --- 3. AMBIENT VOLUMETRIC GLOW RINGS (Afro-Tech Sacred Geometry) ---
    const ringGroup = new THREE.Group();
    const ringGeo1 = new THREE.RingGeometry(18, 18.12, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xF5A623,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    ringGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(24, 24.12, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xFFD700,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.16,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2.1;
    ringGroup.add(ring2);

    ringGroup.position.set(12, -2, -10);
    scene.add(ringGroup);

    // --- THEME ADAPTATION (Dark Mode: Radiant Gold Cyber-Grid, Light Mode: Warm Bronze Grid) ---
    const updateTheme = () => {
      const isLight =
        document.documentElement.getAttribute('data-theme') === 'light' ||
        document.body.getAttribute('data-theme') === 'light';

      const colorCenter = new THREE.Color(isLight ? 0xB45309 : 0xFFD700);
      const colorGrid = new THREE.Color(isLight ? 0xD97706 : 0xF5A623);

      const colors = gridHelper.geometry.attributes.color;
      if (colors) {
        let j = 0;
        for (let i = 0; i <= gridDivisions; i++) {
          const c = i === gridDivisions / 2 ? colorCenter : colorGrid;
          colors.setXYZ(j++, c.r, c.g, c.b);
          colors.setXYZ(j++, c.r, c.g, c.b);
          colors.setXYZ(j++, c.r, c.g, c.b);
          colors.setXYZ(j++, c.r, c.g, c.b);
        }
        colors.needsUpdate = true;
      }

      const gridOpacity = isLight ? 0.35 : 0.58;
      if (Array.isArray(gridHelper.material)) {
        gridHelper.material.forEach((mat) => {
          mat.transparent = true;
          mat.opacity = gridOpacity;
        });
      } else {
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = gridOpacity;
      }

      // Update ambient rings
      ringMat1.color.setHex(isLight ? 0xB45309 : 0xF5A623);
      ringMat1.opacity = isLight ? 0.14 : 0.22;
      ringMat2.color.setHex(isLight ? 0xD97706 : 0xFFD700);
      ringMat2.opacity = isLight ? 0.10 : 0.16;

      // Update particles
      particleMat.color.setHex(isLight ? 0xB45309 : 0xFFD700);
      particleMat.opacity = isLight ? 0.45 : 0.85;
    };

    // Initial theme update
    updateTheme();

    // Theme mutation observers
    const themeObserver = new MutationObserver(() => updateTheme());
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (e.clientX - windowHalfX) * 0.0008;
      targetMouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Visibility Observer: Pause rendering when out of viewport for max battery/GPU savings
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return; // Don't burn GPU cycles if scrolled off screen

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Slow particle drift
        particles.rotation.y = elapsedTime * 0.03 + mouseX * 2;
        particles.rotation.x = mouseY * 1.5;

        // Subtle undulating grid (breathing horizon)
        gridHelper.position.z = -10 + Math.sin(elapsedTime * 0.45) * 2.2;
        gridHelper.position.y = -14 + Math.sin(elapsedTime * 0.3) * 0.4;
        gridHelper.rotation.z = Math.sin(elapsedTime * 0.2) * 0.012;

        // Orbiting ambient rings
        ringGroup.rotation.z = elapsedTime * 0.02;
        ringGroup.rotation.y = elapsedTime * 0.015;

        // Camera gentle sway
        camera.position.x = mouseX * 8;
        camera.position.y = 5 - mouseY * 6;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      themeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      gridHelper.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    />
  );
}
