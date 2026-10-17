import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

export default function StickyGlass() {
  const id = useId();
  const header = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4";
  const links = [{ label: "Our work", href: "#work" }, { label: "The studio", href: "#studio" }];

  useEffect(() => {
    const view = header.current?.ownerDocument.defaultView;
    if (!view) return;
    const onScroll = () => setScrolled(view.scrollY > 16);
    onScroll();
    view.addEventListener("scroll", onScroll, { passive: true });
    return () => view.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    menu.current?.close();
  }

  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]),a[href]')).filter((node) => node.tabIndex >= 0 && node.getClientRects().length > 0);
    const first = controls[0];
    const last = controls.at(-1);
    const active = event.currentTarget.ownerDocument.activeElement;
    if (event.shiftKey && active === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && active === last) { event.preventDefault(); first?.focus(); }
  }

  return (
    <header ref={header} className={`sticky top-0 z-20 w-full border-b transition-colors duration-200 motion-reduce:transition-none ${scrolled ? "border-slate-200 bg-white/95 text-brand-950 shadow-sm backdrop-blur-xl" : "border-slate-400/30 bg-transparent text-inherit"}`}>
      <nav aria-label="Main navigation" className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-6 md:px-12">
        <a href="#top" className={`inline-flex min-h-11 items-center rounded-lg font-display text-2xl font-bold tracking-tight ${focus}`} aria-label="Formwork home">form<span className="text-brand-400">/</span>work</a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className={`inline-flex min-h-11 items-center rounded-lg text-sm font-medium ${focus}`}>{link.label}</a>)}
          <button type="button" disabled className="min-h-11 cursor-not-allowed rounded-full border border-slate-400/40 px-5 py-3 text-sm opacity-60">Contact · coming soon</button>
        </div>
        <button ref={trigger} type="button" aria-haspopup="dialog" aria-controls={`${id}-menu`} onClick={() => menu.current?.showModal()} className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-400/40 px-4 text-sm md:hidden ${focus}`}>Menu</button>
      </nav>
      <dialog ref={menu} id={`${id}-menu`} aria-labelledby={`${id}-title`} onKeyDown={trapFocus} onClose={() => trigger.current?.focus()} className="fixed inset-y-0 left-auto right-0 m-0 ml-auto h-dvh max-h-none w-full max-w-sm border-l border-slate-200 bg-white p-6 text-brand-950 backdrop:bg-brand-950/60">
        <div className="flex items-center justify-between gap-4"><h2 id={`${id}-title`} className="font-display text-xl font-semibold">Explore Formwork</h2><button type="button" autoFocus onClick={closeMenu} className={`min-h-11 min-w-11 rounded-lg border border-slate-300 px-3 text-sm ${focus}`}>Close</button></div>
        <nav aria-label="Mobile navigation" className="mt-10 grid gap-3">{links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu} className={`flex min-h-14 items-center justify-between rounded-xl border-b border-slate-200 px-2 text-lg ${focus}`}>{link.label}<span aria-hidden="true">↗</span></a>)}</nav>
        <button type="button" disabled className="mt-8 min-h-11 w-full cursor-not-allowed rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-900 opacity-60">Contact · coming soon</button>
      </dialog>
    </header>
  );
}
