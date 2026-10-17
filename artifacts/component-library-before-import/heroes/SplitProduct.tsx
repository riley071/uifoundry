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
