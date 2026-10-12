const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-brand-950 mb-3">Simple, transparent pricing</h1>
        <p className="text-slate-600">Start free. Upgrade when you need more power.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free */}
        <div className="card p-6">
          <h3 className="font-bold text-lg">Free</h3>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-bold">$0</span>
          </div>
          <p className="text-sm text-slate-500 mb-6">Perfect for exploring and learning.</p>
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Browse all designs</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Free components & animations</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Personal collections</li>
            <li className="flex items-center gap-2 text-slate-400"><span>✗</span> Premium kits</li>
            <li className="flex items-center gap-2 text-slate-400"><span>✗</span> Commercial license</li>
          </ul>
          <button className="btn-outline w-full">Get Started</button>
        </div>

        {/* Pro */}
        <div className="card p-6 ring-2 ring-brand-600 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-semibold bg-brand-600 text-white rounded-full">
            Popular
          </span>
          <h3 className="font-bold text-lg">Pro</h3>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-bold">$19</span>
            <span className="text-slate-500">/mo</span>
          </div>
          <p className="text-sm text-slate-500 mb-6">For professional developers and freelancers.</p>
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Everything in Free</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> All premium designs & kits</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Full component library</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Commercial license</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Priority support</li>
          </ul>
          <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-600 to-violet-600 text-white font-medium hover:from-brand-700 hover:to-violet-700 transition">
            Start Pro Trial
          </button>
        </div>

        {/* Team */}
        <div className="card p-6">
          <h3 className="font-bold text-lg">Team</h3>
          <div className="mt-4 mb-2">
            <span className="text-4xl font-bold">$49</span>
            <span className="text-slate-500">/mo</span>
          </div>
          <p className="text-sm text-slate-500 mb-6">For agencies and growing teams.</p>
          <ul className="space-y-3 text-sm mb-8">
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Everything in Pro</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Up to 5 team seats</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Shared collections</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Team admin tools</li>
            <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Early access to new kits</li>
          </ul>
          <button className="btn-outline w-full">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
