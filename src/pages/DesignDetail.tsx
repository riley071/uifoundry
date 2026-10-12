import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { designs } from '../data/designs';

type Viewport = 'desktop' | 'tablet' | 'mobile';

const viewportWidths: Record<Viewport, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

const DesignDetail = () => {
  const { slug } = useParams();
  const design = designs.find((d) => d.slug === slug) || designs[0];
  const [activeTab, setActiveTab] = useState('preview');
  const [viewport, setViewport] = useState<Viewport>('desktop');

  const tabs = [
    { id: 'preview', label: 'Live Preview' },
    { id: 'sections', label: 'Sections' },
    { id: 'tokens', label: 'Design Tokens' },
    { id: 'code', label: 'Code' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link to="/explore" className="hover:text-brand-600">All Designs</Link>
        <span>/</span>
        <span>{design.category}</span>
        <span>/</span>
        <span className="text-slate-900">{design.title}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-950">{design.title}</h1>
            {design.isPremium && (
              <span className="px-2.5 py-0.5 text-xs font-semibold bg-amber-400 text-amber-900 rounded-md">
                Premium
              </span>
            )}
          </div>
          <p className="text-slate-600 max-w-2xl">{design.description}</p>
          <p className="text-sm text-slate-400 mt-2">
            Updated {design.updatedAt} · ♥ {design.likes} · {design.views.toLocaleString()} views
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={`/preview/${design.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-600 to-violet-600 text-white text-sm font-medium hover:from-brand-700 hover:to-violet-700 transition"
          >
            Open Full Preview
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <button className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
            Copy Code
          </button>
          <button className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition">
            Save
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-brand-600 text-brand-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'preview' && (
        <div>
          {/* Viewport controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex rounded-lg border border-slate-200 overflow-hidden">
              {(['desktop', 'tablet', 'mobile'] as Viewport[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setViewport(v)}
                  className={`px-4 py-1.5 text-xs font-medium capitalize transition ${
                    viewport === v
                      ? 'bg-brand-600 text-white'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Live interactive preview · Resize with the controls above
            </p>
          </div>

          {/* Live Preview Frame */}
          <div className="bg-slate-100 rounded-xl p-4 md:p-6 overflow-hidden">
            <div
              className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
              style={{
                width: viewportWidths[viewport],
                maxWidth: '100%',
              }}
            >
              <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-700 rounded px-3 py-1 text-xs text-slate-300 truncate">
                    uifoundry.app/preview/{design.slug}
                  </div>
                </div>
              </div>

              <iframe
                src={`/preview/${design.slug}`}
                title={`${design.title} Preview`}
                className="w-full border-0"
                style={{ height: viewport === 'mobile' ? '700px' : '800px' }}
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sections' && (
        <div className="space-y-2 max-w-3xl">
          <p className="text-slate-600 mb-4">
            Click any section to view and copy its code. Full section implementations will appear here once the design is built.
          </p>
          {['Hero Section', 'Navigation', 'Features / Categories', 'Product / Destination Cards', 'Testimonials', 'CTA Banner', 'Footer'].map(
            (section) => (
              <div
                key={section}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50/30 transition"
              >
                <span className="font-medium text-slate-800">{section}</span>
                <button className="text-sm text-brand-600 font-medium hover:underline">
                  Copy Code
                </button>
              </div>
            )
          )}
        </div>
      )}

      {activeTab === 'tokens' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <h4 className="font-semibold mb-4">Colors</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Primary', hex: '#4F46E5' },
                { name: 'Secondary', hex: '#7C3AED' },
                { name: 'Neutral 900', hex: '#0F172A' },
                { name: 'Neutral 100', hex: '#F1F5F9' },
                { name: 'Success', hex: '#10B981' },
              ].map((c) => (
                <div key={c.name} className="text-center">
                  <div
                    className="w-14 h-14 rounded-xl border border-slate-200 mb-1.5 shadow-sm"
                    style={{ background: c.hex }}
                  />
                  <p className="text-xs font-medium text-slate-700">{c.name}</p>
                  <p className="text-xs text-slate-400">{c.hex}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Typography</h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p><span className="font-medium text-slate-800">Heading:</span> Inter / system-ui</p>
              <p><span className="font-medium text-slate-800">Body:</span> Inter</p>
              <p><span className="font-medium text-slate-800">Base size:</span> 16px</p>
              <p><span className="font-medium text-slate-800">Scale:</span> 1.25</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'code' && (
        <div className="max-w-3xl">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-slate-500">
              Framework: React + Tailwind CSS
            </p>
            <button className="text-sm font-medium text-brand-600 hover:underline">
              Copy Full Page Code
            </button>
          </div>
          <pre className="bg-slate-900 text-slate-100 rounded-xl p-5 text-sm overflow-x-auto leading-relaxed">
{`// ${design.title} – React + Tailwind
// This is a skeleton. Full implementation coming soon.

export default function ${design.title.replace(/[^a-zA-Z]/g, '')}() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar, Hero, Sections, Footer */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg">${design.title}</span>
          {/* ... */}
        </div>
      </header>

      <main>
        {/* Full design will be implemented here */}
      </main>
    </div>
  );
}`}
          </pre>
        </div>
      )}
    </div>
  );
};

export default DesignDetail;
