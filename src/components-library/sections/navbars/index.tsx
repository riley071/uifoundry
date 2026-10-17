import { useState } from "react";

export function NavStickyGlass() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="font-display text-sm font-bold text-brand-950">UIFoundry</a>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex" aria-label="Primary">
          <a href="#explore" className="hover:text-brand-700">Explore</a>
          <a href="#motion" className="hover:text-brand-700">Motion</a>
          <a href="#pricing" className="hover:text-brand-700">Pricing</a>
        </nav>
        <a href="#start" className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">Get started</a>
      </div>
    </header>
  );
}

export function NavFloatingPill() {
  return (
    <div className="px-4 py-6">
      <header className="mx-auto flex h-12 max-w-3xl items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-4 shadow-card backdrop-blur">
        <a href="/" className="font-display text-sm font-bold text-brand-950">UF</a>
        <nav className="hidden gap-5 text-sm text-slate-600 sm:flex" aria-label="Primary">
          <a href="#work" className="hover:text-brand-700">Work</a>
          <a href="#lab" className="hover:text-brand-700">Lab</a>
          <a href="#team" className="hover:text-brand-700">Team</a>
        </nav>
        <a href="#contact" className="rounded-full bg-brand-950 px-3 py-1 text-xs font-medium text-white">Contact</a>
      </header>
    </div>
  );
}

export function NavMegaMenu() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-8 px-4 sm:px-6">
        <a href="/" className="font-display text-sm font-bold text-brand-950">UIFoundry</a>
        <div className="relative hidden md:block">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-sm text-slate-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Product ▾
          </button>
          {open && (
            <div className="absolute left-0 top-full z-50 mt-3 w-[28rem] rounded-2xl border border-slate-200 bg-white p-4 shadow-card-hover">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { t: "Sections", d: "Heroes, pricing, footers" },
                  { t: "Motion Lab", d: "Scroll and cursor demos" },
                  { t: "Tokens", d: "Colour and type specimens" },
                  { t: "Previews", d: "Device-width testing" },
                ].map((c) => (
                  <a key={c.t} href={`#${c.t}`} className="rounded-xl p-3 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                    <p className="text-sm font-semibold text-brand-950">{c.t}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{c.d}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        <a href="#pricing" className="ml-auto text-sm font-medium text-brand-600">Pricing</a>
      </div>
    </header>
  );
}

export function NavMinimalCta() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="font-display text-base font-bold tracking-tight text-brand-950">UIFoundry</a>
        <a href="#start" className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">Get started</a>
      </div>
    </header>
  );
}

export function NavUnderlineActive() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-8 px-4 sm:px-6">
        <a href="/" className="font-display text-sm font-bold text-brand-950">UF</a>
        <nav className="flex gap-6 text-sm" aria-label="Primary">
          <a href="#explore" className="border-b-2 border-brand-600 pb-4 pt-4 font-medium text-brand-950" aria-current="page">Explore</a>
          <a href="#components" className="border-b-2 border-transparent pb-4 pt-4 text-slate-500 hover:text-brand-700">Components</a>
          <a href="#motion" className="border-b-2 border-transparent pb-4 pt-4 text-slate-500 hover:text-brand-700">Motion</a>
        </nav>
      </div>
    </header>
  );
}

export function NavSidebarTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <button type="button" aria-expanded={open} aria-label="Open menu" onClick={() => setOpen((v) => !v)} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <a href="/" className="font-display text-sm font-bold text-brand-950">Docs</a>
        <span className="ml-auto text-xs text-slate-400">Sidebar pattern</span>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-slate-50 px-4 py-4 text-sm text-slate-600">
          <a href="#intro" className="block py-2 hover:text-brand-700">Introduction</a>
          <a href="#install" className="block py-2 hover:text-brand-700">Install</a>
          <a href="#tokens" className="block py-2 hover:text-brand-700">Tokens</a>
        </div>
      )}
    </header>
  );
}

export function NavDarkSolid() {
  return (
    <header className="bg-brand-950 text-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="font-display text-sm font-bold">UIFoundry</a>
        <nav className="hidden gap-6 text-sm text-brand-200 md:flex" aria-label="Primary">
          <a href="#explore" className="hover:text-white">Explore</a>
          <a href="#lab" className="hover:text-white">Lab</a>
        </nav>
        <a href="#start" className="rounded-lg bg-gradient-to-r from-brand-500 to-violet-500 px-3 py-1.5 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Get started</a>
      </div>
    </header>
  );
}

export function NavSearchCentric() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="/" className="shrink-0 font-display text-sm font-bold text-brand-950">UF</a>
        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search</span>
          <input type="search" placeholder="Search sections, tags…" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-3 pr-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500" />
        </label>
        <a href="#account" className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 sm:inline">Account</a>
      </div>
    </header>
  );
}

export function NavTwoTier() {
  return (
    <header>
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-end gap-4 px-4 text-xs text-slate-500 sm:px-6">
          <a href="#login" className="hover:text-brand-700">Sign in</a>
          <span aria-hidden>|</span>
          <a href="#lang" className="hover:text-brand-700">EN</a>
        </div>
      </div>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="font-display text-sm font-bold text-brand-950">UIFoundry</a>
          <nav className="flex gap-5 text-sm text-slate-600" aria-label="Primary">
            <a href="#product" className="hover:text-brand-700">Product</a>
            <a href="#pricing" className="hover:text-brand-700">Pricing</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
