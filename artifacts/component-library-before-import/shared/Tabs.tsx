import { useRef } from "react";
import type { KeyboardEvent } from "react";

type Tab = { id: string; label: string };

export default function Tabs({ id, label, tabs, value, onChange, panelId }: {
  id: string;
  label: string;
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  panelId: string;
}) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    onChange(tabs[next].id);
    buttons.current[next]?.focus();
  }

  return (
    <div role="tablist" aria-label={label} className="flex max-w-full gap-2 overflow-x-auto p-1">
      {tabs.map((tab, index) => <button key={tab.id} ref={(node) => { buttons.current[index] = node; }} type="button" role="tab" id={`${id}-${tab.id}`} aria-selected={value === tab.id} aria-controls={panelId} tabIndex={value === tab.id ? 0 : -1} onClick={() => onChange(tab.id)} onKeyDown={(event) => onKeyDown(event, index)} className={`min-h-11 shrink-0 rounded-xl border px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${value === tab.id ? "border-brand-950 bg-brand-950 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-brand-300"}`}>{tab.label}</button>)}
    </div>
  );
}
