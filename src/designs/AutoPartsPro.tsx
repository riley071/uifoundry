const AutoPartsPro = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========== TOP BAR ========== */}
      <div className="bg-slate-900 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <p>Free Shipping on Orders Over $99</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-red-400 transition">
              Track Order
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Help
            </a>
            <span>+1 (800) 555-0199</span>
          </div>
        </div>
      </div>

      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
              </svg>
            </div>
            <span className="font-bold text-lg">
              AutoParts<span className="text-red-600">Pro</span>
            </span>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="flex w-full">
              <input
                type="search"
                placeholder="Search for parts, brands or vehicle..."
                className="flex-1 px-4 py-2.5 rounded-l-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-r-lg transition">
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-600 hover:text-red-600 text-sm font-medium hidden sm:block">
              Account
            </button>
            <button className="relative text-slate-600 hover:text-red-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Category Nav */}
        <div className="bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-1 overflow-x-auto py-2 text-sm font-medium">
              <button className="px-4 py-1.5 bg-red-700 rounded flex items-center gap-1 whitespace-nowrap">
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                All Categories
              </button>
              {["Home", "Shop by Vehicle", "Brands", "Deals", "Support"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="px-3 py-1.5 hover:bg-red-700 rounded whitespace-nowrap transition"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-red-400 text-sm font-semibold tracking-wider uppercase mb-3">
                Premium Auto Parts
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
                Keep Your Ride
                <br />
                <span className="text-red-500">Running Strong</span>
              </h1>
              <p className="text-slate-300 text-lg mb-8 max-w-md">
                High-quality auto parts for every make and model. Better
                performance, longer life.
              </p>
              <button className="px-7 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition">
                Shop Now →
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
                alt="Car parts"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "100% Genuine Parts", desc: "Guaranteed quality" },
              { title: "Fast & Free Shipping", desc: "On orders over $99" },
              { title: "Easy Returns", desc: "Within 30 days" },
              { title: "24/7 Customer Support", desc: "We're here to help" },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-semibold text-slate-900 text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VEHICLE SEARCH ========== */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Find Parts for Your Vehicle
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Select your make, model and year to get the right parts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <select className="px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Select Make</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Ford</option>
                <option>BMW</option>
                <option>Mercedes</option>
              </select>
              <select className="px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Select Model</option>
              </select>
              <select className="px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Select Year</option>
              </select>
              <button className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition">
                Find Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Popular Categories
              </h2>
              <p className="text-slate-500 mt-1">
                Shop by category to find exactly what you need
              </p>
            </div>
            <a
              href="#"
              className="text-red-600 text-sm font-medium hover:underline hidden sm:block"
            >
              View All Categories →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                name: "Engine Parts",
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80",
              },
              {
                name: "Brake System",
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80",
              },
              {
                name: "Suspension",
                img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&q=80",
              },
              {
                name: "Filters",
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80",
              },
              {
                name: "Electrical",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
              },
              {
                name: "Exhaust System",
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80",
              },
              {
                name: "Cooling System",
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80",
              },
              {
                name: "Transmission",
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80",
              },
              {
                name: "Body Parts",
                img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&q=80",
              },
              {
                name: "Wheels & Tires",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
              },
            ].map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="group flex flex-col items-center p-4 rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-md transition text-center bg-white"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-100 mb-3 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                </div>
                <span className="text-sm font-medium text-slate-800">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BEST SELLERS ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Best Selling Parts
              </h2>
              <p className="text-slate-500 mt-1">
                Top picks from our customers
              </p>
            </div>
            <a
              href="#"
              className="text-red-600 text-sm font-medium hover:underline hidden sm:block"
            >
              View All Products →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Brake Disc Rotor",
                fit: "For Toyota Camry 2018-2024",
                price: "$89.99",
                oldPrice: "$119.99",
                badge: "Sale",
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
              },
              {
                name: "Oil Filter",
                fit: "For Honda Civic 2016-2022",
                price: "$16.99",
                oldPrice: null,
                badge: null,
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
              },
              {
                name: "Spark Plugs (Set of 4)",
                fit: "For Ford F-150 2015-2020",
                price: "$49.99",
                oldPrice: null,
                badge: null,
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
              },
              {
                name: "Air Filter",
                fit: "For Chevrolet Silverado 2014-2019",
                price: "$24.99",
                oldPrice: "$34.99",
                badge: "Sale",
                img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&q=80",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition group"
              >
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-xs font-semibold rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{product.fit}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-red-600">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              More Than Just Parts
            </h2>
            <p className="text-slate-500 mt-2">
              Why thousands of car owners trust AutoParts Pro
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quality Guaranteed",
                desc: "100% genuine and trusted brands",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Fast Shipping",
                desc: "Get your parts delivered quickly and safely",
                icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
              },
              {
                title: "Expert Support",
                desc: "Real people, real help — 24/7",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                title: "Hassle-Free Returns",
                desc: "30-day easy return policy",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-sm transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BRANDS ========== */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold mb-2">
            Trusted Brands You Can Count On
          </h2>
          <p className="text-slate-400 text-sm mb-8">
            We carry the best brands in the industry to keep your vehicle in top
            shape
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              "BOSCH",
              "DENSO",
              "NGK",
              "ACDelco",
              "Mobil 1",
              "Continental",
              "KYB",
              "Mann Filter",
            ].map((brand) => (
              <span
                key={brand}
                className="text-lg font-semibold text-slate-400 hover:text-white transition cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500K+", label: "Happy Customers" },
              { value: "1M+", label: "Parts Sold" },
              { value: "50+", label: "Top Brands" },
              { value: "4.8/5", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-red-600">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "James Miller",
                place: "Los Angeles, CA",
                text: "Great quality parts and super fast shipping. My car runs better than ever. Highly recommend!",
              },
              {
                name: "Sarah Johnson",
                place: "New York, NY",
                text: "Found the exact part I needed at a great price. The website is easy to use and delivery was on time.",
              },
              {
                name: "Michael Davis",
                place: "Chicago, IL",
                text: "Excellent customer service! They helped me find the right part for my truck. Will definitely order again.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.place}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SPECIAL OFFER ========== */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden bg-slate-900 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <p className="text-red-400 text-sm font-semibold tracking-wider uppercase mb-2">
                Limited Time Offer
              </p>
              <h2 className="text-3xl font-bold text-white mb-3">
                Save Up to 40% on Select Auto Parts
              </h2>
              <p className="text-slate-300 mb-6">
                Top brands. Unbeatable prices. Don't miss out!
              </p>
              <button className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition">
                Shop Deals
              </button>
            </div>
            <div className="md:w-1/2 relative h-56 md:h-full min-h-[220px] w-full">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=700&q=80"
                alt="Auto parts deal"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Stay in the Know
                </h3>
                <p className="text-sm text-slate-500">
                  Get exclusive deals, new arrivals and expert tips
                </p>
              </div>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-900 text-white pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
                  </svg>
                </div>
                <span className="font-bold text-lg">
                  AutoParts<span className="text-red-500">Pro</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Quality Parts. Better Journeys.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shop by Vehicle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    All Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Deals
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">My Account</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Compare
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 AutoParts Pro. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-300">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AutoPartsPro;
