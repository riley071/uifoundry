/**
 * Car Booking — "VISTA"
 * Premier, editorial car rental experience.
 * Dark photographic hero, restrained accent, typographic hierarchy.
 * React + Tailwind only. No extra deps.
 */
import { useState } from "react";

const cars = [
  {
    name: "Porsche 911 Carrera",
    class: "Sport",
    price: 289,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
    specs: ["2 seats", "PDK", "Petrol"],
  },
  {
    name: "Range Rover Autobiography",
    class: "SUV",
    price: 245,
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80",
    specs: ["5 seats", "Auto", "Hybrid"],
  },
  {
    name: "Mercedes-AMG C 63",
    class: "Sedan",
    price: 198,
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=80",
    specs: ["5 seats", "Auto", "Petrol"],
  },
  {
    name: "BMW M4 Competition",
    class: "Sport",
    price: 265,
    img: "https://images.unsplash.com/photo-1555215695-3004980adade?w=900&q=80",
    specs: ["4 seats", "Auto", "Petrol"],
  },
  {
    name: "Audi RS Q8",
    class: "SUV",
    price: 275,
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80",
    specs: ["5 seats", "Auto", "Petrol"],
  },
  {
    name: "Tesla Model S Plaid",
    class: "Electric",
    price: 210,
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=900&q=80",
    specs: ["5 seats", "Auto", "Electric"],
  },
];

const CarBooking = () => {
  const [trip, setTrip] = useState<"round" | "oneway">("round");
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Sport", "SUV", "Sedan", "Electric"];
  const visible =
    filter === "All" ? cars : cars.filter((c) => c.class === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white antialiased selection:bg-amber-400/30">
      {/* ——— NAV ——— */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0b]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-[11px] font-semibold tracking-[0.2em]">
              V
            </span>
            <span className="text-sm font-semibold tracking-[0.18em]">VISTA</span>
          </a>

          <nav className="hidden items-center gap-8 text-[13px] text-white/55 md:flex" aria-label="Primary">
            <a href="#fleet" className="transition hover:text-white">Fleet</a>
            <a href="#how" className="transition hover:text-white">How it works</a>
            <a href="#cities" className="transition hover:text-white">Cities</a>
            <a href="#membership" className="transition hover:text-white">Membership</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#account" className="hidden text-[13px] text-white/55 transition hover:text-white sm:inline">
              Sign in
            </a>
            <a
              href="#book"
              className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#0a0a0b] transition hover:bg-white/90"
            >
              Reserve
            </a>
          </div>
        </div>
      </header>

      {/* ——— HERO ——— */}
      <section className="relative min-h-[100svh] pt-16">
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/50 via-[#0a0a0b]/40 to-[#0a0a0b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/80 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-end px-5 pb-16 pt-24 sm:px-8 lg:pb-24">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-amber-300/90">
            Private fleet · 18 cities
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            The car arrives.
            <br />
            <span className="text-white/45">You disappear.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
            Curated performance and luxury vehicles. Delivered to your door.
            Returned without the desk.
          </p>

          {/* Booking panel */}
          <div
            id="book"
            className="mt-12 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-1 backdrop-blur-xl"
          >
            <div className="flex gap-1 p-1">
              {(
                [
                  ["round", "Round trip"],
                  ["oneway", "One way"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTrip(id)}
                  className={`rounded-xl px-4 py-2 text-xs font-medium transition ${
                    trip === id
                      ? "bg-white text-[#0a0a0b]"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <form
              className="grid gap-px overflow-hidden rounded-xl bg-white/5 sm:grid-cols-2 lg:grid-cols-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {[
                { label: "Pick-up", placeholder: "City or airport" },
                { label: "Drop-off", placeholder: trip === "round" ? "Same as pick-up" : "City or airport" },
                { label: "From", placeholder: "Date · time" },
                { label: "Until", placeholder: "Date · time" },
              ].map((field) => (
                <label key={field.label} className="bg-[#0a0a0b]/40 px-4 py-3.5">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-white/35">
                    {field.label}
                  </span>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="mt-1 w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </label>
              ))}
              <div className="flex items-stretch bg-[#0a0a0b]/40 p-2 lg:p-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-400 px-4 text-sm font-semibold text-[#0a0a0b] transition hover:bg-amber-300"
                >
                  Show cars
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ——— TRUST STRIP ——— */}
      <section className="border-y border-white/5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4 sm:px-8">
          {[
            { k: "Door delivery", v: "Included in every city" },
            { k: "No counters", v: "App unlock · walk away" },
            { k: "Fully insured", v: "Comprehensive cover" },
            { k: "Concierge", v: "24/7 human support" },
          ].map((item) => (
            <div key={item.k}>
              <p className="text-sm font-medium text-white">{item.k}</p>
              <p className="mt-1 text-xs text-white/40">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— FLEET ——— */}
      <section id="fleet" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-amber-300/80">
                The fleet
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected, not stocked
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    filter === f
                      ? "bg-white text-[#0a0a0b]"
                      : "border border-white/10 text-white/50 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((car) => (
              <article
                key={car.name}
                className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] transition hover:border-white/15"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#0a0a0b]/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur">
                    {car.class}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight">{car.name}</h3>
                    <p className="shrink-0 text-sm">
                      <span className="font-semibold text-amber-300">${car.price}</span>
                      <span className="text-white/35"> / day</span>
                    </p>
                  </div>
                  <p className="mt-2 text-xs text-white/40">{car.specs.join(" · ")}</p>
                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl border border-white/10 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/25 hover:bg-white/5 hover:text-white"
                  >
                    View details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ——— HOW ——— */}
      <section id="how" className="border-t border-white/5 bg-white/[0.02] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-amber-300/80">
            How it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Three steps. Zero desk time.
          </h2>

          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Choose the car",
                d: "Filter by class, range, or occasion. Every vehicle is photographed and inspected before listing.",
              },
              {
                n: "02",
                t: "Set the window",
                d: "Pick-up at your address or a city pin. Delivery windows run early morning to late evening.",
              },
              {
                n: "03",
                t: "Unlock and go",
                d: "The key is digital. End the trip in the app — no return counter, no paper.",
              },
            ].map((step) => (
              <li key={step.n} className="relative">
                <span className="font-mono text-xs text-amber-300/70">{step.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— EDITORIAL SPLIT ——— */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/6]">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=85"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-sm text-white/70">
              Porsche 911 · delivered at 07:10 · Lisbon
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-amber-300/80">
              Membership
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Drive more.
              <br />
              Decide less.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/50">
              Vista Members unlock priority delivery slots, waived young-driver fees,
              and early access to limited editions. One annual fee. Cancel anytime.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              {[
                "Priority delivery windows",
                "Complimentary upgrades when available",
                "Member rates on weekend peaks",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-300" />
                  {line}
                </li>
              ))}
            </ul>
            <a
              href="#membership"
              className="mt-10 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium transition hover:border-white/40 hover:bg-white/5"
            >
              View membership
            </a>
          </div>
        </div>
      </section>

      {/* ——— CITIES ——— */}
      <section id="cities" className="border-t border-white/5 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Active cities</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Lisbon",
              "Porto",
              "Madrid",
              "Barcelona",
              "Paris",
              "Milan",
              "Zurich",
              "Amsterdam",
              "Berlin",
              "London",
              "Dubai",
              "Singapore",
              "New York",
              "Los Angeles",
              "Miami",
              "Toronto",
              "Sydney",
              "Tokyo",
            ].map((city) => (
              <span
                key={city}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/55 transition hover:border-white/25 hover:text-white"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ——— QUOTE ——— */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium leading-snug tracking-tight text-white/90 sm:text-3xl">
            “The car was outside the hotel before my coffee arrived. That was the whole product.”
          </blockquote>
          <p className="mt-8 text-sm text-white/40">— Member review · Barcelona</p>
        </div>
      </section>

      {/* ——— FINAL CTA ——— */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready when you are
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/45">
            Browse the fleet, set a delivery window, and unlock from your phone.
          </p>
          <a
            href="#book"
            className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-[#0a0a0b] transition hover:bg-amber-300"
          >
            Reserve a car
          </a>
        </div>
      </section>

      {/* ——— FOOTER ——— */}
      <footer className="border-t border-white/5 px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em]">VISTA</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/35">
              Private fleet rental. Delivered. App-unlocked. Returned without the desk.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/30">Product</p>
              <ul className="mt-3 space-y-2 text-sm text-white/50">
                <li><a href="#fleet" className="hover:text-white">Fleet</a></li>
                <li><a href="#how" className="hover:text-white">How it works</a></li>
                <li><a href="#membership" className="hover:text-white">Membership</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/30">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-white/50">
                <li><a href="#cities" className="hover:text-white">Cities</a></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
                <li><a href="#press" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/30">Legal</p>
              <ul className="mt-3 space-y-2 text-sm text-white/50">
                <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms</a></li>
                <li><a href="#insurance" className="hover:text-white">Insurance</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl text-xs text-white/25">© 2026 Vista Mobility. Sample design for UIFoundry.</p>
      </footer>
    </div>
  );
};

export default CarBooking;
