const CarBooking = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-yellow-500 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-slate-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <span className="font-bold text-lg">DriveGo</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              Cars
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

          <button className="px-5 py-2.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-slate-900 text-sm font-semibold transition">
            Sign In / Register
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative h-[600px] md:h-[680px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&q=80"
          alt="Luxury car"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <p className="text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Premium Car Rental
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight mb-5">
            Drive Your Next Journey
          </h1>
          <p className="text-slate-200 text-lg max-w-lg mb-8">
            Book the perfect car for your next trip — affordable rates, premium
            vehicles, and instant booking all in one place.
          </p>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {["Rent a Car", "Airport Transfer", "Long Term"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    i === 0
                      ? "bg-yellow-500 text-slate-900"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="lg:col-span-1">
                <label className="text-xs text-slate-400 font-medium">
                  Pick-up Location
                </label>
                <input
                  type="text"
                  placeholder="Select location"
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-medium">
                  Drop-off Location
                </label>
                <input
                  type="text"
                  placeholder="Select location"
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-medium">
                  Pick-up Date
                </label>
                <input
                  type="text"
                  placeholder="Select date"
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-medium">
                  Drop-off Date
                </label>
                <input
                  type="text"
                  placeholder="Select date"
                  className="w-full mt-1 px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full py-2.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold text-sm transition">
                  Search Cars
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "No Hidden Fees", desc: "Transparent pricing always" },
              { title: "24/7 Support", desc: "We're always there for you" },
              { title: "Easy Booking", desc: "Book in minutes, not hours" },
              {
                title: "Fully Insured",
                desc: "Drive with complete peace of mind",
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

      {/* ========== TOP BRANDS ========== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Drive Your Favorite Brand
            </h2>
            <a
              href="#"
              className="text-yellow-600 text-sm font-medium hover:underline"
            >
              View All Brands →
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70">
            {[
              "Toyota",
              "BMW",
              "Mercedes",
              "Audi",
              "Honda",
              "Ford",
              "Chevrolet",
              "Lexus",
            ].map((brand) => (
              <span
                key={brand}
                className="text-lg font-semibold text-slate-500 hover:text-slate-800 transition cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">
              Choose Your Perfect Ride
            </h2>
            <p className="text-slate-400">
              From economy to luxury, find the right car for every occasion and
              budget
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Economy Cars", icon: "🚗" },
              { name: "SUVs", icon: "🚙" },
              { name: "Luxury Cars", icon: "🏎️" },
              { name: "Vans & MPVs", icon: "🚐" },
              { name: "Sports Cars", icon: "🏁" },
            ].map((cat) => (
              <a
                key={cat.name}
                href="#"
                className="flex flex-col items-center p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition text-center"
              >
                <span className="text-3xl mb-3">{cat.icon}</span>
                <span className="font-medium text-sm">{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED CARS ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Featured Cars
              </h2>
              <p className="text-slate-500 mt-1">
                Handpicked vehicles for your comfort and style
              </p>
            </div>
            <a
              href="#"
              className="text-yellow-600 text-sm font-medium hover:underline hidden sm:block"
            >
              View All Cars →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Toyota Corolla 2023",
                type: "Economy",
                price: "$45",
                seats: 5,
                trans: "Automatic",
                img: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=600&q=80",
              },
              {
                name: "BMW 5 Series 2024",
                type: "Luxury",
                price: "$89",
                seats: 5,
                trans: "Automatic",
                img: "https://images.unsplash.com/photo-1555215695-3004980adade?w=600&q=80",
              },
              {
                name: "Range Rover Sport 2024",
                type: "SUV",
                price: "$129",
                seats: 5,
                trans: "Automatic",
                img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
              },
              {
                name: "Mercedes C-Class 2023",
                type: "Luxury",
                price: "$95",
                seats: 5,
                trans: "Automatic",
                img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
              },
              {
                name: "Ford Mustang 2022",
                type: "Sports",
                price: "$109",
                seats: 4,
                trans: "Manual",
                img: "https://images.unsplash.com/photo-1584345604476-8ec5f82d545f?w=600&q=80",
              },
              {
                name: "Toyota Hiace 2023",
                type: "Van",
                price: "$79",
                seats: 12,
                trans: "Automatic",
                img: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&q=80",
              },
            ].map((car) => (
              <div
                key={car.name}
                className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition bg-white"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-700">
                      {car.type}
                    </span>
                    <p className="font-bold text-lg text-slate-900">
                      {car.price}
                      <span className="text-sm font-normal text-slate-400">
                        /day
                      </span>
                    </p>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3">
                    {car.name}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span>{car.seats} Seats</span>
                    <span>·</span>
                    <span>{car.trans}</span>
                    <span>·</span>
                    <span>A/C</span>
                  </div>
                  <button className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                More Than Just a Car Rental
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                At DriveGo, we make your journey smoother, safer, and more
                enjoyable with trusted cars, transparent pricing, and
                round-the-clock support.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Wide Selection",
                    desc: "Hundreds of cars for every need",
                  },
                  {
                    title: "Best Price Guarantee",
                    desc: "Find the best rates, no hidden costs",
                  },
                  {
                    title: "24/7 Support",
                    desc: "We're always there, whenever you need us",
                  },
                  {
                    title: "Easy Booking",
                    desc: "Book online in just a few minutes",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center mb-3">
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
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                alt="Happy driver"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "25K+", label: "Happy Customers" },
              { value: "50+", label: "Cities Worldwide" },
              { value: "4.8/5", label: "Average Rating" },
              { value: "24/7", label: "Customer Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-yellow-400">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              What Our Customers Say
            </h2>
            <p className="text-slate-500 mt-2">
              Real experiences. Real people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "James Carter",
                place: "USA",
                text: "The booking process was super easy, and the car was in perfect condition. Highly recommend!",
              },
              {
                name: "Sophia Williams",
                place: "UK",
                text: "Great service, affordable prices, and excellent support. Will definitely use again.",
              },
              {
                name: "Daniel Smith",
                place: "Canada",
                text: "Professional, reliable and no hidden fees. The best car rental experience I've had.",
              },
              {
                name: "Emma Johnson",
                place: "Australia",
                text: "Clean cars, easy booking and amazing customer service. Highly recommended!",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center font-semibold text-sm">
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
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
                alt="Special offer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-2">
                Special Offer
              </p>
              <h2 className="text-3xl font-bold text-white mb-3">
                Up to 40% OFF
              </h2>
              <p className="text-slate-300 mb-6">
                Book now and save big on your next adventure. Limited time
                offer.
              </p>
              <button className="self-start px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-semibold transition">
                View Deals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-yellow-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-slate-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
                  </svg>
                </div>
                <span className="font-bold text-lg">DriveGo</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your trusted partner for car rentals worldwide.
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
                    Cars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
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
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+1 (800) 123-4567</li>
                <li>support@drivego.com</li>
                <li>New York, USA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 DriveGo. All rights reserved.</p>
            <div className="flex gap-4 text-xs">
              <span className="px-2 py-1 border border-slate-700 rounded">
                Visa
              </span>
              <span className="px-2 py-1 border border-slate-700 rounded">
                Mastercard
              </span>
              <span className="px-2 py-1 border border-slate-700 rounded">
                PayPal
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CarBooking;
