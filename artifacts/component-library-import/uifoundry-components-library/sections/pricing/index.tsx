import { useState } from "react";

export function PricingTwoPlanToggle() {
  const [yearly, setYearly] = useState(true);
  const pro = yearly ? 15 : 19;
  const plus = yearly ? 29 : 39;
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-bold text-brand-950">Two plans. Every moment covered.</h2>
        <div className="mt-6 flex items-center justify-center gap-3 text-sm">
          <span className={!yearly ? "font-medium text-brand-950" : "text-slate-400"}>Quarterly</span>
          <button type="button" role="switch" aria-checked={yearly} onClick={() => setYearly((v) => !v)} className={`relative h-7 w-12 rounded-full transition-colors ${yearly ? "bg-brand-600" : "bg-slate-300"}`}>
            <span className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${yearly ? "translate-x-5" : ""}`} />
          </button>
          <span className={yearly ? "font-medium text-brand-950" : "text-slate-400"}>Yearly</span>
          {yearly && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">Save 20%</span>}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-card">
            <h3 className="font-display text-lg font-semibold text-brand-950">Pro</h3>
            <p className="mt-4"><span className="text-4xl font-bold text-brand-950">${pro}</span><span className="text-slate-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>✓ Every section</li>
              <li>✓ Commercial use</li>
              <li>✓ Code you own</li>
            </ul>
            <button type="button" disabled className="mt-8 w-full cursor-not-allowed rounded-xl border border-slate-200 py-2.5 text-sm text-slate-400">Start Pro — coming soon</button>
          </div>
          <div className="relative rounded-2xl border-2 border-brand-600 bg-white p-6 text-left shadow-card">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-0.5 text-xs font-semibold text-white">Most complete</span>
            <h3 className="font-display text-lg font-semibold text-brand-950">Pro+</h3>
            <p className="mt-4"><span className="text-4xl font-bold text-brand-950">${plus}</span><span className="text-slate-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>✓ Everything in Pro</li>
              <li>✓ Full template catalogue</li>
              <li>✓ Priority drops</li>
            </ul>
            <button type="button" disabled className="mt-8 w-full cursor-not-allowed rounded-xl bg-brand-600/80 py-2.5 text-sm text-white">Get Pro+ — coming soon</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingThreeTier() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {[
          { name: "Free", price: "$0", features: ["Browse all", "Free samples", "Personal use"], cta: "Get started", popular: false },
          { name: "Pro", price: "$19", features: ["Everything in Free", "All premium", "Commercial"], cta: "Start Pro", popular: true },
          { name: "Team", price: "$49", features: ["Everything in Pro", "5 seats", "Shared collections"], cta: "Contact", popular: false },
        ].map((p) => (
          <div key={p.name} className={`rounded-2xl border bg-white p-6 shadow-card ${p.popular ? "border-brand-600 ring-2 ring-brand-600" : "border-slate-200"}`}>
            {p.popular && <span className="text-xs font-semibold text-brand-600">Popular</span>}
            <h3 className="mt-1 font-display text-lg font-semibold text-brand-950">{p.name}</h3>
            <p className="mt-3 text-3xl font-bold text-brand-950">{p.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {p.features.map((f) => <li key={f}>✓ {f}</li>)}
            </ul>
            <button type="button" disabled className="mt-6 w-full cursor-not-allowed rounded-xl border border-slate-200 py-2 text-sm text-slate-400">{p.cta} — soon</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PricingComparisonTable() {
  const rows = [
    ["Live previews", true, true, true],
    ["Commercial license", false, true, true],
    ["Team seats", false, false, true],
    ["Priority drops", false, false, true],
  ] as const;
  return (
    <section className="overflow-x-auto px-4 py-16">
      <table className="mx-auto w-full min-w-[32rem] max-w-4xl border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="py-3 pr-4 font-medium text-slate-500">Feature</th>
            <th className="py-3 px-4 font-display font-semibold text-brand-950">Free</th>
            <th className="py-3 px-4 font-display font-semibold text-brand-950">Pro</th>
            <th className="py-3 px-4 font-display font-semibold text-brand-950">Team</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, a, b, c]) => (
            <tr key={label} className="border-b border-slate-100">
              <td className="py-3 pr-4 text-slate-600 sticky left-0 bg-white">{label}</td>
              {[a, b, c].map((ok, i) => (
                <td key={i} className="px-4 py-3 text-center">{ok ? <span className="text-brand-600">✓</span> : <span className="text-slate-300">—</span>}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function PricingSingleFeatured() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row">
        <div className="flex-1 rounded-2xl border-2 border-brand-600 bg-white p-8 shadow-card">
          <h3 className="font-display text-xl font-semibold text-brand-950">Pro</h3>
          <p className="mt-2 text-sm text-slate-500">Everything you need to ship polished interfaces</p>
          <p className="mt-6 text-4xl font-bold text-brand-950">$19<span className="text-base font-normal text-slate-500">/mo</span></p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>✓ Full library</li>
            <li>✓ Commercial use</li>
            <li>✓ Cancel anytime</li>
          </ul>
          <button type="button" disabled className="mt-8 w-full cursor-not-allowed rounded-xl bg-brand-600/80 py-2.5 text-sm text-white">Coming soon</button>
        </div>
        <div className="flex w-full flex-col justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 sm:w-48">
          <p className="text-sm font-medium text-brand-950">Need Team?</p>
          <p className="mt-2 text-xs text-slate-500">Seats, shared collections, admin tools.</p>
          <button type="button" disabled className="mt-4 cursor-not-allowed text-sm text-slate-400">Contact — soon</button>
        </div>
      </div>
    </section>
  );
}

export function PricingUsageSlider() {
  const [seats, setSeats] = useState(3);
  const price = 12 + seats * 7;
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
        <h3 className="font-display text-lg font-semibold text-brand-950">Team usage</h3>
        <p className="mt-1 text-sm text-slate-500">Illustrative pricing by seat count</p>
        <label className="mt-8 block">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-slate-600">Seats</span>
            <span className="font-mono text-brand-600">{seats}</span>
          </div>
          <input type="range" min={1} max={10} value={seats} onChange={(e) => setSeats(Number(e.target.value))} className="w-full accent-brand-600" aria-label="Number of seats" />
        </label>
        <p className="mt-6 text-3xl font-bold text-brand-950">${price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
        <button type="button" disabled className="mt-6 w-full cursor-not-allowed rounded-xl border border-slate-200 py-2.5 text-sm text-slate-400">Checkout soon</button>
      </div>
    </section>
  );
}

export function PricingDarkPremium() {
  return (
    <section className="bg-brand-950 px-6 py-16 text-white sm:px-10">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {["Studio", "Agency"].map((name, i) => (
          <div key={name} className={`rounded-2xl border p-6 ${i === 1 ? "border-brand-400 bg-white/5" : "border-white/10"}`}>
            <h3 className="font-display text-lg font-semibold">{name}</h3>
            <p className="mt-4 text-3xl font-bold">${i === 0 ? 29 : 79}<span className="text-sm font-normal text-brand-300">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-brand-200">
              <li>✓ Full source</li>
              <li>✓ Commercial license</li>
              {i === 1 && <li>✓ Priority support</li>}
            </ul>
            <button type="button" disabled className="mt-8 w-full cursor-not-allowed rounded-xl bg-white/20 py-2.5 text-sm">Coming soon</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PricingChecklistHeavy() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
        <h3 className="font-display text-xl font-semibold text-brand-950">Pro checklist</h3>
        <ul className="mt-6 space-y-3 text-sm text-slate-700">
          {["All heroes and footers", "Pricing + comparison tables", "Motion demos", "Design tokens panels", "Commercial use", "Cancel anytime", "Keep every file you copy"].map((f) => (
            <li key={f} className="flex gap-2"><span className="text-brand-600">✓</span> {f}</li>
          ))}
        </ul>
        <p className="mt-8 text-3xl font-bold text-brand-950">$19<span className="text-sm font-normal text-slate-500">/mo</span></p>
        <button type="button" disabled className="mt-4 w-full cursor-not-allowed rounded-xl bg-slate-200 py-2.5 text-sm text-slate-500">Coming soon</button>
      </div>
    </section>
  );
}

export function PricingAnnualOnly() {
  return (
    <section className="px-6 py-16 text-center sm:px-10">
      <h2 className="font-display text-2xl font-bold text-brand-950">Simple yearly pricing</h2>
      <p className="mt-2 text-sm text-slate-500">Billed once per year. Cancel anytime.</p>
      <div className="mx-auto mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
        {[
          { n: "Pro", p: "$180", d: "Full library" },
          { n: "Pro+", p: "$348", d: "Library + templates" },
        ].map((x) => (
          <div key={x.n} className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-card">
            <h3 className="font-display font-semibold text-brand-950">{x.n}</h3>
            <p className="mt-3 text-3xl font-bold text-brand-950">{x.p}<span className="text-sm font-normal text-slate-500">/yr</span></p>
            <p className="mt-2 text-sm text-slate-500">{x.d}</p>
            <button type="button" disabled className="mt-6 w-full cursor-not-allowed rounded-xl border border-slate-200 py-2 text-sm text-slate-400">Soon</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PricingWithGuarantees() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <h3 className="font-display font-semibold text-brand-950">Pro</h3>
            <p className="mt-3 text-3xl font-bold">$19<span className="text-sm font-normal text-slate-500">/mo</span></p>
            <button type="button" disabled className="mt-6 w-full cursor-not-allowed rounded-xl bg-brand-600/70 py-2 text-sm text-white">Coming soon</button>
          </div>
          <div className="rounded-2xl border border-brand-600 bg-white p-6 shadow-card ring-2 ring-brand-600">
            <h3 className="font-display font-semibold text-brand-950">Pro+</h3>
            <p className="mt-3 text-3xl font-bold">$39<span className="text-sm font-normal text-slate-500">/mo</span></p>
            <button type="button" disabled className="mt-6 w-full cursor-not-allowed rounded-xl bg-brand-600/70 py-2 text-sm text-white">Coming soon</button>
          </div>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <li className="flex items-center gap-2"><span className="text-brand-600">✓</span> Cancel anytime</li>
          <li className="flex items-center gap-2"><span className="text-brand-600">✓</span> You keep the code</li>
          <li className="flex items-center gap-2"><span className="text-brand-600">✓</span> Free tier, no card</li>
        </ul>
      </div>
    </section>
  );
}
