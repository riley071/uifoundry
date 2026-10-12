import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                UF
              </div>
              <span className="font-bold text-lg">UIFoundry</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A curated foundry for modern interfaces. Discover beautiful designs, explore how they work, and use them in your projects.
            </p>
            <div className="flex gap-4 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">Discord</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h6 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Product</h6>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/explore" className="hover:text-white transition">Explore</Link></li>
              <li><Link to="/components" className="hover:text-white transition">Components</Link></li>
              <li><Link to="/motion" className="hover:text-white transition">Motion Lab</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h6 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Resources</h6>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">Stay Updated</h6>
            <p className="text-slate-400 text-sm mb-3">
              Get new designs and animation packs in your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-brand-600 to-violet-600 hover:from-brand-700 hover:to-violet-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 UIFoundry. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
