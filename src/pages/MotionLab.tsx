import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import SceneBoundary from "../components/SceneBoundary";
import type {
  PlaygroundSettings,
  PlaygroundShape,
} from "../components/MotionPlayground";

const MotionPlayground = lazy(
  () => import("../components/MotionPlayground"),
);

/* ------------------------------------------------------------------ */
/* Catalog data                                                        */
/* ------------------------------------------------------------------ */

const categories = [
  {
    id: "scroll",
    title: "Scroll Reveal",
    count: 5,
    color: "from-violet-500 to-purple-600",
    description: "Fade, slide and scale animations triggered on scroll",
  },
  {
    id: "hover",
    title: "Hover Effects",
    count: 6,
    color: "from-blue-500 to-cyan-500",
    description: "Card lifts, image zooms, button glows and hover states",
  },
  {
    id: "text",
    title: "Text Animations",
    count: 5,
    color: "from-amber-500 to-orange-500",
    description: "Typewriter, gradient text, word reveals and split text",
  },
  {
    id: "loaders",
    title: "Loaders",
    count: 4,
    color: "from-emerald-500 to-teal-500",
    description: "Spinners, skeleton screens, progress bars and loading states",
  },
  {
    id: "micro",
    title: "Micro-interactions",
    count: 5,
    color: "from-rose-500 to-pink-500",
    description: "Button feedback, toggles, form states and subtle reactions",
  },
  {
    id: "page",
    title: "Page Transitions",
    count: 4,
    color: "from-indigo-500 to-blue-600",
    description: "Route changes, shared elements and view animations",
  },
  {
    id: "parallax",
    title: "Parallax Effects",
    count: 3,
    color: "from-sky-500 to-blue-500",
    description: "Depth scrolling, layered backgrounds and mouse-follow",
  },
  {
    id: "stagger",
    title: "Staggered Lists",
    count: 4,
    color: "from-fuchsia-500 to-purple-500",
    description: "Cascade animations for lists, grids and sequential reveals",
  },
  {
    id: "3d",
    title: "3D Transforms",
    count: 3,
    color: "from-lime-500 to-green-500",
    description: "Card flips, 3D tilt, perspective and depth animations",
  },
];

const allAnimations = [
  {
    id: 1,
    category: "scroll",
    title: "Fade Up on Scroll",
    description: "Elements fade and slide up as they enter the viewport",
    tag: "CSS + Intersection Observer",
  },
  {
    id: 2,
    category: "scroll",
    title: "Scale In on Scroll",
    description: "Soft scale-up animation when scrolled into view",
    tag: "CSS + Intersection Observer",
  },
  {
    id: 3,
    category: "scroll",
    title: "Slide from Left/Right",
    description: "Directional slide reveals from left or right",
    tag: "CSS + Intersection Observer",
  },
  {
    id: 4,
    category: "scroll",
    title: "Staggered Scroll Reveal",
    description: "Children animate one after another on scroll",
    tag: "Framer Motion",
  },
  {
    id: 5,
    category: "scroll",
    title: "Blur to Clear",
    description: "Content starts blurred and becomes sharp on scroll",
    tag: "CSS + Intersection Observer",
  },
  {
    id: 6,
    category: "hover",
    title: "Card Lift",
    description: "Card elevates with shadow on hover",
    tag: "CSS Transitions",
  },
  {
    id: 7,
    category: "hover",
    title: "Image Zoom",
    description: "Smooth image scale on card hover",
    tag: "CSS Transitions",
  },
  {
    id: 8,
    category: "hover",
    title: "Button Glow",
    description: "Subtle glow and scale on button hover",
    tag: "CSS Transitions",
  },
  {
    id: 9,
    category: "hover",
    title: "Border Draw",
    description: "Animated border that draws around the element",
    tag: "CSS Transitions",
  },
  {
    id: 10,
    category: "hover",
    title: "Icon Spin / Bounce",
    description: "Icon rotates or bounces on hover",
    tag: "CSS Transitions",
  },
  {
    id: 11,
    category: "hover",
    title: "Overlay Reveal",
    description: "Dark overlay + text appears on image hover",
    tag: "CSS Transitions",
  },
  {
    id: 12,
    category: "text",
    title: "Typewriter Effect",
    description: "Text types out character by character",
    tag: "Framer Motion",
  },
  {
    id: 13,
    category: "text",
    title: "Gradient Text",
    description: "Animated gradient flowing through text",
    tag: "CSS Animations",
  },
  {
    id: 14,
    category: "text",
    title: "Word by Word Reveal",
    description: "Each word fades in sequentially",
    tag: "Framer Motion",
  },
  {
    id: 15,
    category: "text",
    title: "Split Text Animation",
    description: "Letters animate individually with stagger",
    tag: "Framer Motion",
  },
  {
    id: 16,
    category: "text",
    title: "Text Scramble",
    description: "Characters scramble then resolve into final text",
    tag: "JS",
  },
  {
    id: 17,
    category: "loaders",
    title: "Spinner",
    description: "Clean circular loading spinner",
    tag: "CSS Animations",
  },
  {
    id: 18,
    category: "loaders",
    title: "Skeleton Screen",
    description: "Placeholder shimmer for content loading",
    tag: "CSS Animations",
  },
  {
    id: 19,
    category: "loaders",
    title: "Progress Bar",
    description: "Animated progress bar with percentage",
    tag: "CSS + JS",
  },
  {
    id: 20,
    category: "loaders",
    title: "Dots Loader",
    description: "Three bouncing dots loading indicator",
    tag: "CSS Animations",
  },
  {
    id: 21,
    category: "micro",
    title: "Button Press Feedback",
    description: "Scale down + ripple on click",
    tag: "CSS + JS",
  },
  {
    id: 22,
    category: "micro",
    title: "Toggle Switch",
    description: "Smooth animated toggle with state",
    tag: "CSS Transitions",
  },
  {
    id: 23,
    category: "micro",
    title: "Form Validation",
    description: "Shake + color change on invalid input",
    tag: "CSS + JS",
  },
  {
    id: 24,
    category: "micro",
    title: "Like / Heart Burst",
    description: "Heart scales and bursts on like",
    tag: "CSS + JS",
  },
  {
    id: 25,
    category: "micro",
    title: "Checkbox Tick",
    description: "Animated checkmark on select",
    tag: "CSS Transitions",
  },
  {
    id: 26,
    category: "page",
    title: "Fade Page Transition",
    description: "Simple fade between routes",
    tag: "Framer Motion",
  },
  {
    id: 27,
    category: "page",
    title: "Slide Page Transition",
    description: "Pages slide left/right on navigate",
    tag: "Framer Motion",
  },
  {
    id: 28,
    category: "page",
    title: "Shared Element",
    description: "Image/card morphs into detail view",
    tag: "Framer Motion",
  },
  {
    id: 29,
    category: "page",
    title: "Curtain Reveal",
    description: "Content revealed with curtain wipe",
    tag: "Framer Motion",
  },
  {
    id: 30,
    category: "parallax",
    title: "Background Parallax",
    description: "Background moves slower than content",
    tag: "CSS + JS",
  },
  {
    id: 31,
    category: "parallax",
    title: "Mouse Follow Parallax",
    description: "Layers shift based on mouse position",
    tag: "JS",
  },
  {
    id: 32,
    category: "parallax",
    title: "Multi-layer Scroll",
    description: "Multiple depth layers on scroll",
    tag: "CSS + JS",
  },
  {
    id: 33,
    category: "stagger",
    title: "List Cascade",
    description: "List items appear one after another",
    tag: "Framer Motion",
  },
  {
    id: 34,
    category: "stagger",
    title: "Grid Stagger",
    description: "Grid cards animate in with delay",
    tag: "Framer Motion",
  },
  {
    id: 35,
    category: "stagger",
    title: "Menu Stagger",
    description: "Navigation links stagger on open",
    tag: "Framer Motion",
  },
  {
    id: 36,
    category: "stagger",
    title: "Feature Stagger",
    description: "Feature icons cascade into view",
    tag: "Framer Motion",
  },
  {
    id: 37,
    category: "3d",
    title: "Card Flip",
    description: "Card flips to reveal back content",
    tag: "CSS 3D",
  },
  {
    id: 38,
    category: "3d",
    title: "3D Tilt",
    description: "Card tilts toward mouse cursor",
    tag: "CSS + JS",
  },
  {
    id: 39,
    category: "3d",
    title: "Perspective Hover",
    description: "Subtle 3D perspective on hover",
    tag: "CSS 3D",
  },
];

/* ------------------------------------------------------------------ */
/* Live demos (plain CSS + small JS, no extra dependencies)            */
/* ------------------------------------------------------------------ */

const keyframes = `
@keyframes ml-fade-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
@keyframes ml-scale-in { from { opacity: 0; transform: scale(.7); } to { opacity: 1; transform: none; } }
@keyframes ml-slide-l { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: none; } }
@keyframes ml-slide-r { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: none; } }
@keyframes ml-blur { from { opacity: .4; filter: blur(10px); } to { opacity: 1; filter: none; } }
@keyframes ml-spin { to { transform: rotate(360deg); } }
@keyframes ml-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
@keyframes ml-dot { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } }
@keyframes ml-gradient { to { background-position: 200% 50%; } }
@keyframes ml-burst { 0% { transform: scale(1); } 40% { transform: scale(1.6); } 100% { transform: scale(1); } }
@keyframes ml-shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }
@keyframes ml-progress { from { width: 0; } to { width: 100%; } }
@keyframes ml-press { 0% { transform: scale(1); } 40% { transform: scale(.92); } 100% { transform: scale(1); } }
@media (prefers-reduced-motion: reduce) {
  .ml-demo *, .ml-demo { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
}`;

const prefersReduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Reports "on" while the pointer is over the demo, or for ~1.2s after Play Demo is pressed. */
const Hover = ({
  run,
  children,
}: {
  run: number;
  children: (on: boolean) => ReactNode;
}) => {
  const [hover, setHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (run === 0) return;
    setPlaying(true);
    const t = setTimeout(() => setPlaying(false), 1200);
    return () => clearTimeout(t);
  }, [run]);
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      {children(hover || playing)}
    </div>
  );
};

const Typewriter = ({ run }: { run: number }) => {
  const full = "Design that types itself";
  const [n, setN] = useState(0);
  useEffect(() => {
    if (prefersReduced()) return setN(full.length);
    setN(0);
    const id = setInterval(
      () => setN((v) => (v >= full.length ? (clearInterval(id), v) : v + 1)),
      60,
    );
    return () => clearInterval(id);
  }, [run]);
  return (
    <p className="text-sm font-medium text-slate-800">
      {full.slice(0, n)}
      <span className="ml-0.5 inline-block h-4 w-0.5 bg-brand-600 align-middle animate-pulse" />
    </p>
  );
};

const Scramble = ({ run }: { run: number }) => {
  const full = "Resolve into form";
  const glyphs = "!<>-_\\/[]{}=+*^?#";
  const [text, setText] = useState(full);
  useEffect(() => {
    if (prefersReduced()) return setText(full);
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      const out = full
        .split("")
        .map((c, i) =>
          c === " " || i < step / 2
            ? c
            : glyphs[Math.floor(Math.random() * glyphs.length)],
        )
        .join("");
      setText(out);
      if (step / 2 >= full.length) {
        clearInterval(id);
        setText(full);
      }
    }, 45);
    return () => clearInterval(id);
  }, [run]);
  return <p className="font-mono text-sm font-medium text-slate-800">{text}</p>;
};

const Toggle = ({ run }: { run: number }) => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (run > 0) setOn((v) => !v);
  }, [run]);
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label="Demo toggle"
      onClick={() => setOn(!on)}
      className={`relative h-8 w-14 rounded-full transition-colors duration-300 ${on ? "bg-brand-600" : "bg-slate-300"}`}
    >
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${on ? "translate-x-6" : ""}`}
      />
    </button>
  );
};

const Like = ({ run }: { run: number }) => {
  const [burst, setBurst] = useState(0);
  useEffect(() => {
    if (run > 0) setBurst((b) => b + 1);
  }, [run]);
  return (
    <button
      aria-label="Like"
      onClick={() => setBurst((b) => b + 1)}
      className="text-4xl leading-none"
    >
      <span
        key={burst}
        className={`inline-block ${burst > 0 ? "text-rose-500" : "text-slate-400"}`}
        style={burst > 0 ? { animation: "ml-burst .5s ease" } : undefined}
      >
        ♥
      </span>
    </button>
  );
};

const Tilt = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(500px) rotateY(${x * 28}deg) rotateX(${-y * 28}deg)`;
  };
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      onPointerMove={onMove}
      onPointerLeave={() => ref.current && (ref.current.style.transform = "")}
    >
      <div
        ref={ref}
        className="h-20 w-32 rounded-xl bg-gradient-to-br from-lime-500 to-green-500 shadow-lg transition-transform duration-100"
      />
    </div>
  );
};

const anim = (name: string, extra = ".7s ease both") => ({
  animation: `${name} ${extra}`,
});

const demos: Record<number, (run: number) => ReactNode> = {
  1: (run) => (
    <div
      key={run}
      style={anim("ml-fade-up")}
      className="h-16 w-28 rounded-xl bg-white shadow-md"
    />
  ),
  2: (run) => (
    <div
      key={run}
      style={anim("ml-scale-in", ".6s cubic-bezier(.2,.8,.2,1) both")}
      className="h-16 w-28 rounded-xl bg-white shadow-md"
    />
  ),
  3: (run) => (
    <div key={run} className="flex gap-3">
      <div
        style={anim("ml-slide-l")}
        className="h-12 w-12 rounded-lg bg-violet-500"
      />
      <div
        style={anim("ml-slide-r")}
        className="h-12 w-12 rounded-lg bg-brand-500"
      />
    </div>
  ),
  5: (run) => (
    <p
      key={run}
      style={anim("ml-blur", "1s ease both")}
      className="text-xl font-bold text-slate-800"
    >
      Coming into focus
    </p>
  ),
  6: (run) => (
    <Hover run={run}>
      {(on) => (
        <div
          className={`h-16 w-28 rounded-xl bg-white transition-all duration-300 ${on ? "-translate-y-2 shadow-xl" : "shadow-sm"}`}
        />
      )}
    </Hover>
  ),
  7: (run) => (
    <Hover run={run}>
      {(on) => (
        <div className="h-16 w-28 overflow-hidden rounded-xl">
          <div
            className={`h-full w-full bg-gradient-to-br from-blue-500 to-cyan-400 transition-transform duration-500 ${on ? "scale-125" : ""}`}
          />
        </div>
      )}
    </Hover>
  ),
  8: (run) => (
    <Hover run={run}>
      {(on) => (
        <span
          className={`rounded-lg bg-brand-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 ${on ? "scale-105 shadow-[0_0_26px_rgba(99,102,241,.75)]" : ""}`}
        >
          Glow
        </span>
      )}
    </Hover>
  ),
  10: (run) => (
    <Hover run={run}>
      {(on) => (
        <span
          className={`inline-block text-4xl text-amber-500 transition-transform duration-500 ${on ? "rotate-[360deg] scale-110" : ""}`}
        >
          ★
        </span>
      )}
    </Hover>
  ),
  12: (run) => <Typewriter run={run} />,
  13: () => (
    <span
      className="bg-clip-text text-3xl font-bold text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(90deg,#6366f1,#ec4899,#f59e0b,#6366f1)",
        backgroundSize: "200% 100%",
        animation: "ml-gradient 3s linear infinite",
      }}
    >
      Gradient
    </span>
  ),
  14: (run) => (
    <p key={run}>
      {["Each", "word", "fades", "in"].map((w, i) => (
        <span
          key={w}
          style={{
            ...anim("ml-fade-up", ".5s ease both"),
            animationDelay: `${i * 0.15}s`,
          }}
          className="mr-1.5 inline-block text-sm font-medium text-slate-800"
        >
          {w}
        </span>
      ))}
    </p>
  ),
  16: (run) => <Scramble run={run} />,
  17: () => (
    <div
      className="h-9 w-9 rounded-full border-4 border-slate-300 border-t-brand-600"
      style={{ animation: "ml-spin .8s linear infinite" }}
    />
  ),
  18: () => (
    <div className="w-40 space-y-2">
      {[100, 80, 60].map((w) => (
        <div
          key={w}
          className="h-3 rounded"
          style={{
            width: `${w}%`,
            backgroundImage:
              "linear-gradient(90deg,#e2e8f0 25%,#f8fafc 50%,#e2e8f0 75%)",
            backgroundSize: "200% 100%",
            animation: "ml-shimmer 1.5s linear infinite",
          }}
        />
      ))}
    </div>
  ),
  19: (run) => (
    <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-300">
      <div
        key={run}
        className="h-full bg-brand-600"
        style={anim("ml-progress", "2s ease-out both")}
      />
    </div>
  ),
  20: () => (
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-3 w-3 rounded-full bg-emerald-500"
          style={{
            animation: "ml-dot 1s ease-in-out infinite",
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  ),
  21: (run) => (
    <button
      key={run}
      style={run > 0 ? anim("ml-press", ".3s ease") : undefined}
      className="rounded-lg bg-rose-500 px-5 py-2 text-sm font-medium text-white active:scale-95 transition-transform"
    >
      Press me
    </button>
  ),
  22: (run) => <Toggle run={run} />,
  23: (run) => (
    <input
      key={run}
      readOnly
      aria-label="Demo input"
      value={run > 0 ? "not an email" : ""}
      placeholder="Email address"
      style={run > 0 ? anim("ml-shake", ".4s ease") : undefined}
      className={`w-40 rounded-lg border-2 px-3 py-2 text-sm focus:outline-none ${run > 0 ? "border-rose-500 text-rose-600" : "border-slate-300"}`}
    />
  ),
  24: (run) => <Like run={run} />,
  37: (run) => (
    <Hover run={run}>
      {(on) => (
        <div style={{ perspective: 600 }}>
          <div
            className="relative h-16 w-28 transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: on ? "rotateY(180deg)" : "none",
            }}
          >
            <div
              style={{ backfaceVisibility: "hidden" }}
              className="absolute inset-0 flex items-center justify-center rounded-xl bg-brand-600 text-sm font-medium text-white"
            >
              Front
            </div>
            <div
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
              className="absolute inset-0 flex items-center justify-center rounded-xl bg-violet-500 text-sm font-medium text-white"
            >
              Back
            </div>
          </div>
        </div>
      )}
    </Hover>
  ),
  38: () => <Tilt />,
};

const hoverHint: Record<number, string> = {
  6: "Hover or press Play",
  7: "Hover or press Play",
  8: "Hover or press Play",
  10: "Hover or press Play",
  37: "Hover or press Play",
  38: "Move your cursor over the card",
  22: "Click the switch or press Play",
  24: "Click the heart or press Play",
};

/* ------------------------------------------------------------------ */
/* 3D playground controls                                              */
/* ------------------------------------------------------------------ */

const swatches = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#38bdf8"];
const shapes: { id: PlaygroundShape; label: string }[] = [
  { id: "blob", label: "Blob" },
  { id: "knot", label: "Knot" },
  { id: "ring", label: "Ring" },
];
const presets: { label: string; values: Partial<PlaygroundSettings> }[] = [
  { label: "Calm", values: { distort: 0.15, speed: 0.6, wireframe: false } },
  { label: "Liquid", values: { distort: 0.6, speed: 1.6, wireframe: false } },
  {
    label: "Blueprint",
    values: { distort: 0.25, speed: 0.8, wireframe: true },
  },
];

const MotionLab = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [runs, setRuns] = useState<Record<number, number>>({});
  const [settings, setSettings] = useState<PlaygroundSettings>({
    shape: "blob",
    distort: 0.4,
    speed: 1,
    wireframe: false,
    color: "#6366f1",
  });
  const update = (patch: Partial<PlaygroundSettings>) =>
    setSettings((s) => ({ ...s, ...patch }));

  const filtered = allAnimations.filter((a) => {
    const matchesCategory = activeCategory
      ? a.category === activeCategory
      : true;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      q === "" ||
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const currentCategory = categories.find((c) => c.id === activeCategory);
  const showList = activeCategory !== null || searchQuery !== "";

  return (
    <div>
      <style>{keyframes}</style>

      {/* Header + 3D playground */}
      <div className="relative overflow-hidden bg-brand-950 text-white">
        <div className="pointer-events-none absolute -top-32 left-1/3 h-72 w-[600px] rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-3">
            Motion Lab
          </h1>
          <p className="text-slate-300 max-w-xl mb-10">
            Animations you can run right here. Reshape the 3D object below, then
            press Play Demo on any card.
          </p>

          <div className="grid lg:grid-cols-[1fr_320px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="relative h-[320px] lg:h-[440px]">
              <SceneBoundary
                fallback={
                  <div className="flex h-full items-center justify-center text-sm text-slate-400">
                    3D preview needs WebGL, which this browser has turned off.
                  </div>
                }
              >
                <Suspense fallback={<div className="h-full" aria-hidden />}>
                  <MotionPlayground settings={settings} />
                </Suspense>
              </SceneBoundary>
              <p className="pointer-events-none absolute bottom-3 inset-x-0 text-center text-sm text-slate-400">
                Move your cursor to turn it.
              </p>
            </div>

            <div className="space-y-5 border-t lg:border-t-0 lg:border-l border-white/10 p-6">
              <fieldset>
                <legend className="mb-2 text-sm font-semibold">Shape</legend>
                <div className="flex gap-2">
                  {shapes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => update({ shape: s.id })}
                      aria-pressed={settings.shape === s.id}
                      className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        settings.shape === s.id
                          ? "bg-white text-brand-950"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="block text-sm font-semibold">
                Distortion
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={settings.distort}
                  onChange={(e) => update({ distort: +e.target.value })}
                  className="mt-2 w-full accent-brand-500"
                />
              </label>
              <label className="block text-sm font-semibold">
                Speed
                <input
                  type="range"
                  min={0}
                  max={3}
                  step={0.1}
                  value={settings.speed}
                  onChange={(e) => update({ speed: +e.target.value })}
                  className="mt-2 w-full accent-brand-500"
                />
              </label>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold">Color</legend>
                <div className="flex gap-2">
                  {swatches.map((c) => (
                    <button
                      key={c}
                      aria-label={`Color ${c}`}
                      aria-pressed={settings.color === c}
                      onClick={() => update({ color: c })}
                      style={{ backgroundColor: c }}
                      className={`h-8 w-8 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        settings.color === c
                          ? "ring-2 ring-white ring-offset-2 ring-offset-brand-950"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </fieldset>

              <label className="flex items-center gap-2.5 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.wireframe}
                  onChange={(e) => update({ wireframe: e.target.checked })}
                  className="h-4 w-4 rounded accent-brand-500"
                />
                Show wireframe
              </label>

              <div>
                <p className="mb-2 text-sm font-semibold">Presets</p>
                <div className="flex gap-2">
                  {presets.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => update(p.values)}
                      className="flex-1 rounded-lg border border-white/20 px-2 py-2 text-sm hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              aria-label="Search animations"
              placeholder="Search animations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
          <p className="text-sm text-slate-500" aria-live="polite">
            <span className="font-medium text-slate-800">
              {filtered.length}
            </span>{" "}
            animations
          </p>
        </div>

        {/* Category grid */}
        {!showList && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="group text-left bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <div className="h-32 bg-slate-50 flex items-center justify-center">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {cat.count} animations
                    </span>
                    <span className="text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition">
                      Browse
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Animation list */}
        {showList && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setSearchQuery("");
                }}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                All categories
              </button>
              <span className="text-slate-300">/</span>
              <h2 className="text-xl font-bold text-slate-900">
                {currentCategory?.title ?? "Search results"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((a) => {
                const cat = categories.find((c) => c.id === a.category);
                const run = runs[a.id] ?? 0;
                const demo = demos[a.id];
                return (
                  <div
                    key={a.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-brand-200 transition group"
                  >
                    <div className="ml-demo relative h-32 rounded-xl bg-slate-100 mb-4 flex items-center justify-center overflow-hidden">
                      {demo ? (
                        <>
                          {demo(run)}
                          {hoverHint[a.id] && (
                            <span className="pointer-events-none absolute bottom-1.5 inset-x-0 text-center text-xs text-slate-400">
                              {hoverHint[a.id]}
                            </span>
                          )}
                        </>
                      ) : (
                        <>
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat?.color ?? "from-brand-500 to-violet-500"}`}
                          />
                          <span className="absolute bottom-1.5 inset-x-0 text-center text-xs text-slate-400">
                            Live demo coming soon
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition">
                      {a.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                      {a.description}
                    </p>
                    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 mb-4">
                      {a.tag}
                    </span>
                    <div className="flex gap-2">
                      <button
                        disabled={!demo}
                        onClick={() =>
                          setRuns((r) => ({ ...r, [a.id]: (r[a.id] ?? 0) + 1 }))
                        }
                        className="flex-1 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Play demo
                      </button>
                      <button className="flex-1 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
                        View code
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-slate-500">
                No animations match your search. Try a different word.
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative overflow-hidden mt-16 rounded-3xl bg-brand-950 px-8 py-14 text-white">
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="relative max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Need a custom animation?
            </h2>
            <p className="text-slate-300 mb-6">
              We can build a motion package that matches your brand and your
              project.
            </p>
            <button className="px-6 py-3 rounded-xl bg-white text-brand-950 font-semibold hover:bg-brand-50 transition">
              Request custom motion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionLab;
