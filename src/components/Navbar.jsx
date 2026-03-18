import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300 cursor-pointer">
          <svg width="44" height="44" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="abGradient" x1="40" y1="40" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563EB"/>
                <stop offset="100%" stopColor="#0F172A"/>
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="280" height="280" rx="36" fill="url(#abGradient)"/>
            <path d="M92 226L138 94H166L212 226H185L175 196H128L118 226H92ZM135 172H168L151.5 121L135 172Z" fill="white"/>
            <path d="M198 94H228C258 94 276 109 276 132C276 147 268 158 254 164C270 169 280 181 280 198C280 223 260 238 226 238H198V94ZM226 151C240 151 248 145 248 135C248 124 240 118 226 118H224V151H226ZM229 214C244 214 252 207 252 195C252 183 243 176 227 176H224V214H229Z" fill="white"/>
            <circle cx="250" cy="78" r="10" fill="#60A5FA" fillOpacity="0.9"/>
            <circle cx="74" cy="248" r="8" fill="#93C5FD" fillOpacity="0.75"/>
          </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium transition-colors hover:text-blue-500 text-slate-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 border-t border-slate-100 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-600 font-medium hover:text-blue-600 px-4 py-2"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-11/12 mt-4">
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
