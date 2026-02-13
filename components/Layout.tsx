import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, BOOKING_URL, CONTACT_EMAIL } from '../constants';

export const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-lg supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold text-2xl">
                ServiceFlow
              </span>
              <span className="text-slate-300 font-light">Media</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              Book a 15-minute call
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-500"
            >
              Book a 15-minute call
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950/40 backdrop-blur-sm py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <NavLink to="/" className="flex items-center gap-2 mb-4 group w-fit">
                <span className="font-bold text-lg text-white">ServiceFlow Media</span>
              </NavLink>
              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                Helping local service businesses get more booked jobs through proven digital systems.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}><NavLink to={item.path} className="hover:text-blue-400 transition-colors">{item.label}</NavLink></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><NavLink to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</NavLink></li>
                <li><NavLink to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>North Idaho, USA</li>
                <li>{CONTACT_EMAIL}</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ServiceFlow Media. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};