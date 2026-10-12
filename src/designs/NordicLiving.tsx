const NordicLiving = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Nordic Living
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-teal-800 transition">
              Home
            </a>
            <a href="#" className="hover:text-teal-800 transition">
              Collections
            </a>
            <a href="#" className="hover:text-teal-800 transition">
              About
            </a>
            <a href="#" className="hover:text-teal-800 transition">
              Journal
            </a>
            <a href="#" className="hover:text-teal-800 transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-slate-600 hover:text-teal-800">
              <svg
                className="w-5 h-5"
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
            </button>
            <button className="text-slate-600 hover:text-teal-800 relative">
              <svg
                className="w-5 h-5"
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
            </button>
          </div>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative h-[600px] md:h-[680px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
          alt="Modern living room"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <p className="text-teal-300 text-sm font-medium tracking-wider uppercase mb-4">
            Modern Furniture for Modern Living
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-xl leading-tight mb-5">
            Elegant Spaces.
            <br />
            Better Living.
          </h1>
          <p className="text-slate-200 text-lg max-w-md mb-8">
            Discover furniture that blends comfort, quality and timeless design
            — crafted for the moments that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3.5 rounded-full bg-teal-700 hover:bg-teal-600 text-white font-medium transition">
              Explore Collection
            </button>
            <button className="px-7 py-3.5 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Free Delivery", desc: "Safe & fast shipping" },
              { title: "Premium Quality", desc: "Only the best materials" },
              {
                title: "24/7 Support",
                desc: "We're here whenever you need us",
              },
              {
                title: "Sustainable Choices",
                desc: "Better for your home & the planet",
              },
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

      {/* ========== COLLECTIONS ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Find Your Perfect Style
              </h2>
              <p className="text-slate-500 mt-1">
                Explore our carefully curated collections
              </p>
            </div>
            <a
              href="#"
              className="text-teal-700 text-sm font-medium hover:underline hidden sm:block"
            >
              View All Collections →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                name: "Living Room",
                items: "Sofas, Coffee Tables, TV Units",
                img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
              },
              {
                name: "Bedroom",
                items: "Beds, Nightstands, Dressers",
                img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80",
              },
              {
                name: "Dining Room",
                items: "Dining Tables, Chairs, Buffets",
                img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&q=80",
              },
              {
                name: "Office",
                items: "Desks, Chairs, Storage",
                img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&q=80",
              },
            ].map((col) => (
              <a key={col.name} href="#" className="group block">
                <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                  <img
                    src={col.img}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="font-semibold text-slate-900">{col.name}</h3>
                <p className="text-sm text-slate-500">{col.items}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCT ========== */}
      <section className="py-16 bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-300 text-sm font-medium tracking-wider uppercase mb-3">
                Featured
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Timeless Pieces for Every Space
              </h2>
              <p className="text-teal-100 mb-8 leading-relaxed">
                Handpicked collections that bring comfort, style and value to
                your home. Designed to last and made to be loved.
              </p>
              <button className="px-7 py-3.5 rounded-full bg-white text-teal-900 font-medium hover:bg-teal-50 transition">
                Shop Featured
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80"
                alt="Featured chair"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== BEST SELLING ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Best Selling Products
              </h2>
              <p className="text-slate-500 mt-1">Loved by our customers</p>
            </div>
            <a
              href="#"
              className="text-teal-700 text-sm font-medium hover:underline hidden sm:block"
            >
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Luna Sofa",
                price: "$1,299",
                oldPrice: "$1,599",
                img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80",
              },
              {
                name: "Nora Dining Chair",
                price: "$199",
                oldPrice: null,
                img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&q=80",
              },
              {
                name: "Oak Coffee Table",
                price: "$349",
                oldPrice: "$429",
                img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80",
              },
              {
                name: "Arden Bed Frame",
                price: "$899",
                oldPrice: null,
                img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80",
              },
            ].map((product) => (
              <a key={product.name} href="#" className="group block">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-4 relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {product.oldPrice && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-rose-500 text-white text-xs font-semibold rounded-full">
                      Sale
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-teal-800">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Bedroom"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Thoughtfully Designed.
                <br />
                Beautifully Made.
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We believe great furniture does more than fill a space — it
                shapes the way you live. Our designs combine functionality,
                comfort and timeless style, so you can enjoy a home that truly
                feels like yours.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    num: "01",
                    title: "Design & Concept",
                    desc: "Thoughtful design for modern living",
                  },
                  {
                    num: "02",
                    title: "Premium Materials",
                    desc: "Sourced for durability and beauty",
                  },
                  {
                    num: "03",
                    title: "Expert Craftsmanship",
                    desc: "Built with care and precision",
                  },
                  {
                    num: "04",
                    title: "At Your Home",
                    desc: "Safe delivery and setup",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="text-teal-700 font-bold text-sm">
                      {step.num}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">
                        {step.title}
                      </p>
                      <p className="text-sm text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 rounded-full bg-teal-800 hover:bg-teal-700 text-white font-medium transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Real Homes. Real Stories.
            </h2>
            <p className="text-slate-500 mt-2">What our customers say</p>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-10 text-center">
            <div className="text-amber-400 text-lg mb-4">★★★★★</div>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              "Nordic Living completely transformed our living room. The quality
              is outstanding, and the design fits our home perfectly."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-semibold">
                S
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Sarah Ahmed</p>
                <p className="text-sm text-slate-500">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== JOURNAL ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Stay Inspired
              </h2>
              <p className="text-slate-500 mt-1">
                Tips, guides and ideas for your home
              </p>
            </div>
            <a
              href="#"
              className="text-teal-700 text-sm font-medium hover:underline hidden sm:block"
            >
              View All Articles →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "5 Furniture Trends for a Modern Home",
                date: "Apr 10, 2025",
                img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
              },
              {
                title: "How to Choose the Right Wood Furniture",
                date: "Apr 5, 2025",
                img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80",
              },
              {
                title: "Small Space? Big Ideas.",
                date: "Mar 28, 2025",
                img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=80",
              },
            ].map((post) => (
              <a
                key={post.title}
                href="#"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-400 mb-2">{post.date}</p>
                  <h3 className="font-semibold text-slate-900 group-hover:text-teal-800 transition">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-teal-950 rounded-3xl px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Get the Latest Updates
              </h2>
              <p className="text-teal-200">
                Be the first to know about new arrivals, special offers and
                expert tips.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 min-w-[260px]"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-white text-teal-900 font-medium hover:bg-teal-50 transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="font-semibold text-lg">Nordic Living</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Better Furniture. A Brighter Home.
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
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>hello@nordicliving.com</li>
                <li>+880 1783 242954</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 Nordic Living. All rights reserved.</p>
            <p className="text-slate-600">Crafted for a Better Tomorrow</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NordicLiving;
