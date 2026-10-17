import { Suspense, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Image, Sparkles } from "@react-three/drei";
import * as THREE from "three";

export type SceneCard = { slug: string; title: string; image: string };

interface HeroSceneProps {
  cards: SceneCard[];
  onSelect: (slug: string) => void;
}

const CARD_W = 2.6;
const CARD_H = 1.7;
const GAP = 1.55;
const { lerp } = THREE.MathUtils;

function usePrefersReducedMotion() {
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

/** Tilts the whole fan toward the pointer and scales it to fit the canvas width. */
function Rig({
  children,
  span,
  reduced,
}: {
  children: ReactNode;
  span: number;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Group>(null!);
  const { viewport } = useThree();

  useFrame((state, dt) => {
    const k = 1 - Math.pow(0.002, dt);
    const px = reduced ? 0 : state.pointer.x;
    const py = reduced ? 0 : state.pointer.y;
    ref.current.rotation.y = lerp(ref.current.rotation.y, px * 0.35, k);
    ref.current.rotation.x = lerp(ref.current.rotation.x, -py * 0.12, k);
  });

  const scale = Math.min(1, viewport.width / (span + 0.8));
  return (
    <group ref={ref} scale={scale}>
      {children}
    </group>
  );
}

interface CardProps {
  card: SceneCard;
  offset: number; // distance from the centre card, in slots
  hovered: string | null;
  setHovered: (slug: string | null) => void;
  onSelect: (slug: string) => void;
  reduced: boolean;
  index: number;
}

function DesignCard({
  card,
  offset,
  hovered,
  setHovered,
  onSelect,
  reduced,
  index,
}: CardProps) {
  const ref = useRef<THREE.Group>(null!);
  const isHovered = hovered === card.slug;

  const baseX = offset * GAP;
  const baseZ = -Math.abs(offset) * 0.55;
  const baseRotY = -offset * 0.2;

  // Cards start stacked at the centre and fan out on load (skipped for reduced motion).
  const start: [number, number, number] = reduced
    ? [baseX, 0, baseZ]
    : [0, 0, 0];

  useFrame((_, dt) => {
    const g = ref.current;
    const k = 1 - Math.pow(0.0005, dt);
    g.position.x = lerp(g.position.x, baseX, k);
    g.position.z = lerp(g.position.z, baseZ + (isHovered ? 0.9 : 0), k);
    g.rotation.y = lerp(
      g.rotation.y,
      isHovered ? baseRotY * 0.25 : baseRotY,
      k,
    );
    g.scale.setScalar(lerp(g.scale.x, isHovered ? 1.08 : 1, k));
  });

  const inner = (
    <group ref={ref} position={start} rotation={[0, reduced ? baseRotY : 0, 0]}>
      <Image
        url={card.image}
        scale={[CARD_W, CARD_H]}
        radius={0.06}
        transparent
        toneMapped={false}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(card.slug);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(null);
          document.body.style.cursor = "";
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(card.slug);
        }}
      />
    </group>
  );

  if (reduced) return inner;

  return (
    <Float
      speed={1.2 + (index % 3) * 0.3}
      rotationIntensity={0.12}
      floatIntensity={0.5}
      floatingRange={[-0.08, 0.08]}
    >
      {inner}
    </Float>
  );
}

function Scene({ cards, onSelect }: HeroSceneProps) {
  const reduced = usePrefersReducedMotion();
  const { viewport } = useThree();
  const [hovered, setHovered] = useState<string | null>(null);

  // Fewer cards on narrow screens so they stay readable.
  const count = Math.min(cards.length, viewport.width < 6 ? 3 : 5);
  const visible = cards.slice(0, count);
  const mid = (count - 1) / 2;
  const span = (count - 1) * GAP + CARD_W;

  useEffect(() => () => void (document.body.style.cursor = ""), []);

  return (
    <>
      {!reduced && (
        <Sparkles
          count={70}
          scale={[14, 6, 5]}
          size={2.2}
          speed={0.25}
          opacity={0.6}
          color="#a5b4fc"
        />
      )}
      <Rig span={span} reduced={reduced}>
        {visible.map((card, i) => (
          <DesignCard
            key={card.slug}
            card={card}
            index={i}
            offset={i - mid}
            hovered={hovered}
            setHovered={setHovered}
            onSelect={onSelect}
            reduced={reduced}
          />
        ))}
      </Rig>
    </>
  );
}

export default function HeroScene(props: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene {...props} />
      </Suspense>
    </Canvas>
  );
}
