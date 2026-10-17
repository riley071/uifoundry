# UIFoundry — Step 0 delivery

## Design plan

Palette: brand-950 #1e1b4b (deep surface), brand-600 #4f46e5 (action), brand-100 #e0e7ff (soft surface), white #ffffff, slate-900 #0f172a (ink). Existing violet and amber tokens support the device background and Premium label. No new palette or shared utility definitions.

Split product: [headline + two actions] | [CSS device]; stacks vertically on mobile. One asymmetrical device treatment; otherwise static.

Sticky glass: [wordmark | links | action], becoming [wordmark | Menu] on mobile; transparent header turns solid as the frame scrolls. The mobile drawer is a contained dialog. The layout skeleton differs from the split hero.

## Files

The complete current content of every source or verification file changed in this batch appears below. Original Home, Explore, MotionLab, design registry, design metadata, and design preview source were not edited. The old catalog component files are retained on disk but are not registered in Step 0. src/data/components.ts now forwards to the single new registry.

## Packages

None added; no install command needed. Browser checks use installed Edge and Node built-ins, with no browser automation dependency.

## Verification actually performed

- PASS: tsc --noEmit -p tsconfig.app.json before focus-trap adjustments.
- PASS: final implementation production build, including tsc -b, after focus-trap adjustments. Vite confirms separate category and raw-source chunks.
- PASS: registry/source verification before focus-trap adjustments: unique identifiers, derived counts, search and category filters, unknown IDs, exact raw-source/file equality, one default export, no external assets or catalog scaffolding in samples, rendered markup, preserved routes and chrome-less preview placement.
- PASS in a real hidden Edge browser on the final application build: live 1280px scaled canvas, 375px viewport, dark background, exact source modal, code tabs with arrow keys, repeated Tab focus wrapping, Escape, trigger focus return, blocked-clipboard fallback, no card-height change when opening code, URL filtering, category keyboard tabs, empty state/reset, and offscreen preview unmounting.
- PASS: git diff --check and unchanged design registry/data/preview checks.
- NOT COMPLETED: full-preview 360px layout and control sizes, mobile drawer browser checks, reduced-motion browser checks, final console-error audit, screenshot review, and a successful end-to-end browser-suite run. Later browser/server attempts crashed from local Node/V8 out-of-memory errors.
- BLOCKED ON REPEAT: final standalone no-emit and registry reruns also encountered the same local out-of-memory condition. No application files changed after the successful production build.

Do not treat partial browser results as a completed accessibility or visual audit. The browser verification script is included so these checks can be rerun once memory is available. It blocks remote font requests to test the system-font fallback.

Commands:

    .\node_modules\.bin\tsc.cmd --noEmit -p tsconfig.app.json
    npm.cmd run build
    node scripts/verify-component-library.mjs
    node scripts/check-component-library-browser.mjs

## Assumptions and remaining work

Only Step 0 is implemented: Hero 1 and Navigation 1. Remaining designs require the next approved batch. Categories and counts derive from registry metadata; empty categories are explicitly coming soon.

Product and studio copy, device content, and wordmarks are invented sample content, labelled in the catalog. Unconnected signup and contact actions are disabled. Premium is a badge with no gate. No backend, checkout, external images, or Three.js is added.

Existing global Inter typography remains unchanged to preserve the other pages; the catalog and full previews use the existing DM Sans font-catalog alias and Syne font-display. Copied samples inherit body typography. The full preview route has no platform navbar or footer; the navigation sample receives demonstration content from ComponentScene rather than from its copyable file.

IntersectionObserver unmounts previews outside its viewport margin, resetting local demo state. Responsive canvases are scaled to fit cards, so use full preview for unscaled touch/keyboard review. Fixed-height iframe viewports keep sticky elements and modal top layers inside the preview. Category and raw source imports load on demand. The existing large Three.js vendor chunk still triggers Vite's bundle-size warning.

No deployment was performed. Temporary QA browser processes were checked and cleaned up; no matching browser processes remained. Temporary browser profiles are in the system temp directory and are not deleted by the script.

Stop here and wait for approval before the Heroes batch.

## src/components-library/types.ts

```ts
import type { ComponentType, LazyExoticComponent } from "react";

export type CategoryId =
  | "heroes"
  | "navigation"
  | "footers"
  | "pricing"
  | "features"
  | "testimonials"
  | "ctas"
  | "forms"
  | "cards"
  | "utilities";

export type ComponentItem = {
  id: string;
  slug: string;
  category: CategoryId;
  title: string;
  description: string;
  tags: string[];
  isPremium: boolean;
  component: LazyExoticComponent<ComponentType>;
  source: () => Promise<string>;
  frame: { height: number; defaultBg: "light" | "dark"; scrollable?: boolean };
  dependencies?: string[];
  a11yNotes?: string;
};
```

## src/components-library/registry.ts

```ts
import { lazy } from "react";
import type { CategoryId, ComponentItem } from "./types";

export const categories: { id: CategoryId; title: string }[] = [
  { id: "heroes", title: "Heroes" },
  { id: "navigation", title: "Navigation" },
  { id: "footers", title: "Footers" },
  { id: "pricing", title: "Pricing" },
  { id: "features", title: "Features" },
  { id: "testimonials", title: "Testimonials" },
  { id: "ctas", title: "CTAs" },
  { id: "forms", title: "Forms" },
  { id: "cards", title: "Cards" },
  { id: "utilities", title: "Loaders and utilities" },
];

// Import category entry points so each category can grow as a separate chunk.
// Raw source is fetched only when someone opens the code panel.
export const componentRegistry: ComponentItem[] = [
  {
    id: "hero-split-product",
    slug: "split-product",
    category: "heroes",
    title: "Split product hero",
    description: "A product introduction with two actions and a device mockup for teams launching a focused digital product.",
    tags: ["product", "split", "device", "launch"],
    isPremium: false,
    component: lazy(() => import("./heroes").then((module) => ({ default: module.SplitProduct }))),
    source: () => import("./heroes/SplitProduct.tsx?raw").then((module) => module.default),
    frame: { height: 800, defaultBg: "light" },
    dependencies: [],
    a11yNotes: "The workspace link stays in the preview. The unconnected signup action is disabled. The device is HTML and CSS, with no external images.",
  },
  {
    id: "navigation-sticky-glass",
    slug: "sticky-glass",
    category: "navigation",
    title: "Sticky glass navigation",
    description: "A transparent header that turns solid on scroll, with a contained mobile drawer for studio and portfolio pages.",
    tags: ["navbar", "sticky", "glass", "drawer", "studio"],
    isPremium: true,
    component: lazy(() => import("./navigation").then((module) => ({ default: module.StickyGlass }))),
    source: () => import("./navigation/StickyGlass.tsx?raw").then((module) => module.default),
    frame: { height: 600, defaultBg: "dark", scrollable: true },
    dependencies: [],
    a11yNotes: "Scroll inside the preview to change the header. Menu uses a native modal dialog: Escape closes it and focus returns to Menu. Contact remains disabled.",
  },
];

export function getComponentItem(id: string) {
  return componentRegistry.find((item) => item.id === id);
}

export function getCategoryCounts() {
  return Object.fromEntries(categories.map((category) => [category.id, componentRegistry.filter((item) => item.category === category.id).length])) as Record<CategoryId, number>;
}

export function filterComponents(category: string, query: string) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return componentRegistry.filter((item) => {
    const text = `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
    return (category === "all" || item.category === category) && words.every((word) => text.includes(word));
  });
}
```

## src/components-library/heroes/index.ts

```ts
export { default as SplitProduct } from "./SplitProduct";
```

## src/components-library/heroes/SplitProduct.tsx

```tsx
import { useId } from "react";

export default function SplitProduct() {
  const id = useId();
  const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4";

  return (
    <section aria-labelledby={`${id}-title`} className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 text-inherit md:grid-cols-2 md:gap-16 md:px-12 md:py-24">
      <div>
        <p className="mb-6 text-sm font-medium opacity-75">Stillroom · A clearer place to work</p>
        <h1 id={`${id}-title`} className="max-w-xl font-display text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">Make room for<br />your best ideas.</h1>
        <p className="mt-7 max-w-md text-base leading-8 opacity-75">Bring your projects, notes, and next steps into one calm workspace. Less searching. More time for the work you care about.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={`#${id}-workspace`} className={`inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-700 motion-reduce:transition-none ${focus}`}>Explore the workspace <span aria-hidden="true" className="ml-3">↗</span></a>
          <button type="button" disabled className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-xl border border-slate-400/50 px-5 py-3 text-sm opacity-60">Get started · coming soon</button>
        </div>
        <p className="mt-6 text-xs opacity-70">Built around your day, rather than another dashboard.</p>
      </div>

      <div id={`${id}-workspace`} className="relative min-w-0 scroll-mt-6 py-6">
        <div aria-hidden="true" className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-brand-100 via-violet-100 to-brand-200" />
        <div className="relative mx-3 overflow-hidden rounded-2xl border border-white bg-white text-slate-900 shadow-2xl shadow-brand-950/15 sm:mx-6 md:-rotate-2">
          <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-4">
            <div aria-hidden="true" className="flex shrink-0 gap-1.5"><span className="h-2 w-2 rounded-full bg-slate-300" /><span className="h-2 w-2 rounded-full bg-slate-300" /><span className="h-2 w-2 rounded-full bg-slate-300" /></div>
            <span className="min-w-0 flex-1 truncate text-center font-mono text-[11px] text-slate-500">stillroom / product launch</span>
          </div>
          <div className="p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3"><span className="text-xs font-medium text-slate-500">Your workspace</span><span className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-700">Product launch</span></div>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight">Good things ahead.</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">A little structure for your next big idea.</p>
            <div className="my-6 grid grid-cols-3 gap-2" aria-label="Project stages">
              {[["Plan", "Direction"], ["Make", "First draft"], ["Share", "Feedback"]].map(([title, detail], index) => <div key={title} className={`min-w-0 rounded-xl p-3 ${index === 1 ? "bg-brand-950 text-white" : "bg-slate-100 text-slate-700"}`}><p className="text-xs font-semibold">{title}</p><p className={`mt-5 break-words text-[11px] ${index === 1 ? "text-brand-200" : "text-slate-500"}`}>{detail}</p></div>)}
            </div>
            <div className="space-y-3 border-t border-slate-100 pt-5">{["Gather the ideas", "Shape the first version", "Make it yours"].map((task, index) => <div key={task} className="flex items-center gap-3 text-xs"><span aria-hidden="true" className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${index === 0 ? "bg-brand-600 text-white" : "border border-slate-300 text-slate-400"}`}>{index === 0 ? "✓" : "·"}</span>{task}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## src/components-library/navigation/index.ts

```ts
export { default as StickyGlass } from "./StickyGlass";
```

## src/components-library/navigation/StickyGlass.tsx

```tsx
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
```

## src/components-library/shared/Tabs.tsx

```tsx
import { useRef } from "react";
import type { KeyboardEvent } from "react";

type Tab = { id: string; label: string };

export default function Tabs({ id, label, tabs, value, onChange, panelId }: {
  id: string;
  label: string;
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  panelId: string;
}) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    onChange(tabs[next].id);
    buttons.current[next]?.focus();
  }

  return (
    <div role="tablist" aria-label={label} className="flex max-w-full gap-2 overflow-x-auto p-1">
      {tabs.map((tab, index) => <button key={tab.id} ref={(node) => { buttons.current[index] = node; }} type="button" role="tab" id={`${id}-${tab.id}`} aria-selected={value === tab.id} aria-controls={panelId} tabIndex={value === tab.id ? 0 : -1} onClick={() => onChange(tab.id)} onKeyDown={(event) => onKeyDown(event, index)} className={`min-h-11 shrink-0 rounded-xl border px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${value === tab.id ? "border-brand-950 bg-brand-950 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-brand-300"}`}>{tab.label}</button>)}
    </div>
  );
}
```

## src/components-library/shared/ComponentScene.tsx

```tsx
import { Component, Suspense } from "react";
import type { ErrorInfo, ReactNode } from "react";
import type { ComponentItem } from "../types";

class PreviewBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(_error: Error, _info: ErrorInfo) { /* The visible fallback keeps a failed chunk contained. */ }
  render() {
    if (this.state.failed) return <p role="alert" className="p-8 text-sm">This preview could not load. Reload the page to try again.</p>;
    return this.props.children;
  }
}

/** Demonstration content belongs here, never in the copyable navbar source. */
export default function ComponentScene({ item }: { item: ComponentItem }) {
  const Demo = item.component;
  return (
    <PreviewBoundary>
      <Suspense fallback={<p role="status" className="p-8 text-sm">Loading preview…</p>}>
        <div id="top" className="min-h-screen">
          <Demo />
          {item.frame.scrollable && <main className="mx-auto max-w-7xl px-6 md:px-12">
            <section className="grid min-h-[650px] content-center py-16"><p className="mb-6 text-sm opacity-75">Independent by design</p><h1 className="max-w-3xl font-display text-5xl font-semibold leading-tight tracking-tight md:text-7xl">Thoughtful work.<br />A lasting impression.</h1><p className="mt-7 max-w-md text-base leading-8 opacity-75">Identity and digital experiences for people making something worth paying attention to.</p></section>
            <section id="work" className="min-h-[600px] scroll-mt-28 border-t border-slate-400/30 py-20"><h2 className="font-display text-4xl font-semibold">A different point of view.</h2><div aria-hidden="true" className="mt-10 grid gap-5 sm:grid-cols-2"><div className="h-60 rounded-2xl bg-gradient-to-br from-brand-400 to-violet-300" /><div className="flex h-60 items-center justify-center rounded-2xl bg-brand-100"><div className="h-32 w-32 rotate-12 rounded-3xl border-[18px] border-brand-600" /></div></div></section>
            <section id="studio" className="min-h-[500px] scroll-mt-28 border-t border-slate-400/30 py-20"><h2 className="max-w-xl font-display text-4xl font-semibold">Good people.<br />Close collaboration.</h2><p className="mt-7 max-w-lg text-base leading-8 opacity-75">We work with a small circle of collaborators to give every project the attention it deserves.</p></section>
          </main>}
        </div>
      </Suspense>
    </PreviewBoundary>
  );
}
```

## src/components-library/shared/PreviewFrame.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import type { ComponentItem } from "../types";
import ComponentScene from "./ComponentScene";

const widths = { mobile: 375, tablet: 768, desktop: 1280 };
type Viewport = keyof typeof widths;
const frameDocument = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;min-height:100%}html{overflow-x:hidden}*,*::before,*::after{box-sizing:border-box}</style></head><body><div id="component-root"></div></body></html>';
const control = "min-h-11 rounded-lg px-3 py-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

function FrameDocument({ item, background, width, scale }: { item: ComponentItem; background: "light" | "dark"; width: number; scale: number }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!root) return;
    const doc = root.ownerDocument;
    function syncStyles() {
      doc.head.querySelectorAll("[data-library-style]").forEach((node) => node.remove());
      document.head.querySelectorAll('style,link[rel="stylesheet"]').forEach((node) => {
        const clone = node.cloneNode(true) as HTMLElement;
        clone.setAttribute("data-library-style", "");
        doc.head.appendChild(clone);
      });
    }
    syncStyles();
    const observer = new MutationObserver(syncStyles);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [root]);

  useEffect(() => {
    if (!root) return;
    const doc = root.ownerDocument;
    doc.documentElement.style.colorScheme = background;
    doc.body.className = `font-catalog ${background === "dark" ? "bg-brand-950 text-white" : "bg-white text-brand-950"}`;
  }, [root, background]);

  return <>
    <iframe ref={frame} title={`${item.title} interactive preview`} srcDoc={frameDocument} sandbox="allow-same-origin" onLoad={() => setRoot(frame.current?.contentDocument?.getElementById("component-root") ?? null)} className="absolute left-0 top-0 block border-0" style={{ width, height: item.frame.height, transform: `scale(${scale})`, transformOrigin: "top left" }} />
    {root && createPortal(<ComponentScene item={item} />, root)}
  </>;
}

export default function PreviewFrame({ item }: { item: ComponentItem }) {
  const id = useId();
  const container = useRef<HTMLDivElement>(null);
  const [availableWidth, setAvailableWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [background, setBackground] = useState(item.frame.defaultBg);
  const designWidth = widths[viewport];
  const scale = availableWidth ? Math.min(1, availableWidth / designWidth) : 0;

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const resize = new ResizeObserver(([entry]) => setAvailableWidth(entry.contentRect.width));
    resize.observe(node);
    if (!("IntersectionObserver" in window)) setVisible(true);
    const visibility = "IntersectionObserver" in window ? new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "120px" }) : null;
    visibility?.observe(node);
    return () => { resize.disconnect(); visibility?.disconnect(); };
  }, []);

  return (
    <section aria-label={`${item.title} preview`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-4 py-2">
        <div role="group" aria-label="Preview viewport" className="flex flex-wrap gap-1">{(Object.keys(widths) as Viewport[]).map((value) => <button type="button" key={value} aria-pressed={viewport === value} onClick={() => setViewport(value)} className={`${control} ${viewport === value ? "bg-brand-950 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{value === "mobile" ? "Mobile 375" : value === "tablet" ? "Tablet 768" : "Desktop"}</button>)}</div>
        <button type="button" aria-label="Use dark preview background" aria-pressed={background === "dark"} onClick={() => setBackground(background === "dark" ? "light" : "dark")} className={`${control} border border-slate-200 text-slate-600`}>{background === "dark" ? "Dark" : "Light"}</button>
      </div>
      <div className="bg-slate-100 p-3 sm:p-5">
        <div ref={container} className="w-full">
          <div className="relative mx-auto overflow-hidden rounded-lg border border-slate-200" style={{ width: availableWidth ? designWidth * scale : "100%", height: availableWidth ? item.frame.height * scale : 300 }} aria-describedby={`${id}-note`}>
            {visible && scale > 0 ? <FrameDocument item={item} background={background} width={designWidth} scale={scale} /> : <div className="flex h-full items-center justify-center bg-white px-4 text-center text-xs text-slate-500">Preview loads when visible</div>}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2"><p id={`${id}-note`} className="text-xs text-slate-500">{designWidth}px canvas{scale > 0 ? ` · ${Math.round(scale * 100)}% scale` : ""}{item.frame.scrollable ? " · scroll inside" : ""}</p><Link to={`/components/preview/${item.id}?bg=${background}`} target="_blank" rel="noopener noreferrer" className={`${control} inline-flex items-center text-brand-700 underline underline-offset-4`}>Open full preview ↗</Link></div>
      </div>
    </section>
  );
}
```

## src/components-library/shared/CodePanel.tsx

```tsx
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
          </div> : <div className="space-y-5 text-sm leading-7 text-slate-600"><p>Copy the source into a <code>.tsx</code> file and import the default export. Use React 19 and Tailwind CSS 3.</p><p>Reuse the <code>brand</code> palette and <code>font-display</code> configuration from this project’s <code>tailwind.config.js</code>. Display uses Syne; body text inherits from the parent. This catalog uses DM Sans through <code>font-catalog</code>.</p><p>Wrap the section in <code>bg-white text-brand-950</code> or <code>bg-brand-950 text-white</code>. All imagery is CSS or inline markup.</p><p>Additional dependencies: {item.dependencies?.length ? item.dependencies.join(", ") : "none"}.</p><p>{item.a11yNotes}</p><p>Sample content is illustrative. Replace the product copy and connect your own actions. {item.frame.scrollable ? "The preview supplies scrollable studio content with #top, #work, and #studio anchors; this demonstration content is not included in the navbar source." : "The product mockup is part of the section source."}</p></div>}
        </div>
        <p role="status" className="min-h-12 shrink-0 border-t border-slate-100 px-4 py-3 text-xs text-slate-600 sm:px-6">{status || "Copyable source. No package installation required."}</p>
      </div>
    </dialog>
  </>;
}
```

## src/pages/Components.tsx

```tsx
import { useId } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, componentRegistry, filterComponents, getCategoryCounts } from "../components-library/registry";
import PreviewFrame from "../components-library/shared/PreviewFrame";
import CodePanel from "../components-library/shared/CodePanel";
import Tabs from "../components-library/shared/Tabs";

export default function Components() {
  const id = useId();
  const [params, setParams] = useSearchParams();
  const requestedCategory = params.get("category")?.toLowerCase() ?? "all";
  const category = categories.some((item) => item.id === requestedCategory) ? requestedCategory : "all";
  const query = params.get("q") ?? "";
  const counts = getCategoryCounts();
  const filtered = filterComponents(category, query);
  const activeCategory = categories.find((item) => item.id === category);
  const tabs = [{ id: "all", label: `All (${componentRegistry.length})` }, ...categories.map((item) => ({ id: item.id, label: `${item.title} (${counts[item.id]})` }))];

  function updateFilter(key: string, value: string) {
    setParams((previous) => {
      const next = new URLSearchParams(previous);
      if (value && value !== "all") next.set(key, value);
      else next.delete(key);
      return next;
    }, { replace: true, preventScrollReset: true });
  }

  function reset() {
    setParams((previous) => { const next = new URLSearchParams(previous); next.delete("category"); next.delete("q"); return next; }, { replace: true, preventScrollReset: true });
  }

  return (
    <div className="font-catalog">
      <header className="relative overflow-hidden bg-brand-950 text-white">
        <div aria-hidden="true" className="absolute -right-12 top-10 h-72 w-72 rotate-12 rounded-[64px] border border-brand-400/25 shadow-[0_0_0_40px_rgba(129,140,248,0.04)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm text-brand-200">The section library · Architecture preview</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">A considered start.<br />A finish that’s yours.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-brand-200">Designs and effects you can open, test, and take into your own code.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-brand-300"><span>{componentRegistry.length} live samples</span><span>{categories.length} categories</span><span>React + Tailwind · source included</span></div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
          <div className="w-full max-w-md"><label htmlFor={`${id}-search`} className="mb-2 block text-sm font-medium text-brand-950">Find a section</label><input id={`${id}-search`} type="search" value={query} onChange={(event) => updateFilter("q", event.target.value)} placeholder="Search by layout, use, or tag…" className="min-h-11 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2" /></div>
          <p role="status" className="pb-3 text-sm text-slate-500">{filtered.length} of {componentRegistry.length} components</p>
        </div>

        <Tabs id={`${id}-categories`} label="Component categories" tabs={tabs} value={category} onChange={(value) => updateFilter("category", value)} panelId={`${id}-results`} />
        <p className="mb-8 mt-3 text-xs leading-6 text-slate-500">Categories with no entries are coming soon. Arrow keys move between category tabs. Premium is a label; source is available to everyone.</p>

        <section id={`${id}-results`} role="tabpanel" aria-labelledby={`${id}-categories-${category}`} tabIndex={0} className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4">
          {filtered.length ? <div className="grid items-start gap-7 xl:grid-cols-2">{filtered.map((item) => <article key={item.id} id={item.id} aria-labelledby={`${item.id}-title`} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex min-h-14 items-center justify-between gap-3 border-b border-slate-200 px-5 py-3"><span className="text-xs text-slate-500">{categories.find((entry) => entry.id === item.category)?.title}</span>{item.isPremium && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">Premium · no gating</span>}</div>
            <PreviewFrame item={item} />
            <div className="p-5 sm:p-6">
              <h2 id={`${item.id}-title`} className="font-display text-xl font-semibold tracking-tight text-brand-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-500">{tag}</span>)}</div>
              <p className="mb-5 mt-5 border-l-2 border-brand-200 pl-3 text-xs leading-6 text-slate-500"><span className="font-semibold">Sample content.</span> Product copy, wordmarks, and workspace details are illustrative. {item.a11yNotes}</p>
              <CodePanel item={item} />
            </div>
          </article>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center"><h2 className="font-display text-2xl font-semibold text-brand-950">{activeCategory && !counts[activeCategory.id] ? `${activeCategory.title}: coming soon.` : "No sections match your search."}</h2><p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600">{activeCategory && !counts[activeCategory.id] ? "This batch establishes the preview and source system. This category will be added in a later batch." : "Try fewer words, a different category, or a tag such as product or sticky."}</p><button type="button" onClick={reset} className="mt-6 min-h-11 rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">Clear filters</button></div>}
        </section>

        <aside className="mt-12 border-t border-slate-200 py-8"><h2 className="font-display text-xl font-semibold text-brand-950">Try the layout. Keep the source.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Card previews begin on a 1280px canvas, scaled to fit. Switch to mobile or tablet, or open a full preview for unscaled interaction. Source is fetched from the actual component file only when you open its code panel.</p></aside>
      </div>
    </div>
  );
}
```

## src/pages/ComponentPreview.tsx

```tsx
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getComponentItem } from "../components-library/registry";
import ComponentScene from "../components-library/shared/ComponentScene";

export default function ComponentPreview() {
  const { id } = useParams<{ id: string }>();
  const [params] = useSearchParams();
  const item = getComponentItem(id ?? "");
  if (!item) return <main className="grid min-h-screen place-content-center gap-5 px-6 text-center font-catalog"><h1 className="font-display text-3xl font-semibold text-brand-950">Component not found</h1><p className="text-sm text-slate-600">This component is not in the current library.</p><Link to="/components" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">Browse components</Link></main>;
  const requestedBackground = params.get("bg");
  const background = requestedBackground === "dark" || requestedBackground === "light" ? requestedBackground : item.frame.defaultBg;
  return <div className={`min-h-screen font-catalog ${background === "dark" ? "bg-brand-950 text-white" : "bg-white text-brand-950"}`}><ComponentScene item={item} /></div>;
}
```

## src/data/components.ts

```ts
// Compatibility entry point; the library registry owns all catalog metadata.
export { componentRegistry as componentCatalog, categories as componentCategories } from "../components-library/registry";
```

## src/App.tsx

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import DesignDetail from './pages/DesignDetail';
import MotionLab from './pages/MotionLab';
import Pricing from './pages/Pricing';
import Preview from './pages/Preview';

const Components = lazy(() => import('./pages/Components'));
const ComponentPreview = lazy(() => import('./pages/ComponentPreview'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Live design previews – no chrome */}
        <Route path="/preview/:slug" element={<Preview />} />
        <Route path="/components/preview/:id" element={<Suspense fallback={<p role="status" className="p-6">Loading component preview…</p>}><ComponentPreview /></Suspense>} />

        {/* Main platform */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/design/:slug" element={<DesignDetail />} />
          <Route path="/components" element={<Suspense fallback={<p role="status" className="mx-auto max-w-7xl px-6 py-16 text-slate-600">Loading the component catalog…</p>}><Components /></Suspense>} />
          <Route path="/motion" element={<MotionLab />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## scripts/verify-component-library.mjs

```mjs
import assert from "node:assert/strict";
import { readFileSync, readdirSync, realpathSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

// Resolve one canonical checkout path so Windows does not load React twice.
const root = realpathSync.native(join(dirname(fileURLToPath(import.meta.url)), ".."));
const require = createRequire(join(root, "package.json"));
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const ts = require("typescript");
const server = await createServer({ root, optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true, hmr: false }, appType: "custom" });

try {
  const { categories, componentRegistry, filterComponents, getCategoryCounts, getComponentItem } = await server.ssrLoadModule("/src/components-library/registry.ts");
  const counts = getCategoryCounts();
  assert.equal(new Set(categories.map((item) => item.id)).size, categories.length);
  assert.equal(new Set(componentRegistry.map((item) => item.id)).size, componentRegistry.length);
  assert.equal(new Set(componentRegistry.map((item) => item.slug)).size, componentRegistry.length);
  assert.equal(Object.values(counts).reduce((sum, count) => sum + count, 0), componentRegistry.length);
  assert.equal(filterComponents("all", "  ").length, componentRegistry.length);
  assert.equal(filterComponents("all", "no-such-component-7ac91").length, 0);
  assert.equal(getComponentItem("missing"), undefined);

  for (const item of componentRegistry) {
    assert.ok(categories.some((category) => category.id === item.category));
    assert.ok(item.frame.height > 0);
    assert.equal(getComponentItem(item.id), item);
    assert.ok(filterComponents(item.category, item.tags[0].toUpperCase()).includes(item));
    assert.ok(filterComponents("all", item.title).includes(item));
    assert.ok(filterComponents(item.category, "").every((entry) => entry.category === item.category));

    const source = await item.source();
    const folder = join(root, "src/components-library", item.category);
    const matches = readdirSync(folder).filter((name) => name.endsWith(".tsx") && readFileSync(join(folder, name), "utf8") === source);
    assert.equal(matches.length, 1, `${item.id}: raw source must match exactly one actual component file`);
    const file = ts.createSourceFile(matches[0], source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const exported = file.statements.filter((statement) => statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword));
    assert.equal(exported.length, 1, `${item.id}: one component export`);
    assert.ok(exported[0].modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword), `${item.id}: default export`);
    assert.ok(!/https?:\/\//.test(source), `${item.id}: no external assets`);
    assert.ok(!/Sample content|preview|catalog/i.test(source), `${item.id}: no catalog scaffolding`);

    const path = `/${relative(root, join(folder, matches[0])).replaceAll("\\", "/")}`;
    const { default: Demo } = await server.ssrLoadModule(path);
    const html = renderToStaticMarkup(React.createElement(Demo));
    assert.ok(!html.includes("<img"), `${item.id}: no image dependency`);
    assert.ok(html.includes("focus-visible:ring"), `${item.id}: focus styling`);
    const controls = [...html.matchAll(/aria-controls="([^"]+)"/g)];
    for (const [, target] of controls) assert.ok(html.includes(`id="${target}"`), `${item.id}: valid control target`);
    if (item.frame.scrollable) assert.ok(html.includes("<nav") && html.includes("<dialog"));
    else assert.ok(html.includes("<section") && html.includes("<h1"));
    console.log(`PASS ${item.id}: registry, filtering, exact source, markup`);
  }

  const app = readFileSync(join(root, "src/App.tsx"), "utf8");
  for (const route of ["/", "/explore", "/design/:slug", "/preview/:slug", "/components", "/components/preview/:id", "/motion", "/pricing"]) assert.ok(app.includes(`path="${route}"`), `route preserved: ${route}`);
  assert.ok(app.indexOf('path="/components/preview/:id"') < app.indexOf("<Route element={<MainLayout />}>"));
  console.log("PASS category counts, unique identifiers, empty searches, unknown IDs, and routes");
  console.log("Browser-only checks (keyboard, 360px, reduced motion, clipboard, console) require browser QA.");
} finally {
  await server.close();
}
```

## scripts/check-component-library-browser.mjs

```mjs
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { createServer as createPortProbe } from "node:net";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Uses an installed browser and Node's built-in WebSocket; installs no packages.
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const binary = ["C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Google/Chrome/Application/chrome.exe"].find(existsSync);
assert.ok(binary, "An installed Edge or Chrome browser is required");
const profile = mkdtempSync(join(tmpdir(), "uifoundry-browser-"));
const probe = createPortProbe();
probe.listen(0, "127.0.0.1");
await once(probe, "listening");
const previewPort = probe.address().port;
await new Promise((resolve) => probe.close(resolve));
const baseUrl = `http://127.0.0.1:${previewPort}`;
let serverLog = "";
const server = spawn(process.execPath, [join(root, "node_modules/vite/bin/vite.js"), "preview", "--host", "127.0.0.1", "--port", String(previewPort), "--strictPort"], { cwd: root, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
server.stdout.on("data", (data) => { serverLog += data.toString(); });
server.stderr.on("data", (data) => { serverLog += data.toString(); });
const browser = spawn(binary, ["--headless=new", "--disable-gpu", "--no-first-run", "--disable-background-networking", "--remote-debugging-port=0", `--user-data-dir=${profile}`, "about:blank"], { windowsHide: true, stdio: "ignore" });
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let socket;
let sequence = 0;
const pending = new Map();
const consoleErrors = [];
const exceptions = [];
const checks = [];

async function until(check, label) {
  const start = Date.now();
  while (Date.now() - start < 15000) {
    try { if (await check()) return; } catch { /* Wait for navigation or server readiness. */ }
    await pause(100);
  }
  const diagnostic = socket?.readyState === WebSocket.OPEN ? await evaluate("({path:location.href,scroll:scrollY,frames:[...document.querySelectorAll('iframe')].map(f=>({title:f.title,state:f.contentDocument?.readyState,text:f.contentDocument?.body?.innerText.slice(0,160),rect:{y:f.getBoundingClientRect().y,height:f.getBoundingClientRect().height}})),articles:[...document.querySelectorAll('article')].map(a=>({id:a.id,y:a.getBoundingClientRect().y,height:a.getBoundingClientRect().height}))})").catch(() => null) : null;
  throw new Error(`Timed out: ${label}\n${JSON.stringify(diagnostic)}\n${serverLog}`);
}

function send(method, params = {}) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout: ${method}`)); }, 15000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text + ": " + result.exceptionDetails.exception?.description);
  return result.result?.value;
}

async function navigate(path) {
  await send("Page.navigate", { url: `${baseUrl}${path}` });
  await until(() => evaluate(`location.pathname + location.search === ${JSON.stringify(path)} && document.readyState === 'complete' && !!document.querySelector('#root')?.children.length`), path);
}

async function key(name, code, modifiers = 0) {
  await send("Input.dispatchKeyEvent", { type: "keyDown", key: name, windowsVirtualKeyCode: code, modifiers });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key: name, windowsVirtualKeyCode: code, modifiers });
}

function pass(label) { checks.push(label); console.log(`PASS ${label}`); }

try {
  await until(async () => (await fetch(`${baseUrl}/components`, { signal: AbortSignal.timeout(1000) })).ok, "preview server");
  await until(() => existsSync(join(profile, "DevToolsActivePort")), "headless browser");
  const port = readFileSync(join(profile, "DevToolsActivePort"), "utf8").split(/\r?\n/)[0];
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json();
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await once(socket, "open");
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const task = pending.get(message.id);
      pending.delete(message.id);
      clearTimeout(task.timer);
      if (message.error) task.reject(new Error(message.error.message));
      else task.resolve(message.result);
    }
    if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails);
    if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") consoleErrors.push(message.params.args.map((arg) => arg.value ?? arg.description).join(" "));
  });
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Network.enable");
  // Verify the advertised font fallback without depending on external network access.
  await send("Network.setBlockedURLs", { urls: ["https://fonts.googleapis.com/*", "https://fonts.gstatic.com/*"] });
  await send("Emulation.setDeviceMetricsOverride", { width: 1360, height: 1000, deviceScaleFactor: 1, mobile: false });
  await navigate("/components");
  await until(() => evaluate("document.querySelectorAll('article').length === 2"), "catalog cards");
  await evaluate("document.querySelector('article').scrollIntoView({block:'start'})");
  await until(() => evaluate("document.querySelector('iframe')?.contentDocument.querySelector('h1')?.textContent.includes('Make room')"), "portal preview");
  assert.equal(await evaluate("document.querySelector('iframe').contentWindow.innerWidth"), 1280);
  assert.ok(await evaluate("document.querySelector('iframe').getBoundingClientRect().width < 1280"));
  pass("1280px desktop canvas scales into the card and renders live content");

  await evaluate("[...document.querySelector('article').querySelectorAll('button')].find(b=>b.textContent==='Mobile 375').click()");
  await until(() => evaluate("document.querySelector('iframe').contentWindow.innerWidth === 375"), "mobile viewport");
  assert.ok(await evaluate("document.querySelector('iframe').contentDocument.documentElement.scrollWidth <= 375"));
  await evaluate("[...document.querySelector('article').querySelectorAll('button')].find(b=>b.getAttribute('aria-label')==='Use dark preview background').click()");
  await until(() => evaluate("document.querySelector('iframe').contentDocument.body.classList.contains('bg-brand-950')"), "dark theme");
  pass("375px viewport and dark background switches update the isolated preview");

  const before = await evaluate("document.querySelector('article').getBoundingClientRect().height");
  await evaluate("[...document.querySelector('article').querySelectorAll('button')].find(b=>b.textContent==='View code').click()");
  await until(() => evaluate("!!document.querySelector('dialog[open] pre code')"), "raw source panel");
  assert.equal(await evaluate("document.querySelector('article').getBoundingClientRect().height"), before);
  assert.ok(await evaluate("document.querySelector('dialog[open] pre code').textContent.includes('export default function SplitProduct')"));
  await evaluate("document.querySelector('dialog[open] [role=tab]').focus()");
  await key("ArrowRight", 39);
  assert.equal(await evaluate("document.querySelector('dialog[open] [role=tab][aria-selected=true]').textContent"), "Setup");
  await key("ArrowLeft", 37);
  for (let index = 0; index < 12; index++) {
    await key("Tab", 9);
    assert.ok(await evaluate("!!document.activeElement.closest('dialog[open]')"));
  }
  await evaluate("Object.defineProperty(navigator, 'clipboard', {configurable:true,value:{writeText:()=>Promise.reject(new Error('QA: permission blocked'))}}); [...document.querySelector('dialog[open]').querySelectorAll('button')].find(b=>b.textContent==='Copy source').click()");
  await until(() => evaluate("!!document.querySelector('dialog[open] textarea')"), "clipboard fallback");
  assert.ok(await evaluate("document.querySelector('dialog[open] [role=status]').textContent.includes('Clipboard blocked')"));
  await key("Escape", 27);
  await until(() => evaluate("!document.querySelector('dialog[open]')"), "close source dialog");
  assert.equal(await evaluate("document.activeElement.textContent"), "View code");
  pass("code modal: exact source, keyboard tabs, focus trap, Escape, focus return, blocked-clipboard fallback, no card layout shift");

  await navigate("/components?category=heroes&q=device");
  await until(() => evaluate("document.querySelectorAll('article').length === 1"), "URL filters");
  await navigate("/components?category=footers&q=anything");
  await until(() => evaluate("document.querySelector('[role=tabpanel]')?.textContent.includes('coming soon')"), "empty category");
  await evaluate("[...document.querySelectorAll('button')].find(b=>b.textContent==='Clear filters').click()");
  await until(() => evaluate("document.querySelectorAll('article').length === 2"), "clear filters");
  await evaluate("document.querySelector('[role=tablist][aria-label=\"Component categories\"] [role=tab]').focus()");
  await key("ArrowRight", 39);
  await until(() => evaluate("location.search.includes('category=heroes') && document.querySelector('[role=tab][aria-selected=true]').textContent.includes('Heroes')"), "category keyboard tabs");
  pass("URL search/category filters, clear empty state, and arrow-key category tabs");

  await send("Emulation.setDeviceMetricsOverride", { width: 1360, height: 300, deviceScaleFactor: 1, mobile: false });
  await evaluate("window.scrollTo(0,0)");
  await until(() => evaluate("document.querySelectorAll('iframe').length === 0"), "offscreen previews unmounted");
  pass("offscreen previews unmount through IntersectionObserver");

  await send("Emulation.setDeviceMetricsOverride", { width: 1360, height: 1000, deviceScaleFactor: 1, mobile: false });
  await navigate("/components");
  await until(() => evaluate("document.querySelectorAll('article').length === 2"), "desktop screenshot cards");
  await evaluate("document.querySelector('article').scrollIntoView({block:'center'})");
  await until(() => evaluate("!!document.querySelector('iframe')?.contentDocument.querySelector('h1')"), "desktop screenshot");
  mkdirSync(join(root, "artifacts"), { recursive: true });
  const desktop = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  writeFileSync(join(root, "artifacts/component-library-step0-desktop.png"), Buffer.from(desktop.data, "base64"));

  await send("Emulation.setDeviceMetricsOverride", { width: 360, height: 900, deviceScaleFactor: 1, mobile: false });
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await navigate("/components/preview/hero-split-product");
  await until(() => evaluate("!!document.querySelector('h1')"), "full hero");
  assert.ok(await evaluate("document.documentElement.scrollWidth <= 360"));
  assert.equal(await evaluate("document.querySelectorAll('footer').length"), 0);
  assert.ok(await evaluate("[...document.querySelectorAll('a,button')].every(el=>el.getBoundingClientRect().height>=44)"));
  assert.equal(await evaluate("getComputedStyle(document.querySelector('a')).transitionDuration"), "0s");
  const mobile = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  writeFileSync(join(root, "artifacts/component-library-step0-mobile.png"), Buffer.from(mobile.data, "base64"));
  pass("full hero: 360px without horizontal overflow, 44px controls, reduced motion, no site chrome");

  await navigate("/components/preview/navigation-sticky-glass");
  await until(() => evaluate("!!document.querySelector('header button[aria-haspopup=dialog]')"), "full navigation");
  assert.ok(await evaluate("document.documentElement.scrollWidth <= 360"));
  await evaluate("document.querySelector('button[aria-haspopup=dialog]').click()");
  await until(() => evaluate("!!document.querySelector('dialog[open]')"), "mobile drawer");
  for (let index = 0; index < 8; index++) { await key("Tab", 9); assert.ok(await evaluate("!!document.activeElement.closest('dialog[open]')")); }
  await key("Escape", 27);
  assert.equal(await evaluate("document.activeElement.textContent"), "Menu");
  await evaluate("window.scrollTo(0,200)");
  await until(() => evaluate("document.querySelector('header').classList.contains('bg-white/95')"), "scroll style");
  assert.equal(await evaluate("getComputedStyle(document.querySelector('header')).transitionDuration"), "0s");
  pass("navigation: 360px, scroll state, drawer focus trap, Escape/focus return, reduced motion");

  await navigate("/components/preview/not-found");
  await until(() => evaluate("document.querySelector('h1')?.textContent === 'Component not found'"), "unknown preview ID");
  assert.deepEqual(exceptions, [], "No uncaught browser exceptions");
  assert.deepEqual(consoleErrors, [], "No console.error calls");
  pass("unknown preview IDs handled; no uncaught browser exceptions or console.error calls");
  writeFileSync(join(root, "artifacts/component-library-step0-browser-checks.json"), JSON.stringify({ checks, consoleErrors, exceptions, browser: binary, profile }, null, 2));
} finally {
  if (socket?.readyState === WebSocket.OPEN) {
    try { await send("Browser.close"); } catch { /* Browser may close its socket before replying. */ }
    socket.close();
  }
  for (const task of pending.values()) clearTimeout(task.timer);
  browser.kill();
  server.kill();
}
```

