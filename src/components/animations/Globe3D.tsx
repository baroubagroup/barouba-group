'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// --- Atmospheric Orbiting Ring ---
function OrbitRing({ 
  radius, 
  rotation = [0, 0, 0], 
  color = '#F5A623', 
  opacity = 0.15 
}: { 
  radius: number; 
  rotation?: [number, number, number]; 
  color?: string; 
  opacity?: number;
}) {
  return (
    <group rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, 0.006, 16, 120]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} depthWrite={false} />
      </mesh>
    </group>
  );
}

// --- High-End Orbiting Tag Badge (Luxury 3D Depth) ---
function OrbitTag({ 
  label, 
  radius, 
  speed, 
  angleOffset, 
  inclinationX = 0, 
  inclinationZ = 0,
  accentColor = '#FFD700'
}: {
  label: string;
  radius: number;
  speed: number;
  angleOffset: number;
  inclinationX?: number;
  inclinationZ?: number;
  accentColor?: string;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * speed + angleOffset;
    groupRef.current.rotation.y = t;
  });

  return (
    <group rotation={[inclinationX, 0, inclinationZ]}>
      <group ref={groupRef}>
        <group position={[radius, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          {/* Subtle glow halo plane behind text */}
          <mesh position={[0, 0, -0.01]}>
            <planeGeometry args={[0.9, 0.28]} />
            <meshBasicMaterial 
              color="#040407" 
              transparent 
              opacity={0.7} 
              side={THREE.DoubleSide} 
              depthWrite={false}
            />
          </mesh>

          {/* Thin metallic gold border around tag */}
          <lineSegments position={[0, 0, -0.005]}>
            <edgesGeometry args={[new THREE.PlaneGeometry(0.9, 0.28)]} />
            <lineBasicMaterial color={accentColor} transparent opacity={0.35} />
          </lineSegments>

          {/* Clean Vector Typography */}
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.095}
            color="#FFFFFF"
            material-toneMapped={false}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.06}
            fontWeight="bold"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf"
          >
            {label}
          </Text>
        </group>
      </group>
    </group>
  );
}

// --- Particle Constellation Cloud ---
function Particles({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.025;
      ref.current.rotation.x = clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#F5A623"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// --- Central High-Precision Holographic Emblem ---
function LogoCoin() {
  const meshRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('/logo-barouba.png');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.45;
      meshRef.current.position.y = Math.sin(t * 1.2) * 0.05;
    }
    if (glowRef.current) {
      const s = 1 + Math.sin(t * 2) * 0.06;
      glowRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer ambient golden atmospheric field */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial 
          color="#F5A623" 
          transparent 
          opacity={0.07} 
          side={THREE.BackSide} 
          depthWrite={false} 
        />
      </mesh>

      {/* Front Face of Emblem */}
      <mesh position={[0, 0, 0.045]}>
        <circleGeometry args={[0.88, 64]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>

      {/* Back Face (non-mirrored) */}
      <mesh position={[0, 0, -0.045]} rotation={[0, Math.PI, 0]}>
        <circleGeometry args={[0.88, 64]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>

      {/* Precision Metallic Gold Edge Rim */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.88, 0.88, 0.09, 64]} />
        <meshStandardMaterial 
          color="#F5A623" 
          metalness={0.95} 
          roughness={0.12}
          emissive="#241300"
        />
      </mesh>
    </group>
  );
}

// --- Interactive Mouse Tilt Controller ---
function CameraRig() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useFrame(() => {
    target.current.x += (mouseRef.current.x - target.current.x) * 0.035;
    target.current.y += (mouseRef.current.y - target.current.y) * 0.035;
    camera.position.x = target.current.x * 0.5;
    camera.position.y = target.current.y * 0.35;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// --- Scene Assembly ---
function Scene() {
  const CORE_SERVICES = [
    { label: 'INGÉNIERIE WEB', radius: 1.45, speed: 0.22, angleOffset: 0, inclinationX: 0.1, inclinationZ: 0.2, accentColor: '#FFD700' },
    { label: 'AGENTS IA', radius: 1.68, speed: -0.20, angleOffset: 1.5, inclinationX: -0.18, inclinationZ: -0.12, accentColor: '#F5A623' },
    { label: 'ACQUISITION 360°', radius: 1.82, speed: 0.26, angleOffset: 3.1, inclinationX: 0.22, inclinationZ: 0.05, accentColor: '#E67814' },
    { label: 'TUNNELS & SCALE', radius: 1.98, speed: -0.24, angleOffset: 4.4, inclinationX: -0.12, inclinationZ: 0.22, accentColor: '#FFC837' },
    { label: 'E-COMMERCE GLOBAL', radius: 2.15, speed: 0.28, angleOffset: 0.9, inclinationX: 0.16, inclinationZ: -0.16, accentColor: '#F5A623' },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 3]} intensity={2.2} color="#FFD700" />
      <pointLight position={[-4, -3, -2]} intensity={1.2} color="#E67814" />
      <pointLight position={[0, 4, -3]} intensity={0.8} color="#6366F1" />

      <CameraRig />
      <Particles count={240} />

      {/* Sophisticated Architectural Orbit Rings */}
      <OrbitRing radius={1.45} rotation={[0.1, 0, 0.2]} opacity={0.14} color="#FFD700" />
      <OrbitRing radius={1.68} rotation={[-0.18, 0, -0.12]} opacity={0.11} color="#F5A623" />
      <OrbitRing radius={1.82} rotation={[0.22, 0, 0.05]} opacity={0.12} color="#E67814" />
      <OrbitRing radius={1.98} rotation={[-0.12, 0, 0.22]} opacity={0.09} color="#FFC837" />
      <OrbitRing radius={2.15} rotation={[0.16, 0, -0.16]} opacity={0.07} color="#F5A623" />

      <LogoCoin />

      {CORE_SERVICES.map((tag) => (
        <Float key={tag.label} speed={1.2} rotationIntensity={0} floatIntensity={0.25}>
          <OrbitTag {...tag} />
        </Float>
      ))}
    </>
  );
}

export default function Globe3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 4.3], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
