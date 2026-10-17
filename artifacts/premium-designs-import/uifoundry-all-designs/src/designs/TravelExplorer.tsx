/**
 * Travel Explorer — "ATLAS"
 * Editorial travel: large type, muted earth palette, journal-style cards.
 */
const destinations = [
  { name: "Kyoto", region: "Japan", days: "5–8 days", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80", tone: "Temples & quiet streets" },
  { name: "Lisbon", region: "Portugal", days: "4–6 days", img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80", tone: "Light, tiles, Atlantic air" },
  { name: "Marrakech", region: "Morocco", days: "5–7 days", img: "https://images.unsplash.com/photo-1597212618440-901abd755294?w=900&q=80", tone: "Souks after dark" },
  { name: "Reykjavík", region: "Iceland", days: "6–9 days", img: "https://images.unsplash.com/photo-1531168556467-80aace4741c2?w=900&q=80", tone: "Lava, steam, long light" },
];

const TravelExplorer = () => (
  <div className="min-h-screen bg-[#f6f3ee] text-[#1c1917] antialiased">
    <header className="sticky top-0 z-50 border-b border-[#1c1917]/8 bg-[#f6f3ee]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="text-sm font-semibold tracking-[0.2em]">ATLAS</a>
        <nav className="hidden gap-8 text-[13px] text-[#1c1917]/55 md:flex" aria-label="Primary">
          <a href="#routes" className="hover:text-[#1c1917]">Routes</a>
          <a href="#journal" className="hover:text-[#1c1917]">Journal</a>
          <a href="#guides" className="hover:text-[#1c1917]">Guides</a>
        </nav>
        <a href="#plan" className="rounded-full bg-[#1c1917] px-4 py-2 text-[13px] font-medium text-[#f6f3ee]">Plan a trip</a>
      </div>
    </header>

    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pt-24">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#1c1917]/45">Independent routes</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Go where the
            <br />
            map gets quiet
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#1c1917]/60">
            Hand-built itineraries for people who prefer side streets, long tables, and one good museum over a checklist.
          </p>
          <form id="plan" className="mt-10 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="atlas-where">Where</label>
            <input id="atlas-where" type="text" placeholder="City or region" className="min-h-12 flex-1 rounded-full border border-[#1c1917]/15 bg-white px-5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c1917]/30" />
            <button type="submit" className="min-h-12 rounded-full bg-[#1c1917] px-6 text-sm font-medium text-[#f6f3ee]">Explore</button>
          </form>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/6]">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&q=85" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917]/50 to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 text-sm text-white/90">Amalfi coast road · late September</p>
        </div>
      </div>
    </section>

    <section id="routes" className="border-t border-[#1c1917]/8 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#1c1917]/45">Routes</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Four places worth the jet lag</h2>
          </div>
          <a href="#all" className="hidden text-sm text-[#1c1917]/50 underline-offset-4 hover:underline sm:inline">View all</a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {destinations.map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(28,25,23,0.06)]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={d.img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{d.name}</h3>
                  <span className="text-xs text-[#1c1917]/40">{d.days}</span>
                </div>
                <p className="mt-1 text-sm text-[#1c1917]/45">{d.region}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#1c1917]/65">{d.tone}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="journal" className="bg-[#1c1917] px-5 py-20 text-[#f6f3ee] sm:px-8">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#f6f3ee]/40">Journal</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Notes from the road, not the brochure</h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#f6f3ee]/50">
            Short dispatches on trains that run late, markets that open early, and the one restaurant with no English menu that was worth the confusion.
          </p>
          <a href="#guides" className="mt-8 inline-flex text-sm font-medium text-[#f6f3ee] underline-offset-4 hover:underline">Read the latest</a>
        </div>
        <div className="space-y-4">
          {["How to spend 48 hours in Porto without a list", "Night trains that are still worth taking", "Packing for shoulder season"].map((t, i) => (
            <a key={t} href={`#j${i}`} className="block border-b border-white/10 pb-4 text-sm text-[#f6f3ee]/70 transition hover:text-[#f6f3ee]">
              <span className="mr-3 font-mono text-xs text-[#f6f3ee]/30">0{i + 1}</span>
              {t}
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="px-5 py-20 text-center sm:px-8">
      <h2 className="mx-auto max-w-lg text-3xl font-semibold tracking-tight">Tell us a city. We&apos;ll send a route.</h2>
      <p className="mx-auto mt-4 max-w-sm text-sm text-[#1c1917]/50">No spam. One thoughtful itinerary outline within two days.</p>
      <a href="#plan" className="mt-8 inline-flex rounded-full bg-[#1c1917] px-6 py-3 text-sm font-medium text-[#f6f3ee]">Start planning</a>
    </section>

    <footer className="border-t border-[#1c1917]/8 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold tracking-[0.2em]">ATLAS</p>
        <p className="text-xs text-[#1c1917]/40">© 2026 Atlas Routes · Sample for UIFoundry</p>
      </div>
    </footer>
  </div>
);

export default TravelExplorer;
