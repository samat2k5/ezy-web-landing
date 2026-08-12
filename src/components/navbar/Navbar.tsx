import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

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
    { name: 'Product', href: '#platform' },
    { name: 'Features', href: '#features' },
    { name: 'Payroll', href: '#payroll' },
    { name: 'AI', href: '#ai' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md py-3' 
          : 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official ezyHR Light Logo Variant */}
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1 transition-transform hover:scale-[1.01]">
            <img 
              src="/Logos/ezyhr-full-logo.png" 
              alt="ezyHR Singapore HRMS & Statutory Payroll" 
              className="h-9 sm:h-10 w-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors px-3 py-2 rounded-xl hover:bg-slate-100/80"
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
              className="text-xs lg:text-sm font-bold text-slate-700 hover:text-slate-900 px-4 py-2.5 transition-colors rounded-xl hover:bg-slate-100 border border-transparent"
            >
              Sign In
            </a>
            
            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-slate-950 font-extrabold text-xs lg:text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 ring-1 ring-emerald-400/30"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 animate-fadeIn shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:text-emerald-600 hover:bg-slate-50 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <a
              href="https://hr.ezy.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 text-center font-bold text-sm text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl block transition-colors border border-slate-200"
            >
              Sign In to ezyHR Portal
            </a>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-[11px] text-slate-500 font-medium">
              REALTEK ENGINEERING PTE. LTD. (UEN: 201723665M)
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
