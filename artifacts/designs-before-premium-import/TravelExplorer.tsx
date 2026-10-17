const TravelExplorer = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <span className="font-bold text-lg text-slate-900">Travel.com</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-sky-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-sky-600 transition">
              Destinations
            </a>
            <a href="#" className="hover:text-sky-600 transition">
              About
            </a>
            <a href="#" className="hover:text-sky-600 transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-medium text-slate-600 hover:text-sky-600">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative h-[560px] md:h-[640px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
          alt="Tropical destination"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <p className="text-sky-300 text-sm font-medium mb-3 tracking-wide">
            Explore · Discover · Create Memories
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-xl leading-tight mb-4">
            Your Next Adventure Starts Here
          </h1>
          <p className="text-slate-200 text-lg max-w-md mb-8">
            Find the best destinations, amazing deals and unforgettable
            experiences.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-2 sm:p-3 flex flex-col sm:flex-row gap-2 max-w-3xl">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50">
              <svg
                className="w-5 h-5 text-slate-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">Where to?</p>
                <input
                  type="text"
                  placeholder="Search destination"
                  className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="hidden sm:block w-px bg-slate-200 my-2" />

            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50">
              <svg
                className="w-5 h-5 text-slate-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">When?</p>
                <input
                  type="text"
                  placeholder="Select dates"
                  className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="hidden sm:block w-px bg-slate-200 my-2" />

            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50">
              <svg
                className="w-5 h-5 text-slate-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">Travelers</p>
                <input
                  type="text"
                  placeholder="2 Adults"
                  className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
                />
              </div>
            </div>

            <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-xl px-6 py-3 font-medium transition flex items-center justify-center gap-2">
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
              <span className="sm:hidden">Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========== POPULAR DESTINATIONS ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Popular Destinations
              </h2>
              <p className="text-slate-500 mt-1">
                Discover the world's most loved places
              </p>
            </div>
            <a
              href="#"
              className="text-sky-600 text-sm font-medium hover:underline hidden sm:block"
            >
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Bali",
                country: "Indonesia",
                price: "$499",
                img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
              },
              {
                name: "Santorini",
                country: "Greece",
                price: "$799",
                img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
              },
              {
                name: "Dubai",
                country: "UAE",
                price: "$699",
                img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
              },
              {
                name: "Phuket",
                country: "Thailand",
                price: "$549",
                img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&q=80",
              },
            ].map((dest) => (
              <a
                key={dest.name}
                href="#"
                className="group block rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {dest.name}
                      </h3>
                      <p className="text-sm text-slate-500">{dest.country}</p>
                    </div>
                    <p className="font-bold text-sky-600">{dest.price}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROMO BANNER ========== */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-sky-900">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80"
              alt="Adventure"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative px-8 py-14 md:px-16 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-lg">
                <p className="text-sky-300 text-sm font-medium mb-2">
                  TRAVEL MORE
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Discover New Places, Create Lasting Memories
                </h2>
                <p className="text-sky-100 mb-6">
                  Explore the world with curated trips, exclusive deals and
                  hassle-free bookings.
                </p>
                <button className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
                  Plan Your Trip →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Why Choose Travel.com?
            </h2>
            <p className="text-slate-500 mt-2">
              More than just a booking platform — we're your travel partner.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Secure Booking",
                desc: "Your payments are 100% safe",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "24/7 Support",
                desc: "We're here whenever you need us",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                title: "Best Price Guarantee",
                desc: "Get the best deals always",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Trusted by Millions",
                desc: "Join happy travelers worldwide",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl hover:bg-slate-50 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-4">
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

      {/* ========== FEATURED TRIPS ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Featured Trips
              </h2>
              <p className="text-slate-500 mt-1">
                Handpicked experiences for your next journey
              </p>
            </div>
            <a
              href="#"
              className="text-sky-600 text-sm font-medium hover:underline hidden sm:block"
            >
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "7 Days Europe Tour",
                price: "$1,299",
                rating: "4.9",
                img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=700&q=80",
              },
              {
                title: "5 Days Maldives Getaway",
                price: "$999",
                rating: "4.8",
                img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&q=80",
              },
              {
                title: "10 Days Japan Explorer",
                price: "$1,499",
                rating: "4.9",
                img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&q=80",
              },
            ].map((trip) => (
              <a
                key={trip.title}
                href="#"
                className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={trip.img}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-amber-400 text-sm mb-2">
                    {"★".repeat(5)}{" "}
                    <span className="text-slate-500 ml-1">{trip.rating}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">
                    {trip.title}
                  </h3>
                  <p className="font-bold text-sky-600 text-lg">{trip.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Top Travel Categories
            </h2>
            <p className="text-slate-500 mt-2">
              Find the perfect trip for your style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                name: "Beach",
                desc: "Relax & Unwind",
                color: "bg-sky-50 text-sky-600",
              },
              {
                name: "Adventure",
                desc: "Feel the Thrill",
                color: "bg-orange-50 text-orange-600",
              },
              {
                name: "Culture",
                desc: "Explore Heritage",
                color: "bg-violet-50 text-violet-600",
              },
              {
                name: "City Breaks",
                desc: "Discover Cities",
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                name: "Nature",
                desc: "Breathe Fresh Air",
                color: "bg-green-50 text-green-600",
              },
              {
                name: "Luxury",
                desc: "Travel in Style",
                color: "bg-amber-50 text-amber-600",
              },
              {
                name: "Family",
                desc: "Create Together",
                color: "bg-pink-50 text-pink-600",
              },
              {
                name: "Honeymoon",
                desc: "Romance Awaits",
                color: "bg-rose-50 text-rose-600",
              },
            ].map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="flex flex-col items-center p-6 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-sm transition text-center"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-3 text-2xl font-bold`}
                >
                  {cat.name[0]}
                </div>
                <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{cat.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Traveler Stories
            </h2>
            <p className="text-slate-500 mt-2">
              Real people. Real experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                place: "Bali, Indonesia",
                text: "Travel.com made our Bali trip so easy! The booking process was simple and the experience was beyond amazing.",
              },
              {
                name: "Daniel Smith",
                place: "Santorini, Greece",
                text: "The views, the hotel, everything was perfect. Will definitely book again with Travel.com!",
              },
              {
                name: "Priya Sharma",
                place: "Dubai, UAE",
                text: "Excellent service and great support. Our family trip was truly unforgettable. Highly recommended!",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-4">
                  ★★★★★
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold">
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
          <div className="rounded-3xl overflow-hidden bg-slate-900 flex flex-col md:flex-row">
            <div className="md:w-1/2 relative min-h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80"
                alt="Special offer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-sky-400 text-sm font-medium mb-2">
                SPECIAL OFFER
              </p>
              <h2 className="text-3xl font-bold text-white mb-3">
                Up to 50% Off on Your Dream Trip
              </h2>
              <p className="text-slate-300 mb-6">
                Limited time offer. Book now and save more on your next
                adventure.
              </p>
              <button className="self-start px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
                Explore Deals →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <span className="font-bold text-lg">Travel.com</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Explore the world, one trip at a time.
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
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Popular Destinations</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Bali
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Santorini
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Dubai
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Phuket
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>hello@travel.com</li>
                <li>+880 123 456 789</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 Travel.com. All rights reserved.</p>
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

export default TravelExplorer;
