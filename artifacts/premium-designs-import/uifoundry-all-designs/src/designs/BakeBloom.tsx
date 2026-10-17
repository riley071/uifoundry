/**
 * Bake & Bloom — "BLOOM"
 * Bakery: warm cream paper, terracotta accent, soft product photography, friendly type.
 */
const goods = [
  { name: "Sourdough levain", note: "48h ferment", price: "8", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=80" },
  { name: "Seasonal tart", note: "Changes weekly", price: "6", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=700&q=80" },
  { name: "Butter croissant", note: "Laminated daily", price: "4.5", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=80" },
  { name: "Olive focaccia", note: "Friday only", price: "7", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=80" },
];

const BakeBloom = () => (
  <div className="min-h-screen bg-[#faf6f1] text-[#3d2c29] antialiased">
    <header className="border-b border-[#3d2c29]/8">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="font-serif text-xl tracking-tight">Bloom</a>
        <nav className="hidden gap-7 text-[13px] text-[#3d2c29]/55 sm:flex" aria-label="Primary">
          <a href="#menu" className="hover:text-[#3d2c29]">Menu</a>
          <a href="#hours" className="hover:text-[#3d2c29]">Hours</a>
          <a href="#story" className="hover:text-[#3d2c29]">Story</a>
        </nav>
        <a href="#order" className="rounded-full bg-[#c45c26] px-4 py-2 text-[13px] font-medium text-white">Order ahead</a>
      </div>
    </header>

    <section className="mx-auto max-w-5xl px-5 pb-12 pt-16 text-center sm:px-8 sm:pt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c45c26]">Neighbourhood bakery</p>
      <h1 className="mx-auto mt-4 max-w-xl font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl">
        Bread worth waking up for
      </h1>
      <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#3d2c29]/60">
        Naturally leavened loaves, laminated pastry, and one cake that changes with the market. Open before the city fully starts.
      </p>
    </section>

    <section className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="aspect-[2/1] overflow-hidden rounded-2xl sm:aspect-[2.2/1]">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=85" alt="" className="h-full w-full object-cover" />
      </div>
    </section>

    <section id="menu" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <h2 className="font-serif text-2xl tracking-tight">From the counter</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {goods.map((g) => (
          <article key={g.name}>
            <div className="aspect-square overflow-hidden rounded-xl bg-[#f0e8df]">
              <img src={g.img} alt="" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-sm font-semibold">{g.name}</h3>
            <p className="mt-1 text-xs text-[#3d2c29]/45">{g.note}</p>
            <p className="mt-2 text-sm">€{g.price}</p>
          </article>
        ))}
      </div>
    </section>

    <section id="hours" className="border-y border-[#3d2c29]/8 bg-[#f3ebe3] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl">Hours</h2>
          <dl className="mt-4 space-y-2 text-sm text-[#3d2c29]/70">
            <div className="flex justify-between gap-4"><dt>Tue – Fri</dt><dd>7:00 – 15:00</dd></div>
            <div className="flex justify-between gap-4"><dt>Saturday</dt><dd>8:00 – 14:00</dd></div>
            <div className="flex justify-between gap-4"><dt>Sun – Mon</dt><dd>Closed</dd></div>
          </dl>
        </div>
        <div>
          <h2 className="font-serif text-xl">Find us</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#3d2c29]/70">14 Rue des Fleurs<br />1000 Brussels</p>
          <p className="mt-3 text-sm text-[#3d2c29]/50">Two minutes from the tram. Tables outside when the weather allows.</p>
        </div>
      </div>
    </section>

    <section id="story" className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
      <h2 className="font-serif text-2xl tracking-tight">Baked the slow way on purpose</h2>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#3d2c29]/55">
        We mill part of our flour in-house, prefer butter with a name on the pack, and stop when the day&apos;s bake is sold. That is the whole policy.
      </p>
      <a href="#order" className="mt-8 inline-flex rounded-full bg-[#c45c26] px-6 py-2.5 text-sm font-medium text-white">Order for tomorrow</a>
    </section>

    <footer className="border-t border-[#3d2c29]/8 px-5 py-10 text-center text-xs text-[#3d2c29]/40 sm:px-8">
      Bloom Bakery · Sample for UIFoundry · © 2026
    </footer>
  </div>
);

export default BakeBloom;
