import { useState } from "react";
import { Link } from "react-router-dom";
import type { ComponentItem } from "../types";

type PreviewFrameProps = { item: ComponentItem };

const widths = {
  desktop: 1280,
  tablet: 768,
  mobile: 375,
} as const;

type Viewport = keyof typeof widths;

export default function PreviewFrame({ item }: PreviewFrameProps) {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [bg, setBg] = useState<"light" | "dark">(item.frame.defaultBg);
  const width = widths[viewport];
  const minH = item.frame.minHeight ?? 320;

  return (
    <div className="border-b border-slate-200 bg-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 bg-white/80 px-3 py-2">
        <div className="flex rounded-lg border border-slate-200 overflow-hidden">
          {(Object.keys(widths) as Viewport[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setViewport(v)}
              className={`px-2.5 py-1 text-xs capitalize ${
                viewport === v ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setBg((b) => (b === "light" ? "dark" : "light"))}
            className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-50"
          >
            {bg === "light" ? "Dark bg" : "Light bg"}
          </button>
          <Link
            to={`/components/preview/${item.id}?bg=${bg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-brand-700 hover:bg-brand-50"
          >
            Full preview
          </Link>
        </div>
      </div>

      <div
        className="flex justify-center overflow-hidden p-4 sm:p-6"
        style={{ minHeight: minH }}
      >
        <div
          className={`overflow-hidden rounded-xl shadow-card transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            bg === "dark" ? "bg-brand-950 text-white" : "bg-white text-brand-950"
          }`}
          style={{
            width: viewport === "desktop" ? "100%" : Math.min(width, 1000),
            maxWidth: "100%",
          }}
        >
          <div className="origin-top scale-[0.72] sm:scale-[0.85] lg:scale-100" style={{ width: "100%" }}>
            <item.Component />
          </div>
        </div>
      </div>
    </div>
  );
}
