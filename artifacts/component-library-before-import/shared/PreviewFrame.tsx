import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import type { ComponentItem } from "../types";
import ComponentScene from "./ComponentScene";

const widths = { mobile: 375, tablet: 768, desktop: 1280 };
type Viewport = keyof typeof widths;
const frameDocument = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;min-height:100%}html{overflow-x:hidden}*,*::before,*::after{box-sizing:border-box}</style></head><body><div id="component-root"></div></body></html>';
const control = "min-h-11 rounded-lg px-3 py-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

function FrameDocument({ item, background, width, scale }: { item: ComponentItem; background: "light" | "dark"; width: number; scale: number }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!root) return;
    const doc = root.ownerDocument;
    function syncStyles() {
      doc.head.querySelectorAll("[data-library-style]").forEach((node) => node.remove());
      document.head.querySelectorAll('style,link[rel="stylesheet"]').forEach((node) => {
        const clone = node.cloneNode(true) as HTMLElement;
        clone.setAttribute("data-library-style", "");
        doc.head.appendChild(clone);
      });
    }
    syncStyles();
    const observer = new MutationObserver(syncStyles);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [root]);

  useEffect(() => {
    if (!root) return;
    const doc = root.ownerDocument;
    doc.documentElement.style.colorScheme = background;
    doc.body.className = `font-catalog ${background === "dark" ? "bg-brand-950 text-white" : "bg-white text-brand-950"}`;
  }, [root, background]);

  return <>
    <iframe ref={frame} title={`${item.title} interactive preview`} srcDoc={frameDocument} sandbox="allow-same-origin" onLoad={() => setRoot(frame.current?.contentDocument?.getElementById("component-root") ?? null)} className="absolute left-0 top-0 block border-0" style={{ width, height: item.frame.height, transform: `scale(${scale})`, transformOrigin: "top left" }} />
    {root && createPortal(<ComponentScene item={item} />, root)}
  </>;
}

export default function PreviewFrame({ item }: { item: ComponentItem }) {
  const id = useId();
  const container = useRef<HTMLDivElement>(null);
  const [availableWidth, setAvailableWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [background, setBackground] = useState(item.frame.defaultBg);
  const designWidth = widths[viewport];
  const scale = availableWidth ? Math.min(1, availableWidth / designWidth) : 0;

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const resize = new ResizeObserver(([entry]) => setAvailableWidth(entry.contentRect.width));
    resize.observe(node);
    if (!("IntersectionObserver" in window)) setVisible(true);
    const visibility = "IntersectionObserver" in window ? new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "120px" }) : null;
    visibility?.observe(node);
    return () => { resize.disconnect(); visibility?.disconnect(); };
  }, []);

  return (
    <section aria-label={`${item.title} preview`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-4 py-2">
        <div role="group" aria-label="Preview viewport" className="flex flex-wrap gap-1">{(Object.keys(widths) as Viewport[]).map((value) => <button type="button" key={value} aria-pressed={viewport === value} onClick={() => setViewport(value)} className={`${control} ${viewport === value ? "bg-brand-950 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{value === "mobile" ? "Mobile 375" : value === "tablet" ? "Tablet 768" : "Desktop"}</button>)}</div>
        <button type="button" aria-label="Use dark preview background" aria-pressed={background === "dark"} onClick={() => setBackground(background === "dark" ? "light" : "dark")} className={`${control} border border-slate-200 text-slate-600`}>{background === "dark" ? "Dark" : "Light"}</button>
      </div>
      <div className="bg-slate-100 p-3 sm:p-5">
        <div ref={container} className="w-full">
          <div className="relative mx-auto overflow-hidden rounded-lg border border-slate-200" style={{ width: availableWidth ? designWidth * scale : "100%", height: availableWidth ? item.frame.height * scale : 300 }} aria-describedby={`${id}-note`}>
            {visible && scale > 0 ? <FrameDocument item={item} background={background} width={designWidth} scale={scale} /> : <div className="flex h-full items-center justify-center bg-white px-4 text-center text-xs text-slate-500">Preview loads when visible</div>}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2"><p id={`${id}-note`} className="text-xs text-slate-500">{designWidth}px canvas{scale > 0 ? ` · ${Math.round(scale * 100)}% scale` : ""}{item.frame.scrollable ? " · scroll inside" : ""}</p><Link to={`/components/preview/${item.id}?bg=${background}`} target="_blank" rel="noopener noreferrer" className={`${control} inline-flex items-center text-brand-700 underline underline-offset-4`}>Open full preview ↗</Link></div>
      </div>
    </section>
  );
}
