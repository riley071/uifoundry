import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export type PlaygroundShape = "blob" | "knot" | "ring";

export interface PlaygroundSettings {
  shape: PlaygroundShape;
  distort: number; // 0 - 1
  speed: number; // 0 - 3
  wireframe: boolean;
  color: string;
}

const { lerp } = THREE.MathUtils;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function Shape({
  settings,
  reduced,
}: {
  settings: PlaygroundSettings;
  reduced: boolean;
}) {
  const tilt = useRef<THREE.Group>(null!);
  const spin = useRef<THREE.Mesh>(null!);
  const speed = reduced ? 0 : settings.speed;

  useFrame((state, dt) => {
    const k = 1 - Math.pow(0.002, dt);
    // The object leans toward the cursor; no drag handlers, so touch scrolling still works.
    tilt.current.rotation.y = lerp(
      tilt.current.rotation.y,
      reduced ? 0 : state.pointer.x * 0.6,
      k,
    );
    tilt.current.rotation.x = lerp(
      tilt.current.rotation.x,
      reduced ? 0 : -state.pointer.y * 0.4,
      k,
    );
    spin.current.rotation.y += dt * 0.35 * speed;
    spin.current.rotation.x += dt * 0.12 * speed;
  });

  return (
    <group ref={tilt}>
      <mesh ref={spin} key={settings.shape}>
        {settings.shape === "blob" && <icosahedronGeometry args={[1.35, 16]} />}
        {settings.shape === "knot" && (
          <torusKnotGeometry args={[0.9, 0.32, 200, 32]} />
        )}
        {settings.shape === "ring" && (
          <torusGeometry args={[1.1, 0.46, 48, 128]} />
        )}
        <MeshDistortMaterial
          color={settings.color}
          distort={settings.distort}
          speed={speed * 2}
          roughness={0.25}
          metalness={0.2}
          wireframe={settings.wireframe}
        />
      </mesh>
    </group>
  );
}

export default function MotionPlayground({
  settings,
}: {
  settings: PlaygroundSettings;
}) {
  const reduced = useReducedMotion();
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#8b5cf6" />
      <Suspense fallback={null}>
        <Shape settings={settings} reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
