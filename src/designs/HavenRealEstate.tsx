const HavenRealEstate = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </div>
            <span className="font-bold text-lg">Haven</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              Properties
            </a>
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Services
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <button className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold transition">
            Get Started
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative h-[600px] md:h-[680px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt="Luxury modern house"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Premium Properties · Better Living
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight mb-5">
            Find Your Dream Property Anywhere in the World
          </h1>
          <p className="text-slate-200 text-lg max-w-lg mb-8">
            From luxury homes to smart investments, we help you find the perfect
            property with trust, expertise and global access.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-3 flex flex-col sm:flex-row gap-2 max-w-3xl">
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
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">Location</p>
                <input
                  type="text"
                  placeholder="Select Location"
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">Property Type</p>
                <input
                  type="text"
                  placeholder="Any Type"
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">Price Range</p>
                <input
                  type="text"
                  placeholder="Any Price"
                  className="w-full text-sm font-medium text-slate-800 placeholder-slate-400 outline-none bg-transparent"
                />
              </div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-xl px-6 py-3 font-semibold transition flex items-center justify-center gap-2">
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
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Why Choose Haven?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We make real estate simple, transparent and stress-free. With
              global listings, expert support and modern tools, we help you make
              the right move with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Global Listings",
                desc: "Access properties across the world",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Verified Properties",
                desc: "Trusted & secure listings only",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Expert Support",
                desc: "Help from real estate professionals",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                title: "Smart Tools",
                desc: "Search, compare and decide easily",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl hover:bg-slate-50 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
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

      {/* ========== FEATURED PROPERTIES ========== */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold">
                Popular Properties Around the World
              </h2>
              <p className="text-slate-400 mt-1">
                Handpicked homes and investments
              </p>
            </div>
            <a
              href="#"
              className="text-amber-400 text-sm font-medium hover:underline hidden sm:block"
            >
              View All Properties →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Modern Villa in Dubai",
                price: "$2,500,000",
                beds: 5,
                baths: 4,
                sqft: "5,200",
                img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
              },
              {
                title: "Luxury Apartment in London",
                price: "$1,800,000",
                beds: 3,
                baths: 2,
                sqft: "2,100",
                img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
              },
              {
                title: "Beachfront Home in California",
                price: "$3,250,000",
                beds: 4,
                baths: 3,
                sqft: "3,800",
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
              },
              {
                title: "Family Home in Toronto",
                price: "$1,250,000",
                beds: 4,
                baths: 3,
                sqft: "3,400",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
              },
            ].map((prop) => (
              <a
                key={prop.title}
                href="#"
                className="group block rounded-2xl overflow-hidden bg-slate-800 hover:bg-slate-750 transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={prop.img}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-amber-400 font-bold text-lg mb-1">
                    {prop.price}
                  </p>
                  <h3 className="font-semibold text-white mb-2 text-sm">
                    {prop.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{prop.beds} Beds</span>
                    <span>·</span>
                    <span>{prop.baths} Baths</span>
                    <span>·</span>
                    <span>{prop.sqft} sqft</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INVESTMENT ========== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden bg-slate-900 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="City skyline"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-2">
                Investment Opportunity
              </p>
              <h2 className="text-3xl font-bold text-white mb-3">
                Smart Investments for a Brighter Future
              </h2>
              <p className="text-slate-300 mb-6">
                Explore high-value properties in the world's top markets and
                grow your wealth with confidence.
              </p>
              <div className="flex items-center gap-6 mb-6">
                <div>
                  <p className="text-2xl font-bold text-amber-400">+12.5%</p>
                  <p className="text-xs text-slate-400">
                    Average Annual Growth
                  </p>
                </div>
              </div>
              <button className="self-start px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition">
                Explore Investment Properties →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Explore Properties by Category
            </h2>
            <p className="text-slate-500 mt-2">
              Find the perfect property type that fits your lifestyle and goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                name: "Residential",
                desc: "Homes & Villas",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80",
              },
              {
                name: "Apartments",
                desc: "Modern Living",
                img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80",
              },
              {
                name: "Commercial",
                desc: "Offices & Retail",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80",
              },
              {
                name: "Land",
                desc: "Build Your Future",
                img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=80",
              },
              {
                name: "Luxury",
                desc: "Exclusive Properties",
                img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&q=80",
              },
              {
                name: "Vacation Rentals",
                desc: "Short & Long Stay",
                img: "https://images.unsplash.com/photo-1499793983670-d8c2baca6c6a?w=500&q=80",
              },
            ].map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="group relative rounded-2xl overflow-hidden aspect-[16/10]"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-semibold text-white text-lg">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-300">{cat.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS + TESTIMONIAL ========== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            {[
              { value: "50K+", label: "Happy Clients" },
              { value: "100+", label: "Countries" },
              { value: "200K+", label: "Properties Listed" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
                What Our Clients Say
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Real Stories, Real Satisfaction
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                "Haven made our international property purchase so easy. Their
                team was professional, responsive and always in our corner."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-white">Sarah Mitchell</p>
                  <p className="text-sm text-slate-400">Property Buyer · USA</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative rounded-2xl overflow-hidden aspect-[16/10] w-full">
              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=700&q=80"
                alt="Happy clients"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            Let our real estate experts guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition">
              Contact Our Experts
            </button>
            <button className="px-8 py-3.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-white transition">
              Browse Properties
            </button>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-slate-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                  </svg>
                </div>
                <span className="font-bold text-lg">Haven</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Global Properties. Local Experts.
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
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Property Types</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Residential
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Commercial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Land
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Luxury
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+1 (555) 123-4567</li>
                <li>support@haven.com</li>
                <li>New York, NY, USA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 Haven. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HavenRealEstate;
