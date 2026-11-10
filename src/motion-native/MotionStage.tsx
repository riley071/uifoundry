import type { MotionDemo } from './demos';
import { AdvancedStage, isAdvanced } from './advanced';

export default function MotionStageContents({ demo }: { demo: MotionDemo }) {
 const showSvg = demo.topic === 'svg';
 return <>
            {isAdvanced(demo.id) ? <AdvancedStage id={demo.id} /> : <>
            <div className="tiles" style={{ display: showSvg || demo.topic === 'text' || demo.id === 'grid-stagger' || demo.id === 'scroll' || demo.id.startsWith('timer-') ? 'none' : undefined }}>{[0, 1, 2, 3, 4].map(i => <div key={i} className="tile">{String(i + 1).padStart(2, '0')}</div>)}</div>
            {demo.id.startsWith('timer-') && <div className="flex flex-wrap justify-center gap-10 p-6 text-center"><div><p className="text-xs uppercase tracking-widest text-slate-400">Elapsed / ms</p><p data-timer-time className="mt-3 font-mono text-5xl tabular-nums text-lime-300">0</p></div><div><p className="text-xs uppercase tracking-widest text-slate-400">Completed loops</p><p data-timer-count className="mt-3 font-mono text-5xl tabular-nums text-violet-300">0</p></div></div>}
            {demo.topic === 'text' && <p className="demo-text" aria-label="Make it move">Make it move</p>}
            {demo.id === 'grid-stagger' && <div className="dot-grid">{Array.from({ length: 35 }, (_, i) => <span key={i} className="grid-dot" />)}</div>}
            {showSvg && <svg viewBox="0 0 300 180" className="demo-svg" aria-label="Animated SVG illustration"><path className="line-path" d="M20 100 C60 10 110 10 150 90 S240 170 280 70" fill="none" stroke="#bef264" strokeWidth="3" opacity={demo.id === 'morph' ? 0 : 1} /><circle className="path-marker" r="7" fill="#c4b5fd" opacity={demo.id === 'path' ? 1 : 0} /><path className="morph-a" d="M100 40 L210 90 L100 150 Z" fill="#a78bfa" opacity={demo.id === 'morph' ? 1 : 0} /><path className="morph-b" d="M90 40 L210 40 L210 150 L90 150 Z" fill="none" visibility="hidden" /></svg>}
            <button hidden className="rearrange">Rearrange</button>
            <div hidden className="scroll-demo" tabIndex={0} aria-label="Scroll-linked animation container"><p>Scroll down ↓</p><div className="scroll-spacer" /><div className="scroll-tile" /><div className="scroll-spacer" /><p>Scroll up ↑</p></div>
            </>}
 </>;
}
