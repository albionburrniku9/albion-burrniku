import React from 'react';
import { Target, Search, Server, Gauge } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 absolute-center"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="section-title">About Me</h2>
        
        <div className="bg-slate-50/80 backdrop-blur border border-slate-100/50 p-8 md:p-12 rounded-3xl shadow-sm text-center md:text-lg text-slate-600 leading-relaxed mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>

          <p className="mb-6 font-medium text-slate-700">
            I am a QA Engineer with a deep passion for automation, ensuring top-notch software quality, and driving reliable delivery.
          </p>
          <p>
            With over 3 years of hands-on experience, I specialize in comprehensive quality assurance across full-stack applications. From thorough manual testing and API verification to building robust automation frameworks using Selenium and Cypress, I tackle complex challenges head-on. My focus extends to SQL and data validation, ensuring that data integrity is maintained throughout the application lifecycle.
          </p>
        </div>

        {/* Highlights grid to make it cleaner than plain text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {[
            {
              icon: <Search className="text-blue-500 mb-4" size={32} />,
              title: "QA & Web Testing",
              desc: "Deep expertise in exploratory, functional, and regression testing across modern web platforms."
            },
            {
              icon: <Gauge className="text-blue-500 mb-4" size={32} />,
              title: "Automation Focus",
              desc: "Building scalable test scripts using Cypress, Playwright, and Selenium to accelerate delivery."
            },
            {
              icon: <Server className="text-blue-500 mb-4" size={32} />,
              title: "API & Data Validation",
              desc: "Verifying endpoints with Postman and ensuring data integrity through rigorous SQL checks."
            },
            {
              icon: <Target className="text-blue-500 mb-4" size={32} />,
              title: "Quality Mindset",
              desc: "Collaborating with cross-functional teams to integrate a quality-first approach into the SDLC."
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-100 hover:shadow-md transition-all group">
              <div className="p-3 bg-slate-50 rounded-xl inline-block mb-4 group-hover:bg-blue-50 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
