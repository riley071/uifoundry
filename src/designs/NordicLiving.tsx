/**
 * Nordic Living — "FJORD"
 * Scandinavian furniture: soft stone palette, generous whitespace, material-led product cards.
 */
const pieces = [
  { name: "Oak lounge chair", price: "1,240", material: "White oak · linen", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80" },
  { name: "Clay table lamp", price: "320", material: "Stoneware · brass", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80" },
  { name: "Wool throw", price: "180", material: "Undyed merino", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80" },
  { name: "Low sideboard", price: "2,100", material: "Ash · smoked glass", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" },
];

const NordicLiving = () => (
  <div className="min-h-screen bg-[#faf9f7] text-[#2c2a26] antialiased">
    <header className="border-b border-[#2c2a26]/6">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="text-[15px] font-medium tracking-wide">Fjord</a>
        <nav className="hidden gap-8 text-[13px] text-[#2c2a26]/55 md:flex" aria-label="Primary">
          <a href="#collection" className="hover:text-[#2c2a26]">Collection</a>
          <a href="#materials" className="hover:text-[#2c2a26]">Materials</a>
          <a href="#about" className="hover:text-[#2c2a26]">About</a>
        </nav>
        <a href="#shop" className="text-[13px] font-medium underline-offset-4 hover:underline">Shop</a>
      </div>
    </header>

    <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 lg:pt-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#2c2a26]/40">Spring collection</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
        Furniture that stays quiet in the room
      </h1>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-[#2c2a26]/55">
        Solid timber, honest joins, and textiles that improve with use. Made in small runs for homes that prefer less noise.
      </p>
    </section>

    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="relative aspect-[21/9] overflow-hidden rounded-sm sm:aspect-[2.4/1]">
        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=85" alt="" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <p className="mt-3 text-xs text-[#2c2a26]/40">Oslo loft · morning light</p>
    </section>

    <section id="collection" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-medium tracking-tight">In the room now</h2>
        <a href="#all" className="text-sm text-[#2c2a26]/45 underline-offset-4 hover:underline">View all</a>
      </div>
      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {pieces.map((p) => (
          <article key={p.name}>
            <div className="aspect-[4/5] overflow-hidden bg-[#eceae4]">
              <img src={p.img} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
            </div>
            <h3 className="mt-4 text-sm font-medium">{p.name}</h3>
            <p className="mt-1 text-xs text-[#2c2a26]/45">{p.material}</p>
            <p className="mt-2 text-sm">€{p.price}</p>
          </article>
        ))}
      </div>
    </section>

    <section id="materials" className="border-y border-[#2c2a26]/6 bg-[#f0eeea] px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-medium tracking-tight">Materials you can name</h2>
          <p className="mt-5 text-sm leading-relaxed text-[#2c2a26]/55">
            We list species, finishes, and mills. No mystery composites. If a piece ages, it should look like it earned it.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-[#2c2a26]/70">
            {["European white oak & ash", "Natural oil and soap finishes", "Undyed wool and linen"].map((m) => (
              <li key={m} className="flex gap-3"><span className="mt-2 h-1 w-1 rounded-full bg-[#2c2a26]/40" />{m}</li>
            ))}
          </ul>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[#e4e1d9]">
          <img src="https://images.unsplash.com/photo-1615876234886-fd9acba539ee?w=900&q=80" alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
      <h2 className="text-2xl font-medium tracking-tight">Visit the studio</h2>
      <p className="mx-auto mt-3 max-w-sm text-sm text-[#2c2a26]/50">Copenhagen showroom open Thursday–Saturday. Appointments preferred.</p>
      <a href="#visit" className="mt-8 inline-flex border border-[#2c2a26]/20 px-5 py-2.5 text-sm font-medium transition hover:border-[#2c2a26]/40">Book a visit</a>
    </section>

    <footer className="border-t border-[#2c2a26]/6 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl justify-between text-xs text-[#2c2a26]/40">
        <span>Fjord</span>
        <span>© 2026 · Sample for UIFoundry</span>
      </div>
    </footer>
  </div>
);

export default NordicLiving;
