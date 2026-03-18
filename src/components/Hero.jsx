import React from 'react';
import { Download, ChevronRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl bg-blue-500"></div>
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="rgba(255,255,255,0.02)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/50 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6">
             <CheckCircle2 size={16} className="text-blue-400" />
             Available for new opportunities
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            Hello, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Albion Burrniku</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-blue-200 mb-6">
            QA Engineer | Automation Specialist
          </h2>
          
          <p className="text-blue-100/80 max-w-xl mx-auto lg:mx-0 text-lg mb-10 leading-relaxed font-light">
            I specialize in reliable software, automated testing, and scalable data validation. Ensuring top-notch quality at every step of the development cycle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <a href="#projects" className="px-8 py-3.5 bg-white text-blue-900 font-semibold rounded-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center">
              View Work <ChevronRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-blue-800/40 border border-blue-400/30 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-800/60 hover:border-blue-300/50 backdrop-blur-sm active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center">
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-medium text-blue-200">
            <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> 3+ Years Exp</span>
            <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> Manual & Automation</span>
            <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div> API & Data Validation</span>
          </div>
        </div>

        {/* Profile Image Area */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-3xl transform -translate-y-8 translate-x-8"></div>
            <div className="absolute inset-0 rounded-[2rem] border border-blue-400/20 bg-gradient-to-b from-blue-800/40 to-transparent flex items-center justify-center overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 backdrop-blur-sm">
              <img 
                src="https://github.com/albionburrniku9.png" 
                alt="Albion Burrniku" 
                className="w-full h-full object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500 scale-110"
              />
            </div>
            {/* Minimal Decorators */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-xl shadow-xl flex items-center justify-center rotate-12">
              <div className="w-6 h-6 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-inner">QA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
