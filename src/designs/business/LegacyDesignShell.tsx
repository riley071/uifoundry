import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import { legacyPalettes } from './data';
import './business.css';

type Product = { name: string; price: number; currency: string };
type CartLine = Product & { quantity: number };
export function parseProduct(name: string, content: string): Product | null {
  const price = content.match(/([€$£]|R\s)([\d,.]+)/);
  return price ? { name, price: Number(price[2].replaceAll(',', '')), currency: price[1].trim() } : null;
}

/** Preserve the original layout while connecting its previously inert preview controls. */
export default function LegacyDesignShell({ slug, children }: { slug: string; children: ReactNode }) {
  const brand = legacyPalettes.find(item => item.slug === slug)!;
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState('enquiry');
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [sent, setSent] = useState(false);
  const [links, setLinks] = useState<{ id: string; label: string }[]>([]);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  useEffect(() => {
    const node = root.current!;
    const list = Array.from(node.querySelectorAll<HTMLElement>('article'));
    setProducts(list.map(article => parseProduct(article.querySelector('h3,h2')?.textContent ?? 'Item', article.textContent ?? '')).filter((item): item is Product => Boolean(item)));
    setLinks(Array.from(node.querySelectorAll<HTMLElement>('section[id]')).map(section => ({ id: section.id, label: section.querySelector('h2')?.textContent ?? section.id })).slice(0, 8));
  }, []);
  useEffect(() => {
    const articles = Array.from(root.current!.querySelectorAll<HTMLElement>('article'));
    const styles = articles.map(article => article.style.display);
    let found = 0;
    articles.forEach(article => { const match = !query || article.textContent?.toLowerCase().includes(query.toLowerCase()); article.style.display = match ? '' : 'none'; if (match) found++; });
    if (query) setStatus(`${found} ${found === 1 ? 'result' : 'results'} for “${query}”.`);
    return () => articles.forEach((article, i) => { article.style.display = styles[i]; });
  }, [query]);
  useEffect(() => { root.current?.querySelectorAll('a[href="#cart"]').forEach(link => { link.textContent = `Cart · ${cart.reduce((sum, item) => sum + item.quantity, 0)}`; }); }, [cart]);
  const open = (label: string, nextMode = 'enquiry') => { setTitle(label); setMode(nextMode); setSent(false); dialog.current?.showModal(); };
  const add = (product: Product) => { setCart(previous => { const exists = previous.find(item => item.name === product.name); return exists ? previous.map(item => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item) : [...previous, { ...product, quantity: 1 }]; }); setStatus(`${product.name} added to your preview cart.`); };
  function click(event: MouseEvent<HTMLDivElement>) {
    const control = (event.target as Element).closest('a,button');
    if (!control || !root.current?.contains(control)) return;
    if (control instanceof HTMLAnchorElement) {
      const href = control.getAttribute('href') ?? '';
      if (href === '#') { event.preventDefault(); root.current.scrollIntoView({ behavior: 'smooth' }); return; }
      if (href === '#cart' || href === '#order') { event.preventDefault(); open(href === '#order' ? 'Order from the counter' : 'Your cart', 'cart'); return; }
      if (slug === 'autoparts-pro' && href === '#garage') { event.preventDefault(); open('Choose a sample vehicle', 'fitment'); return; }
      if (['#privacy', '#terms', '#insurance'].includes(href)) { event.preventDefault(); open(control.textContent?.trim() ?? 'Preview information', 'info'); return; }
      if (href.startsWith('#') && !root.current.querySelector(`[id="${href.slice(1).replaceAll('"', '')}"]`)) { event.preventDefault(); open(control.textContent?.trim() || 'Enquire'); }
      if (href.startsWith('mailto:')) { event.preventDefault(); open('Contact the team'); }
    } else if (/^add(?:\s|$)/i.test(control.textContent?.trim() ?? '')) {
      const article = control.closest('article');
      const product = article && parseProduct(article.querySelector('h3,h2')?.textContent ?? 'Item', article.textContent ?? '');
      if (product) { event.preventDefault(); add(product); }
    } else if (/reserve|book|view property|enquire|view details/i.test(control.textContent ?? '') && !(control as HTMLButtonElement).form) { event.preventDefault(); open(control.closest('article')?.querySelector('h3,h2')?.textContent ?? control.textContent ?? 'Reservation'); }
  }
  return <div className="legacy-design-shell" style={{ '--biz-bg': brand.bg, '--biz-fg': brand.fg, '--biz-accent': brand.accent } as CSSProperties}>
    <div ref={root} onErrorCapture={event => { const image = event.target as HTMLImageElement; if (image.tagName === 'IMG' && !image.dataset.fallback) { image.dataset.fallback = 'true'; image.src = `/business/${slug}.svg`; } }} onClick={click} onChange={event => { const target = event.target as HTMLInputElement; if (target.type === 'search') setQuery(target.value); }} onSubmit={event => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const text = form.querySelector<HTMLInputElement>('input[type="search"],input[type="text"]')?.value.trim();
      if (slug === 'autoparts-pro') { open('Choose a sample vehicle', 'fitment'); setStatus('Live VIN decoding is not connected in this preview. Choose a listed vehicle to test filtering.'); }
      else if (slug === 'haven-real-estate' && text) { setQuery(text); root.current?.querySelector('#listings')?.scrollIntoView({ behavior: 'smooth' }); }
      else open(slug === 'car-booking' ? 'Complete your vehicle enquiry' : 'Complete your enquiry');
    }}>{children}</div>
    <div className="legacy-preview-tools"><button onClick={() => open('Explore this page', 'menu')}>Menu / search</button>{products.length > 0 && <button onClick={() => open('Your cart', 'cart')}>Cart · {cart.reduce((sum, item) => sum + item.quantity, 0)}</button>}</div>
    {status && <div className="legacy-feedback" role="status"><span>{status}</span>{query && <button onClick={() => { setQuery(''); setStatus('Showing all items.'); }}>Clear filter</button>}<button aria-label="Dismiss message" onClick={() => setStatus('')}>✕</button></div>}
    <dialog ref={dialog} className="business-dialog" aria-label={title}><button className="biz-close" autoFocus onClick={() => dialog.current?.close()} aria-label="Close">✕</button><p className="biz-kicker">{brand.name} / PREVIEW</p><h2>{sent ? 'Preview complete.' : title}</h2>
      {sent ? <p role="status">Your request has been demonstrated. No payment was taken and no details were sent or stored.</p> : mode === 'info' ? <p>This is a website concept preview. It does not create accounts, collect payments, arrange insurance, or submit reservations. Production policies and service terms belong to the business using the template.</p> : mode === 'menu' ? <><label>Search this catalogue<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search items, routes, or locations" /></label><button className="biz-button" onClick={() => dialog.current?.close()}>See results ↗</button><nav className="legacy-menu-links">{links.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => dialog.current?.close()}>{link.label} ↗</a>)}</nav></> : mode === 'fitment' ? <><p>Filter the sample parts catalogue by a listed vehicle. This does not verify compatibility with your vehicle.</p><label>Sample vehicle<select onChange={event => setQuery(event.target.value)} value={query}><option value="">All sample parts</option>{['BMW 3 Series F30','VW Golf Mk7','Toyota Corolla','Ford Focus Mk3'].map(model => <option key={model}>{model}</option>)}</select></label><button className="biz-button" onClick={() => dialog.current?.close()}>Show sample parts</button></> : mode === 'cart' ? <><div className="biz-cart-lines">{cart.map(line => <div key={line.name}><span>{line.name}<small>{line.currency}{line.price.toFixed(2)} × {line.quantity}</small></span><button aria-label={`Remove ${line.name}`} onClick={() => setCart(items => items.filter(item => item.name !== line.name))}>Remove</button></div>)}</div>{!cart.length && <p>Your cart is empty. Add something from the selection below.</p>}<div className="legacy-product-picker">{products.map(product => <button key={product.name} onClick={() => add(product)}>{product.name}<span>{product.currency}{product.price.toFixed(2)} +</span></button>)}</div>{cart.length > 0 && <><strong className="biz-total">Total: {cart[0].currency}{total.toFixed(2)}</strong><button className="biz-button" onClick={() => { setMode('enquiry'); setTitle('Complete your order enquiry'); }}>Continue preview order</button></>}</> : <form onSubmit={event => { event.preventDefault(); setSent(true); }}><p>Try this enquiry flow. No real booking or order will be submitted.</p><label>Name<input required autoComplete="name" /></label><label>Email<input required type="email" autoComplete="email" /></label><label>Preferred date<input type="date" required min={new Date().toLocaleDateString('en-CA')} /></label><label>Anything we should know?<textarea rows={3} /></label><button className="biz-button">Complete preview enquiry ↗</button></form>}
    </dialog>
  </div>;
}
