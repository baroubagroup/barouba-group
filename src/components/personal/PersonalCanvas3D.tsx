'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PersonalCanvas3DProps {
  accentColor?: string;
}

export default function PersonalCanvas3D({ accentColor = '#F5A623' }: PersonalCanvas3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Ensure canvas never overflows
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    // 2. Cosmic Gold Dust (500 dynamic particles)
    const particleCount = 500;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const alphas = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 8 + Math.random() * 26;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);
      alphas[i] = Math.random() * 0.7 + 0.3;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle sprite
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
      size: 1.25,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xFFD700,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Central Sacred Core: Golden Wireframe Icosahedron & Ring
    const coreGroup = new THREE.Group();
    coreGroup.position.set(10, 0, 0); // Positioned subtly behind the right side / portrait
    scene.add(coreGroup);

    const icosaGeo = new THREE.IcosahedronGeometry(7.5, 1);
    const icosaMat = new THREE.MeshBasicMaterial({
      color: 0xF5A623,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, icosaMat);
    coreGroup.add(icosaMesh);

    // Inner glowing octahedron
    const innerGeo = new THREE.OctahedronGeometry(4.2, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xFFD700,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Ambient orbit ring
    const ringGeo = new THREE.TorusGeometry(11, 0.04, 12, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xF5A623,
      transparent: true,
      opacity: 0.25,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh);

    // Responsive position check for mobile vs desktop
    const updateCorePosition = () => {
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        coreGroup.position.set(0, 4, -4);
        coreGroup.scale.set(0.68, 0.68, 0.68);
      } else {
        coreGroup.position.set(10, 0, 0);
        coreGroup.scale.set(1, 1, 1);
      }
    };
    updateCorePosition();

    // Mouse parallax (desktop only)
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      updateCorePosition();
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause when not visible
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          isVisible = e.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Rotate particle cloud gently
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

        // Counter-rotating sacred geometry core
        icosaMesh.rotation.x = elapsedTime * 0.12;
        icosaMesh.rotation.y = elapsedTime * 0.16;

        innerMesh.rotation.x = -elapsedTime * 0.18;
        innerMesh.rotation.y = -elapsedTime * 0.22;

        ringMesh.rotation.z = elapsedTime * 0.08;

        // Smooth camera lerp
        camera.position.x += (mouseX * 4 - camera.position.x) * 0.04;
        camera.position.y += (-mouseY * 3 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      icosaGeo.dispose();
      icosaMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [accentColor]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
      aria-hidden="true"
    />
  );
}
