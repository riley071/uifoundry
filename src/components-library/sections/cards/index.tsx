export function CardProduct() {
  return (
    <article className="mx-auto max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <div className="aspect-[16/10] bg-gradient-to-br from-brand-100 to-violet-100" />
      <div className="p-4">
        <p className="text-xs font-medium text-brand-600">Travel</p>
        <h3 className="mt-1 font-semibold text-brand-950">Coastal loft</h3>
        <p className="mt-1 text-sm text-slate-500">From $186 / night</p>
      </div>
    </article>
  );
}

export function CardBlog() {
  return (
    <article className="mx-auto max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="aspect-[16/9] bg-slate-100" />
      <div className="p-4">
        <p className="text-xs text-brand-600">Guide · 6 min</p>
        <h3 className="mt-1 font-semibold text-brand-950">How we structure section source</h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-500">Keep tokens next to the layout so design and code stay aligned.</p>
      </div>
    </article>
  );
}

export function CardPricingMini() {
  return (
    <article className="mx-auto max-w-[220px] rounded-2xl border border-brand-200 bg-white p-5 shadow-card">
      <h3 className="font-display font-semibold text-brand-950">Pro</h3>
      <p className="mt-2 text-2xl font-bold text-brand-950">$19</p>
      <p className="mt-1 text-xs text-slate-500">per month</p>
    </article>
  );
}

export function CardFeatureIcon() {
  return (
    <article className="mx-auto max-w-xs rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 text-sm font-bold">M</div>
      <h3 className="font-semibold text-brand-950">Motion with restraint</h3>
      <p className="mt-2 text-sm text-slate-500">Supports the hierarchy instead of competing with it.</p>
    </article>
  );
}

export function CardTeamMember() {
  return (
    <article className="mx-auto max-w-[200px] rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-card">
      <div className="mx-auto h-16 w-16 rounded-full bg-brand-200" />
      <h3 className="mt-3 text-sm font-semibold text-brand-950">Jordan Lee</h3>
      <p className="text-xs text-slate-500">Design engineer</p>
    </article>
  );
}

export function CardStat() {
  return (
    <article className="mx-auto max-w-[200px] rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <p className="font-display text-3xl font-bold text-brand-950">98%</p>
      <p className="mt-1 text-sm text-slate-500">Ship without redesign</p>
      <p className="mt-2 text-xs text-emerald-600">↑ illustrative</p>
    </article>
  );
}

export function CardEmptyState() {
  return (
    <article className="mx-auto max-w-sm rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-slate-200" />
      <h3 className="font-semibold text-brand-950">No saved sections yet</h3>
      <p className="mt-2 text-sm text-slate-500">Browse the library and pin what you need.</p>
      <a href="#browse" className="mt-4 inline-flex text-sm font-medium text-brand-600 hover:underline">Browse</a>
    </article>
  );
}

export function CardHorizontal() {
  return (
    <article className="mx-auto flex max-w-md gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="w-28 shrink-0 bg-gradient-to-br from-brand-100 to-violet-100 sm:w-36" />
      <div className="py-4 pr-4">
        <p className="text-xs text-brand-600">Resource</p>
        <h3 className="mt-1 font-semibold text-brand-950">Horizontal list card</h3>
        <p className="mt-1 text-sm text-slate-500">Image left, content right.</p>
      </div>
    </article>
  );
}

export function CardTilt() {
  return (
    <article
      className="mx-auto max-w-xs rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-transform duration-200 will-change-transform hover:-translate-y-1 hover:shadow-card-hover"
      onPointerMove={(e) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
      }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = ""; }}
    >
      <h3 className="font-semibold text-brand-950">Tilt on hover</h3>
      <p className="mt-2 text-sm text-slate-500">Disabled under reduced motion.</p>
    </article>
  );
}
