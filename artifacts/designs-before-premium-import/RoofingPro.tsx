const RoofingPro = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-slate-900">
              RP
            </div>
            <span className="font-bold text-lg">Roofing Pro</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              Services
            </a>
            <a href="#" className="hover:text-white transition">
              Projects
            </a>
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <button className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold transition">
            Get Free Estimate
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative h-[580px] md:h-[640px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1632759145351-1d592919fbb1?w=1600&q=80"
          alt="Roofing work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <p className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Premium Roofing Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight mb-5">
            Stronger Roofs.
            <br />
            Safer Tomorrow.
          </h1>
          <p className="text-slate-300 text-lg max-w-lg mb-8">
            High-quality roofing solutions for homes and businesses. Durable
            materials, expert craftsmanship, and peace of mind — all in one
            place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition">
              Get a Free Estimate
            </button>
            <button className="px-7 py-3.5 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition">
              Watch Our Work
            </button>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Durable Materials", desc: "Long-lasting protection" },
              { label: "Expert Team", desc: "Skilled professionals" },
              { label: "On-Time Delivery", desc: "Respect your schedule" },
              { label: "Fully Insured", desc: "Your property is safe" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-semibold text-amber-400">{item.label}</p>
                <p className="text-sm text-slate-400 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Comprehensive Roofing Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From new installations to repairs, we offer a full range of
              roofing services for residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Roof Installation",
                desc: "New roof installations with premium materials and expert care.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                title: "Roof Repair",
                desc: "Fixing leaks, damage and wear before they become bigger issues.",
                icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
              },
              {
                title: "Metal Roofing",
                desc: "Strong, stylish and built to last for decades.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Flat Roofing",
                desc: "Reliable flat roofing solutions for modern buildings.",
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
              },
              {
                title: "Roof Inspection",
                desc: "Detailed inspections to protect your investment.",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
              {
                title: "Gutters & Drainage",
                desc: "Keep water away and protect your foundation.",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition">
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
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4">{service.desc}</p>
                <a
                  href="#"
                  className="text-sm font-medium text-amber-600 hover:text-amber-700"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Reliable Roofing Built on Trust
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We're not just fixing a building — we're protecting what matters
                most. Choose Roofing Pro for quality, honesty, and long-lasting
                results.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-amber-400">5+</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-400">1,200+</p>
                  <p className="text-sm text-slate-400 mt-1">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-400">98%</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Satisfaction Rate
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition">
                Learn More About Us
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Beautiful home"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Simple Steps to a Stronger Roof
            </h2>
            <p className="text-slate-500">
              From the first call to final inspection, we make the process easy
              and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We understand your needs and assess your property.",
              },
              {
                step: "02",
                title: "Estimate",
                desc: "Get a clear, detailed quote with no hidden costs.",
              },
              {
                step: "03",
                title: "Installation",
                desc: "Our team gets to work with precision and care.",
              },
              {
                step: "04",
                title: "Final Check",
                desc: "We ensure everything is perfect and fully protected.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-900 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Quality Work. Real Results.
              </h2>
              <p className="text-slate-500 mt-1">
                Take a look at some of our recent roofing projects.
              </p>
            </div>
            <a
              href="#"
              className="text-amber-600 font-medium text-sm hover:underline hidden sm:block"
            >
              View Our Projects →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
            ].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden aspect-[4/3] group"
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-slate-500">
              We're proud to deliver quality work and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "James Carter",
                role: "Homeowner",
                text: "Roofing Pro did an amazing job on our new roof. The team was professional, on time, and the quality is outstanding.",
              },
              {
                name: "Sarah Mitchell",
                role: "Business Owner",
                text: "Fast, reliable and very professional. They explained everything clearly and delivered beyond our expectations.",
              },
              {
                name: "David Wilson",
                role: "Homeowner",
                text: "Great service from start to finish. Our roof looks fantastic and we feel much safer now. Highly recommend!",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex text-amber-400 text-sm mb-4">★★★★★</div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Stronger, Safer Roof?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Get your free estimate today and let our experts handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold transition">
              Get a Free Estimate
            </button>
            <a
              href="tel:+15552487633"
              className="text-slate-300 hover:text-white font-medium"
            >
              Call Us: +1 (555) 248-ROOF
            </a>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-950 text-white pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-slate-900">
                  RP
                </div>
                <span className="font-bold text-lg">Roofing Pro</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Built Strong. Covered Always.
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
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Roof Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Roof Repair
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Metal Roofing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Flat Roofing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+1 (555) 248-ROOF</li>
                <li>hello@roofingpro.com</li>
                <li>123 Roofing Ave, New York</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 Roofing Pro. All rights reserved.</p>
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

export default RoofingPro;
