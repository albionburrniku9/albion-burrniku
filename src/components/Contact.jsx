import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative pt-32 pb-48 bg-brand-50 overflow-hidden text-center">
      {/* Curved Top */}
      <div className="absolute top-0 w-full h-32 overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[120px] fill-slate-50 rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute inset-0 bg-blue-600/5 z-0"></div>

      {/* Adding the blue gradient from the reference at the bottom */}
      <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-700 to-transparent -z-10 bg-opacity-90"></div>
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-50 -z-10"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-blue-400 blur-3xl opacity-30 -z-10"></div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 mb-4 tracking-tight">Get In Touch</h2>
        <p className="text-lg text-slate-600 mb-12 max-w-md mx-auto">
          Currently open to QA Automation, SDET, and Data focused roles. Feel free to reach out to me!
        </p>

        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-premium flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full transform hover:-translate-y-2 transition-transform duration-300">
          <a href="mailto:albionburrniku9@gmail.com" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-100 shadow-sm">
              <Mail size={24} />
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
              <p className="font-semibold text-brand-900 group-hover:text-blue-600 transition-colors">albionburrniku9@gmail.com</p>
            </div>
          </a>
          
          <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
          
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/albion-burrniku/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-50 text-slate-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:shadow-lg border border-slate-200" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/albionburrniku9" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-50 text-slate-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:shadow-lg border border-slate-200" aria-label="GitHub">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
