import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { ComponentItem } from "../types";
import Tabs from "./Tabs";

export default function CodePanel({ item }: { item: ComponentItem }) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const fallback = useRef<HTMLTextAreaElement>(null);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("source");
  const [source, setSource] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState("");
  const [manualCopy, setManualCopy] = useState(false);
  const mounted = useRef(true);
  const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);

  useEffect(() => {
    if (!open || source !== null) return;
    let active = true;
    setError(false);
    item.source().then((text) => { if (active) setSource(text); }).catch(() => { if (active) setError(true); });
    return () => { active = false; };
  }, [open, source, item, attempt]);

  function show() {
    setStatus("");
    setManualCopy(false);
    setTab("source");
    dialog.current?.showModal();
    setOpen(true);
  }

  async function copy() {
    if (!source) return;
    try {
      await navigator.clipboard.writeText(source);
      if (mounted.current) { setStatus("Copied"); setManualCopy(false); }
    } catch {
      if (mounted.current) { setStatus("Clipboard blocked. Select the source below and copy it manually."); setManualCopy(true); }
    }
  }

  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]),a[href],input:not([disabled]),textarea:not([disabled]),[tabindex]')).filter((node) => node.tabIndex >= 0 && node.getClientRects().length > 0);
    const first = controls[0];
    const last = controls.at(-1);
    const active = event.currentTarget.ownerDocument.activeElement;
    if (event.shiftKey && active === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && active === last) { event.preventDefault(); first?.focus(); }
  }

  return <>
    <button ref={trigger} type="button" onClick={show} aria-haspopup="dialog" aria-controls={`${id}-dialog`} className={`min-h-11 rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white hover:bg-brand-700 ${focus}`}>View code</button>
    <dialog ref={dialog} id={`${id}-dialog`} aria-labelledby={`${id}-title`} onKeyDown={trapFocus} onClose={() => { setOpen(false); trigger.current?.focus(); }} className="m-auto h-[min(740px,calc(100dvh-24px))] max-h-none w-[calc(100%-24px)] max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 font-catalog text-slate-900 shadow-2xl backdrop:bg-brand-950/60">
      <div className="flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 sm:px-6"><h2 id={`${id}-title`} className="min-w-0 font-display text-lg font-semibold">{item.title}</h2><button type="button" autoFocus onClick={() => dialog.current?.close()} className={`min-h-11 min-w-11 shrink-0 rounded-lg border border-slate-200 px-3 text-sm ${focus}`}>Close</button></header>
        <div className="shrink-0 px-3 py-3 sm:px-5"><Tabs id={`${id}-tabs`} label="Code view" tabs={[{ id: "source", label: "React source" }, { id: "setup", label: "Setup" }]} value={tab} onChange={setTab} panelId={`${id}-panel`} /></div>
        <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tabs-${tab}`} tabIndex={0} className={`min-h-0 flex-1 overflow-auto px-4 pb-5 sm:px-6 ${focus}`}>
          {tab === "source" ? <div className="flex h-full min-h-0 flex-col gap-3">
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-2"><p className="text-xs text-slate-500">Exact source · React + Tailwind</p><button type="button" disabled={!source} onClick={copy} className={`min-h-11 rounded-lg border border-slate-300 px-4 text-sm disabled:cursor-not-allowed disabled:opacity-50 ${focus}`}>{status === "Copied" ? "Copied ✓" : "Copy source"}</button></div>
            {error ? <div role="alert" className="rounded-xl bg-brand-50 p-5 text-sm"><p>Source could not load. Check your connection and try again.</p><button type="button" onClick={() => setAttempt((value) => value + 1)} className={`mt-3 min-h-11 rounded-lg border border-brand-200 px-4 ${focus}`}>Retry source</button></div> : source === null ? <p role="status" className="p-5 text-sm text-slate-500">Loading the original source…</p> : manualCopy ? <div className="flex min-h-0 flex-1 flex-col gap-2"><label htmlFor={`${id}-manual`} className="text-xs text-slate-600">Select and copy manually</label><button type="button" onClick={() => { fallback.current?.focus(); fallback.current?.select(); }} className={`min-h-11 self-start rounded-lg border border-slate-300 px-4 text-sm ${focus}`}>Select all source</button><textarea ref={fallback} id={`${id}-manual`} readOnly value={source} spellCheck={false} className={`min-h-40 flex-1 resize-none rounded-xl bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-100 ${focus}`} /></div> : <pre tabIndex={0} aria-label={`${item.title} React source`} className={`min-h-0 flex-1 overflow-auto rounded-xl bg-slate-950 p-4 text-xs leading-6 text-slate-100 ${focus}`}><code>{source}</code></pre>}
          </div> : <div className="space-y-5 text-sm leading-7 text-slate-600"><p>Copy the source into a <code>.tsx</code> file and import the matching named export. Use React 19 and Tailwind CSS 3.</p><p>Reuse the <code>brand</code> palette and <code>font-display</code> configuration from this project’s <code>tailwind.config.js</code>. Display uses Syne; body text inherits from the parent. This catalog uses DM Sans through <code>font-catalog</code>.</p><p>Wrap the section in <code>bg-white text-brand-950</code> or <code>bg-brand-950 text-white</code>. All imagery is CSS or inline markup.</p><p>Additional dependencies: {item.dependencies?.length ? item.dependencies.join(", ") : "none"}.</p><p>{item.a11yNotes}</p><p>Sample content is illustrative. Replace the product copy and connect your own actions. {item.frame.scrollable ? "The preview supplies scrollable studio content with #top, #work, and #studio anchors; this demonstration content is not included in the navbar source." : "The file includes all nine category exports and shared helpers; use the export that matches this preview."}</p></div>}
        </div>
        <p role="status" className="min-h-12 shrink-0 border-t border-slate-100 px-4 py-3 text-xs text-slate-600 sm:px-6">{status || "Copyable source. No package installation required."}</p>
      </div>
    </dialog>
  </>;
}
