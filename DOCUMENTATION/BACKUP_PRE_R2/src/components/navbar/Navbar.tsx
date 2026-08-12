import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Features', href: '#features' },
    { name: 'Singapore Payroll', href: '#payroll' },
    { name: 'AI Assistant', href: '#ai' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' 
          : 'bg-slate-900 border-b border-slate-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1">
            <div className="h-9 flex items-center">
              <img 
                src="/Logos/ezyhr-full-logo-dark.png" 
                alt="ezyHR Singapore HRMS" 
                className="h-8 w-auto object-contain hidden dark:block sm:block" 
                onError={(e) => {
                  // Fallback logo text if image not available
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex items-center gap-1.5 font-extrabold text-xl tracking-tight text-white">
                <span className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-900 flex items-center justify-center font-black text-sm shadow-md">
                  ezy
                </span>
                <span className="text-white">ezyHR</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30 ml-1">
                  SG
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors px-2 py-1 rounded-md hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://hr.ezy.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors rounded-lg hover:bg-slate-800"
            >
              Sign In
            </a>
            
            <button
              onClick={onOpenDemo}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-xs lg:text-sm rounded-xl shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
            >
              Book a Free Demo <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2.5">
            <a
              href="https://hr.ezy.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center font-medium text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl block transition-colors"
            >
              Sign In to ezyHR Portal
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-[11px] text-slate-400">
              ezyHR by REALTEK ENGINEERING PTE. LTD. (UEN: 201723665M)
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
