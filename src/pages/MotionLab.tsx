import { useState } from "react";

const categories = [
  {
    id: "scroll",
    title: "Scroll Reveal",
    count: 5,
    color: "from-violet-500 to-purple-600",
    description: "Fade, slide and scale animations triggered on scroll",
  },
  {
    id: "hover",
    title: "Hover Effects",
    count: 6,
    color: "from-blue-500 to-cyan-500",
    description: "Card lifts, image zooms, button glows and hover states",
  },
  {
    id: "text",
    title: "Text Animations",
    count: 5,
    color: "from-amber-500 to-orange-500",
    description: "Typewriter, gradient text, word reveals and split text",
  },
  {
    id: "loaders",
    title: "Loaders",
    count: 4,
    color: "from-emerald-500 to-teal-500",
    description: "Spinners, skeleton screens, progress bars and loading states",
  },
  {
    id: "micro",
    title: "Micro-interactions",
    count: 5,
    color: "from-rose-500 to-pink-500",
    description: "Button feedback, toggles, form states and subtle reactions",
  },
  {
    id: "page",
    title: "Page Transitions",
    count: 4,
    color: "from-indigo-500 to-blue-600",
    description: "Route changes, shared elements and view animations",
  },
  {
    id: "parallax",
    title: "Parallax Effects",
    count: 3,
    color: "from-sky-500 to-blue-500",
    description: "Depth scrolling, layered backgrounds and mouse-follow",
  },
  {
    id: "stagger",
    title: "Staggered Lists",
    count: 4,
    color: "from-fuchsia-500 to-purple-500",
    description: "Cascade animations for lists, grids and sequential reveals",
  },
  {
    id: "3d",
    title: "3D Transforms",
    count: 3,
    color: "from-lime-500 to-green-500",
    description: "Card flips, 3D tilt, perspective and depth animations",
  },
];

const allAnimations = [
  // Scroll Reveal
  {
    id: 1,
    category: "scroll",
    title: "Fade Up on Scroll",
    description: "Elements fade and slide up as they enter the viewport",
    tag: "CSS + Intersection Observer",
  },
  {
    id: 2,
    category: "scroll",
    title: "Scale In on Scroll",
    description: "Soft scale-up animation when scrolled into view",
    tag: "CSS + Intersection Observer",
  },
  {
    id: 3,
    category: "scroll",
    title: "Slide from Left/Right",
    description: "Directional slide reveals from left or right",
    tag: "CSS + Intersection Observer",
  },
  {
    id: 4,
    category: "scroll",
    title: "Staggered Scroll Reveal",
    description: "Children animate one after another on scroll",
    tag: "Framer Motion",
  },
  {
    id: 5,
    category: "scroll",
    title: "Blur to Clear",
    description: "Content starts blurred and becomes sharp on scroll",
    tag: "CSS + Intersection Observer",
  },

  // Hover Effects
  {
    id: 6,
    category: "hover",
    title: "Card Lift",
    description: "Card elevates with shadow on hover",
    tag: "CSS Transitions",
  },
  {
    id: 7,
    category: "hover",
    title: "Image Zoom",
    description: "Smooth image scale on card hover",
    tag: "CSS Transitions",
  },
  {
    id: 8,
    category: "hover",
    title: "Button Glow",
    description: "Subtle glow and scale on button hover",
    tag: "CSS Transitions",
  },
  {
    id: 9,
    category: "hover",
    title: "Border Draw",
    description: "Animated border that draws around the element",
    tag: "CSS Transitions",
  },
  {
    id: 10,
    category: "hover",
    title: "Icon Spin / Bounce",
    description: "Icon rotates or bounces on hover",
    tag: "CSS Transitions",
  },
  {
    id: 11,
    category: "hover",
    title: "Overlay Reveal",
    description: "Dark overlay + text appears on image hover",
    tag: "CSS Transitions",
  },

  // Text Animations
  {
    id: 12,
    category: "text",
    title: "Typewriter Effect",
    description: "Text types out character by character",
    tag: "Framer Motion",
  },
  {
    id: 13,
    category: "text",
    title: "Gradient Text",
    description: "Animated gradient flowing through text",
    tag: "CSS Animations",
  },
  {
    id: 14,
    category: "text",
    title: "Word by Word Reveal",
    description: "Each word fades in sequentially",
    tag: "Framer Motion",
  },
  {
    id: 15,
    category: "text",
    title: "Split Text Animation",
    description: "Letters animate individually with stagger",
    tag: "Framer Motion",
  },
  {
    id: 16,
    category: "text",
    title: "Text Scramble",
    description: "Characters scramble then resolve into final text",
    tag: "JS",
  },

  // Loaders
  {
    id: 17,
    category: "loaders",
    title: "Spinner",
    description: "Clean circular loading spinner",
    tag: "CSS Animations",
  },
  {
    id: 18,
    category: "loaders",
    title: "Skeleton Screen",
    description: "Placeholder shimmer for content loading",
    tag: "CSS Animations",
  },
  {
    id: 19,
    category: "loaders",
    title: "Progress Bar",
    description: "Animated progress bar with percentage",
    tag: "CSS + JS",
  },
  {
    id: 20,
    category: "loaders",
    title: "Dots Loader",
    description: "Three bouncing dots loading indicator",
    tag: "CSS Animations",
  },

  // Micro-interactions
  {
    id: 21,
    category: "micro",
    title: "Button Press Feedback",
    description: "Scale down + ripple on click",
    tag: "CSS + JS",
  },
  {
    id: 22,
    category: "micro",
    title: "Toggle Switch",
    description: "Smooth animated toggle with state",
    tag: "CSS Transitions",
  },
  {
    id: 23,
    category: "micro",
    title: "Form Validation",
    description: "Shake + color change on invalid input",
    tag: "CSS + JS",
  },
  {
    id: 24,
    category: "micro",
    title: "Like / Heart Burst",
    description: "Heart scales and bursts on like",
    tag: "CSS + JS",
  },
  {
    id: 25,
    category: "micro",
    title: "Checkbox Tick",
    description: "Animated checkmark on select",
    tag: "CSS Transitions",
  },

  // Page Transitions
  {
    id: 26,
    category: "page",
    title: "Fade Page Transition",
    description: "Simple fade between routes",
    tag: "Framer Motion",
  },
  {
    id: 27,
    category: "page",
    title: "Slide Page Transition",
    description: "Pages slide left/right on navigate",
    tag: "Framer Motion",
  },
  {
    id: 28,
    category: "page",
    title: "Shared Element",
    description: "Image/card morphs into detail view",
    tag: "Framer Motion",
  },
  {
    id: 29,
    category: "page",
    title: "Curtain Reveal",
    description: "Content revealed with curtain wipe",
    tag: "Framer Motion",
  },

  // Parallax
  {
    id: 30,
    category: "parallax",
    title: "Background Parallax",
    description: "Background moves slower than content",
    tag: "CSS + JS",
  },
  {
    id: 31,
    category: "parallax",
    title: "Mouse Follow Parallax",
    description: "Layers shift based on mouse position",
    tag: "JS",
  },
  {
    id: 32,
    category: "parallax",
    title: "Multi-layer Scroll",
    description: "Multiple depth layers on scroll",
    tag: "CSS + JS",
  },

  // Staggered Lists
  {
    id: 33,
    category: "stagger",
    title: "List Cascade",
    description: "List items appear one after another",
    tag: "Framer Motion",
  },
  {
    id: 34,
    category: "stagger",
    title: "Grid Stagger",
    description: "Grid cards animate in with delay",
    tag: "Framer Motion",
  },
  {
    id: 35,
    category: "stagger",
    title: "Menu Stagger",
    description: "Navigation links stagger on open",
    tag: "Framer Motion",
  },
  {
    id: 36,
    category: "stagger",
    title: "Feature Stagger",
    description: "Feature icons cascade into view",
    tag: "Framer Motion",
  },

  // 3D Transforms
  {
    id: 37,
    category: "3d",
    title: "Card Flip",
    description: "Card flips to reveal back content",
    tag: "CSS 3D",
  },
  {
    id: 38,
    category: "3d",
    title: "3D Tilt",
    description: "Card tilts toward mouse cursor",
    tag: "CSS + JS",
  },
  {
    id: 39,
    category: "3d",
    title: "Perspective Hover",
    description: "Subtle 3D perspective on hover",
    tag: "CSS 3D",
  },
];

const MotionLab = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allAnimations.filter((anim) => {
    const matchesCategory = activeCategory
      ? anim.category === activeCategory
      : true;
    const matchesSearch =
      searchQuery === "" ||
      anim.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anim.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-950 mb-3">
          Motion Lab
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Polished, reusable animations with live demos and clean code. Built
          with CSS and Framer Motion.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full sm:max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
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
            placeholder="Search animations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>
        <p className="text-sm text-slate-500">
          <span className="font-medium text-slate-800">{filtered.length}</span>{" "}
          animations
        </p>
      </div>

      {/* Category Grid (default view) */}
      {!activeCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="group text-left bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all"
            >
              <div className="h-32 bg-slate-50 flex items-center justify-center relative">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {cat.count} animations
                  </span>
                  <span className="text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition">
                    Browse →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Animation List View */}
      {activeCategory && (
        <div>
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-600 transition"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Categories
            </button>
            <span className="text-slate-300">/</span>
            <h2 className="text-xl font-bold text-slate-900">
              {currentCategory?.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((anim) => (
              <div
                key={anim.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-brand-200 transition group"
              >
                <div className="h-28 rounded-xl bg-slate-100 mb-4 flex items-center justify-center">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentCategory?.color || "from-brand-500 to-violet-500"}`}
                  />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition">
                  {anim.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                  {anim.description}
                </p>
                <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 mb-4">
                  {anim.tag}
                </span>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition">
                    Play Demo
                  </button>
                  <button className="flex-1 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
                    View Code
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              No animations found in this category.
            </div>
          )}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 rounded-2xl bg-slate-900 px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Need a custom animation?</h2>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          We can create custom motion packages tailored to your brand and
          project needs.
        </p>
        <button className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition">
          Request Custom Motion
        </button>
      </div>
    </div>
  );
};

export default MotionLab;
