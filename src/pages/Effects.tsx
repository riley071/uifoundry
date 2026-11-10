import { useRef, useState } from 'react';
import { Link, NavLink, useParams, useSearchParams } from 'react-router-dom';
import EffectScene from '../effects/EffectScene';
import type { EffectKind } from '../effects/EffectScene';
import { effects } from '../effects/catalog';
import type { Effect } from '../effects/catalog';
import '../effects/effects.css';

const groups: { id: EffectKind; title: string; subtitle: string }[] = [
  { id: 'backgrounds', title: 'Backgrounds', subtitle: 'Set the atmosphere.' },
  { id: 'text', title: 'Text effects', subtitle: 'Give every word a little life.' },
  { id: 'cursors', title: 'Cursor effects', subtitle: 'Make every movement count.' },
];
const sourceFiles = import.meta.glob<string>('../effects/EffectScene.tsx', { query: '?raw', import: 'default' });
const cssFiles = import.meta.glob<string>('../effects/effects.css', { query: '?raw', import: 'default' });

export default function Effects() {
  const { category = 'backgrounds' } = useParams();
  const group = groups.find(g => g.id === category);
  const [params, setParams] = useSearchParams();
  const [paused, setPaused] = useState(false);
  const [color, setColor] = useState('#a78bfa');
  const [sample, setSample] = useState('Make some magic');
  const [selected, setSelected] = useState<Effect | null>(null);
  const [source, setSource] = useState('');
  const [status, setStatus] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const query = params.get('q') ?? '';
  const matches = effects.filter(e => e.kind === category && `${e.name} ${e.description}`.toLowerCase().includes(query.toLowerCase()));
  const pages = Math.max(1, Math.ceil(matches.length / 12));
  const page = Math.min(pages, Math.max(1, Number(params.get('page')) || 1));
  const shown = matches.slice((page - 1) * 12, page * 12);
  function filter(key: string, value: string) {
    setParams(previous => { const next = new URLSearchParams(previous); next.set(key, value); if (key === 'q') next.delete('page'); return next; }, { replace: true });
  }
  async function viewCode(effect: Effect) {
    setSelected(effect); setSource(''); setStatus('Loading source…'); dialog.current?.showModal();
    try {
      const [tsx, css] = await Promise.all([sourceFiles['../effects/EffectScene.tsx'](), cssFiles['../effects/effects.css']()]);
      setSource(`// Save as EffectScene.tsx\n${tsx}\n\n/* Save the following as effects.css and import it alongside EffectScene. */\n${css}\n\n// Usage in your React component:\n// import EffectScene from './EffectScene';\n// import './effects.css';\n// <EffectScene name=${JSON.stringify(effect.name)} kind=${JSON.stringify(effect.kind)} color=${JSON.stringify(color)} text=${JSON.stringify(sample)} />`);
      setStatus('Source includes the shared React renderer, stylesheet, and usage.');
    } catch { setStatus('Source could not load. Close and try again.'); }
  }
  if (!group) return <main className="mx-auto max-w-7xl px-6 py-20"><h1 className="text-3xl font-bold">Effect category not found</h1><Link to="/components/backgrounds" className="mt-6 inline-block text-brand-600">Browse backgrounds →</Link></main>;
  return <div className="font-catalog">
    <header className="relative overflow-hidden bg-[#080b16] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/components" className="text-sm text-violet-300">← Component library</Link>
        <p className="mt-10 text-xs uppercase tracking-[.3em] text-violet-300">The effects collection / {String(groups.indexOf(group) + 1).padStart(2, '0')}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">{group.title}<span className="text-violet-400">.</span></h1>
        <p className="mt-5 text-lg text-slate-300">{group.subtitle} Interactive studies for your next interface.</p>
        <div className="mt-8 flex flex-wrap gap-5 text-xs text-slate-400"><span>{effects.filter(e => e.kind === category).length} live studies</span><span>React + Canvas + CSS</span><span>Source included</span></div>
      </div>
    </header>
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav aria-label="Effect categories" className="flex flex-wrap gap-2 border-b border-slate-200 pb-5">{groups.map(g => <NavLink key={g.id} to={`/components/${g.id}`} className={({ isActive }) => `rounded-xl px-5 py-3 text-sm font-medium ${isActive ? 'bg-brand-950 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{g.title} <span className="ml-2 opacity-60">{effects.filter(e => e.kind === g.id).length}</span></NavLink>)}</nav>
      <div className="my-7 flex flex-wrap items-end gap-4">
        <label className="min-w-52 flex-1 text-sm font-medium">Search {group.title.toLowerCase()}<input type="search" value={query} onChange={e => filter('q', e.target.value)} placeholder="Find your next effect…" className="mt-2 block min-h-11 w-full rounded-xl border border-slate-300 px-4 font-normal" /></label>
        {category === 'text' && <label className="text-sm font-medium">Preview text<input value={sample} maxLength={40} onChange={e => setSample(e.target.value)} className="mt-2 block min-h-11 rounded-xl border border-slate-300 px-4 font-normal" /></label>}
        <label className="text-sm font-medium">Accent<input type="color" aria-label="Effect accent color" value={color} onChange={e => setColor(e.target.value)} className="mt-2 block h-11 w-14 cursor-pointer rounded-lg border border-slate-300 bg-white p-1" /></label>
        <button onClick={() => setPaused(p => !p)} aria-pressed={paused} className="min-h-11 rounded-xl border border-slate-300 px-5 text-sm">{paused ? 'Resume motion' : 'Pause motion'}</button>
      </div>
      <div className="mb-7 flex flex-wrap justify-between gap-3 text-xs leading-6 text-slate-500"><p role="status">{matches.length} results · Page {page} of {pages}</p><p>Original UIFoundry studies inspired by the supplied descriptions. Shared animation families; simplified behavior.</p></div>
      {shown.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{shown.map(effect => <article key={effect.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <EffectScene name={effect.name} kind={effect.kind} paused={paused} color={color} text={sample} />
        <div className="p-5"><h2 className="font-display text-lg font-semibold text-brand-950">{effect.name}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">Concept: {effect.description}</p>
          <div className="mt-5 flex items-center justify-between gap-2"><button onClick={() => viewCode(effect)} className="min-h-11 rounded-lg bg-brand-50 px-4 text-sm font-medium text-brand-700 hover:bg-brand-100">View code</button></div>
        </div>
      </article>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 p-16 text-center"><h2 className="text-xl font-semibold">No matching effects</h2><button onClick={() => setParams({})} className="mt-5 text-brand-600 underline">Clear search</button></div>}
      <nav aria-label="Effects pagination" className="mt-10 flex items-center justify-center gap-4"><button disabled={page <= 1} onClick={() => filter('page', String(page - 1))} className="min-h-11 rounded-lg border px-4 text-sm disabled:opacity-40">Previous</button><span className="text-sm text-slate-500">{page} / {pages}</span><button disabled={page >= pages} onClick={() => filter('page', String(page + 1))} className="min-h-11 rounded-lg border px-4 text-sm disabled:opacity-40">Next</button></nav>
    </main>
    <dialog ref={dialog} aria-labelledby="effect-source-title" className="m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-4xl rounded-2xl p-6 backdrop:bg-slate-950/70"><div className="flex flex-wrap items-center justify-between gap-3"><h2 id="effect-source-title" className="text-xl font-semibold">{selected?.name} / Source</h2><button autoFocus onClick={() => dialog.current?.close()} className="min-h-11 rounded-lg border px-4">Close</button></div><p role="status" className="my-4 text-sm text-slate-500">{status}</p><p className="mb-4 text-xs text-slate-500">Save the React and CSS portions as separate files. Use the example at the end with React 19. No additional dependencies.</p><button disabled={!source} onClick={async () => { try { await navigator.clipboard.writeText(source); setStatus('Copied source.'); } catch { setStatus('Clipboard unavailable. Select and copy the source below.'); } }} className="mb-4 min-h-11 rounded-lg bg-brand-600 px-4 text-sm text-white disabled:opacity-40">Copy source</button><textarea aria-label="Effect source code" readOnly value={source} spellCheck={false} className="h-96 w-full rounded-xl bg-slate-950 p-5 font-mono text-xs leading-6 text-slate-100" /></dialog>
  </div>;
}
