/**
 * Haven Real Estate — "HAVEN"
 * Luxury property: dark charcoal, gold-line restraint, large photography, serious type.
 */
const listings = [
  { title: "Harbour penthouse", place: "Copenhagen", price: "4.2M", beds: "3 bed", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80" },
  { title: "Garden villa", place: "Aarhus", price: "2.8M", beds: "5 bed", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" },
  { title: "City loft", place: "Oslo", price: "1.9M", beds: "2 bed", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80" },
];

const HavenRealEstate = () => (
  <div className="min-h-screen bg-[#141414] text-[#f5f5f4] antialiased">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#141414]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="text-sm font-semibold tracking-[0.22em]">HAVEN</a>
        <nav className="hidden gap-8 text-[13px] text-white/50 md:flex" aria-label="Primary">
          <a href="#listings" className="hover:text-white">Listings</a>
          <a href="#sell" className="hover:text-white">Sell</a>
          <a href="#advisors" className="hover:text-white">Advisors</a>
        </nav>
        <a href="#contact" className="rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-medium transition hover:border-white/40">Enquire</a>
      </div>
    </header>

    <section className="relative min-h-[90svh] pt-16">
      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-[#141414]/30" />
      <div className="relative mx-auto flex min-h-[calc(90svh-4rem)] max-w-6xl flex-col justify-end px-5 pb-16 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c4a574]">Private sales</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Homes held for the few who ask carefully
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
          Off-market and select listed properties across the Nordics. Discretion is the product.
        </p>
        <form className="mt-10 flex max-w-xl flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="City or neighbourhood" className="min-h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-1 focus:ring-[#c4a574]" aria-label="Search" />
          <button type="submit" className="min-h-12 rounded-full bg-[#c4a574] px-6 text-sm font-semibold text-[#141414]">Search</button>
        </form>
      </div>
    </section>

    <section id="listings" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured residences</h2>
          <a href="#all" className="text-sm text-white/40 hover:text-white">View all</a>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {listings.map((l) => (
            <article key={l.title} className="group">
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img src={l.img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{l.title}</h3>
                  <p className="mt-1 text-sm text-white/40">{l.place} · {l.beds}</p>
                </div>
                <p className="text-sm text-[#c4a574]">€{l.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="sell" className="border-t border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#c4a574]">For sellers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">A quieter way to sell</h2>
          <p className="mt-5 text-sm leading-relaxed text-white/50">
            We open selected homes to a private network before any public listing. Fewer viewings. Stronger offers.
          </p>
          <a href="#contact" className="mt-8 inline-flex border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:border-white/40">Speak with an advisor</a>
        </div>
        <div className="aspect-[5/4] overflow-hidden bg-white/5">
          <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <section className="px-5 py-20 text-center sm:px-8">
      <blockquote className="mx-auto max-w-2xl text-2xl font-medium leading-snug tracking-tight text-white/90">
        “They found a buyer before the sign went up. That was the brief.”
      </blockquote>
      <p className="mt-6 text-sm text-white/35">— Seller · Hellerup</p>
    </section>

    <footer className="border-t border-white/5 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm tracking-[0.22em]">HAVEN</p>
        <p className="text-xs text-white/30">© 2026 Haven Private Sales · Sample for UIFoundry</p>
      </div>
    </footer>
  </div>
);

export default HavenRealEstate;
