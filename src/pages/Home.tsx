import { lazy, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { designs } from "../data/designs";
import SceneBoundary from "../components/SceneBoundary";

// Three.js is large, so it loads after the page text has painted.
const HeroScene = lazy(() => import("../components/three/HeroScene"));

const steps = [
  {
    title: "Discover",
    desc: "Browse designs, components and animations built for real projects.",
  },
  {
    title: "Explore",
    desc: "Check design tokens, code examples and every responsive width.",
  },
  {
    title: "Implement",
    desc: "Take the code into your project and adapt it to your brand.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const featured = designs.slice(0, 5);
  const sceneCards = designs.slice(0, 5).map((d) => ({
    slug: d.slug,
    title: d.title,
    image: d.previewImage,
  }));

  const staticFallback = (
    <div className="h-full flex items-center justify-center gap-4 px-4">
      {sceneCards.slice(0, 3).map((c) => (
        <img
          key={c.slug}
          src={c.image}
          alt={c.title}
          className="w-1/3 max-w-xs aspect-[3/2] object-cover rounded-xl shadow-2xl shadow-black/40"
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -right-40 h-[420px] w-[420px] rounded-full bg-violet-600/25 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
          <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.02]">
            Website designs you can open, resize and borrow from.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed">
            Every design runs live in your browser. Check it at phone, tablet
            and desktop widths, read its tokens, then take the code.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/explore"
              className="px-6 py-3 rounded-xl bg-white text-brand-950 font-semibold text-center hover:bg-brand-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950"
            >
              Browse designs
            </Link>
            <Link
              to="/components"
              className="px-6 py-3 rounded-xl border border-white/25 text-white font-medium text-center hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore components
            </Link>
          </div>
        </div>

        {/* 3D stage */}
        <div className="relative mt-6 h-[360px] sm:h-[440px] md:h-[520px]">
          <SceneBoundary fallback={staticFallback}>
            <Suspense fallback={<div className="h-full" aria-hidden />}>
              <HeroScene
                cards={sceneCards}
                onSelect={(slug) => navigate(`/design/${slug}`)}
              />
            </Suspense>
          </SceneBoundary>
          <p className="pointer-events-none absolute bottom-4 inset-x-0 text-center text-sm text-slate-400">
            Move your cursor to tilt the stack. Click a design to open it.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-950">
                Featured designs
              </h2>
              <p className="mt-2 text-slate-600">
                Each one is a full website with a live preview.
              </p>
            </div>
            <Link
              to="/explore"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              View all designs
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:h-[640px]">
            {featured.map((design, i) => (
              <Link
                key={design.id}
                to={`/design/${design.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                  i === 0
                    ? "lg:col-span-2 lg:row-span-2 min-h-[320px]"
                    : "min-h-[240px]"
                }`}
              >
                <img
                  src={design.previewImage}
                  alt={design.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-sm text-slate-300">{design.category}</p>
                  <h3
                    className={`font-semibold text-white ${i === 0 ? "text-2xl" : "text-lg"}`}
                  >
                    {design.title}
                  </h3>
                  {i === 0 && (
                    <p className="mt-1 max-w-md text-sm text-slate-300 line-clamp-2">
                      {design.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-brand-950 mb-12">
            From inspiration to your codebase
          </h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
            <div
              className="hidden md:block absolute top-6 left-6 right-6 h-px bg-brand-100"
              aria-hidden
            />
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="w-12 h-12 rounded-full bg-white border border-brand-100 text-brand-600 font-bold flex items-center justify-center mb-5">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-brand-950 px-8 py-16 text-white">
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl" />
            <div className="relative max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                Start with a design that is already built.
              </h2>
              <p className="text-slate-300 mb-8">
                Open any design, test it on a phone-sized screen, and adapt it
                for your next project.
              </p>
              <Link
                to="/explore"
                className="inline-flex px-6 py-3 rounded-xl bg-white text-brand-950 font-semibold hover:bg-brand-50 transition"
              >
                Browse designs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
