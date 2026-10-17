type Tab = { id: string; label: string };

type TabsProps = {
  id: string;
  label: string;
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  panelId: string;
};

export default function Tabs({ id, label, tabs, value, onChange, panelId }: TabsProps) {
  return (
    <div>
      <p id={`${id}-label`} className="sr-only">
        {label}
      </p>
      <div
        role="tablist"
        aria-labelledby={`${id}-label`}
        className="flex flex-wrap gap-2"
      >
        {tabs.map((tab) => {
          const selected = tab.id === value;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${id}-${tab.id}`}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(tab.id)}
              onKeyDown={(e) => {
                const idx = tabs.findIndex((t) => t.id === value);
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  onChange(tabs[(idx + 1) % tabs.length].id);
                } else if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  onChange(tabs[(idx - 1 + tabs.length) % tabs.length].id);
                }
              }}
              className={`min-h-10 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-brand-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
