const LayerPoultry = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center">
              <span className="text-white text-lg">🐔</span>
            </div>
            <div>
              <span className="font-bold text-lg text-green-900">
                Layer Poultry
              </span>
              <span className="text-xs text-green-600 block -mt-1">
                Farm.com
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-green-700 transition">
              Home
            </a>
            <a href="#" className="hover:text-green-700 transition">
              About
            </a>
            <a href="#" className="hover:text-green-700 transition">
              Products
            </a>
            <a href="#" className="hover:text-green-700 transition">
              Services
            </a>
            <a href="#" className="hover:text-green-700 transition">
              Blog
            </a>
            <a href="#" className="hover:text-green-700 transition">
              Contact
            </a>
          </nav>

          <button className="px-5 py-2.5 rounded-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold transition">
            Get a Quote
          </button>
        </div>
      </header>

      {/* ========== HERO ========== */}
      <section className="relative h-[560px] md:h-[620px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548550023-2bdb3ff3da1d?w=1600&q=80"
          alt="Healthy chickens"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/85 via-green-950/60 to-green-950/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {["Fresh Eggs", "Healthy Birds", "Sustainable Farming"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-green-800/60 text-green-200 text-xs font-medium border border-green-600/40"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight mb-5">
            Quality Layer Poultry Farming for a{" "}
            <span className="text-yellow-400">Healthier Tomorrow</span>
          </h1>
          <p className="text-green-100 text-lg max-w-lg mb-8">
            We provide high-quality layer chickens, fresh eggs and reliable
            poultry farming solutions for homes, businesses and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-green-950 font-semibold transition">
              Explore Our Farm
            </button>
            <button className="px-7 py-3.5 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="bg-white border-b border-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "50K+", label: "Healthy Layers" },
              { value: "Daily", label: "Fresh Eggs" },
              { value: "100%", label: "Safe & Natural" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-green-800">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRODUCTS & SERVICES ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-950 mb-3">
              Everything You Need for Healthy Poultry Farming
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From high-quality layer chickens to fresh eggs and farm support,
              we provide complete solutions for sustainable and better
              productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Layer Chickens",
                desc: "High-quality, disease-free layer chickens for maximum egg production.",
                icon: "🐔",
              },
              {
                title: "Fresh Eggs",
                desc: "Nutritious, farm-fresh eggs daily packed with natural goodness.",
                icon: "🥚",
              },
              {
                title: "Poultry Feed",
                desc: "Balanced nutrition for healthy and productive layers.",
                icon: "🌾",
              },
              {
                title: "Farm Support",
                desc: "Guidance and support for better management and growth.",
                icon: "🤝",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-md transition bg-white text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-green-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{item.desc}</p>
                <a
                  href="#"
                  className="text-sm font-medium text-green-700 hover:text-green-800"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="py-16 bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80"
                alt="Farm worker with chicken"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Committed to Better Farming and Healthier Lives
              </h2>
              <p className="text-green-100 mb-6 leading-relaxed">
                At Layer Poultry Farm, we focus on quality, sustainability and
                customer satisfaction. Our modern farming practices ensure
                healthy birds and fresh, high-quality eggs for your family and
                business.
              </p>
              <button className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-green-950 font-semibold transition">
                Learn More
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
              <h2 className="text-3xl font-bold text-green-950 mb-4">
                Why Layer Poultry Farm Stands Out
              </h2>
              <p className="text-slate-600 mb-8">
                We combine modern farming techniques with a commitment to
                quality, ensuring healthy birds, fresh eggs and long-term value
                for our customers.
              </p>
              <div className="space-y-4">
                {[
                  "Healthy & high-quality layer chickens",
                  "Fresh, nutritious eggs every day",
                  "Clean and well-maintained farm environment",
                  "Reliable supply and customer support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-medium transition">
                Learn More
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1548550023-2bdb3ff3da1d?w=800&q=80"
                alt="Chickens in farm"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== IMPACT ========== */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-green-950">
              Growing Together for a Healthier Future
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
              Our commitment to quality, sustainability and customer
              satisfaction drives us to make a positive impact in the poultry
              industry and the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50K+", label: "Healthy Layers" },
              { value: "Daily", label: "Fresh Eggs" },
              { value: "100+", label: "Happy Customers" },
              { value: "10+", label: "Years of Experience" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-green-100"
              >
                <p className="text-2xl font-bold text-green-800">
                  {item.value}
                </p>
                <p className="text-sm text-slate-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FRESH EGGS ========== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-950 mb-4">
                Nature's Goodness in Every Egg
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Rich in nutrition, farm-fresh and naturally produced for a
                healthier you.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { title: "High Protein", icon: "💪" },
                  { title: "Rich in Vitamins", icon: "✨" },
                  { title: "100% Natural", icon: "🌿" },
                  { title: "No Added Hormones", icon: "❤️" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium text-slate-700">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-medium transition">
                Order Now →
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=80"
                alt="Fresh eggs in basket"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Farm Fresh Eggs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-950">
              Trusted by Farmers, Families and Businesses
            </h2>
            <p className="text-slate-500 mt-2">
              We're proud to be a trusted partner in poultry farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rahim Uddin",
                role: "Farm Owner",
                text: "Excellent quality chickens and fresh eggs. Their support team is very helpful and professional.",
              },
              {
                name: "Safia Akter",
                role: "Retailer",
                text: "The eggs are always fresh and healthy. A reliable partner for my business.",
              },
              {
                name: "Md. Hasan",
                role: "Local Distributor",
                text: "Great service and consistent quality. Highly recommended!",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
              >
                <p className="text-slate-600 mb-5 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 flex items-center justify-center font-semibold">
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

      {/* ========== FAQ ========== */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-green-950">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 mt-2">
              Find quick answers to common questions about our products,
              services and poultry farming.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "What type of layer chickens do you provide?",
              "Are your eggs organic and hormone-free?",
              "Do you offer delivery services?",
              "Can I visit your farm?",
              "How can I place an order?",
            ].map((q) => (
              <div
                key={q}
                className="border border-green-100 rounded-xl px-5 py-4 flex items-center justify-between hover:border-green-300 transition cursor-pointer"
              >
                <span className="font-medium text-slate-800 text-sm">{q}</span>
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-16 bg-green-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Partner with Us for Sustainable Growth
          </h2>
          <p className="text-green-200 mb-8 max-w-xl mx-auto">
            Get the best quality layer chickens, fresh eggs and expert support
            for your poultry business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
            {[
              "Trusted Quality",
              "On-Time Delivery",
              "Expert Guidance",
              "Long-Term Support",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-400"
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
                {item}
              </span>
            ))}
          </div>
          <button className="px-8 py-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-green-950 font-semibold transition">
            Get in Touch
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-green-950 text-white pt-14 pb-8 border-t border-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center">
                  <span className="text-white text-lg">🐔</span>
                </div>
                <div>
                  <span className="font-bold text-lg">Layer Poultry</span>
                  <span className="text-xs text-green-400 block -mt-0.5">
                    Farm.com
                  </span>
                </div>
              </div>
              <p className="text-green-300/70 text-sm leading-relaxed">
                Quality Layer Chickens · Fresh Eggs · Sustainable Farming
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-green-300/70">
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
                    Products
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
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-green-300/70">
                <li>Rangpur, Bangladesh</li>
                <li>+880 1712 345678</li>
                <li>info@layerpoultryfarm.com</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get a Quote</h4>
              <p className="text-sm text-green-300/70 mb-3">
                Ready to start your poultry journey?
              </p>
              <button className="px-5 py-2.5 rounded-full bg-yellow-500 hover:bg-yellow-400 text-green-950 text-sm font-semibold transition">
                Get a Quote →
              </button>
            </div>
          </div>

          <div className="border-t border-green-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-green-400/50">
            <p>© 2026 Layer Poultry Farm. All rights reserved.</p>
            <p>Healthy Birds · Fresh Eggs · Better Tomorrow</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LayerPoultry;
