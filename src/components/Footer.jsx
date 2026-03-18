import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-900 py-8 text-center text-blue-200 text-sm font-medium relative -mt-4 z-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Albion Burrniku. All Rights Reserved.</p>
        <div className="flex gap-6 text-blue-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
