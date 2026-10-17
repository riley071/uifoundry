export function UtilSpinner() {
  return (
    <div className="flex justify-center py-16" role="status" aria-label="Loading">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
    </div>
  );
}

export function UtilSkeleton() {
  return (
    <div className="mx-auto max-w-xs space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="aspect-[16/10] animate-pulse rounded-xl bg-slate-100" />
      <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100" />
      <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
    </div>
  );
}

export function UtilProgress() {
  return (
    <div className="mx-auto max-w-sm space-y-4 px-6 py-10">
      <div>
        <p className="mb-1 text-xs text-slate-500">Determinate</p>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-2/3 rounded-full bg-brand-600" /></div>
      </div>
      <div>
        <p className="mb-1 text-xs text-slate-500">Indeterminate</p>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-1/3 animate-pulse rounded-full bg-brand-400" /></div>
      </div>
    </div>
  );
}

export function UtilToast() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-3 px-6 py-10">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">Saved to collection</div>
      <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800" role="alert">Could not copy — try again</div>
    </div>
  );
}

export function UtilEmpty() {
  return (
    <div className="px-6 py-16 text-center">
      <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-slate-100" />
      <h3 className="font-semibold text-brand-950">Nothing here yet</h3>
      <p className="mt-2 text-sm text-slate-500">Clear filters or browse all categories.</p>
    </div>
  );
}

export function UtilModalShell() {
  return (
    <div className="px-6 py-12">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-card-hover" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h2 id="modal-title" className="font-display text-lg font-semibold text-brand-950">Dialog shell</h2>
        <p className="mt-2 text-sm text-slate-600">Focus trap and escape handling belong in production wiring.</p>
        <div className="mt-6 flex justify-end gap-2">
          <button type="button" className="rounded-xl border border-slate-200 px-4 py-2 text-sm">Cancel</button>
          <button type="button" className="rounded-xl bg-brand-600 px-4 py-2 text-sm text-white">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export function UtilTooltip() {
  return (
    <div className="flex justify-center py-16">
      <span className="group relative inline-flex cursor-default rounded-lg border border-slate-200 px-3 py-1.5 text-sm">
        Hover me
        <span role="tooltip" className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-brand-950 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">Short helper text</span>
      </span>
    </div>
  );
}

export function UtilBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-12">
      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">Premium</span>
      <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">New</span>
      <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-800">Beta</span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Free</span>
    </div>
  );
}

export function UtilDividerLabel() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-4 px-6 py-12">
      <span className="h-px flex-1 bg-slate-200" />
      <span className="text-xs text-slate-400">or continue with</span>
      <span className="h-px flex-1 bg-slate-200" />
    </div>
  );
}
