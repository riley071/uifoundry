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
