import { useState } from "react";
import { Link } from "react-router-dom";
import { designs, categories, styles } from "../data/designs";

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

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
      return 0; // newest (default order)
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-950 mb-2">
          Explore Designs
        </h1>
        <p className="text-slate-500">
          Browse beautiful, production-ready website designs crafted for modern
          brands.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-60 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            {/* Search */}
            <div>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                  placeholder="Search designs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h6 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Categories
              </h6>
              <div className="space-y-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                      selectedCategory === cat
                        ? "bg-brand-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Style */}
            <div>
              <h6 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Visual Style
              </h6>
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
                    Clear filter
                  </button>
                )}
              </div>
            </div>

            {/* Access */}
            <div>
              <h6 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Access
              </h6>
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

            {/* Active filters summary */}
            {(selectedCategory !== "All" ||
              selectedStyle ||
              showPremiumOnly ||
              searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStyle(null);
                  setShowPremiumOnly(false);
                  setSearchQuery("");
                }}
                className="text-sm text-brand-600 font-medium hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-medium text-slate-800">
                {filtered.length}
              </span>{" "}
              design{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Sort by</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
              >
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="liked">Most Liked</option>
              </select>
            </div>
          </div>

          {/* Design Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((design) => (
                <Link
                  key={design.id}
                  to={`/design/${design.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={design.previewImage}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {design.isPremium && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold bg-amber-400 text-amber-900 rounded-lg shadow-sm">
                        Premium
                      </span>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-900 shadow-lg">
                        View Design
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium uppercase tracking-wide text-brand-600">
                        {design.category}
                      </span>
                      {design.style.slice(0, 1).map((s) => (
                        <span key={s} className="text-xs text-slate-400">
                          · {s}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition">
                      {design.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                      {design.description}
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                      <span className="text-xs text-slate-400">
                        ♥ {design.likes} · {design.views.toLocaleString()} views
                      </span>
                      <span className="text-xs text-slate-400">
                        {design.updatedAt}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                No designs found
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStyle(null);
                  setShowPremiumOnly(false);
                  setSearchQuery("");
                }}
                className="text-sm font-medium text-brand-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
