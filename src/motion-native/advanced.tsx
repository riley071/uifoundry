import * as THREE from 'three';
import { NativePlayback, easings } from './native';
import type { DemoContext, MotionDemo } from './demos';

const definitions = [
  ['follow-500', 'animatable', '500 ms pointer follower', 'Retarget both axes with a half-second ease-out transition.'],
  ['clock-radians', 'animatable', 'Continuous clock rotation', 'Follow the pointer angle in radians without snapping across the angle boundary.'],
  ['follow-stagger', 'animatable', 'Staggered circle followers', 'Move horizontally immediately; stagger vertical response from the center.'],
  ['clock-easings', 'animatable', 'Linear and elastic clocks', 'Compare two clocks with different rotation easing.'],
  ['layout-cycle', 'layout', 'Four-state grid choreography', 'Cycle through four grid arrangements with staggered layout transitions.'],
  ['layout-independent', 'layout', 'Independent layout containers', 'Switch either container between row and column without affecting the other.'],
  ['layout-display', 'layout', 'Display mode transitions', 'Cycle through row, grid, column, hidden, and reversed layouts with leave animations.'],
  ['text-words', 'text', 'Clipped word timeline', 'Reveal words from alternating directions, then send their letters away.'],
  ['text-clipped', 'text', 'Clipped character loop', 'Reveal characters, hold the headline, and exit upward in sequence.'],
  ['text-accessible', 'text', 'Accessible text layers', 'Inspect a visual split layer while the complete sentence remains available to assistive technology.'],
  ['text-wave', 'text', 'Character wave', 'Bounce custom letter spans in a staggered wave.'],
  ['stagger-scale', 'utilities', 'Staggered scale range', 'Distribute scale values from full size to one tenth while moving across the preview.'],
  ['stagger-duration', 'utilities', 'Staggered durations', 'Give each tile a longer duration and a later start.'],
  ['stagger-position', 'utilities', 'Staggered positions', 'Increase horizontal travel and delay for each successive tile.'],
  ['stagger-random-grid', 'utilities', 'Random-origin grid ripple', 'An 11 by 4 grid displaces along both axes from a new origin each cycle.'],
  ['stagger-shadow', 'utilities', 'Center-out shadow pulse', 'Convert a staggered numeric range into glowing box shadows.'],
  ['scene-spotlight', 'adapters', 'Rolling cube and spotlight', 'A real 3D cube rolls across a shadowed floor under a moving spotlight.'],
  ['scene-instances', 'adapters', '216 animated cube instances', 'Animate a six by six by six cube field with position, scale, and color.'],
  ['svg-draw-erase', 'svg', 'Staggered SVG draw and erase', 'Draw and erase several original line shapes with staggered stroke ranges.'],
  ['playback-compare', 'waapi', 'Browser and object playback', 'Compare a native transform animation with JavaScript object interpolation over three alternating cycles.'],
];

export const advancedDemos: MotionDemo[] = definitions.map(([id, topic, title, description]) => ({ id, topic, title, description, run: context => runAdvanced(id, context) }));
export const isAdvanced = (id: string) => definitions.some(row => row[0] === id);

export function AdvancedStage({ id }: { id: string }) {
  if (id.startsWith('scene-')) return <div className="advanced-webgl" aria-label="Interactive 3D animation preview" />;
  if (id.startsWith('follow-')) return <div className="advanced-followers">{Array.from({ length: id === 'follow-500' ? 1 : 7 }, (_, i) => <span key={i} className="follower" />)}</div>;
  if (id.startsWith('clock-')) return <div className="advanced-clocks">{Array.from({ length: id === 'clock-easings' ? 2 : 1 }, (_, i) => <div key={i}><div className="clock-face"><span className="clock-hand" /></div><p>{id === 'clock-easings' ? i ? 'Elastic' : 'Linear' : '400 ms · radians'}</p></div>)}</div>;
  if (id.startsWith('layout-')) return <div className="advanced-layouts">{Array.from({ length: id === 'layout-independent' ? 2 : 1 }, (_, i) => <div key={i}><div className="advanced-layout" data-grid="1" data-mode={id === 'layout-independent' || id === 'layout-display' ? 'row' : undefined}>{['A', 'B', 'C', 'D'].map(label => <div key={label} className="layout-item">{label}</div>)}</div><button className="advanced-control" data-layout-button={i}>{id === 'layout-independent' ? `Toggle ${i ? 'B' : 'A'}` : 'Next layout'}</button></div>)}</div>;
  if (id.startsWith('text-')) return <div className="advanced-text-wrap" data-text-effect={id}><p className="advanced-text">Create something that moves.</p>{id === 'text-accessible' && <button className="advanced-control" data-inspect>Inspect text layers</button>}</div>;
  if (id === 'svg-draw-erase') return <svg viewBox="0 0 320 140" className="advanced-svg" aria-label="Animated original line illustration"><g stroke="#bef264" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">{['M20 35 V90 Q20 115 45 115 Q70 115 70 90 V35', 'M95 35 V115 M82 35 H108 M82 115 H108', 'M135 115 V35 H180 M135 75 H170', 'M205 115 V35 L255 115 V35', 'M280 35 L305 75 L280 115'].map(d => <path key={d} className="draw-line" d={d} />)}</g></svg>;
  if (id === 'playback-compare') return <div className="advanced-comparison"><div><p>Browser animation</p><div className="compare-browser" /></div><div><p>JavaScript object</p><div className="compare-object" /><code className="compare-log">{'{"x":0,"rotate":0}'}</code></div></div>;
  const grid = id === 'stagger-random-grid';
  return <div className={grid ? 'advanced-grid' : 'advanced-stagger'}>{Array.from({ length: grid ? 44 : 7 }, (_, i) => <span key={i} className="stagger-item" />)}</div>;
}

function runAdvanced(id: string, { root, options, cleanup, report }: DemoContext) {
  let disposed = false;
  const duration = options.duration;
  const active = new Map<Element, Animation>();
  const disposers: (() => void)[] = [];
  const listen = (target: EventTarget, name: string, handler: EventListener) => { target.addEventListener(name, handler); disposers.push(() => target.removeEventListener(name, handler)); };
  cleanup(() => { disposed = true; active.forEach(a => a.cancel()); disposers.forEach(fn => fn()); });
  const animate = (target: Element, frames: Keyframe[], length = duration, delay = 0, easing = easings[options.ease] ?? 'ease-out') => {
    active.get(target)?.cancel();
    const animation = target.animate(frames, { duration: length, delay, easing, fill: 'both' }); active.set(target, animation); return animation;
  };
  const retarget = new Map<Element, Animation>();
  const moveTo = (target: Element, transform: string, length: number, easing: string) => {
    const from = getComputedStyle(target).transform;
    retarget.get(target)?.cancel();
    const animation = target.animate([{ transform: from === 'none' ? 'translate(0,0)' : from }, { transform }], { duration: duration ? length : 0, easing, fill: 'both' });
    retarget.set(target, animation);
  };
  cleanup(() => retarget.forEach(a => a.cancel()));
  if (id.startsWith('follow-') || id.startsWith('clock-')) {
    const followers = Array.from(root.querySelectorAll<HTMLElement>('.follower'));
    const hands = Array.from(root.querySelectorAll<HTMLElement>('.clock-hand'));
    const angles = hands.map(() => ({ last: 0, value: Math.PI / 2, current: 0, from: 0, start: 0 }));
    let rotationFrame = 0;
    const renderHands = (now: number) => {
      let unsettled = false;
      hands.forEach((hand, i) => {
        const state = angles[i], t = duration ? Math.min(1, (now - state.start) / 400) : 1;
        const eased = id === 'clock-easings' ? i ? t === 1 ? 1 : 1 - Math.exp(-7 * t) * Math.cos(15 * t) : t : 1 - (1 - t) ** 3;
        state.current = state.from + (state.value - state.from) * eased;
        hand.style.transform = `rotate(${state.current}rad)`;
        if (t < 1) unsettled = true;
      });
      rotationFrame = unsettled ? requestAnimationFrame(renderHands) : 0;
    };
    disposers.push(() => cancelAnimationFrame(rotationFrame));
    listen(window, 'pointermove', ((event: PointerEvent) => {
      const box = root.getBoundingClientRect();
      const x = Math.max(-box.width / 2 + 25, Math.min(box.width / 2 - 25, event.clientX - box.left - box.width / 2));
      const y = Math.max(-box.height / 2 + 25, Math.min(box.height / 2 - 25, event.clientY - box.top - box.height / 2));
      followers.forEach((target, i) => {
        if (id === 'follow-500') moveTo(target, `translate(${x}px,${y}px)`, 500, 'cubic-bezier(.2,.7,.3,1)');
        else { target.style.translate = `${x}px 0`; moveTo(target, `translateY(${y}px)`, 200 + Math.abs(i - 3) * 200, 'cubic-bezier(.16,1,.3,1)'); }
      });
      hands.forEach((hand, i) => {
        const bounds = hand.parentElement!.getBoundingClientRect();
        const next = Math.atan2(event.clientY - bounds.top - bounds.height / 2, event.clientX - bounds.left - bounds.width / 2);
        const diff = next - angles[i].last;
        angles[i].value += diff > Math.PI ? diff - 2 * Math.PI : diff < -Math.PI ? diff + 2 * Math.PI : diff;
        angles[i].last = next;
        angles[i].from = angles[i].current; angles[i].start = performance.now();
      });
      if (hands.length && !rotationFrame) rotationFrame = requestAnimationFrame(renderHands);
    }) as EventListener);
    report('Move your pointer around the page. Preview bounds are refreshed on every movement.'); return;
  }
  if (id.startsWith('layout-')) {
    const containers = Array.from(root.querySelectorAll<HTMLElement>('.advanced-layout'));
    let state = 0;
    let timeout = 0;
    const flip = (container: HTMLElement, change: () => void) => {
      const items = Array.from(container.children) as HTMLElement[];
      const bounds = items.map(item => item.getBoundingClientRect());
      change();
      items.forEach((item, i) => {
        const after = item.getBoundingClientRect(), before = bounds[i];
        if (!after.width) return;
        animate(item, [{ transformOrigin: 'top left', transform: `translate(${before.width ? before.left - after.left : 0}px,${before.height ? before.top - after.top : 0}px) scale(${before.width / after.width || .1},${before.height / after.height || .1})`, opacity: before.width ? 1 : 0 }, { transformOrigin: 'top left', transform: 'translate(0,0) scale(1)', opacity: 1 }], duration ? 1000 : 0, duration ? i * 150 : 0);
      });
      return duration ? 1450 : 0;
    };
    const change = (index: number) => {
      const container = containers[index];
      if (id === 'layout-independent') { flip(container, () => { container.dataset.mode = container.dataset.mode === 'column' ? 'row' : 'column'; }); return; }
      state++;
      if (id === 'layout-cycle') flip(container, () => { container.dataset.grid = String(state % 4 + 1); });
      else {
        const modes = ['row', 'grid', 'column', 'hidden', 'grid-wide', 'reverse'];
        const mode = modes[state % modes.length];
        if (mode === 'hidden') {
          Array.from(container.children).forEach((item, i) => animate(item, [{ transform: 'scale(1)' }, { transform: 'scale(0)' }], duration ? 350 : 0, duration ? i * 75 : 0));
          timeout = window.setTimeout(() => { if (!disposed) container.dataset.mode = mode; }, duration ? 600 : 0);
        } else flip(container, () => { container.dataset.mode = mode; });
        root.querySelector<HTMLButtonElement>('[data-layout-button]')!.textContent = `Next layout · ${mode}`;
      }
    };
    root.querySelectorAll<HTMLButtonElement>('[data-layout-button]').forEach((button, i) => listen(button, 'click', (() => { clearTimeout(timeout); change(i); }) as EventListener));
    if (id === 'layout-cycle' && duration) {
      const cycle = () => { if (disposed) return; change(0); timeout = window.setTimeout(cycle, 1800); };
      cycle();
    }
    disposers.push(() => clearTimeout(timeout));
    report(id === 'layout-cycle' ? 'Cycling through four grid arrangements. Use Next layout to step manually.' : 'Use the controls beneath each layout.'); return;
  }
  if (id.startsWith('scene-')) return runScene(id, root, duration, cleanup, report);
  let render = (_p: number) => {};
  const player = new NativePlayback(duration, options.loop, options.alternate, p => render(p));
  const add = (target: Element, frames: Keyframe[], length = duration, delay = 0) => { player.add(target, frames, { duration: length, delay, easing: easings[options.ease] ?? 'ease-out' }); player.duration = Math.max(player.duration, length + delay); };
  cleanup(() => player.revert());
  if (id.startsWith('text-')) {
    const paragraph = root.querySelector<HTMLElement>('.advanced-text')!;
    const original = paragraph.textContent!;
    paragraph.textContent = '';
    const accessible = document.createElement('span'); accessible.className = 'accessible-sentence'; accessible.textContent = original;
    const visual = document.createElement('span'); visual.className = 'visual-sentence'; visual.setAttribute('aria-hidden', 'true');
    paragraph.append(accessible, visual);
    const characters: HTMLElement[] = [];
    original.split(' ').forEach((word, wordIndex) => {
      const wrapper = document.createElement('span'); wrapper.className = 'word-clip'; visual.append(wrapper);
      const content = document.createElement('span'); content.className = 'word-content'; wrapper.append(content);
      [...word].forEach(char => { const clip = document.createElement('span'); clip.className = 'char-clip'; const letter = document.createElement('span'); letter.className = 'split-letter'; letter.textContent = char; clip.append(letter); content.append(clip); characters.push(letter); });
      visual.append(document.createTextNode(' '));
      if (id === 'text-words') add(content, [{ transform: `translateY(${wordIndex % 2 ? 100 : -100}%)` }, { transform: 'translateY(0)', offset: .35 }, { transform: 'translateY(0)' }], duration, duration ? wordIndex * 125 : 0);
    });
    cleanup(() => { paragraph.textContent = original; });
    characters.forEach((letter, i) => {
      if (id === 'text-words') add(letter, [{ transform: 'translateY(0)' }, { transform: `translateY(${i % 2 ? 100 : -100}%)` }], duration * .35, duration ? duration + Math.floor(Math.random() * characters.length) * 10 : 0);
      if (id === 'text-clipped') add(letter, [{ transform: 'translateY(100%)' }, { transform: 'translateY(0)', offset: .3 }, { transform: 'translateY(0)', offset: .7 }, { transform: 'translateY(-100%)' }], duration, duration ? i * 50 : 0);
      if (id === 'text-wave') add(letter, [{ transform: 'translateY(0)' }, { transform: 'translateY(-16px)' }, { transform: 'translateY(0)' }], duration, duration ? i * 100 : 0);
    });
    if (id === 'text-accessible') {
      let inspecting = false;
      listen(root.querySelector('[data-inspect]')!, 'click', (() => {
        inspecting = !inspecting; paragraph.classList.toggle('inspect-layers', inspecting);
        report(inspecting ? 'The intact sentence remains readable to assistive technology; split letters are decorative.' : 'Text layers restored.');
      }) as EventListener);
      cleanup(() => paragraph.classList.remove('inspect-layers')); return;
    }
  } else if (id === 'svg-draw-erase') {
    root.querySelectorAll<SVGPathElement>('.draw-line').forEach((path, i) => { const length = path.getTotalLength(); add(path, [{ strokeDasharray: `${length} ${length}`, strokeDashoffset: length }, { strokeDasharray: `${length} ${length}`, strokeDashoffset: 0, offset: .5 }, { strokeDasharray: `${length} ${length}`, strokeDashoffset: -length }], duration, duration ? i * 100 : 0); });
  } else if (id === 'playback-compare') {
    const native = root.querySelector<HTMLElement>('.compare-browser')!, object = root.querySelector<HTMLElement>('.compare-object')!, log = root.querySelector<HTMLElement>('.compare-log')!;
    const reach = Math.min(160, root.clientWidth / 3), cycle = duration || 1;
    player.duration = duration * 6;
    add(native, [{ transform: 'translateX(0) rotate(0)' }, { transform: `translateX(${reach}px) rotate(180deg)` }], duration);
    render = p => {
      const elapsed = p * player.duration;
      const phase = Math.min(6, elapsed / cycle);
      const segment = Math.min(5, Math.floor(phase)), fraction = phase === 6 ? 1 : phase - segment;
      const progress = segment % 2 ? 1 - fraction : fraction;
      player.animations[0].currentTime = progress * duration;
      const data = { x: Math.round(progress * reach), rotate: Math.round(progress * 180) };
      object.style.transform = `translateX(${data.x}px) rotate(${data.rotate}deg)`; log.textContent = JSON.stringify(data);
    };
    cleanup(() => { object.style.transform = ''; });
  } else {
    const tiles = Array.from(root.querySelectorAll<HTMLElement>('.stagger-item'));
    let origin = Math.floor(Math.random() * 44), lastCycle = -1;
    if (id === 'stagger-random-grid') {
      render = p => {
        const cycle = Math.floor(player.currentTime / Math.max(1, player.duration));
        if (cycle !== lastCycle) { origin = Math.floor(Math.random() * 44); lastCycle = cycle; }
        tiles.forEach((tile, i) => { const dx = i % 11 - origin % 11, dy = Math.floor(i / 11) - Math.floor(origin / 11); const delay = Math.hypot(dx, dy) * .04; const local = Math.max(0, Math.min(1, (p - delay) / Math.max(.1, 1 - delay))); const wave = Math.sin(local * Math.PI); tile.style.transform = `translate(${dx * -8 * wave}px,${dy * -8 * wave}px)`; tile.style.opacity = String(1 - wave * .5); });
      };
      cleanup(() => tiles.forEach(tile => { tile.style.transform = ''; tile.style.opacity = ''; }));
    } else tiles.forEach((tile, i) => {
      const t = i / (tiles.length - 1), delay = duration ? i * 100 : 0;
      if (id === 'stagger-scale') add(tile, [{ transform: 'translateX(-45px) scale(1)' }, { transform: `translateX(45px) scale(${1 - t * .9})` }], duration, delay);
      if (id === 'stagger-duration') add(tile, [{ transform: 'translateY(-50px)' }, { transform: 'translateY(50px)' }], duration ? 500 + i * 200 : 0, delay);
      if (id === 'stagger-position') add(tile, [{ transform: 'translateX(0)' }, { transform: `translateX(${i * Math.min(12, root.clientWidth / 40)}px)` }], duration, delay);
      if (id === 'stagger-shadow') { const value = 1 - Math.abs(i - 3) / 3 * .75; add(tile, [{ boxShadow: '0 0 0 0 #bef26400' }, { boxShadow: `0 0 ${value * 30}px ${value * 20}px #bef26488` }, { boxShadow: '0 0 0 0 #bef26400' }], duration, duration ? Math.abs(i - 3) * 100 : 0); }
    });
  }
  player.play(); return player;
}

function runScene(id: string, root: HTMLElement, duration: number, cleanup: DemoContext['cleanup'], report: DemoContext['report']) {
  const host = root.querySelector<HTMLElement>('.advanced-webgl')!;
  let renderer: THREE.WebGLRenderer;
  try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
  catch { report('This 3D preview needs WebGL, which is unavailable in this browser.'); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.shadowMap.enabled = true; host.append(renderer.domElement);
  const scene = new THREE.Scene(), group = new THREE.Group(); scene.add(group);
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 100); camera.position.set(0, 3, 7); camera.lookAt(0, 0, 0);
  scene.add(new THREE.AmbientLight(0xffffff, .8));
  const spot = new THREE.SpotLight(0xffffff, 100, 20, Math.PI / 5, .4); spot.position.set(0, 5, 2); spot.castShadow = true; scene.add(spot, spot.target);
  const geometry = new THREE.BoxGeometry(1, 1, 1), material = new THREE.MeshLambertMaterial({ color: '#a78bfa' });
  const floorGeometry = new THREE.PlaneGeometry(12, 12), floorMaterial = new THREE.MeshLambertMaterial({ color: '#202035' });
  const ground = new THREE.Mesh(floorGeometry, floorMaterial); ground.rotation.x = -Math.PI / 2; ground.position.y = -1.1; ground.receiveShadow = true; group.add(ground);
  const grid = new THREE.GridHelper(12, 24, '#6d5b99', '#242437'); grid.position.y = -1.09; group.add(grid);
  const cube = new THREE.Mesh(geometry, material); cube.castShadow = true;
  const instances = new THREE.InstancedMesh(geometry, material, 216);
  if (id === 'scene-instances') { material.color.set('#ffffff'); group.add(instances); ground.visible = grid.visible = false; } else group.add(cube);
  const dummy = new THREE.Object3D(), color = new THREE.Color();
  const player = new NativePlayback(duration ? 8000 : 0, Boolean(duration), false, p => {
    const angle = p * Math.PI * 2; group.rotation.y = angle;
    if (id === 'scene-instances') {
      for (let i = 0; i < 216; i++) {
        const x = i % 6 - 2.5, y = Math.floor(i / 6) % 6 - 2.5, z = Math.floor(i / 36) - 2.5;
        const wave = .5 + .5 * Math.sin(angle * 2 - Math.hypot(x, y, z) * .8), spread = .2 + wave * .35;
        dummy.position.set(x * spread, y * spread, z * spread); dummy.scale.setScalar(.06 + wave * .12); dummy.updateMatrix(); instances.setMatrixAt(i, dummy.matrix); instances.setColorAt(i, color.setHSL((i / 216 + p) % 1, .8, .6));
      }
      instances.instanceMatrix.needsUpdate = true; if (instances.instanceColor) instances.instanceColor.needsUpdate = true;
    } else {
      cube.position.x = Math.sin(angle) * 3; cube.position.y = -1.1 + .5 * (Math.abs(Math.sin(angle * 4)) + Math.abs(Math.cos(angle * 4))); cube.rotation.z = -angle * 4; material.color.setHSL(p, .7, .6);
      spot.position.set(Math.sin(angle * 2) * 5, 4 + Math.cos(angle), Math.cos(angle * 2) * 4); cube.getWorldPosition(spot.target.position);
    }
    renderer.render(scene, camera);
  });
  const resize = new ResizeObserver(() => { const width = host.clientWidth, height = host.clientHeight; renderer.setSize(width, height); camera.aspect = width / Math.max(1, height); camera.updateProjectionMatrix(); renderer.render(scene, camera); }); resize.observe(host);
  cleanup(() => { player.revert(); resize.disconnect(); geometry.dispose(); material.dispose(); floorGeometry.dispose(); floorMaterial.dispose(); grid.geometry.dispose(); if (Array.isArray(grid.material)) grid.material.forEach(m => m.dispose()); else grid.material.dispose(); instances.dispose(); spot.shadow.dispose(); renderer.dispose(); renderer.domElement.remove(); });
  report(id === 'scene-instances' ? '216 instances · direct matrix and color animation' : 'Direct scene animation · shadows and moving spotlight');
  player.play(); return player;
}
