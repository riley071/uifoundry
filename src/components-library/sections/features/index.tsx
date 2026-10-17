export function FeatureBentoGrid() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:col-span-2 lg:row-span-2">
          <p className="text-xs font-medium text-brand-600">Core</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-brand-950">Bento that prioritises the story</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">Large card for the primary message; smaller cards for supporting points.</p>
        </div>
        {["Tokens", "Previews", "Motion", "Source"].map((t) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="mb-3 h-8 w-8 rounded-lg bg-brand-100" />
            <h3 className="font-semibold text-brand-950">{t}</h3>
            <p className="mt-1 text-xs text-slate-500">Short supporting line</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeatureIconGrid() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-3">
        {["Accessible", "Responsive", "Tokens", "Copy-ready", "Dark-ready", "Honest states"].map((t) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-card">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 text-sm font-bold">{t[0]}</div>
            <h3 className="text-sm font-semibold text-brand-950">{t}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeatureAlternatingRows() {
  return (
    <section className="space-y-16 px-6 py-16 sm:px-10">
      {[0, 1].map((i) => (
        <div key={i} className={`mx-auto flex max-w-5xl flex-col items-center gap-10 ${i === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          <div className="aspect-[16/10] w-full flex-1 rounded-2xl bg-gradient-to-br from-brand-100 to-violet-100 shadow-card" />
          <div className="flex-1">
            <h3 className="font-display text-2xl font-semibold text-brand-950">{i === 0 ? "Image leads the eye" : "Then the story continues"}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Alternating rows keep long feature pages readable without identical card stacks.</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export function FeatureNumberedSteps() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <ol className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {["Discover", "Preview", "Implement"].map((s, i) => (
          <li key={s} className="relative">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white font-display text-sm font-bold text-brand-600">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 font-semibold text-brand-950">{s}</h3>
            <p className="mt-2 text-sm text-slate-500">One clear action per step.</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function FeatureQuotePlus() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        <blockquote className="font-display text-2xl font-semibold leading-snug text-brand-950">
          “We stopped rebuilding the same hero every sprint.”
        </blockquote>
        <ul className="space-y-4 text-sm text-slate-600">
          <li className="flex gap-2"><span className="text-brand-600">✓</span> Live device previews</li>
          <li className="flex gap-2"><span className="text-brand-600">✓</span> Tokens beside the layout</li>
          <li className="flex gap-2"><span className="text-brand-600">✓</span> Source you keep</li>
        </ul>
      </div>
    </section>
  );
}

export function FeatureTabsPanel() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-wrap gap-2">
          {["Scroll", "Cursor", "Text"].map((t, i) => (
            <span key={t} className={`rounded-full px-4 py-1.5 text-sm font-medium ${i === 0 ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"}`}>{t}</span>
          ))}
        </div>
        <div className="mt-6 aspect-[21/9] rounded-2xl border border-slate-200 bg-slate-50 shadow-card flex items-center justify-center text-sm text-slate-400">
          Panel swaps with tab — wire real state in production
        </div>
      </div>
    </section>
  );
}

export function FeatureTimeline() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-lg border-l-2 border-brand-100 pl-8">
        {["Brief", "Preview", "Tune", "Ship"].map((s) => (
          <div key={s} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full bg-brand-600" />
            <h3 className="font-semibold text-brand-950">{s}</h3>
            <p className="mt-1 text-sm text-slate-500">Short milestone description.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeatureComparisonColumns() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-display font-semibold text-slate-500">Without a system</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li>— Inconsistent spacing</li>
            <li>— One-off heroes</li>
            <li>— Motion as decoration</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-brand-200 bg-white p-6 shadow-card">
          <h3 className="font-display font-semibold text-brand-950">With UIFoundry</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>✓ Shared tokens</li>
            <li>✓ Live previews</li>
            <li>✓ Motion with restraint</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FeatureLogoPlus() {
  return (
    <section className="px-6 py-16 text-center sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8 opacity-50">
        {["North", "Lumen", "Orbit", "Peak", "Field"].map((n) => (
          <span key={n} className="font-display text-sm font-semibold text-slate-600">{n}</span>
        ))}
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
        {["Faster starts", "Clearer reviews", "Owned source"].map((t) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <h3 className="font-semibold text-brand-950">{t}</h3>
            <p className="mt-2 text-xs text-slate-500">One-line benefit</p>
          </div>
        ))}
      </div>
    </section>
  );
}
