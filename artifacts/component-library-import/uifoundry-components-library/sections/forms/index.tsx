export function FormContactBlock() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <form className="mx-auto max-w-md space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card" onSubmit={(e) => e.preventDefault()}>
        <h2 className="font-display text-lg font-semibold text-brand-950">Contact</h2>
        <label className="block text-sm"><span className="text-slate-600">Name</span><input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" name="name" /></label>
        <label className="block text-sm"><span className="text-slate-600">Email</span><input type="email" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" name="email" /></label>
        <label className="block text-sm"><span className="text-slate-600">Message</span><textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" name="message" /></label>
        <button type="submit" disabled className="w-full cursor-not-allowed rounded-xl bg-slate-300 py-2.5 text-sm text-slate-500">Send — coming soon</button>
      </form>
    </section>
  );
}

export function FormNewsletterCompact() {
  return (
    <form className="mx-auto flex max-w-md gap-2 px-6 py-8" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Email" aria-label="Email" className="min-h-11 flex-1 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
      <button type="submit" disabled className="min-h-11 cursor-not-allowed rounded-xl bg-slate-300 px-4 text-sm text-slate-500">Soon</button>
    </form>
  );
}

export function FormMultiStep() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-sm">
        <div className="mb-6 flex justify-center gap-2" aria-label="Step 1 of 3">
          <span className="h-2 w-8 rounded-full bg-brand-600" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
        </div>
        <label className="block text-sm"><span className="font-medium text-brand-950">Workspace name</span><input className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" /></label>
        <button type="button" className="mt-4 w-full rounded-xl bg-brand-600 py-2.5 text-sm font-medium text-white">Continue</button>
      </div>
    </section>
  );
}

export function FormSearchFilters() {
  return (
    <div className="mx-auto max-w-2xl space-y-3 px-6 py-8">
      <input type="search" placeholder="Search sections…" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" aria-label="Search" />
      <div className="flex flex-wrap gap-2">
        {["Heroes", "Pricing", "Dark"].map((c) => (
          <button key={c} type="button" className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700">{c}</button>
        ))}
      </div>
    </div>
  );
}

export function FormLoginCard() {
  return (
    <form className="mx-auto max-w-sm space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card" onSubmit={(e) => e.preventDefault()}>
      <h2 className="font-display text-lg font-semibold text-brand-950">Sign in</h2>
      <label className="block text-sm"><span className="text-slate-600">Email</span><input type="email" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" /></label>
      <label className="block text-sm"><span className="text-slate-600">Password</span><input type="password" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" /></label>
      <button type="submit" disabled className="w-full cursor-not-allowed rounded-xl bg-slate-300 py-2.5 text-sm text-slate-500">Sign in — soon</button>
      <p className="text-center text-xs text-slate-400">Social buttons omitted · illustrative</p>
    </form>
  );
}

export function FormSignupBenefits() {
  return (
    <section className="px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2">
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex gap-2"><span className="text-brand-600">✓</span> Live previews</li>
          <li className="flex gap-2"><span className="text-brand-600">✓</span> Source you keep</li>
          <li className="flex gap-2"><span className="text-brand-600">✓</span> Free tier</li>
        </ul>
        <form className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-card" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Work email" className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" aria-label="Email" />
          <button type="submit" disabled className="w-full cursor-not-allowed rounded-xl bg-slate-300 py-2.5 text-sm text-slate-500">Create account — soon</button>
        </form>
      </div>
    </section>
  );
}

export function FormFileDropzone() {
  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
        <p className="text-sm font-medium text-slate-600">Drop files here</p>
        <p className="mt-2 text-xs text-slate-400">Upload is not wired — coming soon</p>
      </div>
    </div>
  );
}

export function FormInlineValidation() {
  return (
    <div className="mx-auto max-w-sm space-y-4 px-6 py-10">
      <label className="block text-sm"><span className="text-slate-600">Email</span><input defaultValue="ok@studio.com" className="mt-1 w-full rounded-xl border border-emerald-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" /><span className="mt-1 block text-xs text-emerald-600">Looks good</span></label>
      <label className="block text-sm"><span className="text-slate-600">Email</span><input defaultValue="bad@" className="mt-1 w-full rounded-xl border border-rose-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500" /><span className="mt-1 block text-xs text-rose-600">Enter a valid email</span></label>
    </div>
  );
}

export function FormPreferencesToggles() {
  return (
    <div className="mx-auto max-w-sm space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
      {["Product updates", "Motion drops", "Billing alerts"].map((label, i) => (
        <label key={label} className="flex items-center justify-between gap-4 text-sm text-brand-950">
          {label}
          <span className={`relative h-6 w-11 rounded-full ${i < 2 ? "bg-brand-600" : "bg-slate-200"}`}>
            <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${i < 2 ? "left-5" : "left-0.5"}`} />
          </span>
        </label>
      ))}
    </div>
  );
}
