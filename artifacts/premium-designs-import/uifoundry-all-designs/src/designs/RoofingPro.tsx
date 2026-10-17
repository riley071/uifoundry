/**
 * Roofing Pro — "RIDGE"
 * Trade services: solid navy, safety orange accent, project proof, clear CTAs.
 */
const projects = [
  { title: "Slate re-roof · Victorian terrace", place: "Edinburgh", img: "https://images.unsplash.com/photo-1632759145351-1d592919fbb1?w=800&q=80" },
  { title: "Flat roof system · commercial unit", place: "Leeds", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
  { title: "Leadwork & chimneys", place: "York", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80" },
];

const RoofingPro = () => (
  <div className="min-h-screen bg-[#0f172a] text-slate-100 antialiased">
    <header className="border-b border-white/5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="text-sm font-bold tracking-wide">
          RIDGE<span className="text-orange-400">.</span>
        </a>
        <nav className="hidden gap-7 text-[13px] text-white/50 md:flex" aria-label="Primary">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#guarantee" className="hover:text-white">Guarantee</a>
        </nav>
        <a href="#quote" className="rounded-lg bg-orange-500 px-4 py-2 text-[13px] font-semibold text-[#0f172a]">Get a quote</a>
      </div>
    </header>

    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1632759145351-1d592919fbb1?w=1600&q=85" alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-[#0f172a]/50" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-400">Domestic & commercial</p>
        <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          Roofs that hold in real weather
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
          Surveyed properly, specified honestly, installed by teams who show up. From emergency repairs to full re-roofs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#quote" className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-[#0f172a]">Request a survey</a>
          <a href="#work" className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-white/30">See recent work</a>
        </div>
      </div>
    </section>

    <section className="border-y border-white/5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
        {[
          ["18+", "Years trading"],
          ["2,400+", "Projects completed"],
          ["10 yr", "Workmanship cover"],
          ["4.9", "Average review"],
        ].map(([v, l]) => (
          <div key={l}>
            <p className="text-2xl font-semibold text-orange-400">{v}</p>
            <p className="mt-1 text-xs text-white/40">{l}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="services" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Full re-roofs", "Flat roof systems", "Leadwork & flashings", "Emergency response"].map((s) => (
            <div key={s} className="rounded-xl border border-white/8 bg-white/[0.03] px-5 py-6">
              <p className="font-medium">{s}</p>
              <p className="mt-2 text-xs text-white/40">Survey, quote, programme</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="work" className="border-t border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight">Recent projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-xl border border-white/8">
              <div className="aspect-[16/10] bg-white/5">
                <img src={p.img} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium">{p.title}</h3>
                <p className="mt-1 text-xs text-white/40">{p.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="guarantee" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Written guarantee. Named contacts.</h2>
        <p className="mt-4 text-sm leading-relaxed text-white/50">
          Every job gets a workmanship warranty, manufacturer paperwork where relevant, and a direct number — not a call centre queue.
        </p>
        <a href="#quote" className="mt-8 inline-flex rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-[#0f172a]">Get a quote</a>
      </div>
    </section>

    <footer className="border-t border-white/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl justify-between text-xs text-white/30">
        <span>RIDGE.</span>
        <span>© 2026 · Sample for UIFoundry</span>
      </div>
    </footer>
  </div>
);

export default RoofingPro;
