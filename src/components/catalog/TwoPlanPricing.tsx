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
