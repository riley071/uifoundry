import { useState } from "react";

// Categories
const categories = [
  {
    id: "heroes",
    title: "Hero Sections",
    count: 6,
    color: "bg-violet-100 text-violet-700",
    description:
      "Bold, conversion-focused heroes with search bars, CTAs and imagery",
  },
  {
    id: "navbars",
    title: "Navigation Bars",
    count: 5,
    color: "bg-blue-100 text-blue-700",
    description: "Sticky, responsive navs with logos, menus and CTAs",
  },
  {
    id: "cards",
    title: "Product Cards",
    count: 8,
    color: "bg-emerald-100 text-emerald-700",
    description:
      "Clean product and destination cards with pricing and hover states",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    count: 5,
    color: "bg-amber-100 text-amber-700",
    description: "Social proof sections with ratings, quotes and avatars",
  },
  {
    id: "pricing",
    title: "Pricing Tables",
    count: 4,
    color: "bg-rose-100 text-rose-700",
    description: "Clear pricing cards with feature lists and popular badges",
  },
  {
    id: "footers",
    title: "Footers",
    count: 4,
    color: "bg-slate-100 text-slate-700",
    description: "Multi-column footers with links, newsletter and social icons",
  },
  {
    id: "forms",
    title: "Forms & CTAs",
    count: 6,
    color: "bg-cyan-100 text-cyan-700",
    description:
      "Contact forms, newsletters, search bars and call-to-action blocks",
  },
  {
    id: "features",
    title: "Feature Grids",
    count: 5,
    color: "bg-indigo-100 text-indigo-700",
    description: "Icon + text feature sections, stats bars and benefit grids",
  },
];

// Sample components (you can expand this later)
const allComponents = [
  // Heroes
  {
    id: 1,
    category: "heroes",
    title: "Travel Hero with Search",
    description: "Full-width hero with destination search bar and dual CTAs",
  },
  {
    id: 2,
    category: "heroes",
    title: "Furniture Hero",
    description: "Elegant hero with product imagery and soft gradient overlay",
  },
  {
    id: 3,
    category: "heroes",
    title: "Real Estate Hero",
    description: "Property search hero with location, type and price filters",
  },
  {
    id: 4,
    category: "heroes",
    title: "Car Rental Hero",
    description: "Booking-focused hero with date and location form",
  },
  {
    id: 5,
    category: "heroes",
    title: "Bakery Hero",
    description: "Warm, image-driven hero with soft branding",
  },
  {
    id: 6,
    category: "heroes",
    title: "Services Hero",
    description: "Trust-building hero with stats and strong CTA",
  },

  // Navbars
  {
    id: 7,
    category: "navbars",
    title: "Minimal Sticky Nav",
    description: "Clean logo + links + CTA, sticky on scroll",
  },
  {
    id: 8,
    category: "navbars",
    title: "E-commerce Nav",
    description: "Search bar, account and cart icons",
  },
  {
    id: 9,
    category: "navbars",
    title: "Dark Premium Nav",
    description: "Dark background with gold/amber accents",
  },
  {
    id: 10,
    category: "navbars",
    title: "Centered Logo Nav",
    description: "Logo centered, links on both sides",
  },
  {
    id: 11,
    category: "navbars",
    title: "Mega Menu Nav",
    description: "Dropdown categories for larger sites",
  },

  // Cards
  {
    id: 12,
    category: "cards",
    title: "Destination Card",
    description: "Image, location, price and hover zoom",
  },
  {
    id: 13,
    category: "cards",
    title: "Product Card with Sale",
    description: "Sale badge, old price and add-to-cart",
  },
  {
    id: 14,
    category: "cards",
    title: "Property Card",
    description: "Beds, baths, sqft and price",
  },
  {
    id: 15,
    category: "cards",
    title: "Car Rental Card",
    description: "Vehicle type, seats, transmission and daily price",
  },
  {
    id: 16,
    category: "cards",
    title: "Blog / Article Card",
    description: "Image, date, title and excerpt",
  },
  {
    id: 17,
    category: "cards",
    title: "Team Member Card",
    description: "Avatar, name, role and social links",
  },
  {
    id: 18,
    category: "cards",
    title: "Pricing Feature Card",
    description: "Simple card used inside pricing tables",
  },
  {
    id: 19,
    category: "cards",
    title: "Category Card",
    description: "Icon + title + short description",
  },

  // Testimonials
  {
    id: 20,
    category: "testimonials",
    title: "Simple Quote Card",
    description: "Stars, quote, avatar and name",
  },
  {
    id: 21,
    category: "testimonials",
    title: "Testimonial Slider",
    description: "Carousel-ready testimonial block",
  },
  {
    id: 22,
    category: "testimonials",
    title: "Large Quote Block",
    description: "Centered big quote with author",
  },
  {
    id: 23,
    category: "testimonials",
    title: "Grid Testimonials",
    description: "3-column testimonial grid",
  },
  {
    id: 24,
    category: "testimonials",
    title: "Video Testimonial Card",
    description: "Thumbnail + play button style",
  },

  // Pricing
  {
    id: 25,
    category: "pricing",
    title: "3-Tier Pricing",
    description: "Free / Pro / Team with popular badge",
  },
  {
    id: 26,
    category: "pricing",
    title: "Simple Two Column",
    description: "Clean comparison layout",
  },
  {
    id: 27,
    category: "pricing",
    title: "Toggle Monthly/Yearly",
    description: "Pricing with billing toggle",
  },
  {
    id: 28,
    category: "pricing",
    title: "Feature Comparison Table",
    description: "Detailed feature matrix",
  },

  // Footers
  {
    id: 29,
    category: "footers",
    title: "Multi-column Footer",
    description: "Links, newsletter and social icons",
  },
  {
    id: 30,
    category: "footers",
    title: "Minimal Footer",
    description: "Logo, copyright and few links",
  },
  {
    id: 31,
    category: "footers",
    title: "Dark Footer with CTA",
    description: "Newsletter signup + dark theme",
  },
  {
    id: 32,
    category: "footers",
    title: "Centered Footer",
    description: "Centered logo and links",
  },

  // Forms & CTAs
  {
    id: 33,
    category: "forms",
    title: "Newsletter Signup",
    description: "Email input + subscribe button",
  },
  {
    id: 34,
    category: "forms",
    title: "Contact Form",
    description: "Name, email, message fields",
  },
  {
    id: 35,
    category: "forms",
    title: "Search Bar (Hero)",
    description: "Multi-field search used in heroes",
  },
  {
    id: 36,
    category: "forms",
    title: "CTA Banner",
    description: "Full-width call-to-action section",
  },
  {
    id: 37,
    category: "forms",
    title: "Lead Capture Form",
    description: "Short form for lead generation",
  },
  {
    id: 38,
    category: "forms",
    title: "Booking Form",
    description: "Date + location style form",
  },

  // Features
  {
    id: 39,
    category: "features",
    title: "Icon Feature Grid",
    description: "3 or 4 column icon + text features",
  },
  {
    id: 40,
    category: "features",
    title: "Stats Bar",
    description: "Key numbers in a horizontal bar",
  },
  {
    id: 41,
    category: "features",
    title: "Process Steps",
    description: "Numbered steps (01, 02, 03...)",
  },
  {
    id: 42,
    category: "features",
    title: "Benefits List",
    description: "Checkmark list of benefits",
  },
  {
    id: 43,
    category: "features",
    title: "Split Feature Section",
    description: "Image on one side, text on the other",
  },
];

const Components = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = allComponents.filter((comp) => {
    const matchesCategory = activeCategory
      ? comp.category === activeCategory
      : true;
    const matchesSearch =
      searchQuery === "" ||
      comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-950 mb-3">
          UI Components
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Production-ready, reusable components extracted from real website
          designs. Copy the code and drop them into your project.
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
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>
        <p className="text-sm text-slate-500">
          <span className="font-medium text-slate-800">
            {filteredComponents.length}
          </span>{" "}
          components
        </p>
      </div>

      {/* Category View (default) */}
      {!activeCategory && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="group text-left bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-brand-200 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mb-4 text-lg font-bold`}
              >
                {cat.title.charAt(0)}
              </div>
              <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition">
                {cat.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                {cat.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  {cat.count} components
                </span>
                <span className="text-sm font-medium text-brand-600 opacity-0 group-hover:opacity-100 transition">
                  Browse →
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Component List View (when category selected) */}
      {activeCategory && (
        <div>
          {/* Back + Category Title */}
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

          {/* Components Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredComponents.map((comp) => (
              <div
                key={comp.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-brand-200 transition group"
              >
                <div className="h-32 rounded-xl bg-slate-100 mb-4 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">Preview</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition">
                  {comp.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {comp.description}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition">
                    View Code
                  </button>
                  <button className="flex-1 py-2 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredComponents.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              No components found in this category.
            </div>
          )}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-brand-600 to-violet-600 px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Need a custom component?</h2>
        <p className="text-brand-100 mb-6 max-w-md mx-auto">
          We’re constantly adding new components from real designs. Request one
          or contribute your own.
        </p>
        <button className="px-6 py-3 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition">
          Request a Component
        </button>
      </div>
    </div>
  );
};

export default Components;
