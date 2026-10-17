import { Link, useParams, useSearchParams } from "react-router-dom";
import { getComponentItem } from "../components-library/registry";
import ComponentScene from "../components-library/shared/ComponentScene";

export default function ComponentPreview() {
  const { id } = useParams<{ id: string }>();
  const [params] = useSearchParams();
  const item = getComponentItem(id ?? "");
  if (!item) return <main className="grid min-h-screen place-content-center gap-5 px-6 text-center font-catalog"><h1 className="font-display text-3xl font-semibold text-brand-950">Component not found</h1><p className="text-sm text-slate-600">This component is not in the current library.</p><Link to="/components" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">Browse components</Link></main>;
  const requestedBackground = params.get("bg");
  const background = requestedBackground === "dark" || requestedBackground === "light" ? requestedBackground : item.frame.defaultBg;
  return <div className={`min-h-screen font-catalog ${background === "dark" ? "bg-brand-950 text-white" : "bg-white text-brand-950"}`}><ComponentScene item={item} /></div>;
}
