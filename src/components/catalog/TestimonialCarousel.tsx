import { useId, useState } from "react";

const quotes = [
  { quote: "We spent less time arranging pixels and more time making the product feel like us.", name: "Alex Morgan", role: "Designer, Fieldwork", initials: "AM" },
  { quote: "Readable code made the handoff feel like a conversation, rather than a guessing game.", name: "Sam Rivera", role: "Frontend engineer, Common", initials: "SR" },
  { quote: "A considered starting point gave our small team room to do something a little different.", name: "Jamie Chen", role: "Founder, Outline", initials: "JC" },
];

export default function TestimonialCarousel() {
  const id = useId();
  const [active, setActive] = useState(0);
  const current = quotes[active];
  const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";
  return (
    <section aria-label="Illustrative customer testimonials" aria-roledescription="carousel" className="px-6 py-10 text-inherit md:px-12">
      <div className="flex items-center justify-between gap-4 border-b border-slate-300/40 pb-5"><h2 className="font-display text-xl font-semibold">Good words. Good people.</h2><span className="text-xs opacity-60">Sample stories</span></div>
      <div id={`${id}-slide`} aria-live="polite" aria-atomic="true" className="min-h-[340px] py-7 sm:min-h-[290px]">
        <div key={active} className="motion-safe:animate-[catalog-quote_250ms_ease-out]" role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${quotes.length}`}>
          <span aria-hidden="true" className="font-display text-6xl leading-none text-brand-400">“</span>
          <blockquote className="max-w-2xl font-display text-2xl font-medium leading-snug sm:text-3xl"><p>{current.quote}</p></blockquote>
          <div className="mt-7 flex items-center gap-3"><span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-950">{current.initials}</span><div><p className="text-sm font-semibold">{current.name}</p><p className="mt-1 text-xs opacity-65">{current.role}</p></div></div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-slate-300/40 pt-5">
        <div className="flex gap-1" aria-label="Choose a testimonial">{quotes.map((quote, i) => <button type="button" key={quote.name} onClick={() => setActive(i)} aria-label={`Show testimonial ${i + 1}`} aria-current={active === i ? "true" : undefined} className={`flex h-11 w-8 items-center justify-center rounded-lg ${focus}`}><span className={`h-1.5 rounded-full ${active === i ? "w-6 bg-brand-500" : "w-2 bg-slate-400"}`} /></button>)}</div>
        <div className="flex gap-2">{[-1, 1].map((step) => <button type="button" key={step} aria-label={step < 0 ? "Previous testimonial" : "Next testimonial"} aria-controls={`${id}-slide`} onClick={() => setActive((value) => (value + step + quotes.length) % quotes.length)} className={`h-11 w-11 rounded-full border border-slate-300/60 hover:bg-brand-100 hover:text-brand-950 ${focus}`}>{step < 0 ? "←" : "→"}</button>)}</div>
      </div>
      <style>{"@keyframes catalog-quote { from { opacity: 0; } to { opacity: 1; } }"}</style>
    </section>
  );
}
