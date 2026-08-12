import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { getLogoPath, handleImageError } from '../../utils/logoHelper';

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
              src={getLogoPath('fullLight')} 
              onError={(e) => handleImageError(e, 'Logos/ezyhr-full-logo.png')}
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

          {/* Action CTAs & Customer Sign In Link */}
          <div className="hidden md:flex items-center space-x-3.5">
            <a 
              href="https://hr.ezy.sg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs lg:text-sm font-bold text-slate-800 hover:text-emerald-700 px-3.5 py-2 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-1"
            >
              Sign In
            </a>

            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-slate-950 font-extrabold rounded-xl text-xs lg:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-emerald-600 rounded-xl bg-slate-100/80 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2.5">
            <a
              href="https://hr.ezy.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-bold text-slate-800 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Sign In to HR Portal (hr.ezy.sg)
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-slate-950 font-extrabold rounded-xl text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
