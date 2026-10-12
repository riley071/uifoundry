interface DesignSkeletonProps {
  title: string;
  category: string;
  description: string;
  accentColor?: string;
}

/**
 * Temporary skeleton used until a real design is built.
 * Replace this component with a full design implementation.
 */
const DesignSkeleton = ({
  title,
  category,
  description,
  accentColor = "#4F46E5",
}: DesignSkeletonProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg" style={{ color: accentColor }}>
            {title}
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">
              Home
            </a>
            <a href="#" className="hover:text-slate-900">
              About
            </a>
            <a href="#" className="hover:text-slate-900">
              Services
            </a>
            <a href="#" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
          <button
            className="px-4 py-2 rounded-lg text-white text-sm font-medium"
            style={{ backgroundColor: accentColor }}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider mb-4"
            style={{ color: accentColor }}
          >
            {category}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 max-w-3xl mx-auto">
            {title}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-6 py-3 rounded-lg text-white font-medium"
              style={{ backgroundColor: accentColor }}
            >
              Explore Now
            </button>
            <button className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features placeholder */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Key Features
            </h2>
            <p className="text-slate-600">
              This is a skeleton. Full design coming soon.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4"
                  style={{ backgroundColor: `${accentColor}20` }}
                />
                <h3 className="font-semibold text-lg mb-2">Feature {i}</h3>
                <p className="text-slate-600 text-sm">
                  Placeholder content for the upcoming full design
                  implementation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-600 mb-8">
            This design is currently a skeleton. The full version will be built
            soon.
          </p>
          <button
            className="px-8 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: accentColor }}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-bold text-lg mb-2">{title}</p>
          <p className="text-slate-400 text-sm">
            © 2026 UIFoundry Design System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DesignSkeleton;
