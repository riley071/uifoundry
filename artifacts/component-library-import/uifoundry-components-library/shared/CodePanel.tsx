import { useState } from "react";
import type { ComponentItem } from "../types";

type CodePanelProps = { item: ComponentItem };

export default function CodePanel({ item }: CodePanelProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(item.source);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="min-h-10 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          {open ? "Hide code" : "View code"}
        </button>
        {open && (
          <button
            type="button"
            onClick={copy}
            className="min-h-10 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
      {open && (
        <pre className="mt-4 max-h-72 overflow-auto rounded-xl bg-slate-900 p-4 text-xs leading-relaxed text-slate-100 font-mono">
          {item.source}
        </pre>
      )}
    </div>
  );
}
