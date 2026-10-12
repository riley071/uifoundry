import { Link } from 'react-router-dom';
import { designs } from '../data/designs';

const Home = () => {
  const featured = designs.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-950 mb-5">
            Discover. Explore. Build.
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto mb-8">
            Beautiful website designs, components and animations ready for real projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-8">
            <input
              type="search"
              placeholder="Search designs, components, animations..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition whitespace-nowrap">
              Search
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/explore"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 text-white font-medium hover:from-brand-700 hover:to-violet-700 transition shadow-lg shadow-brand-500/25"
            >
              Browse Designs →
            </Link>
            <Link
              to="/components"
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition"
            >
              Explore Components
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-brand-950">Featured Website Systems</h2>
            <Link to="/explore" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              View all systems →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((design) => (
              <Link
                key={design.id}
                to={`/design/${design.slug}`}
                className="group card hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={design.previewImage}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-1">
                    {design.category}
                  </p>
                  <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-brand-600 transition">
                    {design.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {design.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-brand-950 mb-2">How it works</h2>
            <p className="text-slate-600">From inspiration to implementation in three simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'Browse stunning designs, components and animations crafted for real-world projects.' },
              { step: '02', title: 'Explore', desc: 'Inspect details, design tokens, responsive views and clean code examples.' },
              { step: '03', title: 'Implement', desc: 'Copy clean code, integrate seamlessly and build exceptional digital experiences faster.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-100 text-brand-600 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-brand-600 to-violet-600 px-8 py-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Built for designers and developers</h2>
            <p className="text-brand-100 mb-6 max-w-md mx-auto">
              Save time. Ship faster. Focus on what matters.
            </p>
            <Link
              to="/explore"
              className="inline-flex px-6 py-3 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition"
            >
              Get Started Free →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
