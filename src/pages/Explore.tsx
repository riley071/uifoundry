import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { designs, categories, styles } from "../data/designs";

type Design = (typeof designs)[number];

/** Card that tilts toward the cursor and shows a soft light that follows it. */
const DesignCard = ({ design }: { design: Design }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <Link
      ref={ref}
      to={`/design/${design.slug}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden transition-[transform,box-shadow,border-color] duration-200 ease-out will-change-transform hover:shadow-xl hover:shadow-brand-950/10 hover:border-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={design.previewImage}
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {design.isPremium && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold bg-amber-400 text-amber-900 rounded-lg shadow-sm">
            Premium
          </span>
        )}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[radial-gradient(circle_at_var(--gx,50%)_var(--gy,50%),rgba(255,255,255,0.28),transparent_55%)]" />
      </div>
      <div className="p-4">
        <p className="text-sm text-brand-600 font-medium mb-1">
          {design.category}
          {design.style[0] && (
            <span className="text-slate-400 font-normal">
              {" "}
              / {design.style[0]}
            </span>
          )}
        </p>
        <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition">
          {design.title}
        </h3>
        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
          {design.description}
        </p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 text-xs text-slate-400">
          <span>
            {design.likes} likes, {design.views.toLocaleString()} views
          </span>
          <span>{design.updatedAt}</span>
        </div>
      </div>
    </Link>
  );
};

const Explore = () => {
  const [params, setParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [sortBy, setSortBy] = useState("newest");

  // Search lives in the URL, so /explore?q=nordic is linkable and shareable.
  const searchQuery = params.get("q") ?? "";
  const setSearchQuery = (value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set("q", value);
    else next.delete("q");
    setParams(next, { replace: true });
  };

  const filtered = designs
    .filter((d) => {
      if (selectedCategory !== "All" && d.category !== selectedCategory)
        return false;
      if (selectedStyle && !d.style.includes(selectedStyle)) return false;
      if (showPremiumOnly && !d.isPremium) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "popular") return b.views - a.views;
      if (sortBy === "liked") return b.likes - a.likes;
      return 0;
    });

  const hasFilters =
    selectedCategory !== "All" ||
    selectedStyle ||
    showPremiumOnly ||
    searchQuery;
  const clearAll = () => {
    setSelectedCategory("All");
    setSelectedStyle(null);
    setShowPremiumOnly(false);
    setSearchQuery("");
  };

  return (
    <div>
      {/* Header */}
      <div className="relative overflow-hidden bg-brand-950 text-white">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-[600px] rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-3">
            Explore designs
          </h1>
          <p className="text-slate-300 max-w-xl mb-8">
            Full websites with live previews. Filter by category or style, then
            open one to test it at any screen width.
          </p>
          <div className="relative max-w-xl">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              aria-label="Search designs"
              placeholder="Search by name, category or tag"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 backdrop-blur focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/15"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category pills */}
        <div
          className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 mb-6"
          role="group"
          aria-label="Categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                selectedCategory === cat
                  ? "bg-brand-950 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-3">
                  Visual style
                </h2>
                <div className="space-y-2">
                  {styles.map((style) => (
                    <label
                      key={style}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="style"
                        checked={selectedStyle === style}
                        onChange={() => setSelectedStyle(style)}
                        className="w-4 h-4 text-brand-600 focus:ring-brand-500 border-slate-300"
                      />
                      <span className="text-sm text-slate-700 group-hover:text-slate-900">
                        {style}
                      </span>
                    </label>
                  ))}
                  {selectedStyle && (
                    <button
                      onClick={() => setSelectedStyle(null)}
                      className="text-xs text-brand-600 hover:underline mt-1 ml-6"
                    >
                      Clear style
                    </button>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-900 mb-3">
                  Access
                </h2>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showPremiumOnly}
                    onChange={(e) => setShowPremiumOnly(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                  />
                  <span className="text-sm text-slate-700">Premium only</span>
                </label>
              </div>

              {hasFilters && (
                <button
                  onClick={clearAll}
                  className="text-sm text-brand-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <p className="text-sm text-slate-500" aria-live="polite">
                Showing{" "}
                <span className="font-medium text-slate-800">
                  {filtered.length}
                </span>{" "}
                design
                {filtered.length !== 1 ? "s" : ""}
              </p>
              <label className="flex items-center gap-2 text-sm text-slate-500">
                Sort by
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 text-sm text-slate-800 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                >
                  <option value="newest">Newest</option>
                  <option value="popular">Most popular</option>
                  <option value="liked">Most liked</option>
                </select>
              </label>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((design) => (
                  <DesignCard key={design.id} design={design} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="font-semibold text-slate-900 mb-1">
                  No designs match these filters
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Remove a filter or change your search to see more designs.
                </p>
                <button
                  onClick={clearAll}
                  className="text-sm font-medium text-brand-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
