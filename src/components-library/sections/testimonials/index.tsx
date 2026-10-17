export function TestimonialLargeQuote() {
  return (
    <section className="px-6 py-20 text-center sm:px-10">
      <blockquote className="mx-auto max-w-2xl font-display text-2xl font-semibold leading-snug text-brand-950 sm:text-3xl">
        “We open a section, test it at phone width, and ship a variant the same afternoon.”
      </blockquote>
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-12 w-12 rounded-full bg-brand-200" />
        <p className="text-sm font-semibold text-brand-950">Amara Chen</p>
        <p className="text-xs text-slate-500">Design lead · Northline</p>
      </div>
    </section>
  );
}

export function TestimonialCarousel() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {["Saved two sprints on the marketing rebuild.", "Tokens matched our brand in an hour.", "Motion demos without the usual jank."].map((q, i) => (
          <figure key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <blockquote className="text-sm leading-6 text-slate-700">“{q}”</blockquote>
            <figcaption className="mt-4 text-xs text-slate-400">Customer · illustrative</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2" aria-hidden>
        <span className="h-1.5 w-6 rounded-full bg-brand-600" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
      </div>
    </section>
  );
}

export function TestimonialAvatarStack() {
  return (
    <section className="px-6 py-12 text-center">
      <div className="flex justify-center -space-x-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="inline-block h-10 w-10 rounded-full border-2 border-white bg-brand-200" style={{ zIndex: 5 - i }} />
        ))}
      </div>
      <p className="mt-4 text-sm font-medium text-brand-950">4.9 average from design teams</p>
      <p className="mt-1 text-xs text-amber-500" aria-label="5 stars">★★★★★</p>
    </section>
  );
}

export function TestimonialLogoMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-100 py-10">
      <div className="flex animate-[marquee_28s_linear_infinite] gap-12 whitespace-nowrap px-6 text-sm font-semibold text-slate-400 motion-reduce:animate-none">
        {["Northline", "Lumen", "Orbit Labs", "Peak Studio", "Fieldwork", "Northline", "Lumen", "Orbit Labs"].map((n, i) => (
          <span key={i}>{n}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

export function TestimonialVideoPlaceholder() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-2xl bg-brand-950 shadow-card">
        <div className="absolute inset-0 flex items-center justify-center">
          <button type="button" className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="Play (decorative)">
            <span className="ml-1 border-y-[8px] border-l-[14px] border-y-transparent border-l-white" />
          </button>
        </div>
        <p className="absolute bottom-6 left-6 right-6 text-sm text-white/90">“The catalog became our shared language with engineering.”</p>
      </div>
    </section>
  );
}

export function TestimonialGridSix() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <figure key={i} className="rounded-xl border border-slate-200 bg-white p-4">
            <blockquote className="text-xs leading-5 text-slate-600">Short praise that stays specific.</blockquote>
            <figcaption className="mt-3 text-[10px] text-slate-400">Name · Role</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function TestimonialBeforeAfter() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <figure className="rounded-2xl bg-slate-100 p-6">
          <p className="text-xs font-semibold uppercase text-slate-400">Before</p>
          <blockquote className="mt-3 text-sm text-slate-600">“Every landing page was a one-off Figma export.”</blockquote>
        </figure>
        <figure className="rounded-2xl border border-brand-200 bg-white p-6 shadow-card">
          <p className="text-xs font-semibold uppercase text-brand-600">After</p>
          <blockquote className="mt-3 text-sm text-slate-700">“We start from live sections and only invent what is unique.”</blockquote>
        </figure>
      </div>
    </section>
  );
}

export function TestimonialWall() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto columns-1 gap-4 sm:columns-2 lg:columns-3 max-w-5xl">
        {["Clean tokens.", "Honest placeholders.", "Resizes cleanly.", "Copy that is plain.", "Dark heroes work.", "Focus states visible."].map((t) => (
          <p key={t} className="mb-4 break-inside-avoid rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-card">“{t}”</p>
        ))}
      </div>
    </section>
  );
}

export function TestimonialMetricQuote() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-start">
        <p className="font-display text-6xl font-bold text-brand-600">2×</p>
        <blockquote className="text-lg leading-8 text-slate-700">
          Faster from brief to merged PR when the team shares the same section library.
          <footer className="mt-4 text-sm text-slate-400">— Illustrative metric</footer>
        </blockquote>
      </div>
    </section>
  );
}
