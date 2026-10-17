/**
 * AutoParts Pro — "AXLE"
 * Parts commerce: sharp dark UI, electric blue accent, dense but clean catalog.
 */
const parts = [
  { sku: "BR-4402", name: "Ceramic brake pad set", fit: "BMW 3 Series F30", price: "89", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80" },
  { sku: "OF-1190", name: "Oil filter housing", fit: "VW Golf Mk7", price: "34", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80" },
  { sku: "SP-2201", name: "Spark plug set ×4", fit: "Toyota Corolla", price: "28", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80" },
  { sku: "AL-881", name: "LED headlamp assembly", fit: "Ford Focus Mk3", price: "156", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80" },
];

const AutoPartsPro = () => (
  <div className="min-h-screen bg-[#0c0e12] text-slate-100 antialiased">
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0c0e12]/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <a href="#" className="text-sm font-bold tracking-wide text-sky-400">AXLE</a>
        <div className="hidden flex-1 md:block">
          <label className="sr-only" htmlFor="axle-q">Search parts</label>
          <input id="axle-q" type="search" placeholder="Search by part, VIN, or model…" className="w-full max-w-md rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-white/30 focus:border-sky-500/50 focus:outline-none" />
        </div>
        <nav className="ml-auto flex items-center gap-4 text-[13px] text-white/50">
          <a href="#catalog" className="hover:text-white">Catalog</a>
          <a href="#garage" className="hover:text-white">My garage</a>
          <a href="#cart" className="rounded-lg bg-sky-500 px-3 py-1.5 font-medium text-[#0c0e12]">Cart · 0</a>
        </nav>
      </div>
    </header>

    <section className="border-b border-white/5 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">Fitment-first parts</p>
        <h1 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
          The right part.
          <span className="text-white/40"> First try.</span>
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/45">
          VIN and plate lookup, OEM cross-references, and stock you can actually trust. Built for workshops and serious DIY.
        </p>
        <form className="mt-8 flex max-w-lg flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Enter VIN or registration" className="min-h-11 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm focus:border-sky-500/50 focus:outline-none" aria-label="VIN" />
          <button type="submit" className="min-h-11 rounded-lg bg-sky-500 px-5 text-sm font-semibold text-[#0c0e12]">Find parts</button>
        </form>
      </div>
    </section>

    <section id="catalog" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-xl font-semibold">Moving fast this week</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {parts.map((p) => (
            <article key={p.sku} className="overflow-hidden rounded-xl border border-white/8 bg-white/[0.03]">
              <div className="aspect-[16/10] bg-white/5">
                <img src={p.img} alt="" className="h-full w-full object-cover opacity-90" />
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] text-white/30">{p.sku}</p>
                <h3 className="mt-1 text-sm font-medium">{p.name}</h3>
                <p className="mt-1 text-xs text-white/40">{p.fit}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-sky-400">${p.price}</span>
                  <button type="button" className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-white/70 hover:border-sky-500/40 hover:text-sky-300">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-white/5 bg-white/[0.02] px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        {[
          { t: "Fitment data", d: "Cross-checked against OEM catalogues and real workshop returns." },
          { t: "Same-day dispatch", d: "Orders before 14:00 leave the same day from our central hub." },
          { t: "Trade accounts", d: "Net terms and bulk pricing for registered workshops." },
        ].map((x) => (
          <div key={x.t}>
            <h3 className="text-sm font-semibold text-sky-400">{x.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/45">{x.d}</p>
          </div>
        ))}
      </div>
    </section>

    <footer className="border-t border-white/5 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl justify-between text-xs text-white/30">
        <span className="font-semibold text-sky-400/80">AXLE</span>
        <span>© 2026 · Sample for UIFoundry</span>
      </div>
    </footer>
  </div>
);

export default AutoPartsPro;
