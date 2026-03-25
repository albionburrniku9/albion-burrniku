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
            I am an Automation & QA Engineer focused on building efficient workflows, system integrations, and data-driven processes. I specialize in working with APIs, automation frameworks, and data validation to design scalable and reliable solutions.
          </p>
          <p>
            With over 3 years of hands-on experience, I work across full-stack systems, focusing on API integrations, automation workflows, and data consistency. My experience includes building automation using Cypress and Playwright, validating complex data flows with SQL, and ensuring seamless interaction between systems. I am actively expanding into automation platforms and AI-driven workflows. </p>
        </div>

        {/* Highlights grid to make it cleaner than plain text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {[
            {
              icon: <Search className="text-blue-500 mb-4" size={32} />,
              title: "Automation Workflows",
              desc: "Designing end-to-end automation processes using APIs, triggers, and system integrations.."
            },
            {
              icon: <Gauge className="text-blue-500 mb-4" size={32} />,
              title: "API Integrations",
              desc: "Connecting systems, validating data flows, and ensuring seamless communication between applications."
            },
            {
              icon: <Server className="text-blue-500 mb-4" size={32} />,
              title: "Data Validation & SQL",
              desc: "Ensuring data integrity through rigorous SQL checks and validation across complex data flows."
            },
            {
              icon: <Target className="text-blue-500 mb-4" size={32} />,
              title: "Quality Automation Engineer",
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
