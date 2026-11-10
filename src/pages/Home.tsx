import { lazy, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { designs } from "../data/designs";
import SceneBoundary from "../components/SceneBoundary";
import { effects } from "../effects/catalog";

const effectCollections = [
  { id: "backgrounds", title: "Backgrounds", description: "Set the scene with glowing grids, flowing waves, starfields, and atmospheric color.", examples: "Perspective Grid · Spectral Drape · Aurora Blur", color: "#a78bfa" },
  { id: "text", title: "Text effects", description: "Bring headlines to life with expressive lettering, flickering type, and animated reveals.", examples: "Glitch Text · Wave Lettering · Smoke Type", color: "#67e8f9" },
  { id: "cursors", title: "Cursor effects", description: "Turn pointer movement into playful trails, glowing halos, and responsive fields.", examples: "Chroma Halo · Drafting Cursor · Pixel Magnet", color: "#f9a8d4" },
];

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
            Designs, components and effects. Ready to explore.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed">
            Discover full website designs, reusable sections, animated backgrounds,
            expressive text, and cursor effects. Try live previews and make them your own.
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
            <Link to="/components/backgrounds" className="px-6 py-3 rounded-xl border border-violet-400/50 bg-violet-400/10 text-violet-200 font-medium text-center hover:bg-violet-400/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300">
              Discover {effects.length} effects
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400" aria-label="Available collections">
            <span>{designs.length} website designs</span>
            <Link to="/components" className="hover:text-white underline underline-offset-4">Reusable UI sections</Link>
            {effectCollections.map(collection => <Link key={collection.id} to={`/components/${collection.id}`} className="hover:text-white underline underline-offset-4">{effects.filter(effect => effect.kind === collection.id).length} {collection.title.toLowerCase()}</Link>)}
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

      {/* Effects collections */}
      <section aria-labelledby="home-effects-title" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-brand-600">Explore the effects collection</p>
              <h2 id="home-effects-title" className="text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">Add a little motion. Make it memorable.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">{effects.length} interactive studies across backgrounds, text, and cursors. Search the galleries, change the accent color, pause the motion, and copy the source.</p>
            </div>
            <Link to="/motion" className="py-3 text-sm font-medium text-brand-600 hover:text-brand-700">Try Motion Lab →</Link>
          </div>
          <Link to="/motion/studio" className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-brand-950 p-6 text-white hover:bg-brand-900"><div><p className="text-xs font-semibold uppercase tracking-widest text-lime-300">Motion Studio</p><h3 className="mt-2 text-xl font-semibold">Timelines, SVG, text, scroll, drag, and more.</h3><p className="mt-2 text-sm text-slate-300">54 interactive recipes across every motion category, with motion controls and source.</p></div><span className="text-sm font-semibold text-lime-300">Explore Motion Studio →</span></Link>
          <div className="grid gap-6 md:grid-cols-3">
            {effectCollections.map(collection => <Link key={collection.id} to={`/components/${collection.id}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4">
              <div aria-hidden="true" className="relative flex h-52 items-center justify-center overflow-hidden bg-[#080b16]" style={{ color: collection.color }}>
                <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at center, ${collection.color}, transparent 70%)` }} />
                {collection.id === 'backgrounds' ? <div className="absolute -inset-x-20 -bottom-24 h-80 opacity-70" style={{ backgroundImage: `linear-gradient(${collection.color}55 1px, transparent 1px), linear-gradient(90deg, ${collection.color}55 1px, transparent 1px)`, backgroundSize: '32px 32px', transform: 'perspective(240px) rotateX(55deg)' }} /> : collection.id === 'text' ? <div className="relative -rotate-6 text-center text-4xl font-extrabold tracking-tighter"><span className="block opacity-20 blur-[2px]">Make it move.</span><span className="block">Make it move.</span><span className="block opacity-20 blur-[2px]">Make it move.</span></div> : <div className="relative flex items-center gap-3">{[8, 12, 18, 28, 44].map((size, i) => <span key={size} className="rounded-full border" style={{ width: size, height: size, opacity: (i + 1) / 5, transform: `translateY(${Math.sin(i) * 20}px)`, boxShadow: `0 0 ${size}px ${collection.color}44` }} />)}<svg className="h-9 w-9 -rotate-12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 2l16 12-8 1-4 7z" /></svg></div>}
                <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[.2em] text-white/40">Collection preview</span>
              </div>
              <div className="p-6"><div className="flex items-center justify-between gap-2"><h3 className="text-xl font-semibold text-brand-950">{collection.title}</h3><span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-600">{effects.filter(effect => effect.kind === collection.id).length} effects</span></div><p className="mt-3 text-sm leading-6 text-slate-600">{collection.description}</p><p className="mt-4 text-xs leading-6 text-slate-400">{collection.examples}</p><span className="mt-5 inline-block text-sm font-semibold text-brand-600 group-hover:underline">Explore {collection.title.toLowerCase()} →</span></div>
            </Link>)}
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-500">Original UIFoundry studies with shared animation families and simplified behavior. Live galleries include reduced-motion support and copyable React, Canvas, and CSS source.</p>
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
                Build the page. Add your signature.
              </h2>
              <p className="text-slate-300 mb-8">
                Start with a website design or reusable section, then explore
                backgrounds, animated text, and cursor effects to give it personality.
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
