import { NativePlayback, NativeTimer, easings } from './native';
import type { MotionOptions } from './native';
import { advancedDemos } from './advanced';
export const topics = [
  ['getting-started', 'Getting started'], ['timer', 'Timer'], ['animation', 'Animation'],
  ['timeline', 'Timeline'], ['animatable', 'Animatable'], ['draggable', 'Draggable'],
  ['layout', 'Layout'], ['scope', 'Scope'], ['events', 'Events'], ['svg', 'SVG'],
  ['text', 'Text'], ['utilities', 'Utilities'], ['easings', 'Easings'], ['waapi', 'WAAPI'],
  ['engine', 'Engine'], ['adapters', 'Adapters'],
] as const;
export type DemoOptions = MotionOptions;
export type Playback = NativePlayback;
export type DemoContext = { root: HTMLElement; options: DemoOptions; cleanup: (callback: () => void) => void; report: (value: string) => void };
export type MotionDemo = { id: string; topic: string; title: string; description: string; hint?: string; run: (ctx: DemoContext) => Playback | void };
const recipes = [
  {
    "id": "timer-loop-30fps",
    "topic": "timer",
    "title": "Looping timer · 30 FPS",
    "description": "A one-second loop with updates capped at 30 FPS and a completed-loop counter."
  },
  {
    "id": "timer-delay",
    "topic": "timer",
    "title": "Delayed timer · 2 seconds",
    "description": "Wait two seconds before a one-second timer begins updating."
  },
  {
    "id": "first-animation",
    "topic": "getting-started",
    "title": "Your first animation",
    "description": "Target an element and animate its transforms."
  },
  {
    "id": "transforms",
    "topic": "animation",
    "title": "Transforms",
    "description": "Translate, rotate, and scale together."
  },
  {
    "id": "colors",
    "topic": "animation",
    "title": "Colors and CSS properties",
    "description": "Interpolate color, corner radius, and opacity."
  },
  {
    "id": "keyframes",
    "topic": "animation",
    "title": "Property keyframes",
    "description": "Give each property its own sequence."
  },
  {
    "id": "relative",
    "topic": "animation",
    "title": "Relative values",
    "description": "Move relative to the initial transform."
  },
  {
    "id": "functions",
    "topic": "animation",
    "title": "Function-based values",
    "description": "Calculate a distinct destination for every target."
  },
  {
    "id": "objects",
    "topic": "animation",
    "title": "JavaScript objects",
    "description": "Animate a numeric object and render it through a callback."
  },
  {
    "id": "css-variable",
    "topic": "animation",
    "title": "CSS custom properties",
    "description": "Drive a gradient using an animated CSS variable."
  },
  {
    "id": "callbacks",
    "topic": "animation",
    "title": "Callbacks and completion",
    "description": "Read lifecycle progress and completion."
  },
  {
    "id": "timer",
    "topic": "timer",
    "title": "Timer and update loop",
    "description": "Track elapsed time without an animated target."
  },
  {
    "id": "sequence",
    "topic": "timeline",
    "title": "Timeline sequence",
    "description": "Chain animation steps in order."
  },
  {
    "id": "overlap",
    "topic": "timeline",
    "title": "Labels and overlapping steps",
    "description": "Use labels and offsets to choreograph motion."
  },
  {
    "id": "timeline-set",
    "topic": "timeline",
    "title": "Timeline set and call",
    "description": "Apply an immediate state and run a scheduled callback."
  },
  {
    "id": "pointer",
    "topic": "animatable",
    "title": "Smooth pointer follower",
    "description": "Retarget transforms efficiently as the pointer moves."
  },
  {
    "id": "drag",
    "topic": "draggable",
    "title": "Bounded dragging",
    "description": "Drag a target inside a container with release easing."
  },
  {
    "id": "layout",
    "topic": "layout",
    "title": "Automatic layout transition",
    "description": "Animate between a row and a grid layout."
  },
  {
    "id": "scope",
    "topic": "scope",
    "title": "Scoped targets and cleanup",
    "description": "Limit selector queries to one component and revert changes on unmount."
  },
  {
    "id": "responsive",
    "topic": "scope",
    "title": "Responsive media queries",
    "description": "Choose motion based on the browser viewport."
  },
  {
    "id": "scroll",
    "topic": "events",
    "title": "Scroll-linked animation",
    "description": "Synchronize an animation with a scroll container."
  },
  {
    "id": "draw",
    "topic": "svg",
    "title": "SVG line drawing",
    "description": "Animate the draw range of an SVG stroke."
  },
  {
    "id": "path",
    "topic": "svg",
    "title": "Motion path",
    "description": "Move and rotate an SVG marker along a curve."
  },
  {
    "id": "morph",
    "topic": "svg",
    "title": "SVG shape morphing",
    "description": "Interpolate the geometry between two SVG paths."
  },
  {
    "id": "split",
    "topic": "text",
    "title": "Split text reveal",
    "description": "Split a heading into characters and stagger their entrance."
  },
  {
    "id": "scramble",
    "topic": "text",
    "title": "Scrambled text reveal",
    "description": "Decode the existing headline with a local scramble routine."
  },
  {
    "id": "stagger",
    "topic": "utilities",
    "title": "Stagger from the center",
    "description": "Distribute delays outward from the middle target."
  },
  {
    "id": "grid-stagger",
    "topic": "utilities",
    "title": "Grid stagger",
    "description": "Use grid coordinates to create a radial ripple."
  },
  {
    "id": "utilities",
    "topic": "utilities",
    "title": "Random, clamp, and map",
    "description": "Generate bounded random positions for a scatter."
  },
  {
    "id": "ease",
    "topic": "easings",
    "title": "Easing explorer",
    "description": "Compare the selected easing through a translation."
  },
  {
    "id": "spring",
    "topic": "easings",
    "title": "Physics spring",
    "description": "Sample a damped spring curve into browser keyframes."
  },
  {
    "id": "waapi",
    "topic": "waapi",
    "title": "Native browser animation",
    "description": "Run transforms through the Web Animations API."
  },
  {
    "id": "engine",
    "topic": "engine",
    "title": "Engine and playback speed",
    "description": "Inspect the engine and adjust this animation\u00e2\u20ac\u2122s playback speed."
  },
  {
    "id": "three-adapter",
    "topic": "adapters",
    "title": "Object rotation",
    "description": "Animate a numeric rotation and a matching 3D tile."
  }
];
export const motionDemos: MotionDemo[] = [...recipes.map(recipe => ({ ...recipe, run: (ctx: DemoContext) => runRecipe(recipe.id, ctx) })), ...advancedDemos];

function runRecipe(id: string, { root, options, cleanup, report }: DemoContext): Playback | void {
  if (id === 'timer-loop-30fps' || id === 'timer-delay') {
    const time = root.querySelector<HTMLElement>('[data-timer-time]')!;
    const count = root.querySelector<HTMLElement>('[data-timer-count]')!;
    const delayed = id === 'timer-delay';
    const reduced = options.duration === 0;
    const timer = new NativeTimer({
      duration: reduced ? 0 : 1000,
      delay: delayed && !reduced ? 2000 : 0,
      loop: !delayed && !reduced,
      frameRate: 30,
      onUpdate: state => {
        time.textContent = String(Math.round(state.currentTime));
        count.textContent = String(state.iteration);
        report(delayed ? state.currentTime >= 1000 ? 'Timer complete.' : 'Timer running after the two-second delay.' : 'One-second loop · 30 FPS update cap');
      },
      onLoop: state => { count.textContent = String(state.iteration); },
    });
    cleanup(() => { timer.revert(); time.textContent = '0'; count.textContent = '0'; });
    report(delayed ? 'Waiting two seconds before updates begin…' : 'One-second loop · 30 FPS update cap');
    timer.play(); return timer;
  }
  const tiles = Array.from(root.querySelectorAll<HTMLElement>('.tile'));
  const duration = options.duration;
  const easing = easings[options.ease] ?? 'ease-out';
  const changed = new Map<HTMLElement, string>();
  const remember = (node: HTMLElement) => { if (!changed.has(node)) changed.set(node, node.style.cssText); };
  const listeners: (() => void)[] = [];
  const listen = (node: EventTarget, event: string, callback: EventListener) => { node.addEventListener(event, callback); listeners.push(() => node.removeEventListener(event, callback)); };
  let render = (_p: number) => {};
  const player = new NativePlayback(duration, options.loop, options.alternate, p => render(p));
  cleanup(() => { player.revert(); listeners.forEach(fn => fn()); changed.forEach((style, node) => { node.style.cssText = style; }); });
  const add = (node: Element, frames: Keyframe[], delay = 0, length = duration) => {
    player.add(node, frames, { duration: length, delay, easing });
    player.duration = Math.max(player.duration, length + delay);
  };
  if (id === 'pointer' || id === 'drag') {
    const tile = tiles[2]; remember(tile);
    let x = 0, y = 0, dragging = false;
    const move = (event: PointerEvent) => {
      if (id === 'drag' && !dragging) return;
      const box = root.getBoundingClientRect();
      x = Math.max(-box.width / 2 + 100, Math.min(box.width / 2 - 100, event.clientX - box.left - box.width / 2));
      y = Math.max(-110, Math.min(110, event.clientY - box.top - box.height / 2));
      tile.style.transform = `translate(${x}px,${y}px)`;
    };
    tile.style.transition = id === 'pointer' ? 'transform 200ms ease-out' : '';
    tile.style.touchAction = 'none'; tile.tabIndex = 0;
    listen(root, 'pointermove', move as EventListener);
    listen(tile, 'pointerdown', ((event: PointerEvent) => { dragging = true; tile.setPointerCapture(event.pointerId); }) as EventListener);
    listen(tile, 'pointerup', (() => { dragging = false; }) as EventListener);
    listen(tile, 'pointercancel', (() => { dragging = false; }) as EventListener);
    listen(tile, 'keydown', ((event: KeyboardEvent) => { const deltas: Record<string, number[]> = { ArrowLeft: [-10,0], ArrowRight: [10,0], ArrowUp: [0,-10], ArrowDown: [0,10] }; const d = deltas[event.key]; if (!d) return; event.preventDefault(); x = Math.max(-100,Math.min(100,x+d[0])); y = Math.max(-100,Math.min(100,y+d[1])); tile.style.transform = `translate(${x}px,${y}px)`; }) as EventListener);
    cleanup(() => tile.removeAttribute('tabindex'));
    report(id === 'drag' ? 'Drag the middle tile, or focus it and use arrow keys.' : 'Move inside the preview to guide the middle tile.'); return;
  }
  if (id === 'layout') {
    const grid = root.querySelector<HTMLElement>('.tiles')!; const button = root.querySelector<HTMLButtonElement>('.rearrange')!;
    const animations: Animation[] = []; button.hidden = false;
    listen(button, 'click', (() => {
      animations.splice(0).forEach(a => a.cancel());
      const before = tiles.map(tile => tile.getBoundingClientRect()); grid.classList.toggle('stacked');
      tiles.forEach((tile,i) => { const after = tile.getBoundingClientRect(); animations.push(tile.animate([{ transform: `translate(${before[i].left-after.left}px,${before[i].top-after.top}px)` }, { transform: 'translate(0,0)' }], { duration, easing })); });
    }) as EventListener);
    cleanup(() => { animations.forEach(a => a.cancel()); grid.classList.remove('stacked'); button.hidden = true; });
    report('Press Rearrange to transition between row and grid.'); return;
  }
  if (id === 'split' || id === 'scramble') {
    const text = root.querySelector<HTMLElement>('.demo-text')!; const original = text.textContent ?? '';
    cleanup(() => { text.textContent = original; });
    if (id === 'split') {
      text.textContent = '';
      [...original].forEach((char,i) => { const span = document.createElement('span'); span.textContent = char === ' ' ? '\u00a0' : char; span.style.display = 'inline-block'; text.append(span); add(span,[{ transform:'translateY(30px)',opacity:0 },{ transform:'translateY(0)',opacity:1 }],duration ? i*35 : 0); });
    } else render = p => { text.textContent = [...original].map((char,i) => i < p * original.length || char === ' ' ? char : '01#$%&'[Math.floor(Math.random()*6)]).join(''); };
  } else if (id === 'scroll') {
    const container = root.querySelector<HTMLElement>('.scroll-demo')!; container.hidden = false;
    const target = container.querySelector<HTMLElement>('.scroll-tile')!;
    add(target,[{ transform:'translateX(-80px) rotate(0deg)' },{ transform:'translateX(80px) rotate(360deg)' }]);
    listen(container,'scroll', (() => player.seek(container.scrollTop / Math.max(1,container.scrollHeight-container.clientHeight)*duration)) as EventListener);
    report('Scroll inside the preview to scrub the motion.'); player.seek(0); return player;
  } else if (id === 'draw') {
    const path = root.querySelector<SVGPathElement>('.line-path')!; const length = path.getTotalLength();
    add(path,[{ strokeDasharray:`${length}`,strokeDashoffset:length },{ strokeDasharray:`${length}`,strokeDashoffset:0 }]);
  } else if (id === 'path') {
    const path = root.querySelector<SVGPathElement>('.line-path')!, marker = root.querySelector<SVGCircleElement>('.path-marker')!;
    const x = marker.getAttribute('cx'), y = marker.getAttribute('cy');
    render = p => { const point = path.getPointAtLength(p*path.getTotalLength()); marker.setAttribute('cx',String(point.x)); marker.setAttribute('cy',String(point.y)); };
    cleanup(() => { marker.setAttribute('cx',x ?? '0'); marker.setAttribute('cy',y ?? '0'); });
  } else if (id === 'morph') {
    const path = root.querySelector<SVGPathElement>('.morph-a')!; const original = path.getAttribute('d')!;
    render = p => { const v = (a: number,b: number) => a+(b-a)*p; path.setAttribute('d',`M${v(100,90)} 40 L210 ${v(90,40)} L${v(100,210)} 150 L${v(100,90)} 150 Z`); };
    cleanup(() => path.setAttribute('d',original));
  } else if (id === 'timer' || id === 'objects' || id === 'three-adapter') {
    render = p => report(id === 'timer' ? `Elapsed: ${Math.round(p*duration)} ms` : id === 'objects' ? `Count: ${Math.round(p*1000)}` : `Object rotation: ${(p*Math.PI*2).toFixed(2)} radians`);
    if (id === 'three-adapter') add(tiles[2],[{ transform:'perspective(400px) rotateY(0deg)' },{ transform:'perspective(400px) rotateY(360deg)' }]);
  } else if (id === 'css-variable') {
    remember(root); render = p => { root.style.background = `radial-gradient(circle at ${p*100}% 50%, #7c3aed99, #080b16 65%)`; };
  } else {
    const targets = id === 'grid-stagger' ? Array.from(root.querySelectorAll<HTMLElement>('.grid-dot')) : tiles;
    targets.forEach((tile,i) => {
      let frames: Keyframe[] = [{ transform:'translateX(-60px)' },{ transform:'translateX(60px)' }]; let delay = 0;
      if (['transforms','relative','engine','waapi','scope','responsive','callbacks'].includes(id)) frames = [{ transform:'translateX(-30px) rotate(0deg) scale(.6)' },{ transform:`translateX(${id === 'responsive' && innerWidth < 640 ? 15 : 40}px) rotate(180deg) scale(1)` }];
      if (id === 'colors') frames = [{ backgroundColor:'#a78bfa',borderRadius:'8px',opacity:.4 },{ backgroundColor:'#34d399',borderRadius:'50%',opacity:1 }];
      if (id === 'keyframes') frames = [{ transform:'translateY(0) rotate(0deg)' },{ transform:'translateY(-45px) rotate(120deg)' },{ transform:'translateY(30px) rotate(240deg)' },{ transform:'translateY(0) rotate(360deg)' }];
      if (id === 'functions' || id === 'utilities') frames = [{ transform:'translateY(0) rotate(0)' },{ transform:`translateY(${id === 'utilities' ? Math.random()*100-50 : (i-2)*15}px) rotate(${i*45}deg)` }];
      if (id === 'sequence' || id === 'timeline-set') frames = [{ transform:'translateY(0) scale(.5)' },{ transform:'translateY(-40px) scale(1)' },{ transform:'translateY(-40px) rotate(180deg)' },{ transform:'translateY(0) rotate(360deg)' }];
      if (id === 'overlap') { frames = [{ transform:'translateY(0)' },{ transform:`translateY(${i<3 ? -35 : 35}px)` }]; delay = i<3 ? 0 : 200; }
      if (id === 'stagger' || id === 'grid-stagger') { frames = [{ transform:'scale(.2) rotate(-90deg)',opacity:.2 },{ transform:'scale(1) rotate(0deg)',opacity:1 }]; delay = duration ? id === 'stagger' ? Math.abs(i-2)*110 : Math.hypot(i%7-3,Math.floor(i/7)-2)*50 : 0; }
      if (id === 'spring') frames = Array.from({length:61},(_,j) => { const t=j/60; const displacement=j===60 ? 0 : -65*Math.exp(-7*t)*Math.cos(15*t); return { transform:`translateY(${displacement}px)`,offset:t,easing:'linear' }; });
      add(tile,frames,delay);
    });
    if (id === 'callbacks') render = p => report(p >= 1 ? 'Animation complete' : `Progress: ${Math.round(p*100)}%`);
    if (id === 'timeline-set') render = p => { if (p>=1) report('Sequence complete: scheduled callback fired'); };
    if (id === 'engine') report('Native playback coordinator ? time unit: milliseconds');
  }
  player.play(); return player;
}
