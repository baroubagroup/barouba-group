'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Zap, Bot, TrendingUp, Sparkles } from 'lucide-react';
import styles from './Hero3DInteractiveGlobe.module.css';

interface HubCity {
  id: string;
  name: string;
  role: string;
  lat: number;
  lon: number;
  isHQ?: boolean;
}

const HUBS: HubCity[] = [
  { id: 'bobo', name: 'Bobo-Dioulasso', role: 'Siège Afrique de l’Ouest', lat: 11.17, lon: -4.29, isHQ: true },
  { id: 'ouaga', name: 'Ouagadougou', role: 'Pôle Institutionnel', lat: 12.37, lon: -1.52 },
  { id: 'abidjan', name: 'Abidjan', role: 'Pôle Commercial UEMOA', lat: 5.36, lon: -4.01 },
  { id: 'dakar', name: 'Dakar', role: 'Hub Sénégal & Sahel', lat: 14.71, lon: -17.46 },
  { id: 'paris', name: 'Paris / Diaspora', role: 'Investisseurs & Diaspora', lat: 48.85, lon: 2.35 },
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export default function Hero3DInteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCityId, setActiveCityId] = useState<string>('bobo');

  // References for interactive target rotation
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0.15, y: -0.8 });
  const isDraggingRef = useRef(false);
  const previousPointerPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 26);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Main rotating group that contains the globe and its hubs
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const GLOBE_RADIUS = 7.8;

    // --- A. WIREFRAME SPHERE (LATITUDE & LONGITUDE GOLD RINGS) ---
    const sphereWireGeo = new THREE.WireframeGeometry(
      new THREE.SphereGeometry(GLOBE_RADIUS, 24, 18)
    );
    const sphereWireMat = new THREE.LineBasicMaterial({
      color: 0xF5A623,
      transparent: true,
      opacity: 0.18,
      linewidth: 1,
    });
    const sphereWire = new THREE.LineSegments(sphereWireGeo, sphereWireMat);
    globeGroup.add(sphereWire);

    // Inner dark translucent core to occlude backside wireframes
    const innerCoreGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 0.985, 32, 32);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x090C14,
      transparent: true,
      opacity: 0.92,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    globeGroup.add(innerCore);

    // --- B. CENTRAL QUANTUM CORE (GOLDEN ICOSAHEDRON) ---
    const coreGeo = new THREE.IcosahedronGeometry(2.4, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xF5A623,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // Inner glowing sphere
    const glowSphereGeo = new THREE.SphereGeometry(1.5, 16, 16);
    const glowSphereMat = new THREE.MeshBasicMaterial({
      color: 0xFFD700,
      transparent: true,
      opacity: 0.35,
    });
    const glowSphere = new THREE.Mesh(glowSphereGeo, glowSphereMat);
    globeGroup.add(glowSphere);

    // --- C. STRATEGIC GEOLOCATION HUBS ---
    const hubMarkers: { mesh: THREE.Mesh; ring: THREE.Mesh; city: HubCity; pos: THREE.Vector3 }[] = [];
    const boboPos = latLonToVector3(HUBS[0].lat, HUBS[0].lon, GLOBE_RADIUS);

    HUBS.forEach((city) => {
      const pos = latLonToVector3(city.lat, city.lon, GLOBE_RADIUS);

      // Hub glowing dot
      const dotGeo = new THREE.SphereGeometry(city.isHQ ? 0.38 : 0.26, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({
        color: city.isHQ ? 0xFFD700 : 0xF5A623,
      });
      const dotMesh = new THREE.Mesh(dotGeo, dotMat);
      dotMesh.position.copy(pos);
      globeGroup.add(dotMesh);

      // Hub pulsing beacon ring
      const beaconRingGeo = new THREE.RingGeometry(city.isHQ ? 0.45 : 0.35, city.isHQ ? 0.65 : 0.48, 24);
      const beaconRingMat = new THREE.MeshBasicMaterial({
        color: city.isHQ ? 0xFFD700 : 0xF5A623,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const ringMesh = new THREE.Mesh(beaconRingGeo, beaconRingMat);
      ringMesh.position.copy(pos);
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      globeGroup.add(ringMesh);

      hubMarkers.push({ mesh: dotMesh, ring: ringMesh, city, pos });
    });

    // --- D. 3D GOLDEN CURVING ARCS (CONNECTIVITY FROM BOBO TO ALL CITIES) ---
    const arcCurves: { curve: THREE.QuadraticBezierCurve3; pulseMesh: THREE.Mesh }[] = [];

    HUBS.slice(1).forEach((destCity) => {
      const destPos = latLonToVector3(destCity.lat, destCity.lon, GLOBE_RADIUS);

      // Midpoint elevated above the sphere to form an elegant arc
      const mid = new THREE.Vector3().addVectors(boboPos, destPos).multiplyScalar(0.5);
      const elevation = GLOBE_RADIUS * 1.32;
      mid.normalize().multiplyScalar(elevation);

      const curve = new THREE.QuadraticBezierCurve3(boboPos, mid, destPos);
      const points = curve.getPoints(40);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);

      const arcMat = new THREE.LineBasicMaterial({
        color: 0xF5A623,
        transparent: true,
        opacity: 0.55,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arcLine);

      // Traveling light packet (photon)
      const pulseGeo = new THREE.SphereGeometry(0.18, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: 0xFFFFFF,
      });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      globeGroup.add(pulseMesh);

      arcCurves.push({ curve, pulseMesh });
    });

    // --- E. DUAL ORBITAL RINGS (SATELLITE TRAJECTORIES) ---
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    const orbitGeo1 = new THREE.TorusGeometry(10.8, 0.04, 8, 80);
    const orbitMat1 = new THREE.MeshBasicMaterial({
      color: 0xF5A623,
      transparent: true,
      opacity: 0.28,
    });
    const orbitRing1 = new THREE.Mesh(orbitGeo1, orbitMat1);
    orbitRing1.rotation.x = Math.PI / 3;
    orbitRing1.rotation.y = Math.PI / 6;
    orbitGroup.add(orbitRing1);

    const satelliteGeo = new THREE.SphereGeometry(0.24, 12, 12);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
    const satellite1 = new THREE.Mesh(satelliteGeo, satelliteMat);
    orbitRing1.add(satellite1);

    const orbitGeo2 = new THREE.TorusGeometry(12.2, 0.03, 8, 80);
    const orbitMat2 = new THREE.MeshBasicMaterial({
      color: 0xD48806,
      transparent: true,
      opacity: 0.18,
    });
    const orbitRing2 = new THREE.Mesh(orbitGeo2, orbitMat2);
    orbitRing2.rotation.x = -Math.PI / 4;
    orbitRing2.rotation.y = -Math.PI / 5;
    orbitGroup.add(orbitRing2);

    const satellite2 = new THREE.Mesh(satelliteGeo, satelliteMat);
    orbitRing2.add(satellite2);

    // Initial position focused on West Africa (Bobo & Ouaga)
    targetRotationRef.current = { x: 0.18, y: -0.6 };
    globeGroup.rotation.x = 0.18;
    globeGroup.rotation.y = -0.6;

    // --- F. TOUCH / MOUSE DRAG TO SPIN THE GLOBE ---
    const onPointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      previousPointerPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousPointerPositionRef.current.x;
      const deltaY = e.clientY - previousPointerPositionRef.current.y;

      targetRotationRef.current.y += deltaX * 0.008;
      targetRotationRef.current.x += deltaY * 0.008;

      // Clamp X rotation to avoid flipping upside down
      targetRotationRef.current.x = Math.max(-0.8, Math.min(0.8, targetRotationRef.current.x));

      previousPointerPositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 540;
      const newHeight = container.clientHeight || 500;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver for performance
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

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Auto-rotation when user is not actively dragging
      if (!isDraggingRef.current) {
        targetRotationRef.current.y += 0.0022;
      }

      // Smooth inertia lerp for globe rotation
      globeGroup.rotation.y += (targetRotationRef.current.y - globeGroup.rotation.y) * 0.07;
      globeGroup.rotation.x += (targetRotationRef.current.x - globeGroup.rotation.x) * 0.07;

      // Inner quantum core counter-rotation
      coreMesh.rotation.x = -elapsedTime * 0.4;
      coreMesh.rotation.y = elapsedTime * 0.5;

      // Pulsing beacon rings on hubs
      const pulseScale = 1 + Math.sin(elapsedTime * 4) * 0.25;
      hubMarkers.forEach((hub) => {
        hub.ring.scale.set(pulseScale, pulseScale, pulseScale);
      });

      // Animated traveling photons along data arcs
      arcCurves.forEach((item, index) => {
        const speed = 0.45;
        const progress = (elapsedTime * speed + index * 0.28) % 1;
        const pointOnCurve = item.curve.getPoint(progress);
        item.pulseMesh.position.copy(pointOnCurve);
      });

      // Orbital satellites rotation
      satellite1.position.x = Math.cos(elapsedTime * 0.7) * 10.8;
      satellite1.position.y = Math.sin(elapsedTime * 0.7) * 10.8;

      satellite2.position.x = Math.cos(-elapsedTime * 0.5) * 12.2;
      satellite2.position.y = Math.sin(-elapsedTime * 0.5) * 12.2;

      orbitGroup.rotation.z = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      sphereWireGeo.dispose();
      sphereWireMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      glowSphereGeo.dispose();
      glowSphereMat.dispose();
      orbitGeo1.dispose();
      orbitMat1.dispose();
      orbitGeo2.dispose();
      orbitMat2.dispose();
      renderer.dispose();
    };
  }, []);

  // Handler for city buttons: smoothly rotates globe to target city
  const handleSelectCity = (city: HubCity) => {
    setActiveCityId(city.id);
    // Convert city lon/lat to target Y/X angles
    const targetY = -((city.lon + 180) * (Math.PI / 180)) + Math.PI / 2;
    const targetX = ((city.lat) * (Math.PI / 180)) * 0.4;

    targetRotationRef.current = {
      x: Math.max(-0.6, Math.min(0.6, targetX)),
      y: targetY,
    };
  };

  return (
    <div className={styles.globeContainer}>
      {/* Golden Backlight Glow */}
      <div className={styles.backlight} aria-hidden="true" />

      {/* Interactive 3D Canvas */}
      <div ref={containerRef} className={styles.canvasWrapper} />

      {/* Floating Holographic Glass HUD Badges */}
      <div className={`${styles.hudBadge} ${styles.hudBadgeTopRight}`}>
        <div className={styles.hudIconBox}>
          <Zap size={18} />
        </div>
        <div className={styles.hudContent}>
          <span className={styles.hudTitle}>Next.js 16 Edge CDN</span>
          <span className={styles.hudMetric}>&lt; 0.8s Garanti</span>
          <span className={styles.hudSub}>Performance Élite</span>
        </div>
      </div>

      <div className={`${styles.hudBadge} ${styles.hudBadgeMidLeft}`}>
        <div className={styles.hudIconBox}>
          <Bot size={18} />
        </div>
        <div className={styles.hudContent}>
          <span className={styles.hudTitle}>Agent IA 24/7 Connecté</span>
          <span className={styles.hudMetric}>80% Autonome</span>
          <span className={styles.hudSub}>WhatsApp Cloud API</span>
        </div>
      </div>

      <div className={`${styles.hudBadge} ${styles.hudBadgeBottomRight}`}>
        <div className={styles.hudIconBox}>
          <TrendingUp size={18} />
        </div>
        <div className={styles.hudContent}>
          <span className={styles.hudTitle}>ROAS Publicitaire</span>
          <span className={styles.hudMetric}>+185% Croissance</span>
          <span className={styles.hudSub}>Media Buying Scientifique</span>
        </div>
      </div>

      {/* Interactive City Hub Selector (Bottom) */}
      <div className={styles.controlsBar}>
        <div className={styles.cityTabs}>
          {HUBS.map((city) => {
            const isActive = activeCityId === city.id;
            return (
              <button
                key={city.id}
                type="button"
                onClick={() => handleSelectCity(city)}
                className={`${styles.cityBtn} ${isActive ? styles.cityBtnActive : ''}`}
                title={city.role}
              >
                {isActive && <span className={styles.cityDot} />}
                <span>{city.isHQ ? `⭐ ${city.name}` : city.name}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.dragHint}>
          <span className={styles.dragIcon}>✦</span>
          <span>Faites pivoter la sphère 3D à la souris ou au doigt</span>
        </div>
      </div>
    </div>
  );
}
