import { useId, useRef, useState } from "react";
import type { ReactNode } from "react";

/** A contained scroll surface; pass your page content as children. */
export default function StickyGlassNavbar({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const id = useId();
  const menuButton = useRef<HTMLButtonElement>(null);
  const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

  return (
    <section aria-label="Glass navigation demo" tabIndex={0} onScroll={(event) => setScrolled(event.currentTarget.scrollTop > 16)} className={`h-[420px] overflow-auto rounded-2xl bg-brand-950 text-white ${focus}`}>
      <header className={`sticky top-0 z-10 border-b transition-colors motion-reduce:transition-none ${scrolled || open ? "border-slate-200 bg-white/95 text-brand-950 shadow-sm backdrop-blur-xl" : "border-white/15 bg-transparent text-white"}`}>
        <nav aria-label="Studio navigation" onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } }} className="relative mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <a href={`#${id}-intro`} className={`font-display text-xl font-bold tracking-tight ${focus}`}>form<span className="text-brand-400">/</span>work</a>
          <div className="hidden items-center gap-5 text-sm md:flex">
            <a className={focus} href={`#${id}-work`}>Our work</a>
            <a className={focus} href={`#${id}-about`}>The studio</a>
            <a className={`rounded-full bg-brand-600 px-4 py-2 text-white ${focus}`} href={`#${id}-contact`}>Let’s talk ↗</a>
          </div>
          <button ref={menuButton} type="button" aria-expanded={open} aria-controls={`${id}-menu`} onClick={() => setOpen(!open)} className={`rounded-lg border border-slate-300/60 px-3 py-2 text-sm md:hidden ${focus}`}>{open ? "Close" : "Menu"}</button>
          <div id={`${id}-menu`} hidden={!open} className="absolute inset-x-0 top-full border-b border-slate-200 bg-white p-5 text-brand-950 shadow-xl md:hidden">
            <div className="grid gap-1">
              {[["work", "Our work"], ["about", "The studio"], ["contact", "Let’s talk ↗"]].map(([target, label]) => <a key={target} className={`rounded-lg p-3 hover:bg-brand-50 ${focus}`} href={`#${id}-${target}`} onClick={() => setOpen(false)}>{label}</a>)}
            </div>
          </div>
        </nav>
      </header>
      {children ?? <div className="mx-auto max-w-5xl px-6">
        <div id={`${id}-intro`} className="grid min-h-[310px] content-center gap-5 py-10">
          <p className="text-sm text-brand-200">Independent design studio · Cape Town</p>
          <h2 className="max-w-lg font-display text-4xl font-semibold leading-tight md:text-5xl">Small studio.<br />Considered work.</h2>
          <p className="max-w-sm text-sm leading-relaxed text-brand-200">Identity and digital experiences for people building something that matters.</p>
          <p className="text-xs text-brand-300">Scroll inside this preview to change the navigation ↓</p>
        </div>
        {[["work", "Work with a point of view."], ["about", "Good people. Close collaboration."], ["contact", "Tell us what you’re making."]].map(([target, title], i) => <section id={`${id}-${target}`} key={target} className="scroll-mt-24 border-t border-white/20 py-16"><p className="mb-4 text-xs text-brand-300">0{i + 1}</p><h3 className="font-display text-2xl">{title}</h3><p className="mt-4 text-sm text-brand-200">Illustrative studio content. Replace with your own copy and contact details.</p></section>)}
      </div>}
    </section>
  );
}
