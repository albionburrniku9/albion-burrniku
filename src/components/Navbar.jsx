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
        <div className="flex items-center justify-center cursor-pointer">
  <a href="#home">
    <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-700 select-none">
      ALBION BURRNIKU
    </span>
  </a>
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
