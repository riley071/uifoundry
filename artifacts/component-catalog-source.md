# Component catalog: complete updated source

Scope: the six components explicitly requested for the first implementation. The remaining sixteen curated picks are planned, not implemented.

Packages: none added. React, Tailwind, React Router, and Vite are already installed.

Assumptions: work stays in the existing local checkout; no hosting identity or deployment URL was provided. Existing routes, design registry, metadata, and pure previews are preserved. Existing Inter typography is retained outside the catalog; DM Sans and Syne are added for the catalog.

Placeholders: product mockups, business names, quotes, and prices are illustrative. Checkout remains disabled. Categories without implemented components say Soon. No backend or paid service is simulated.

Performance: the catalog route is lazy-loaded. Six lightweight iframe documents isolate preview breakpoints; React portals share the parent runtime, without six copies of the app or additional Three.js scenes. Source is imported from the actual files using Vite raw imports, keeping copied code aligned with previews. Fonts use display=swap and system fallbacks. The existing Three.js vendor chunk still triggers the Vite size warning.

Validation: production build and six server rendering checks passed. Checks cover semantic sections, source availability, focus styles, category registration, disabled pricing buttons, initial prices, FAQ expanded state/regions, and testimonial live announcements. No browser-control tool was available: rendered visual appearance, clipboard permissions, and interactive keyboard/mobile behavior still require browser QA.

## src/pages/Components.tsx

```tsx
import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import { componentCatalog, componentCategories } from "../data/components";

type CatalogItem = (typeof componentCatalog)[number];
const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";
const frameHtml = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html{color-scheme:light}body{margin:0}*,*::before,*::after{box-sizing:border-box}</style></head><body><div id="preview-root"></div></body></html>';

/** Isolates breakpoints and anchors without duplicating the app or its runtime. */
function PreviewFrame({ title, dark, mobile, children }: { title: string; dark: boolean; mobile: boolean; children: ReactNode }) {
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!root) return;
    const doc = root.ownerDocument;
    const syncStyles = () => {
      doc.head.querySelectorAll("[data-preview-style]").forEach((node) => node.remove());
      document.head.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => {
        const clone = node.cloneNode(true) as HTMLElement;
        clone.setAttribute("data-preview-style", "");
        doc.head.appendChild(clone);
      });
    };
    syncStyles();
    // Keep Vite's development styles in sync after a hot update.
    const observer = new MutationObserver(syncStyles);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [root]);

  useEffect(() => {
    if (!root) return;
    root.ownerDocument.body.className = `font-catalog ${dark ? "bg-brand-950 text-white" : "bg-white text-brand-950"}`;
  }, [root, dark]);

  return (
    <div className="overflow-hidden bg-slate-100 p-2 sm:p-4">
      <iframe ref={frame} title={`${title} live preview`} srcDoc={frameHtml} sandbox="allow-same-origin" onLoad={() => setRoot(frame.current?.contentDocument?.getElementById("preview-root") ?? null)} className="mx-auto block h-[540px] max-w-full rounded-xl border border-slate-200 bg-white" style={{ width: mobile ? 360 : "100%" }} />
      {root && createPortal(children, root)}
    </div>
  );
}

function ComponentCard({ item }: { item: CatalogItem }) {
  const id = useId();
  const [dark, setDark] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const Component = item.Component;

  async function copySource() {
    try {
      await navigator.clipboard.writeText(item.source);
      setCopyStatus("Copied");
    } catch {
      setCopyStatus("Copy unavailable. Select the source below and copy it manually.");
    }
  }

  return (
    <article id={item.id} aria-labelledby={`${id}-title`} className={`min-w-0 scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white ${expanded ? "xl:col-span-2" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-3">
        <span className="text-xs font-medium text-slate-500">{item.category} <span aria-hidden="true" className="mx-1 text-slate-300">/</span> React + Tailwind</span>
        <div className="flex flex-wrap gap-1">
          <button type="button" aria-pressed={mobile} onClick={() => setMobile(!mobile)} className={`rounded-lg px-3 py-2 text-xs ${mobile ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"} ${focus}`}>360px</button>
          <button type="button" aria-pressed={dark} onClick={() => setDark(!dark)} className={`rounded-lg px-3 py-2 text-xs ${dark ? "bg-brand-950 text-white" : "text-slate-600 hover:bg-slate-50"} ${focus}`}>Dark</button>
          <button type="button" aria-pressed={expanded} onClick={() => setExpanded(!expanded)} className={`hidden rounded-lg px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 xl:block ${focus}`}>{expanded ? "Compact ↙" : "Expand ↗"}</button>
        </div>
      </div>
      <PreviewFrame title={item.title} dark={dark} mobile={mobile}><Component /></PreviewFrame>
      <div className="p-5 sm:p-6">
        <h2 id={`${id}-title`} className="font-display text-xl font-semibold tracking-tight text-brand-950">{item.title}</h2>
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{item.description}</p>
        <p className="mt-4 border-l-2 border-brand-200 pl-3 text-xs leading-5 text-slate-500">{item.note}</p>
        <details className="group mt-5 border-t border-slate-100 pt-4" onToggle={() => setCopyStatus("")}>
          <summary className={`cursor-pointer rounded-lg py-2 text-sm font-medium text-brand-700 ${focus}`}>View code <span className="ml-2 text-xs font-normal text-slate-500">Complete .tsx source</span></summary>
          <div className="mt-4 min-w-0 overflow-hidden rounded-xl bg-slate-950 text-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3"><span className="break-all font-mono text-xs">{item.title.replaceAll(" ", "-")}.tsx</span><button type="button" onClick={copySource} className={`rounded-lg bg-white/10 px-3 py-2 text-xs hover:bg-white/20 ${focus}`}>{copyStatus === "Copied" ? "Copied ✓" : "Copy source"}</button></div>
            <pre tabIndex={0} aria-label={`${item.title} source code`} className={`max-h-96 overflow-auto p-4 text-xs leading-6 ${focus}`}><code>{item.source}</code></pre>
          </div>
          <p role="status" className="mt-2 min-h-5 text-xs text-slate-600">{copyStatus}</p>
        </details>
      </div>
    </article>
  );
}

export default function Components() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const category = params.get("category") ?? "All";
  const filtered = componentCatalog.filter((item) => (category === "All" || category === item.category) && `${item.title} ${item.category} ${item.description}`.toLowerCase().includes(query.trim().toLowerCase()));
  const planned = componentCategories.filter((name) => !componentCatalog.some((item) => item.category === name));

  function updateFilter(key: string, value: string) {
    setParams((previous) => {
      const next = new URLSearchParams(previous);
      if (value && value !== "All") next.set(key, value);
      else next.delete(key);
      return next;
    }, { replace: true, preventScrollReset: true });
  }

  return (
    <div className="font-catalog">
      <header className="relative overflow-hidden bg-brand-950 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-6 h-72 w-72 rotate-12 rounded-[64px] border border-brand-400/20 shadow-[0_0_0_32px_rgba(129,140,248,0.04),0_0_0_64px_rgba(129,140,248,0.03)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-brand-200"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />6 sections you can try right here</div>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">A considered start.<br />A finish that’s yours.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-brand-200">Designs and effects you can open, test, and take into your own code.</p>
          <p className="mt-4 max-w-lg text-sm leading-6 text-brand-300">Real React sections. Live controls. The same source in your clipboard as the preview on your screen.</p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section aria-label="Component filters" className="mb-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="w-full max-w-md"><label htmlFor="component-search" className="mb-2 block text-sm font-medium text-brand-950">Find your next section</label><input id="component-search" type="search" placeholder="Search heroes, pricing, navigation…" value={query} onChange={(event) => updateFilter("q", event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2" /></div>
            <p role="status" className="pb-3 text-sm text-slate-500">{filtered.length} of {componentCatalog.length} components</p>
          </div>
          <div role="group" aria-label="Filter by category" className="mt-5 flex flex-wrap gap-2">{["All", ...componentCategories].map((name) => {
            const count = name === "All" ? componentCatalog.length : componentCatalog.filter((item) => item.category === name).length;
            return <button type="button" key={name} aria-pressed={category === name} onClick={() => updateFilter("category", name)} className={`rounded-full border px-3 py-2 text-xs font-medium ${focus} ${category === name ? "border-brand-950 bg-brand-950 text-white" : "border-slate-200 text-slate-600 hover:border-brand-300 hover:bg-brand-50"}`}>{name}<span className={`ml-2 ${category === name ? "text-brand-200" : "text-slate-400"}`}>{count || "Soon"}</span></button>;
          })}</div>
        </section>

        <details className="mb-8 rounded-xl border border-brand-100 bg-brand-50 px-5 py-4 text-brand-950"><summary className={`cursor-pointer rounded text-sm font-medium ${focus}`}>Before you copy · setup and dependencies</summary><div className="mt-4 space-y-3 text-sm leading-6 text-brand-900"><p>Each source file is a standalone React component using Tailwind CSS 3. No additional packages are needed. Copy into your project and import its default export.</p><p>Use the brand palette from this project’s <code>tailwind.config.js</code>, with <code>font-display</code> set to Syne and <code>font-sans</code> set to DM Sans. Fonts fall back to your system fonts if unavailable.</p><p>Sections inherit the surrounding text color. Wrap them in <code>bg-white text-brand-950</code> or <code>bg-brand-950 text-white</code>. Switch the preview to Dark or 360px to inspect both.</p><p>Business names, pricing, mockups, and testimonials are illustrative. Connect your own content, routes, and services before publishing.</p></div></details>

        {filtered.length ? <div className="grid items-start gap-7 xl:grid-cols-2">{filtered.map((item) => <ComponentCard key={item.id} item={item} />)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center"><h2 className="font-display text-2xl font-semibold text-brand-950">{planned.some((name) => name === category) ? `${category} are on the way.` : "No sections match yet."}</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">{planned.some((name) => name === category) ? "This category is planned. The six available sections have working previews and complete source." : "Try a shorter search or browse all six available components."}</p><button type="button" onClick={() => setParams((previous) => { const next = new URLSearchParams(previous); next.delete("q"); next.delete("category"); return next; }, { replace: true, preventScrollReset: true })} className={`mt-6 rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white hover:bg-brand-700 ${focus}`}>Show all components</button></div>}

        <aside className="mt-12 flex flex-wrap items-start justify-between gap-5 border-t border-slate-200 py-8"><div><h2 className="font-display text-xl font-semibold text-brand-950">Six to start. More with a purpose.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">Next up: floating navigation, search heroes, content cards, and forms. New sections will appear here when their preview and source are ready.</p></div><span className="rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-500">16 more curated picks planned</span></aside>
      </div>
    </div>
  );
}
```

## src/data/components.ts

```ts
import StickyGlassNavbar from "../components/catalog/StickyGlassNavbar";
import SplitHero from "../components/catalog/SplitHero";
import BentoFeatures from "../components/catalog/BentoFeatures";
import TwoPlanPricing from "../components/catalog/TwoPlanPricing";
import TestimonialCarousel from "../components/catalog/TestimonialCarousel";
import FaqAccordion from "../components/catalog/FaqAccordion";
import navbarSource from "../components/catalog/StickyGlassNavbar.tsx?raw";
import heroSource from "../components/catalog/SplitHero.tsx?raw";
import featuresSource from "../components/catalog/BentoFeatures.tsx?raw";
import pricingSource from "../components/catalog/TwoPlanPricing.tsx?raw";
import testimonialSource from "../components/catalog/TestimonialCarousel.tsx?raw";
import faqSource from "../components/catalog/FaqAccordion.tsx?raw";

export const componentCategories = ["Heroes", "Navbars", "Cards", "Features", "Pricing", "Testimonials", "Forms", "Footers", "CTAs", "Utilities"] as const;

// Source imports keep the copied implementation identical to the live preview.
export const componentCatalog = [
  { id: "sticky-glass-navbar", category: "Navbars", title: "Sticky glass navbar", description: "A quiet studio header that turns solid as you scroll. Includes a mobile menu and anchor navigation.", note: "Scroll inside the dark studio panel. The contained scroll surface can wrap your own page content.", Component: StickyGlassNavbar, source: navbarSource },
  { id: "split-hero", category: "Heroes", title: "Split hero", description: "A clear promise, two useful actions, and a product mockup built entirely with HTML and CSS.", note: "The workspace and product copy are illustrative. Both links lead to sections inside this preview.", Component: SplitHero, source: heroSource },
  { id: "bento-features", category: "Features", title: "Bento feature grid", description: "Mixed proportions, a deliberate reading order, and a small workspace switch you can actually try.", note: "Switch between Focus and Together. The layout becomes a single column on small screens.", Component: BentoFeatures, source: featuresSource },
  { id: "two-plan-pricing", category: "Pricing", title: "Two-plan pricing", description: "Quarterly and yearly billing with transparent totals, a 20% annual saving, and room for real features.", note: "Prices are illustrative. Checkout is intentionally disabled until you connect your payment service.", Component: TwoPlanPricing, source: pricingSource },
  { id: "testimonial-carousel", category: "Testimonials", title: "Testimonial carousel", description: "One generous quote at a time, with manual controls and a soft fade when motion is allowed.", note: "Names and quotes are samples. There is no autoplay, so readers set the pace.", Component: TestimonialCarousel, source: testimonialSource },
  { id: "faq-accordion", category: "Utilities", title: "FAQ accordion", description: "A simple question-and-answer section with one open answer, native buttons, and clear focus states.", note: "Open a question with Enter or Space. Answers open instantly to avoid unnecessary motion.", Component: FaqAccordion, source: faqSource },
] as const;
```

## src/components/catalog/StickyGlassNavbar.tsx

```tsx
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
```

## src/components/catalog/SplitHero.tsx

```tsx
import { useId } from "react";

export default function SplitHero() {
  const id = useId();
  const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";
  return (
    <section aria-labelledby={`${id}-title`} className="grid items-center gap-10 px-6 py-12 text-inherit md:grid-cols-2 md:px-10">
      <div>
        <p className="mb-5 text-sm opacity-70">A little less noise. A lot more progress.</p>
        <h2 id={`${id}-title`} className="font-display text-4xl font-semibold leading-[1.08] tracking-tight lg:text-5xl">Make space<br />for your best work.</h2>
        <p className="mt-5 max-w-sm text-sm leading-7 opacity-70">A shared place for your team’s ideas, decisions, and next steps. Keep the work moving without another meeting.</p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a href={`#${id}-workspace`} className={`rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white hover:bg-brand-700 ${focus}`}>Explore the workspace ↗</a>
          <a href={`#${id}-details`} className={`rounded-lg py-2 text-sm underline underline-offset-4 ${focus}`}>How it works</a>
        </div>
        <p id={`${id}-details`} className="mt-5 text-xs opacity-60">Illustrative product. No signup required to explore.</p>
      </div>
      <div id={`${id}-workspace`} className="scroll-mt-5 rounded-3xl bg-brand-100 p-5 sm:p-7">
        <div className="overflow-hidden rounded-xl border border-white bg-white text-slate-900 shadow-xl shadow-brand-950/10">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 text-xs"><span className="font-semibold">Workspace / Launch</span><span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">On track</span></div>
          <div className="p-5"><p className="text-xs text-slate-500">Monday, a fresh start</p><h3 className="mt-2 font-display text-2xl font-semibold">Good things ahead.</h3>
            <div className="my-5 flex h-20 items-end gap-2 rounded-lg bg-brand-50 px-4 pt-4" aria-label="Illustrative progress chart">{[40, 60, 45, 80, 65, 95, 100].map((height, i) => <div key={i} className={`flex-1 rounded-t ${i === 6 ? "bg-brand-600" : "bg-brand-200"}`} style={{ height: `${height}%` }} />)}</div>
            {["Shape the direction", "Build the first version", "Share it with the team"].map((task, i) => <div key={task} className="flex items-center gap-3 border-t border-slate-100 py-3 text-xs"><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${i === 0 ? "bg-brand-600 text-white" : "border border-slate-300 text-slate-500"}`}>{i === 0 ? "✓" : i + 1}</span>{task}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## src/components/catalog/BentoFeatures.tsx

```tsx
import { useId, useState } from "react";

export default function BentoFeatures() {
  const id = useId();
  const [mode, setMode] = useState("Focus");
  return (
    <section aria-labelledby={`${id}-title`} className="px-6 py-10 text-inherit">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3"><h2 id={`${id}-title`} className="max-w-xs font-display text-3xl font-semibold tracking-tight">Less friction.<br />More room to create.</h2><p className="max-w-[220px] text-sm leading-6 opacity-70">Thoughtful details that keep your day moving.</p></div>
      <div className="grid gap-3 md:grid-cols-3">
        <article className="rounded-2xl bg-brand-100 p-6 text-brand-950 md:col-span-2">
          <div className="mb-8 inline-flex rounded-full bg-white/80 p-1" role="group" aria-label="Workspace mode">{["Focus", "Together"].map((value) => <button type="button" key={value} aria-pressed={mode === value} onClick={() => setMode(value)} className={`rounded-full px-4 py-2 text-xs font-medium transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${mode === value ? "bg-brand-950 text-white" : "text-brand-950 hover:bg-brand-200"}`}>{value}</button>)}</div>
          <div className="min-h-[104px]" aria-live="polite"><h3 className="font-display text-2xl font-semibold">{mode === "Focus" ? "Find your flow." : "Make room for everyone."}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-brand-900">{mode === "Focus" ? "Quiet the distractions. Keep one clear priority in front of you." : "Bring feedback, decisions, and the next step into one shared space."}</p></div>
        </article>
        <article className="flex flex-col justify-between rounded-2xl bg-brand-950 p-6 text-white"><span aria-hidden="true" className="mb-8 text-4xl text-brand-300">↗</span><div><h3 className="font-display text-xl font-semibold">Yours to shape.</h3><p className="mt-3 text-sm leading-6 text-brand-200">Start with a clear structure. Make every detail your own.</p></div></article>
        <article className="rounded-2xl border border-slate-300/40 p-6 md:col-span-3"><div className="flex flex-wrap items-center justify-between gap-5"><div><h3 className="font-display text-xl font-semibold">Built for the handoff.</h3><p className="mt-2 text-sm opacity-70">Readable React. Familiar Tailwind. No hidden runtime.</p></div><div aria-label="React and Tailwind" className="flex gap-2"><span className="rounded-xl bg-sky-100 px-4 py-3 text-sm text-sky-900">React</span><span className="rounded-xl bg-brand-100 px-4 py-3 text-sm text-brand-950">Tailwind</span></div></div></article>
      </div>
    </section>
  );
}
```

## src/components/catalog/TwoPlanPricing.tsx

```tsx
import { useId, useState } from "react";

export default function TwoPlanPricing() {
  const id = useId();
  const [yearly, setYearly] = useState(false);
  return (
    <section aria-labelledby={`${id}-title`} className="px-6 py-10 text-inherit">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5"><div><h2 id={`${id}-title`} className="font-display text-3xl font-semibold">Good work starts here.</h2><p className="mt-3 text-sm opacity-70">Illustrative pricing. Pick the rhythm that suits you.</p></div>
        <div className="inline-flex flex-wrap rounded-full border border-slate-300/50 p-1" role="group" aria-label="Billing period">{[false, true].map((value) => <button type="button" key={String(value)} aria-pressed={yearly === value} onClick={() => setYearly(value)} className={`rounded-full px-4 py-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${yearly === value ? "bg-brand-600 text-white" : "hover:bg-brand-100 hover:text-brand-950"}`}>{value ? "Yearly · save 20%" : "Quarterly"}</button>)}</div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[{ name: "Essentials", quarterly: 45, yearly: 144, text: "For a thoughtful first launch.", features: ["Core section library", "React + Tailwind source", "Personal projects"] }, { name: "Studio", quarterly: 90, yearly: 288, text: "For everything you’re building next.", features: ["Every section and layout", "React + Tailwind source", "Commercial projects", "Future library additions"] }].map((plan, i) => <article key={plan.name} className={`relative flex flex-col rounded-2xl border p-6 ${i ? "border-brand-500 bg-brand-950 text-white" : "border-slate-300/50"}`}>
          <div className="mb-5 min-h-6">{i === 1 && <span className="rounded-full bg-brand-200 px-3 py-1 text-xs font-medium text-brand-950">Most complete</span>}</div>
          <h3 className="font-display text-xl font-semibold">{plan.name}</h3><p className="mt-2 min-h-10 text-sm opacity-70">{plan.text}</p>
          <p className="my-5" aria-live="polite"><span className="font-display text-4xl font-semibold">${yearly ? plan.yearly : plan.quarterly}</span><span className="ml-1 text-sm opacity-70">/{yearly ? "year" : "quarter"}</span></p>
          <ul className="mb-7 flex-1 space-y-3 text-sm">{plan.features.map((feature) => <li key={feature} className="flex gap-3"><span aria-hidden="true" className={i ? "text-brand-300" : "text-brand-600"}>✓</span>{feature}</li>)}</ul>
          <button type="button" disabled className="w-full cursor-not-allowed rounded-xl border border-slate-300/60 px-4 py-3 text-sm opacity-60">Checkout coming soon</button>
        </article>)}
      </div>
    </section>
  );
}
```

## src/components/catalog/TestimonialCarousel.tsx

```tsx
import { useId, useState } from "react";

const quotes = [
  { quote: "We spent less time arranging pixels and more time making the product feel like us.", name: "Alex Morgan", role: "Designer, Fieldwork", initials: "AM" },
  { quote: "Readable code made the handoff feel like a conversation, rather than a guessing game.", name: "Sam Rivera", role: "Frontend engineer, Common", initials: "SR" },
  { quote: "A considered starting point gave our small team room to do something a little different.", name: "Jamie Chen", role: "Founder, Outline", initials: "JC" },
];

export default function TestimonialCarousel() {
  const id = useId();
  const [active, setActive] = useState(0);
  const current = quotes[active];
  const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";
  return (
    <section aria-label="Illustrative customer testimonials" aria-roledescription="carousel" className="px-6 py-10 text-inherit md:px-12">
      <div className="flex items-center justify-between gap-4 border-b border-slate-300/40 pb-5"><h2 className="font-display text-xl font-semibold">Good words. Good people.</h2><span className="text-xs opacity-60">Sample stories</span></div>
      <div id={`${id}-slide`} aria-live="polite" aria-atomic="true" className="min-h-[340px] py-7 sm:min-h-[290px]">
        <div key={active} className="motion-safe:animate-[catalog-quote_250ms_ease-out]" role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${quotes.length}`}>
          <span aria-hidden="true" className="font-display text-6xl leading-none text-brand-400">“</span>
          <blockquote className="max-w-2xl font-display text-2xl font-medium leading-snug sm:text-3xl"><p>{current.quote}</p></blockquote>
          <div className="mt-7 flex items-center gap-3"><span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-950">{current.initials}</span><div><p className="text-sm font-semibold">{current.name}</p><p className="mt-1 text-xs opacity-65">{current.role}</p></div></div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-slate-300/40 pt-5">
        <div className="flex gap-1" aria-label="Choose a testimonial">{quotes.map((quote, i) => <button type="button" key={quote.name} onClick={() => setActive(i)} aria-label={`Show testimonial ${i + 1}`} aria-current={active === i ? "true" : undefined} className={`flex h-11 w-8 items-center justify-center rounded-lg ${focus}`}><span className={`h-1.5 rounded-full ${active === i ? "w-6 bg-brand-500" : "w-2 bg-slate-400"}`} /></button>)}</div>
        <div className="flex gap-2">{[-1, 1].map((step) => <button type="button" key={step} aria-label={step < 0 ? "Previous testimonial" : "Next testimonial"} aria-controls={`${id}-slide`} onClick={() => setActive((value) => (value + step + quotes.length) % quotes.length)} className={`h-11 w-11 rounded-full border border-slate-300/60 hover:bg-brand-100 hover:text-brand-950 ${focus}`}>{step < 0 ? "←" : "→"}</button>)}</div>
      </div>
      <style>{"@keyframes catalog-quote { from { opacity: 0; } to { opacity: 1; } }"}</style>
    </section>
  );
}
```

## src/components/catalog/FaqAccordion.tsx

```tsx
import { useId, useState } from "react";

const questions = [
  { question: "What do I need to use these sections?", answer: "React and Tailwind CSS, with the brand color palette and font configuration shown in the catalog. No animation library is required." },
  { question: "Can I change the layout and colors?", answer: "Yes. The source is yours to edit. Replace the copy, update the Tailwind classes, and connect the links to your own pages." },
  { question: "Are these connected to a backend?", answer: "No. These are frontend sections. Checkout and form submission need your own service before they can accept real transactions or messages." },
  { question: "What about keyboard access and reduced motion?", answer: "Every control uses native buttons or links, visible focus styles, and descriptive labels. Optional animation respects your device’s reduced motion preference." },
];

export default function FaqAccordion() {
  const id = useId();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby={`${id}-title`} className="px-6 py-10 text-inherit md:px-10">
      <p className="mb-3 text-sm opacity-60">A few useful answers</p>
      <h2 id={`${id}-title`} className="mb-8 font-display text-3xl font-semibold tracking-tight">Before you build.</h2>
      <div className="border-t border-slate-300/50">{questions.map((item, i) => <div key={item.question} className="border-b border-slate-300/50">
        <h3><button type="button" id={`${id}-trigger-${i}`} aria-expanded={open === i} aria-controls={`${id}-panel-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-5 rounded-lg py-5 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"><span>{item.question}</span><span aria-hidden="true" className="text-xl text-brand-400">{open === i ? "−" : "+"}</span></button></h3>
        <div id={`${id}-panel-${i}`} role="region" aria-labelledby={`${id}-trigger-${i}`} hidden={open !== i}><p className="max-w-xl pb-6 pr-6 text-sm leading-7 opacity-70">{item.answer}</p></div>
      </div>)}</div>
    </section>
  );
}
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Live design previews – no chrome */}
        <Route path="/preview/:slug" element={<Preview />} />

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

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        catalog: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <title>uifoundry</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

