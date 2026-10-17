/**
 * Layer Poultry — "LAYER"
 * Agricultural services: clean green-white, trust-forward, documentary photography.
 */
const LayerPoultry = () => (
  <div className="min-h-screen bg-white text-stone-900 antialiased">
    <header className="border-b border-stone-200">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="text-sm font-bold tracking-wide text-emerald-800">LAYER</a>
        <nav className="hidden gap-7 text-[13px] text-stone-500 sm:flex" aria-label="Primary">
          <a href="#practice" className="hover:text-stone-900">Practice</a>
          <a href="#welfare" className="hover:text-stone-900">Welfare</a>
          <a href="#contact" className="hover:text-stone-900">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-emerald-800 px-4 py-2 text-[13px] font-medium text-white">Talk to us</a>
      </div>
    </header>

    <section className="mx-auto max-w-5xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">Layer operations</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
        Healthy flocks.
        <br />
        Clear records.
      </h1>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-500">
        Advisory and operational support for commercial layer farms — biosecurity, nutrition programmes, and audit-ready documentation.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="rounded-lg bg-emerald-800 px-5 py-2.5 text-sm font-medium text-white">Request a visit</a>
        <a href="#practice" className="rounded-lg border border-stone-200 px-5 py-2.5 text-sm font-medium text-stone-700">See how we work</a>
      </div>
    </section>

    <section className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="aspect-[2.2/1] overflow-hidden rounded-2xl bg-stone-100">
        <img src="https://images.unsplash.com/photo-1548550023-2bdb3ff3da1d?w=1400&q=85" alt="" className="h-full w-full object-cover" />
      </div>
    </section>

    <section id="practice" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <h2 className="text-2xl font-semibold tracking-tight">What we improve on site</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          { t: "Biosecurity", d: "Practical protocols that staff can follow on a busy day — not a binder that sits on a shelf." },
          { t: "Feed & performance", d: "Ration reviews tied to production data, not generic supplier sheets." },
          { t: "Compliance", d: "Traceability and welfare records structured for the audits you already face." },
        ].map((x) => (
          <div key={x.t} className="rounded-2xl border border-stone-200 p-6">
            <h3 className="font-semibold text-emerald-800">{x.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">{x.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="welfare" className="bg-stone-50 px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Welfare is operational</h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-500">
            Better welfare scores track with lower mortality and more consistent lay. We help farms measure what matters and fix what does not.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-stone-600">
            {["Housing density reviews", "Lighting programme checks", "Handling & transport guidance"].map((i) => (
              <li key={i} className="flex gap-2"><span className="text-emerald-700">✓</span> {i}</li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
          <img src="https://images.unsplash.com/photo-1548550023-2bdb3ff3da1d?w=900&q=80" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <section id="contact" className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
      <h2 className="text-2xl font-semibold">Plan a farm visit</h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-stone-500">Tell us region, flock size, and the pressure you are under. We reply within one business day.</p>
      <a href="mailto:hello@layer.example" className="mt-8 inline-flex rounded-lg bg-emerald-800 px-6 py-2.5 text-sm font-medium text-white">Email the team</a>
    </section>

    <footer className="border-t border-stone-200 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl justify-between text-xs text-stone-400">
        <span className="font-semibold text-emerald-800/70">LAYER</span>
        <span>© 2026 · Sample for UIFoundry</span>
      </div>
    </footer>
  </div>
);

export default LayerPoultry;
