import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motionDemos, topics } from '../motion-native/demos';
import type { Playback } from '../motion-native/demos';
import '../motion-native/lab.css';
import MotionStageContents from '../motion-native/MotionStage';

const files = import.meta.glob<string>(['../motion-native/native.ts', '../motion-native/demos.ts', '../motion-native/advanced.tsx', '../motion-native/MotionStage.tsx', '../motion-native/lab.css', './MotionStudio.tsx'], { query: '?raw', import: 'default' });

export default function MotionStudio() {
  const [params, setParams] = useSearchParams();
  const selected = motionDemos.find(d => d.id === params.get('demo')) ?? motionDemos[0];
  const topic = params.get('topic') ?? 'all';
  const query = params.get('q') ?? '';
  const filtered = motionDemos.filter(d => (topic === 'all' || topic === d.topic) && `${d.title} ${d.description} ${d.topic}`.toLowerCase().includes(query.toLowerCase()));
  const root = useRef<HTMLDivElement>(null);
  const playback = useRef<Playback & { playbackRate?: number; currentTime?: number } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [duration, setDuration] = useState(1400);
  const [ease, setEase] = useState('out(3)');
  const [loop, setLoop] = useState(false);
  const [alternate, setAlternate] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [run, setRun] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState('Press Play to start.');
  const [progress, setProgress] = useState(0);
  const [code, setCode] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);

  function update(key: string, value: string) {
    setParams(previous => { const next = new URLSearchParams(previous); if (value) next.set(key, value); else next.delete(key); return next; }, { replace: true, preventScrollReset: true });
  }
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => { setReduced(media.matches); setRun(0); };
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);
  useEffect(() => { setRun(0); setPlaying(false); setReady(false); setProgress(0); setMessage('Press Play to start.'); }, [selected.id]);
  useEffect(() => {
    const element = root.current;
    if (!element || run === 0) return;
    const cleanups: (() => void)[] = [];
    playback.current = null; setReady(false); setMessage('Demo active');
    try {
      {
        const result = selected.run({ root: element, options: { duration: reduced ? 0 : duration, ease, loop: reduced ? false : loop, alternate }, cleanup: cb => cleanups.push(cb), report: setMessage });
        if (result) { playback.current = result; playback.current.playbackRate = speed; setReady(true); }
      }
      setPlaying(true);
    } catch (error) { setMessage(`Could not start this demo: ${error instanceof Error ? error.message : String(error)}`); setPlaying(false); }
    const interval = window.setInterval(() => {
      const player = playback.current;
      if (player?.duration) setProgress(Math.min(100, Math.max(0, ((player.currentTime ?? 0) / player.duration) * 100)));
    }, 100);
    const visibility = () => { if (document.hidden) { playback.current?.pause(); setPlaying(false); } };
    document.addEventListener('visibilitychange', visibility);
    return () => {
      clearInterval(interval); document.removeEventListener('visibilitychange', visibility);
      cleanups.reverse().forEach(cleanup => cleanup()); playback.current = null;
      const scroll = element.querySelector<HTMLElement>('.scroll-demo'); if (scroll) { scroll.hidden = true; scroll.scrollTop = 0; }
    };
    // Settings are applied when Play / Restart is pressed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, selected, reduced]);
  useEffect(() => { if (playback.current) playback.current.playbackRate = speed; }, [speed]);

  async function showCode() {
    dialog.current?.showModal(); setCopyStatus('Loading source…');
    try {
      const source = await Promise.all(Object.entries(files).map(async ([path, read]) => `/* FILE: ${path} */\n${await read()}`));
      setCode(`// Setup: npm install react react-dom react-router-dom three\n// Uses native browser animation APIs and Tailwind CSS 3.\n// Selected demo: ${selected.title} (${selected.id})\n// Save each FILE block to its indicated path.\n// Add <Route path="/motion/studio" element={<MotionStudio />} /> inside your Router.\n\n${source.join('\n\n')}`);
      setCopyStatus('Complete playground source: React page, demo recipes, and stylesheet.');
    } catch { setCopyStatus('Source could not load. Close and try again.'); }
  }
  return <div className="font-catalog">
    <header className="bg-[#080b16] text-white"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Link to="/motion" className="text-sm text-violet-300">← Motion Lab</Link>
      <p className="mb-4 mt-9 text-xs uppercase tracking-[.25em] text-lime-300">UIFoundry Motion Studio</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">A whole new way to move<span className="text-lime-300">.</span></h1>
      <p className="mt-5 max-w-2xl leading-7 text-slate-300">Explore animations, timelines, draggable elements, scroll events, SVG, text, layout, and more. Run a recipe, adjust its motion, and take the code.</p>
      <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-400"><span>{motionDemos.length} runnable recipes</span><span>{topics.length} motion categories</span></div>
    </div></header>
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="rounded-2xl border border-slate-200 p-5">
          <label className="block text-sm font-semibold" htmlFor="motion-search">Find an animation</label><input id="motion-search" type="search" value={query} onChange={e => update('q', e.target.value)} placeholder="Search APIs and recipes…" className="my-3 min-h-11 w-full rounded-lg border border-slate-300 px-3 text-sm" />
          <label htmlFor="motion-topic" className="text-sm font-semibold">Motion category</label><select id="motion-topic" value={topic} onChange={e => update('topic', e.target.value)} className="mb-5 mt-2 min-h-11 w-full rounded-lg border border-slate-300 px-3 text-sm"><option value="all">All areas ({motionDemos.length})</option>{topics.map(([id, title]) => <option key={id} value={id}>{title} ({motionDemos.filter(d => d.topic === id).length})</option>)}</select>
          <p role="status" className="mb-3 text-xs text-slate-500">{filtered.length} recipes</p>
          <nav aria-label="Animation recipes" className="max-h-[520px] space-y-1 overflow-y-auto">{filtered.map(demo => <button key={demo.id} onClick={() => update('demo', demo.id)} aria-current={selected.id === demo.id ? 'true' : undefined} className={`w-full rounded-lg px-3 py-3 text-left text-sm ${selected.id === demo.id ? 'bg-brand-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`}><span className="block font-medium">{demo.title}</span><span className="mt-1 block text-[11px] opacity-60">{topics.find(([id]) => id === demo.topic)?.[1]}</span></button>)}{!filtered.length && <p className="py-6 text-sm text-slate-500">No recipes found. Try another search or area.</p>}</nav>
        </aside>
        <section className="min-w-0" aria-labelledby="motion-demo-title">
          <div className="mb-5 flex flex-wrap justify-between gap-4"><div><h2 id="motion-demo-title" className="text-2xl font-bold text-brand-950">{selected.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{selected.description}</p></div></div>
          <div key={selected.id} ref={root} className="motion-stage">
            <MotionStageContents demo={selected} />
          </div>
          {selected.hint && <p className="mt-3 text-sm text-slate-500">{selected.hint}</p>}
          {reduced && <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">Reduced motion is enabled. Timed recipes jump to their end state.</p>}
          <div className="mt-5 flex flex-wrap gap-3"><button onClick={() => setRun(n => n + 1)} className="min-h-11 rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white">{run ? 'Restart demo' : 'Play demo'}</button><button disabled={!ready} onClick={() => { if (playing) playback.current?.pause(); else playback.current?.play(); setPlaying(p => !p); }} className="min-h-11 rounded-xl border border-slate-300 px-5 text-sm disabled:opacity-40">{playing ? 'Pause' : 'Resume'}</button><button onClick={() => { setRun(0); setPlaying(false); setReady(false); setProgress(0); setMessage('Demo reset.'); }} className="min-h-11 rounded-xl border border-slate-300 px-5 text-sm">Reset</button><button onClick={showCode} className="min-h-11 rounded-xl border border-slate-300 px-5 text-sm">View source</button></div>
          <p role="status" className="my-4 min-h-6 text-sm text-brand-700">{message}</p>
          <label className="block text-xs text-slate-500">Seek through animation · {Math.round(progress)}%<input aria-label="Animation progress" type="range" min="0" max="100" value={progress} disabled={!ready} onChange={e => { const value = Number(e.target.value); playback.current?.pause(); playback.current?.seek(value / 100 * (playback.current?.duration ?? 0)); setPlaying(false); setProgress(value); }} className="mt-3 w-full accent-violet-600 disabled:opacity-30" /></label>
          <fieldset className="mt-6 grid gap-5 rounded-2xl border border-slate-200 p-5 sm:grid-cols-2"><legend className="px-2 text-sm font-semibold">Motion settings</legend><label className="text-sm">Duration · {duration} ms<input aria-label="Animation duration" type="range" min="300" max="4000" step="100" value={duration} onChange={e => setDuration(Number(e.target.value))} className="mt-3 block w-full accent-violet-600" /></label><label className="text-sm">Easing<select value={ease} onChange={e => setEase(e.target.value)} className="mt-2 block min-h-11 w-full rounded-lg border px-3">{['linear', 'in(3)', 'out(3)', 'inOut(3)', 'outBounce', 'outElastic', 'inOutSine', 'outBack'].map(value => <option key={value}>{value}</option>)}</select></label><label className="text-sm">Playback speed<select value={speed} onChange={e => setSpeed(Number(e.target.value))} className="ml-3 min-h-11 rounded-lg border px-3">{[.25, .5, 1, 1.5, 2].map(value => <option key={value} value={value}>{value}×</option>)}</select></label><div className="flex items-center gap-5 text-sm"><label><input type="checkbox" checked={loop} onChange={e => setLoop(e.target.checked)} className="mr-2" />Loop</label><label><input type="checkbox" checked={alternate} onChange={e => setAlternate(e.target.checked)} className="mr-2" />Alternate</label></div><p className="text-xs leading-6 text-slate-500 sm:col-span-2">Press Restart to apply duration, easing, loop, and alternate. Recipes may override these to demonstrate a specific API. Pointer, drag, and layout recipes use direct interaction rather than playback controls.</p></fieldset>
        </section>
      </div>
      <section className="mt-14 rounded-2xl bg-slate-50 p-6 sm:p-8"><h2 className="text-2xl font-semibold text-brand-950">Find your next interaction</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">Explore motion by technique. Every recipe runs locally in the browser and includes editable source.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{topics.map(([id, title]) => <button key={id} onClick={() => update('topic', id)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-brand-700 hover:border-brand-400">{title} ?</button>)}</div></section>
    </main>
    <dialog ref={dialog} aria-labelledby="motion-source-title" className="m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-5xl rounded-2xl p-6 backdrop:bg-slate-950/70"><div className="flex items-center justify-between gap-4"><h2 id="motion-source-title" className="text-xl font-semibold">{selected.title} / Source</h2><button autoFocus onClick={() => dialog.current?.close()} className="min-h-11 rounded-lg border px-4">Close</button></div><p role="status" className="my-4 text-sm text-slate-500">{copyStatus}</p><button disabled={!code} onClick={async () => { try { await navigator.clipboard.writeText(code); setCopyStatus('Copied. Save each file block separately.'); } catch { setCopyStatus('Select and copy the source below manually.'); } }} className="mb-4 min-h-11 rounded-lg bg-brand-600 px-4 text-white disabled:opacity-40">Copy source</button><textarea readOnly aria-label="Motion Studio source" value={code} spellCheck={false} className="h-96 w-full rounded-xl bg-slate-950 p-5 font-mono text-xs leading-6 text-slate-100" /></dialog>
  </div>;
}
