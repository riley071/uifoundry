const BakeBloom = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center">
              <span className="text-white text-lg">🥐</span>
            </div>
            <span className="font-bold text-lg text-amber-900">
              Bake & Bloom
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-amber-700 transition">
              Home
            </a>
            <a href="#" className="hover:text-amber-700 transition">
              Shop
            </a>
            <a href="#" className="hover:text-amber-700 transition">
              About
            </a>
            <a href="#" className="hover:text-amber-700 transition">
              Menu
            </a>
            <a href="#" className="hover:text-amber-700 transition">
              Blog
            </a>
            <a href="#" className="hover:text-amber-700 transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-slate-600 hover:text-amber-700">
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
            <button className="text-slate-600 hover:text-amber-700 relative">
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
            <button className="hidden sm:block px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium transition">
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative h-[560px] md:h-[640px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80"
          alt="Fresh bakery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/80 via-amber-950/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <p className="text-amber-300 text-sm font-medium tracking-wider uppercase mb-3">
            Freshly Baked · Made with Love
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-xl leading-tight mb-5">
            Goodness In Every Bite
          </h1>
          <p className="text-amber-100 text-lg max-w-md mb-8">
            From our oven to your table — fresh, soft and made with love every
            single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold transition">
              Shop Now
            </button>
            <button className="px-7 py-3.5 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="border-b border-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { title: "100% Natural Ingredients", icon: "🌿" },
              { title: "Freshly Baked Daily", icon: "🥖" },
              { title: "Fast & Safe Delivery", icon: "🚚" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row items-center justify-center gap-2"
              >
                <span className="text-xl">{item.icon}</span>
                <p className="text-sm font-medium text-slate-700">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== POPULAR CATEGORIES ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-950">
              Popular Categories
            </h2>
            <p className="text-slate-500 mt-2">
              Explore our most loved treats, made for every mood and moment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                name: "Cupcakes",
                img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&q=80",
              },
              {
                name: "Cookies",
                img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80",
              },
              {
                name: "Pastries",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
              },
              {
                name: "Brownies",
                img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
              },
              {
                name: "Cakes",
                img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
              },
              {
                name: "Macarons",
                img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&q=80",
              },
            ].map((cat) => (
              <a key={cat.name} href="#" className="group text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-3 bg-amber-50">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  {cat.name}
                </h3>
                <p className="text-xs text-amber-600 mt-0.5">Shop Now →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED CAKE ========== */}
      <section className="py-16 bg-amber-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&q=80"
                alt="Signature cake"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-amber-300 text-sm font-medium tracking-wider uppercase mb-3">
                Freshly Baked
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sweet Moments Always
              </h2>
              <p className="text-amber-100 mb-6 leading-relaxed">
                From our oven to your table — fresh, soft and made with love.
                Every cake tells a story of craftsmanship and care.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["100% Natural", "Freshly Baked Daily", "Fast Delivery"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-white/10 text-sm text-amber-100"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <button className="px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-950 mb-4">
                More Than Just a Bakery
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                At Bake & Bloom, we believe in the power of fresh ingredients,
                authentic recipes, and the joy of sharing something sweet.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Premium Ingredients",
                    desc: "Only the finest natural ingredients in every recipe",
                  },
                  {
                    title: "Handcrafted with Love",
                    desc: "Every item is carefully made by skilled bakers",
                  },
                  {
                    title: "Freshly Baked Daily",
                    desc: "Nothing sits on the shelf — freshness is our promise",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium transition">
                Our Story →
              </button>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80"
                alt="Baker at work"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== BEST SELLERS ========== */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-950">
              Customer Favorites
            </h2>
            <p className="text-slate-500 mt-2">
              Our most loved treats, baked fresh every day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Chocolate Fudge Cake",
                price: "$28",
                img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
              },
              {
                name: "Classic Croissant",
                price: "$4.50",
                img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80",
              },
              {
                name: "Strawberry Cupcakes",
                price: "$18",
                img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&q=80",
              },
              {
                name: "Assorted Macarons",
                price: "$22",
                img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&q=80",
              },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="font-bold text-amber-700">{item.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-950">
              Sweet Words from Our Community
            </h2>
            <p className="text-slate-500 mt-2">
              What our happy customers are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                text: "The best bakery I've ever ordered from! Everything is fresh, tasty and beautifully packed. Absolutely love Bake & Bloom!",
              },
              {
                name: "Michael Chen",
                text: "Their chocolate cake made our anniversary extra special. Soft, rich and simply perfect. Will order again for sure.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-amber-50 rounded-2xl p-6 border border-amber-100"
              >
                <div className="flex text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">Happy Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-950 rounded-3xl px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Get Exclusive Offers & Sweet Updates
              </h2>
              <p className="text-amber-200">
                Subscribe to our newsletter and be the first to know about new
                treats, special deals and more.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 min-w-[260px]"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-amber-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center">
                  <span className="text-white text-lg">🥐</span>
                </div>
                <span className="font-bold text-lg">Bake & Bloom</span>
              </div>
              <p className="text-amber-200/70 text-sm leading-relaxed">
                Freshly baked goods made with love, every single day.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-amber-200/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Menu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-amber-200/70">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cakes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cupcakes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pastries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-amber-200/70">
                <li>+880 123 456 789</li>
                <li>hello@bakeandbloom.com</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-amber-200/50">
            <p>© 2026 Bake & Bloom. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-200">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BakeBloom;
