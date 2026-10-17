import { useId } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, componentRegistry, filterComponents, getCategoryCounts } from "../components-library/registry";
import PreviewFrame from "../components-library/shared/PreviewFrame";
import CodePanel from "../components-library/shared/CodePanel";
import Tabs from "../components-library/shared/Tabs";

export default function Components() {
  const id = useId();
  const [params, setParams] = useSearchParams();
  const requestedCategory = (params.get("category")?.toLowerCase() === "navigation" ? "navbars" : params.get("category")?.toLowerCase()) ?? "all";
  const category = categories.some((item) => item.id === requestedCategory) ? requestedCategory : "all";
  const query = params.get("q") ?? "";
  const counts = getCategoryCounts();
  const filtered = filterComponents(category, query);
  const activeCategory = categories.find((item) => item.id === category);
  const tabs = [{ id: "all", label: `All (${componentRegistry.length})` }, ...categories.map((item) => ({ id: item.id, label: `${item.title} (${counts[item.id]})` }))];

  function updateFilter(key: string, value: string) {
    setParams((previous) => {
      const next = new URLSearchParams(previous);
      if (value && value !== "all") next.set(key, value);
      else next.delete(key);
      return next;
    }, { replace: true, preventScrollReset: true });
  }

  function reset() {
    setParams((previous) => { const next = new URLSearchParams(previous); next.delete("category"); next.delete("q"); return next; }, { replace: true, preventScrollReset: true });
  }

  return (
    <div className="font-catalog">
      <header className="relative overflow-hidden bg-brand-950 text-white">
        <div aria-hidden="true" className="absolute -right-12 top-10 h-72 w-72 rotate-12 rounded-[64px] border border-brand-400/25 shadow-[0_0_0_40px_rgba(129,140,248,0.04)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-6 text-sm text-brand-200">The section library · Architecture preview</p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">A considered start.<br />A finish that’s yours.</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-brand-200">Designs and effects you can open, test, and take into your own code.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-brand-300"><span>{componentRegistry.length} live samples</span><span>{categories.length} categories</span><span>React + Tailwind · source included</span></div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-5">
          <div className="w-full max-w-md"><label htmlFor={`${id}-search`} className="mb-2 block text-sm font-medium text-brand-950">Find a section</label><input id={`${id}-search`} type="search" value={query} onChange={(event) => updateFilter("q", event.target.value)} placeholder="Search by layout, use, or tag…" className="min-h-11 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2" /></div>
          <p role="status" className="pb-3 text-sm text-slate-500">{filtered.length} of {componentRegistry.length} components</p>
        </div>

        <Tabs id={`${id}-categories`} label="Component categories" tabs={tabs} value={category} onChange={(value) => updateFilter("category", value)} panelId={`${id}-results`} />
        <p className="mb-8 mt-3 text-xs leading-6 text-slate-500">Nine sections in every category. Arrow keys move between category tabs. Premium is a label; source is available to everyone.</p>

        <section id={`${id}-results`} role="tabpanel" aria-labelledby={`${id}-categories-${category}`} tabIndex={0} className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4">
          {filtered.length ? <div className="grid items-start gap-7 xl:grid-cols-2">{filtered.map((item) => <article key={item.id} id={item.id} aria-labelledby={`${item.id}-title`} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex min-h-14 items-center justify-between gap-3 border-b border-slate-200 px-5 py-3"><span className="text-xs text-slate-500">{categories.find((entry) => entry.id === item.category)?.title}</span>{item.isPremium && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">Premium · no gating</span>}</div>
            <PreviewFrame item={item} />
            <div className="p-5 sm:p-6">
              <h2 id={`${item.id}-title`} className="font-display text-xl font-semibold tracking-tight text-brand-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-500">{tag}</span>)}</div>
              <p className="mb-5 mt-5 border-l-2 border-brand-200 pl-3 text-xs leading-6 text-slate-500"><span className="font-semibold">Sample content.</span> Product copy, wordmarks, and workspace details are illustrative. {item.a11yNotes}</p>
              <CodePanel item={item} />
            </div>
          </article>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center"><h2 className="font-display text-2xl font-semibold text-brand-950">{activeCategory && !counts[activeCategory.id] ? `${activeCategory.title}: coming soon.` : "No sections match your search."}</h2><p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600">{activeCategory && !counts[activeCategory.id] ? "This batch establishes the preview and source system. This category will be added in a later batch." : "Try fewer words, a different category, or a tag such as product or sticky."}</p><button type="button" onClick={reset} className="mt-6 min-h-11 rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">Clear filters</button></div>}
        </section>

        <aside className="mt-12 border-t border-slate-200 py-8"><h2 className="font-display text-xl font-semibold text-brand-950">Try the layout. Keep the source.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Card previews begin on a 1280px canvas, scaled to fit. Switch to mobile or tablet, or open a full preview for unscaled interaction. Each code panel loads the complete category source file, including shared helpers and all nine named exports.</p></aside>
      </div>
    </div>
  );
}
