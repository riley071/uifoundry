export function CtaDarkBand() {
  return (
    <section className="bg-brand-950 px-6 py-16 text-center text-white sm:px-10">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Start with a section that is already built</h2>
      <a href="#start" className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-brand-950 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950">Browse library</a>
    </section>
  );
}

export function CtaSplit() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-card lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold text-brand-950">Ready when you are</h2>
          <p className="mt-3 text-sm text-slate-600">Split CTA: copy left, action stack right.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href="#start" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white hover:bg-brand-700">Start free</a>
          <a href="#demo" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50">Book a walkthrough</a>
        </div>
      </div>
    </section>
  );
}

export function CtaFloatingCard() {
  return (
    <section className="bg-slate-100 px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card-hover">
        <h2 className="font-display text-xl font-semibold text-brand-950">One step left</h2>
        <p className="mt-2 text-sm text-slate-500">Elevated card over a soft surface.</p>
        <a href="#go" className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white hover:bg-brand-700">Continue</a>
      </div>
    </section>
  );
}

export function CtaAnnouncementBar() {
  return (
    <div className="flex items-center justify-center gap-3 bg-brand-900 px-4 py-2.5 text-center text-xs text-brand-100">
      <span>New motion packs are in the lab</span>
      <a href="#packs" className="font-semibold underline-offset-2 hover:underline">View</a>
      <button type="button" className="ml-2 text-brand-300 hover:text-white" aria-label="Dismiss">✕</button>
    </div>
  );
}

export function CtaNewsletterInline() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-6 py-10">
      <form className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
        <label className="sr-only" htmlFor="cta-email">Email</label>
        <input id="cta-email" type="email" placeholder="you@studio.com" className="min-h-11 flex-1 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
        <button type="submit" disabled className="min-h-11 cursor-not-allowed rounded-xl bg-slate-300 px-5 text-sm text-slate-500">Coming soon</button>
      </form>
    </section>
  );
}

export function CtaDualChoice() {
  return (
    <section className="px-6 py-16 text-center sm:px-10">
      <h2 className="font-display text-2xl font-semibold text-brand-950">Choose how you start</h2>
      <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
        <a href="#free" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-brand-600 text-sm font-semibold text-white hover:bg-brand-700">Start free</a>
        <a href="#talk" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50">Talk to us</a>
      </div>
    </section>
  );
}

export function CtaSoftUrgency() {
  return (
    <section className="px-6 py-12 text-center">
      <p className="text-sm text-slate-500">Next walkthrough cohort opens soon</p>
      <a href="#join" className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white hover:bg-brand-700">Join the list</a>
    </section>
  );
}

export function CtaWithIllustration() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-3xl bg-brand-50 px-8 py-12 lg:flex-row">
        <div className="flex-1">
          <h2 className="font-display text-2xl font-semibold text-brand-950">Soft orb, hard CTA</h2>
          <p className="mt-3 text-sm text-slate-600">Illustration stays abstract so it never fights the message.</p>
          <a href="#go" className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white">Get started</a>
        </div>
        <div className="h-40 w-40 shrink-0 rounded-full bg-gradient-to-br from-brand-400/40 to-violet-400/40 blur-[2px]" aria-hidden />
      </div>
    </section>
  );
}

export function CtaStickyBottom() {
  return (
    <div className="border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <p className="text-sm font-medium text-brand-950">Ready to try a section?</p>
        <a href="#start" className="shrink-0 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">Open library</a>
      </div>
    </div>
  );
}
