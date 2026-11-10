import { useEffect, useRef, useState } from 'react';
import EffectScene from '../../effects/EffectScene';
import PreviewFrame from '../../components-library/shared/PreviewFrame';
import MotionStageContents from '../../motion-native/MotionStage';
import type { Playback } from '../../motion-native/demos';
import { templateLibraries } from './library';
import type { TemplateTheme } from './themes';
import '../../effects/effects.css';
import '../../motion-native/lab.css';

export default function TemplateLab({ theme }: { theme: TemplateTheme }) {
  const library = templateLibraries.find(entry => entry.slug === theme.slug)!;
  const [tab, setTab] = useState('effects');
  const [effect, setEffect] = useState(library.effects[0]);
  const [section, setSection] = useState(library.sections[0]);
  const [motion, setMotion] = useState(library.motion[0]);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  const [status, setStatus] = useState('Choose a motion study, then press Play.');
  const [motionPaused, setMotionPaused] = useState(false);
  const [hasPlayer, setHasPlayer] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const player = useRef<Playback | null>(null);
  useEffect(() => {
    if (tab !== 'motion' || !run || !root.current) return;
    const cleanups: (() => void)[] = [];
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    try {
      const result = motion.run({ root: root.current, options: { duration: reduced ? 0 : 1800, ease: 'out(3)', alternate: false, loop: false }, cleanup: callback => cleanups.push(callback), report: setStatus });
      player.current = result ? result : null;
      setHasPlayer(Boolean(result));
      setMotionPaused(false);
    } catch { setStatus('This motion study is unavailable in this browser.'); }
    const hide = () => { if (document.hidden) { player.current?.pause(); setMotionPaused(true); } };
    document.addEventListener('visibilitychange', hide);
    return () => { document.removeEventListener('visibilitychange', hide); cleanups.reverse().forEach(callback => callback()); player.current = null; };
  }, [motion, run, tab]);
  return <section id="playroom" className="template-playroom">
    <div className="template-eyebrow">{theme.name} / INTERACTION ROOM</div>
    <div className="template-section-heading"><h2>Go on. Play a little.</h2><p>A living collection of textures, movements, and interface ideas.</p></div>
    <div className="playroom-tabs" role="group" aria-label="Interaction collection">{[['effects', 'Atmospheres', library.effects.length], ['motion', 'Motion studies', library.motion.length], ['sections', 'UI building blocks', library.sections.length]].map(([id, label, count]) => <button key={id} aria-pressed={tab === id} onClick={() => { setTab(String(id)); setRun(0); }}>{label} <small>{count}</small></button>)}</div>
    {tab === 'effects' && <><div className="playroom-controls"><label>Choose an atmosphere<select value={effect.id} onChange={event => setEffect(library.effects.find(item => item.id === event.target.value)!)}>{library.effects.map(item => <option key={item.id} value={item.id}>{item.name} / {item.kind}</option>)}</select></label><button onClick={() => setPaused(value => !value)} aria-pressed={paused}>{paused ? 'Resume' : 'Pause'} motion</button></div><EffectScene name={effect.name} kind={effect.kind} text={theme.name} color={theme.accent} paused={paused} /><p className="playroom-caption">{effect.name} · {effect.description}</p></>}
    {tab === 'motion' && <><div className="playroom-controls"><label>Choose a movement<select value={motion.id} onChange={event => { setMotion(library.motion.find(item => item.id === event.target.value)!); setRun(0); setStatus('Press Play to start.'); }}>{library.motion.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label><button onClick={() => { setRun(value => value + 1); setStatus('Motion study active.'); }}>Play / restart</button><button disabled={!hasPlayer || !run} onClick={() => { if (motionPaused) player.current?.play(); else player.current?.pause(); setMotionPaused(value => !value); }}>{motionPaused ? 'Resume' : 'Pause'}</button><button onClick={() => { setRun(0); setStatus('Motion reset.'); }}>Reset</button></div><div key={`${motion.id}-${run}`} ref={root} className="motion-stage"><MotionStageContents demo={motion} /></div><p role="status" className="playroom-caption">{status}</p></>}
    {tab === 'sections' && <><div className="playroom-controls"><label>Explore {theme.ui}<select value={section.id} onChange={event => setSection(library.sections.find(item => item.id === event.target.value)!)}>{library.sections.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label></div><div className="template-ui-preview"><PreviewFrame key={section.id} item={section} /></div><p className="playroom-caption">{section.title} · {section.description}</p></>}
  </section>;
}
