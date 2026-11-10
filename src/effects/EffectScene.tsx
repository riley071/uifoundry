import { useEffect, useRef } from 'react';

export type EffectKind = 'backgrounds' | 'text' | 'cursors';
export type EffectSceneProps = { name: string; kind: EffectKind; paused?: boolean; color?: string; text?: string };

/** Original procedural studies. No external assets or animation dependencies. */
export default function EffectScene({ name, kind, paused = false, color = '#a78bfa', text = 'Make some magic' }: EffectSceneProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = host.current;
    const surface = canvas.current;
    const ctx = surface?.getContext('2d');
    if (!node || !surface || !ctx) return;
    let width = 1, height = 1, frame = 0, tick = 0, visible = false;
    let pointer = { x: .5, y: .5, active: false, burst: 0 };
    const trail: { x: number; y: number; life: number }[] = [];
    const seed = [...name].reduce((a, c) => a + c.charCodeAt(0), 0);
    const match = (pattern: string) => new RegExp(pattern, 'i').test(name);
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width; height = entry.contentRect.height;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      surface.width = width * ratio; surface.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    });
    const move = (event: PointerEvent) => {
      const box = node.getBoundingClientRect();
      pointer = { ...pointer, x: (event.clientX - box.left) / width, y: (event.clientY - box.top) / height, active: true };
      trail.push({ x: pointer.x * width, y: pointer.y * height, life: 1 });
      if (trail.length > 45) trail.shift();
      node.style.setProperty('--pointer-x', `${pointer.x * 100}%`);
      node.style.setProperty('--lean', `${(pointer.x - .5) * 26}deg`);
      draw();
    };
    const leave = () => { pointer.active = false; node.style.setProperty('--lean', '0deg'); };
    const click = () => { pointer.burst = 1; node.classList.remove('effect-fired'); void node.offsetWidth; node.classList.add('effect-fired'); draw(); };
    function draw() {
      if (!ctx) return;
      const t = tick / 60, w = width, h = height;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 1;
      const glow = ctx.createRadialGradient(w * pointer.x, h * pointer.y, 0, w / 2, h / 2, w * .8);
      glow.addColorStop(0, `${color}28`); glow.addColorStop(1, '#080b1600'); ctx.fillStyle = glow; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = color;
      if (kind === 'cursors') {
        const px = pointer.x * w, py = pointer.y * h;
        if (match('Drafting')) {
          ctx.globalAlpha = .7; ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke();
          ctx.font = '11px monospace'; ctx.fillText(`${Math.round(px)}, ${Math.round(py)}`, px + 12, py - 12);
          for (let i = 0; i < w; i += 20) ctx.fillRect(i, 0, 1, i % 100 ? 5 : 12);
        } else if (match('Grid|Wave|Pills|Magnet')) {
          for (let x = 16; x < w; x += 24) for (let y = 16; y < h; y += 24) {
            const d = Math.hypot(x - px, y - py), force = Math.max(0, 1 - d / 140);
            ctx.globalAlpha = .18 + force * .8;
            ctx.fillRect(x + (px - x) * force * .2, y + (py - y) * force * .2, 4 + force * 10, 4 + force * 10);
          }
        } else {
          const points = trail.length ? trail : Array.from({ length: 25 }, (_, i) => ({ x: w * .5 + Math.sin(t + i * .12) * w * .2, y: h * .5 + Math.cos(t * 1.3 + i * .15) * h * .2, life: i / 25 }));
          points.forEach((p, i) => {
            ctx.globalAlpha = p.life * .8;
            if (match('Ascii|Glyph|Dither')) { ctx.font = '18px monospace'; ctx.fillText('01+#*@'[i % 6], p.x, p.y); }
            else if (match('Snapshot|Celebration')) { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(i + t); ctx.fillRect(-7, -7, match('Snapshot') ? 24 : 8, match('Snapshot') ? 30 : 13); ctx.restore(); }
            else { ctx.beginPath(); ctx.arc(p.x, p.y, match('Halo|Glass|Pigment') ? 10 + i * .6 : 2 + i * .12, 0, Math.PI * 2); ctx.fill(); }
          });
          ctx.globalAlpha = .9; ctx.beginPath(); ctx.arc(px, py, 12 + pointer.burst * 60, 0, Math.PI * 2); ctx.stroke();
          if (match('User')) { ctx.font = '12px sans-serif'; ctx.fillText('You', px + 18, py + 22); }
          if (match('Gyroscope')) { ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + 20, py + 10); ctx.lineTo(px + 7, py + 18); ctx.closePath(); ctx.fill(); }
        }
      } else if (kind === 'backgrounds') {
        if (match('Grid|Landscape|Retro Lines|Ravine|Long Exposure')) {
          const horizon = h * .35;
          for (let i = -12; i <= 12; i++) { ctx.globalAlpha = .45; ctx.beginPath(); ctx.moveTo(w / 2 + i * 10, horizon); ctx.lineTo(w / 2 + i * w / 5, h); ctx.stroke(); }
          for (let i = 0; i < 20; i++) { const p = ((i + t * 3) % 20) / 20; const y = horizon + p * p * h; ctx.globalAlpha = p * .7; ctx.fillRect(0, y, w, 1); }
        } else if (match('Dot|Drape|Current|Voxel|Matrix|Tile|Mosaic|Square|Halftone|Hexagonal')) {
          for (let x = 0; x < w; x += 17) for (let y = 0; y < h; y += 17) {
            const wave = Math.sin(x * .016 + t) * Math.cos(y * .022 + t * .6 + seed);
            ctx.globalAlpha = .2 + (wave + 1) * .35;
            const size = 1 + (wave + 1) * 2.5;
            if (match('Square|Tile|Mosaic|Voxel|Matrix')) ctx.fillRect(x, y + wave * 7, size * 2, size * 2);
            else { ctx.beginPath(); ctx.arc(x, y + wave * 10, size, 0, 7); ctx.fill(); }
          }
        } else if (match('Glyph|Ascii|Terminal|Pixel Rain')) {
          ctx.font = '13px monospace';
          for (let x = 12; x < w; x += 18) for (let y = 0; y < h; y += 18) {
            ctx.globalAlpha = (Math.sin(x * .1 + y * .025 - t * 2) + 1) * .4;
            ctx.fillText('01:;+*#@'[Math.abs(Math.floor(x + y + t * 3 + seed)) % 8], x, y);
          }
        } else if (match('Ray|Beam|Rain|Droplet|Lines|Bars|Slats|Blinds|Filament|Neural|Synaptic|Flame')) {
          for (let i = 0; i < 38; i++) {
            ctx.globalAlpha = .12 + (Math.sin(t + i * .7) + 1) * .25;
            ctx.lineWidth = match('Bars|Slats|Blinds') ? w / 45 : 1.5;
            ctx.beginPath(); const x = i / 38 * w;
            ctx.moveTo(match('Ray|Beam') ? w / 2 : x, 0);
            ctx.bezierCurveTo(x + Math.sin(t + i) * 70, h * .3, x - Math.cos(t + i) * 70, h * .7, x, h); ctx.stroke();
          }
        } else if (match('Star|Orbit|Vortex|Tunnel|Warp|Hole|Shell|Orb|Sphere|Eclipse|Bloom|Ring|Loop|Ripple|Swirl|Funnel')) {
          for (let i = 0; i < 95; i++) {
            const angle = i * 2.399 + t * .15, radius = ((i * 7 + t * 16) % 230);
            ctx.globalAlpha = .2 + (i % 5) / 7;
            ctx.beginPath(); ctx.ellipse(w / 2 + Math.sin(t * .3) * 15, h / 2, Math.max(1, radius), Math.max(1, radius * (.35 + (seed % 5) * .1)), angle * .04, angle, angle + .4); ctx.stroke();
          }
        } else {
          for (let i = 0; i < 48; i++) {
            ctx.globalAlpha = .12 + .35 * i / 48; ctx.beginPath();
            for (let x = 0; x <= w; x += 6) { const y = h * .5 + Math.sin(x / w * 6 + t + i * .045) * h * .23 + Math.sin(x * .012 - t * .7 + seed) * 22 + (i - 24) * 2; if (!x) ctx.moveTo(x, y); else ctx.lineTo(x, y); } ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    }
    function animate() {
      frame = 0;
      if (!visible || paused || media.matches || document.hidden) return;
      tick++; pointer.burst *= .94; trail.forEach(p => p.life *= .96);
      draw(); frame = requestAnimationFrame(animate);
    }
    const start = () => { cancelAnimationFrame(frame); frame = 0; draw(); animate(); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; start(); });
    resize.observe(node); observer.observe(node);
    node.addEventListener('pointermove', move); node.addEventListener('pointerleave', leave); node.addEventListener('click', click);
    media.addEventListener('change', start); document.addEventListener('visibilitychange', start);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); node.removeEventListener('pointermove', move); node.removeEventListener('pointerleave', leave); node.removeEventListener('click', click); media.removeEventListener('change', start); document.removeEventListener('visibilitychange', start); };
  }, [name, kind, paused, color]);
  const variant = /Glitch|Cipher|Lottery|Signal|Wall/.test(name) ? 'glitch' : /Smoke|Vapor|Ghost|Blur|Stipple/.test(name) ? 'mist' : /Orbit|Cube|3D|Ribbon|Path|Marquee/.test(name) ? 'orbit' : /Scatter|Shatter|Domino|Gravity/.test(name) ? 'scatter' : 'wave';
  return <div ref={host} className={`effect-stage ${paused ? 'effect-paused' : ''}`} style={{ '--effect-color': color } as React.CSSProperties}>
    <canvas ref={canvas} aria-hidden="true" className="absolute inset-0 h-full w-full" />
    {kind === 'text' ? <div className={`effect-letters effect-${variant}`} aria-label={text}>{[...text].map((letter, i) => <span aria-hidden="true" key={i} style={{ '--i': i } as React.CSSProperties}>{letter === ' ' ? '\u00a0' : letter}</span>)}</div> : <span className="pointer-events-none relative z-10 text-xs uppercase tracking-[.3em] text-white/50">{kind === 'cursors' ? 'Move · click · explore' : 'UIFoundry / motion studies'}</span>}
  </div>;
}
