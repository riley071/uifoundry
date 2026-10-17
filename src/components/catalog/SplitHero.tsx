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
