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
