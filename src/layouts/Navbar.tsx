import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const AppNavbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive ? 'text-brand-600 bg-brand-50' : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
              UF
            </div>
            <span className="font-bold text-lg text-brand-950">UIFoundry</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/explore" className={linkClass}>Explore</NavLink>
            <NavLink to="/components" className={linkClass}>Components</NavLink>
            <NavLink to="/motion" className={linkClass}>Motion Lab</NavLink>
            <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn-outline text-sm px-3 py-1.5">Sign In</button>
            <button className="btn-primary text-sm px-4 py-1.5 bg-gradient-to-r from-brand-600 to-violet-600 hover:from-brand-700 hover:to-violet-700">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-slate-100">
            <div className="flex flex-col gap-1">
              <NavLink to="/explore" className={linkClass} onClick={() => setOpen(false)}>Explore</NavLink>
              <NavLink to="/components" className={linkClass} onClick={() => setOpen(false)}>Components</NavLink>
              <NavLink to="/motion" className={linkClass} onClick={() => setOpen(false)}>Motion Lab</NavLink>
              <NavLink to="/pricing" className={linkClass} onClick={() => setOpen(false)}>Pricing</NavLink>
              <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
                <button className="btn-outline text-sm flex-1">Sign In</button>
                <button className="btn-primary text-sm flex-1">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
