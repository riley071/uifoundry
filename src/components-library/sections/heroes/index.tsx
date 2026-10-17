/** Nine premier hero sections — pure React + Tailwind, no extra deps */

export function HeroSplitProduct() {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium text-brand-600">Design systems that ship</p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            Open a layout. Test it. Take the code.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
            Every section runs live. Check phone, tablet, and desktop widths, then adapt the source to your brand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="inline-flex min-h-11 items-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              Browse sections
            </a>
            <a href="#docs" className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              View source model
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-400/20 to-violet-500/20 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="ml-2 text-xs text-slate-400">preview.tsx</span>
            </div>
            <div className="space-y-3 p-6">
              <div className="h-3 w-2/3 rounded bg-brand-100" />
              <div className="h-3 w-full rounded bg-slate-100" />
              <div className="h-3 w-5/6 rounded bg-slate-100" />
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-brand-500 to-violet-600" />
                <div className="aspect-[4/3] rounded-xl bg-slate-100" />
                <div className="aspect-[4/3] rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroCenteredType() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center sm:px-10 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[28rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-3xl">
        <p className="mb-5 text-sm font-medium text-brand-600">UIFoundry · Section library</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-6xl sm:leading-[1.05]">
          A considered start.
          <br />
          A finish that&apos;s yours.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-slate-600">
          Premier layouts you can open, resize, and borrow from — without a runtime lock-in.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#start" className="inline-flex min-h-11 items-center rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
            Start free
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 underline-offset-4 hover:text-brand-700 hover:underline">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}

export function HeroSearchFirst() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">
          Find a place worth the trip
        </h1>
        <p className="mt-4 text-slate-600">Search stays of any style, anywhere.</p>
        <form
          className="mt-10 grid gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-card sm:grid-cols-[1.2fr_1fr_1fr_auto]"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="block rounded-xl bg-slate-50 px-4 py-3 text-left">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Location</span>
            <input type="text" placeholder="City or region" className="mt-1 w-full bg-transparent text-sm text-brand-950 placeholder:text-slate-400 focus:outline-none" />
          </label>
          <label className="block rounded-xl bg-slate-50 px-4 py-3 text-left">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Check-in</span>
            <input type="text" placeholder="Add date" className="mt-1 w-full bg-transparent text-sm text-brand-950 placeholder:text-slate-400 focus:outline-none" />
          </label>
          <label className="block rounded-xl bg-slate-50 px-4 py-3 text-left">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Guests</span>
            <input type="text" placeholder="2 adults" className="mt-1 w-full bg-transparent text-sm text-brand-950 placeholder:text-slate-400 focus:outline-none" />
          </label>
          <button type="submit" className="min-h-11 rounded-xl bg-brand-600 px-6 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export function HeroBentoCollage() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">
            Layouts that earn their place
          </h1>
          <p className="mt-5 max-w-sm text-slate-600 leading-7">
            Mix image, type, and interaction without the usual template noise.
          </p>
          <a href="#explore" className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
            Explore bento
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="row-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 p-5 text-white shadow-card transition-transform duration-300 hover:-translate-y-1">
            <p className="text-xs font-medium text-brand-100">Featured</p>
            <p className="mt-8 font-display text-2xl font-semibold leading-tight">Motion that supports the message</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-3 h-16 rounded-xl bg-slate-100" />
            <p className="text-sm font-semibold text-brand-950">Scroll systems</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-3 h-16 rounded-xl bg-slate-100" />
            <p className="text-sm font-semibold text-brand-950">Cursor presence</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroVideoPoster() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/70 to-brand-900/40" aria-hidden />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7c3aed 0%, transparent 40%)" }} aria-hidden />
      <div className="relative flex min-h-[420px] flex-col justify-end px-6 pb-12 pt-24 sm:px-10 lg:px-16">
        <button type="button" className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Play trailer (decorative)">
          <span className="ml-0.5 border-y-[7px] border-l-[12px] border-y-transparent border-l-white" />
        </button>
        <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Scenes that hold attention without the noise
        </h1>
        <p className="mt-4 max-w-md text-brand-200">Poster-first heroes with a calm primary action.</p>
        <a href="#watch" className="mt-8 inline-flex min-h-11 w-fit items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-950 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950">
          Watch the cut
        </a>
      </div>
    </section>
  );
}

export function HeroAnnouncement() {
  return (
    <div>
      <div className="bg-brand-900 px-4 py-2 text-center text-xs text-brand-100">
        New · Motion packs for scroll and cursor —{" "}
        <a href="#packs" className="font-semibold underline-offset-2 hover:underline">
          see what&apos;s included
        </a>
      </div>
      <section className="px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">
              Ship the moment your site is missing
            </h1>
            <p className="mt-5 text-slate-600 leading-7">Announcement bar + split content. Keep the bar short and dismissible in production.</p>
            <a href="#cta" className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              Get the pack
            </a>
          </div>
          <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-brand-50 shadow-card" />
        </div>
      </section>
    </div>
  );
}

export function HeroStatsUnder() {
  return (
    <section className="px-6 py-20 text-center sm:px-10">
      <h1 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl">
        Built for teams who ship interfaces
      </h1>
      <p className="mx-auto mt-5 max-w-md text-slate-600">One clear promise, then proof in numbers.</p>
      <a href="#start" className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
        Start building
      </a>
      <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
        {[
          { v: "120+", l: "Sections" },
          { v: "9", l: "Categories" },
          { v: "0", l: "Runtime lock-in" },
          { v: "100%", l: "Source you keep" },
        ].map((s) => (
          <div key={s.l}>
            <dt className="font-display text-3xl font-bold text-brand-950">{s.v}</dt>
            <dd className="mt-1 text-sm text-slate-500">{s.l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function HeroDarkImmersive() {
  return (
    <section className="relative overflow-hidden bg-brand-950 px-6 py-24 text-white sm:px-10 lg:py-32">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl sm:leading-[1.05]">
          Dark by default.
          <br />
          Clear by design.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-brand-200 leading-7">
          Full-bleed indigo with soft orbs — for product launches and motion showcases.
        </p>
        <a href="#enter" className="mt-10 inline-flex min-h-11 items-center rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-brand-950 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950">
          Enter the lab
        </a>
      </div>
    </section>
  );
}

export function HeroAsymmetricEditorial() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-brand-600">Editorial</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-brand-950 sm:text-7xl">
          Type that
          <span className="text-brand-500"> breaks </span>
          the grid on purpose
        </h1>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_280px]">
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            Oversized display type, restrained supporting copy, and a single vertical media column. Use when the brand voice is the product.
          </p>
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-brand-200 to-violet-200 shadow-card" />
        </div>
      </div>
    </section>
  );
}
