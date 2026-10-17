export function FooterFourColumn() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-14 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-sm font-bold text-brand-950">UIFoundry</p>
          <p className="mt-3 text-sm leading-6 text-slate-500">Designs you can open, test, and take into your code.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#explore" className="hover:text-brand-700">Explore</a></li>
            <li><a href="#components" className="hover:text-brand-700">Components</a></li>
            <li><a href="#motion" className="hover:text-brand-700">Motion Lab</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Resources</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><span className="text-slate-400">Docs · soon</span></li>
            <li><span className="text-slate-400">Blog · soon</span></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Newsletter</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@studio.com" className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" aria-label="Email" />
            <button type="submit" className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white">Join</button>
          </form>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-slate-400">© 2026 UIFoundry. Free tier available — no card required.</p>
    </footer>
  );
}

export function FooterCenteredMinimal() {
  return (
    <footer className="border-t border-slate-200 px-6 py-12 text-center">
      <p className="font-display text-sm font-bold text-brand-950">UIFoundry</p>
      <nav className="mt-4 flex flex-wrap justify-center gap-5 text-sm text-slate-500" aria-label="Footer">
        <a href="#explore" className="hover:text-brand-700">Explore</a>
        <a href="#pricing" className="hover:text-brand-700">Pricing</a>
        <a href="#privacy" className="hover:text-brand-700">Privacy</a>
      </nav>
      <p className="mt-6 text-xs text-slate-400">© 2026 UIFoundry</p>
    </footer>
  );
}

export function FooterCtaLinks() {
  return (
    <footer>
      <div className="bg-brand-950 px-6 py-14 text-center text-white sm:px-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Start with a section that is already built</h2>
        <a href="#start" className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-950 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Browse library</a>
      </div>
      <div className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 text-sm text-slate-500">
          <a href="#explore" className="hover:text-brand-700">Explore</a>
          <a href="#components" className="hover:text-brand-700">Components</a>
          <a href="#motion" className="hover:text-brand-700">Motion</a>
          <a href="#pricing" className="hover:text-brand-700">Pricing</a>
        </div>
      </div>
    </footer>
  );
}

export function FooterNewsletterHeavy() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-xl font-semibold text-brand-950">New sections in your inbox</h2>
        <p className="mt-2 text-sm text-slate-500">Illustrative signup — not live yet.</p>
        <form className="mt-6 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input type="email" required placeholder="Email" className="min-h-11 flex-1 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" aria-label="Email" />
          <button type="submit" disabled className="min-h-11 rounded-xl bg-slate-300 px-5 text-sm font-medium text-slate-500 cursor-not-allowed">Coming soon</button>
        </form>
      </div>
      <nav className="mx-auto mt-10 flex max-w-md justify-center gap-6 text-sm text-slate-500" aria-label="Footer">
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
      </nav>
    </footer>
  );
}

export function FooterSocialStrip() {
  return (
    <footer className="border-t border-slate-200 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-slate-400">© 2026 UIFoundry</p>
        <div className="flex gap-4 text-sm text-slate-500">
          <a href="#x" className="hover:text-brand-700">X</a>
          <a href="#gh" className="hover:text-brand-700">GitHub</a>
          <a href="#discord" className="hover:text-brand-700">Discord</a>
        </div>
        <div className="flex gap-4 text-xs text-slate-400">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export function FooterSitemapDense() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-sm sm:grid-cols-3 lg:grid-cols-5">
        {["Product", "Motion", "Company", "Legal", "Support"].map((col) => (
          <div key={col}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{col}</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href={`#${col}-1`} className="hover:text-brand-700">Overview</a></li>
              <li><a href={`#${col}-2`} className="hover:text-brand-700">Details</a></li>
              <li><a href={`#${col}-3`} className="hover:text-brand-700">More</a></li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

export function FooterBrandStory() {
  return (
    <footer className="bg-brand-950 px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">UIFoundry</p>
        <p className="mt-6 text-base leading-7 text-brand-200">
          We publish layouts and motion you can inspect, tune, and keep. No runtime dependency on us.
        </p>
        <nav className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-brand-300" aria-label="Footer">
          <a href="#explore" className="hover:text-white">Explore</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#privacy" className="hover:text-white">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

export function FooterAppDownload() {
  return (
    <footer className="border-t border-slate-200 px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-bold text-brand-950">Get the app</p>
          <p className="mt-1 text-sm text-slate-500">Store badges are illustrative.</p>
          <div className="mt-4 flex gap-3">
            <span className="rounded-lg bg-slate-900 px-4 py-2 text-xs text-white">App Store</span>
            <span className="rounded-lg bg-slate-900 px-4 py-2 text-xs text-white">Google Play</span>
          </div>
        </div>
        <div className="h-24 w-24 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-center text-[10px] leading-[6rem] text-slate-400">QR</div>
      </div>
    </footer>
  );
}

export function FooterLegalFirst() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
          <a href="#privacy" className="hover:text-brand-700">Privacy Policy</a>
          <a href="#terms" className="hover:text-brand-700">Terms of Service</a>
          <a href="#cookies" className="hover:text-brand-700">Cookies</a>
        </div>
        <p className="text-xs text-slate-400">Free tier · no card required · © 2026</p>
      </div>
    </footer>
  );
}
