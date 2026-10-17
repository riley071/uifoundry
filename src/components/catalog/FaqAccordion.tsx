import { useId, useState } from "react";

const questions = [
  { question: "What do I need to use these sections?", answer: "React and Tailwind CSS, with the brand color palette and font configuration shown in the catalog. No animation library is required." },
  { question: "Can I change the layout and colors?", answer: "Yes. The source is yours to edit. Replace the copy, update the Tailwind classes, and connect the links to your own pages." },
  { question: "Are these connected to a backend?", answer: "No. These are frontend sections. Checkout and form submission need your own service before they can accept real transactions or messages." },
  { question: "What about keyboard access and reduced motion?", answer: "Every control uses native buttons or links, visible focus styles, and descriptive labels. Optional animation respects your device’s reduced motion preference." },
];

export default function FaqAccordion() {
  const id = useId();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-labelledby={`${id}-title`} className="px-6 py-10 text-inherit md:px-10">
      <p className="mb-3 text-sm opacity-60">A few useful answers</p>
      <h2 id={`${id}-title`} className="mb-8 font-display text-3xl font-semibold tracking-tight">Before you build.</h2>
      <div className="border-t border-slate-300/50">{questions.map((item, i) => <div key={item.question} className="border-b border-slate-300/50">
        <h3><button type="button" id={`${id}-trigger-${i}`} aria-expanded={open === i} aria-controls={`${id}-panel-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-5 rounded-lg py-5 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"><span>{item.question}</span><span aria-hidden="true" className="text-xl text-brand-400">{open === i ? "−" : "+"}</span></button></h3>
        <div id={`${id}-panel-${i}`} role="region" aria-labelledby={`${id}-trigger-${i}`} hidden={open !== i}><p className="max-w-xl pb-6 pr-6 text-sm leading-7 opacity-70">{item.answer}</p></div>
      </div>)}</div>
    </section>
  );
}
