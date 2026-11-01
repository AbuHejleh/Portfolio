import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

// A distorted wireframe orb that leans toward the pointer
const Orb = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.4,
      0.05
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.3,
      0.05
    );
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <group ref={group}>
        <mesh scale={1.92}>
          <icosahedronGeometry args={[1, 24]} />
          <MeshDistortMaterial
            color="#c8f04a"
            wireframe
            distort={0.42}
            speed={1.6}
            transparent
            opacity={0.55}
          />
        </mesh>
        <mesh scale={1.5}>
          <icosahedronGeometry args={[1, 32]} />
          <MeshDistortMaterial
            color="#1c1c18"
            roughness={0.25}
            metalness={0.8}
            distort={0.35}
            speed={1.6}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2.3, 0, 0]}>
          <torusGeometry args={[2.75, 0.006, 8, 160]} />
          <meshBasicMaterial color="#ece8df" transparent opacity={0.35} />
        </mesh>
        <mesh rotation={[Math.PI / 1.7, 0.5, 0]}>
          <torusGeometry args={[3.2, 0.004, 8, 160]} />
          <meshBasicMaterial color="#ece8df" transparent opacity={0.18} />
        </mesh>
      </group>
    </Float>
  );
};

const OrbCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.5], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 3]} intensity={2.2} color="#ece8df" />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#c8f04a" />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default OrbCanvas;
